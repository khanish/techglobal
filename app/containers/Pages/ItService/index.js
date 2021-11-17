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
import image5 from 'images/service/image.jpeg'
import image4 from 'images/service/image1.jpg'
import image6 from 'images/service/image2.jpeg'

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
                details: `From evolving customer expectations and emerging technologies to more nimble companies entering industries, businesses today are more at risk for disruption than ever before. Our business consultants can help you adapt to today’s market dynamics and continue to compete no matter the threats you might be facing. Tools to enable optimal remote work can help minimize or prevent disruption in your operations. We partner with you to reach solutions that would improve your institutional productivity and performance.`,
                color: 'ff900c',
                id: 1
            },
            {
                image: image2,
                icon: 'pe-7s-monitor',
                title: `${props.intl.formatMessage({ ...messages.UIUXStrategy })}`,
                details: `Accelerate your development cycle by minimizing costs and driving efficiency with our DevOps experts. 1 Overview If you want to improve your software delivery, build a culture of agility and automation, accelerate software releases, and harness the power of the cloud, we can help. The first step is to adopt a modern way of developing and releasing software by unifying software development and IT operations, also called DevOps.`,
                color: '0574ff',
                id: 2
            },
            {
                image: image3,
                icon: 'pe-7s-monitor',
                title: `${props.intl.formatMessage({ ...messages.BigDataAnalytics })}`,
                details: `Dealing with digital projects can be a demanding process. No matter the complexity, a software development process always implies making many tech-related decisions that can have a huge impact on your business. Navigating all of them can be tricky and nerve-inducing, especially if you don’t have the proper knowledge. But don’t worry – we’re here to help.`,
                color: 'dfc537',
                id: 3
            },
            {
                image: image5,
                icon: 'pe-7s-wallet',
                title: 'Cloud Computing',
                details: `Harness the power of the cloud for lower operational costs, ultimate scalability, and unparalleled performance with our all-encompassing cloud computing consulting and implementation services`,
                color: '6305ff',
                id: 5
            },
            {
                image: image4,
                icon: 'pe-7s-wristwatch',
                title: 'System Analysis',
                details: `Businesses require IT training to help their team accomplish IT projects. They require the trainer to not only teach the course contents but also relate it to specific IT projects for which the training is sought.`,
                color: '6305ff',
                id: 5
            },
            {
                image: image6,
                icon: 'pe-7s-wristwatch',
                title: 'Business Reform',
                details: `There is nothing more valuable than an objective assessment that provides the opportunity for scoping. So gain access to a practical strategic planning skill set that you can apply immediately.`,
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
