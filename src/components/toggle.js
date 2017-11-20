import React, { Component } from 'react';
import GridIcon from 'react-icons/lib/fa/th';
import ListIcon from 'react-icons/lib/fa/list';

class ViewToggler extends Component {
    constructor(props) {
        super(props);
        this.observer = props.observer;
        this.state = {
            view: 'grid', 
        }
        
    }

    toggleView = (e,data) => { 
        if(data === 1){
            this.setState({
                view: 'grid'
            }); 
             this.observer.publish('view', 'grid'); 
        }else{
            this.setState({
                view: 'list'
            });  
            this.observer.publish('view', 'list');
        }
    }
    render() {
        return (
            <div className="toggle-view-container">
                <div className="view_text">View: </div>
                <div onClick={(e) => this.toggleView(e, 1)} className={(this.state.view === 'grid') ? 'toggle-grid active' : 'toggle-grid' }><GridIcon /></div>
                <div onClick={(e) => this.toggleView(e, 2)} className={(this.state.view === 'list') ? 'toggle-list active' : 'toggle-list' }><ListIcon /></div>
            </div>
        )
    }
}

export default ViewToggler;



