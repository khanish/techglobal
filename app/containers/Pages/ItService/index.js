import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { Grid } from '@material-ui/core'
import messages from 'components/HomeMain/Service/messages'
// components 
import Header from 'components/Header/Loadable'
import SingleService from 'components/SingleService/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import ContactInfo from 'components/ContactInfo/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'

import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/about.png'
import image1 from 'images/service/img1.jpg'
import image2 from 'images/service/img2.jpg'
import image3 from 'images/service/img3.jpg'
import image4 from 'images/service/img10.jpg'
import image5 from 'images/service/img11.jpg'
import image6 from 'images/service/img12.jpg'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Portfolio'
    }
]

const ItService = (props) => {

    const services = {
        title: `${props.intl.formatMessage({ ...messages.WhatWeDo })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.sevices })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.sevices })}`,
        items: [
            {
                image: image1,
                icon: 'pe-7s-headphones',
                title: `${props.intl.formatMessage({ ...messages.ProductEngineering })}`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                color: 'ff900c',
                id: 1
            },
            {
                image: image2,
                icon: 'pe-7s-monitor',
                title: `${props.intl.formatMessage({ ...messages.UIUXStrategy })}`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                color: '0574ff',
                id: 2
            },
            {
                image: image3,
                icon: 'pe-7s-monitor',
                title: `${props.intl.formatMessage({ ...messages.BigDataAnalytics })}`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                color: 'dfc537',
                id: 3
            },
            {
                image: image4,
                icon: 'pe-7s-refresh-2',
                title: 'Firewall Management',
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                color: '6caf4f',
                id: 4
            },
            {
                image: image5,
                icon: 'pe-7s-wristwatch',
                title: 'Desktop Computing',
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                color: '6305ff',
                id: 5
            },
            {
                image: image6,
                icon: 'pe-7s-wallet',
                title: 'Business Reform',
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                color: 'e06483',
                id: 6
            },
        ]
    }

    return (
        <Fragment>
            <Helmet>
                <title>It Service Details</title>
            </Helmet>
            <Header
                className = "headerStyleWhite"
                logo={logoBlack}
            />
            <Breadcumb
                links={links}
                className="overlay"
                title="Case Details"
                bgImg={breadcumbImg}
            />
            <Grid className="serviceArea ptb-104">
                <Grid container spacing={4} className="container">
                    {services.items.map((item, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleService
                                image={item.image}
                                icon={item.icon}
                                color={item.color}
                                title={item.title}
                                details={item.details}
                                number={`0${i + 1}`}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <ContactInfo />
            <CallToAction />

            <Footer
                logo={logo}
                className="blackFooterArea"
            />
        </Fragment>
    )

}
export default injectIntl(ItService);
