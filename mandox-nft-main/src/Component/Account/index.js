import {useMoralis} from "react-moralis";
import axios from "axios";
import { Modal } from "antd";
import { useState, useRef, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
// import Address from "../Address";
// import {DisconnectOutlined, SelectOutlined} from "@ant-design/icons";
// import {getExplorer} from "../../Helpers/networks";
import Text from "antd/lib/typography/Text";
import {connectors} from "./config";
import "./style.css";
import { toast } from "react-toastify";

const styles = {
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
};

function Account({user}) {
  const {authenticate, isAuthenticated, account, logout, Moralis} = useMoralis();
  const profileMenu = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  const navigate = useNavigate();
  const [avataPath, setAvatarPath] = useState('');

  console.log("isAuthenticated00", isAuthenticated);
  console.log("account00", account);

  useEffect(async () => {
    if (account) {
      try {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user/`, {
          params: {
            walletAddr: account,
          }
        }).then(res => {
          if (res.data.user) {
            setAvatarPath(res.data.user.avatar);
          }
        })
      } catch(ex) {
        console.log(ex);
      }
    }
  }, [account]);

  useEffect(() => {
    console.log('$$$user$$$', user);
    if (user.avatar) {
      setAvatarPath(user.avatar);
    }
  }, [user])

  const handleConnectWalletBtnClick = async () => {

    await Moralis.enableWeb3();
    const chainId = await Moralis.getChainId();
    console.log('ChainIdppp', chainId);
    if (chainId != 0x4) {
      toast.error("please change the network to rinkeby");
      return;
    }
    setIsAuthModalVisible(true)
  }
  
  const connect = async (connectorId) => {
    try {
      await authenticate({provider: connectorId});
      window.localStorage.setItem("connectorId", connectorId);
      setIsAuthModalVisible(false);
    } catch (e) {
      console.error(e);
    }
  }
  

  const disconnect = async () => {
    await logout();
    window.localStorage.removeItem("connectorId");
    setIsModalVisible(false);
    navigate('/');
  }

  const toggleMenu = () => {
    profileMenu.current.style.display = "block";
  }

  const hiddenMenu = () => {
    profileMenu.current.style.display = "none";
  }

  if (!isAuthenticated || !account) {
    return (
      <>
        <a onClick={() => handleConnectWalletBtnClick()} className="theme-btn">Connect Wallet</a>
        <Modal
          visible={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "15px",
            fontSize: "17px",
            fontWeight: "500",
          }}
          style={{fontSize: "16px", fontWeight: "500"}}
          width="340px"
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            Connect Wallet
          </div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            {connectors.map(({title, icon, connectorId}, key) => (
              <div
                style={styles.connector}
                key={key}
                onClick={() => connect(connectorId)}
              >
                <img src={icon} alt={title} style={styles.icon} />
                <Text style={{fontSize: "14px"}}>{title}</Text>
              </div>
            ))}
          </div>
        </Modal>
      </>
    );
  }

  return (
    <>
      <div className="nav-item single-menu">
        <h3><a onClick={toggleMenu}>
          <span>
          { (() => {
              if (avataPath) {
                return (<img src={process.env.REACT_APP_SERVER_URL + '/' + avataPath} alt=""/>);
              } else {
                return <img src="/assets/images/avatar.gif" alt=""/>
              }
            })()
          }
          </span>
        </a></h3>
        <div className="profile-dropdown" ref={profileMenu}>
          <ul className="user-links">
            <li>
              <Link onClick={hiddenMenu} to="/settings">Profile</Link>
            </li>
            <li>
              <Link onClick={hiddenMenu} to="/faq">Help</Link>
            </li>
            {
              account !== null && (
                <li>
                  <a onClick={disconnect}>Disconnect Wallet</a>
                </li>
              )
            }
            {/* <li><a href='/' className="user-logout">Logout</a></li> */}
          </ul>
        </div>
      </div>
      {/* <div className="account" onClick={() => setIsModalVisible(true)}>
        <p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(account, 6)}
        </p>
        <Blockie currentWallet scale={3} />
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={disconnect}
        >
          Disconnect Wallet
        </Button>
      </Modal> */}
    </>
  );
}

export default Account;
