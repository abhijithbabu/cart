import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.observer = props.observer;
        this.state = {
            items: [],
            total: 0
        }
    }
    componentDidMount() {
        this.observer.subscribe('cartAdded', (data) => {
            this.addtItem(data);
        });
        this.observer.subscribe('cartRemoved', (data) => {
            this.removeItem(data);
        });
    }

    addtItem = (item) => {
        var newItems = this.state.items;
        newItems.push(item);
        this.setState({
            items: newItems
        });
        this.countTotal();
    }
    removeItem = (itemId) => {
        var itemindex;
        var newItems = this.state.items;
        newItems.some(function(item, index) {
            if (item.id === itemId) {
                itemindex = index;
                return true;
            }
			return false;
        });
        if (typeof itemId !== 'undefined') {
            newItems.splice(itemindex, 1)
        }
        this.setState({
            items: newItems
        });
        this.countTotal();
    }
    countTotal = () => {
        var total = 0;
        this.state.items.forEach(function(item, index) {
            total = total + item.price;
        });
        this.setState({
            total: total.toFixed(2)
        });
    }
    render() {
        var currency = '';
        var items = this.state.items.map(function(item) {
            currency = item.currencysymbol;
            return (
                <li  key={item.id}>
                    <span className="span-item-name">{item.name}</span> 
                    <span className="span-item-price">{item.currencysymbol} {item.price}</span>
                </li>
            )
        });
        var body = (<div><ul id="items-ul">{items}</ul><div className="total-text">Total: {currency} {this.state.total}</div></div>);
        var empty = <div>Cart is Empty</div>;
        return (
            <div className={this.props.displaytrigger} id="cart-items-container">{items.length > 0 ? body : empty}</div>
        );
    }

}

export default Cart;