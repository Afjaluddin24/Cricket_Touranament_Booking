import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
import { getData } from "../../APIConfig/ConfigAPI";
import { Link, useParams } from "react-router-dom";

const MoreMatch = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [MatchSedule, setMatchSedule] = useState([]);
  const { TournamentId } = useParams();

  const [clunName,setClunName] = useState("")

  // Function to fetch match details
  const MatchDetals = async () => {
    try {
      const response = await getData("CricketMatch/MoreMatch/" + TournamentId);
      if (response.status === "Ok") {
        setMatchSedule(response.result);
        setClunName(response.result.clunName);
      } else {
        console.log("Error", response.result);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false); // Stop loading once data is fetched or in case of an error
    }
  };

  // Fetch match details once TournamentId is available
  useEffect(() => {
    if (TournamentId) {
      MatchDetals();
    }
  }, [TournamentId]);

  // Return loading spinner if data is still being fetched
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
                <Link to="/">Home</Link>
              </li>
              <li className="active">Match</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contant" className="contant">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="news-post-holder">
                {MatchSedule.map((o,index) => {
                  // Format match date if available
                  const formattedDate = new Date(o.matchDate).toLocaleDateString();

                  return (
                    <div key={o.id} className="col-lg-4 col-sm-6 col-xs-12" style={{ marginBottom: "20px" }}>
                    <div
                      className="news-post-widget"
                      style={{
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        padding: "20px",
                        backgroundColor: "#f0f0f0",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="col-md-12 text-center mb-2">
                        <h3>Match No:&nbsp;{index + 1}</h3>
                      </div>
                      <div className="col-md-12 text-center" style={{ marginBottom: "20px" }}>
                        {o.logo && (
                          <img
                            src={`http://192.168.210.121:12425/logo/${o.logo}`} // Adjust the path as needed
                            alt={o.clubName}
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50%",
                              marginBottom: "20px",
                            }} // Adjust size and styling as needed
                          />
                        )}
                      </div>
                      <hr />
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
                            </span>
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
                            Club:&nbsp;
                            <span style={{ color: "#000" }}>
                              {o.cubName}
                            </span>
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
                            Contact:&nbsp;
                            <span style={{ color: "#000" }}>
                              {o.phoneNo}
                            </span>
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
                          {formattedDate}
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

export default MoreMatch;
