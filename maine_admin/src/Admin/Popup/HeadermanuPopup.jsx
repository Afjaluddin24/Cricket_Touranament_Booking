import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { useFormik } from "formik";
import { ImgsnavigationSchemas } from "../../schemas";
import { postData } from "../../APIConfig/ConfigAPI";
import { errorAlert, successAlert } from "../../Message/SweetAlert";

const HeadermanuPopup = (props) => {
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
        MaineAdminId:localStorage.getItem("AdminId"),
        Imgs: values.Imgs,
        Title: values.Title,
        Description: values.Description,
      };
      setButtonValues("Please Wait...");
      try {
        const response = await postData("HeaderNevication/AddImages",Savedata);
        if (response.status == "Ok") {
          successAlert("Success",response.result);
          setButtonValues("Save");
          resetForm(); 
          props.setShow(false);
        } else {
          errorAlert("Error",response.result);
          setButtonValues("Save");
        }
      } catch (error) {
        console.log("Error saving data:", error);
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
        <div className="modal-dialog" style={{ maxWidth: "600px", width: "100%" }}>
          <div className="modal-content" style={{ padding: "20px", minHeight: "300px" }}>
            <div className="modal-header">
              <div className="col-md-10 text-left">
                <b className="modal-title">Navigation Imgs</b>
              </div>
              <div className="col-md-2 text-right">
                <i
                  className="fa fa-times"
                  onClick={() => props.setShow(false)}
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-12 mt-3 mb-4">
                  <label>
                    Imgs
                    <span className="text-danger">
                      &nbsp;*{errors.Imgs && touched.Imgs ? errors.Imgs : null}
                    </span>
                  </label>
                  <FileUpload
                    id="Imgs"
                    mode="basic"
                    name="Imgs"
                    accept="image/*"
                    customUpload
                    auto={false}
                    onSelect={handleImageUpload}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-12 mt-3 mb-4">
                  <FloatLabel>
                    <InputText
                      id="Title"
                      name="Title"
                      value={values.Title}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`p-inputtext-lg w-100 ${
                        touched.Title && errors.Title ? "p-invalid" : ""
                      }`}
                    />
                    <label htmlFor="Title">
                      Title
                      <span className="text-danger">
                        &nbsp;*
                        {errors.Title && touched.Title ? errors.Title : null}
                      </span>
                    </label>
                  </FloatLabel>
                </div>

                <div className="col-md-12 mt-3">
                  <FloatLabel>
                    <InputTextarea
                      id="Description"
                      name="Description"
                      value={values.Description}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`p-inputtext-lg w-100 ${
                        touched.Description && errors.Description ? "p-invalid" : ""
                      }`}
                    />
                    <label htmlFor="Description">
                      Description
                      <span className="text-danger">
                        &nbsp;*
                        {errors.Description && touched.Description ? errors.Description : null}
                      </span>
                    </label>
                  </FloatLabel>
                </div>

                <div className="col-md-12 mt-3">
                  <button
                    type="submit"
                    disabled={buttonValues !== "Save"}
                    className="btn btn-success btn-lg"
                  >{
                    buttonValues !== "Save" ? (
                      <b>
                        <i className="fa-solid fa-spinner fa-spin-pulse" style={{ fontSize: "24px" }}></i>
                      </b>
                    ) : (
                      "Save"
                    )
                  }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {props.show && <div className="modal-backdrop show custom-backdrop" />}
    </>
  );
};

export default HeadermanuPopup;
