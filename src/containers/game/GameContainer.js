import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class GameContainer extends Component {
  
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <h1>This works!!!!</h1>
      </div>
      // <h4>{this.props.userName}</h4>
    )
  }
}

export default GameContainer;