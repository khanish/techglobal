import React, { Fragment, Component } from 'react';
import { injectIntl } from 'react-intl';
import { Grid } from '@material-ui/core'
// components
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Team from 'components/HomeMain/Team/Loadable'
import Testmonial from 'components/HomeBusiness/Testmonial/Loadable'
import Blog from 'components/HomeMain/Blog/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

// images
import logo from 'images/logo.png'
import logoBlack from 'images/logo-white.png'
import breadcumbImg from 'images/team/team.jpg'


const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Team'
    }
]

const TeamPage = () => {
    return (
        <Fragment>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="Our Team"
                bgImg={breadcumbImg}
                stoketext="onova"
            />
            <Team
                className="teamStyleTwo"
            />
            <Testmonial
                className="testmonialStyleTwo"
            />
            <Blog />

            <CallToAction />
            <Footer
                logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    )
}

export default injectIntl(TeamPage)
