import React from 'react';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

const SingleBlog = ({ image, subtitle, id, title, details, author, date, avatar }) => {

    return (
        <Grid className="blogWrap">
            <Grid className="blogImg">
                <img src={image} alt="" />
                {avatar && <a href="JavaScript:void(0);"><img className="avatarImg" src={avatar} alt="" /></a>}
            </Grid>
            <Grid className="blogContent">
                <span>{subtitle}</span>
                <h3><Link to={`/blog-details/${id}`}>{title}</Link></h3>
                <p>{details}</p>
            </Grid>
            <ul className="blogMeta">
                <li><i className="fa fa-user"></i>By {author}</li>
                <li><i className="fa fa-calendar-o"></i> {date}</li>
                <li><i className="fa fa-share"></i></li>
            </ul>
        </Grid>
    );
}

export default SingleBlog;
