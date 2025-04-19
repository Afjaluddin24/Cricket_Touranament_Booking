import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";

function Match(props) {
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
              <li className="active">Match</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="dark-section" style={{ backgroundColor: "#999999" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="testimonial-slider">
                <div
                  className="carousel slide"
                  data-ride="carousel"
                  id="quote-carousel"
                >
                  {/* Carousel Slides / Quotes */}
                  <div className="carousel-inner text-center">
                    {/* Quote 1 */}
                    <div className="item active">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-10 col-sm-offset-1">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="col-md-12 text-left">
                                  <span style={{ color: "black"}}>Match No &nbsp; Tournament Name</span>
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team1"
                                  />
                                  <h3 style={{ color: "black"}}>Afjal</h3>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{ color: "black"}}
                                >
                                  VS
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team2"
                                  />
                                  <h3 style={{ color: "black"}}>Afjal</h3>
                                </div>
                              </div>
                            </div>
                            <small>Date24/121/</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* Quote 2 */}
                    <div className="item">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-10 col-sm-offset-1">
                          <div className="col-md-12">
                                <div className="col-md-12 text-left">
                                  <span style={{ color: "black"}}>Match No &nbsp; Tournament Name</span>
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team1"
                                  />
                                  <h3 style={{ color: "black"}}>Afjal</h3>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{ color: "black"}}
                                >
                                  VS
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team2"
                                  />
                                  <h3 style={{ color: "black"}}>Afjal</h3>
                                </div>
                              </div>
                            <small>Someone famous</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    {/* Quote 3 */}
                    <div className="item">
                      <blockquote>
                        <div className="row">
                          <div className="col-sm-10 col-sm-offset-1">
                          <div className="col-md-12">
                                <div className="col-md-12 text-left">
                                  <span style={{ color: "black"}}>Match No &nbsp; Tournament Name</span>
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team1"
                                  />
                                  <h3 style={{ color: "black"}}>Afjal</h3>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{ color: "black"}}
                                >
                                  VS
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team2"
                                  />
                                  <h3 style={{ color: "black"}}>Afjal</h3>
                                </div>
                              </div>
                            <small>Someone famous</small>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                  {/* Bottom Carousel Indicators */}
                  <ol className="carousel-indicators">
                    <li
                      data-target="#quote-carousel"
                      style={{ backgroundColor: "red" }}
                      data-slide-to={0}
                      className="active"
                    ></li>
                    <li
                      data-target="#quote-carousel"
                      style={{ backgroundColor: "red" }}
                      data-slide-to={1}
                    >
                      {" "}
                    </li>
                    <li
                      data-target="#quote-carousel"
                      style={{ backgroundColor: "red" }}
                      data-slide-to={2}
                    ></li>
                  </ol>
                  {/* Carousel Buttons Next/Prev */}
                  <a
                    data-slide="prev"
                    href="#quote-carousel"
                    className="left carousel-control"
                  >
                    <i className="fa fa-chevron-left" />
                  </a>
                  <a
                    data-slide="next"
                    href="#quote-carousel"
                    className="right carousel-control"
                  >
                    <i className="fa fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="contant" className="contant">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="news-post-holder">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <div className="news-post-widget">
                    <img
                      className="img-responsive"
                      src="./TempletFiles/images/img-01_002.jpg"
                      alt=""
                    />
                    <div className="news-post-detail">
                      <span className="date">20 march 2016</span>
                      <h2>
                        <a href="blog-detail.html">
                          Free play to ground in anywhere
                        </a>
                      </h2>
                      <p>
                        Just hours after that his grandma had died, Angel Di
                        Maria imagined how she might react if he didn't play
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <div className="news-post-widget">
                    <img
                      className="img-responsive"
                      src="./TempletFiles/images/img-01_002.jpg"
                      alt=""
                    />
                    <div className="news-post-detail">
                      <span className="date">20 march 2016</span>
                      <h2>
                        <a href="blog-detail.html">
                          Free play to ground in anywhere
                        </a>
                      </h2>
                      <p>
                        Just hours after that his grandma had died, Angel Di
                        Maria imagined how she might react if he didn't play
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <div className="news-post-widget">
                    <img
                      className="img-responsive"
                      src="./TempletFiles/images/img-01_002.jpg"
                      alt=""
                    />
                    <div className="news-post-detail">
                      <span className="date">20 march 2016</span>
                      <h2>
                        <a href="blog-detail.html">
                          Free play to ground in anywhere
                        </a>
                      </h2>
                      <p>
                        Just hours after that his grandma had died, Angel Di
                        Maria imagined how she might react if he didn't play
                      </p>
                    </div>
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
export default Match;
