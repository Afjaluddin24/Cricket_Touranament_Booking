import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Loadung from '../../Loadung';

 function Aboutus() {
  const [isLoading, setIsLoading] = useState(true);
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loadung />;
  }

  return (
  <>
     <Header/>
      <div className="inner-page-banner">
            <div className="container">
            </div>
         </div>
    <section
    id="contant"
    className="contant main-heading"
    style={{
      paddingBottom: 0,
      marginBottom: "-1px",
      position: "relative",
      zIndex: 1
    }}
  >
    <div className="aboutus">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="col-md-7 col-sm-7 col-xs-12">
              <div className="full">
                <h3>SPORTY LEAGUE HISTORY</h3>
                <p>
                  Voluptate illum dolore ita ipsum, quid deserunt singulis, labore
                  admodum ita multos malis ea nam nam tamen fore amet. Vidisse
                  quid incurreret ut ut possumus transferrem si ita labore dolor
                  si appellat, aut dolore doctrina. Commodo dolor esse in magna, a
                  a multos senserit nam si aliqua iis multos..
                </p>
                <ul className="icon-list">
                  <li>
                    <i className="fa fa-angle-right" /> Voluptate illum dolore ita
                    ipsum
                  </li>
                  <li>
                    <i className="fa fa-angle-right" /> Labore admodum ita multos
                    malis ea nam nam tamen fore amet
                  </li>
                  <li>
                    <i className="fa fa-angle-right" /> Voluptate illum dolore ita
                    ipsum
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-sm-5 col-xs-12">
              <img className="img-responsive" src="./TempletFiles/images/img-07.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dark-section" style={{ background: "url(./TempletFiles/images/walle.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="heading-main">
              <h2>Our Testimonials</h2>
            </div>
            <div className="testimonial-slider">
              <div
                className="carousel slide"
                data-ride="carousel"
                id="quote-carousel"
              >
                {/* Carousel Slides / Quotes */}
                <div className="carousel-inner text-center">
                  {/* Quote 1 */}
                  <div className="item active">
                    <blockquote>
                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. !
                          </p>
                          <small>Someone famous</small>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {/* Quote 2 */}
                  <div className="item">
                    <blockquote>
                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.{" "}
                          </p>
                          <small>Someone famous</small>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  {/* Quote 3 */}
                  <div className="item">
                    <blockquote>
                      <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. .
                          </p>
                          <small>Someone famous</small>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
                {/* Bottom Carousel Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#quote-carousel"
                    data-slide-to={0}
                    className="active"
                  >
                    <img
                      className="img-responsive "
                      src="https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg"
                      alt=""
                    />
                  </li>
                  <li data-target="#quote-carousel" data-slide-to={1}>
                    <img
                      className="img-responsive"
                      src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
                      alt=""
                    />
                  </li>
                  <li data-target="#quote-carousel" data-slide-to={2}>
                    <img
                      className="img-responsive"
                      src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
                      alt=""
                    />
                  </li>
                </ol>
                {/* Carousel Buttons Next/Prev */}
                <a
                  data-slide="prev"
                  href="#quote-carousel"
                  className="left carousel-control"
                >
                  <i className="fa fa-chevron-left" />
                </a>
                <a
                  data-slide="next"
                  href="#quote-carousel"
                  className="right carousel-control"
                >
                  <i className="fa fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
  )
}
export default Aboutus