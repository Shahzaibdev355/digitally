import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "../assets/css/styles.css";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "home",
    path: "/home", // Add path for navigation
  },
  {
    id: 1,
    navTitle: "showreel",
    path: "/showreel",
  },
  {
    id: 2,
    navTitle: "services",
    path: "/services",
  },
  {
    id: 3,
    navTitle: "about",
    path: "/about",
  },
  {
    id: 4,
    navTitle: "contact",
    path: "/contact",
  },
];

const Test3 = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
    <div className="container">
    <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"} className="mobile-nav">
      <div className="logo-container">
        <motion.h1 variants={hideNavItemsVariant}>Design Agency</motion.h1>
      </div>
      <div className="menu-container">
        <motion.div
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          Menu
        </motion.div>
      </div>
      <motion.div variants={mobileMenuVariant} className="mobile-menu">
        <motion.button
          variants={fadeInVariant}
          onClick={() => setMobileNavOpen(false)}
        >
          Close
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
        <motion.div variants={fadeInVariant} className="contact">
          <h5>+852 5650 2233</h5>
          <h5>hi@designagency.com</h5>
        </motion.div>
      </motion.div>
    </motion.nav>

    </div>
  );
};

export default Test3;
