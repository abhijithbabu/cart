import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.observer = props.observer;
        this.state = {
            added: false
        }
    }
    addToCart = (e) => {
        if (!this.state.added) {
            this.observer.publish('cartAdded', this.props.data);
        } else {
            this.observer.publish('cartRemoved', this.props.data.id);

        }
        this.setState({
            added: !this.state.added
        });

    }
    render() {
        var data = this.props.data;
        return (
            <div>
                <div className="product-image-wrapper">
                    <img className="" alt={data.name} src={data.image} />
                </div>
                <div className="product-details-container">
                    <div className="product_description">{data.name}</div>
                    <div className="product_price">{data.price} <span>{data.currency}</span></div>
                    <div className="product_add_to_cart_cont">
                        <div onClick={this.addToCart} className="product_add_to_cart">{this.state.added ? 'Remove' : 'Add to cart'}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;