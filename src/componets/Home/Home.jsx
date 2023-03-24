import React , {useEffect} from "react";
import video from "../../Assets/video.mp4";
import "./home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { BsListTask } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);
  
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} typeof="video/mp4" autoPlay loop muted></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Package</span>
          <h1 data-aos="fade-up" className="homeTitle">Search Your Holiday</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your destination :</label>
            <div className="input flex">
              <input type="text" name="" placeholder="Enter name here" id="" />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="city">Select Your date :</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcon flex">
          <div className="rightIcon">
            <FiFacebook className="icon" />
            <FiInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcon">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
