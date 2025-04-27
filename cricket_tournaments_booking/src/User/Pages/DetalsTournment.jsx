import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
import { getData } from "../../APIConfig/ConfigAPI";
import { useParams } from "react-router-dom";
import BookingPopup from "../Popup/BookingPopup";

function DetailsTournament(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const { TournmentId } = useParams();
  const [BookingTournament, setBookingTournament] = useState([]);

  const [TournamentId, setTournamentId] = useState(0);
  const [AdminMasterId, setAdminMasterId] = useState(0);
  const [BookingTeams, setBookingTeams] = useState(0);
  const [ClubName, setClubName] = useState("");

  const Display = async () => {
    try {
      const response = await getData(
        "Tournament/TournamentBookin/" + TournmentId
      );
      if (response.status === "Ok") {
        setBookingTournament(response.result);
        console.log("Data", response.result);
      } else {
        console.log("error", response.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBookingClick = (tournamentId, adminMasterId, clubName, bookingPerson) => {
    setTournamentId(tournamentId);
    setAdminMasterId(adminMasterId);
    setClubName(clubName);
    setBookingTeams(bookingPerson);
    setShow(true);
  };

  useEffect(() => {
    if (TournmentId) {
      Display(TournmentId);
    }
  }, [TournmentId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
              <li className="active">Booking</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contant" className="contant main-heading team">
        <div className="row">
          <div className="container">
            <div className="contact">
              <div className="row">
                {BookingTournament.map((o, index) => (
                  <div className="col-md-12" key={o.tournamentId || index}>
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={`http://192.168.210.121:12425/Logo/${o.logo}`}
                          alt="Contact"
                          className="img-responsive"
                          style={{ width: "100%", height: "450px" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="contact-info">
                          <div className="kode-section-title">
                            <h3>{o.cubName}</h3>
                          </div>
                          <div className="kode-forminfo" style={{ paddingTop: "50px" }}>
                            <b style={{ paddingTop: "10px" }}>{o.tournamentName}</b>
                            <p>{o.description}</p>
                            <ul className="kode-form-list">
                              <li style={{ paddingTop: "10px" }}>
                                <span>
                                  Tournament Start:&nbsp;
                                  <b>
                                    {new Date(o.starDate).toLocaleDateString("en-GB")}
                                  </b>
                                </span>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <i className="fa fa-phone" />
                                <p style={{ paddingTop: "10px" }}>
                                  <span>
                                    Play Teams:&nbsp;<b>{o.bookingPerson}</b>
                                  </span>
                                </p>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <h3>
                                  ₹{Number(o.amount).toLocaleString("en-IN")}
                                </h3>
                              </li>
                              <li style={{ paddingTop: "10px" }}>
                                <button
                                  type="button"
                                  style={{
                                    backgroundColor: "green",
                                    color: "white",
                                    padding: "10px 25px",
                                    border: "none",
                                    borderRadius: "5px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease",
                                  }}
                                  onClick={() =>
                                    handleBookingClick(
                                      o.tournamentId,
                                      o.adminMasterId,
                                      o.cubName,
                                      o.bookingLimetId,
                                    )
                                  }
                                >
                                  Booking Now
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BookingPopup
        show={show}
        setShow={setShow}
        CubName={ClubName}
        setCubName={setClubName}
        TournamentId={TournamentId}
        AdminMasterId={AdminMasterId}
        BookingTeams={BookingTeams}
      />
    </>
  );
}

export default DetailsTournament;
