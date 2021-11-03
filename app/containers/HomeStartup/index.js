import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import './style.scss'

// images 
import logo from 'images/onova.png'
import bg from 'images/slider/img1.jpg'
import whiteLogo from 'images/logo-white.png'
import faq from 'images/faq.png'

// components 
import StartupHero from 'components/HomeStartup/Hero/Loadable'
import StartupHeader from 'components/HomeStartup/Header/Loadable'
import StartupAbout from 'components/HomeStartup/About/Loadable'
import Protfolio from 'components/HomeBusiness/Protfolio/Loadable'
import StartupFaq from 'components/HomeStartup/Faqs/Loadable'
import StartupVideo from 'components/HomeStartup/Video/Loadable'
import StartupService from 'components/HomeStartup/Service/Loadable'
import StartupPricing from 'components/HomeStartup/Pricing/Loadable'
import StartupBrand from 'components/HomeStartup/Brand/Loadable'
import Support from 'components/HomeStartup/Support/Loadable'
import StartupContact from 'components/HomeStartup/Contact/Loadable'
import Footer from 'components/Footer/Loadable'

const HomeStartup = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Startup</title>
            </Helmet>
            <StartupHeader logo={logo} />
            <StartupHero />
            <StartupAbout />
            <Protfolio
                className="overlay protfolioAreaStyleTwo"
                background={bg}
            />
            <StartupFaq
                image={faq}
            />
            <StartupVideo
                spacing={4}
            />
            <StartupService />
            <StartupPricing />
            <StartupBrand />
            <Support />
            <StartupContact />
            <Footer
                logo={whiteLogo}
            />
        </Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(HomeStartup);
