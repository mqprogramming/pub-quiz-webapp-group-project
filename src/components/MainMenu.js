import { withRouter } from 'react-router'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
  
  constructor(props){
    super(props);

    this.onUserNameSubmit = this.onUserNameSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  onUserNameSubmit(event){
    event.preventDefault();
    this.props.history.push('/game/generate-quiz')
  }

  handleUserNameChange(event){
    this.props.changeUserName(event.target.value);
  }

  render(){
    return(
      <>
        <h3>Pub Quiz Main Menu</h3>
        <form>
          <input onChange={this.handleUserNameChange.bind(this)} type="text" placeholder="Enter your name" />
          <br></br>
          <button onClick={this.onUserNameSubmit.bind(this)} type="button">Start Quizzin'</button>
        </form>
      </>
    )
  }    
}

export default withRouter(MainMenu);