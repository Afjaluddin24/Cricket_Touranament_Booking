import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { getData } from "../../APIConfig/ConfigAPI";
import { errorAlert } from "../../Message/SweetAlert";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Match from "./Match";

const MatchSchedule = (props) => {
  const [listTeamsBookin, setListTeamsBookin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [CricketMatchesId, setCricketMatchesId] = useState(0);

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
        // Filter to show only unique tournaments by tournamentName
        const uniqueTournaments = response.result.filter(
          (item, index, self) =>
            index ===
            self.findIndex((t) => t.tournamentName === item.tournamentName)
        );
        setListTeamsBookin(uniqueTournaments);
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
                          <Column field="status" header="Status" />
                          <Column
                            field="bookingPerson"
                            header="Booking Teams"
                          />
                          <Column field="tournamentType" header="Type" />
                          <Column field="amount" header="Amount" />
                          <Column
                            header="Captain"
                            body={(rowData) => (
                              <div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setCricketMatchesId(
                                      rowData.cricketMatchesId
                                    );
                                    setShow(true);
                                  }}
                                  className="btn btn-primary"
                                >
                                  Match
                                </button>
                              </div>
                            )}
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
      <Match
        show={show}
        setShow={setShow}
        CricketMatchesId={CricketMatchesId}
        setCricketMatchesId={setCricketMatchesId}
      />
    </>
  );
};

export default MatchSchedule;
