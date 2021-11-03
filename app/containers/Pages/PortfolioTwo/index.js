import React, { useState, Fragment } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SinglePortfolio from 'components/SinglePortfolio/Loadable'
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'


// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/breadcumb2.jpg'

// images 
import image1 from 'images/portfolio/img1.jpg'
import image2 from 'images/portfolio/img2.jpg'
import image3 from 'images/portfolio/img3.jpg'
import image4 from 'images/portfolio/img4.jpg'
import image5 from 'images/portfolio/img5.jpg'
import image6 from 'images/portfolio/img6.jpg'
import image7 from 'images/portfolio/img7.jpg'
import image8 from 'images/portfolio/img8.jpg'
import image9 from 'images/portfolio/img9.jpg'
import image10 from 'images/portfolio/img10.jpg'
import image11 from 'images/portfolio/img11.jpg'
import image12 from 'images/portfolio/img12.jpg'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Portfolio'
    }
]

const PortfolioTwo = () => {
    const [value, setValue] = useState(0);
    const [loadItems, setLoadItems] = useState(12)

    const portfolios = {
        items: [
            {
                name: 'Yoko loko',
                desig: 'ui/ux',
                image: image1,
                id: 1
            },
            {
                name: 'Vebo Kim',
                desig: 'branding',
                image: image2,
                id: 2
            },
            {
                name: 'Humber A.',
                desig: 'website',
                image: image3,
                id: 3
            },
            {
                name: 'Yoko loko',
                desig: 'ui/ux',
                image: image4,
                id: 4
            },
            {
                name: 'Vebo Kim',
                desig: 'branding',
                image: image5,
                id: 5
            },
            {
                name: 'Humber A.',
                desig: 'website',
                image: image6,
                id: 6
            },

            {
                name: 'Yoko loko',
                desig: 'ui/ux',
                image: image7,
                id: 7
            },
            {
                name: 'Vebo Kim',
                desig: 'branding',
                image: image8,
                id: 8
            },
            {
                name: 'Humber A.',
                desig: 'website',
                image: image9,
                id: 9
            },
            {
                name: 'Yoko loko',
                desig: 'ui/ux',
                image: image10,
                id: 10
            },
            {
                name: 'Humber A.',
                desig: 'website',
                image: image11,
                id: 11
            },
            {
                name: 'Yoko loko',
                desig: 'ui/ux',
                image: image12,
                id: 12
            },
            {
                name: 'Humber A.',
                desig: 'website',
                image: image11,
                id: 13
            },
            {
                name: 'Yoko loko',
                desig: 'ui/ux',
                image: image12,
                id: 14
            },
            {
                name: 'Vebo Kim',
                desig: 'branding',
                image: image8,
                id: 15
            },
        ]
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Fragment>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="Portfolio"
                bgImg={breadcumbImg}
                stoketext="onova"
            />
            <Grid className="portfoliothreeGridArea ptb-104">
                <Grid className="container" spacing={4} container>
                    <Grid item xs={12}>
                        <Tabs
                            classes={{
                                root: 'protfolioTab protfolioTabStyleBlack',
                                flexContainer: 'protfolioTabContainer',
                                indicator: 'protfolioTabIndicator'
                            }}
                            value={value}
                            onChange={handleChange}>
                            <Tab label="All Works  " />
                            <Tab label="Design (4)" />
                            <Tab label="Game (2)" />
                            <Tab label="website (5) " />
                            <Tab label="interior (6)" />
                            <Tab label="consultancy (3)" />
                        </Tabs>
                    </Grid>
                    {value === 0 && <Fragment>
                        {portfolios.items.slice(0, loadItems).map((item, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Grid className="caseStudyWrap">
                                    <span>{item.desig}</span>
                                    <h4>{item.name}</h4>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p>The audit includes cell phone, broadband, DSL, local, long-distance, teleconferencing and video conferencing services.</p>
                                    <Link to={`portfolio-details/${item.id}`}>Read More</Link>
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>}
                    {value === 1 && <Fragment>
                        {portfolios.items.slice(0, 4).map((item, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Grid className="caseStudyWrap">
                                    <span>{item.desig}</span>
                                    <h4>{item.name}</h4>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p>The audit includes cell phone, broadband, DSL, local, long-distance, teleconferencing and video conferencing services.</p>
                                    <Link to={`portfolio-details/${item.id}`}>Read More</Link>
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>}
                    {value === 2 && <Fragment>
                        {portfolios.items.slice(0, 2).map((item, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Grid className="caseStudyWrap">
                                    <span>{item.desig}</span>
                                    <h4>{item.name}</h4>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p>The audit includes cell phone, broadband, DSL, local, long-distance, teleconferencing and video conferencing services.</p>
                                    <Link to={`portfolio-details/${item.id}`}>Read More</Link>
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>}
                    {value === 3 && <Fragment>
                        {portfolios.items.slice(0, 5).map((item, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Grid className="caseStudyWrap">
                                    <span>{item.desig}</span>
                                    <h4>{item.name}</h4>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p>The audit includes cell phone, broadband, DSL, local, long-distance, teleconferencing and video conferencing services.</p>
                                    <Link to={`portfolio-details/${item.id}`}>Read More</Link>
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>}
                    {value === 4 && <Fragment>
                        {portfolios.items.slice(0, 6).map((item, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Grid className="caseStudyWrap">
                                    <span>{item.desig}</span>
                                    <h4>{item.name}</h4>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p>The audit includes cell phone, broadband, DSL, local, long-distance, teleconferencing and video conferencing services.</p>
                                    <Link to={`portfolio-details/${item.id}`}>Read More</Link>
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>}
                    {value === 5 && <Fragment>
                        {portfolios.items.slice(0, 3).map((item, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Grid className="caseStudyWrap">
                                    <span>{item.desig}</span>
                                    <h4>{item.name}</h4>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p>The audit includes cell phone, broadband, DSL, local, long-distance, teleconferencing and video conferencing services.</p>
                                    <Link to={`portfolio-details/${item.id}`}>Read More</Link>
                                </Grid>
                            </Grid>
                        ))}
                    </Fragment>}
                    {loadItems != portfolios.items.length && <Grid className="textCenter" item xs={12}>
                        <Button className="btn textUppercase" onClick={() => setLoadItems(portfolios.items.length)}>Load More  +</Button>
                    </Grid>}

                </Grid>
            </Grid>
            <CallToAction />
            <Footer
                logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    );
}

export default PortfolioTwo;
