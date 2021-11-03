import React from 'react';
import SidebarCard from 'components/SidebarCard/Loadable'
import './style.scss'

// images 
import image1 from 'images/blogs/img1.jpg'
import image2 from 'images/blogs/img2.jpg'
import image3 from 'images/blogs/img3.jpg'
import image4 from 'images/blogs/img4.jpg'
import image5 from 'images/blogs/img5.jpg'
import image6 from 'images/blogs/img6.jpg'

const cetagorys = [
    {
        image: image1,
        title: 'Alonso Kelina Falao Asiano Pero',
        time: '6 Hours ago',
        id: 1
    },
    {
        image: image2,
        title: 'It is a long established fact that a reader',
        time: '2 Hours ago',
        id: 2
    },
    {
        image: image3,
        title: 'Many desktop publish packages and web',
        time: '20 min ago',
        id: 3
    },
    {
        image: image4,
        title: 'Various versions have  evolved over the years',
        time: '10 min ago',
        id: 4
    },
    {
        image: image5,
        title: 'Photo booth anim 8-bit PBR 3 wolf moon.',
        time: '5 min ago',
        id: 6
    },
]

const Feeds = () => {
    return (
        <SidebarCard
            title="Feeds"
        >
            <ul className="feedsItems">
                {cetagorys.map((item, i) => (
                    <li key={i}>
                        <a className="feedItem" href="Javascript:void(0);">
                            <span className="feedImg">
                                <img src={item.image} alt="" />
                            </span>
                            <div className="feedContent">
                                <h5>{item.title}</h5>
                                <span><i className="fa fa-clock-o"></i> {item.time}</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </SidebarCard>
    );
}

export default Feeds;
