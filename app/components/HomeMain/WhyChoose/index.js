import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import './style.scss'
// images
import background from 'images/bg/why-choos.jpg'
import image from 'images/why-choos.jpg'
import icon from 'images/icons/why.png'
import arrow from 'images/icons/arrow.png'

const WhyChoose = (props) => {
    const whychoose = {
        title: `${props.intl.formatMessage({ ...messages.WhyChooseUs })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.Qualification })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.WhyUs })}`,
        image: background,
        items: [
            {
                subtitle: `${props.intl.formatMessage({ ...messages.GoodQuality })}`,
                title: `${props.intl.formatMessage({ ...messages.CustomSlimDevelopment })}`,
                text: `${props.intl.formatMessage({ ...messages.details })}`,
                id: 1
            },
            {
                subtitle: `${props.intl.formatMessage({ ...messages.StandardProduct })}`,
                title: `${props.intl.formatMessage({ ...messages.WeDevelopedStandardHubs })}`,
                text: `${props.intl.formatMessage({ ...messages.details1 })}`,
                id: 2
            },
            {
                subtitle: `${props.intl.formatMessage({ ...messages.CleanCoding })}`,
                title: `${props.intl.formatMessage({ ...messages.YouWillGetSolidCode })}`,
                text: `${props.intl.formatMessage({ ...messages.details2 })}`,
                id: 3
            },
            {
                subtitle: `${props.intl.formatMessage({ ...messages.PremiumResource })}`,
                title: `${props.intl.formatMessage({ ...messages.WeUsingHighQualityGoods })}`,
                text: `${props.intl.formatMessage({ ...messages.details3 })}`,
                id: 4
            },
            {
                subtitle: `${props.intl.formatMessage({ ...messages.onlinesupport })}`,
                title: `${props.intl.formatMessage({ ...messages.WeAreHereForYou })}`,
                text: `${props.intl.formatMessage({ ...messages.details4 })}`,
                id: 5
            },
            {
                subtitle: `${props.intl.formatMessage({ ...messages.GoodQuality })}`,
                title: `${props.intl.formatMessage({ ...messages.GoodQuality1 })}`,
                text: `${props.intl.formatMessage({ ...messages.details5 })}`,
                id: 6
            },
        ]
    }
    return (
        <Grid className="whyChooseArea overlay" style={{ background: `url(${whychoose.image}) no-repeat center center / cover` }}>
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={whychoose.title}
                        subtitle={whychoose.subtitle}
                        stoketext={whychoose.stoketext}
                        className="sectionTitleWhite"
                    />
                </Grid>
                {whychoose.items.map((item, i) => (
                    <Grid key={i} item lg={4} sm={6} xs={12}>
                        <Grid className="whyChooseItem">
                            <Grid className="whyChoosContent">
                                {/*<span className="subtitle">{item.subtitle}</span>*/}
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                {/*<span className="arrow">
                                    <img src={arrow} alt="" />
                                </span>*/}
                            </Grid>
                            <Grid className="whyChoosImg" style={{ background: `url(${image}) no-repeat center center / cover` }}>
                                <img src={icon} alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    );
}

export default injectIntl(WhyChoose);
