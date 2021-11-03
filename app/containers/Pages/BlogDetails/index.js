import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { Grid, Button, TextField, InputAdornment } from '@material-ui/core'
import messages from 'components/HomeMain/Blog/messages';
import Joi from 'joi-browser'
import { toast } from 'react-toastify'
import './style.scss'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
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
import banner from 'images/banner.jpg'

import image1 from 'images/blogs/img1.jpg'
import image2 from 'images/blogs/img2.jpg'
import image3 from 'images/blogs/img3.jpg'
import image4 from 'images/blogs/img4.jpg'
import image5 from 'images/blogs/img5.jpg'
import image6 from 'images/blogs/img6.jpg'

import avatar1 from 'images/blogs/avatar/img1.png'
import avatar2 from 'images/blogs/avatar/img2.png'
import avatar3 from 'images/blogs/avatar/img3.png'
import bar from 'images/bar.png'
import author from 'images/author.jpg'
import comment1 from 'images/comment1.jpg'
import comment2 from 'images/comment2.jpg'

import commentIcon from 'images/icons/comment/icon1.png'
import user from 'images/icons/comment/icon2.png'
import email from 'images/icons/comment/icon3.png'
import website from 'images/icons/comment/icon4.png'

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Blog Details'
    }
]

const comments = [
    {
        image: comment1,
        name: "Rosalina Kelian",
        time: '19th May 2019',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        image: comment2,
        name: "Arista Williamson",
        time: '20th Apr 2019',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]


class BlogDetails extends Component {
    state = {
        blog: {},
        blogs: [
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
            },
            {
                image: image5,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 05`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Mr kaji',
                date: '20 May 2019',
                avatar: avatar2,
                id: 9
            },
            {
                image: image6,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 06`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.Creativepark })}`,
                author: 'Jone doe',
                date: '05 Jan 2019',
                avatar: avatar3,
                id: 10
            },
            {
                image: image1,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 07`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.BusinessIT })}`,
                author: 'Mr Jon',
                date: '23 May 2019',
                avatar: avatar1,
                id: 11
            },
            {
                image: image2,
                title: `${this.t({ ...messages.Loremipsumdolorsitametconsectetur })} 08`,
                details: `${this.t({ ...messages.details })}`,
                subtitle: `${this.t({ ...messages.CreativeSoft })}`,
                author: 'Mr kaji',
                date: '20 May 2019',
                avatar: avatar2,
                id: 12
            },
        ],
        name: '',
        email: '',
        website: '',
        comment: '',
        error: {}
    }



    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'Email can No be empty';
                        break;
                    case "string.email":
                        err.message = 'email mast be a valid email';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        name: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'name can not be empty';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        website: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'website can not be empty';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        comment: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'comment can not be empty';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        })
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            email: this.state.email,
            name: this.state.name,
            website: this.state.website,
            comment: this.state.comment
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = (e) => {
        e.preventDefault();
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            this.setState({
                name: '',
                email: '',
                comment: '',
                website: '',
            })
            toast.success('Successfully Done')
        }
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        let blog = this.state.blogs.filter(b => b.id === id);
        if (blog.length >= 0) {
            this.setState({
                blog: blog[0]
            })
        }
    }
    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }



    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Blog Details</title>
                </Helmet>
                <Header
                    logo={logoBlack}
                />
                <Breadcumb
                    links={links}
                    className="overlay"
                    title="News Details"
                    bgImg={breadcumbImg}
                />
                <Grid className="blogDetailsArea">
                    <Grid container spacing={4} className="container">
                        <Grid item md={8} xs={12}>
                            <Grid className="blogDetailsWrap">
                                <div className="blogDetailsContent">
                                    <img src={this.state.blog.image} alt="" />
                                    <ul className="metaBlog">
                                        <li><i className="fa fa-user"></i> {this.state.blog.author}</li>
                                        <li><i className="fa fa-calendar"></i> {this.state.blog.date}</li>
                                    </ul>
                                    <h2>{this.state.blog.title}</h2>
                                    <p>{this.state.blog.details}</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  </p>
                                    <p>culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                    <blockquote>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        <h4>- Rosalina Pong</h4>
                                    </blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in  </p>
                                    <p>culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                </div>
                                <div className="tagSocial">
                                    <div className="blogDetailsTag">
                                        <h3>Releted Tags</h3>
                                        <ul>
                                            <li><Button component="a" href="Javascript:void(0);">Organic</Button></li>
                                            <li><Button component="a" href="Javascript:void(0);">Foods</Button></li>
                                            <li><Button component="a" href="Javascript:void(0);">Tasty</Button></li>
                                        </ul>
                                    </div>
                                    <div className="blogDetailsSocial">
                                        <h3>Social Share</h3>
                                        <ul>
                                            <li><a href="Javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="Javascript:void(0);"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="Javascript:void(0);"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="Javascript:void(0);"><i className="fa fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="nextPrev">
                                    <li className="prev">
                                        <span>Prev Post</span>
                                        <h4>Tips on Minimalist</h4>
                                    </li>
                                    <li>
                                        <img src={bar} alt="" />
                                    </li>
                                    <li className="next textRight">
                                        <span>next Post</span>
                                        <h4>Less Is More</h4>
                                    </li>
                                </ul>
                                <div className="authorWrapper">
                                    <img src={author} alt="" />
                                    <h3>Rosalina William</h3>
                                    <ul>
                                        <li><a href="Javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="Javascript:void(0);"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="Javascript:void(0);"><i className="fa fa-behance"></i></a></li>
                                        <li><a href="Javascript:void(0);"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="Javascript:void(0);"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="Javascript:void(0);"><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                                </div>
                                <Grid className="commentsWrap">
                                    <h3 className="blogDetailsSub">Comments</h3>
                                    <ul className="commentItems">
                                        {comments.map((item, i) => (
                                            <li key={i} className="commentItem">
                                                <div className="commentImg">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="commentContent">
                                                    <h4>{item.name}</h4>
                                                    <span>{item.time}</span>
                                                    <p>{item.details}</p>
                                                    <a href="Javascript:void(0);"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="reply" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-arrow-right fa-w-14 fa-fw"><path fill="currentColor" d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 0 1 0-11.06z" ></path></svg> Reply</a>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </Grid>
                                <h3 className="blogDetailsSub">Post Comment</h3>
                                <form onSubmit={this.submitHandler} className="commentForm">
                                    <TextField
                                        variant="outlined"
                                        value={this.state.comment}
                                        name="comment"
                                        className="commentField"
                                        multiline
                                        placeholder="Type your comments..."
                                        fullWidth
                                        onChange={this.changeHandler}
                                        error={this.state.error.comment && true}
                                        helperText={this.state.error.comment && this.state.error.comment}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <img src={commentIcon} alt="" />
                                            </InputAdornment>,
                                        }}
                                    />
                                    <TextField
                                        variant="outlined"
                                        value={this.state.name}
                                        name="name"
                                        className="commentField"
                                        placeholder="Type your name..."
                                        fullWidth
                                        onChange={this.changeHandler}
                                        error={this.state.error.name && true}
                                        helperText={this.state.error.name && this.state.error.name}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <img src={user} alt="" />
                                            </InputAdornment>,
                                        }}
                                    />
                                    <TextField
                                        variant="outlined"
                                        value={this.state.email}
                                        name="email"
                                        className="commentField"
                                        placeholder="Type your email..."
                                        fullWidth
                                        onChange={this.changeHandler}
                                        error={this.state.error.email && true}
                                        helperText={this.state.error.email && this.state.error.email}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <img src={email} alt="" />
                                            </InputAdornment>,
                                        }}
                                    />
                                    <TextField
                                        variant="outlined"
                                        value={this.state.website}
                                        name="website"
                                        className="commentField"
                                        placeholder="Type your website...."
                                        fullWidth
                                        error={this.state.error.website && true}
                                        helperText={this.state.error.website && this.state.error.website}
                                        onChange={this.changeHandler}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <img src={website} alt="" />
                                            </InputAdornment>,
                                        }}
                                    />
                                    <Button type="submit" className="btn textUppercase">Post comment</Button>
                                </form>
                            </Grid>
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
                </Grid>

                <Footer
                    logo={logo}
                />
            </Fragment>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(BlogDetails));
