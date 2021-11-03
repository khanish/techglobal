import React, { Fragment, Component } from 'react';
import { injectIntl } from 'react-intl';
import messages from 'components/HomeMain/Blog/messages';
import { Grid } from '@material-ui/core'
// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import SingleBlog from 'components/SingleBlog/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/breadcumb2.jpg'

import image1 from 'images/blogs/img1.jpg'
import image2 from 'images/blogs/img2.jpg'
import image3 from 'images/blogs/img3.jpg'
import image4 from 'images/blogs/img4.jpg'
import image5 from 'images/blogs/img5.jpg'
import image6 from 'images/blogs/img6.jpg'

import avatar1 from 'images/blogs/avatar/img1.png'
import avatar2 from 'images/blogs/avatar/img2.png'
import avatar3 from 'images/blogs/avatar/img3.png'


const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: ' News Grid'
    }
]

class Blog2Grid extends Component {
    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }

    render() {
        const blogs = [
            {
                image: image1,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 01`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Mr Jon',
                date: '23 May 2019',
                avatar: avatar1,
                id: 1
            },
            {
                image: image2,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 02`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Mr kaji',
                date: '20 May 2019',
                avatar: avatar2,
                id: 2
            },
            {
                image: image3,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 03`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                avatar: avatar3,
                id: 3
            },
            {
                image: image4,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 04`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Mr Jon',
                date: '23 May 2019',
                avatar: avatar1,
                id: 4
            },
            {
                image: image5,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 05`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Mr kaji',
                date: '20 May 2019',
                avatar: avatar2,
                id: 5
            },
            {
                image: image6,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 06`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                avatar: avatar3,
                id: 6
            },
            {
                image: image1,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 07`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Mr Jon',
                date: '23 May 2019',
                avatar: avatar1,
                id: 7
            },
            {
                image: image2,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 08`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Mr kaji',
                date: '20 May 2019',
                avatar: avatar2,
                id: 8
            }
        ]

        return (
            <Fragment>
                <Header
                    className="headerStyleWhite"
                    logo={logo}
                />
                <Breadcumb
                    links={links}
                    className="overlay breadcumbStyleTwo"
                    title="News Grid"
                    bgImg={breadcumbImg}
                    stoketext="onova"
                />
                <Grid className="blogTwoGridArea">
                    <Grid container spacing={4} className="container">
                        {blogs.map((blog, i) => (
                            <Grid key={i} item sm={6} xs={12}>
                                <SingleBlog
                                    image={blog.image}
                                    subtitle={blog.subtitle}
                                    id={blog.id}
                                    title={blog.title}
                                    author={blog.author}
                                    date={blog.date}
                                    details={blog.details}
                                    avatar={blog.avatar}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <CallToAction />
                <Footer
                    logo={logoBlack}
                    className="blackFooterArea"
                />
            </Fragment>
        )
    }
}

export default injectIntl(Blog2Grid)
