import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Headermanu from "../Headermanu";
import Footer from "../Footer";
import Loding from "../Loding";
import { Link } from "react-router-dom";
import HeadermanuPopup from "../Popup/HeadermanuPopup";

function Imgnavigation(props) {
  const [isLoading, setisLoading] = useState(true);
  const [show,setShow] = useState(false);

  const time = setTimeout(() => {
    setisLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loding />;
  }
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Headermanu />
        <div
          className="modal fade"
          id="new-order"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="popup text-left">
                  <h4 className="mb-3">New Order</h4>
                  <div className="content create-workform bg-body">
                    <div className="pb-3">
                      <label className="mb-2">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name or Email"
                      />
                    </div>
                    <div className="col-lg-12 mt-4">
                      <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                        <div
                          className="btn btn-primary mr-4"
                          data-dismiss="modal"
                        >
                          Cancel
                        </div>
                        <div
                          className="btn btn-outline-primary"
                          data-dismiss="modal"
                        >
                          Create
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap flex-wrap align-items-center justify-content-between mb-4">
                  <div>
                    <h4 className="mb-3">{props.name}</h4>
                    <p className="mb-0">
                      The product list effectively dictates product presentation
                      and provides space
                      <br /> to list your products and offering in the most
                      appealing way.
                    </p>
                  </div>
                  <Link
                    className="btn btn-primary add-list"
                    onClick={() => setShow(true)}
                  >
                    <i className="fa fa-plus mr-3" />
                    Add Video
                  </Link>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-responsive rounded mb-3">
                  <h1>   form</h1>
                </div>
              </div>
            </div>
            {/* Page end  */}
          </div>
        </div>
      </div>
      <Footer />

      <HeadermanuPopup show={show} setShow={setShow} />
    </>
  );
}
export default Imgnavigation;
