import React, { Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component{
    state = {
        term: ''
    };

    inputSearch = (e) =>{
        const {onSearch} = this.props;
        const term = e.target.value;
        onSearch(term);

        this.setState({
            term: term
        })
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   onChange={(e)=>{this.inputSearch(e)}}
                   placeholder="type to search" value={this.state.term}/>
        );
    }

}