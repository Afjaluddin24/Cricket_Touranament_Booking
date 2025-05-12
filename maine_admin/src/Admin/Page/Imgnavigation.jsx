import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Headermanu from "../Headermanu";
import Footer from "../Footer";
import Loding from "../Loding";
import { Link } from "react-router-dom";
import HeadermanuPopup from "../Popup/HeadermanuPopup";
import { getData } from "../../APIConfig/ConfigAPI";

const Imgnavigation = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [Imgdetals, setImgdetals] = useState([]);
  const [imgId, setImgId] = useState(0);

  const [initialValues, setinitialValues] = useState({
    Imgs: "",
    Title: "",
    Description: "",
  });

  const NavigationImg = async () => {
    try {
      const response = await getData(
        "HeaderNevication/ImgDisplay/" + localStorage.getItem("AdminId")
      );
      if (response.status === "Ok") {
        setImgdetals(response.result || []);
        console.log("Fetched Image Data:", response.result);
      } else {
        console.error("API Error:", response.result);
      }
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };

  const Detals = async (Id) =>{
     try {
      const response = await getData("HeaderNevication/Detals/"+Id);
      if(response.status == "Ok")
      {
        const data = response.result;
        console.log("Data",data);
        setinitialValues({
          Imgs: data.imgs,
          Title:data.title,
          Description: data.description
        });
        setImgId(data.headerImgId);
        setShow(true);
      }
      else{
        console.log("Error".console.result);
      }
     } catch (error) {
      console.log(error.message)
     }
  }

  useEffect(() => {
    NavigationImg();
    Detals();
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loding />;

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Headermanu />

        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
                  <div>
                    <h4 className="mb-3">{props.name || "Image Navigation"}</h4>
                    <p className="mb-0">
                      The User Navigation page upload details
                    </p>
                  </div>
                  <Link
                    className="btn btn-primary add-list"
                    onClick={() => setShow(true)}
                  >
                    <i className="fa fa-plus mr-3" />
                    Add Video
                  </Link>
                </div>
              </div>

              {Array.isArray(Imgdetals) && Imgdetals.map((item, index) => (
                <div className="col-lg-12" key={index}>
                <div className="container-fluid">
                  <div className="col-md-12">
                    <div className="card">
                      <img
                        src={`http://192.168.210.121:12425/IMG/${item.imgs}`}
                        className="img-fluid rounded w-100"
                        alt="profile"
                        style={{ height: "350px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 m-auto">
                     <div className="col-md-12 text-center">
                        <h3>{item.title}</h3>
                     </div>
                     <div className="col-md-12 text-center">
                        <b>{item.description}</b>
                     </div>
                     <div className="col-md-12 text-center mt-2 mb-4">
                     <i class="fas fa-edit" style={{color: "blue",fontSize:"25px"}} onClick={() => Detals(item.headerImgId)}></i>&nbsp;&nbsp;
                     </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <HeadermanuPopup
        show={show}
        setShow={setShow}
        initialValues={initialValues}
        setinitialValues={setinitialValues}
        imgId={imgId}
        setImgId={setImgId}
        NavigationImg={NavigationImg}
      />
    </>
  );
};

export default Imgnavigation;
