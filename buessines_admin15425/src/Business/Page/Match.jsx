import React, { useEffect, useState } from "react";
import { getData } from "../../APIConfig/ConfigAPI";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Match = (props) => {
  const [MatchDetails, setMatchDetails] = useState([]);

  const DisplayTournament = async () => {
    try {
      const response = await getData("CricketMatch/MatchSchedule/1");
      setMatchDetails(response.result);
      console.log("Data", response.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    DisplayTournament();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // dd/mm/yyyy format
  };

  return (
    <>
      <div className="container-scroller">
        <HeaderNavigation />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      {/* Header */}
                      <div className="row mb-4">
                        <div className="col-md-4 text-left">
                          <h4 className="card-title">{props.name || "Match Schedule"}</h4>
                        </div>
                      </div>

                      {/* Match Cards */}
                      <div className="row">
                        {MatchDetails.map((o, index) => (
                          <div
                            key={index}
                            className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                          >
                            <div className="card h-100">
                              <div className="card-body text-center">

                                {/* Team Logos and Names */}
                                <div className="d-flex justify-content-center align-items-center mb-3">
                                  {/* Team A */}
                                  <div className="text-center me-3">
                                    <img
                                      src={`http://192.168.210.121:12425/Logo/${o.logo}`}
                                      alt="Team A Logo"
                                      className="rounded-circle"
                                      style={{
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "cover",
                                        border: "2px solid #ccc"
                                      }}
                                    />
                                    <p className="mt-2 mb-1" style={{ fontWeight: "bold" }}>{o.teamA}</p>
                                    <small style={{ color: "#888" }}>
                                      Captain: {o.teamACaptainName || o.captainName}
                                    </small>
                                  </div>

                                  {/* VS */}
                                  <span style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 10px" }}>vs</span>

                                  {/* Team B */}
                                  <div className="text-center ms-3">
                                    <img
                                      src={`http://192.168.210.121:12425/Logo/${o.logo}`}
                                      alt="Team B Logo"
                                      className="rounded-circle"
                                      style={{
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "cover",
                                        border: "2px solid #ccc"
                                      }}
                                    />
                                    <p className="mt-2 mb-1" style={{ fontWeight: "bold" }}>{o.teamB}</p>
                                    <small style={{ color: "#888" }}>
                                      Captain: {o.teamBCaptainName || o.captainName}
                                    </small>
                                  </div>
                                </div>

                                {/* Match Info */}
                                <p style={{ margin: "5px 0" }}>
                                  <strong>Venue:</strong> {o.venue}
                                </p>
                                <p style={{ margin: "5px 0" }}>
                                  <strong>Match Date:</strong> {formatDate(o.matchDate)} at 9:00 AM
                                </p>
                                <p style={{ margin: "5px 0" }}>
                                  <strong>Note:</strong> {o.note}
                                </p>

                                {/* CricHeroes Link */}
                                <a
                                  href={o.cricHeroesUrl}
                                  className="btn btn-primary btn-sm mt-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View on CricHeroes
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Match;
