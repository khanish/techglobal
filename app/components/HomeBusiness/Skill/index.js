import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import './style.scss'

// images
import skill from 'images/skill.jpg'

const Skill = (props) => {

    const skills = {
        title: 'We Can Take Type Effort',
        subtitle: 'Our skills',
        items: [
            {
                name: 'UI/UX Design',
                value: 89,
                color: '#26cfff'
            },
            {
                name: 'Application Developer',
                value: 90,
                color: '#ffd426'
            },
            {
                name: 'DevOps Engineering/Operation',
                value: 95,
                color: '#ff325d'
            },
        ]
    }

    return (
        <Grid className="skillArea">
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid className="skillWrapper">
                        <Grid className="skillContent">
                            <span className="sub">{skills.subtitle}</span>
                            <h2>{skills.title}</h2>
                            {skills.items.map((item, i) => (
                                <Grid key={i} className="slillWrap">
                                    <p>{item.name} <span style={{ color: `${item.color}` }}>{item.value}%</span></p>
                                    <Grid className="progressBar">
                                        <Grid style={{ background: `${item.color}`, width: `${item.value}%` }} className="progress"></Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid style={{ background: `url(${skill}) no-repeat center center / cover` }} className="skillImg">

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(Skill)
