import React, { useState } from "react";
import Menuitem from '../Menu-item/menu-item.component';
import './directory.styles.scss'

const Directory = () => {
    const sections = [
        {
            "title": "Hats",
            "imageURL" : 'https://i.ibb.co/cvpntL1/hats.png',
            "id": 1,
            "linkURL" : 'hats'
        },
        {
            "title": "Jackets",
            "imageURL" : 'https://i.ibb.co/px2tCc3/jackets.png',
            "id": 2,
            "linkURL": ''
        },
        {
            "title": "Sneakers",
            "imageURL" : 'https://i.ibb.co/0jqHpnp/sneakers.png',
            "id": 3,
            "linkURL": ''
        },
        {
            "title": "Womens",
            "imageURL" : 'https://i.ibb.co/GCCdy8t/womens.png',
            "size": 'large',
            "id": 4,
            "linkURL": ''
        },
        {
            "title": "Mens",
            "imageURL" : 'https://i.ibb.co/R70vBrQ/men.png',
            "size": 'large',
            "id": 5,
            "linkURL": ''
        }
    ];

    const [section] = useState(sections);

    return (
        <div className='directory-menu'>
            {section.map(
                ({ id, ...sectionsOptions }) => (
                    <Menuitem key={id} {...sectionsOptions}/>
                )
            )}
        </div>
    );
};

export default Directory;