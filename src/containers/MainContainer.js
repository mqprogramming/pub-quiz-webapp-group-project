import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from '../components/MainMenu';
import GameContainer from './game/GameContainer';
import ErrorPage from '../components/ErrorPage';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
    this.setNameFromMainMenu = this.setNameFromMainMenu.bind(this);
  }

  setNameFromMainMenu(newName){
    this.setState({userName: newName})
  }

  render(){
    return(
      <>
      <Router>
      <Switch>
        <Route exact path="/" 
        render={(props) => {
            return <MainMenu 
            changeUserName={ this.setNameFromMainMenu.bind(this) } />
          }}
        />
        <Route path="/game"
        render={(props) => {
            return <GameContainer
            userName={ this.state.userName } />
          }}
        />
        <Route component={ErrorPage} />
        </Switch>
      </Router>
      </>
    )
  }
}

export default MainContainer;