import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import './style.scss'
const Activity = ({ className }) => {

    const activitys = [
        {
            icon: 'pe-7s-users',
            title: 'DevOp Graduates',
            value: 400,
            id: 1
        },
        {
            icon: 'pe-7s-next-2',
            title: 'Job Placement',
            value: 350,
            id: 2
        },
        {
            icon: 'pe-7s-headphones',
            title: 'Consultancy',
            value: 50,
            id: 3
        },
        {
            icon: 'pe-7s-paper-plane',
            title: 'Acknolegments',
            value: 100,
            id: 4
        },
    ]

    return (
        <Grid className={`activityArea ${className}`}>
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <ul className="activityWrapper">
                        {activitys.map(item => (
                            <li key={item.id} className="activityItem">
                                <div className="activityIcon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="activityContent">
                                    <CountUp
                                        className="custom-count"
                                        start={0}
                                        end={item.value}
                                        duration={5}
                                        useEasing={true}
                                    />
                                    <span>+</span>
                                    <p>{item.title}</p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Activity;
