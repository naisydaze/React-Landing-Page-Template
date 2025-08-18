import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">

        </div>

      </div>
      <div className="container-fluid">
          <a className="navbar-brand" href="#page-top">
            <img
              // src="./img/logo/Navbar-logo.png"
              src="./img/logo/PNG-3.png"
              alt="SY Ideation Works Logo"
              className="navbar-brand-img"
              // style={{ height: "250px", width: "auto" }} // scales better than px
            />
          </a>          
      </div>      
    </nav>
  );
};