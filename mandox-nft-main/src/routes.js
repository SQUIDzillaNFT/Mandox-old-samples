import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollTopContainer from "./Component/ScrollTopContainer";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import Collaborations from "./Pages/Collaborations";
import Footer from "./Component/Footer";
import Browse from "./Pages/Browse";
import MinItem from "./Pages/MinItem";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Discover from "./Pages/Discover";
import Faq from "./Pages/Faq";
import GoPro from "./Pages/GoPro";
import Vote from "./Pages/Vote";
import ForgotPassword from "./Pages/ForgotPassword";
import BuyDetail from "./Pages/BuyDetail";
import CreateStore from "./Pages/CreateStore";
import Gasless from "./Pages/Gasless";
import TermsOfUse from "./Pages/TermsOfUse";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Dashboard from "./Pages/Dashboard";
import MyEarnings from "./Pages/MyEarnings";
import MyWallet from "./Pages/MyWallet";
import MyOrders from "./Pages/MyOrders";
import WonAuctions from "./Pages/WonAuctions";
import BiddingHistory from "./Pages/BiddingHistory";
import Reviews from "./Component/Reviews";
import ItemList from "./Pages/ItemList";
import CurrentItemList from "./Pages/CurrentItemList";
import SoldItem from "./Pages/SoldItem";
import History from "./Pages/History";
import Settings from "./Pages/Settings";
import Collection from "./Pages/Collection";
import Collections from "./Pages/Collections";
import AddCollection from "./Pages/AddCollection";
import PrivateRoute from "./Component/PrivateRoute";


function SitesRoutes(props) {
  const [nft, setNFT] = useState([]);
  const [buyType, setBuyType] = useState(1); // 0: buy 1: bid
  const [createdNFT, setCreatedNFT] = useState(0);

  return (
    <BrowserRouter>
      <ScrollTopContainer/>
      <Header/>
      <Routes>
      <Route path="/" element={<Home setNFT={setNFT} setBuyType={setBuyType} setCreatedNFT={setCreatedNFT} />}/>
        <Route path="collaborations" element={<Collaborations/>}/>
        <Route path="browse" element={<Browse setNFT={setNFT} setBuyType={setBuyType} setCreatedNFT={setCreatedNFT} />}/>
        <Route path="/collection/:addr/:created" element={<Collection setNFT={setNFT} setBuyType={setBuyType} setCreatedNFT={setCreatedNFT} />}/>
        <Route path="/collections" element={<Collections />} />
        <Route path="/add-collection" element={<AddCollection />} />
        <Route path="min-item" element={<MinItem/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        {/* <Route path="/register" element={<Register/>}/> */}
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/go-pro" element={<GoPro/>}/>
        <Route path="/vote" element={<Vote/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/buy-detail" element={<BuyDetail nft={nft} buyType={buyType} createdNFT={createdNFT}/>}/>
        <Route path="/create-store" element={<CreateStore/>}/>
        <Route path="/gasless" element={<Gasless/>}/>
        <Route path="/terms-of-use" element={<TermsOfUse/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/my-wallet" element={<MyWallet/>}/>
        <Route path="/my-earnings" element={<MyEarnings/>}/>
        <Route path="/my-orders" element={<MyOrders/>}/>
        <Route path="/won-auctions" element={<WonAuctions/>}/>
        <Route path="/bidding-history" element={<BiddingHistory/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/item-list" element={<ItemList/>}/>
        <Route path="/current-item-list" element={<CurrentItemList/>}/>
        <Route path="/sold-item-list" element={<SoldItem/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default SitesRoutes;

