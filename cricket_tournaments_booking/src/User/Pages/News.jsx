import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Loadung from "../../Loadung";
import { getData } from "../../APIConfig/ConfigAPI";

function News(props) {
    const [isLoading,setIsLoading] = useState(true);

    const [ListNews,setListNews] = useState([])

    const getListNews = async () =>{
      try {
        const response = await getData("News/NewDisplayDetals")
        setListNews(response.result);
        console.log("Afjal",response.result);
      } catch (error) {
        console.log("Error",response.result);
      }
    }

    useEffect(()=>{
      getListNews()
    },[])
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
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="news-post-holder">
              {ListNews.map((o, index) => {
  return (
    <div className="col-lg-4 col-sm-4 col-xs-12" key={index}>
      <div className="news-post-widget">
        <img
          className="img-responsive"
          src={`http://192.168.210.121:12425/IMG/${o.imgs}`}
          style={{height:"280px",width:"350px"}}
          alt={o.title || "News Image"}
        />
        <div className="news-post-detail">
          <span className="date" style={{ color: '#888', fontSize: '14px' }}>
            {new Date(o.date).toLocaleDateString()}
          </span>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#0056b3' }}>
              {o.title}
            </a>
          </h2>
          <p style={{ fontSize: '15px', margin: '10px 0', color: '#555' }}>
            {o.description}
          </p>
          <strong>Club:</strong> {o.cubName}<br/>
          <strong>Player:</strong>{o.name}<br/>
          <strong>Tournament:</strong> {o.tournamentName} ({o.tournamentType})<br/>
          <strong>Total Score:</strong> {o.sore}
        </div>
      </div>
    </div>
  );
})}

              </div>
            </div>
           
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
export default News;
