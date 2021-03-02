

import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor(){
        super()
        this.state ={
            userInput: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChange} ></input>
                    <button type="submit" onSubmit={this.props.fetchGIFs}> Submit </button>
                </form>
            </div>
        )
    }
}
