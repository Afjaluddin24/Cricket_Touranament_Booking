import React, { useEffect, useState } from "react";
import HeaderNavigation from "../HeaderNavigation";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { getData } from "../../APIConfig/ConfigAPI";

const Dashboard = () => {
  const [Countlist,setCountlist] = useState([]);

  const Dashboradcount = async ()=>{
    try {
      const response = await getData("Dashboard/DisplayDashboard/"+localStorage.getItem("UserId"))
      if(response.status == "Ok")
      {
        setCountlist(response.result);
        console.log("DataList",response.result);
      }
      else{
        console.log("Error",response.result);
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    Dashboradcount();
  },[])
  return (
    <>
      <div className="container-scroller">
        <HeaderNavigation />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="row">
                    <div className="col-md-4 col-xl-4 stretch-card">
                      <div className="card profile-card bg-gradient-success">
                        <div className="card-body">
                          <div className="row align-items-center h-100">
                            <div className="col-md-4">
                              <figure className="avatar mx-auto mb-4 mb-md-0">
                                <img
                                  src="User/Tournament.avif"
                                  alt="avatar"
                                />
                              </figure>
                            </div>
                            <div className="col-md-8">
                              <h5 className="text-white text-center text-md-left">
                                Tournament
                              </h5>
                              <div className="d-flex align-items-center justify-content-between info pt-2">
                                <div className="col-md-12 text-center">
                                   <h2>{Countlist.tournament}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-4 stretch-card">
                      <div className="card profile-card bg-gradient-info">
                        <div className="card-body">
                          <div className="row align-items-center h-100">
                            <div className="col-md-4">
                              <figure className="avatar mx-auto mb-4 mb-md-0">
                                <img
                                  src="User/Crickets.webp"
                                  alt="avatar"
                                />
                              </figure>
                            </div>
                            <div className="col-md-8">
                              <h5 className="text-white text-center text-md-left">
                              Teams
                              </h5>
                              <div className="d-flex align-items-center justify-content-between info pt-2">
                                <div className="col-md-12 text-center">
                                   <h2>{Countlist.teams}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-4 stretch-card">
                      <div className="card profile-card bg-gradient-primary">
                        <div className="card-body">
                          <div className="row align-items-center h-100">
                            <div className="col-md-4">
                              <figure className="avatar mx-auto mb-4 mb-md-0">
                                <img
                                  src="User/CricketMatch.jpg"
                                  alt="avatar"
                                />
                              </figure>
                            </div>
                            <div className="col-md-8">
                              <h5 className="text-white text-center text-md-left">
                                Match
                              </h5>
                              <div className="d-flex align-items-center justify-content-between info pt-2">
                                <div className="col-md-12 text-center">
                                   <h2>{Countlist.match}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-4 mt-3 stretch-card">
                      <div className="card profile-card bg-gradient-danger">
                        <div className="card-body">
                          <div className="row align-items-center h-100">
                            <div className="col-md-4">
                              <figure className="avatar mx-auto mb-4 mb-md-0">
                                <img
                                  src="User/Nwes.jpg"
                                  alt="avatar"
                                />
                              </figure>
                            </div>
                            <div className="col-md-8">
                              <h5 className="text-white text-center text-md-left">
                                News
                              </h5>
                              <div className="d-flex align-items-center justify-content-between info pt-2">
                                <div className="col-md-12 text-center">
                                   <h2>{Countlist.news}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
    </>
  );
}
export default Dashboard;
