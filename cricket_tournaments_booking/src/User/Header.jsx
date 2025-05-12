import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="row">
            <div className="col-md-6">
              <div className="full">
                <div className="logo">
                  <a href="index.html">
                    <img src="../TempletFiles/images/logo.png" alt="#" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_top_section">
                {/* social icon */}
                <ul className="social-icons pull-left">
                  <li>
                    <a className="facebook" href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a className="youtube" href="#">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
                {/* end social icon */}
                {/* button section */}
                <ul className="login">
                  <li className="login-modal">
                    <a href="#" className="login">
                      <i className="fa fa-user" />
                      Admin Login
                    </a>
                  </li>
                </ul>
                {/* end button section */}
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="main-menu-section">
                  <div className="menu">
                    <nav className="navbar navbar-inverse">
                      <div className="navbar-header">
                        <button
                          className="navbar-toggle"
                          type="button"
                          data-toggle="collapse"
                          data-target=".js-navbar-collapse"
                        >
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">
                          Menu
                        </a>
                      </div>
                      <div className="collapse navbar-collapse js-navbar-collapse">
                        <ul className="nav navbar-nav">
                          <li className="active">
                            <Link to="/">Home</Link>
                          </li>
                         <li>
                            <Link to="/Club">Club</Link>
                          </li>
                          <li>
                            <Link to="/About">About</Link>
                          </li>
                          <li>
                            <Link to="/Team">Team</Link>
                          </li>
                          <li>
                            <Link to="/News">News</Link>
                          </li>
                          <li className="dropdown mega-dropdown">
                            <Link
                              to="/Match"
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Match
                              <span className="caret" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/Blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/Contact">contact</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div className="search-bar">
                      <ul className="login">
                        <li>
                            <button type="button" style={{backgroundColor:"red"}} className="btn">
                              <i className="fa fa-shopping-cart" />
                              Booking
                            </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
