const Footer = () => {
    return (
        <>

            <section className="sec-5" id="footer" >
                <div className="containe  footer-contact-div">
                    <div className="gradient-cus-box-sty p-5 my-5 mt-0">
                        <div className="row py-3">
                            <div className="col-12 col-md-9">
                                <h1 className="fw-bold text-center text-lg-start" style={{ color: '#1F324E' }}>Vers votre futur</h1>
                                <p className="text-center text-md-start footer-contact-div-para">Vous souhaitez en savoir plus sur nos expertises, notre agence et 
                                les talents qui l’animent ? <span><br /></span> Venez discuter avec eux de votre projet et obtenez des solutions pertinentes !</p>
                            </div>
                            <div className="col-12 col-md-3 text-center text-lg-start m-auto">
                                <button className="py-2 py-lg-4 px-5 mt-2 text-white btn fs-5 rounded-3 footer-contact-div-contactBtn">Nous Contacter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sec-6" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3 text-center text-md-start">
                            <img className="img-fluid text-center" src="./images/Group 1.png" alt />
                            <p className="text-white fw-lighter" style={{ fontSize: 14 }}>Construisons ensemble votre futur en ligne.</p>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/Facebook.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/Twitter.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/Instagram.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/LinkedIn.png" alt /></a>
                            <a className="mx-1" href="#"><img className="img-fluid" src="./images/YouTube.png" alt /></a>
                        </div>
                        <div className="col-12 col-md-2 text-center text-md-start footer-links">
                            <h4 className="text-white mt-5 mt-md-0">A PROPOS</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="#">L’agence</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Plan du site</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Mention Légales</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Mention Légales</a>
                        </div>
                        <div className="col-12 col-md-3 text-center text-md-start footer-links">
                            <h4 className="text-white mt-5 mt-md-0">EXPERTISES</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="#">Développement de Site Web</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Développement d’App Mobiles</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Community Management</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Création Graphique</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Création de Contenu</a>
                        </div>
                        <div className="col-12 col-md-2 text-center text-md-start footer-links">
                            <h4 className="text-white mt-5 mt-md-0">ACCES UTILES</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="#">Nos Partenaires</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">Nos Références</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="#">On Recrute</a>
                        </div>

                        <div className="col-12 col-md-2 text-center text-md-start footer-links">
                            <h4 className="text-white mt-5 mt-md-0">nous contacter</h4>
                            <a className="d-block text-decoration-none fw-light mt-3" href="mailto:contact@digitaly.fr">contact@digitaly.fr</a>
                            <a className="d-block text-decoration-none fw-light mt-2" href="tel:0426707067">04 26 70 70 67</a>
                        </div>




                        <footer className="mt-5 text-md-start footer-sec">

                            <div>
                                <p className="mt-1 footer-copyright-para" style={{ color: 'rgba(255, 255, 255, 0.781)' }}>© 2024 DIGITALY - Agence digitale &amp; marketing</p>
                            </div>

                            <div className="footer-link-div footer-links">
                                <a className="text-decoration-none fw-light mt-2 mx-2 mx-md-" href="#">Mentions Légales</a>
                                <a className="text-decoration-none fw-light mt-2 mx-2 mx-md-" href="#">Politiques de confidentialités</a>
                                <a className="text-decoration-none fw-light mt-2 mx-2 mx-md-" href="#">CGU & CGV</a>
                                <a className="text-decoration-none fw-light mt-2 mx-2 mx-md-" href="#">Plan du site</a>

                            </div>



                        </footer>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Footer;