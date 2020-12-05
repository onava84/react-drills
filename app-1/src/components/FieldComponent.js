import React, { Component } from 'react'
import './FieldComponent.css';

class FieldComponent extends Component {
    constructor() {
        super();
        this.state = {
            textInput: '',
            textOnScreen: '',
        }

    }

    handlerTextChange(e) {
        this.setState({
            textOnScreen: e.target.value,
        })
    }



    render() {
        return <div className="field-component">
            <input placeholder="Write your text" onChange={(e) => this.handlerTextChange(e)} />
            <p>{this.state.textOnScreen}</p>
        </div>
    }

}

export default FieldComponent
