import React,{useEffect} from "react";
import "./main.css";
import data from "../../Data";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
} from "react-icons/hi";
import Aos from "aos";
import 'aos/dist/aos.css'


const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  return (
    <section className="main container section">
      <div  data-aos="fade-right" className="secTitle">
        <h3  data-aos="fade-right" className="title">Most Visiited Destinationa</h3>
      </div>

      <div className="secContent grid">
        {data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, descripton }) => {
            return (
              <div key={id}  data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continer flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{descripton}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardList className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
