import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
import { getData } from "../../APIConfig/ConfigAPI";
import { Link, useParams } from "react-router-dom";

const Match = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [MatchSedule, setMatchSedule] = useState([]);

  const { TournamentId } = useParams();

  const MatchDetals = async () => {
    try {
      const url = TournamentId
        ? `CricketMatch/DisplayMatch/${TournamentId}`
        : "CricketMatch/DisplayMatch"; // Fetch data for a specific match or all matches
      const response = await getData(url);
      if (response.status === "Ok") {
        setMatchSedule(response.result);
      } else {
        console.log("Error", response.result);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false); // Stop loading when the API call finishes
    }
  };

  useEffect(() => {
    console.log("TournamentId", TournamentId)
    MatchDetals();
  }, [TournamentId]);

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
                    {/* Quote Items */}
                    {MatchSedule.map((o, index) => (
                      <div key={o.cricketMatchesId} className="item">
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
                                    <h3 style={{ color: "black" }}>
                                      {o.teamA}
                                    </h3>
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
                                    <h3 style={{ color: "black" }}>
                                      {o.teamB}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <small>{o.matchDate}</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    ))}
                  </div>
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
                {MatchSedule.map((o) => {
                  const matchDateObj = new Date(o.matchDate);
                  const matchDate = `${String(matchDateObj.getDate()).padStart(
                    2,
                    "0"
                  )}/${String(matchDateObj.getMonth() + 1).padStart(
                    2,
                    "0"
                  )}/${matchDateObj.getFullYear()}`;

                  return (
                    <Link to={`/MoreMatch/${o.tournamentId}`} key={o.cricketMatchesId}>
                      <div className="col-lg-4 col-sm-6 col-xs-12">
                        <div
                          className="news-post-widget"
                          style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "20px",
                            backgroundColor: "#f0f0f0",
                            marginBottom: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <div className="news-post-detail">
                            <h2 style={{ marginTop: "10px", fontSize: "22px" }}>
                              <b style={{ color: "#3F51B5" }}>{o.teamA}</b> vs{" "}
                              <b style={{ color: "#E91E63" }}>{o.teamB}</b>
                            </h2>
                            <p
                              style={{
                                display: "block",
                                whiteSpace: "normal",
                                margin: "10px 0",
                                fontSize: "16px",
                              }}
                            >
                              <strong style={{ color: "#009688" }}>
                                Venue:&nbsp;
                                <span style={{ color: "#000" }}>{o.venue}</span>
                              </strong>
                            </p>
                            <p
                              style={{
                                display: "block",
                                whiteSpace: "normal",
                                margin: "10px 0",
                                fontSize: "16px",
                              }}
                            >
                              <strong style={{ color: "#607D8B" }}>
                                Tournament:&nbsp;
                                <span style={{ color: "#000" }}>
                                  {o.tournamentName}
                                  <br />
                                  Organized by {o.fullName}
                                </span>{" "}
                              </strong>
                            </p>
                            <span
                              className="date"
                              style={{
                                color: "#FF5722",
                                fontWeight: "bold",
                                fontSize: "18px",
                                display: "block",
                                marginTop: "12px",
                              }}
                            >
                              {matchDate}
                            </span>
                            <p
                              style={{
                                marginTop: "10px",
                                fontSize: "14px",
                                color: "#555",
                              }}
                            >
                              {o.note}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
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
