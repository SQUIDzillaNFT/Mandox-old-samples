import React, {useEffect, useState} from "react";
import {useMoralis} from "react-moralis";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

function AddCollection() {
    const [contractAddr, setContractAddr] = useState(null);
    const {Moralis} = useMoralis();
    const chainId = "0x4";
    const navigate = useNavigate();
    const importCollection = async() => {
        const options = {
            address: contractAddr,
            chain: chainId,
        };
        let metadataResult = await Moralis.Web3API.token.getNFTMetadata(options);
        console.log('metadataResult', metadataResult);
        // let ownerResult = await Moralis.Web3API.token.getNFTOwners(options);

        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/collection/create`, {
            title: metadataResult.name,
            collectionAddr: contractAddr,
            created: 0
        });

        navigate(`/collections`);
    }

    return (
        <div>
            <section className="bradcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="bradcrumb-main">
                                <div className="bradcrumb-title">
                                    <h1>Add Collection</h1>
                                </div>
                                <div className="bradcrumb-right clearfix">
                                    <ul className="clearfix">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Add Collection</li>
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
                            <div className="theme-input-box">
                                <label>Contract Address</label>
                                <input className="theme-input" type="text" name="listing title" onChange={(e) => setContractAddr(e.target.value)} />
                            </div>
                            <a className="theme-btn mt-3" onClick={() => importCollection()}>Import Collection</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddCollection;