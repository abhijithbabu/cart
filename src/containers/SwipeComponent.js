import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBody from './AppBody';
import Products from '../data/products';

import {
    bindKeyboard,
    bindMouse
} from 'react-swipeable-views-utils';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const styles = {
    slide: {
        padding: '15 0',
        background: '#eeeeee',
    },
};


class SwipeComponent extends Component {
    constructor(props) {
        super(props);
        this.observer = props.observer;
        this.state = {
           view:'grid'
        }
        this.onChangeIndex =this.onChangeIndex.bind(this)
    }

    componentDidMount() {
        this.observer.subscribe('view', (data) => {
            this.setState({'view' : data});
        });
        this.observer.subscribe('cartRemoved', (data) => {
             this.setState({'view' : data});
        });
    }



    onChangeIndex(index, indexLatest){
        this.updateScrollBars('end',index);
    }


    updateScrollBars(type,index){
        var currentClass = 'products-container'+index;
        var classList = ['products-container0','products-container1','products-container2'];
        if(type === 'end'){
            classList.filter(function(x) { 
                if(x !== currentClass){
                    var elem = document.getElementById(x);
                    elem.scrollTop = 0;
                }
            });
        }
    }

    render() {
        return (
            <BindKeyboardSwipeableViews enableMouseEvents={true} onSwitching={this.updateScrollBars} onChangeIndex={this.onChangeIndex} animateHeight={true}>
				<div id="products-container0" className={'products-container products-container0 '+this.state.view} style={Object.assign({}, styles.slide)}>
					<AppBody products={Products['watches']} observer={this.observer}/>
                    <div className="AppFooter">&copy; Copyright bMuse, 2017-2018. All rights reserved.</div>
				</div>
				<div id="products-container1" className={'products-container products-container1 '+this.state.view} style={Object.assign({}, styles.slide)}>
					<AppBody products={Products['shoes']}  observer={this.observer}/>
                    <div className="AppFooter">&copy; Copyright bMuse, 2017-2018. All rights reserved.</div>
				</div>
				<div id="products-container2" className={'products-container products-container2 '+ this.state.view} style={Object.assign({}, styles.slide)}>
					<AppBody products={Products['jackets']}  observer={this.observer}/>
                    <div className="AppFooter">&copy; Copyright bMuse, 2017-2018. All rights reserved.</div>
				</div>
				
			</BindKeyboardSwipeableViews>
        )
    }
}



export default SwipeComponent;