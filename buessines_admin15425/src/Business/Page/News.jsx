import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../APIConfig/ConfigAPI";
import NewssPopup from "../Popup/NewssPopup";

function News(props) {
  const [show, setShow] = useState(false);
  const [initialValues, setinitialValues] = useState({
    Title:"", 
    Imgs:"", 
    Name:"", 
    Category:"",  
    Description:"",  
    Sore:"",
    TournamentId:""
  });

  const [TournamentList, setTournamentList] = useState([]);

  const DisplayTournament = async () => {
    try {
      const response = await getData(
        "Tournament/Tournament/" + localStorage.getItem("UserId")
      );
      setTournamentList(response.result);
    } catch (error) {
      console.log(error.message);
    }
  };



  useEffect(() => {
    DisplayTournament();
  }, []);

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
                          <h4 className="card-title">{props.name}</h4>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-2 text-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => setShow(true)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                            &nbsp;News
                          </button>
                        </div>
                      </div>

                      {/* Tournament Cards */}
                      <div className="row">
                        {TournamentList.map((o, index) => (
                          <div
                            key={index}
                            className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                          >
                            <div className="card h-100">
                              <div className="card-body d-flex flex-column justify-content-between">
                                {/* Image */}
                                <div className="text-center">
                                  <img
                                    src={`http://192.168.210.121:12425/Logo/${o.logo}`}
                                    alt="Tournament Logo"
                                    style={{
                                      width: "100%",
                                      height: "225px",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                      border: "1px solid #ccc",
                                    }}
                                  />
                                </div>

                                {/* Divider */}
                                <hr style={{ margin: "20px auto", width: "100%" }} />

                                {/* Tournament Details */}
                                <div className="text-center mb-3">
                                  <h6>{o.tournamentName}</h6>
                                  <p>Tournament Type: {o.tournamentType}</p>
                                  <p>Start Date: {new Date(o.starDate).toLocaleDateString('en-GB')}</p>
                                  <p>Entry Fee: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(o.amount)}</p>
                                  <p>Max Teams: {o.bookingPerson}</p>
                                  <p>
                                    Status:{" "}
                                    <span
                                      className={`badge ${ o.status === "Active"? "bg-success" : "bg-danger"
                                      }`}
                                    >
                                      {o.status}
                                    </span>
                                  </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="row">
                                  <div className="col-12 text-center">
                                  
                                  </div>
                                  {/* <div className="col-6 text-center">
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      title="Edit"
                                      onClick={()=>ListTounamet(o.tournamentId)}
                                      style={{
                                        color: "blue",
                                        fontSize: "20px",
                                        cursor: "pointer",
                                      }}
                                    />
                                  </div> */}
                                </div>
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

      {/* Popup for Tournament Creation/Editing */}
      <NewssPopup show={show}
        setShow={setShow}
        initialValues={initialValues}
        setinitialValues={setinitialValues} />
    </>
  );
}

export default News;
