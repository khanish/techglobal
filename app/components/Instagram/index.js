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

const instagrams = [image1, image2, image3, image4, image5, image6, image5, image2, image6]

const Instagram = () => {
    return (
        <SidebarCard
            title="Instagram"
        >
            <ul className="instagramItems">
                {instagrams.map((item, i) => (
                    <li key={i}>
                        <a href="Javascript:void(0);">
                            <img src={item} alt="" />
                        </a>
                    </li>
                ))}
            </ul>
        </SidebarCard>
    );
}

export default Instagram;
