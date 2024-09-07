import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import Header from "./Header";

import {faArrowUp} from "@fortawesome/free-solid-svg-icons"

import { useState,useEffect } from "react";



const LAgence = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>

            <Header />


            <section style={{ border: '' }} className="lagence-sec1">

                <section className="rectangular-oval-white-prop" style={{ border: '' }}>
                    <img className="lagence-sec1-img1" src="./images/Rectangle 9521.png" alt />
                </section>



                <section className="sec-1" style={{ border: '' }}>
                    <div className="container">
                        <div className="row  lagence-row align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0" >
                            <div className="col-12 col-md-5 text-center text-lg-start">
                                <h1 className="display-5 text-white fw-bold">C’est Ici que le futur en ligne se créer !</h1>
                                <p className="text-white fs-5 fw-light">
                                    Nous sommes passionnés par le succès de nos clients, et nous sommes fiers de leur fournir des
                                    résultats qui ont un impact positif sur leur entreprise. Que vous cherchiez à augmenter vos ventes,
                                    à attirer plus de trafic sur votre site web, ou à améliorer votre présence en ligne, DIGITALY est
                                    là pour vous aider.
                                </p>
                            </div>


                            {/* project image */}
                            <div className="col-12 col-md-7 my- py-5 text-center text-lg-end" style={{ border: '' }}>
                                
                                {/* uncomment this img and place 3d thing here */}
                                {/* <img className="img-fluid phone-img" src="./images/lagence-sample2.png" alt="Phone" /> */}

                            </div>



                        </div>
                    </div>
                </section>

                <section className="rectangular-oval-white-sec1" style={{ border: '' }}>
                    <img className="lagence-sec1-img1-2" src="./images/Rectangle 9522.png" alt style={{ border: '' }} />
                </section>

            </section>



            <section style={{ border: '' }} className="lagence-sec2">

                <section className="rectangular-oval-white1-lagence" style={{ border: '' }}>
                    <img className="lagence-sec1-img2" src="./images/Rectangle 9544-lagence.png" alt />
                </section>



                <section className="sec-1 m-auto" style={{ border: '' }}>
                    <div className="container">
                        <div className="row  lagence-row align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0">
                            <div className="col-12 col-md-5 text-center text-lg-start">
                                <h1 className="display-5 text-white fw-bold">Performance et créativité</h1>
                                <p className="text-white fs-5 fw-light">
                                    On connaît l’importance de votre image et des messages que vous souhaitez véhiculer.
                                    Nous avons une approche stratégique s’articulant autour de deux axes indissociables:
                                    la créativité et la performance.
                                </p>
                            </div>


                            {/* project image */}
                            <div className="col-12 col-md-7 my- py-5 text-center text-lg-end" style={{ border: '' }}>

                                {/* uncomment this img and place 3d thing here */}
                                {/* <img className="img-fluid phone-img" src="./images/lagence-sample2.png" alt="Phone" /> */}

                            </div>



                        </div>
                    </div>
                </section>



            </section>


            <section style={{ border: '' }} className="lagence-sec3">

                <section className="sec-1 m-auto" style={{ border: '' }}>
                    <div className="container">
                        <div className="row  lagence-row align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0">
                            <div className="col-12 col-md-5 text-center text-lg-start">
                                <h1 className="display-5 text-white fw-bold">Un Service Défini et Adaptée</h1>
                                <p className="text-white fs-5 fw-light">
                                    Notre principal objectif est de favoriser le développement de vos affaires et de votre
                                    clientèle en vous proposant des solutions pertinentes, inventives et cohérentes qui se
                                    démarqueront de la concurrence et dont les résultats seront mesurables. Et percutants.
                                    Pas de recette toute faite, nos services ce doivent d’être adapté à chaque client.
                                </p>
                            </div>


                            {/* project image */}
                            <div className="col-12 col-md-7 my- py-5 text-center text-lg-end" style={{ border: '' }}>
                                

                            {/* uncomment this img and place 3d thing here */}
                            {/* <img className="img-fluid phone-img" src="./images/lagence-sample2.png" alt="Phone" /> */}




                            </div>



                        </div>
                    </div>
                </section>


                <section className="rectangular-oval-white2-lagence" style={{ border: '' }}>
                    <img className="lagence-sec1-img3" src="./images/Rectangle 9543-lagence.png" alt style={{ border: '' }} />
                </section>

            </section>



            <section style={{ border: '' }} className="lagence-sec4">





                <section className="sec-1 m-auto" style={{ border: '' }}>
                    <div className="container">
                        <div className="row  lagence-row align-items-center mt-5 mt-lg-0 pt-5 pt-lg-0">
                            <div className="col-12 col-md-5 text-center text-lg-start">
                                <h1 className="display-5 text-white fw-bold">Un Succès Durable & Chronologique</h1>
                                <p className="text-white fs-5 fw-light">
                                    Nous sommes passionnés par le succès de nos clients, et nous voulons que celui sois durable
                                     et pour cela nous évoluons chaque jours et améliorons chaque jours nos approches sur le web
                                      notre équipe et constamment entrain d’apprendre et d’évoluer grâce a des veilles continue
                                       tel la musique qui depuis des années a bien évoluer !
                                </p>
                            </div>


                            {/* project image */}
                            <div className="col-11 col-md-7 my- py-5 text-center text-lg-end m-auto" style={{ border: '' }}>

                            {/* uncomment this img and place 3d thing here */}
                            {/* <img className="img-fluid lagence-sample-img" src="./images/lagence-sample2.png" alt="Phone" /> */}

                            </div>



                        </div>
                    </div>
                </section>



            </section>

            <Footer/>


              {/* Back to Top */}
              <a href="#" className={`btn btn-lg btn-lg-square rounded-circle back-to-top ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
                {/* <i className="bi bi-arrow-up text-white" /> */}
                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
            </a>

            

        </>
    );
}

export default LAgence;