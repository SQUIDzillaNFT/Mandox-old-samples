import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({component: Component, rest}) => {

  // let connectorId = window.localStorage.setItem("connectorId", connectorId);
  let authUser = JSON.parse(localStorage.getItem('authUser'));
  return authUser ? <Outlet/> : <Navigate to="/login"/>
  // return (
  //   <Route
  //     render={(props) =>
  //       authUser ? (
  //         <Component {...props} />
  //       ) : (
  //         <Navigate to="/login" />
  //       )
  //
  //     }
  //     {...rest}
  //   />
  // );
};
export default PrivateRoute;
