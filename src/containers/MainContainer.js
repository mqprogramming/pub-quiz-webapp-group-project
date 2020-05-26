import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import GameContainer from './game/GameContainer';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.setNameFromMainMenu = this.setNameFromMainMenu.bind(this);
  }

  handleUserName(event) {
    this.setState({ userName: event.target.value })
  }

  setNameFromMainMenu(newName){
    this.setState({userName: newName})
  }

  render(){
    return(
      <>
      <Router>
        <Route exact path="/" 
        render={(props) => {
            return <MainMenu 
            changeUserName={this.setNameFromMainMenu.bind(this)} />
          }}
        />
        <Route path="/game"
        render={(props) => {
            return <GameContainer
            userName={this.state.userName} />
          }}
        />
      </Router>
      </>
    )
  }
}

export default MainContainer;