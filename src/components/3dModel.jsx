import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image2 from "../assets/images/newImage.png";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Basic3DScene = () => {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInSec2, setIsInSec2] = useState(false);

  useEffect(() => {
    // Setup Three.js
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const fov = 80;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.9;
    const far = 1000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Strong white light
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Variable to store the model
    let model;

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load("/images/Digitally Iphone Mock up 3D.gltf", (gltf) => {
      model = gltf.scene;
      model.name = "iphoneModel"; // Set a name for the model
      model.scale.set(3, 3.5, 3.5);
      model.position.x = 5;
      model.position.y = -1.7;
      model.position.z = 0;
      // Rotate the model to view the front side
      model.rotation.x =  -0.1;
      model.rotation.y =  -0.5;
      model.rotation.z =  -0.1;
    
      // Adjust this angle as needed

      scene.add(model);

 

      // GSAP animation setup (moved inside loader callback to ensure the model is defined)
      const car_anim = gsap.timeline();
      car_anim
        .to(model.rotation, {
          x: "+=6.5",
          y: "+=6.5",
         
          z: "+=0.5",
          duration: 5, // Increase duration to slow down the animation
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-one",
            endTrigger:".section-two",
            scrub: 1.5, // Increase scrub to make the animation follow the scroll more slowly
            start: "50% 60%", // Animation starts when top of sec-2 reaches 80% of the viewport
            end: "0% 65%",
  
        
          },
        })
        .to(model.scale,{
          x:0,
          y:0,
          z:0,
          scrollTrigger: {
            trigger: ".section-two",
            scrub: 1.5, // Increase scrub to slow down the scroll-based animation
            start: "0% 65%", // Animation starts when top of sec-2 reaches 80% of the viewport
            end: "0% 65%",
            scale:0,
            markers:true
          },
        })
        .to(model.position, {
          y: "+=0.5",
          x: "-=8.2",
          z: "-=1.6",
         
          duration: 5, // Increase duration to slow down the animation
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".section-two",
            scrub: 1.5, // Increase scrub to slow down the scroll-based animation
            start: "0% 80%", // Animation starts when top of sec-2 reaches 80% of the viewport
            end: "0% 65%",
          },
        });
    });

    // Initial camera position
    camera.position.set(0, 1.25, 5.50);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Resize event
    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div
        className="scene one"
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          inset: "0",
          position: "fixed",
          zIndex: 999,
        }}
      ></div>
      <section
        className="section-one"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "150px",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1 className="display-5 text-white fw-bold">
            Construisons ensemble votre{" "}
            <span className="gradient-text-sec-1">futur en ligne</span>
          </h1>
          <p className="text-white fs-5 fw-light">
            Découvrez nous au travers du digital
          </p>
        </div>
      </section>
      <section
        className="section-two"
        id="agence"
        style={{ border: "3px solid green" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 order-2 order-md-1 text-center">
        
               <img
               className="img-fluid overlap-img"
               src="./images/man-effect2.png"
               alt
             />
         
            </div>
            <div className="col-12 col-lg-7 mb-5 mb-md-0 order-1 order-md-2">
              <div className="mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5 pt-md-3 pt-lg-2 pt-xl-4 pt-xxl-5">
                <h4 className="text-white fw-light mt-3 mt-md-0 ceo-sec-para">
                  “Nous sommes passionnés par le succès de nos clients, et nous
                  sommes fiers de leur fournir des résultats qui ont un impact
                  positif sur leur entreprise. Que vous cherchiez à augmenter
                  vos ventes, à attirer plus de trafic sur votre site web, ou à
                  améliorer votre présence en ligne,{" "}
                  <strong className="fw-semibold"> DIGITALY </strong>
                  est là pour vous aider.”
                </h4>
                <h4 className="fw-semibold text-white text-end">
                  FORHRANI Mehdi
                </h4>
                <h5
                  className="text-end text-white fw-light"
                  style={{ fontStyle: "italic" }}
                >
                  Directeur Général DIGITALY
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basic3DScene;
