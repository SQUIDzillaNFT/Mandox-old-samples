import './App.css';
import "antd/dist/antd.css";
import SitesRoutes from "./routes";
import ScrollTop from "./Component/ScrollTop";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";

function App() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div className="App shadow-dark">
      <SitesRoutes />
      <ToastContainer autoClose={5000} hideProgressBar/>
      <ScrollTop />
    </div>
  );
}

export default App;
