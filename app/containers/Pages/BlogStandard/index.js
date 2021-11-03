import React, { Fragment, Component } from 'react';
import { injectIntl } from 'react-intl';
import messages from 'components/HomeMain/Blog/messages';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import Slider from "react-slick";
import { Link } from 'react-router-dom'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'

// sidebar 
import SearchSidebar from 'components/SearchSidebar/Loadable'
import Instagram from 'components/Instagram/Loadable'
import FlowUs from 'components/FlowUs/Loadable'
import Cetagory from 'components/Cetagory/Loadable'
import Feeds from 'components/Feeds/Loadable'
import Tags from 'components/Tags/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/breadcumb1.jpg'

import image1 from 'images/blogs/standard/img1.jpg'
import image2 from 'images/blogs/standard/img2.jpg'
import image3 from 'images/blogs/standard/img3.jpg'
import play from 'images/icons/play.png'
import banner from 'images/banner.jpg'

import avatar1 from 'images/blogs/avatar/img1.png'
import avatar2 from 'images/blogs/avatar/img2.png'
import avatar3 from 'images/blogs/avatar/img3.png'


const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Blog'
    }
]

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    swipe: true,
    swipeToSlide: true,
    slidesToScroll: 1
};

const searchingFor = search => blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) || !search;


class BlogStandard extends Component {
    state = {
        open: false,
        search: '',
    }
    changeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    }

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
                imageShow: true,
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
                video: true,
                id: 2
            },
            {
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 03`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                avatar: avatar3,
                slider: true,
                sliders: [image3, image2, image1],
                id: 3
            },
            {
                image: image3,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 04`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                avatar: avatar3,
                audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177371823&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
                id: 4
            },
            {
                image: image3,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 05`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                avatar: avatar3,
                id: 5
            },
        ]

        return (
            <Fragment>
                <Header
                    logo={logoBlack}
                />
                <Breadcumb
                    links={links}
                    className="overlay"
                    title="News Feeds"
                    bgImg={breadcumbImg}
                />
                <Grid className="blogStandardArea">
                    <Grid container spacing={4} className="container">
                        <Grid item md={8} xs={12}>
                            {blogs.filter(searchingFor(this.state.search)).map((item, i) => (
                                <Grid key={i} className="blogStandardWrap">
                                    {item.imageShow && <Grid className="blogStandardImg">
                                        <img src={item.image} alt="" />
                                    </Grid>}
                                    {item.video && <Grid className="blogStandardVideo">
                                        <img src={item.image} alt="" />
                                        <Button
                                            onClick={() => this.setState({
                                                open: true
                                            })}>
                                            <img src={play} alt="" />
                                        </Button>
                                    </Grid>}
                                    {item.slider && <Slider
                                        className="testSlider"
                                        {...settings}>
                                        {item.sliders.map((slider, i) => (
                                            <Grid key={i} className="blogStandardSlider">
                                                <img src={slider} alt="" />
                                            </Grid>
                                        ))}
                                    </Slider>}
                                    {item.audio && <iframe width="100%" height="200" allow="autoplay" src={item.audio}></iframe>}
                                    <Grid className="blogStandardContent">
                                        <ul className="blogmeta">
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14 fa-fw"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                                                By {item.author}

                                            </li>
                                            <li>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw"><path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z" ></path></svg>
                                                {item.date}

                                            </li>
                                        </ul>
                                        <h3><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h3>
                                        <p>{item.details}  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                    </Grid>
                                </Grid>
                            ))}

                        </Grid>
                        <Grid item md={4} xs={12}>
                            <aside className="blogSidebar">
                                <SearchSidebar
                                    value={this.state.search}
                                    onChange={this.changeHandler}
                                />
                                <Instagram />
                                <FlowUs />
                                <Cetagory />
                                <Feeds />
                                <Tags />
                                <a className="bannerImg" href="Javascript:void(0);">
                                    <img src={banner} alt="" />
                                </a>
                            </aside>
                        </Grid>
                    </Grid>

                    <ModalVideo
                        channel='youtube'
                        isOpen={this.state.open}
                        videoId='XOStXaZ25cw'
                        onClose={() => this.setState({
                            open: false
                        })}
                    />
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

export default injectIntl(BlogStandard)
