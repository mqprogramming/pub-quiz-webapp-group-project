import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      userName: ""
    }
    this.onUserNameSubmit = this.onUserNameSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  onUserNameSubmit(event){
    event.preventDefault();
    this.props.changeUserName(this.state.userName);
  }

  handleUserNameChange(event){
    this.setState(
      {userName: event.target.value}
    )
  }

  render(){
    return(
      <>
        <h3>Pub Quiz Main Menu</h3>
        <form>
          <input onChange={this.handleUserNameChange.bind(this)} type="text" placeholder="Enter your name" />
          <br></br>
          <button onClick={this.onUserNameSubmit.bind(this)} type="button">Save Name</button>
          <Link to="/game/generate-quiz">
              <button>Start Game</button>
          </Link>
        </form>
      </>
    )
  }    
}

export default MainMenu;
