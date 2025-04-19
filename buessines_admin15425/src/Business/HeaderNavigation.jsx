import React from 'react'
import { warningAlert } from '../Message/SweetAlert'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';

 const  HeaderNavigation = () => {
  const Navigate= useNavigate();
  const Logout = async() =>{
    const confirm = await warningAlert('Warning','are you went to logout')
    if(confirm)
    {
       localStorage.removeItem("UserId")
       localStorage.removeItem("Name")
       Navigate("/")
    }
  }
  return (
    <>
       <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex justify-content-center">
            <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
              <Link className="navbar-brand brand-logo" to="/Dashboard">
                <img src="User/images/logo.svg" alt="logo" />
              </Link>
              <Link className="navbar-brand brand-logo-mini" to="/Dashboard">
                <img src="User/images/logo-mini.svg" alt="logo" />
              </Link>
              <button
                className="navbar-toggler navbar-toggler align-self-center"
                type="button"
                data-toggle="minimize"
              >
                <span className="typcn typcn-th-menu" />
              </button>
            </div>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul className="navbar-nav mr-lg-2">
              <li className="nav-item nav-profile dropdown">
                <Link
                  className="nav-link"
                  href="#"
                  data-toggle="dropdown"
                  id="profileDropdown"
                >
                  <img src={`http://192.168.210.121:12425/Logo/${localStorage.getItem("Logo")}`} alt="profile" />
                  <span className="nav-profile-name">Welcome,</span>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown"
                  aria-labelledby="profileDropdown"
                >
                  <Link to="/Profile" className="dropdown-item">
                    <FontAwesomeIcon className="text-primary" icon={faUser} />&nbsp;
                    My Profile
                  </Link>
                  <Link onClick={() => Logout()} className="dropdown-item">
                  <FontAwesomeIcon className="text-primary" icon={faSignOut} />&nbsp;
                    Logout
                  </Link>
                </div>
              </li>
              <li className="nav-item nav-user-status dropdown">
                <p className="mb-0">{localStorage.getItem("Name")}</p>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item nav-date dropdown">
                <a
                  className="nav-link d-flex justify-content-center align-items-center"
                  href="javascript:;"
                >
                  <h6 className="date mb-0">Today : Mar 23</h6>
                  <i className="typcn typcn-calendar" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                  id="messageDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="typcn typcn-cog-outline mx-0" />
                  <span className="count" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="messageDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Messages
                  </p>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="User/images/faces/face4.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">
                        David Grey
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        The meeting is cancelled
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="User/images/faces/face2.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">
                        Tim Cook
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        New product launch
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img
                        src="User/images/faces/face3.jpg"
                        alt="image"
                        className="profile-pic"
                      />
                    </div>
                    <div className="preview-item-content flex-grow">
                      <h6 className="preview-subject ellipsis font-weight-normal">
                        {" "}
                        Johnson
                      </h6>
                      <p className="font-weight-light small-text text-muted mb-0">
                        Upcoming board meeting
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown mr-0">
                <a
                  className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                  id="notificationDropdown"
                  href="#"
                  data-toggle="dropdown"
                >
                  <i className="typcn typcn-bell mx-0" />
                  <span className="count" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                  aria-labelledby="notificationDropdown"
                >
                  <p className="mb-0 font-weight-normal float-left dropdown-header">
                    Notifications
                  </p>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="typcn typcn-info mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">
                        Application Error
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="typcn typcn-cog-outline mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">
                        Settings
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="typcn typcn-user mx-0" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">
                        New user registration
                      </h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <span className="typcn typcn-th-menu" />
            </button>
          </div>
        </nav>
    </>
  )
} 
export default HeaderNavigation