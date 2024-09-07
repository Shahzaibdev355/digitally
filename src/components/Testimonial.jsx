import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap-icons/font/bootstrap-icons.css';




const Testimonial = () => {

    const reviews = [

        // in strong tag the text is bold

        {
            text: "Nous avons conçu notre site web avec <strong>DIGITALY</strong>. C'est désormais notre prestataire en développement pour toutes les évolutions du sites.",
            name: "Mrs. Van Hartmann",
            position: "PDG de Harmonia",
            image: "/images/client-review.png",
            rating: 5 // Add the rating here
        },
        {
            text: "Nous avons conçu notre site web avec <strong>DIGITALY</strong>. C'est désormais notre prestataire en développement pour toutes les évolutions du sites.",
            name: "Mrs. Van Hartmann",
            position: "PDG de Harmonia",
            image: "/images/client-review.png",
            rating: 5 // Add the rating here
        },
        {
            text: "Nous avons conçu notre site web avec <strong>DIGITALY</strong>. C'est désormais notre prestataire en développement pour toutes les évolutions du sites.",
            name: "Mrs. Van Hartmann",
            position: "PDG de Harmonia",
            image: "/images/client-review.png",
            rating: 5 // Add the rating here
        },
        {
            text: "Nous avons conçu notre site web avec <strong>DIGITALY</strong>. C'est désormais notre prestataire en développement pour toutes les évolutions du sites.",
            name: "Mrs. Van Hartmann",
            position: "PDG de Harmonia",
            image: "/images/client-review.png",
            rating: 5 // Add the rating here
        }
        // Add more reviews here
    ];

    return (
        <>
            <OwlCarousel
                className="owl-theme"
                loop
                center
                items={3}
                margin={30}
                autoplay
                dots
                nav
                autoplayTimeout={8500}
                smartSpeed={450}
                navText={[
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ]}
                responsive={{
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1170: {
                        items: 3
                    }
                }}
            >
                {reviews.map((review, index) => (
                    <div className="item review-card1-col" key={index}>
                        <div className="shadow-effect gradient-box-cus px-4 py-2 mx-2 my-3">
                            <div className="review-card1">
                                <div className='review-card1-ratingrow'>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FontAwesomeIcon icon={faStar} key={i} />
                                    ))}
                                </div>
                                {/* <p className='review-card1-para' >
                                    {review.text}
                                </p> */}
                                <p className='review-card1-para' dangerouslySetInnerHTML={{ __html: review.text }} />
                                <div className='review-card1-clientDetails'>
                                    <img src={review.image} alt={review.name} />
                                    <div className='review-card1-clientDetails-col'>
                                        <h4>{review.name}</h4>
                                        <p>{review.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </>
    );
}

export default Testimonial;
