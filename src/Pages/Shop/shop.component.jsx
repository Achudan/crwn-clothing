import { React, useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../Components/Collection-Preview/collection-preview.components"

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA);
    return (
        <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollections }) => (
                    <CollectionPreview key={id} {...otherCollections} />
                ))
            }
        </div>
    );
};

export default ShopPage;
