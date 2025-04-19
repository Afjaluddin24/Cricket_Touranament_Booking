import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { getData } from "../../APIConfig/ConfigAPI";
import {
  errorAlert,
  successAlert,
  warningAlert,
} from "../../Message/SweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { showSuccess } from "../../Message/toastify";

const BookingDetails = (props) => {
  const [listTeamsBookin, setListTeamsBookin] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDisplay = async () => {
    const userId = localStorage.getItem("UserId");
    console.log("UserId from localStorage:", userId);

    if (!userId) {
      errorAlert("Error", "User ID not found in localStorage.");
      return;
    }

    setLoading(true);
    try {
      const response = await getData(`Booking/BookingList/${userId}`);
      console.log("API Response:", response);

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

    // Uncomment below to test with mock data
    /*
    setListTeamsBookin([
      {
        id: 1,
        tournamentName: "Test Tournament",
        teamsName: "Mock Team",
        logo: "default-logo.png",
        captainName: "Captain Jack",
        contactNo: "1234567890",
        email: "captain@example.com",
        vCaptainName: "Vice Rick",
        vContactNo: "0987654321",
        cricHeroesUrl: "https://example.com"
      }
    ]);
    */
  };

  const handleDelete = async (id) => {
    const confirm = await warningAlert("Warning", "Are you sure you want to delete?");
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

  const DisplayImg = (data) => (
    <>
      <img
        src={`http://192.168.210.121:12425/Logo/${data.logo}`}
        onError={(e) => (e.target.src = "/default-logo.png")}
        alt="Team Logo"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <br />
      <b>{data.teamsName}</b>
    </>
  );

  const cricHeroesUrlIcon = (data) => (
    <Link to={`${data.cricHeroesUrl}`} target="_blank" rel="noopener noreferrer">
      <img
        src="../User/cricHeroes.webp"
        alt="CricHeroes"
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </Link>
  );

  useEffect(() => {
    getDisplay();
  }, []);

  return (
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
                    <h4 className="card-title">{props.name || "Booking Details"}</h4>

                    <div className="col-md-12 mt-3">
                      <DataTable
                        value={listTeamsBookin}
                        stripedRows
                        loading={loading}
                        emptyMessage="No records found."
                        tableStyle={{ minWidth: "60rem" }}
                      >
                        <Column field="tournamentName" header="Tournament" />
                        <Column
                          body={DisplayImg}
                          header="Team"
                          style={{ width: "120px", textAlign: "center" }}
                        />
                        <Column
                          header="Captain"
                          body={(rowData) => (
                            <div>
                              <strong>{rowData.captainName}</strong>
                              <div>
                                <Link href={`tel:${rowData.contactNo}`} style={{ color: "black",textDecoration:"none" }}>
                                  <FontAwesomeIcon icon={faPhone} style={{ color: "red" }} />{" "}
                                  {rowData.contactNo}
                                </Link>
                              </div>
                              <div>
                                  <FontAwesomeIcon icon={faEnvelope} style={{ color: "green" }} />{" "}
                                  {rowData.email}
                              </div>
                            </div>
                          )}
                        />
                        <Column
                          header="Vice Captain"
                          body={(rowData) => (
                            <div>
                              <strong>{rowData.vCaptainName}</strong>
                              <div>
                                <Link href={`tel:${rowData.vContactNo}`} style={{ color: "black",textDecoration:"none" }}>
                                  <FontAwesomeIcon icon={faPhone} style={{ color: "red" }} />{" "}
                                  {rowData.vContactNo}
                                </Link>
                              </div>
                            </div>
                          )}
                        />
                        <Column
                          body={cricHeroesUrlIcon}
                          header="CricHeroes"
                          style={{ width: "70px", textAlign: "center" }}
                        />
                        <Column
                          header="Delete"
                          body={(rowData) => (
                            <button
                              onClick={() => handleDelete(rowData.bookingTeamsId)}
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
  );
};

export default BookingDetails;
