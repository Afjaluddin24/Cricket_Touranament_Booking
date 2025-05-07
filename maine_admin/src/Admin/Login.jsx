import React, { useState } from 'react';
import '../assets/Login.css';
import ForgetPasswordPopup from './Popup/ForgetPasswordPopup';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginSchemas } from '../schemas';
import { postData } from '../APIConfig/ConfigAPI';
import { showSuccess } from '../Message/toastify';

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [buttonValues, setButtonValues] = useState("Login");

  const initialValues = {
    Name: "",
    Password: ""
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: LoginSchemas,
    onSubmit: async (values) => {
      const responsedata = {
        Name: values.Name,
        Password: values.Password
      };
      setButtonValues("Please Wait...");
      console.log("Data", responsedata);
      try {
        const response = await postData("MaineAdmin/AuthenticationMaine", responsedata);
        if (response.Status === "Ok") {
          showSuccess(response.result);
          localStorage.setItem("AdminId",response.result.maineAdminId);
          localStorage.setItem("Name",response.result.name);
          localStorage.setItem("FullName",response.result.fullName);
          localStorage.setItem("Logo",response.result.logo);
          localStorage.setItem("Email",response.result.email);
          localStorage.setItem("Map",response.result.mapAdress);
          localStorage.setItem("Addres",response.result.adress);
          setButtonValues("Login");
          navigate("/Home");
        } else {
          console.log("Error", response.result);
          setButtonValues("Login");
        }
      } catch (error) {
        console.log(error.message);
        setButtonValues("Login");
      }
    }
  });

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Admin Login
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="Name">
                        Your Name
                        <span className='text-danger'>
                          &nbsp;*{errors.Name && touched.Name ? errors.Name : null}
                        </span>
                      </label>
                      <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={values.Name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                        disabled={buttonValues !== "Login"}
                      />
                    </div>

                    <div className="form-outline mt-3">
                      <label className="form-label" htmlFor="Password">
                        Password
                        <span className='text-danger'>
                          &nbsp;*{errors.Password && touched.Password ? errors.Password : null}
                        </span>
                      </label>
                      <input
                        type="password"
                        id="Password"
                        name="Password"
                        value={values.Password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="form-control"
                        disabled={buttonValues !== "Login"}
                      />
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                      <button
                        type="submit"
                        disabled={buttonValues !== "Login"}
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        {buttonValues === "Login" ? "Login" : (
                          <b>
                            <i
                              className="fa-solid fa-spinner fa-spin-pulse"
                              style={{ fontSize: "24px" }}
                            ></i>
                          </b>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-muted mt-2">
                      Forgot your password?{" "}
                      <Link onClick={() => setShow(true)} className="fw-bold text-body">
                        <u>Forgot Password</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForgetPasswordPopup show={show} setShow={setShow} />
    </section>
  );
};

export default Login;
