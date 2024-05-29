import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
//import { SiAdobe } from "react-icons/si";

import MeWhite from '../assets/images/MeWhite.png';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}} 
    >
    <div className="home" id="home"> 
    <div className="w3-content w3-container w3-padding-64 ">
        <div className="w3-content w3-container ">
          <div className="row d-flex justify-content-center align-items-center  w3-margin-top">
            <div className="col-lg-6 ">
              <h1 className=" fw-light"><b>ABOUT ME.</b></h1>
              <h5 className=" fw-light">"I'm Carol Wargo, and welcome to my corner of the internet!"</h5>
              <br />
              <p className=" fw-light"><em>"My passion lies in utilizing creative design to drive innovative solutions through technology. With a distinctive blend of skills and experience, I am a seasoned full-stack software developer and UX designer deeply committed to collaboration, bringing together diverse perspectives to tackle challenges effectively. With over 20 years of experience in business management & strategic development, I bring a wealth of knowledge and expertise to every project I undertake."</em></p>
            </div>
            <div className="col-lg-6 ">
              <img src={MeWhite} className="w3-round w3-image mx-auto d-block" alt="Me" width="500" height="333" />
            </div>
          </div>
        </div>
<br />
<hr />
<br />
        {/* Technical Proficiencies */}
        <div className="row">
        <div className="w3-content w3-container">
          <p className="mb-0">TECHNOLOGICAL PROFICIENCIES</p>
          <h2><strong>WHAT I DO BEST.</strong></h2>
          <br />
          <p className="w3-wide text-black" style={{fontSize:'1rem'}}><GiGears className="justify-content-center"/> Core Technologies</p>
              <div className="w3-light-grey shadow">
                <div className="w3-container w3-padding-small w3-black w3-center shadow" style={{width:"85%"}}>85%</div>
              </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><FaLaptopCode className="justify-content-center"/> Front-End Design</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"95%"}}>95%</div>
  </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><BsDatabaseLock  className="justify-content-center"/> Server-Side Development</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"80%"}}>80%</div>
  </div>
<br />
<p className="w3-wide text-black" style={{fontSize:'1rem'}}><HiOutlinePuzzlePiece className="justify-content-center"/> Full-Stack Integration</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
<br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><AiFillDatabase className="justify-content-center"/> Database Implementation</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
          </div>

       
              {/**Start skills 
 
  */}
  <br />
 <br />
</div>
<br />
</div>
{/**End technical proficiencies */}


{/**start experience count */}

<div 
className="w3-row w3-center w3-black w3-padding-32"  style={{backgroundColor:'#FF385C'}}>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">20<span style={{fontSize:'10px'}}>yrs</span> +</span><br />
    BUSINESS EXPERIENCE
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    DESIGN PROJECTS
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">10+</span><br />
    LEADERSHIP ROLES
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    MEETINGS
  </div>
  </div>
      

      
              <div className="w3-container w3-content text-center w3-padding-48 w3-margin-bottom w3-padding-large">
              <h2 className="text-black">View my digital resume to learn more about my professional experience and qualifications.        
        </h2><br />
           
              <Link to="/resume#resume"
                  className="button text-white"
                  onClick={scrollToTop}
                >
                     <button className="w3-button w3-text-light-grey w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#FF385C'}}> VIEW MY RESUME</button>
              
                </Link>
              </div> 
             
          <footer className="text-muted py-5 position-fixed bottom-0 start-0 w-100">
          <div className="container">
            <p className="float-end mb-1">
              <Link to="/" style={{color:'#FF385C'}}>Back to top</Link>
            </p>
          </div>
        </footer>
        
    </div>
    </motion.div>
  );
}
