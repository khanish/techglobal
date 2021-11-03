import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes
import PrivateRoute from 'containers/_PrivateRoute'

// components

// homes
import HomePage from 'containers/HomePage/Loadable'
import HomeBusiness from 'containers/HomeBusiness/Loadable'
import HomeStartup from 'containers/HomeStartup/Loadable'
// pages
import Blog2Grid from 'containers/Pages/Blog2Grid/Loadable'
import BlogGrid from 'containers/Pages/BlogGrid/Loadable'
import BlogStandard from 'containers/Pages/BlogStandard/Loadable'
import BlogDetails from 'containers/Pages/BlogDetails/Loadable'
import AboutPage from 'containers/Pages/AboutPage/Loadable'
import TeamPage from 'containers/Pages/TeamPage/Loadable'
import PortfolioPage from 'containers/Pages/PortfolioPage/Loadable'
import PortfolioTwo from 'containers/Pages/PortfolioTwo/Loadable'
import PortfolioDetails from 'containers/Pages/PortfolioDetails/Loadable'
import CconsultancyService from 'containers/Pages/CconsultancyService/Loadable'
import ItService from 'containers/Pages/ItService/Loadable'
import FaqPage from 'containers/Pages/FaqPage/Loadable'
import ContactPage from 'containers/Pages/ContactPage/Loadable'
import History from 'containers/Pages/History/Loadable'
import ErrorPage from 'containers/ErrorPage/Loadable'
const Routes = () => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/"
                component={HomeBusiness}
            />
            <PrivateRoute
                exact
                path="/home-business"
                component={HomePage}
            />
            <PrivateRoute
                exact
                path="/blog-two-grid"
                component={Blog2Grid}
            />
            <PrivateRoute
                exact
                path="/blog"
                component={BlogGrid}
            />
            <PrivateRoute
                exact
                path="/blog-standard"
                component={BlogStandard}
            />
            <PrivateRoute
                exact
                path="/blog-details/:id"
                component={BlogDetails}
            />
            <PrivateRoute
                exact
                path="/about"
                component={AboutPage}
            />
            <PrivateRoute
                exact
                path="/team"
                component={TeamPage}
            />
            <PrivateRoute
                exact
                path="/portfolio-one"
                component={PortfolioPage}
            />
            <PrivateRoute
                exact
                path="/portfolio-two"
                component={PortfolioTwo}
            />
            <PrivateRoute
                exact
                path="/portfolio-details/:id"
                component={PortfolioDetails}
            />
            <PrivateRoute
                exact
                path="/consultancy"
                component={CconsultancyService}
            />
            <PrivateRoute
                exact
                path="/service"
                component={ItService}
            />
            <PrivateRoute
                exact
                path="/faq"
                component={FaqPage}
            />
            <PrivateRoute
                exact
                path="/contact"
                component={ContactPage}
            />
            <PrivateRoute
                exact
                path="/history"
                component={History}
            />
            {/* <PublicRoute path="/maintenance" component={MaintenancePage} /> */}
            <Route component={ErrorPage} />
        </Switch>
    );
}
export default Routes
