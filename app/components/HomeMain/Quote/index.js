import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import ModalVideo from 'react-modal-video'
import './style.scss'


// images 
import bg from 'images/bg/quote.jpg'
import quoteVideo from 'images/quote2.jpg'
import img from 'images/quote.jpg'


const Quote = (props) => {
    const [open, setOpen] = useState(false)

    const quotes = {
        title: `${props.intl.formatMessage({ ...messages.title })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.Creativesolutions })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.Quote })}`,
        background: bg,
        details: `${props.intl.formatMessage({ ...messages.details })}`,
        videoImg: quoteVideo,
        images: img
    }
    return (
        <Grid
            className="quoteArea overlay"
            style={{ background: `url(${quotes.background}) no-repeat center center / cover` }}>
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="container">
                <Grid item lg={8} xs={12}>
                    <SectionTitle
                        title={quotes.title}
                        subtitle={quotes.subtitle}
                        stoketext={quotes.stoketext}
                        className="sectionTitleWhite textLeft"
                    />
                </Grid>
                <Grid item lg={4} xs={12} className="textRight">
                    <Button className="loadmore">{props.intl.formatMessage({ ...messages.getaquote })}</Button>
                </Grid>
                <Grid item lg={7} xs={12}>
                    <Grid className="quoteWrap">
                        <Grid className="quoteVideo">
                            <img src={quotes.videoImg} alt="" />
                            <Button
                                onClick={() => setOpen(true)}
                            ><i className="fa fa-play"></i></Button>
                        </Grid>
                        <p>{quotes.details}</p>
                    </Grid>
                </Grid>
                <Grid item lg={5} xs={12} className="d-none">
                    <Grid className="quoteImg">
                        <img src={quotes.images} alt="" />
                    </Grid>
                </Grid>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='XOStXaZ25cw'
                onClose={() => setOpen(false)}
            />
        </Grid>
    );
}

export default injectIntl(Quote);
