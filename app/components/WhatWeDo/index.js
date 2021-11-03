
import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import './style.scss'

// images 
import icon1 from 'images/icons/wedo/icon1.png'
import icon2 from 'images/icons/wedo/icon2.png'
import icon3 from 'images/icons/wedo/icon1.png'

const services = {
    title: 'What We Do',
    subtitle: 'Services',
    items: [
        {
            icon: icon1,
            title: 'DevOps Engineering',
            text: 'DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. ',
            id: 1
        },
        {
            icon: icon2,
            title: 'Consultancy',
            text: 'Representing all of the major telecom companies Geeks On Call finds the right service. ',
            id: 2
        },
        {
            icon: icon3,
            title: 'Software Development',
            text: 'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. ',
            id: 3
        },
    ]
}

const WhatWeDo = () => {
    return (
        <Grid className="whatWeDoArea">
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <SectionTitle
                        title={services.title}
                        subtitle={services.subtitle}
                        stoketext={services.subtitle}
                    />
                </Grid>
                {services.items.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Grid className="whatWeDoWrap">
                            <img src={item.icon} alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            {/*<Button><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg></Button>*/}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default injectIntl(WhatWeDo);
