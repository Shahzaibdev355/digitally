import { useState, useEffect, useRef, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faStar } from "@fortawesome/free-solid-svg-icons";
// import { Parallax } from "react-scroll-parallax";



// import SimpleParallax from "simple-parallax-js";

import Header from "./Header";
import ProjectSlider from "./ProjectSlider";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Testimonial from "./Testimonial";


import gsap from "gsap";
import SplitType from "split-type";
import Basic3DScene from "./3dModel";
import Scene from "./3dModel";



const Home = () => {
  const textRefs = useRef([]);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll("#animate-text");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && animationsEnabled) {
          const splitText = new SplitType(
            entry.target.querySelector(".text-to-animate")
          );

          gsap.fromTo(
            splitText.chars,
            { opacity: 0 },
            {
              opacity: 1,
              stagger: 0.07,
              ease: "power2.out",
              onComplete: () => {
                entry.target.classList.add("animated");
              },
            }
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust as needed
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [animationsEnabled]); // Add animationsEnabled as a dependency

  // Header Links Function passed as prop (To disable animation while scroll on specific section)
  const handleScrollToSection = (id) => {
    setAnimationsEnabled(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setAnimationsEnabled(true), 1000);
    }
  };

  // Back to top functionality
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrollToTop = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // To disable scroll animation when backing up
  const scrollToTop = (e) => {
    e.preventDefault();
    setAnimationsEnabled(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => setAnimationsEnabled(true), 1000);
  };

  return (
    <>
      
      <Header scrollToSection={handleScrollToSection} />

      {/* <Parallax speed={10}> */}
      <section
        className="rectangular-oval-white-prop"
        style={{ backgroundAttachment: "" }}
      >
        <img className="w-75" src="./images/Rectangle 9521.png" alt />
      </section>
      {/* </Parallax> */}

      {/* <Parallax speed={20}> */}



      {/* ====================Model work in this section==================== */}
  
     
                {/* =================3d model will be place here================= */}
              
      <Scene />
    
        
   
              
  
         
      



      {/* </Parallax> */}

      {/* <section className="rectangular-oval-white-prop-2">
        <img className="w-100" src="./images/Rectangle 9522.png" alt />
      </section> */}

  

      <section
        className="sec-3-services"
        id="animate-text"
        ref={(el) => (textRefs.current[0] = el)}
        style={{ position: "relative" }}
      >
        <div className="container" id="service">
          <div className="rectangular-oval-white-prop-3">
            <img className="img-fluid" src="./images/Rectangle 9544.png" alt />
          </div>
          <div
            className="text-overlay-services my-5"
            style={{ position: "relative" }}
          >
            <h1
              className="fw-bold fs-cus-sty service-heading"
              style={{ color: "rgba(255, 255, 255, 0.192)" }}
            >
              SERVICES
            </h1>

            <div className="p-text-adjust-sty text-to-animate">
              <h2 className="text-white fw-light servive-overlap-para">
                Nos services pour votre <strong> Succès digital </strong>
              </h2>

              {/* <AnimatedText text="Nos services pour votre" /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Dev App 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        Développement
                        <br />
                        D'Applications Mobiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Dev web  full stack 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        Développement
                        <br />
                        D'Applications Mobiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Web design 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        Développement
                        <br />
                        D'Applications Mobiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Graphic design 2.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        Développement
                        <br />
                        D'Applications Mobiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Audiovisual creation 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        Développement
                        <br />
                        D'Applications Mobiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="gradient-box-cus px-4 py-2 mx-2 my-3">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid"
                      src="./images/-_Community management 1.png"
                      alt
                    />
                  </div>
                  <div className="col-12" id="project">
                    <div className="mx-4">
                      <p className="fw-bold" style={{ color: "#1F324E" }}>
                        Développement
                        <br />
                        D'Applications Mobiles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec-4-projects py-5"
        id="animate-text"
        ref={(el) => (textRefs.current[1] = el)}
      >
        <div className="project-container">
          <div className="row justify-content-evenly">
            <div className="col-12 col-lg-5">
              <div
                className="text-overlay-projects mt-0 mt-md-1 mt-lg-0  project-heading-div"
                style={{ position: "relative" }}
              >
                <h1
                  className="fw-bold fs-cus-sty-projects"
                  style={{ color: "rgba(255, 255, 255, 0.192)" }}
                >
                  PROJECTS
                </h1>
                <div className="p-text-adjust-sty-project text-to-animate">
                  <h2 className="text-white fw-semibold">Nos Réalisations</h2>
                </div>
              </div>
              <div className="text-white mt-4 mt-md-0 text-center text-md-start">
                <p className="projects-para">
                  Explorez notre portfolio, découvrez la diversité des projets
                  que nous avons récemment menés à bien pour nos clients. De
                  l'optimisation de la présence en ligne à la conception de
                  stratégies digitale novatrices, nos réalisations récentes
                  reflètent notre expertise et notre dévouement. Votre marque
                  pourrait être la prochaine success story dans notre portfolio
                  en expansion.
                </p>
              </div>
              <div className="text-center text-md-start">
                <button className="mt-5 py-2 px-5 btn fw-bold fs-4 rounded-3 project-sec-btn">
                  Découvrir
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6  align-self-center">
              <ProjectSlider />
            </div>
          </div>
        </div>
      </section>

      <section
        className="sec-3-services"
        id="animate-text"
        ref={(el) => (textRefs.current[2] = el)}
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="rectangular-oval-white-prop-3">
            <img className="img-fluid" src="./images/Rectangle 9544.png" alt />
          </div>
          <div
            className="text-overlay-reference my-5"
            style={{ position: "relative" }}
          >
            <h1
              className="fw-bold fs-cus-sty-testimonial"
              style={{ color: "rgba(255, 255, 255, 0.192)" }}
            >
              REFERENCES
            </h1>
            <div className="p-text-adjust-sty-testimonial-div  text-to-animate">
              <h2 className="text-white fw-light p-text-adjust-sty-testimonial">
                Ils parle de nous <strong> mieux que nous ! </strong>
              </h2>
            </div>
          </div>
          {/* </div>
                <div className='review-section'> */}

          <div className="row">
            <Testimonial />
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      <a
        href=""
        className={`btn btn-lg btn-lg-square rounded-circle back-to-top ${
          isVisible ? "show" : "hide"
        }`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-white" />
      </a>

      {/* {isVisible && (
          <a
            href="#"
            className="btn btn-lg btn-lg-square rounded-circle back-to-top show"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-white" />
          </a>
        )} */}
      {/* </SmoothScrollbarWrapper> */}
    </>
  );
};

export default Home;
