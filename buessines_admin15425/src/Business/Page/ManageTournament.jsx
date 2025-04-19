import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { getData } from "../../APIConfig/ConfigAPI";
import { errorAlert, warningAlert } from "../../Message/SweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { showSuccess } from "../../Message/toastify";
import MatchSchedulePopup from "../Popup/MatchSchedulePopup";

const ManageTournament = (props) => {
  const [show, setShow] = useState(false);
  const [listTeamsBookin, setListTeamsBookin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [TournmentmatchId, setTournmentmatchId] = useState(0);
  const [AdminMasterId, setAdminMasterId] = useState(0);
  const [BookingTeamsId, setBookingTeamsId] = useState(0);
  const [TeamsBookingliment,setTeamsBookingliment] = useState(0);

  const getDisplay = async () => {
    const userId = localStorage.getItem("UserId");

    if (!userId) {
      errorAlert("Error", "User ID not found in localStorage.");
      return;
    }

    setLoading(true);
    try {
      const response = await getData(`Tournament/DetalsTournament/${userId}`);

      if (response && response.result && Array.isArray(response.result)) {
        setListTeamsBookin(response.result);
      } else {
        console.warn("No records found or malformed response:", response);
        setListTeamsBookin([]);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await warningAlert(
      "Warning",
      "Are you sure you want to delete?"
    );
    if (confirm) {
      try {
        const response = await getData(`Booking/BookingDelete/${id}`);
        if (response.status === "Ok") {
          showSuccess(response.result);
          getDisplay();
        } else {
          errorAlert("Error", response.result);
        }
      } catch (error) {
        console.error("Delete Error:", error.message);
      }
    }
  };

  const MatchPaly = ({ data, onClick }) => (
    <button
      onClick={() => onClick(data.tournamentId)}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <img
        src="../User/Cricket.png"
        alt="CricHeroes"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </button>
  );

  useEffect(() => {
    getDisplay();
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
                      <h4 className="card-title">
                        {props.name || "Booking Details"}
                      </h4>

                      <div className="col-md-12 mt-3">
                        <DataTable
                          value={listTeamsBookin}
                          stripedRows
                          loading={loading}
                          emptyMessage="No records found."
                          tableStyle={{ minWidth: "60rem" }}
                        >
                          <Column field="tournamentName" header="Tournament" />
                          <Column field="teamsName" header="Teams" />
                          <Column field="bookingPerson" header="Booking Teams" />
                          <Column
                            header="Captain"
                            body={(rowData) => (
                              <div>
                                <strong>{rowData.captainName}</strong>
                                <div>
                                  <a
                                    href={`tel:${rowData.contactNo}`}
                                    style={{
                                      color: "black",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faPhone}
                                      style={{ color: "red" }}
                                    />{" "}
                                    {rowData.contactNo}
                                  </a>
                                </div>
                                <div>
                                  <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{ color: "green" }}
                                  />{" "}
                                  {rowData.email}
                                </div>
                              </div>
                            )}
                          />
                          <Column
                            header="CricHeroes"
                            body={(rowData) => (
                              <MatchPaly
                                data={rowData}
                                onClick={(tournamentId) => {
                                  setTournmentmatchId(tournamentId);
                                  setAdminMasterId(rowData.adminMasterId);
                                  setBookingTeamsId(rowData.bookingTeamsId)
                                  setTeamsBookingliment(rowData.bookingPerson)
                                   // Correct state name
                                  setShow(true); // Show the popup
                                }}
                              />
                            )}
                            style={{ width: "70px", textAlign: "center" }}
                          />
                          <Column
                            header="Delete"
                            body={(rowData) => (
                              <button
                                onClick={() =>
                                  handleDelete(rowData.bookingTeamsId)
                                }
                                className="btn btn-sm btn-danger"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            )}
                            style={{ width: "80px", textAlign: "center" }}
                          />
                        </DataTable>
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
      <MatchSchedulePopup
        show={show}
        setShow={setShow}
        TournmentmatchId={TournmentmatchId} // Pass correct state to popup
        setTournmentmatchId={setTournmentmatchId}
        AdminMasterId={AdminMasterId}
        BookingTeamsId={BookingTeamsId}
        TeamsBookingliment={TeamsBookingliment}
      />
    </>
  );
};

export default ManageTournament;
