import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Request from '../../helpers/request';
import QuizGeneration from '../../components/QuizGeneration';

class GameContainer extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      numberOfQuestions: 1,
      questions: []
    }
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.changeNumberOfQuestionsRequested = this.changeNumberOfQuestionsRequested.bind(this);
  }

  changeNumberOfQuestionsRequested(data){
    this.setState(
      { numberOfQuestions: data}
    )
  }

  fetchQuestions(event) {
    event.preventDefault();
    const request = new Request();
    request.get(`https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}`)
    .then((data) => {
      this.setState({ questions: data.results})
    })
  }
  
  render(){
    return(
      <Router>
        <Route path="/game/generate-quiz"
          render={(props) => {
            return <QuizGeneration handleSliderChange={this.changeNumberOfQuestionsRequested}
              onButtonPress={this.fetchQuestions.bind(this)} />
          }}
        />
      </Router>
    )
  }

}

export default GameContainer;