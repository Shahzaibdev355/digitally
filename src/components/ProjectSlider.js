
import "../assets/css/slider.css"

import React, { useState, useEffect } from 'react';

const ProjectSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(1);

    const changeSlide = () => {
       
            setCurrentSlide(currentSlide => {
                let nextSlide = currentSlide + 1;
                if (nextSlide > 5) {
                    nextSlide = 1;
                }
                return nextSlide;
            });
        
    };

    useEffect(() => {
        const slideInterval = setInterval(changeSlide, 4000);

        return () => {
            clearInterval(slideInterval);
        };
    }, []); // Empty dependency array ensures this effect runs only once


    return (
        <section id="slider">
            <input type="radio" name="slider" id="s1" checked={currentSlide === 1} />
            <input type="radio" name="slider" id="s2" checked={currentSlide === 2} />
            <input type="radio" name="slider" id="s3" checked={currentSlide === 3} />
            <input type="radio" name="slider" id="s4" checked={currentSlide === 4} />
            <input type="radio" name="slider" id="s5" checked={currentSlide === 5} />
            
            <label htmlFor="s1" id="slide1"><img src="./images/camera.png" alt="img-1" /></label>
            <label htmlFor="s2" id="slide2"  ><img src="https://wallpaper.forfun.com/fetch/7d/7d6b6ec95bb48b6d78b5971f97c905aa.jpeg" alt="img-2" /></label>
            <label htmlFor="s3" id="slide3"><img src="https://www.paruljauhari.com/wp-content/uploads/2020/02/camera-581126_1920-1440x1280.jpg" alt="img-3" /></label>
            <label htmlFor="s4" id="slide4"><img src="https://wallpapercave.com/wp/wp2634222.jpg" alt="img-4" /></label>
            <label htmlFor="s5" id="slide5"><img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt="5" /></label>
        </section>

    );
}

export default ProjectSlider;