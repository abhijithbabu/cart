import React, { Component } from 'react';
import '../css/App.css';
import Product from '../components/product';

class AppBody extends Component {
    constructor(props) {
        super(props);
        this.observer = props.observer;
    }

    render() {
        var self = this;
        var products = this.props.products.map(function(product) {
            return (
                <div className="item-container col-lg-3 col-md-3 col-sm-4 col-xs-12" key={product.id}>
                    <div className="product-wrapper">
                        <Product data={product} observer={self.observer} />
                     </div>
                </div>
            )
        });
        return (
            <div>
                <div className="section-wrapper app_body row">{products}</div>

            </div>
        )
    }
}

export default AppBody;