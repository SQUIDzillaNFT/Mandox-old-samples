import './App.css';
import SitesRoutes from "./routes";
import ScrollTop from "./Component/ScrollTop";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App shadow-dark">
      <SitesRoutes />
      <ToastContainer autoClose={5000} hideProgressBar/>
      <ScrollTop />
    </div>
  );
}

export default App;
