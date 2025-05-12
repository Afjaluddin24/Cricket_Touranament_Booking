import { useEffect, useState } from "react";
import { getData } from "../APIConfig/ConfigAPI";
function Sliderimg() {
   const [listImg, setlistImg] = useState([]);

  const NavigationImg = async () => {
    try {
      const responst = await getData("HeaderNevication/Display");
      if (responst.status == "Ok") {
        setlistImg(responst.result);
        console.log("Afjal", responst.result);
      } else {
        console.log(responst.result);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    NavigationImg();
  }, []);
  return (
    <div className="full-slider">
      <div id="carousel-example-generic" className="carousel slide">
        <div className="carousel-inner" role="listbox">
          <div
            className="item active deepskyblue"
            data-ride="carousel"
            data-interval={5000}
          >
            {NavigationImg.map((o,index)=>{
              return(
                <div className="carousel-caption">
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" />
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div
                  className="slider-contant"
                  data-animation="animated fadeInRight"
                >
                  <h3>
                    If you Don’t Practice
                    <br />
                    You <span className="color-yellow">Don’t Derserve</span>
                    <br />
                    to win!
                  </h3>
                  <p>
                    If you use this site regularly and would like to help keep
                    the site on the Internet,
                    <br />
                    please consider donating a small sum to help pay..
                  </p>
                  <button className="btn btn-primary btn-lg">Read More</button>
                </div>
              </div>
            </div>
              )
            })}
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* /.carousel */}
      <div className="news">
        <div className="container">
          <div className="heading-slider">
            <p className="headline">
              <i className="fa fa-star" aria-hidden="true" /> Top Headlines :
            </p>
            {/*made by vipul mirajkar thevipulm.appspot.com*/}
            <h1>
              <a
                href=""
                className="typewrite"
                data-period={2000}
                data-type='[ "Contrary to popular belief, Lorem Ipsum is not simply random text.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."]'
              >
                <span className="wrap" />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sliderimg;
