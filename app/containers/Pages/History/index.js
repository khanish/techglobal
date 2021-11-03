import React, { Fragment ,useState} from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import { Grid ,Button} from '@material-ui/core';

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import SectionTitle from 'components/SectionTitle/Loadable'
import CallToAction from 'components/CallToAction/Loadable'
import Footer from 'components/Footer/Loadable'
import './style.scss'

// images 
import logo from 'images/logo-white.png'
import logoBlack from 'images/logo.png'
import breadcumbImg from 'images/bg/breadcumb2.jpg'
import image1 from 'images/history/img1.jpg'
import image2 from 'images/history/img2.jpg'
import image3 from 'images/history/img3.jpg'
import image4 from 'images/history/img4.jpg'
import image5 from 'images/history/img5.jpg'
const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'History'
    }
]

const historys =[
    {
        image:image1,
        title:'Journey Start From In Bustin.',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'1990',
        id:1
    },
    {
        image:image2,
        title:'Get Reward From Word Camp In Australia',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2000',
        id:2
    },
    {
        image:image3,
        title:'We Hire More Then 1000+ Employee',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2005',
        id:3
    },
    {
        image:image4,
        title:'We Lunch 100+ Creative Products',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2012',
        id:4
    },
    {
        image:image5,
        title:'Journey Just Begining for Make Future',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2019',
        id:5
    },
    {
        image:image1,
        title:'Journey Start From In Bustin.',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'1990',
        id:6
    },
    {
        image:image2,
        title:'Get Reward From Word Camp In Australia',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2000',
        id:7
    },
    {
        image:image3,
        title:'We Hire More Then 1000+ Employee',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2005',
        id:8
    },
    {
        image:image4,
        title:'We Lunch 100+ Creative Products',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2012',
        id:9
    },
    {
        image:image5,
        title:'Journey Just Begining for Make Future',
        details:'Voice and Data Systems are crucial to the success or failure of most businesses. Many companies provide laptops, cell phones, and Internet connections that require expensive maintenance by internal IT departments.  However, paying for full-time IT services and multiple telecom providers may be an overlooked and unnecessary expense. A no cost analysis of these computer support and telecommunication expenses can save companies money.',
        year:'2019',
        id:10
    },
]

const History = () => {
    const [loadItems, setLoadItems] = useState(5)
    return (
        <Fragment>
            <Helmet>
                <title>History</title>
            </Helmet>
            <Header
                className="headerStyleWhite"
                logo={logo}
            />
            <Breadcumb
                links={links}
                className="overlay breadcumbStyleTwo"
                title="Our History"
                bgImg={breadcumbImg}
                stoketext="onova"
            />
            <Grid className="historyArea ptb-104">
                <Grid container spacing={4} className="container">
                    <Grid item xs={12}>
                        <SectionTitle
                            title='& Gain Huge Knowledge
                            In This Field'
                            subtitle='25+ Year of experience'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ul className="historyItems">
                            {historys.slice(0, loadItems).map((item,i)=>(
                                <li key={i} className="historyItem">
                                    <h3>{item.year}</h3>
                                    <div className="historyImg">
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <div className="historyContent">
                                        <h4>{item.title}</h4>
                                        <p>{item.details}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Grid className="textCenter">
                            <Button  onClick={() => setLoadItems(loadItems + 2)} className="plusBtn">+</Button>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction />
            <Footer
                logo={logoBlack}
                className="blackFooterArea"
            />
        </Fragment>
    );
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

export default compose(withConnect)(injectIntl(History));
