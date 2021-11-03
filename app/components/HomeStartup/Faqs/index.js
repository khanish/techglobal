import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'
import './style.scss'



const StartupFaq = (props) => {
    const [expanded, setExpanded] = useState('');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const faqs = {
        sub: 'faq',
        title: 'Get Some Answers',
        items: [
            {
                title: 'How can i install this theme?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus',
                id: '1'
            },
            {
                title: 'How can i install this theme?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex sit',
                id: '2'
            },
            {
                title: 'How can i install this theme?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, ',
                id: '3'
            },
            {
                title: 'How can i install this theme?',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ',
                id: '4'
            },
        ]
    }

    return (
        <Grid className={`startupFaqArea ${props.className}`}>
            <Grid className="container" container spacing={4}>
                <Grid item xs={12}>
                    <Grid className="startupfaqWrap">
                        <Grid className="faqContent">
                            <span className="sub">{faqs.sub}</span>
                            <h2>{faqs.title}</h2>
                            {faqs.items.map((item, i) => (
                                <ExpansionPanel
                                    key={i}
                                    classes={{
                                        root: 'faqWrapper',
                                        expanded: 'faqWrapperExpanded',
                                    }}
                                    square
                                    expanded={expanded === item.id}
                                    onChange={handleChange(item.id)}>
                                    <ExpansionPanelSummary
                                        className="faqHeader"
                                    >
                                        <p><span>0{i + 1}.</span> {item.title}</p>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails className="faqDetails">
                                        <p>{item.details}</p>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            ))}

                        </Grid>
                        {props.image && <Grid className="faqImg">
                            <img src={props.image} alt="" />
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default injectIntl(StartupFaq)
