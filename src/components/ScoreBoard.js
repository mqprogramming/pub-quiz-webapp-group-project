import { withRouter } from 'react-router'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ScoreBoard extends Component {

  constructor(props){
    super(props);
    this.onPlayAgain = this.onPlayAgain.bind(this);
  }

  onPlayAgain(event){
    event.preventDefault();
    this.props.resetQuiz();
    this.props.history.push('/game/generate-quiz')
  }

  render(){

    const percentage = this.props.score / this.props.numberOfQuestions;
    const quipArray = [];
  
    if (percentage < 0.2) {
      quipArray.push(<h3 key="key">You did real bad, {this.props.userName}!</h3>)
    } else if (percentage >= 0.2 && percentage < 0.4) {
      quipArray.push(<h3 key="key">You did alright..., {this.props.userName}</h3>)
    } else if (percentage >= 0.4 && percentage < 0.6) {
      quipArray.push(<h3 key="key">You did kinda good, actually, {this.props.userName}!</h3>)
    } else if (percentage >= 0.8 && percentage < 0.9) {
      quipArray.push(<h3 key="key">Wow, I'm actually fairly impressed with you, {this.props.userName}!</h3>)
    } else if (percentage >= 0.9) {
      quipArray.push(<h3 key="key">You're a trivia god, {this.props.userName}! Join my pub quiz team, we're calling it "{this.props.userName} Is Our Lord And Saviour"!!!</h3>)
    } 

    return (
      <>
        <h1>Final Score</h1>
        <h2>{this.props.score}/{this.props.numberOfQuestions}</h2>
        {quipArray}
        <button onClick={this.onPlayAgain.bind(this)} type="button">Play Again</button>
      </>
    )
  }
  
}

export default withRouter(ScoreBoard);