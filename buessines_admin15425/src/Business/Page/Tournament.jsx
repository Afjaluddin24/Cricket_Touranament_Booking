import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import TournamentPopup from "../Popup/TournamentPopup";
import { getData } from "../../APIConfig/ConfigAPI";
import { errorAlert, successAlert, warningAlert } from "../../Message/SweetAlert";
import { showSuccess } from "../../Message/toastify";

function Tournament(props) {
  const [show, setShow] = useState(false);
  const [initialValues, setinitialValues] = useState({
    TournamentName: "",
    StarDate: "",
    Description: "",
    TournamentType: "",
    Amount: "",
    Status: "",
    Logo: "",
    BookingLimetId: "",
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

  const Delete = async(Id) =>{
    const confirm = await warningAlert('Warning','are you wen to delete')
    if(confirm)
    {
       try {
         const response = await getData("Tournament/DeleteTournament/"+Id);
         if(response.status == "Ok")
         {
            showSuccess(response.result);
            DisplayTournament();
         }
         else{
          errorAlert("Error",response.result);
         }
       } catch (error) {
        console.log(error.message);
       }
    }
  }

  const [TournamentId,setTournamentId] = useState(0);
  const ListTounamet = async (Id) =>{
     try {
      const response = await getData("Tournament/ListTournament/"+Id);
      if(response.status == "Ok")
      {
        const data = response.result;
        console.log(response.result);
        setinitialValues({
          TournamentName:data.tournamentName,
          StarDate:data.starDate,
          Description:data.description,
          TournamentType:data.tournamentType,
          Amount:data.amount,
          Status:data.status,
          Logo:data.logo,
          BookingLimetId:data.bookingLimetId,
        })
        setTournamentId(data.tournamentId)
        setShow(true);
      }
      else{
        console.log(response.result);
      }
     } catch (error) {
      console.log(error.message);
     }
  }

  useEffect(() => {
    DisplayTournament();
    ListTounamet();
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
                            &nbsp;Tournament
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
                                    <FontAwesomeIcon
                                      icon={faTrash}
                                      title="Delete"
                                      onClick={() => Delete(o.tournamentId)}
                                      style={{
                                        color: "red",
                                        fontSize: "25px",
                                        cursor: "pointer",
                                      }}
                                    />
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
      <TournamentPopup
        show={show}
        setShow={setShow}
        initialValues={initialValues}
        setinitialValues={setinitialValues}
        DisplayTournament={DisplayTournament}
        TournamentId={TournamentId}
      />
    </>
  );
}

export default Tournament;
