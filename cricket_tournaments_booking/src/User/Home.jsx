import React, { useState } from "react";
import Loadung from "../Loadung";
import Header from "./Header";
import Sliderimg from "./Sliderimg";
import Matchinfo from "./Matchinfo";
import Footer from "./Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loadung />;
  }

  return (
    <>
      <section id="top">
        <Header/>
        <Sliderimg/>
      </section>
      <Matchinfo/>
      <section id="contant" className="contant">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <aside id="sidebar" className="left-bar">
                <div className="banner-sidebar">
                  <img
                    className="img-responsive"
                    src="./TempletFiles/images/img-05.jpg"
                    alt="#"
                  />
                  <h3>Lorem Ipsum is simply dummy text..</h3>
                </div>
              </aside>
              <h4>Match Fixture</h4>
              <aside id="sidebar" className="left-bar">
                <div className="feature-matchs">
                  <div className="team-btw-match">
                    <ul>
                      <li>
                        <img
                          src="./TempletFiles/images/img-01_002.png"
                          alt=""
                        />
                        <span>Portugal</span>
                      </li>
                      <li className="vs">
                        <span>vs</span>
                      </li>
                      <li>
                        <img src="./TempletFiles/images/img-02.png" alt="" />
                        <span>Germany</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="./TempletFiles/images/img-03_002.png"
                          alt=""
                        />
                        <span>Portugal</span>
                      </li>
                      <li className="vs">
                        <span>vs</span>
                      </li>
                      <li>
                        <img
                          src="./TempletFiles/images/img-04_003.png"
                          alt=""
                        />
                        <span>Germany</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="./TempletFiles/images/img-05_002.png"
                          alt=""
                        />
                        <span>Portugal</span>
                      </li>
                      <li className="vs">
                        <span>vs</span>
                      </li>
                      <li>
                        <img src="./TempletFiles/images/img-06.png" alt="" />
                        <span>Germany</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="./TempletFiles/images/img-07_002.png"
                          alt=""
                        />
                        <span>Portugal</span>
                      </li>
                      <li className="vs">
                        <span>vs</span>
                      </li>
                      <li>
                        <img src="./TempletFiles/images/img-08.png" alt="" />
                        <span>Germany</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img
                          src="./TempletFiles/images/img-05_002.png"
                          alt=""
                        />
                        <span>Portugal</span>
                      </li>
                      <li className="vs">
                        <span>vs</span>
                      </li>
                      <li>
                        <img src="./TempletFiles/images/img-06.png" alt="" />
                        <span>Germany</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
              <h4>Points Table</h4>
              <aside id="sidebar" className="left-bar">
                <div className="feature-matchs">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>P</th>
                        <th>W</th>
                        <th>L</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            src="./TempletFiles/images/img-01_004.png"
                            alt=""
                          />
                          Liverpool
                        </td>
                        <td>10</td>
                        <td>12</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <img
                            src="./TempletFiles/images/img-02_002.png"
                            alt=""
                          />
                          Chelsea
                        </td>
                        <td>10</td>
                        <td>12</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <img
                            src="./TempletFiles/images/img-03_003.png"
                            alt=""
                          />
                          Norwich City
                        </td>
                        <td>20</td>
                        <td>15</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <img
                            src="./TempletFiles/images/img-04_002.png"
                            alt=""
                          />
                          West Brom
                        </td>
                        <td>60</td>
                        <td>10</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <img src="./TempletFiles/images/img-05.png" alt="" />
                          sunderland
                        </td>
                        <td>30</td>
                        <td>06</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            src="./TempletFiles/images/img-01_004.png"
                            alt=""
                          />
                          Liverpool
                        </td>
                        <td>10</td>
                        <td>12</td>
                        <td>20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </aside>
              <div
                className="content-widget top-story"
                style={{
                  background: "url(./TempletFiles/images/top-story-bg.jpg)",
                }}
              >
                <div className="top-stroy-header">
                  <h2>
                    Top Soccer Headlines Story{" "}
                    <a href="#" className="fa fa-fa fa-angle-right" />
                  </h2>
                  <span className="date">July 05, 2017</span>
                  <h2>Other Headlines</h2>
                </div>
                <ul className="other-stroies">
                  <li>
                    <a href="#">Wenger Vardy won't start</a>
                  </li>
                  <li>
                    <a href="#">Evans: Vardy just</a>
                  </li>
                  <li>
                    <a href="#">Pires and Murray </a>
                  </li>
                  <li>
                    <a href="#">Okazaki backing</a>
                  </li>
                  <li>
                    <a href="#">Wolfsburg's Rodriguez</a>
                  </li>
                  <li>
                    <a href="#">Jamie Vardy compared</a>
                  </li>
                  <li>
                    <a href="#">Arsenal target Mkhitaryan</a>
                  </li>
                  <li>
                    <a href="#">Messi wins libel case.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-sm-8 col-xs-12">
              <div className="news-post-holder">
                <div className="news-post-widget">
                  <img
                    className="img-responsive"
                    src="./TempletFiles/images/img-01_002.jpg"
                    alt=""
                  />
                  <div className="news-post-detail">
                    <span className="date">20 march 2016</span>
                    <h2>
                      <a href="blog-detail.html">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus
                      </a>
                    </h2>
                    <p>
                      Just hours after that his grandma had died, Angel Di Maria
                      imagined how she might react if he didn't play
                    </p>
                  </div>
                </div>
                <div className="news-post-widget">
                  <img
                    className="img-responsive"
                    src="./TempletFiles/images/img-02_003.jpg"
                    alt=""
                  />
                  <div className="news-post-detail">
                    <span className="date">20 march 2016</span>
                    <h2>
                      <a href="blog-detail.html">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus
                      </a>
                    </h2>
                    <p>
                      Just hours after that his grandma had died, Angel Di Maria
                      imagined how she might react if he didn't play
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-post-holder">
                <div className="news-post-widget">
                  <img
                    className="img-responsive"
                    src="./TempletFiles/images/img-03_003.jpg"
                    alt=""
                  />
                  <div className="news-post-detail">
                    <span className="date">20 march 2016</span>
                    <h2>
                      <a href="blog-detail.html">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus
                      </a>
                    </h2>
                    <p>
                      Just hours after that his grandma had died, Angel Di Maria
                      imagined how she might react if he didn't play
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="main-heading sytle-2">
                  <h2>Video</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                    <br />
                    doloremque laudantium, totam rem aperiam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video_section_main theme-padding middle-bg vedio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="match_vedio">
                  <img
                    className="img-responsive"
                    src="./TempletFiles/images/img-07.jpg"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="team-holder theme-padding">
        <div className="container">
          <div className="main-heading-holder">
            <div className="main-heading sytle-2">
              <h2>Meet Your Team</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
                <br />
                doloremque laudantium, totam rem aperiam
              </p>
            </div>
          </div>
          <div id="team-slider">
            <div className="container">
              <div className="col-md-3">
                <div className="team-column style-2">
                  <img src="./TempletFiles/images/img-1-1.jpg" alt="" />
                  <div className="player-name">
                    <div className="desination-2">Defender</div>
                    <h5>Charles Wheeler</h5>
                    <span className="player-number">12</span>
                  </div>
                  <div className="overlay">
                    <div className="team-detail-hover position-center-x">
                      <p>
                        Lacus vulputate torquent mollis venenatis quisque
                        suspendisse fermentum primis,
                      </p>
                      <ul className="social-icons style-4 style-5">
                        <li>
                          <a className="facebook" href="#" tabIndex={0}>
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#" tabIndex={0}>
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="youtube" href="#" tabIndex={0}>
                            <i className="fa fa-youtube-play" />
                          </a>
                        </li>
                        <li>
                          <a className="pinterest" href="#" tabIndex={0}>
                            <i className="fa fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                      <a
                        className="btn blue-btn"
                        href=" /soccer/team-detail.html"
                        tabIndex={0}
                      >
                        View Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-column style-2">
                  <img src="./TempletFiles/images/img-1-2.jpg" alt="" />
                  <div className="player-name">
                    <div className="desination-2">Defender</div>
                    <h5>Charles Wheeler</h5>
                    <span className="player-number">12</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-column style-2">
                  <img src="./TempletFiles/images/img-1-3.jpg" alt="" />
                  <div className="player-name">
                    <div className="desination-2">Defender</div>
                    <h5>Charles Wheeler</h5>
                    <span className="player-number">12</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-column style-2">
                  <img src="./TempletFiles/images/img-1-4.jpg" alt="" />
                  <div className="player-name">
                    <div className="desination-2">Defender</div>
                    <h5>Charles Wheeler</h5>
                    <span className="player-number">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <Footer/>
    </>
  );
};
export default Home;
