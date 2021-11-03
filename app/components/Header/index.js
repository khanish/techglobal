import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Menu, Button, ExpansionPanelSummary, ExpansionPanelDetails, MuiExpansionPanelDetails, ExpansionPanel } from '@material-ui/core'
import cookie from 'js-cookie';
import { Link, NavLink } from 'react-router-dom'
import LanguageSwitcher from 'components/LanguageSwitcher'
import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { changeLocale } from 'containers/LanguageProvider/actions';
import makeSelectHeader from './selectors';
import './style.scss'

// images
import logo from 'images/logo.png'
import avatar from 'images/avatar.jpg'


const Header = (props) => {
    const menus = [
        {
          name: /*`${props.intl.formatMessage({ ...messages.Home })}`*/ `${props.intl.formatMessage({ ...messages.Home })}`,
           link: '/',
          id: 1,
          /*submenu: [
              {
                  name: `${props.intl.formatMessage({ ...messages.Homemain })}`,
                  link: '/'
              },
              {
                  name: `${props.intl.formatMessage({ ...messages.HomeITBusiness })}`,
                  link: '/home-business'
              },
          ],*/
        },
        {
            name: `${props.intl.formatMessage({ ...messages.aboutus })}`,
            link: '/about',
            id: 2
        },
        {
            name: `${props.intl.formatMessage({ ...messages.ITServices })}`,
            link: '/service',
            id: 10
        },
        {
            name: `${props.intl.formatMessage({ ...messages.ITConsultancy })}`,
            link: '/consultancy',
            id:11
        },
       /* {
            name: `${props.intl.formatMessage({ ...messages.company })}`,
            id: 3,
            submenu: [
                {
                    name: `${props.intl.formatMessage({ ...messages.ITServices })}`,
                    link: '/service'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.ITConsultancy })}`,
                    link: '/consultancy'
                },
            ],
        },*/
       /* {
            name: `${props.intl.formatMessage({ ...messages.Pages })}`,
            id: 5,
            submenu: [
               /* {
                    name: `${props.intl.formatMessage({ ...messages.faq })}`,
                    link: '/faq'
                },
                {
                    name: `${props.intl.formatMessage({ ...messages.OurTeam })}`,
                    link: '/team'
                },
                // {
                //     name: `${props.intl.formatMessage({ ...messages.shop })}`,
                //     link: '/shop'
                // },
                // {
                //     name: `${props.intl.formatMessage({ ...messages.shopdetails })}`,
                //     link: '/shop-details'
                // },
                //{
                  //  name: '404',
                  //  link: '/404'
               // },
            ],
        },*/
        {
            name: `${props.intl.formatMessage({ ...messages.faq })}`,
            link: '/faq',
            id: 6
        },
        {
            name: `${props.intl.formatMessage({ ...messages.OurTeam })}`,
            link: '/team',
            id: 8
        },
        {
            name: `${props.intl.formatMessage({ ...messages.contact })}`,
            link: '/contact',
            id: 9
        }
    ]
    const [openAccount, setOpenAccount] = useState(null);
    const [openProfile, setOpenProfile] = useState(null);
    const [expanded, setExpanded] = useState('0');
    const [menu, setMenu] = useState(false);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleClickAccount = event => {
        setOpenAccount(event.currentTarget);
    };

    const handleCloseAccount = () => {
        setOpenAccount(null);
    };

    const handleClickProfile = event => {
        setOpenProfile(event.currentTarget);
    };

    const handleCloseProfile = () => {
        setOpenProfile(null);
    };

    const responsiveMenuHandler = () => {
        setMenu(!menu)
    }
    const onChangeLocale = (locale) => {
        cookie.set('onova_lang', locale);
        props.changeLocale(locale);
    }


    return (
        <header className={props.className ? `${props.className} headerArea` : 'headerArea'}>
            <Grid
                container
                alignItems="center"
                className="container">
                <Grid item lg={2} md={6} sm={4} xs={6}>
                    <Link to="/" className="logoWrapper">
                        <img src={props.logo} alt="" style={{width: '40%'}}/>
                    </Link>
                </Grid>
                <Grid item className="d-none" lg={6}>
                    <ul className="mainmenu">
                        {menus.map(menu => (
                            <li key={menu.id}>
                                {menu.link ? <NavLink onClick={window.scrollTo(0, 0)} exact to={menu.link}>{menu.name}</NavLink> : <span>{menu.name} <i className="fa fa-angle-down"></i></span>}
                                {menu.submenu ? <ul>
                                    {menu.submenu.map((sub, i) => (<li key={i}><NavLink onClick={window.scrollTo(0, 0)} exact to={sub.link}>{sub.name}</NavLink></li>
                                    ))}
                                </ul> : ''}
                            </li>
                        ))}
                    </ul>
                </Grid>

                <Grid item lg={2} md={2} sm={3} xs={6}>
                    <Menu
                        anchorEl={openProfile}
                        keepMounted
                        open={Boolean(openProfile)}
                        onClose={handleCloseProfile}
                        elevation={0}
                        getContentAnchorEl={null}
                        className="profileWrapper"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        classes={{
                            paper: 'profilePaper',
                            list: 'profileList'
                        }}
                    >
                    </Menu>
                </Grid>
                <Grid item lg={2} md={3} sm={4} xs={10}>
                    <ul className="headerRight">
                        <li><Button><i className="fa fa-search"></i></Button></li>
                    </ul>
                </Grid>
                <Grid item md={1} sm={1} xs={2} className="responsiveMenuTrigger">
                    <ul onClick={responsiveMenuHandler} className={menu ? 'responsiveMenuTriggerItem active' : 'responsiveMenuTriggerItem'}>
                        <li className="first"></li>
                        <li className="second"></li>
                        <li className="third"></li>
                    </ul>
                </Grid>

                <Menu
                    anchorEl={openAccount}
                    keepMounted
                    open={Boolean(openAccount)}
                    onClose={handleCloseAccount}
                    elevation={0}
                    getContentAnchorEl={null}
                    className="profileWrapper"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    classes={{
                        paper: 'profilePaper',
                        list: 'profileList'
                    }}
                >
                </Menu>
            </Grid>
            <Grid className={menu ? 'responsiveMenuWrap active' : 'responsiveMenuWrap'}>
                {menus.map((menu, i) => (
                    <Fragment key={i}>
                        {menu.submenu ? <ExpansionPanel
                            classes={{
                                root: 'responsiveColups',
                            }}
                            square
                            expanded={expanded === menu.id}
                            onChange={handleChange(menu.id)}>
                            <ExpansionPanelSummary className="responsiveColupdHead">{menu.name}</ExpansionPanelSummary>
                            <ExpansionPanelDetails className="responsiveColupdDetails">
                                <ul className="responsiveSubmenuItems">
                                    {menu.submenu.map(((sub, i) => (
                                        <li key={i}><NavLink activeClassName="active" to={sub.link}>{sub.name}</NavLink></li>
                                    )))}
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> : <NavLink activeClassName="active" to={menu.link}>{menu.name}</NavLink>}
                    </Fragment>
                ))}

            </Grid>
        </header>
    );
}

const mapStateToProps = createStructuredSelector({
    headerComponent: makeSelectHeader(),
    locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
    return {
        changeLocale: locale => dispatch(changeLocale(locale)),
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(Header));
