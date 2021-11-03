
import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ScrollTop from 'components/ScrollTop/Loadable'

import './style.scss'

// images
import image1 from 'images/footer/img1.jpg'
import image2 from 'images/footer/img2.jpg'

const Footer = (props) => {
    const footers = {
        menus: [
            `${props.intl.formatMessage({ ...messages.ProductStrategy })}`,
            `${props.intl.formatMessage({ ...messages.ProductEngineering })}`,
            `${props.intl.formatMessage({ ...messages.UXUIDesign })}`,
            `${props.intl.formatMessage({ ...messages.AppDevelopment })}`,
            `${props.intl.formatMessage({ ...messages.VideoEditing })}`,
            `${props.intl.formatMessage({ ...messages.SoftwareDevelopment })}`,
            `${props.intl.formatMessage({ ...messages.GameDesign })}`,
            `${props.intl.formatMessage({ ...messages.BusinessPlanning })}`,
        ],
        contacts: [
            'info@mylandmarktech.com',
            '+1 437 215 2483',
            'Ontario, Canada',
            'tekglobal.com',
        ],
        newsFeed: [
            {
                image: image1,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsecteturadipisicing })}`,
                author: 'Smith Edmond',
                link: 'https://devops.com/aqua-security-acquires-tfsec-to-advance-devsecops/'
            },
            {
                image: image2,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsecteturadipisicing1})}`,
                author: 'Jonathan E.A',
                link: 'https://devops.com/a-special-message-from-reddit-co-founder-alexis-ohanian-for-techstrong-con/'
            },
        ]
    }
    return (
        <footer className={props.className ? `${props.className} footerArea` : 'footerArea'}>
            <ScrollTop
                scrollStepInPx="50"
                delayInMs="16.66"
            />
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <Grid className="footerTop">
                        <Grid className="footerLogo">
                            <img src={props.logo} alt="" />
                        </Grid>
                        <ul className="socialLink">
                            <li><Button component="a" href="https://www.facebook.com/Landmark-Metropolitan-University-885564278136131" target='_blank'><i className="fa fa-facebook"></i></Button></li>
                            <li><Button component="a" href="https://www.linkedin.com/company/71906792/admin/" target='_blank'><i className="fa fa-linkedin"></i></Button></li>
                            <li><Button component="a" href="https://www.youtube.com/channel/UCa98yMG9Sxtcyk61li3jPwQ"><i className="fa fa-youtube" target='_blank'></i></Button></li>
                            <li><Button component="a" href="https://wa.me/14372152483"><i className="fa fa-whatsapp" target='_blank'></i></Button></li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12}>
                    <h3 className="footerTitle">{props.intl.formatMessage({ ...messages.services })}</h3>
                    <ul className="footerMenu">
                        {footers.menus.map((item, i) => (
                          <li key={i}><Link to={`/${item}`}>{item}</Link></li>
                        ))}
                    </ul>
                </Grid>
                <Grid item lg={4} md={3} sm={6} xs={12}>
                    <h3 className="footerTitle">{props.intl.formatMessage({ ...messages.contactus })}</h3>
                    <ul className="footerContact">
                        {footers.contacts.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </Grid>
                <Grid item lg={4} md={5} sm={6} xs={12}>
                    <h3 className="footerTitle">{props.intl.formatMessage({ ...messages.newsfeeds })}</h3>
                    <ul className="footerNews">
                        {footers.newsFeed.map((item, i) => (
                            <li key={i}>
                                <Grid className="footerNewsImg">
                                    <img src={item.image} alt="" />
                                </Grid>
                                <Grid className="footerNewsContent">
                                    <Button href={item.link} target='_blank'>{item.title}</Button>
                                    <span><i className="fa fa-user"></i> By {item.author}</span>
                                </Grid>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
            <Grid className="footerBottomArea">
                <Grid
                    alignItems="center"
                    className="container"
                    container
                    spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <p>Copyright By @tekglobal - 2021</p>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <ul>
                            <li> <Link to="/privicy">{props.intl.formatMessage({ ...messages.privacy })}</Link></li>
                            <li> <Link to="/terms">{props.intl.formatMessage({ ...messages.TermsConditions })}</Link></li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </footer >
    );
}

export default injectIntl(Footer);
