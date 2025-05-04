import { faClose, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React, { useState } from "react";
import { BookingSchemas } from "../../schemas";
import "../../assets/Popup.css";
import { postData } from "../../APIConfig/ConfigAPI";
import { showError, showSuccess } from "../../Message/toastify";

function BookingPopup(props) {
  const [Buttonvalue, setButtonvalue] = useState("Save");
  const [initialValues, setinitialValues] = useState({
    Logo: "",
    TeamsName: "",
    CricHeroesUrl: "",
    CaptainName: "",
    VCaptainName: "",
    ContactNo: "",
    VContactNo: "",
    Email: "",
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
    resetForm
  } = useFormik({
    initialValues: initialValues,
    validationSchema: BookingSchemas,
    onSubmit: async (values) => {
      // Check if the booking is full
      if (props.BookingTeams.length >= props.maxBookingSlots) {
        alert("Booking Full");
        return; // Stop the form submission if booking is full
      }

      // If booking is available, proceed with form submission
      const Savedata = {
        AdminMasterId: props.AdminMasterId,
        TournamentId: props.TournamentId,
        Logo: values.Logo,
        TeamsName: values.TeamsName,
        CricHeroesUrl: values.CricHeroesUrl,
        CaptainName: values.CaptainName,
        VCaptainName: values.VCaptainName,
        ContactNo: values.ContactNo.toString(),
        VContactNo: values.VContactNo.toString(),
        Email: values.Email,
        BookingLimetId:props.BookingTeams
      };
      setButtonvalue("Please Wait...");
      console.log(Savedata);
      try {
        const response = await postData("Booking/BookingTeams", Savedata, {
          headers: {
            "Content-Type": "application/json"
          }
        });
                if (response.status === "Ok") {
          console.log("Success", response.result);
          showSuccess(response.result);
          resetForm();
          setButtonvalue("Save");
          props.setShow(false);
        } else {
          alert(response.result);
          console.log("Error", response.result);
          setButtonvalue("Save");
        }
      } catch (error) {
        console.log(error.message);
        setButtonvalue("Save");
      }
    },
  });

  const ClearForm = () => {
    console.log("Form cleared");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1];
        setFieldValue("Logo", base64);
        console.log("Base64 String:", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div
        className={props.show ? "modal show" : "modal"}
        style={props.show ? { display: "block" } : null}
        id="TournamentModal"
      >
        <div className="modal-dialog custom-dialog">
          <div className="modal-content custom-content">
            <div className="modal-header">
              <div className="col-md-12">
                <div className="row align-items-center">
                  <div className="col-md-10 text-left">
                    <b className="modal-title">
                      Welcome, {props.CubName} Tournament Team Booking
                    </b>
                  </div>
                  <div className="col-md-2 text-right">
                    <button
                      type="button"
                      onClick={() => props.setShow(false)}
                      className="btn-close"
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  </div>
                </div>
                <hr className="custom-divider" />
                <form onSubmit={handleSubmit} className="col-md-12">
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      <span>Teams Logo</span>
                      <span className="text-danger">
                        &nbsp;*{errors.Logo && touched.Logo ? errors.Logo : null}
                      </span>
                      <input
                        type="file"
                        name="Logo"
                        id="Logo"
                        onBlur={handleBlur}
                        onChange={handleImageChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <span>Teams Name</span>
                      <span className="text-danger">
                        &nbsp;*{errors.TeamsName && touched.TeamsName ? errors.TeamsName : null}
                      </span>
                      <input
                        type="text"
                        name="TeamsName"
                        id="TeamsName"
                        value={values.TeamsName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Teams Name"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <span>CricHeroes Team Url</span>
                      <span className="text-danger">
                        &nbsp;*{errors.CricHeroesUrl && touched.CricHeroesUrl ? errors.CricHeroesUrl : null}
                      </span>
                      <input
                        type="text"
                        name="CricHeroesUrl"
                        id="CricHeroesUrl"
                        value={values.CricHeroesUrl}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="URL"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <span>Captain Name</span>
                      <span className="text-danger">
                        &nbsp;*{errors.CaptainName && touched.CaptainName ? errors.CaptainName : null}
                      </span>
                      <input
                        type="text"
                        name="CaptainName"
                        id="CaptainName"
                        value={values.CaptainName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Captain Name"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <span>Vice Captain Name</span>
                      <span className="text-danger">
                        &nbsp;*{errors.VCaptainName && touched.VCaptainName ? errors.VCaptainName : null}
                      </span>
                      <input
                        type="text"
                        name="VCaptainName"
                        id="VCaptainName"
                        value={values.VCaptainName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Vice Captain Name"
                      />
                    </div>
                    <div className="col-md-4 mt-2">
                      <span>Contact No</span>
                      <span className="text-danger">
                        &nbsp;*{errors.ContactNo && touched.ContactNo ? errors.ContactNo : null}
                      </span>
                      <input
                        type="number"
                        name="ContactNo"
                        id="ContactNo"
                        value={values.ContactNo}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-4 mt-2">
                      <span>Vc ContactNo</span>
                      <span className="text-danger">
                        &nbsp;*{errors.VContactNo && touched.VContactNo ? errors.VContactNo : null}
                      </span>
                      <input
                        type="number"
                        name="VContactNo"
                        id="VContactNo"
                        value={values.VContactNo}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-4 mt-2">
                      <span>Email</span>
                      <span className="text-danger">
                        &nbsp;*{errors.Email && touched.Email ? errors.Email : null}
                      </span>
                      <input
                        type="email"
                        name="Email"
                        id="Email"
                        value={values.Email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-12" style={{ paddingTop: "7px" }}>
                      <button
                        type="submit"
                        disabled={Buttonvalue !== "Save"}
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
                      >
                        {Buttonvalue !== "Save" ? (
                          <b>
                            <FontAwesomeIcon icon={faSpinner} spin /> &nbsp;Please Wait...
                          </b>
                        ) : (
                          "Save"
                        )}
                      </button>&nbsp;&nbsp;
                      <button
                        type="button"
                        onClick={ClearForm}
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          padding: "10px 25px",
                          border: "none",
                          borderRadius: "5px",
                          fontSize: "14px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                        }}
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
      </div>

      {props.show && <div className="modal-backdrop show custom-backdrop" />}
    </>
  );
}

export default BookingPopup;
