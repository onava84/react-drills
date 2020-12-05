import React, { Component } from 'react'

class ListComponent extends Component {
    constructor() {
        super()
        this.state = {
            fruitsArray: ['apple', 'banana', 'grape', 'orange', 'mango']
        }
    }

    handlerFruitsArray() {

    }

    render() {
        let fruitsOnScreen = this.state.fruitsArray.map((e, i, a) => {
            return <h2>{e}</h2>
        })
        return (
            <div>{fruitsOnScreen}</div>
        )
    }

}

export default ListComponent