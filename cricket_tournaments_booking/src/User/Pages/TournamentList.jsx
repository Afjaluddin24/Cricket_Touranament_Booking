import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
import { getData } from "../../APIConfig/ConfigAPI";
import { Link, useParams } from "react-router-dom";

function TournamentList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { ClubId } = useParams();
  const [Tournament, setTournament] = useState([]);

  const TournamentList = async () => {
    try {
      const response = await getData("Tournament/Tournament/" + ClubId);
      if (response.status == "Ok") {
        setTournament(response.result);
      } else {
        console.log("Error", response.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (ClubId) {
      TournamentList(ClubId);
    }
  }, [ClubId]);

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
              <li className="active">Tournament</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contant" className="contant">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-cente">
              <h4>Booking Yor Tournment</h4>
            </div>
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="news-post-holder">
                {Tournament.map((o, index) => {
                  return (
                    <Link state={{textDecoration:"nole"}} to={`/DetalsTournment/${o.tournamentId}`} >
                    <div className="col-lg-4 col-sm-6 col-xs-12">
                      <div className="news-post-widget">
                        <img
                          className="img-responsive"
                          src={`http://192.168.210.121:12425/Logo/${o.logo}`}
                          alt={`${o.tournamentName} Logo`}
                          style={{ height: "300px" }}
                        />
                        <div className="news-post-detail">
                          <span className="date">
                            <b>{o.tournamentName}</b>
                          </span>
                          <h6>{o.tournamentType} Tournament</h6>
                          <p>{o.description}</p>
                          <span>
                            Entry Fee: <strong>₹{o.amount}</strong>
                          </span>
                          <div
                            className="col-md-12 text-center"
                            style={{ paddingTop: "15px" }}
                          >
                          </div>
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
}
export default TournamentList;
