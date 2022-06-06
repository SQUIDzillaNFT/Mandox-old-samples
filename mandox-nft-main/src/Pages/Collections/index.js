import React, {useEffect, useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from 'axios';
import {useChain, useMoralis, useMoralisQuery, useWeb3ExecuteFunction} from "react-moralis";
import ReactPaginate from 'react-paginate';

function Collection() {
  const {addr, created} = useParams();
  console.log('addr, created', addr, created);
  const navigate = useNavigate();
  const fallbackImg =
    "data:image/png;base64,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";

  const [currentPage, setCurrentPage] = useState(0);
  const [pageCollections, setPageCollections] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const pagePercount = 6;
  // const { chainId } = useChain();
  const chainId = "0x4";

  // const NFTCollections = getCollectionsByChain(chainId);
  const [NFTCollections, setNFTCollections] = useState([]);
  const [AllCollections, setAllCollections] = useState([]);

  const {Moralis, account} = useMoralis();

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  }

  const handleCollectionClick = (collection) => {
    console.log('collection', collection)
    if (collection.created == 0) {
      navigate(`/collection/${collection.addrs}/0`)
    } else {
      navigate(`/collection/${collection.id}/1`);
    }
  }

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/all`)
    .then(res => {
      let collections = res.data.collections.map((item) => {
        return {
          id: item._id,
          image: item.image ? `/${item.image}` : null,
          name: item.title,
          addrs: item.collectionAddr,
          created: item.created,
          walletAddr: item.walletAddr
        }
      });
      setNFTCollections(collections);
    });
  }, []);

  useEffect(() => {
    async function fetchAPIData() {
      if (!!NFTCollections) {
        for (const collection of NFTCollections) {
          if (collection.addrs == '' || collection.created == 1) {
            try {
              const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/items/wallet`, {
                params: {
                  walletAddr: collection.walletAddr,
                }
              });
              collection.itemCount = res.data.length;
            } catch(ex) {
              console.log(ex);
            }
          } else {
            const options = {address: collection.addrs, chain: chainId };
            try {
              const result = await Moralis.Web3API.token.getAllTokenIds(options);
              collection.itemCount = result.result.length;
              // NFTs = [...NFTs, ...result.result];
              // promises.push(result);
            } catch (e) {
              console.log(e);
            }
          }
        }

        setAllCollections(NFTCollections);

        setPageCount(Math.ceil(NFTCollections.length / pagePercount));

        let _pageCollections = [];

        for (let i = 0; i < pagePercount; i++) {
          if (NFTCollections[i + currentPage * pagePercount]) {
            _pageCollections.push(NFTCollections[i + currentPage * pagePercount]);
          }
        }
      
        setPageCollections(_pageCollections);

      }
    }

    fetchAPIData();
  }, [NFTCollections]);

  useEffect(async () => {
    let _pageCollections = [];
    for (let i = 0; i < pagePercount; i++) {
      if (AllCollections[i + currentPage * pagePercount]) {
        _pageCollections.push(AllCollections[i + currentPage * pagePercount]);
      }
    }

    setPageCollections(_pageCollections);
  }, [currentPage]);

  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Collections</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><a href="/">Home</a></li>
                    <li>Collections</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="browse-product-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-12 col-md-12 col-xl-12">
              <Link className="theme-btn" to="/add-collection">Add Collection</Link>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
            </div> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="browse-product-box">
                <div className="tab-content">
                  <div className="tab-pane active" id="view-store-grid" role="tabpanel">
                    <div className="row">
                      {
                        pageCollections.map((collection, index) => {
                          return (
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12 top-selling-store collection-card" key={index}>
                              <div className="item-group" onClick={() => handleCollectionClick(collection)}>
                                <div className="item-group-content">
                                  <div className="item-group-avtar">
                                    <img src={collection.image ? `${process.env.REACT_APP_SERVER_URL}/api/${collection.image}` : fallbackImg} alt={collection.name}/>
                                  </div>
                                  <div className="selling-item-info">
                                    <h3 className="theme-title"><a>{collection.name}</a></h3>
                                    <p className="theme-description">{collection.itemCount} items</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>

                  </div>
                </div>
                {
                  pageCount > 1 &&
                  (
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="pagination-box text-center">
                          <ReactPaginate
                            previousLabel="PREV"
                            nextLabel="NEXT"
                            breakLabel="..."
                            breakClassName="break-me"
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                          />
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collection;
