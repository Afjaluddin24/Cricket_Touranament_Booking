import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { NewsSchema } from "../../schemas";
import { getData, postData } from "../../APIConfig/ConfigAPI";
import { showError, showSuccess } from "../../Message/toastify";

const NewssPopup = (props) => {
  const [Buttonvalue, setButtonvalue] = useState("Save");
  const [submitted, setSubmitted] = useState(false);
  const [Tournament, getTournament] = useState([]);

  const DisplayTournament = async () => {
    try {
      const response = await getData(
        "Tournament/DetalsTournament/" + localStorage.getItem("UserId")
      );
      getTournament(response.result);
    } catch (error) {
      console.error("Tournament fetch error:", error.message);
    }
  };

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
    resetForm,
  } = useFormik({
    enableReinitialize: true,
    initialValues: props.initialValues,
    validationSchema: NewsSchema,
    onSubmit: async (values) => {
      if (submitted) return;

      setSubmitted(true);
      setButtonvalue("Please Wait...");

      const Savedata = {
        Title: values.Title,
        Imgs: values.Imgs,
        Name: values.Name,
        Category: values.Category,
        Description: values.Description,
        Sore: values.Sore,
        TournamentId: values.TournamentId,
        AdminMasterId: localStorage.getItem("UserId"),
      };

      try {
        const response = await postData("News/AddNews", Savedata);
        if (response.status === "Ok") {
          showSuccess(response.result);
          resetForm();
          props.setShow(false);
          props.getNews();
        } else {
          showError(response.result);
        }
      } catch (error) {
        console.error(error.message);
        showError("Something went wrong. Please try again.");
      } finally {
        setButtonvalue("Save");
        setSubmitted(false);
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1];
        setFieldValue("Imgs", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    DisplayTournament();
  }, []);

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
              <b className="modal-title">News</b>
              <button
                type="button"
                onClick={() => props.setShow(false)}
                className="btn-close"
              ></button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="col-md-12">
                <div className="row">
                  <div className="col-md-6 mb-2 mt-2">
                    <span>News Image</span>
                    <span className="text-danger">
                      &nbsp;*{errors.Imgs && touched.Imgs ? errors.Imgs : null}
                    </span>
                    <input
                      type="file"
                      name="Imgs"
                      id="Imgs"
                      onChange={handleImageChange}
                      className="form-control"
                      disabled={submitted}
                    />
                  </div>

                  <div className="col-md-6 mb-2 mt-2">
                    <span>News Title</span>
                    <span className="text-danger">
                      &nbsp;*{errors.Title && touched.Title ? errors.Title : null}
                    </span>
                    <input
                      type="text"
                      name="Title"
                      id="Title"
                      value={values.Title}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                      disabled={submitted}
                    />
                  </div>

                  <div className="col-md-6 mb-2">
                    <span>Player Name</span>
                    <span className="text-danger">
                      &nbsp;*{errors.Name && touched.Name ? errors.Name : null}
                    </span>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      value={values.Name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                      disabled={submitted}
                    />
                  </div>

                  <div className="col-md-6 mb-2">
                    <span>Player Score</span>
                    <span className="text-danger">
                      &nbsp;*{errors.Sore && touched.Sore ? errors.Sore : null}
                    </span>
                    <input
                      type="number"
                      name="Sore"
                      id="Sore"
                      value={values.Sore}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                      disabled={submitted}
                    />
                  </div>

                  <div className="col-md-6 mb-2">
                    <span>Player Category</span>
                    <span className="text-danger">
                      &nbsp;*
                      {errors.Category && touched.Category ? errors.Category : null}
                    </span>
                    <select
                      name="Category"
                      id="Category"
                      value={values.Category}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-select"
                      disabled={submitted}
                    >
                      <option value="">Select Category</option>
                      <option value="All Rounder">All Rounder</option>
                      <option value="Batsman">Batsman</option>
                      <option value="Boller">Boller</option>
                      <option value="Club">Club</option>
                      <option value="Final">Final</option>
                      <option value="Semi Final">Semi Final</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-2">
                    <span>Tournament</span>
                    <span className="text-danger">
                      &nbsp;*
                      {errors.TournamentId && touched.TournamentId ? errors.TournamentId : null}
                    </span>
                    <select
                      name="TournamentId"
                      id="TournamentId"
                      value={values.TournamentId}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-select"
                      disabled={submitted}
                    >
                      <option value="">Select Tournament</option>
                      {[...new Map(Tournament.map(item => [item.tournamentName, item])).values()].map((o, index) => (
                        <option key={index} value={o.tournamentId}>
                          {o.tournamentName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-12 mb-2">
                    <span>Description</span>
                    <span className="text-danger">
                      &nbsp;*
                      {errors.Description && touched.Description ? errors.Description : null}
                    </span>
                    <textarea
                      name="Description"
                      id="Description"
                      value={values.Description}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                      disabled={submitted}
                    ></textarea>
                  </div>

                  <div className="col-md-12 mt-3 mb-3">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={Buttonvalue !== "Save" || submitted}
                    >
                      {Buttonvalue !== "Save" ? (
                        <b>
                          <FontAwesomeIcon
                            style={{ fontSize: "20px" }}
                            icon={faSpinner}
                            spin
                          />
                          &nbsp;Please Wait...
                        </b>
                      ) : (
                        "Save"
                      )}
                    </button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={resetForm}
                      disabled={submitted}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {props.show && <div className="modal-backdrop show" />}
    </>
  );
};

export default NewssPopup;
