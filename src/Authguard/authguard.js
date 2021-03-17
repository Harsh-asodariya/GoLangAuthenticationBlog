import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = (props) => {
  let token=localStorage.getItem('token');  
  console.log(token);
  return (
    <Route
      path={props.path}
      render={(data) =>
         token!==null ? (
          <props.component></props.component>
        ) : (
          alert("Please Logged in First"),
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    />
  );
};

export default AuthRoute;