import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Slider from "react-slick";
import { Grid } from '@material-ui/core'
import './style.scss'

// images
import test from 'images/test.png'

const Testmonial = ({ className }) => {
    const testmonials = {
        title: 'Testimonials',
        sliders: [
            {
                image: test,
                title: 'Sharmila Sivasankaran - QA Director, Klick Health.',
                details: 'Global technology team has been really helpful to our business. We received 3 corporate training in Webservice testing, SQL, and Automation Framework thus far. They have also provided 5 QA Analysts from their team within a short time notice. Keep up the good work guys!.',
                name: 'Rosalind D. Willam',
                desig: 'QA Director'
            },
           /* {
                image: test,
                title: 'Representing all of the major telecom companies Geeks On Call finds the right service.',
                details: 'Their new professional telecom audit service helps businesses maximize the use of their existing technology while ensuring that they are getting the best prices on their voice and tata contracts.',
                name: 'Rosalind D. Willam',
                desig: 'Founder'
            },*/
        ]
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        swipe: true,
        swipeToSlide: true,
        slidesToScroll: 1
    };
    return (
        <Grid className={`testmonialArea ${className}`}>
            <h2 className="testStoke">{testmonials.title}</h2>
            <Grid className="container" container>
                <Grid item xs={12}>
                    <Slider
                        className="testSlider"
                        {...settings}>
                        {testmonials.sliders.map((slider, i) => (
                            <Grid key={i} className="testSliderItem">
                                <Grid container alignItems="center" spacing={4}>
                                    <Grid item lg={7} md={6} xs={12}>
                                        <Grid className="testImg">
                                            <img src={slider.image} alt="" />
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={5} md={6} xs={12}>
                                        <Grid className="testContent">
                                            <span className="count">{i + 1}</span>
                                            <h3>{slider.title}</h3>
                                            <p> {slider.details} </p>
                                            <p> {slider.details} </p>
                                            <h4>{slider.name}</h4>
                                            <span>{slider.desig}</span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Testmonial;
