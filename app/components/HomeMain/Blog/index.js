import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import SingleBlog from 'components/SingleBlog/Loadable'
import './style.scss'

// images
import image1 from 'images/dev.jpeg'
import image2 from 'images/dev1.jpg'
import image3 from 'images/soft.webp'

const Blog = (props) => {
    const blogs = {
        title: `${props.intl.formatMessage({ ...messages.NewsFeeds })}`,
        subtitle: `${props.intl.formatMessage({ ...messages.blog })}`,
        items: [
            {
                image: image1,
                title: `Understanding the relationships between SLO, SLI, and SRE 01`,
                details: `Even after delivering a project to a client, the software engineer’s job is not complete. The next phase is ensuring service reliability. In site reliability...`,
                subtitle: `${props.intl.formatMessage({ ...messages.BusinessIT })}`,
                author: 'Alireza Chegini',
                date: 'Nov 15, 2021',
                id: 1
            },
            {
                image: image2,
                title: `Plutora Enhances VSM Platform with Release Insights 02`,
                details: `Plutora has enhanced its value stream management (VSM) platform to provide dashboards that enable DevOps teams to better optimize application delivery. Jeff Keyes, vice president of product marketing and strategy for Plutora, ...`,
                subtitle: `${props.intl.formatMessage({ ...messages.BusinessIT })}`,
                author: 'Mike Vizard',
                date: ' Nov 16, 2021',
                id: 2
            },
            {
                image: image3,
                title: `16 Software Development Trends That Will Soon Dominate The Tech Industry 03`,
                details: `Every tech professional knows the importance of staying on top of the latest industry trends. From DevSecOps to low-code apps, software development trends change as fast as technology itself. To stay current, you not only need to consider the present state of technology, but you must also look ahead.`,
                subtitle: `${props.intl.formatMessage({ ...messages.Creativepark })}`,
                author: 'Forbes Technology',
                date: 'Jan 05, 2021',
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
