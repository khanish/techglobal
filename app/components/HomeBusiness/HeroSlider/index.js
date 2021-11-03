
import React, { Fragment } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom'
import './style.scss'

// images
import image1 from 'images/slider/img4.jpg'
import image2 from 'images/slider/img2.jpg'
import image3 from 'images/slider/img3.jpg'

const HeroSlider = (props) => {
    const sliders = [
        {
            subtitle: 'Want to take a Tech career in FrontEnd Dev, BackEnd Dev, Full Stack Dev or  DevOps Eng.',
            title: 'We are all about Developing High Tech Professionals',
            image: image1,
            id: 1
        },
        {
            subtitle: 'At TekGlobal, We Get It, We Do It and We Deliver It',
            title: 'TekGlobal is a High Tech Business Solution Center',
            image: image2,
            id: 2
        },
        {
            subtitle: 'Cunsult TekGlobal Today and get the IT infrastructure your project, business, organization and others qualitatively need',
            title: 'We advice on StartUps or Upgrades of IT infrastructure',
            image: image3,
            id: 3
        },
    ]

    const params = {
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        parallaxEl: {
            el: '.parallax-bg',
        },
        autoplay: {
            delay: 12000,
            disableOnInteraction: false
        },
        pagination: false,
        navigation: false
    }
    return (
        <Swiper
            {...params}>
            {sliders.map(slider => (
                <Grid key={slider.id} style={{ background: `url(${slider.image}) no-repeat center center / cover` }} className="heroSliderItem">
                    <Grid spacing={4} container className="container">
                        <Grid item xs={12} className="heroSliderContent">
                            <h4 data-swiper-parallax="-5000">{slider.subtitle}</h4>
                            <h2 data-swiper-parallax="-4000">{slider.title}</h2>
                            <ul data-swiper-parallax="-3000" className="heroSliderBtn">
                                <li><Button component={Link} to="/about">Read More <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" className=""></path></svg></Button></li>
                                <li><Button component={Link} to="/contact">Contact Us <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" className=""></path></svg></Button></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            ))}

        </Swiper>
    );
}

export default injectIntl(HeroSlider);
