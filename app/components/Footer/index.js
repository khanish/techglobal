
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
            'info@tekglobal.io',
            '+1 437 215 2483',
            'Ontario, Canada',
            'tekglobal.io',
        ],
        newsFeed: [
            {
                image: image1,
                title: `Optimize DevOps delivery using team-based metrics`,
                author: 'C. S. Sama',
                link: 'https://linearb.io/devops-metrics/?utm_term=devops%20tools&utm_campaign=M-DevOps&utm_source=adwords&utm_medium=ppc&hsa_acc=1650697142&hsa_cam=12640060555&hsa_grp=119547223909&hsa_ad=543298801096&hsa_src=g&hsa_tgt=kwd-298322616678&hsa_kw=devops%20tools&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiA7dKMBhBCEiwAO_crFDmyjpFWgcOkig52d7CpHIk1HddlULwHuoyv2DGRMOkgIooZ4-mhbRoC89IQAvD_BwE'
            },
            {
                image: image2,
                title: `The fastest path to FedRAMP compliance`,
                author: 'C. S. Sama',
                link: 'https://www.anitian.com/fedramp-compliance-automation/'
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
                            <li><Button component="a" href="https://www.youtube.com/channel/UCa98yMG9Sxtcyk61li3jPwQ" target='_blank'><i className="fa fa-youtube" ></i></Button></li>
                            <li><Button component="a" href="https://wa.me/14372152483" target='_blank'><i className="fa fa-whatsapp"></i></Button></li>
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
