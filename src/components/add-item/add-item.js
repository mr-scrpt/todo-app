import React, { Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {
    state = {
      fieldValue: ''
    };
    onLabelChange = (e)=>{
        const fieldValue = e.target.value;
        this.setState({
            fieldValue
        })
    };

    sendDataField = (e)=>{
        e.preventDefault();
        const {onAdd} = this.props;
        onAdd(this.state.fieldValue);
        this.setState({
            fieldValue: ''
        })
    };
    render() {

        return(
            <form className='add-item d-flex' onSubmit={ (e) => { this.sendDataField(e) } }>
                <input type='text' className='form-control' onChange={this.onLabelChange} placeholder='What needs to be done' value={this.state.fieldValue}/>
                <button className='btn btn-outline-secondary'>Add!</button>
            </form>
        )
    }
}