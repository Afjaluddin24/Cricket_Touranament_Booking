import { faBook, faTrophy,faCalendarDays  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

 function Sidebar() {
  return (
    <>
       <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">
                  <i className="typcn typcn-device-desktop menu-icon" />
                  <span className="menu-title">Dashboard</span>
                  <div className="badge badge-danger">new</div>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#ui-basic"
                  aria-expanded="false"
                  aria-controls="ui-basic"
                >
                   <FontAwesomeIcon className="typcn typcn-document-text" style={{fontSize:"16px"}} icon={faTrophy}/> &nbsp;
                  <span className="menu-title">Tournament</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="ui-basic">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link"
                        to="/PlayTeams"
                      >
                        Participant Teams
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        className="nav-link"
                        to="/Tournament"
                      >
                        Tournament
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="pages/ui-features/typography.html"
                      >
                        Typography
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#form-elements"
                  aria-expanded="false"
                  aria-controls="form-elements"
                >
                  <FontAwesomeIcon className="typcn typcn-device-desktop" style={{fontSize:"16px"}} icon={faBook}/>&nbsp;
                  <span className="menu-title">Booking</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="form-elements">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Booking"
                      >
                        Detail Booking
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/ManageTournament"
                      >
                        Manage Touranament
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#charts"
                  aria-expanded="false"
                  aria-controls="charts"
                >
                  <FontAwesomeIcon className="typcn typcn-device-desktop" style={{fontSize:"16px"}} icon={faCalendarDays}/>&nbsp;
                  <span className="menu-title">Match</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="charts">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <Link className="nav-link" to="/MatchSchedule">
                        Tournament
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#tables"
                  aria-expanded="false"
                  aria-controls="tables"
                >
                  <i className="typcn typcn-th-small-outline menu-icon" />
                  <span className="menu-title">Tables</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="tables">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="pages/tables/basic-table.html"
                      >
                        Basic table
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#icons"
                  aria-expanded="false"
                  aria-controls="icons"
                >
                  <i className="typcn typcn-compass menu-icon" />
                  <span className="menu-title">Icons</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="icons">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="pages/icons/mdi.html">
                        Mdi icons
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#auth"
                  aria-expanded="false"
                  aria-controls="auth"
                >
                  <i className="typcn typcn-user-add-outline menu-icon" />
                  <span className="menu-title">User Pages</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="auth">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="pages/samples/login.html">
                        {" "}
                        Login{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="pages/samples/register.html"
                      >
                        {" "}
                        Register{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="collapse"
                  href="#error"
                  aria-expanded="false"
                  aria-controls="error"
                >
                  <i className="typcn typcn-globe-outline menu-icon" />
                  <span className="menu-title">Error pages</span>
                  <i className="menu-arrow" />
                </a>
                <div className="collapse" id="error">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="pages/samples/error-404.html"
                      >
                        {" "}
                        404{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link"
                        href="pages/samples/error-500.html"
                      >
                        {" "}
                        500{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://bootstrapdash.com/demo/polluxui-free/docs/documentation.html"
                >
                  <i className="typcn typcn-mortar-board menu-icon" />
                  <span className="menu-title">Documentation</span>
                </a>
              </li>
            </ul>
          </nav>
    </>
  );
}
export default Sidebar
