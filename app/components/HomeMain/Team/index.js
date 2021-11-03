import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import './style.scss'

// images 
import image1 from 'images/team/img1.jpg'
import image2 from 'images/team/img2.jpg'
import image3 from 'images/team/img3.jpg'

const Team = (props) => {
    const [loadItems, setLoadItems] = useState(props.item)

    const teams = {
        title: `${props.intl.formatMessage({ ...messages.OurCreativeTeam })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.angels })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.team })}`,
        items: [
            {
                image: image1,
                name: 'Kelian Williamson',
                designation: `${props.intl.formatMessage({ ...messages.Founder })}`,
            },
            {
                image: image2,
                name: 'Membis Rabon',
                designation: `${props.intl.formatMessage({ ...messages.ceo })}`,
            },
            {
                image: image3,
                name: 'Rosalina D. Pelin',
                designation: `${props.intl.formatMessage({ ...messages.Developer })}`,
            },
            {
                image: image2,
                name: 'Kelian Williamson',
                designation: `${props.intl.formatMessage({ ...messages.Developer })}`,
            },
            {
                image: image3,
                name: 'Membis Rabon',
                designation: `${props.intl.formatMessage({ ...messages.ceo })}`,
            },
            {
                image: image1,
                name: 'Rosalina D. Pelin',
                designation: `${props.intl.formatMessage({ ...messages.Founder })}`,
            },
        ]
    }
    return (
        <Grid className={`teamArea ${props.className}`}>
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={teams.title}
                        subtitle='Team'
                        stoketext={teams.stoketext}
                        className="sectionTitleWhite sectionTitleWhite2"
                    />
                </Grid>
                {teams.items.slice(0, loadItems).map((item, i) => (
                    <Grid key={i} item lg={4} sm={6} xs={12}>
                        <Grid className="teamWrap">
                            <Grid className="teamImg">
                                <img src={item.image} alt="" />
                            </Grid>
                            <Grid className="teamContent">
                                <h3>{item.name}</h3>
                                <span>{item.designation}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
                {props.jounus || props.loadmore && <Grid item xs={12}>
                    <ul className="teamBtn">
                        <li><Button>{props.intl.formatMessage({ ...messages.JoinWithUs })}</Button></li>
                        <li><Button onClick={() => setLoadItems(teams.items.length)}>{props.intl.formatMessage({ ...messages.Learnmore })}</Button></li>
                    </ul>
                </Grid>}

            </Grid>
        </Grid>
    );
}

export default injectIntl(Team);
