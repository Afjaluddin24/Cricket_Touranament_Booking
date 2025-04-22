import React, { useEffect, useState } from "react";
import { getData } from "../../APIConfig/ConfigAPI";

const Match = (props) => {
  const [MatchDetails, setMatchDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const DisplayTournament = async () => {
    try {
      const response = await getData(`CricketMatch/MatchSchedule/${props.CricketMatchesId}`);
      setMatchDetails(response.result);
      setErrorMessage(""); // Clear any previous error
      console.log("Data", response.result);
    } catch (error) {
      setErrorMessage("Failed to load match details. Please try again later.");
      console.log(error.message);
    }
  };

  useEffect(() => {
    DisplayTournament();
  }, [props.CricketMatchesId]); // Add CricketMatchesId to dependency array

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // dd/mm/yyyy format
  };

  const modalStyle = {
    display: props.show ? "block" : "none",
  };

  const modalDialogStyle = {
    maxWidth: "90%",
  };

  const cardBodyStyle = {
    padding: "15px",
    textAlign: "center",
  };

  const headerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "1rem",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "1.25rem",
  };

  const cardTitleStyle = {
    fontWeight: "bold",
    fontSize: "1.1rem",
  };

  const cardStyle = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const flexContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const teamLogoStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    border: "2px solid #ccc",
    borderRadius: "50%",
  };

  const teamNameStyle = {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "1.5rem",
    color: "#333",
    marginTop: "10px",
  };

  const vsStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0 10px",
  };

  const matchInfoStyle = {
    margin: "5px 0",
  };

  const btnStyle = {
    marginTop: "10px",
  };

  return (
    <>
      <div
        className={props.show ? "modal show" : "modal"}
        style={modalStyle}
        id="TournamentModal"
        aria-hidden={!props.show}
      >
        <div className="modal-dialog modal-lg" style={modalDialogStyle}>
          <div className="modal-content">
            <div className="modal-header" style={headerStyle}>
              <b className="modal-title" style={titleStyle}>
                Match
              </b>
              <button
                type="button"
                onClick={() => props.setShow(false)}
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="card-body" style={cardBodyStyle}>
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <div className="row">
                {MatchDetails.map((o,index) => (
                  <div
                    key={o.matchId} // Use unique matchId for key
                    className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                  >
                    <div className="card h-100" style={cardStyle}>
                      <div className="card-header">
                        <div className="col-md-12 text-center">
                          <b style={{display: "inline" }}>
                            Match No
                            <h4 style={{display: "inline" }}>&nbsp;{index +1}</h4> {/* Use matchId for clarity */}
                          </b>
                        </div>
                      </div>
                      <div className="card-body text-center" style={cardBodyStyle}>
                        {/* Team Logos and Names */}
                        <div className="d-flex justify-content-center align-items-center mb-3" style={flexContainerStyle}>
                          {/* Team A */}
                          <div className="text-center me-3">
                            <h3 className="mt-2 mb-1" style={teamNameStyle}>
                              {o.teamA}
                            </h3>
                          </div>

                          {/* VS */}
                          <span style={vsStyle}>vs</span>

                          {/* Team B */}
                          <div className="text-center ms-3">
                            <h3 className="mt-2 mb-1" style={teamNameStyle}>
                              {o.teamB}
                            </h3>
                          </div>
                        </div>

                        {/* Match Info */}
                        <p style={matchInfoStyle}>
                          Venue: <strong>{o.venue}</strong>
                        </p>
                        <p style={matchInfoStyle}>
                          <strong>Match Date:</strong> {formatDate(o.matchDate)}
                        </p>
                        <p style={matchInfoStyle}>{o.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.show ? <div className="modal-backdrop show" /> : null}
    </>
  );
};

export default Match;
