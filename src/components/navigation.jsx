import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">

        </div>

      </div>
      {/* <div className="container-fluid"> */}
      <div className="center-navbar-logo">
          <a className="navbar-brand" href="#page-top">
            <img
              // src="./img/logo/Navbar-logo.png"
              src="./img/logo/PNG-3.png"
              alt="SY Ideation Works Logo"
              className="navbar-brand-img"
              // align="center"
              // style={{ height: "100px", width: "auto" }} // Adjust size as needed
            />
          </a>          
      </div>      
    </nav>
  );
};