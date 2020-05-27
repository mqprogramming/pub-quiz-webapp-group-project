import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Request from '../../helpers/request';
import QuizGeneration from '../../components/QuizGeneration';
import GameView from '../../components/GameView';

class GameContainer extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      numberOfQuestions: 1,
      questions: [],
      questionCounter: 0,

      score: 0,
      showPlayQuizButton: false,
      showScoreBoard: false
    }
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.changeNumberOfQuestionsRequested = this.changeNumberOfQuestionsRequested.bind(this);
  }

  changeNumberOfQuestionsRequested(data){
    this.setState(
      { numberOfQuestions: data }
    )
  }

  fetchQuestions(event) {
    event.preventDefault();
    const request = new Request();
    request.get(`https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}`)
    .then((data) => {
      this.setState({ questions: data.results})
    })
    .then((more) => (this.setState({ showPlayQuizButton: true })))
  }

  checkAnswer(answer) {
    if (this.state.questionCounter < this.state.questions.length){
      if (this.state.questions[this.state.questionCounter].correct_answer === answer) {
        const newScore = this.state.score + 1;
        this.setState({ score: newScore })
      }
      const newCounter = this.state.questionCounter + 1;
      this.setState({ questionCounter: newCounter })

      this.setState({ showScoreBoard: true })
    }
  } 
  
  render(){
    return(
      <Router>
        <Route path="/game/play-quiz"
          render={(props) => {
            return <GameView questions={this.state.questions} questionCounter={this.state.questionCounter} score={this.state.score} showScore={this.state.showScoreBoard} checkAnswer={this.checkAnswer.bind(this)} />
          }}
        />

        <Route path="/game/generate-quiz"
          render={(props) => {
            return <QuizGeneration handleSliderChange={this.changeNumberOfQuestionsRequested}
              onButtonPress={this.fetchQuestions.bind(this)} reveal={this.state.showPlayQuizButton}/>
          }}
        />
      </Router>
    )
  }

}

export default GameContainer;

/*

function parseHtmlEnteties(str) {
    return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });
}

*/

/*

(str) => {
  return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}

*/