import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MeWhite from "../assets/images/MeWhite.png";
import ResumeDownload from "../assets/ResumeDownload.pdf";

function HomePage() {
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
    className="home"
    id="home"
    
    >
    <div>
      <header>
        <div className="row align-items-center w3-margin-top w3-padding-32">
          <div className="col-lg-5 align-items-center">
            <img
              src={MeWhite}
              className="w3-image w3-round-xxlarge w3-padding-large w3-padding-24"
              style={{ display: "block", width: "100%" }}
              alt="Profile"

            />
          </div>
          <div className="col-lg-6 align-items-center justify-content-center">
            <div className="w3-container text-center" >
              <h1 className="w3-jumbo text-black">
                <b>Carol Wargo</b>
              </h1>
              <p>Full Stack Developer | UX Designer.</p>
              <p>Download my resume, view my work or return to my UpWork Profile to get started!<br/>
             <span style={{fontSize:'12px'}}><i>
             'Please note this site is to view my work. All contracts to hire are to go through UpWork, via my UpWork Profile.'</i></span>  </p>
              <button className="w3-button w3-black w3-padding w3-round-xxlarge">
                <a
                  className="button text-white w3-hover-opacity"
                  id="download"
                  download 
                  href={ResumeDownload}
                >
                  <i className="fa fa-download-alt"></i> Download Resume
                </a>
              </button>
              <br />
         
              <div className="text-center w3-padding-16 w3-padding-large" style={{color:'#FF385C'}}>
              <p>NOTICE: I am adding and reconfiguring portfolio page and items... Thanks in advance for your patience. </p>
      
        <div className="row d-flex justify-content-center align-items-center">
          <div className="flex-column col-sm-12 col-md-12 col-lg-12 w3-white text-center justify-content-center align-items-center">
           
              <button
                className="w3-button w3-text-light-grey  w3-margin-right w3-round-xxlarge mt-2 w3-margin-bottom"
                style={{ backgroundColor: "#FF385C" }}
              >
                <Link
                  to="/server#server"
                  className="button text-white"
                  onClick={scrollToTop}
                >
             Learn About Me
                </Link>
              </button>
              <button className=" w3-button w3-text-black w3-padding w3-round-xxlarge mt-2 w3-margin-bottom" 
              style={{backgroundColor:'#6fda44'}}>
              <a href="https://www.upwork.com/freelancers/~01908061bb7029fac2"
                  className="text-black button"
                  onClick={scrollToTop}
                >
                View UpWork Profile
                </a>
              </button>
          </div>
        </div>
       
        {/**End Utility app button */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    </motion.div>
  );
}

export default HomePage;
