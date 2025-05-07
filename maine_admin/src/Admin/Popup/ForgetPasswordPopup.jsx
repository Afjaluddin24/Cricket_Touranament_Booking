import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { useFormik } from "formik";
import { ImgsnavigationSchemas } from "../../schemas";
import { postData } from "../../APIConfig/ConfigAPI";
import { showError, showSuccess } from "../../Message/toastify";

const ForgetPasswordPopup = (props) => {
  const [buttonValues, setButtonValues] = useState("Save");

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
    validationSchema: ImgsnavigationSchemas,
    onSubmit: async (values) => {
      const Savedata = {
        MaineAdminId: "",
        Imgs: values.Imgs,
        Title: values.Title,
        Description: values.Description,
      };
      console.log(Savedata);
      setButtonValues("Please Wait...");
      try {
        const response = await postData("", Savedata);
        if (response.Status == "Ok") {
          console.log("Data", response.result);
          showSuccess(response.result);
          setButtonValues("Save");
          props.setShow(false);
          resetForm();
        } else {
          console.log("error", response.result);
          showError("Try again now");
          setButtonValues("Save");
        }
      } catch (error) {
        console.error("Error saving data:", error);
        showError("Something went wrong");
        setButtonValues("Save");
      }
    },
  });

  // Convert image to base64 and set in Formik state
  const handleImageUpload = (e) => {
    const file = e.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1];
        setFieldValue("Imgs", base64);
        console.log(base64);
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
        <div className="modal-dialog modal-lg">
          <div
            className="modal-content"
            style={{ width: "400px", height: "410px", margin: "auto" }}
          >
            <div className="modal-header">
              <b className="modal-title">Forget Password</b>
              <i
                type="button"
                onClick={() => props.setShow(false)}
                className="fa fa-close"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="card-body">
              <form>
                <div data-mdb-input-init="" className="form-outline ">
                  <label className="form-label" htmlFor="form3Example4cg">
                    Old Password<span className="text-danger">&nbsp;*</span>
                  </label>
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control"
                  />
                </div>
                <div data-mdb-input-init="" className="form-outline ">
                  <label className="form-label" htmlFor="form3Example4cg">
                    New Password<span className="text-danger">&nbsp;*</span>
                  </label>
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control"
                  />
                </div>
                <div data-mdb-input-init="" className="form-outline ">
                  <label className="form-label" htmlFor="form3Example4cg">
                    New Password<span className="text-danger">&nbsp;*</span>
                  </label>
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Forget Password
                  </button>
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

export default ForgetPasswordPopup;
