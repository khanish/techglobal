import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import './style.scss'

// images
import icon1 from 'images/icons/featured/icon1.png'
import icon2 from 'images/icons/featured/icon2.png'
import icon3 from 'images/icons/featured/icon3.png'
import big from 'images/icons/featured/big.png'

const Featured = (props) => {
    const featureds = [
        {
            image: icon1,
            id: 1,
            title: 'DevOps Engineering',
            details: 'DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.'
        },
        {
            image: icon2,
            id: 2,
            big: big,
            title: 'Software Development',
            details: 'Enterprise Applications is not just technology... It is among your core assets. We help you choose wisely, implement, adopt, and launch.'
        },
        {
            image: icon3,
            id: 3,
            title: 'Tratagic Planing',
            details: 'There is nothing more valuable than an objective assessment that provides the opportunity for scoping. So gain access to a practical strategic planning skill set that you can apply immediately.'
        },
    ]
    return (
        <Grid className="featuredArea">
            <Grid className="container" spacing={4} container>
                <Grid item xs={12}>
                    <ul className="featuredWrapper">
                        {featureds.map((item, i) => (
                            <li key={i} className="featuredItem">
                                <img className="icon" src={item.image} alt="" />
                                {item.big ? <img className="bigIcon" src={item.big} alt="" /> : ''}
                                <span className="devaidar"></span>
                                <h3>{item.title}</h3>
                                <p>{item.details}</p>
                                <Button><i className="fa fa-angle-right"></i></Button>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(Featured);
