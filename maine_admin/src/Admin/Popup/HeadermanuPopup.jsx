import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { useFormik } from "formik"; // ✅ Yup schema
import { ImgsnavigationSchemas } from "../../schemas";
import { postData } from "../../APIConfig/ConfigAPI";
import { showError, showSuccess } from "../../Message/toastify";

const HeadermanuPopup = (props) => {
  const [buttonValues,setButtonValues] = useState("Save");
  const {values,errors,handleBlur,handleChange, handleSubmit,touched,setFieldValue} = useFormik({
    enableReinitialize: true,
    initialValues: props.initialValues,
    validationSchema: ImgsnavigationSchemas,
    onSubmit: async(values) => {
      const Savedata = {
        Imgs:values.values,
        Title:values.Title,
        Description:values.Description,
      }
      console.log(Savedata);
      setButtonValues("Please Wait...");
      showError("try agen now");
      try {
        const response = await postData("",Savedata);
        if(response.Status == "Ok")
        {
           console.log("Save",response.result);
           setButtonValues("Save");
           showSuccess(response.result);
        }
        else{
          console.log("Error",response.result);
          setButtonValues("Save");
          showError("try agen now");
        }
      } catch (error) {
        console.log(error.message);
        setButtonValues("Save");
      }
    },
  });


  return (
    <>
      <div
        className={props.show ? "modal show" : "modal"}
        style={props.show ? { display: "block" } : null}
        id="TournamentModal"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <div
            className="modal-content"
            style={{ padding: "20px", minHeight: "300px" }}
          >
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
                    onSelect={(e) => setFieldValue("Imgs", e.files[0])}
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
                        {errors.Description && touched.Description
                          ? errors.Description
                          : null}
                      </span>
                    </label>
                  </FloatLabel>
                </div>

                <div className="col-md-12 mt-3">
                  <button type="submit" disabled={buttonValues !== "Save"} className="btn btn-success btn-lg">
                    {buttonValues !== "Save" ? <b><i class="fa-solid fa-spinner fa-spin-pulse" style={{fontSize:"40px"}}></i></b>:"Save"}
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
