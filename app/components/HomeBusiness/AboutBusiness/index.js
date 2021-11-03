import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

// images
import image1 from 'images/about/img5.jpg'
import image2 from 'images/about/img6.jpg'
import icon1 from 'images/hero/icon1.png'
import icon2 from 'images/hero/icon2.png'

const AboutBusiness = (props) => {
    const abouts = {
        title: `${props.intl.formatMessage({ ...messages.ManyCompaniesProvideServices })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.subdetails })}`,
        details: `${props.intl.formatMessage({ ...messages.details })}`,
        text: `${props.intl.formatMessage({ ...messages.yearsofexperience })}`,
        stokeText: `${props.intl.formatMessage({ ...messages.about })}`,
        imageBig: image1,
        imageSmall: image2,
        items: [
            {
                icon: icon1,
                title: `${props.intl.formatMessage({ ...messages.RoiSolution })}`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
            },
            {
                icon: icon2,
                title: `${props.intl.formatMessage({ ...messages.SoftwareCreator })}`,
                details: `${props.intl.formatMessage({ ...messages.details1 })}`,
            },
        ]
    }

    return (
        <Grid className="businessAboutArea">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item md={6} xs={12}>
                    <Grid className="aboutBusinessImagesWrap">
                        <Grid className="businessAboutImgBig">
                            <img src={abouts.imageBig} alt="" />
                            <Button><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-quote-left fa-w-16 fa-fw"><path fill="currentColor" d="M448 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16c-92.6 0-168 75.4-168 168v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128zM176 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16C75.4 32 0 107.4 0 200v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128z" className=""></path></svg></Button>
                        </Grid>
                        <Grid className="businessAboutImgSmall">
                            <img src={abouts.imageSmall} alt="" />
                        </Grid>
                        <h2>A</h2>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid className="businessAboutContent">
                        <span className="text">{abouts.text}</span>
                        <h2>{abouts.title}</h2>
                        <h4>{abouts.subtitle}</h4>
                        <h3>{abouts.stokeText}</h3>
                    </Grid>
                    {/*abouts.items.map((item, i) => (
                        <Grid key={i} className="aboutServiceWrap">
                            <Grid className="aboutServiceIcon">
                                <img src={item.icon} alt="" />
                            </Grid>
                            <Grid className="aboutServiceContent">
                                <h4>{item.title}</h4>
                                <p>{item.details}</p>
                            </Grid>
                        </Grid>
                    ))*/}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(AboutBusiness);
