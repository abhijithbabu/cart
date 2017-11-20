import React, { Component } from 'react';
import cartlogo from '../images/shoppingcart.svg';
import sitelogo from '../images/logo.png';
import Cart from '../components/cart';

import ViewToggler from '../components/toggle';
import '../css/App.css';


function contentClass(isShow) {
    if (isShow) {
        return "show";
    }
    return "hide";
}

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.observer = props.observer;
        this.state = {
            isShow: false
        };
        this.toggleCartDisplay = this.toggleCartDisplay.bind(this);
    }
    toggleCartDisplay(prevState) {
        this.setState({
            isShow: !this.state.isShow
        });
    }
    render() {
        return (
        	<div className="appheader-outer">
	            <div className="AppHeader">
	            	<img src={sitelogo} className="img-responsive" alt="site-logo" id="sitelogo" />
					<div id="cart_container">
						<img onClick={this.toggleCartDisplay} src={cartlogo} className="cartlogo" alt="cart-logo" />
						<Cart displaytrigger={contentClass(this.state.isShow)}  observer={this.observer}/>
					</div>
				</div>
				 <ViewToggler  observer={this.observer}/>
			</div>
        );
    }
}

export default AppHeader;