import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import messages from 'components/HomeMain/Contact/messages';
import { Grid, Button, TextField, InputAdornment, FormLabel } from '@material-ui/core'
import Joi from 'joi-browser'
import { toast } from 'react-toastify'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// components 
import Header from 'components/Header/Loadable'
import SectionTitle from 'components/SectionTitle/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'
import CallToAction from 'components/CallToAction/Loadable'

import './style.scss'

// images 
import logo from 'images/logo.png'
import logoBlack from 'images/logo-white.png'
import breadcumbImg from 'images/bg/breadcumb2.jpg'
import user from 'images/icons/user.png'
import phone from 'images/icons/phone.png'
import email from 'images/icons/email.png'
import subject from 'images/icons/subject.png'

import emailIcon from 'images/email.png'
import phoneIcon from 'images/phone.png'
import mapIcon from 'images/map.png'


const contactInfo = [
    {
        name: 'Phone Number',
        value1: '+88 97 876 765 9',
        value2: '(879) 876 567 867 56',
        icon: phoneIcon,
        btn: 'Call Us Now',
        link: 'tel:+98989878767',
        id: 1
    },
    {
        name: 'Email Address',
        value1: 'info@webmail.com',
        value2: 'example@web.com',
        icon: emailIcon,
        btn: 'Mail Us Now',
        link: 'mailto:info@example.com',
        id: 2
    },
    {
        name: 'Office Address',
        value1: '12/A, Evil Dead City',
        value2: 'New York, US',
        icon: mapIcon,
        btn: 'Get Here',
        link: 'Javascript:void(0)',
        id: 3
    },
]

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact Us'
    }
]

class ContactPage extends Component {
    state = {
        fname: '',
        email: '',
        phone: '',
        error: {},
    }
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.EmailcanNobeempty })}`;
                        break;
                    case "string.email":
                        err.message = `${this.t({ ...messages.EmailMastbeaValidemail })}`;
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        fname: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.FirstNamecanNobeempty })}`;
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        phone: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.PhonecanNobeempty })}`;
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
            fname: this.state.fname,
            phone: this.state.phone,
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
                fname: '',
                email: '',
                phone: '',
            })
            toast.success('Successfully Done')
        }
    }

    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Contact Us</title>
                </Helmet>
                <Header
                    className="headerStyleWhite"
                    logo={logo}
                />
                <Breadcumb
                    links={links}
                    className="overlay breadcumbStyleTwo"
                    title="Contact us"
                    bgImg={breadcumbImg}
                    stoketext="onova"
                />
                <Grid className="contactpageArea bgGray ptb-104">
                    <Grid className="googleMap">
                        <Map google={this.props.google} zoom={14}></Map>
                    </Grid>
                    <Grid className="container" spacing={4} container>
                        <form onSubmit={this.submitHandler}>
                            <Grid item lg={6} xs={12}>
                                <Grid spacing={4} container>
                                    <Grid item xs={12}>
                                        <SectionTitle
                                            title={this.t({ ...messages.GetInTouch })}
                                            subtitle='estimate'
                                            stoketext='Quote'
                                            className="textLeft"
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <FormLabel className="inputLabel">{this.t({ ...messages.name })}</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            value={this.state.fname}
                                            name="fname"
                                            onChange={this.changeHandler}
                                            fullWidth
                                            classes={{
                                                root: 'inputField',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={user} alt="" />
                                                </InputAdornment>,
                                            }}
                                            error={this.state.error.fname && true}
                                            helperText={this.state.error.fname && this.state.error.fname}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <FormLabel className="inputLabel">{this.t({ ...messages.Email })}</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.changeHandler}
                                            fullWidth
                                            classes={{
                                                root: 'inputField',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={email} alt="" />
                                                </InputAdornment>,
                                            }}
                                            error={this.state.error.email && true}
                                            helperText={this.state.error.email && this.state.error.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel className="inputLabel">{this.t({ ...messages.Phone })}</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            value={this.state.phone}
                                            name="phone"
                                            onChange={this.changeHandler}
                                            fullWidth
                                            classes={{
                                                root: 'inputField',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={phone} alt="" />
                                                </InputAdornment>,
                                            }}
                                            error={this.state.error.phone && true}
                                            helperText={this.state.error.phone && this.state.error.phone}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormLabel className="inputLabel">Message</FormLabel>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            classes={{
                                                root: 'inputField inputTextarea',
                                            }}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                    <img src={subject} alt="" />
                                                </InputAdornment>,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <Button type="submit" className="loadmore radiusOff">{this.t({ ...messages.GetAQuote })}</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                <Grid className="contactNowArea ptb-104">
                    <Grid className="container" spacing={4} container>
                        <Grid xs={12} item>
                            <SectionTitle
                                title='Contact Now'
                                subtitle='Contact'
                                stoketext='Contact'
                            />
                        </Grid>

                        {contactInfo.map((item, i) => (
                            <Grid key={i} item md={4} xs={12} sm={6}>
                                <Grid className="contactNowWrap">
                                    <Grid className="contactNowInfo">
                                        <img src={item.icon} alt="" />
                                        <h3>{item.name}</h3>
                                        <span>{item.value1}</span>
                                        <span>{item.value2}</span>
                                        <Button component="a" href={item.link}>{item.btn}</Button>
                                    </Grid>
                                </Grid>
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
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBceNl50o3BU6LrsIGJxSL9tKKvqBKIeVs')
})(injectIntl(ContactPage))
