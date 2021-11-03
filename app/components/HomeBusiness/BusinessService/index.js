import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Slider from "react-slick";
import './style.scss'

// images 
import icon1 from 'images/icons/service/icon1.png'
import icon2 from 'images/icons/service/icon2.png'
import icon3 from 'images/icons/service/icon3.png'
import icon4 from 'images/icons/service/icon4.png'

const BusinessService = (props) => {
    const services = {
        title: `${props.intl.formatMessage({ ...messages.WhatWeDo })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.Services })}`,
        service: [
            {
                title: `${props.intl.formatMessage({ ...messages.ProductDesign })}`,
                icon: 'pe-7s-study',
                details: '1-on-1 Training, 6-Hour Classes, Flexible Dates, Best Value, Enroll Now! Free Demo Class, Guaranteed Schedule, Certified Instructor, Accredited Training. ',
                id: 1,
                items: [
                    {
                        icon: 'pe-7s-study',
                        text: 'DevOps Engineering'
                    },
                    {
                        icon: 'pe-7s-study',
                        text: 'Web Design'
                    },
                    {
                        icon: 'pe-7s-study',
                        text: 'Graphic Design'
                    },
                    {
                        icon: 'pe-7s-study',
                        text: 'Software Development'
                    },
                    {
                        icon: 'pe-7s-study',
                        text: 'Game Design'
                    },
                ]
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: 'pe-7s-expand1',
                details: 'We accompany you through the entire digitization process! Get in touch with our experts.',
                id: 2,
                items: [
                    {
                        icon: 'pe-7s-paint',
                        text: 'Seo'
                    },
                    {
                        icon: 'pe-7s-target',
                        text: 'SMM'
                    },
                    {
                        icon: 'pe-7s-add-user',
                        text: 'SEM'
                    },
                    {
                        icon: 'pe-7s-joy',
                        text: 'Engine Marketing'
                    },
                    {
                        icon: 'pe-7s-headphones',
                        text: '24/7 Online Support'
                    },
                ]
            },
            {
                title: `${props.intl.formatMessage({ ...messages.Architecture })}`,
                icon: 'pe-7s-headphones',
                details: 'We offer impartial IT support consultant and project services with clearly explained help and technical planning with no hidden costs.',
                id: 3,
                items: [
                    {
                        icon: 'pe-7s-headphones',
                        text: 'Software Development'
                    },
                    {
                        icon: 'pe-7s-headphones',
                        text: 'DevOps Engineering'
                    },
                    {
                        icon: 'pe-7s-headphones',
                        text: 'Game Development'
                    },
                    {
                        icon: 'pe-7s-headphones',
                        text: 'DataBase Development'
                    },
                    {
                        icon: 'pe-7s-network',
                        text: 'Data Modeling'
                    },
                ]
            },
            {
                title: `${props.intl.formatMessage({ ...messages.ProductSelling })}`,
                icon: 'pe-7s-portfolio',
                details: 'We offer satisfying needs for sotfware products development and also solve problems that are yet to be defined.',
                id: 4,
                items: [
                    {
                        icon: 'pe-7s-copy-file',
                        text: 'System Analysis'
                    },
                    {
                        icon: 'pe-7s-display1',
                        text: 'System Design'
                    },
                    {
                        icon: 'pe-7s-add-user',
                        text: 'Personels'
                    },
                    {
                        icon: 'pe-7s-hammer',
                        text: 'System Maintenance'
                    },
                    {
                        icon: 'pe-7s-network',
                        text: 'Software Development'
                    },
                ]
            },
            /*{
                title: `${props.intl.formatMessage({ ...messages.Architecture })}`,
                icon: icon3,
                details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
                id: 5,
                items: [
                    {
                        icon: 'pe-7s-paint',
                        text: 'Interior Design'
                    },
                    {
                        icon: 'pe-7s-target',
                        text: '3d Model'
                    },
                    {
                        icon: 'pe-7s-add-user',
                        text: 'Charectar Making'
                    },
                    {
                        icon: 'pe-7s-joy',
                        text: 'Illustration'
                    },
                    {
                        icon: 'pe-7s-network',
                        text: 'Pie Chart Making'
                    },
                ]
            },
            {
                title: `${props.intl.formatMessage({ ...messages.DigitalService })}`,
                icon: icon2,
                details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
                id: 6,
                items: [
                    {
                        icon: 'pe-7s-paint',
                        text: 'Seo'
                    },
                    {
                        icon: 'pe-7s-target',
                        text: 'SMM'
                    },
                    {
                        icon: 'pe-7s-add-user',
                        text: 'SEM'
                    },
                    {
                        icon: 'pe-7s-joy',
                        text: 'Engine Marketing'
                    },
                    {
                        icon: 'pe-7s-network',
                        text: '24/7 Online Support'
                    },
                ]
            },*/
        ]
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Grid className="businessServiceArea">
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <SectionTitle
                        title={services.title}
                        subtitle={services.subtitle}
                        stoketext={services.subtitle}
                        className="textLeft"
                    />
                </Grid>
            </Grid>
            <Grid className="businessServiceSliderArea">
                <Slider
                    className="businessServiceSlider"
                    {...settings}>
                    {services.service.map((item, i) => (
                        <Grid key={i} className="businessServiceWrap">
                            <Grid className="businessServiceItem">
                                <h3><i className={item.icon} style={{marginRight: '.5rem', fontSize: '3rem', color: '#007aff'}}></i> {item.title}</h3>
                                <p>{item.details}</p>
                                <ul className="serviceList">
                                    {item.items.map((item, i) => (
                                        <li key={i}>
                                            <i className={item.icon}></i>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </Grid>
                    ))}
                </Slider>
            </Grid>

        </Grid>
    );
}

export default injectIntl(BusinessService)
