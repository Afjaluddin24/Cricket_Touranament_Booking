import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
import { getData } from "../../APIConfig/ConfigAPI";

const Match = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [MatchSedule, setMatchSedule] = useState([]);

  const MatchDetals = async () => {
    try {
      const response = await getData("CricketMatch/DisplayMatch");
      if (response.status == "Ok") {
        setMatchSedule(response.result);
        console.log("Data", response.result);
      } else {
        console.log("Error", response.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    MatchDetals();
  }, []);
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
                                  <span style={{ color: "black" }}>
                                    Match No &nbsp; Tournament Name
                                  </span>
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team1"
                                  />
                                  <h3 style={{ color: "black" }}>Afjal</h3>
                                </div>
                                <div
                                  className="col-md-4"
                                  style={{ color: "black" }}
                                >
                                  VS
                                </div>
                                <div className="col-md-4">
                                  <img
                                    className="img-responsive"
                                    src="./TempletFiles/images/img-01_002.jpg"
                                    alt="Team2"
                                  />
                                  <h3 style={{ color: "black" }}>Afjal</h3>
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
                                <span style={{ color: "black" }}>
                                  Match No &nbsp; Tournament Name
                                </span>
                              </div>
                              <div className="col-md-4">
                                <img
                                  className="img-responsive"
                                  src="./TempletFiles/images/img-01_002.jpg"
                                  alt="Team1"
                                />
                                <h3 style={{ color: "black" }}>Afjal</h3>
                              </div>
                              <div
                                className="col-md-4"
                                style={{ color: "black" }}
                              >
                                VS
                              </div>
                              <div className="col-md-4">
                                <img
                                  className="img-responsive"
                                  src="./TempletFiles/images/img-01_002.jpg"
                                  alt="Team2"
                                />
                                <h3 style={{ color: "black" }}>Afjal</h3>
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
                                <span style={{ color: "black" }}>
                                  Match No &nbsp; Tournament Name
                                </span>
                              </div>
                              <div className="col-md-4">
                                <img
                                  className="img-responsive"
                                  src="./TempletFiles/images/img-01_002.jpg"
                                  alt="Team1"
                                />
                                <h3 style={{ color: "black" }}>Afjal</h3>
                              </div>
                              <div
                                className="col-md-4"
                                style={{ color: "black" }}
                              >
                                VS
                              </div>
                              <div className="col-md-4">
                                <img
                                  className="img-responsive"
                                  src="./TempletFiles/images/img-01_002.jpg"
                                  alt="Team2"
                                />
                                <h3 style={{ color: "black" }}>Afjal</h3>
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
                {MatchSedule.map((o, index) => {
                  const matchDate = new Date(o.matchDate).toLocaleDateString();

                  return (
                    <div key={index} className="col-lg-4 col-sm-6 col-xs-12">
                      <div className="news-post-widget">
                        <img
                          className="img-responsive"
                          src={`http://192.168.210.121:12425/Logo/${o.logo}`}
                          style={{height:"250px"}}
                          alt="match"
                        />
                        <div className="news-post-detail">
                          <span className="date">{matchDate}</span>
                          <h2>
                           <b style={{fontSize:"20px"}}>{o.teamA}</b> vs <b style={{fontSize:"20px"}}>{o.teamB}</b>
                          </h2>
                          <p
                            style={{
                              display: "block",
                              whiteSpace: "normal",
                              margin: "4px 0",
                            }}
                          >
                            <strong>Venue:&nbsp;<p>{o.venue}</p></strong> 
                          </p>
                          <p
                            style={{
                              display: "block",
                              whiteSpace: "normal",
                              margin: "4px 0",
                            }}
                          >
                            <strong>Tournament:&nbsp;<p>{o.tournamentName}</p></strong>
                          </p>
                          <p
                            style={{
                              display: "block",
                              whiteSpace: "normal",
                              margin: "4px 0",
                            }}
                          >
                            <strong>Organized by:&nbsp;<p>{o.fullName} (
                              {o.cubName})</p></strong> 
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Match;
