import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Swiper from 'react-id-swiper';
import './style.scss'


// images 
import image1 from 'images/case/img1.jpg'
import image2 from 'images/case/img2.jpg'
import image3 from 'images/case/img3.jpg'
import image4 from 'images/case/img4.jpg'
import image5 from 'images/case/img5.jpg'


const params = {
    slidesPerView: 4,
    spaceBetween: 32,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1300: {
            slidesPerView: 4,
            spaceBetween: 32
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 32
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 32
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 32
        }
    }
};

const CaseStudy = (props) => {
    const caseStudy = {
        title: `${props.intl.formatMessage({ ...messages.CaseStudy })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.Portfolio })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.Projects })}`,
        items: [
            {
                images: image1,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image2,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image3,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image4,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image5,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image1,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image2,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image3,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image4,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
            {
                images: image5,
                title: 'Calibon: Elbon Mania',
                subtitle: `${props.intl.formatMessage({ ...messages.SoftwareUIUX })}`,
            },
        ]
    }

    return (
        <Grid className="caseStudyArea">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={caseStudy.title}
                        subtitle={caseStudy.subtitle}
                        stoketext={caseStudy.stoketext}
                        className="textLeft"
                    />
                </Grid>
            </Grid>
            <Swiper
                className="caseSlider"
                {...params}>
                {caseStudy.items.map((item, i) => (
                    <Grid
                        key={i}
                        style={{ background: `url(${item.images}) no-repeat center center / cover` }}
                        className="caseItems">
                        <Grid className="caseContent">
                            <span>{item.subtitle}</span>
                            <h4>{item.title}</h4>
                        </Grid>
                    </Grid>
                ))}
            </Swiper>
        </Grid>
    );
}
export default injectIntl(CaseStudy);
