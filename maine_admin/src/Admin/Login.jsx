import React, { useState } from 'react'
import '../assets/Login.css'
import ForgetPasswordPopup from './Popup/ForgetPasswordPopup';
import { Link } from 'react-router-dom';
 const  Login = () => {
  const [show,setShow] = useState(false);
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
              <form>
                <div data-mdb-input-init="" className="form-outline ">
                 <label className="form-label" htmlFor="form3Example1cg">
                    Your Name<span className='text-danger'>&nbsp;*</span>
                  </label>
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control"
                  />
                </div>
                <div data-mdb-input-init="" className="form-outline ">
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password<span className='text-danger'>&nbsp;*</span>
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
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-2">
                  Have already an account?{" "}
                  <Link onClick={() => setShow(true)} className="fw-bold text-body">
                    <u>Forget Pasword</u>
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

  )
}
export default Login