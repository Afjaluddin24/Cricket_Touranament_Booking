import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
import { getData } from "../../APIConfig/ConfigAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
function Club(props) {
  const [ListClub, setListClub] = useState([]);
  const { adminMasterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const DisplayClub = async () => {
    try {
      const response = await getData("Admin/ClubDisplay");
      setListClub(response.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    DisplayClub(adminMasterId);
  }, [adminMasterId]);

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
              <li className="active">Blog</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contant" className="contant main-heading team">
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                {ListClub.map((o, index) => {
                  return (
                      <div key={index} className="col-md-6">
                      <div className="feature-post small-blog">
                        <div className="col-md-5">
                        <Link to={`/TournamentList/${o.adminMasterId}`}>
                          <div className="feature-img">
                            <img
                              src={`http://192.168.210.121:12425/Logo/${o.logo}`}
                              className="img-responsive"
                              alt={o.cubName}
                            />
                          </div>
                          </Link>
                        </div>
                        <div className="col-md-7">
                          <div className="feature-cont">
                            <div className="post-info">
                              <h4
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "20px",
                                  color: "#333",
                                }}
                              >
                                {o.cubName}
                              </h4>
                            </div>
                            <div className="post-heading">
                              <p
                                style={{
                                  marginBottom: "8px",
                                  fontSize: "15px",
                                  color: "#555",
                                }}
                              >
                                <span>
                                  <span style={{ marginRight: "6px" }}>
                                    Owner Name&nbsp;<b>{o.fullName}</b>
                                  </span>
                                </span>
                              </p>

                              <p
                                style={{
                                  marginBottom: "8px",
                                  fontSize: "15px",
                                  color: "#555",
                                }}
                              >
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{
                                      marginRight: "8px",
                                      color: "#007bff",
                                    }}
                                  />
                                  <strong>{o.email}</strong>
                                </span>
                              </p>

                              <p
                                style={{
                                  marginBottom: "8px",
                                  fontSize: "15px",
                                  color: "#555",
                                }}
                              >
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    style={{
                                      marginRight: "8px",
                                      color: "#28a745",
                                    }}
                                  />
                                  <strong>{o.phoneNo}</strong>
                                </span>
                              </p>

                              <p
                                style={{
                                  marginBottom: "8px",
                                  fontSize: "15px",
                                  color: "#555",
                                }}
                              >
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faAddressBook}
                                    style={{
                                      marginRight: "8px",
                                      color: "#6f42c1",
                                    }}
                                  />
                                  <strong>
                                    {o.address}, {o.city}, {o.state}
                                  </strong>
                                </span>
                              </p>

                              <p>
                                <span style={{ marginRight: "6px" }}>
                                  CricHeroes Club Name&nbsp;<b>{o.location}</b>
                                </span>
                              </p>

                              <div
                                className="full"
                                style={{ marginTop: "12px" }}
                              >
                                <Link
                                  className="btn btn-primary"
                                  to={o.map}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    padding: "6px 16px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  <FontAwesomeIcon icon={faLocationDot} />
                                </Link>
                              </div>
                            </div>
                          </div>
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
}
export default Club;
