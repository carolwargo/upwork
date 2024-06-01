import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import the CSS file where you define custom styles

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeNavbar = (e) => {
    try {
      e.stopPropagation();
      setExpanded(false);
    } catch (error) {
      console.error("Error closing navbar:", error);
    }
  };

  const handleNavLinkClick = () => {
    scrollToTop();
  };

  const handleNavLinkClickAndCloseNavbar = (e) => {
    handleNavLinkClick();
    closeNavbar(e);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="home"
    >
      <Navbar
        expand="lg"
        className="shadow-sm bg-body-tertiary fixed-top"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ fontSize: "14px" }}
            onClick={handleNavLinkClickAndCloseNavbar}
          >
            <b>CW</b>HOME
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavbarToggle}
          >
            <FontAwesomeIcon icon={faBars} color="black" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/about#about"
                onClick={handleNavLinkClickAndCloseNavbar}
                style={{ fontSize: "14px" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume#resume"
                onClick={handleNavLinkClickAndCloseNavbar}
                style={{ fontSize: "14px" }}
              >
                Resume
              </Nav.Link>

             
              <NavDropdown title="My Work" id="basic-nav-dropdown"  style={{ fontSize: "14px" }}>
              <Nav.Link
              className="dropdown-item w3-padding"
                as={Link}
                to="/portfolio#portfolio"
                style={{ fontSize: "14px" }}
                onClick={handleNavLinkClickAndCloseNavbar}
              >
               Web Components
              </Nav.Link>

              <Nav.Link
                 className="dropdown-item w3-padding"
                as={Link}
                to="/page-samples#page-samples"
                style={{ fontSize: "14px" }}
                onClick={handleNavLinkClickAndCloseNavbar}
              >
                Landing Pages
              </Nav.Link>

              <Nav.Link
                 className="dropdown-item w3-padding"
                as={Link}
                to="/forms#forms"
                style={{ fontSize: "14px" }}
                onClick={handleNavLinkClickAndCloseNavbar}
              >
                Forms
              </Nav.Link>

              <Nav.Link
                 className="dropdown-item w3-padding"
                as={Link}
                to="/cards#cards"
                style={{ fontSize: "14px" }}
                onClick={handleNavLinkClickAndCloseNavbar}
              >
               Cards & Images
              </Nav.Link>

              <Nav.Link
                 className="dropdown-item w3-padding"
                as={Link}
                to="/server#server"
                style={{ fontSize: "14px" }}
                onClick={handleNavLinkClickAndCloseNavbar}
              >
              Utility Apps
              </Nav.Link>
            
              <Nav.Link
                 className="dropdown-item w3-padding"
                as={Link}
                to="/graphics#graphics"
                style={{ fontSize: "14px" }}
                onClick={handleNavLinkClickAndCloseNavbar}
              >
               Graphics
              </Nav.Link>
            
            
            </NavDropdown>
            </Nav>
            <Nav>
             
                <Link
                  to="/contact#contact"
                  className="button text-grey mr-3"
                  style={{ fontSize: "14px" }}
                  onClick={handleNavLinkClickAndCloseNavbar}
                >
              <button className="btn-outline-white w3-button btn-sm w3-round-xxlarge px-3 shadow" >
              <i className="far fa-user-circle"></i> contact
              </button>
                </Link>
              
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default BasicExample;
