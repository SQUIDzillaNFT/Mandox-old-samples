import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';
import { Provider } from 'react-redux';

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <Provider store={store}>
        <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
          <MoralisDappProvider>
          <App />
          </MoralisDappProvider>
        </MoralisProvider>
      </Provider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        Application Error
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
    <Application />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
