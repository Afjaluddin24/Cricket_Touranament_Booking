import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { FileUpload } from "primereact/fileupload";
function HeadermanuPopup(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <div
        className={props.show ? "modal show" : "modal"}
        style={props.show ? { display: "block" } : null}
        id="TournamentModal"
      >
        <div
          className="modal-dialog"
          style={{
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <div
            className="modal-content"
            style={{
              padding: "20px",
              minHeight: "300px",
            }}
          >
            <div className="modal-header">
              <div className="col-md-10 text-left">
                <b className="modal-title">Img Add</b>
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
              <div className="row">
                <div className="col-md-6 mt-3">
                  <FloatLabel>
                    <InputText
                      id="username1"
                      className="p-inputtext-lg w-100"
                      onChange={(e) => setUsername1(e.target.value)}
                    />
                    <label htmlFor="username1">
                      Username<span className="text-danger">&nbsp;*</span>
                    </label>
                  </FloatLabel>
                </div>

                <div className="col-md-6 mt-3">
                  <FloatLabel>
                    <InputText
                      id="username2"
                      className="p-inputtext-lg w-100"
                      onChange={(e) => setUsername2(e.target.value)}
                    />
                    <label htmlFor="username2">Username</label>
                  </FloatLabel>
                </div>
                <div className="col-md-4 mt-3">
                  <label>Imgs</label>
                  <FileUpload
                    id="fileUpload"
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    customUpload
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <button type="submit" className="btn btn-success btn-lg">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {props.show && <div className="modal-backdrop show custom-backdrop" />}
    </>
  );
}
export default HeadermanuPopup;
