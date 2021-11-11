import React, { useState } from "react";
import Menuitem from '../Menu-item/menu-item.component';
import './directory.styles.scss'

const Directory = () => {
    const sections = [
        {
            "title": "Hats",
            "img" : 'https://i.ibb.co/cvpntL1/hats.png',
            "id": 1
        },
        {
            "title": "Jackets",
            "img" : 'https://i.ibb.co/px2tCc3/jackets.png',
            "id": 2
        },
        {
            "title": "Sneakers",
            "img" : 'https://i.ibb.co/0jqHpnp/sneakers.png',
            "id": 3
        },
        {
            "title": "Womens",
            "img" : 'https://i.ibb.co/GCCdy8t/womens.png',
            "size": 'large',
            "id": 4
        },
        {
            "title": "Mens",
            "img" : 'https://i.ibb.co/R70vBrQ/men.png',
            "size": 'large',
            "id": 5
        }
    ];

    const [section] = useState(sections);

    return (
        <div className='directory-menu'>
            {section.map(
                ({ title, img, size, id }) => (
                    <Menuitem key={id} title={title} imageURL={img} size={size}/>
                )
            )}
        </div>
    );
};

export default Directory;