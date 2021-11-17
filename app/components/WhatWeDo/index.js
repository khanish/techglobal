
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
            text: 'Accelerate your development cycle by minimizing costs and driving efficiency with our DevOps experts. 1 Overview If you want to improve your software delivery, build a culture of agility and automation, accelerate software releases, and harness the power of the cloud, we can help. The first step is to adopt a modern way of developing and releasing software by unifying software development and IT operations, also called DevOps.',
            id: 1
        },
        {
            icon: icon2,
            title: 'Consultancy',
            text: 'From evolving customer expectations and emerging technologies to more nimble companies entering industries, businesses today are more at risk for disruption than ever before. Our business consultants can help you adapt to today’s market dynamics and continue to compete no matter the threats you might be facing. Tools to enable optimal remote work can help minimize or prevent disruption in your operations. We partner with you to reach solutions that would improve your institutional productivity and performance. ',
            id: 2
        },
        {
            icon: icon3,
            title: 'Software Development',
            text: 'Dealing with digital projects can be a demanding process. No matter the complexity, a software development process always implies making many tech-related decisions that can have a huge impact on your business. Navigating all of them can be tricky and nerve-inducing, especially if you don’t have the proper knowledge. But don’t worry – we’re here to help.',
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
