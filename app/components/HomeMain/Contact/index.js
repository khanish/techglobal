import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button, TextField, InputAdornment, FormLabel } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Joi from 'joi-browser'
import { toast } from 'react-toastify'
import './style.scss'

// images 
import user from 'images/icons/user.png'
import phone from 'images/icons/phone.png'
import email from 'images/icons/email.png'
import subject from 'images/icons/subject.png'

class Contact extends Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
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
        lname: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.LastNamecanNobeempty })}`;
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        subject: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = `${this.t({ ...messages.SubjectcanNobeempty })}`;
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
            lname: this.state.lname,
            subject: this.state.subject,
            phone: this.state.phone,
            message: this.state.message
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
                lname: '',
                email: '',
                phone: '',
                subject: '',
            })
            toast.success('Successfully Done')
        }
    }

    t(msg, values) {
        return this.props.intl.formatMessage(msg, values);
    }

    render() {
        return (
            <Grid className="contactArea">
                <form onSubmit={this.submitHandler}>
                    <Grid
                        container
                        spacing={4}
                        className="container">
                        <Grid item xs={12}>
                            <SectionTitle
                                title={this.t({ ...messages.GetInTouch })}
                                subtitle={this.t({ ...messages.Contact })}
                                stoketext={this.t({ ...messages.Contact })}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <FormLabel className="inputLabel">{this.t({ ...messages.FirstName })}</FormLabel>
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
                        <Grid item md={4} sm={6} xs={12}>
                            <FormLabel className="inputLabel">{this.t({ ...messages.LastName })}</FormLabel>
                            <TextField
                                variant="outlined"
                                value={this.state.lname}
                                name="lname"
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
                                error={this.state.error.lname && true}
                                helperText={this.state.error.lname && this.state.error.lname}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
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
                        <Grid item md={6} xs={12}>
                            <FormLabel className="inputLabel">{this.t({ ...messages.Subject })}</FormLabel>
                            <TextField
                                variant="outlined"
                                value={this.state.subject}
                                name="subject"
                                onChange={this.changeHandler}
                                fullWidth
                                classes={{
                                    root: 'inputField',
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <img src={subject} alt="" />
                                    </InputAdornment>,
                                }}
                                error={this.state.error.subject && true}
                                helperText={this.state.error.subject && this.state.error.subject}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormLabel className="inputLabel">{this.t({ ...messages.YourMessage })}</FormLabel>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                classes={{
                                    root: 'inputField inputTextarea',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} className="textCenter">
                            <Button type="submit" className="loadmore">Send Message</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }
}

export default injectIntl(Contact);
