import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import './style.scss'
// images
import icon1 from 'images/hero/icon1.png'
import icon2 from 'images/hero/icon2.png'
import image from 'images/hero/hero.jpg'


const Hero = (props) => {
    const hero = {
        title: `${props.intl.formatMessage({ ...messages.SolveBusinessChallengeswith })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.InnovativeTechnologies })}`,
        images: image,
        items: [
            {
                icon: icon1,
                title: `${props.intl.formatMessage({ ...messages.RoiSolution })}`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
            },
            {
                icon: icon2,
                title: `${props.intl.formatMessage({ ...messages.SoftwareCreator })}`,
                details:  `${props.intl.formatMessage({ ...messages.details1 })}`,
            },
        ]
    }
    return (
        <Grid className="heroArea">
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="container">
                <Grid item lg={7} xs={12}>
                    <Grid className="heroContent">
                        <h2>{hero.title}</h2>
                        <h3>{hero.subtitle}</h3>
                        <Grid container>
                            {hero.items.map((item, i) => (
                                <Grid
                                    key={i}
                                    item
                                    sm={6} xs={12}>
                                    <Grid className="heroServiceWrap">
                                        <Grid className="heroServiceIcon">
                                            <img src={item.icon} alt="" />
                                        </Grid>
                                        <Grid className="heroServiceContent">
                                            <h4>{item.title}</h4>
                                            <p>{item.details}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={5} xs={12}>
                    <Grid className="heroImage">
                        <img src={hero.images} alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(Hero);
