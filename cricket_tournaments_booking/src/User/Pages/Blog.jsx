import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
function Blog(props) {
const [isLoading,setIsLoading] = useState(true);

const timer = setTimeout(() => {
    setIsLoading(false);
}, 2000);
if(isLoading){
    return <Loadung/>;
}
  return (
    <>
        <section id="top">
          <Header/>
          <div className="inner-page-banner">
            <div className="container"></div>
          </div>
          <div className="inner-information-text">
            <div className="container">
              <h3>{props.name}</h3>
              <ul className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Blog</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contant" className="contant main-heading team">
          <div className="row">
            <div className="container">
              <div className="col-md-9">
                <div className="feature-post">
                  <div className="feature-img">
                    <img
                      src="./TempletFiles/images/img-03_002.jpg"
                      className="img-responsive"
                      alt="#"
                    />
                  </div>
                  <div className="feature-cont">
                    <div className="post-people">
                      <div className="left-profile">
                        <div className="post-info">
                          <img
                            src="./TempletFiles/images/profile-img.png"
                            alt="#"
                          />
                          <span>
                            <h4>by George Kvasnikov</h4>
                            <h5>on Jun 27, 2014</h5>
                          </span>
                        </div>
                        <span className="share" />
                      </div>
                    </div>
                    <div className="post-heading">
                      <h3>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </h3>
                      <p>
                        World CupInternational Club football teamSpanish
                        LeagueReal Madrid Vs Barcelona SpanishNext MatchThe
                        Match Result UpdateWorld CUPFIFA World CUP
                        2015International Club football teamEngland30 Jun
                        10:24FranceReal Madrid Vs Barcelona SpanishManchester
                        City30 Nov 00:00Manchester.
                      </p>
                      <div className="full">
                        <a className="btn" href="#">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-post">
                  <div className="feature-img">
                    <img
                      src="./TempletFiles/images/img-03_002.jpg"
                      className="img-responsive"
                      alt="#"
                    />
                  </div>
                  <div className="feature-cont">
                    <div className="post-info">
                      <img
                        src="./TempletFiles/images/profile-img.png"
                        alt="#"
                      />
                      <span>
                        <h4>by George Kvasnikov</h4>
                        <h5>on Jun 27, 2014</h5>
                      </span>
                    </div>
                    <div className="post-heading">
                      <h3>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium.
                        <p />
                        <div className="full">
                          <a className="btn" href="#">
                            Read More
                          </a>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="feature-post small-blog">
                  <div className="col-md-5">
                    <div className="feature-img">
                      <img
                        src="./TempletFiles/images/post2.png"
                        className="img-responsive"
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="feature-cont">
                      <div className="post-info">
                        <img
                          src="./TempletFiles/images/profile-img.png"
                          alt="#"
                        />
                        <span>
                          <h4>by George Kvasnikov</h4>
                          <h5>on Jun 27, 2014</h5>
                        </span>
                      </div>
                      <div className="post-heading">
                        <h3>
                          We denounce with righteous indignation and dislike men
                          who are so beguiled
                        </h3>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.
                        </p>
                        <div className="full">
                          <a className="btn" href="#">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-post small-blog">
                  <div className="col-md-5">
                    <div className="feature-img">
                      <img
                        src="./TempletFiles/images/post2.png"
                        className="img-responsive"
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="feature-cont">
                      <div className="post-info">
                        <img
                          src="./TempletFiles/images/profile-img.png"
                          alt="#"
                        />
                        <span>
                          <h4>by George Kvasnikov</h4>
                          <h5>on Jun 27, 2014</h5>
                        </span>
                      </div>
                      <div className="post-heading">
                        <h3>
                          We denounce with righteous indignation and dislike men
                          who are so beguiled
                        </h3>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.
                        </p>
                        <div className="full">
                          <a className="btn" href="#">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-post small-blog">
                  <div className="col-md-5">
                    <div className="feature-img">
                      <img
                        src="./TempletFiles/images/post2.png"
                        className="img-responsive"
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="feature-cont">
                      <div className="post-info">
                        <img
                          src="./TempletFiles/images/profile-img.png"
                          alt="#"
                        />
                        <span>
                          <h4>by George Kvasnikov</h4>
                          <h5>on Jun 27, 2014</h5>
                        </span>
                      </div>
                      <div className="post-heading">
                        <h3>
                          Sydney derby takes centre stage while Tim Cahill says
                          no to A-League
                        </h3>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio.
                        </p>
                        <div className="full">
                          <a className="btn" href="#">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="blog-sidebar">
                  <div className="search-bar-blog">
                    <form>
                      <input type="text" placeholder="search" />
                      <button>
                        <i className="fa fa-search" aria-hidden="true" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="blog-sidebar">
                  <h4 className="heading">Top Categories</h4>
                  <div className="category-menu">
                    <ul>
                      <li>
                        <a href="#">Cricket</a>
                      </li>
                      <li>
                        <a href="#">Football</a>
                      </li>
                      <li>
                        <a href="#">Hockey</a>
                      </li>
                      <li>
                        <a href="#">Tennis</a>
                      </li>
                      <li>
                        <a href="#">Basketball</a>
                      </li>
                      <li>
                        <a href="#">Golf</a>
                      </li>
                      <li>
                        <a href="#">Cycling</a>
                      </li>
                      <li>
                        <a href="#">Motorsports</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-sidebar">
                  <h4 className="heading">Popular News</h4>
                  <div className="category-menu">
                    <ul>
                      <li>
                        <span>
                          <img
                            src="./TempletFiles/images/profile-img2.png"
                            alt="#"
                          />
                        </span>
                        <span>
                          <p>Two touch penalties, imaginary cards</p>
                          <p className="date">22 Feb, 2016</p>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
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
                    </div>
                  </div>
                </aside>
                <aside id="sidebar" className="left-bar">
                  <div className="banner-sidebar">
                    <img
                      className="img-responsive"
                      src="./TempletFiles/images/match-banner1.jpg"
                      alt="#"
                    />
                    <h3>Argentina vs Chile|Goals of the match | COPA </h3>
                  </div>
                </aside>
                <aside id="sidebar" className="right-bar">
                  <div className="banner">
                    <img
                      className="img-responsive"
                      src="./TempletFiles/images/adds-3.jpg"
                      alt="#"
                    />
                  </div>
                </aside>
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
                            <img
                              src="./TempletFiles/images/img-05.png"
                              alt=""
                            />
                            sunderland
                          </td>
                          <td>30</td>
                          <td>06</td>
                          <td>30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </>
  );
}
export default Blog;
