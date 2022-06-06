import React, {createFactory, useEffect, useState} from "react";
import {useMoralis, useNFTBalances} from "react-moralis";
import axios from "axios";
// import NftCard from "../Component/NftCard";
import {Tooltip, Modal, Input, Spin, Button, Skeleton, Tabs, DatePicker } from "antd";
import {
  FileSearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
// import {getExplorer} from "../Helpers/networks";
// import AddressInput from "./AddressInput";
// import {useVerifyMetadata} from "../Hooks/useVerifyMetadata";
import {useMoralisDapp} from "../providers/MoralisDappProvider/MoralisDappProvider";
import {useWeb3ExecuteFunction} from "react-moralis";

const { TabPane } = Tabs;

const styles = {
  NFTs: {
    display: "flex",
    flexWrap: "wrap",
    WebkitBoxPack: "start",
    justifyContent: "flex-start",
    margin: "0 auto",
    maxWidth: "1000px",
    width: "100%",
  },
};

function NFTBalance() {
  const fallbackImg =
    "data:image/png;base64,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";
  const {data: NFTBalances} = useNFTBalances();
  const [createdNFTs, setCreatedNFTs] = useState([]);
  const {account} = useMoralis();
  const [visible1, setVisibility1] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [nftToSend, setNftToSend] = useState(null);
  // const [isPending, setIsPending] = useState(false);
  // const {verifyMetadata} = useVerifyMetadata();
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const {marketAddress, contractABI} = useMoralisDapp();
  const contractProcessor = useWeb3ExecuteFunction();
  const contractABIJson = JSON.parse(contractABI);
  const listItemFunction = "offerSell";
  const [dueDate, setDueDate] = useState(null);
  const [duration, setDuration] = useState(0);
  const [tabKey, setTabKey] = useState("1");

  useEffect(async () => {
    if (account) {
      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/items/wallet`, {
          params: {
            walletAddr: account,
          }
        });
        setCreatedNFTs(res.data);
      } catch(ex) {
        console.log(ex);
      }
    }
  }, [account]);

  async function list(nft) {
    
    setLoading(true);
    const p = price * ("1e" + 18);
    const ops = {
      contractAddress: marketAddress,
      functionName: listItemFunction,
      abi: contractABIJson,
      params: {
        nft: nft.token_address,
        tokenId: nft.token_id,
        method: parseInt(tabKey) - 1,
        price: String(p),
        duration: duration
        // duration: 600
      },
    };
    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        console.log("success");
        setLoading(false);
        setVisibility2(false);
        // addItemImage();
        succList();
      },
      onError: (error) => {
        setLoading(false);
        failList();
      },
    });
  }


  async function approveAll(nft) {
    setLoading(true);
    const ops = {
      contractAddress: nft.token_address,
      functionName: "setApprovalForAll",
      abi: [{
        "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
      }],
      params: {
        operator: marketAddress,
        approved: true
      },
    };

    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        console.log("Approval Received");
        setLoading(false);
        setVisibility1(false);
        succApprove();
      },
      onError: (error) => {
        setLoading(false);
        failApprove();
      },
    });
  }

  async function isApprovedForAll(nft) {
    const ops = {
      contractAddress: nft.token_address,
      functionName: "isApprovedForAll",
      abi: [{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],
      params: {
      owner: account,
      operator: marketAddress
      },
    };
    let flag = false;
    await contractProcessor.fetch({
      params: ops,
      onSuccess: (result) => {
      // setApproved(result);
      flag = result;
      },
      onError: (error) => {
      // setApproved(false);
      flag = false;
      },
    });
    return flag;
  }

  const handleSellClick = async (nft) => {
    setNftToSend(nft);
    let flag = await isApprovedForAll(nft);
    if (flag) setVisibility2(true);
    else setVisibility1(true);
  };

  function succList() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Success!",
      content: `Your NFT was listed on the marketplace`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  function succApprove() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Success!",
      content: `Approval is now set, you may list your NFT`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  function failList() {
    let secondsToGo = 5;
    const modal = Modal.error({
      title: "Error!",
      content: `There was a problem listing your NFT`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  function failApprove() {
    let secondsToGo = 5;
    const modal = Modal.error({
      title: "Error!",
      content: `There was a problem with setting approval`,
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  function onChangeDueDate(date, dateString) {
    setDueDate(date);
    let from = Math.floor(new Date().getTime() / 1000);
    let to = Math.floor(date._d.getTime() / 1000);
    setDuration(to - from);
  }

  function tabCallback(key) {
    setTabKey(key);
  }

  console.log("NFTBalances000", NFTBalances);
  return (
    <div style={{padding: "15px", maxWidth: "1030px", width: "100%"}}>
      <div style={styles.NFTs}>
        <Skeleton loading={!NFTBalances?.result}>
          {NFTBalances?.result &&
          NFTBalances.result.map((nft, index) => {
            return (
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12" key={index}>
                <div className="nft-items">
                  <div className="nft-items-media nft-items-media-dark">
                    <a><img
                      src={nft.metadata ? nft.metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/') : fallbackImg}
                      alt=""/></a>
                  </div>
                  <div className="nft-items-authore nft-items-authore-dark clearfix">
                    <Tooltip title="View On Blockexplorer">
                      <FileSearchOutlined
                        // onClick={() =>
                        //   window.open(
                        //     `${getExplorer(chainId)}address/${nft.token_address}`,
                        //     "_blank"
                        //   )
                        // }
                      />

                    </Tooltip>,
                    <Tooltip title="List NFT for sale">
                      <ShoppingCartOutlined onClick={() => handleSellClick(nft)}/>
                    </Tooltip>
                    <div className="nft-items-info-dark">
                      <h3 className="theme-title"><a>{nft.name}</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {
          createdNFTs.map((nft, index) => {
            if (nft.status === 0) {
              return (
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12" key={index}>
                  <div className="nft-items">
                    <div className="nft-items-media nft-items-media-dark">
                      <a><img
                        src={'/' + nft.image}
                        alt=""/></a>
                    </div>
                    <div className="nft-items-authore nft-items-authore-dark clearfix">
                      <Tooltip title="View On Blockexplorer">
                        <FileSearchOutlined
                          // onClick={() =>
                          //   window.open(
                          //     `${getExplorer(chainId)}address/${nft.token_address}`,
                          //     "_blank"
                          //   )
                          // }
                        />
  
                      </Tooltip>,
                      <Tooltip title="List NFT for sale">
                        <ShoppingCartOutlined onClick={() => handleSellClick(nft)}/>
                      </Tooltip>
                      <div className="nft-items-info-dark">
                        <h3 className="theme-title"><a>{nft.title}</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Skeleton>
      </div>
      <Modal
        title='Approve to list NFT in the market'
        visible={visible1}
        onCancel={() => setVisibility1(false)}
        onOk={() => () => approveAll(nftToSend)}
        okText="List"
        footer={[
          <Button onClick={() => setVisibility1(false)}>
            Cancel
          </Button>,
          <Button onClick={() => approveAll(nftToSend)} type="primary">
            Approve
          </Button>
        ]}
      >
        <Spin spinning={loading}>
          <img
            src={`${nftToSend?.image}`}
            style={{
              width: "250px",
              margin: "auto",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
            alt=""
          />
        </Spin>
      </Modal>
      <Modal
        title={`List ${nftToSend?.name} #${nftToSend?.token_id} For Sale`}
        visible={visible2}
        onCancel={() => setVisibility2(false)}
        onOk={() => list(nftToSend)}
        okText="List"
        footer={[
          <Button onClick={() => setVisibility2(false)}>
            Cancel
          </Button>,
          <Button onClick={() => list(nftToSend)} type="primary">
            List
          </Button>
        ]}
      >
        <Spin spinning={loading}>
          <img
            src={`${nftToSend?.image}`}
            style={{
              width: "250px",
              margin: "auto",
              borderRadius: "10px",
              marginBottom: "15px",
            }}
            alt=""
          />
          {/* <Input
            autoFocus
            placeholder="Listing Price in the Market"
            onChange={(e) => setPrice(e.target.value)}
          /> */}
          <Tabs defaultActiveKey={tabKey} onChange={tabCallback}>
            <TabPane tab="Fixed price" key="1">
              <Input
                autoFocus
                placeholder="Amount"
                onChange={(e) => setPrice(e.target.value)}
              />
            </TabPane>
            <TabPane tab="Timed Auction" key="2">
              <Input
                autoFocus
                placeholder="Amount"
                onChange={(e) => setPrice(e.target.value)}
                style={{marginBottom: "16px"
              }}
              />
              <DatePicker onChange={onChangeDueDate} value={dueDate}/>
            </TabPane>
          </Tabs>
        </Spin>
      </Modal>
    </div>
  );
}

export default NFTBalance;
