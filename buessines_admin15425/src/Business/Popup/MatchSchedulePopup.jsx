import React, { useEffect, useState } from "react";
import { getData, postData } from "../../APIConfig/ConfigAPI";
import { useFormik } from "formik";
import { MatchSedulSchema } from "../../schemas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { showSuccess, showWarning } from "../../Message/toastify";

const MatchSchedulePopup = (props) => {
  const [Buttonvalues, setButtonvalues] = useState("Save");
  const [TourMatch, setTourMatch] = useState([]);

  const initialValues = {
    TeamA: "",
    TeamB: "",
    MatchDate: "",
    Venue: "",
    Match_type: "",
    Match_status: "",
    Note: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: MatchSedulSchema,
    onSubmit: async (values) => {
      const Savedata = {
        TournamentId: props.TournmentmatchId,
        BookingTeamsId: props.BookingTeamsId,
        TeamA: values.TeamA,
        TeamB: values.TeamB,
        MatchDate: values.MatchDate,
        Venue: values.Venue,
        Match_type: values.Match_type,
        Match_status: values.Match_status,
        Note: values.Note,
        AdminMasterId: props.AdminMasterId,
      };
      setButtonvalues("Please Wait...");
      try {
        const response = await postData("CricketMatch/PlayMatch", Savedata);
        if (response.status == "Ok") {
          showWarning(
            "Tournament Play Teams is",
            "" + props.TeamsBookingliment
          );
          showSuccess(response.result);
          MatchSedulelist();
          setButtonvalues("Save");
          resetForm();
        } else {
          console.log("Error", response.result);
          setButtonvalues("Save");
        }
      } catch (error) {
        console.log(error.message);
        setButtonvalues("Save");
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = formik;

  const DisplayTeams = async () => {
    try {
      const response = await getData(
        "Booking/TournamentTeams/" + props.TournmentmatchId
      );
      if (response.status === "Ok") {
        setTourMatch(response.result);
      } else {
        console.log("Error", response.result);
      }
    } catch (error) {
      console.log("Error fetching teams:", error.message);
    }
  };

  const [SeduleList, setSeduleList] = useState([]);
  const MatchSedulelist = async () => {
    try {
      const response = await getData(
        "CricketMatch/TounamentMatchDisplay/" + props.TournmentmatchId
      );
      if (response.status == "Ok") {
        setSeduleList(response.result);
        console.log("Data", response.result);
      } else {
        response.result;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (props.TournmentmatchId) {
      DisplayTeams();
    }
    MatchSedulelist();
  }, [props.TournmentmatchId]);

  useEffect(() => {
    if (!props.show) {
      resetForm(); // Clear form when popup closes
    }
  }, [props.show]);

  return (
    <>
      <div
        className={props.show ? "modal show" : "modal"}
        style={props.show ? { display: "block" } : null}
        id="TournamentModal"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <b className="modal-title">Match Schedule</b>
              <button
                type="button"
                onClick={() => props.setShow(false)}
                className="btn-close"
              ></button>
            </div>
            <div className="card-body">
              <form className="col-md-12" onSubmit={handleSubmit}>
                <div className="row">
                  {/* Team A */}
                  <div className="col-md-6 mt-2 mb-2">
                    <label>Team A</label>
                    <span className="text-danger">
                      *{errors.TeamA && touched.TeamA ? errors.TeamA : null}
                    </span>
                    <select
                      className="form-select"
                      name="TeamA"
                      value={values.TeamA}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Team A</option>
                      {TourMatch.filter(
                        (team) => team.teamsName !== values.TeamB
                      ).map((team, index) => (
                        <option key={index} value={team.teamsName}>
                          {team.teamsName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Team B */}
                  <div className="col-md-6 mt-2 mb-2">
                    <label>Team B</label>
                    <span className="text-danger">
                      *{errors.TeamB && touched.TeamB ? errors.TeamB : null}
                    </span>
                    <select
                      className="form-select"
                      name="TeamB"
                      value={values.TeamB}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Team B</option>
                      {TourMatch.filter(
                        (team) => team.teamsName !== values.TeamA
                      ).map((team, index) => (
                        <option key={index} value={team.teamsName}>
                          {team.teamsName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Match Date */}
                  <div className="col-md-3 mb-2">
                    <label>Match Date</label>
                    <span className="text-danger">
                      *
                      {errors.MatchDate && touched.MatchDate
                        ? errors.MatchDate
                        : null}
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      name="MatchDate"
                      value={values.MatchDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  {/* Venue */}
                  <div className="col-md-3 mb-2">
                    <label>Venue</label>
                    <span className="text-danger">
                      *{errors.Venue && touched.Venue ? errors.Venue : null}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="Venue"
                      placeholder="Enter Venue"
                      value={values.Venue}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  {/* Match Type */}
                  <div className="col-md-3 mb-2">
                    <label>Match Type</label>
                    <span className="text-danger">
                      *
                      {errors.Match_type && touched.Match_type
                        ? errors.Match_type
                        : null}
                    </span>
                    <select
                      className="form-select"
                      name="Match_type"
                      value={values.Match_type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Match Type</option>
                      <option value="Final">Final</option>
                      <option value="Regular">Regular</option>
                      <option value="Long Match">Long Match</option>
                      <option value="Practice">Practice</option>
                    </select>
                  </div>

                  {/* Match Status */}
                  <div className="col-md-3 mb-2">
                    <label>Match Status</label>
                    <span className="text-danger">
                      *
                      {errors.Match_status && touched.Match_status
                        ? errors.Match_status
                        : null}
                    </span>
                    <select
                      className="form-select"
                      name="Match_status"
                      value={values.Match_status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select Match Status</option>
                      <option value="Weather">Weather</option>
                      <option value="Wrong">Wrong</option>
                    </select>
                  </div>

                  {/* Note */}
                  <div className="col-md-12 mb-2">
                    <label>Note</label>
                    <span className="text-danger">
                      *{errors.Note && touched.Note ? errors.Note : null}
                    </span>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="Note"
                      placeholder="Enter Note"
                      value={values.Note}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-md-12 mb-2">
                    <button
                      type="submit"
                      disabled={Buttonvalues !== "Save"}
                      className="btn btn-primary"
                    >
                      {Buttonvalues !== "Save" ? (
                        <b>
                          <FontAwesomeIcon icon={faSpinner} spin />
                          Please Wait...
                        </b>
                      ) : (
                        "Save"
                      )}
                    </button>
                  </div>
                </div>
              </form>
              <div className="col-md-12 mt-3">
                <DataTable
                  value={SeduleList}
                  stripedRows
                  emptyMessage="No records found."
                  tableStyle={{ minWidth: "60rem" }}
                >
                  <Column field="tournamentName" header="Tournament" />
                  <Column field="teamA" header="Team A" />
                  <Column field="teamB" header="Team B" />
                  <Column field="tournamentType" header="tournament Formet" />
                  <Column field="venue" header="Venue" />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.show ? <div className="modal-backdrop show" /> : null}
    </>
  );
};

export default MatchSchedulePopup;
