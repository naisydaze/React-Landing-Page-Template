import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="./img/logo/Navbar-logo.png"
              alt="SY Ideation Works Logo"
              className="navbar-brand-img"
              // style={{ height: "200px", verticalAlign: "left", marginTop: "-93px" ,  marginInline: "-500px" }} // Adjust height as needed
              style={{ height: "20px", width: "20px", marginRight:"auto" }} // Adjust height as needed
            />
          </a> */}
          <nav className="navbar">
            <a className="navbar-brand page-scroll" href="#page-top">
              <img
                src="./img/logo/Navbar-logo.png"
                alt="SY Ideation Works Logo"
                className="navbar-brand-img"
                style={{ height: "225px", width: "auto" }} // scales better than px
              />
            </a>
          </nav>
          {/* <a className="navbar-brand page-scroll" href="#page-top">
              <span className="sy-brand">SY</span> 
              <span className="ideation-brand"> Ideation Works</span>
          </a>{" "} */}
        </div>


      </div>
    </nav>
  );
};