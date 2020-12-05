import React, { Component } from 'react'
import './ListBuilderComponent.css';

class ListBuilderComponent extends Component {
    constructor() {
        super()
        this.state = {
            itemsArray: ['bread', 'eggs', 'milk', 'butter', 'vegetables'],
            itemInput: '',
        }
    }

    handleArrayChange(event) {
        // this.setState({
        //     itemsArray: e.target.value.filter
        // })
        // console.log(event)
        let filterArray = this.state.itemsArray.filter(element => {
            return element.includes(event.target.value)
        })
        console.log(filterArray)
        this.setState({
            itemsArray: filterArray,
        })
    }


    render() {
        let itemsArrayOnScreen = this.state.itemsArray.map((e, i, a) => {
            return <h2>{e}</h2>
        })
        return (
            <div className="lb-component">
                <input placeholder="add an item" onChange={(e) => this.handleArrayChange(e)} />
                <div>{itemsArrayOnScreen}</div>
            </div>
        )
    }
}

export default ListBuilderComponent