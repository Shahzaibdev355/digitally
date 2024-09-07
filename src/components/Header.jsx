import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import gsap from "gsap";

import "../assets/css/mobile-nav.css";

const Header = ({ scrollToSection }) => {

  // ============================for sticky navbar============================
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //     function handleScroll() {
  //         if (window.scrollY > 50) {
  //             setIsScrolled(true);
  //             document.body.style.paddingTop = `${document.getElementById('header').offsetHeight}px`;
  //         } else {
  //             setIsScrolled(false);
  //             document.body.style.paddingTop = '0';
  //         }
  //     }

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);



  const MOBILE_NAV_ITEMS = [
    {
      id: 0,
      navTitle: "Accueil",
      path: "/", // Add path for navigation
    },
    {
      id: 1,
      navTitle: "L’Agence",
      path: "/LAgence",
    },
    {
      id: 2,
      navTitle: "Services",
      path: "#services",
    },
    {
      id: 3,
      navTitle: "Réalisations",
      path: "#",
    },
    {
      id: 4,
      navTitle: "Recrutement",
      path: "#",
    },
    {
      id: 5,
      navTitle: "Contact",
      path: "#",
    },
  ];

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    // Toggle body overflow based on mobileNavOpen state
    if (mobileNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function to reset overflow style when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [mobileNavOpen]);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  

  return (
    <>
      {/* <nav className={`navbar navbar-expand-lg ${isScrolled ? 'fixed-top fade-in' : ''}`} id="header"> */}

      <nav className="navbar navbar-expand-lg">
        <div className="container py-3">
          <Link className="nav-brand" to="/">
            <img className="img-fluid" src="./images/Group 1.png" alt />
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white fw-semibold mx-md-4"
                  aria-current="page"
                  to="/LAgence"
                >
                  L’Agence
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-semibold mx-md-4"
                  onClick={() => scrollToSection("#service")}
                  href="#service"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-semibold mx-md-4"
                  onClick={() => scrollToSection("#project")}
                  href="#project"
                >
                  Réalisations
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-semibold mx-md-4"
                  onClick={() => scrollToSection("#footer")}
                  href="#footer"
                >
                  Recrutement
                </a>
              </li>
            </ul>
            <a
              className="btn header-contact-btn fw-semibold px-md-5"
              type="submit"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* <div className="mobile-nav-container"> */}
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="mobile-nav"
      >
        <div className="logo-container">
          {/* <motion.h1 variants={hideNavItemsVariant}>Design Agency</motion.h1> */}
          <Link className="nav-brand" to="/">
            <motion.img
              className="img-fluid mobile-logo"
              src="./images/Group 1.png"
              alt
              variants={hideNavItemsVariant}
            />
          </Link>
        </div>
        {/* <div className="menu-container">
            <motion.div
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}
            >
              Menu
            </motion.div>
          </div> */}

        <div className="menu-container">
          <motion.button
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="open-menu-icon"
          >
            <FontAwesomeIcon icon={faBars} /> {/* Menu icon */}
          </motion.button>
        </div>

        <motion.div variants={mobileMenuVariant} className="mobile-menu">
          {/* <motion.button
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
            >
              Close
            </motion.button> */}

          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
            className="close-menu-icon"
          >
            <FontAwesomeIcon icon={faXmark} /> {/* Close icon */}
          </motion.button>

          <motion.ul variants={ulVariant}>
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <Link
                  className="nav-link active text-white fw-semibold mx-md-4"
                  aria-current="page"
                  to={navItem.path} // Use the path from the navItem
                >
                  {navItem.navTitle}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          {/* <motion.div variants={fadeInVariant} className="contact">
              <h5>+852 5650 2233</h5>
              <h5>hi@designagency.com</h5>
            </motion.div> */}
        </motion.div>
      </motion.nav>
      {/* </div> */}
    </>
  );
};

export default Header;
