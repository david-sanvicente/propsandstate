import React, { Component } from 'react'
import Color from './Color'

// make a collection of all the class colors
const colors = ['red','orange','yellow','green','blue','violet']

class Picker extends Component {
    constructor(){
      super()
      this.state = {
        currentColor: 'green'
      }
      this.colorClicked = this.colorClicked.bind(this)
    }
  
    colorClicked(color){
      this.setState({
        currentColor: color
      })
    }
  
    render() {
      return (
        <div id="container">
          <div id="navbar">
            <div>Currently selected: </div>
            <div className={this.state.currentColor}>{this.state.currentColor}</div>
          </div>
          <div id="colors-list">
            { colors.map(tag => <Color key={tag} color={tag} currentColor={this.state.currentColor} colorClicked={this.colorClicked}/>)}
          </div>
        </div>
      );
    }
}

export default Picker