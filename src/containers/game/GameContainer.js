import { withRouter } from 'react-router'
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
      currentQuestion: {},
      usedQuestions: [],
      score: 0,
      showPlayQuizButton: false
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
    // .then(this.props.history.push('/game/play-quiz'))
    .then((more) => (this.setState({ showPlayQuizButton: true })))
  }

  replaceQuestion(){
    this.state.usedQuestions.add(this.state.currentQuestion);

    for (const question in this.state.questions){
      if (this.state.usedQuestions.find(someQuestion => someQuestion !== question)) {
        this.setState({ currentQuestion: question })
      }
    }
  }
  
  render(){
    return(
      <Router>
        <Route path="/game/play-quiz"
          render={(props) => {
            return <GameView questions={this.state.questions}/>
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

export default withRouter(GameContainer);