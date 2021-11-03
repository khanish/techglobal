import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import SingleBlog from 'components/SingleBlog/Loadable'
import './style.scss'

// images 
import image1 from 'images/blogs/img1.jpg'
import image2 from 'images/blogs/img2.jpg'
import image3 from 'images/blogs/img3.jpg'

const Blog = (props) => {
    const blogs = {
        title: `${props.intl.formatMessage({ ...messages.NewsFeeds })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.blog })}`,
        items: [
            {
                image: image1,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsectetur })} 01`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                subtitle: `${props.intl.formatMessage({ ...messages.BusinessIT })}`,
                author: 'Mr Jon',
                date: '23 May 2019',
                id: 1
            },
            {
                image: image2,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsectetur })} 02`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                subtitle: `${props.intl.formatMessage({ ...messages.CreativeSoft })}`,
                author: 'Mr kaji',
                date: '20 May 2019',
                id: 2
            },
            {
                image: image3,
                title: `${props.intl.formatMessage({ ...messages.Loremipsumdolorsitametconsectetur })} 03`,
                details: `${props.intl.formatMessage({ ...messages.details })}`,
                subtitle: `${props.intl.formatMessage({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                id: 3
            },
        ]
    }
    return (
        <Grid className="blogArea">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title={blogs.title}
                        subtitle={blogs.subtitle}
                        stoketext={blogs.subtitle}
                    />
                </Grid>
                {blogs.items.map((item, i) => (
                    <Grid key={i} item lg={4} sm={6} xs={12}>
                        <SingleBlog
                            image={item.image}
                            subtitle={item.subtitle}
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            date={item.date}
                            details={item.details}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid >
    );
}

export default injectIntl(Blog);
