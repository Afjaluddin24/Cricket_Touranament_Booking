import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { TournamentSchema } from "../../schemas";
import { getData, postData } from "../../APIConfig/ConfigAPI";
import { errorAlert, successAlert } from "../../Message/SweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const TournamentPopup = (props) => {
  const [Buttonvalue,setButtonvalue] = useState("Save"); 
  const [base64String, setBase64String] = useState(""); // Store base64 string
  const [bokiingLimet, setBokiingLimet] = useState([]); 

  const GetLimetDetals = async () => {
    try {
      const response = await getData("BookingLime/getBookingLime/"+localStorage.getItem("UserId"));
      setBokiingLimet(response.result);
    } catch (error) {
      console.log(error.message);
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
    resetForm
  } = useFormik({
    enableReinitialize: true,
    initialValues: props.initialValues,
    validationSchema:TournamentSchema,
    onSubmit: async (values) => {
      const Savedata ={
        AdminMasterId:localStorage.getItem("UserId"),
        TournamentName:values.TournamentName,
        StarDate:values.StarDate,
        Description:values.Description,
        TournamentType:values.TournamentType,
        Amount:values.Amount,
        Status:values.Status,
        Logo:values.Logo,
        BookingLimetId:values.BookingLimetId,
      }
      setButtonvalue("Please Wait...");
      try {
        const response = await postData("Tournament/AddTournament",Savedata);
        if(response.status == "Ok")
        {
            successAlert("Success",response.result);
            setButtonvalue("Save");
            ClearForm();
            props.DisplayTournament();
            props.setShow(false);
        }
        else{
            errorAlert("Error",response.result);
            setButtonvalue("Save");
        }
      } catch (error) {
        console.log(errors.message)
        setButtonvalue("Save");
      }
    }
  });

  const ClearForm = async () =>{
    resetForm();
    props.setinitialValues({
        TournamentName: "",
        StarDate: "",
        Description: "",
        TournamentType: "",
        Amount: "",
        Status: "",
        Logo: "",
        BookingLimetId: "",
    })
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1]; // Remove base64 prefix
        setBase64String(base64); // Set the base64 string to state
        setFieldValue("Logo", base64); // Set base64 to Formik field value
        console.log("Base64 String:", base64); // Log the base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  const setCheckValue = (value) => {
    if (value) {
      setFieldValue("Status", "Active");
    } else {
      setFieldValue("Status", "Not-Active");
    }
  };

  useEffect(() =>{
    GetLimetDetals()
  },[])
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
              <b className="modal-title">Tournament</b>
              <button
                type="button"
                onClick={() => props.setShow(false)}
                className="btn-close"
              ></button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="col-md-12">
                <div className="row">
                  <div className="col-md-4 mt-2">
                    <span>Logo</span>&nbsp;
                    <span style={{ color: "red" }}>
                      *{errors.Logo && touched.Logo ? errors.Logo : null}
                    </span>
                    <input
                      type="file"
                      name="Logo"
                      id="Logo"
                      onBlur={handleBlur}
                      onChange={handleImageChange} // Handle the image change
                      className="form-control"
                      placeholder="Logo"
                    />
                  </div>
                  <div className="col-md-4 mt-2">
                    <span>Tournament Name</span>&nbsp;
                    <span style={{ color: "red" }}>
                      *
                      {errors.TournamentName && touched.TournamentName
                        ? errors.TournamentName
                        : null}
                    </span>
                    <input
                      type="text"
                      name="TournamentName"
                      id="TournamentName"
                      value={values.TournamentName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-md-4 mt-2">
                    <span>Tournament Type</span>&nbsp;
                    <span style={{ color: "red" }}>
                      *
                      {errors.TournamentType && touched.TournamentType
                        ? errors.TournamentType
                        : null}
                    </span>
                    <input
                      type="text"
                      name="TournamentType"
                      id="TournamentType"
                      value={values.TournamentType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="eg.T-20,ODI-50 and Test"
                    />
                  </div>
                  <div className="col-md-3 mt-3">
                    <span>Date</span>&nbsp;
                    <span style={{ color: "red" }}>
                      *
                      {errors.StarDate && touched.StarDate
                        ? errors.StarDate
                        : null}
                    </span>
                    <input
                      type="date"
                      name="StarDate"
                      id="StarDate"
                      value={values.StarDate}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-3 mt-3">
                    <span>Status</span>&nbsp;
                    <span style={{ color: "red" }}>
                      *{errors.Status && touched.Status ? errors.Status : null}
                    </span>
                    <div className="form-control">
                      <label>
                        <input
                          type="checkbox"
                          name="Status"
                          id="Status"
                          onBlur={handleBlur}
                          onChange={(e) => setCheckValue(e.target.checked)}
                        />
                        &nbsp; is Active
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3 mt-3">
                    <span>Free</span>&nbsp;{" "}
                    <span style={{ color: "red" }}>*{errors.Amount && touched.Amount ? errors.Amount : null}</span>
                    <input
                      type="text"
                      name="Amount"
                      id="Amount"
                      value={values.Amount}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Amount"
                    />
                  </div>
                  <div className="col-md-3  mt-3">
                    <span>Participant</span>&nbsp;{" "}
                    <span style={{ color: "red" }}>*
                    {errors.BookingLimetId && touched.BookingLimetId
                      ? errors.BookingLimetId
                      : null}</span>
                    <select
                      name="BookingLimetId"
                      id="BookingLimetId"
                      value={values.BookingLimetId}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-select"
                    >
                        <option value="">Select Teams</option>
                     {bokiingLimet.map((o,index)=>{
                        return(
                            <option key={index} value={o.bookingLimetId}>{o.bookingPerson}</option>
                        )
                     })}
                    </select>
                  </div>
                  <div className="col-md-12 mt-2">
                    <span>Description</span>&nbsp;{" "}
                    <span style={{ color: "red" }}>*
                    {errors.Description && touched.Description
                      ? errors.Description
                      : null}</span>
                    <textarea
                      name="Description"
                      id="Description"
                      value={values.Description}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="col-md-12 mt-3 mb-3">
                    <button type="submit" disabled={Buttonvalue !== "Save"} className="btn btn-success">
                      {Buttonvalue !== "Save" ? <b><FontAwesomeIcon icon={faSpinner} style={{fontSize:"20px"}} />&nbsp;Please Wait...</b>:"Save"}
                    </button>
                    &nbsp;&nbsp;
                    <button type="button" onClick={() => ClearForm()} className="btn btn-danger">
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {props.show ? <div className="modal-backdrop show" /> : null}
    </>
  );
};
export default TournamentPopup;
