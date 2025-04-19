import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";

function News(props) {
    const [isLoading,setIsLoading] = useState(true);

    const timer = setTimeout(() => {
        setIsLoading(false);
    },2000);

    if(isLoading) {
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
              <li className="active">News</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contant" className="contant">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-sm-12 col-xs-12">
              <div className="news-post-holder">
                <div className="col-lg-6 col-sm-6 col-xs-12">
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
                          Free play to ground in anywhere
                        </a>
                      </h2>
                      <p>
                        Just hours after that his grandma had died, Angel Di
                        Maria imagined how she might react if he didn't play
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
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
                          Free play to ground in anywhere
                        </a>
                      </h2>
                      <p>
                        Just hours after that his grandma had died, Angel Di
                        Maria imagined how she might react if he didn't play
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
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
                          Free play to ground in anywhere
                        </a>
                      </h2>
                      <p>
                        Just hours after that his grandma had died, Angel Di
                        Maria imagined how she might react if he didn't play
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
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
                          Free play to ground in anywhere
                        </a>
                      </h2>
                      <p>
                        Just hours after that his grandma had died, Angel Di
                        Maria imagined how she might react if he didn't play
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
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
              <aside id="sidebar" className="right-bar">
                <div className="banner">
                  <img
                    className="img-responsive"
                    src="./TempletFiles/images/adds-3.jpg"
                    alt="#"
                  />
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
export default News;
