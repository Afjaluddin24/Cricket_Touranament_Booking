import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer"; 
import Loadung from "../../Loadung";

function Team(props) {
  const [isLoading, setIsLoading] = useState(true);
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loadung />;
  }

  return (
    <>
      <section id="top">
        <Header />
        <div className="inner-page-banner">
          <div className="container"></div>
        </div>
        <div className="inner-information-text">
          <div className="container">
            <h3>{props.name}</h3>
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Our Team</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contant" className="contant main-heading team">
        <div className="row">
          <div className="container">
            {/* Static Team Member Cards */}
            <div className="col-md-3 column">
              <div className="card">
                <img
                  className="img-responsive"
                  src="./TempletFiles/images/img-1-2.jpg"
                  alt="John Doe"
                  style={{ width: "100%" }}
                />
                <div className="">
                  <h4>John Doe</h4>
                  <p className="title">Designer</p>
                  <div className="center">
                    <button className="button">Contact</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 column">
              <div className="card">
                <img
                  className="img-responsive"
                  src="./TempletFiles/images/img-1-3.jpg"
                  alt="Mike Ross"
                  style={{ width: "100%" }}
                />
                <div className="">
                  <h4>Mike Ross</h4>
                  <p className="title">Developer</p>
                  <div className="center">
                    <button className="button">Contact</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 column">
              <div className="card">
                <img
                  className="img-responsive"
                  src="./TempletFiles/images/img-1-2.jpg"
                  alt="John Doe"
                  style={{ width: "100%" }}
                />
                <div className="">
                  <h4>John Doe</h4>
                  <p className="title">Designer</p>
                  <div className="center">
                    <button className="button">Contact</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 column">
              <div className="card">
                <img
                  className="img-responsive"
                  src="./TempletFiles/images/img-1-3.jpg"
                  alt="Mike Ross"
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h4>Mike Ross</h4>
                  <p className="title">Developer</p>
                  <div className="center">
                    <button className="button">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Team;
