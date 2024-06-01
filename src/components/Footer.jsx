import React from 'react';
import { motion } from 'framer-motion';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
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
    
    >
    <div className='footer' id='footer' style={{fontFamily:'Raleway'}}>
    <MDBFooter className=' w3-black' >
    

   
    <section className='text-center w3-padding-24'>
      <MDBContainer className='mt-5 text-center text-md-start'>
        <MDBRow className='mt-3'>
          <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-5 me-2 w3-padding-large'>
            <h6 className='mb-4 text-uppercase fw-bold'>
         
              <b>Carol</b> Wargo
            </h6>
            
            <p style={{fontSize:'14px'}}>
           Hire me on Upwork!
              Click the 'UpWork Profile' below to navigate to my UpWork 
              profile page and get started. 
              </p>
              <button className=" w3-button w3-text-light-grey w3-padding w3-round-xxlarge" 
              style={{backgroundColor:'#6fda44', fontSize:'14px'}}>
              <a href="https://www.upwork.com/freelancers/~01908061bb7029fac2"
                  className="text-white button"
                  onClick={scrollToTop}
                >
                <b>UpWork Profile</b>
                </a>
              </button>
          </MDBCol>
          
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 w3-padding-large'>
          
        <h6 className='w3-margin-bottom fw-bold'>PAGES</h6>
          
              <Link to='/' className='text-reset fw-light' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
              Home
              </p>
              </Link>
          
           
              <Link to='/about' className='text-reset fw-light' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
                About
                </p>
              </Link>
           
           
              <Link to='/resume' className='text-reset fw-light' onClick={scrollToTop} >
              <p style={{fontSize:'14px'}}>
                Digital Resume
                </p>
              </Link>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 justify-content-center w3-padding-large'>
          <h6 className='w3-margin-bottom fw-bold'>SAMPLES</h6>
            <p style={{fontSize:'14px'}}>
              <Link to='/blog' className='text-reset' onClick={scrollToTop} >
               Blog
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
            <Link to='/album' className='text-reset' onClick={scrollToTop} >
                Album
              </Link>
            </p>
            <p style={{fontSize:'14px'}}>
              <a href='http://carolwargo.github.io/realestate' className='text-reset' onClick={scrollToTop} >
                Real Estate
              </a>
            </p> 
            
          </MDBCol>


        </MDBRow>
      </MDBContainer>
    </section>
    <hr />
    <section className='text-center d-flex justify-content-center w3-padding-large border-bottom'>

      <p style={{fontSize:'12px', fontWeight:'light'}}> © 2023 Copyright:    <a className='text-white' href='https:carolwargo.github.io/react-portfolio' style={{fontSize:'12px'}}> <b> C</b>WARGO
        </a></p>
   

    </section>
    </MDBFooter> 
  </div>
  </motion.div>
  );
}