import React, { Fragment, useState } from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'

import { Link, NavLink } from 'react-router-dom'
// components
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import WhatWeDo from 'components/WhatWeDo/Loadable'
import Activity from 'components/HomeBusiness/Activity/Loadable'
import VideoComponent from 'components/Video'
import StartupFaq from 'components/HomeStartup/Faqs/Loadable'
import Contact from 'components/HomeMain/Contact/Loadable'


import './style.scss'

// images
import logo from 'images/logo.png'
import logoBlack from 'images/logo-white.png'
import about from 'images/about/img7.webp'
import breadcumbImg from 'images/bg/about.png'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: ' About'
    }
]

const AboutPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="About Us"
                bgImg={breadcumbImg}
                stoketext="onova"
            />

            <Grid className="aboutPageArea">
                <Grid
                    alignItems="center"
                    className="container"
                    spacing={4}
                    container>
                    <Grid item md={5} xs={12}>
                        <Grid style={{ background: `url(${about}) no-repeat center center / cover` }} className="aboutPageImg overlay">
                            <h2>15+</h2>
                            <span>Years of experience</span>
                        </Grid>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Grid className="aboutPageContent">
                            <span className="subText">about us</span>
                            <h2>Our Story</h2>
                            <p>We started as a DevOp Engineering Training Center, we took on 1 students and then expanded with a few more students. We got so busy from a few students to about 250 students in a session. Not long after our croweded online classes we started getting noticed by Tech companies for their personels and so other Tech potentials from within our team started proving them self. Today we are a full stack technology consulting & training company. We help our clients build & maintain software applications. </p>
                            <strong>INDUSTRY LEADERS</strong>
                            <p>We are now  made up of experienced Technology Professionals from diverse backgrounds that includes; IT Services, Government, Communications, Health Care and Energy. We specialize in all types of tech ranging from Web & Mobile development, Web Service, Big Data, Machine Learning, Database, Security, Customized Off-the-Shelf, Automation, SAP, and Performance Testing.</p>
                            <strong>QUALITY SERVICE</strong>
                            <p>Our on-demand business model allows us to offer low competitive rates with exceptional resources that are guaranteed to create a positive impact on your bottom line. We are passionate about software quality. We get it, we do it and we stand by our work. Let us help your business and product be known for its quality. We are expanding rapidly and have increased our service offerings. Go to our <Link to="/service" className="logoWrapper">IT Services</Link> page to learn more. Visit our Facebook page to see our playful side and what we blog about..</p>
                            <ul>
                                {/*<li>
                                    <Button className="btn textUppercase">Learn More</Button>
                                </li>*/}
                                <li>
                                    <Button
                                        onClick={() => setOpen(true)}
                                        className="videoBtn">
                                        <i className="fa fa-play"></i>
                                    </Button>
                                </li>
                            </ul>
                            <h3>About</h3>
                        </Grid>
                    </Grid>
                </Grid>
                <ModalVideo
                    channel='youtube'
                    isOpen={open}
                    videoId='UaO8lvlSELI'
                    onClose={() => setOpen(false)}
                />
            </Grid>
            <WhatWeDo />
            <Activity className="activityStyleTwo" />
            <VideoComponent />
            {/*<StartupFaq
                className="faqStyleTwoArea"
            />*/}
            <CallToAction />
            <Contact />
            <Footer
                logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    )
}

export default injectIntl(AboutPage)
