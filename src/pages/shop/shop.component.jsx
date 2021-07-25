import React from 'react';
import SHOP_DATA from './shop.data.js'
import './shop.style.scss';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
class ShopPage extends React.Component{
    constructor() {
        super();

        this.state = {
            Collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>{this.state.Collections.map(({ id, ...otherProps }) => (
                <PreviewCollection key="id" {...otherProps}></PreviewCollection>
            ))  
            }</div>
           
        )
    }
    
}

export default ShopPage;