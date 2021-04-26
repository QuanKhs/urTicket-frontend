import ArrowCarousel from "components/ArrowCarousel";
import CustomSlide from "components/CustomSlide";
import Icons from "components/Icons";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './MovieExplore.scss';


export default function MovieExplore() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'movie-explore',
        nextArrow: <ArrowCarousel
            isCustom={'next'}
            arrowSVG={<Icons name='Next' />}
        />,
        prevArrow: <ArrowCarousel
            isCustom={'prev'}
            arrowSVG={<Icons name='Prev' />}
        />,
    };

    return (
        <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                    <CustomSlide index={index} className={`box-${item}`} />
                )
            })}
        </Slider>
    );

}