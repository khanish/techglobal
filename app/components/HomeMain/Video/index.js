import React, { useState, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import './style.scss'

// images
import video from 'images/bg/video.jpg'
import play from 'images/icons/play.png'
import image1 from 'images/video/img1.jpg'
import image2 from 'images/video/img2.jpg'




const Video = (props) => {
    const [open, setOpen] = useState(false)
    const videos = {
        title: `${props.intl.formatMessage({ ...messages.VoiceandDataSystemsare })}`,
        title2: `${props.intl.formatMessage({ ...messages.crucialtothesuccess })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.introvideo })}`,
        stoketext: `${props.intl.formatMessage({ ...messages.Video })}`,
    }
    return (
        <Fragment>
            <Grid style={{ background: `url(${video}) no-repeat center center / cover` }} className="videoArea overlay">
                <Grid container spacing={4} className="container">
                    <Grid item xs={12}>
                        <Grid className="videoContent">
                            <span className="sub">{videos.subtitle}</span>
                            <h3>{videos.title} <span>{videos.title2}</span></h3>
                            <h2>{videos.stoketext}</h2>
                            <Button
                                onClick={() => setOpen(true)}
                                className="playBtn">
                                <img src={play} alt="" />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className="videoImageWrap">
                            <Grid
                                container
                                spacing={4}
                                className="container">
                                <Grid item lg={6} sm={6} xs={12}>
                                    <Grid className="videoImg">
                                        <img src={image1} alt="" />
                                    </Grid>
                                </Grid>
                                <Grid item lg={6} sm={6} xs={12}>
                                    <Grid className="videoImg">
                                        <img src={image2} alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <ModalVideo
                    channel='youtube'
                    isOpen={open}
                    videoId='ipfPN4fYPyI'
                    onClose={() => setOpen(false)}
                />
            </Grid>

        </Fragment>
    );
}

export default injectIntl(Video);
