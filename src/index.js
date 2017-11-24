import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactObserver from 'react-event-observer';
import AppHeader from './containers/AppHeader';
import SwipeComponent from './containers/SwipeComponent';
import registerServiceWorker from './registerServiceWorker';


class Main extends Component {
    constructor(props) {
        super(props);
        this.observer = ReactObserver();
    }

    render() {
        return (
            <div>
                <AppHeader observer={this.observer} />
                <div className="AppBody">  
                    <SwipeComponent observer={this.observer} />
                </div>
              
            </div>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
registerServiceWorker();