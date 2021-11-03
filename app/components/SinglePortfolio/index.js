import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import './style.scss'
const SinglePortfolio = ({ image, designation, name, id }) => {
    return (
        <Grid className="portfolioWrap">
            <Grid className="portfolioImg">
                <img src={image} alt="" />
            </Grid>
            <Grid className="portfolioContent">
                <Grid className="portfolioContentLeft">
                    <span>{designation}</span>
                    <h3>{name}</h3>
                </Grid>
                <Link to={`/portfolio-details/${id}`}>
                    <i className="pe-7s-right-arrow"></i>
                </Link>
            </Grid>
        </Grid>
    );
}

export default SinglePortfolio;
