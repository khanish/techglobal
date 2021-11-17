import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'

// components
import Header from 'components/Header/Loadable'
import ContactInfo from 'components/ContactInfo/Loadable'
import SectionTitle from 'components/SectionTitle/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'

import './style.scss'

// images
import logo from 'images/logo.png'
import logoBlack from 'images/logo.png'
import faqImg from 'images/faq.jpg'
import breadcumbImg from 'images/faq.jpg'
import play from 'images/icons/play.png'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'FAQ'
    }
]

const FaqPage = (props) => {
    const [expanded, setExpanded] = useState('');
    const [open, setOpen] = useState(false)

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const faqs = {
        sub: 'faq',
        title: 'Get Some Answers',
        items: [
            {
                title: 'Voice and Data Systems are crucial to the success?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus',
                id: '1'
            },
            {
                title: 'Many companies provide laptops, cell phones?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit',
                id: '2'
            },
            {
                title: 'Internet connections that require expensive main?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, ',
                id: '3'
            },
            {
                title: 'Representing all of the major telecom companies?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ',
                id: '4'
            },
            {
                title: 'Geeks On Call typically saves businesses 10 to 30?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ',
                id: '5'
            },
            {
                title: 'Many companies provide laptops, cell phones',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ',
                id: '6'
            },
            {
                title: 'Voice and Data Systems are crucial to the success?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus',
                id: '7'
            },
            {
                title: 'Many companies provide laptops, cell phones?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit',
                id: '8'
            },
            {
                title: 'Internet connections that require expensive main?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, ',
                id: '9'
            },
            {
                title: 'Representing all of the major telecom companies?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ',
                id: '10'
            },
            {
                title: 'Geeks On Call typically saves businesses 10 to 30?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ',
                id: '11'
            },
            {
                title: 'Many companies provide laptops, cell phones',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ',
                id: '12'
            },
        ]
    }
    return (
        <Fragment>
            <Helmet>
                <title>faqs</title>
            </Helmet>
            <Header
                className = "headerStyleWhite"
                logo={logoBlack}
            />
            <Breadcumb
                links={links}
                className="overlay"
                title="FAQ"
                bgImg={breadcumbImg}
            />
            <Grid className="faqPageArea ptb-104">
                <Grid container spacing={4} className="container">
                    <Grid item md={6} sm={12} xs={12}>
                        {faqs.items.slice(0, 6).map((item, i) => (
                            <ExpansionPanel
                                key={i}
                                classes={{
                                    root: 'faqWrapper',
                                    expanded: 'faqWrapperExpanded',
                                }}
                                square
                                expanded={expanded === item.id}
                                onChange={handleChange(item.id)}>
                                <ExpansionPanelSummary
                                    className="faqHeader"
                                >
                                    <p>{item.title}</p>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="faqDetails">
                                    <p>{item.details}</p>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        {faqs.items.slice(6, 12).map((item, i) => (
                            <ExpansionPanel
                                key={i}
                                classes={{
                                    root: 'faqWrapper',
                                    expanded: 'faqWrapperExpanded',
                                }}
                                square
                                expanded={expanded === item.id}
                                onChange={handleChange(item.id)}>
                                <ExpansionPanelSummary
                                    className="faqHeader"
                                >
                                    <p>{item.title}</p>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="faqDetails">
                                    <p>{item.details}</p>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="faqPageArea bgGray ptb-104">
                <Grid
                    alignItems="center"
                    container
                    spacing={4}
                    className="container">
                    <Grid item md={6} sm={12} xs={12}>
                        <div className="faqPageImg">
                            <img src={faqImg} alt="" />
                            <Button
                                onClick={() => setOpen(true)}
                                className="playBtn">
                                <img src={play} alt="" />
                            </Button>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <SectionTitle
                            title='Freequently Asked Questions.'
                            subtitle='faq'
                            stoketext='faq'
                            className="textLeft"
                        />
                        {faqs.items.slice(6, 11).map((item, i) => (
                            <ExpansionPanel
                                key={i}
                                classes={{
                                    root: 'faqWrapper',
                                    expanded: 'faqWrapperExpanded',
                                }}
                                square
                                expanded={expanded === item.id}
                                onChange={handleChange(item.id)}>
                                <ExpansionPanelSummary
                                    className="faqHeader"
                                >
                                    <p>{item.title}</p>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="faqDetails">
                                    <p>{item.details}</p>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </Grid>
                </Grid>
                <ModalVideo
                    channel='youtube'
                    isOpen={open}
                    videoId='XOStXaZ25cw'
                    onClose={() => setOpen(false)}
                />
            </Grid>
            <ContactInfo />

            <Footer
                logo={logo}
            />
        </Fragment>
    )

}
export default injectIntl(FaqPage);
