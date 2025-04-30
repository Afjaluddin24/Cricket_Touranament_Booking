import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../APIConfig/ConfigAPI";
import NewssPopup from "../Popup/NewssPopup";
import { warningAlert } from "../../Message/SweetAlert";
import { showError, showSuccess } from "../../Message/toastify";

function News(props) {
  const [show, setShow] = useState(false);
  const [initialValues, setinitialValues] = useState({
    Title: "",
    Imgs: "",
    Name: "",
    Category: "",
    Description: "",
    Sore: "",
    TournamentId: "",
  });

  const [newslist, setNewslist] = useState([]);

  const getNews = async () => {
    try {
      const response = await getData(
        "News/NewDisplay/" + localStorage.getItem("UserId")
      );
      setNewslist(response.result);
      console.log("Afjal Shelkh", response.result);
    } catch (error) {
      console.log(error.message);
    }
  };
  
    const Delete = async (Id) =>{
      const confirm = await warningAlert("warning","are you went to delete")
      if(confirm)
      {
        try {
          const response = await getData("News/Delete/"+Id)
          if(response.status == "Ok")
          {
            showSuccess("Deleete Successfully");
            getNews();
          }
          else{
            showError("Samting Ron");
          }
        } catch (error) {
           console.log(error.message);
        }
      }
    }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="container-scroller">
        <HeaderNavigation />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      {/* Header */}
                      <div className="row mb-4">
                        <div className="col-md-4 text-left">
                          <h4 className="card-title">{props.name}</h4>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-2 text-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => setShow(true)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                            &nbsp;News
                          </button>
                        </div>
                      </div>

                      {/* Tournament Cards */}
                      <div className="row">
                        {newslist.map((o, index) => (
                          <div
                            key={index}
                            className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4"
                          >
                            <div className="card h-100">
                              <div className="card-body d-flex flex-column justify-content-between">
                                {/* Image */}
                                <div className="text-center">
                                  <img
                                    src={`http://192.168.210.121:12425/IMG/${o.imgs}`}
                                    alt={o.title}
                                    style={{
                                      width: "230px",
                                      height: "225px",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                      border: "1px solid #ccc",
                                    }}
                                  />
                                </div>

                                {/* Divider */}
                                <hr
                                  style={{ margin: "20px auto", width: "100%" }}
                                />

                                {/* News Details */}
                                <div className="text-center mb-3">
                                  <h6>{o.title}</h6>
                                  <p>
                                    <strong>Player:</strong> {o.name}
                                  </p>
                                  <p>
                                    <strong>Category:</strong> {o.category}
                                  </p>
                                  <p>
                                    <strong>Score:</strong> {o.sore}
                                  </p>
                                  <p>
                                    <strong>Date:</strong>{" "}
                                    {new Date(o.date).toLocaleDateString(
                                      "en-GB"
                                    )}
                                  </p>
                                  <p>{o.description}</p>
                                  <FontAwesomeIcon icon={faTrash} onClick={() =>Delete(o.newsId)} style={{fontSize:"20px",color:"red"}}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>

      {/* Popup for Tournament Creation/Editing */}
      <NewssPopup
        show={show}
        setShow={setShow}
        initialValues={initialValues}
        setinitialValues={setinitialValues}
        getNews={getNews}
      />
    </>
  );
}

export default News;
