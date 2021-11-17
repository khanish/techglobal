import React, { useState, Fragment } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Slider from "react-slick";
import BusinessService from 'components/HomeBusiness/BusinessService/Loadable'
// images
import logo from 'images/logo.png'
import logoBlack from 'images/logo-white.png'
import breadcumbImg from 'images/bg/consult.jpg'

// components
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Activity from 'components/HomeBusiness/Activity/Loadable'
import Testmonial from 'components/HomeBusiness/Testmonial/Loadable'
import StartupPricing from 'components/HomeStartup/Pricing/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'IT Consultancy'
    }
]

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

const CconsultancyService = () => {
    const services = [
        {
            title: 'Service Desk',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-photo-gallery',
            id: 1
        },
        {
            title: 'Infrastructure',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-expand1',
            id: 2
        },
        {
            title: 'Applications',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-coffee',
            id: 3
        },
        {
            title: 'Applications',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-portfolio',
            id: 4
        },
        {
            title: 'Service Desk',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-photo-gallery',
            id: 5
        },
        {
            title: 'Infrastructure',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-expand1',
            id: 6
        },
        {
            title: 'Applications',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-coffee',
            id: 7
        },
        {
            title: 'Applications',
            details: 'Representing all of the major telecom companies Geeks On Call finds the right service and the best rates for their.',
            icon: 'pe-7s-portfolio',
            id: 8
        },
    ]
    return (
        <Fragment>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="IT Consultancy"
                bgImg={breadcumbImg}
                stoketext="onova"
            />
            <BusinessService />
            <br /><br /><br /><br /><br />
            <Activity
                className="consultancyActivity"
            />

            {/*<Grid className="consultancyServiceArea">
                <Grid className="container" container spacing={4}>
                    <Grid item xs={12}>
                        <SectionTitle
                            title='What We Do'
                            subtitle='services'
                            stoketext='Services'
                            className="textLeft"
                        />
                    </Grid>
                </Grid>
                <Slider
                    className="consultancyServiceSlider"
                    {...settings}>
                    {services.map((item, i) => (
                        <Grid key={i} className="consultancyServiceWrap">
                            <Grid className="consultancyServiceItem overlay">
                                <h3><i className={item.icon}></i> {item.title}</h3>
                                <p>{item.details}</p>
                            </Grid>
                        </Grid>
                    ))}
                </Slider>
            </Grid>

            <StartupPricing />*/}
            <Testmonial className="serviceTestmonial" />
            <br /><br /><br />
            <CallToAction />
            <Footer
                logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    );
}

export default CconsultancyService;
