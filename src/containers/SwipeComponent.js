import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBody from './AppBody';
import Products from '../data/products';

import {
    bindKeyboard
} from 'react-swipeable-views-utils';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
const styles = {
    slide: {
        padding: 15,
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
    }

    componentDidMount() {
        this.observer.subscribe('view', (data) => {
            this.setState({'view' : data});
        });
        this.observer.subscribe('cartRemoved', (data) => {
             this.setState({'view' : data});
        });
    }

    viewSwitching(index, indexLatest){
        window.scroll(0,0)
    }

    render() {

        return (
            <BindKeyboardSwipeableViews onChangeIndex={this.viewSwitching} animateHeight={true}>
				<div ref="test1" className={this.state.view} style={Object.assign({}, styles.slide)}>
					<AppBody products={Products['watches']} observer={this.observer}/>
				</div>
				<div className={this.state.view} style={Object.assign({}, styles.slide)}>
					<AppBody products={Products['shoes']}  observer={this.observer}/>
				</div>
				<div className={this.state.view} style={Object.assign({}, styles.slide)}>
					<AppBody products={Products['jackets']}  observer={this.observer}/>
				</div>
				
			</BindKeyboardSwipeableViews>
        )
    }
}



export default SwipeComponent;