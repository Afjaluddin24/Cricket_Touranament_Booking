import { useFormik } from "formik";
import React, { useState } from "react";
import { LoginSchema } from "../schemas";
import { postData } from "../APIConfig/ConfigAPI";
import { errorAlert, successAlert } from "../Message/SweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [Buttonvalue, setButtonvalue] = useState("Login");
  const Navigate = useNavigate();

  const [initialValues, setinitialValues] = useState({
    Name: "",
    Password: "",
  });
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const Savedata = {
        Name: values.Name,
        Password: values.Password,
      };
      console.log("Login",Savedata);
      setButtonvalue("Please Wait...");
      try {
        const response = await postData("Admin/Authentication", Savedata);
        if (response.status == "Ok") {
          localStorage.setItem("UserId", response.result.adminMasterId),
            localStorage.setItem("Name", response.result.name),
            localStorage.setItem("FullName", response.result.fullName),
            localStorage.setItem("Email", response.result.email),
            localStorage.setItem("Logo", response.result.logo),
            successAlert("Success", "Login Successfully");
          Navigate("/Dashboard");
          resetForm();
          setButtonvalue("Login");
        } else {
          console.log("Success", response.result);
          errorAlert("Error", response.result);
          setButtonvalue("Login");
        }
      } catch (error) {
        console.log("Error", error.message);
        setButtonvalue("Login");
      }
    },
  });
  return (
    <>
      <style>{`
        .card-registration .select-input.form-control[readonly]:not([disabled]) {
          font-size: 1rem;
          line-height: 2.15;
          padding-left: 0.75em;
          padding-right: 0.75em;
        }
        .card-registration .select-arrow {
          top: 13px;
        }
        .image-container {
          height: 100%;
        }
        .image-container img {
          height: 100%;
          object-fit: cover;
          border-top-left-radius: .25rem;
          border-bottom-left-radius: .25rem;
        }
      `}</style>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-lg-8">
              <div className="card card-registration my-3">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block image-container">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample"
                      className="img-fluid"
                    />
                  </div>
                  <form onSubmit={handleSubmit} className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Login</h3>
                      <div className="row">
                        <div className="col-md-12 mb-2">
                          <div className="form-outline">
                            <span htmlFor="form3Example1m">User Name</span>
                            <span className="text-danger">
                              &nbsp;*
                              {errors.Name && touched.Name ? errors.Name : null}
                            </span>
                            <input
                              type="text"
                              id="Name"
                              name="Name"
                              value={values.Name}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-2">
                          <div className="form-outline">
                            <span htmlFor="form3Example1m1">Password</span>
                            <span className="text-danger">
                              &nbsp;*
                              {errors.Password && touched.Password
                                ? errors.Password
                                : null}
                            </span>
                            <input
                              type="password"
                              id="Password"
                              name="Password"
                              value={values.Password}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="row">
                          <div className="col-md-12 mb-2">
                            <p
                              style={{ display: "inline", marginRight: "10px" }}
                            >
                              Create a New Account
                            </p>
                            <Link
                              to="/Registration"
                              style={{ display: "inline", color:"blue", textDecoration:"none" }}
                            >
                              Sign Up
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button
                          type="submit"
                          disabled={Buttonvalue !== "Login"}
                          className="btn btn-success btn-lg ms-2"
                        >
                          {Buttonvalue !== "Login" ? (
                            <b>
                              <FontAwesomeIcon
                                style={{ fontSize: "20px" }}
                                icon={faSpinner}
                                spin
                              />
                              &nbsp;Please Wait...
                            </b>
                          ) : (
                            "Login"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
