import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="header-box">
                {/* <h1 className="header-title">
                      <span className="sy-title">SY</span>
                      <span className="ideationworks-title"> Ideation Works</span>
                </h1> */}
                <p>
                  {props.data && props.data.paragraph
                    ? props.data.paragraph.map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          {idx < props.data.paragraph.length - 1 && <br />}
                        </React.Fragment>
                      ))
                    : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};