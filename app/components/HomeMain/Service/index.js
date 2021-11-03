import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SectionTitle from 'components/SectionTitle/Loadable'
import SingleService from 'components/SingleService/Loadable'
import './style.scss'

// images
import image1 from 'images/service/consultancy.webp'
import image2 from 'images/service/img2.jpg'
import image3 from 'images/service/training.webp'

const Service = (props) => {
    const services = {
        title: `${props.intl.formatMessage({ ...messages.WhatWeDo })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.sevices })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.sevices })}`,
        items: [
            {
                image: image1,
                icon: 'pe-7s-arc',
                title: `${props.intl.formatMessage({ ...messages.ProductEngineering })}`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                color: 'ff900c',
                id: 1
            },
            {
                image: image2,
                icon: 'pe-7s-diamond',
                title: `${props.intl.formatMessage({ ...messages.UIUXStrategy })}`,
                details: `${props.intl.formatMessage({ ...messages.details1 })}`,
                color: '0574ff',
                id: 2
            },
            {
                image: image3,
                icon: 'pe-7s-hammer',
                title: `${props.intl.formatMessage({ ...messages.BigDataAnalytics })}`,
                details: `${props.intl.formatMessage({ ...messages.details2 })}`,
                color: 'dfc537',
                id: 3
            }
        ]
    }
    return (
        <Grid className="serviceArea">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={services.title}
                        subtitle={services.subtitle}
                        stoketext={services.stoketext}
                    />
                </Grid>
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
    );
}

export default injectIntl(Service);
