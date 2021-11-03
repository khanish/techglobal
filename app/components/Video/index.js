import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import bgImg from 'images/bg/blog.jpg'

const VideoComponent = ({ className }) => {
    const [open, setOpen] = useState(false)

    return (
        <Grid
            style={{ background: `url(${bgImg}) no-repeat center center / cover` }}
            className={`${className} aboutVideoArea overlay`}>
            <Grid className="container" spacing={4} container>
                <Grid className="aboutVideoContent">
                    <Button
                        onClick={() => setOpen(true)}
                        className="videoBtn">
                        <i className="fa fa-play"></i>
                    </Button>
                    <span className="subText">intro video</span>
                    <h2>Representing All Of The Major Telecom Companies</h2>
                    <h3>Video</h3>
                </Grid>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='AMbd96WTijk'
                onClose={() => setOpen(false)}
            />
        </Grid>
    )
}


export default VideoComponent;
