import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Request from '../../helpers/request';
import QuizGeneration from '../../components/QuizGeneration';
import GameView from '../../components/GameView';
import ScoreBoard from '../../components/ScoreBoard';
import ErrorPage from '../../components/ErrorPage';

class GameContainer extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      numberOfQuestions: 1,
      questions: [],
      questionCounter: 0,
      
      categories: [],
      category: "",

      score: 0,
      showPlayQuizButton: false
    }
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.changeNumberOfQuestionsRequested = this.changeNumberOfQuestionsRequested.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('https://opentdb.com/api_category.php')
    .then((data) => {
      this.setState({ categories: data.trivia_categories} )
    })
  }

  changeNumberOfQuestionsRequested(data){
    this.setState(
      { numberOfQuestions: data }
    )
  }

  handleCategory(event){
    this.setState(
      { category: event.target.value }
    )
  }

  fetchQuestions(event) {
    event.preventDefault();
    const request = new Request();
    request.get(`https://opentdb.com/api.php?amount=${this.state.numberOfQuestions}&category=${this.state.category}`)
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
    }

  }
  
  resetQuiz(){
    this.setState({
      numberOfQuestions: 1,
      questions: [],
      questionCounter: 0,

      score: 0,
      showPlayQuizButton: false
    })
  }
  
  render(){
    return(
      <Router>
        <Switch>
        <Route path="/game/play-quiz"
          render={(props) => {
            return <GameView
            questions={this.state.questions}
            questionCounter={this.state.questionCounter}
            score={this.state.score}
            showScore={this.state.showScoreBoard}
            checkAnswer={this.checkAnswer.bind(this)} />
          }}
        />

        <Route path="/game/generate-quiz"
          render={(props) => {
            return <QuizGeneration 
              handleSliderChange={this.changeNumberOfQuestionsRequested}
              onButtonPress={this.fetchQuestions.bind(this)} 
              reveal={this.state.showPlayQuizButton}
              categories={this.state.categories}
              onCategorySelect={this.handleCategory.bind(this)}
              />
          }}
        />

        <Route path="/game/final-score"
          render={(props) => {
            return <ScoreBoard 
            userName={this.props.userName}
            score={this.state.score}
            numberOfQuestions={this.state.numberOfQuestions}
            resetQuiz={this.resetQuiz.bind(this)}
            />
          }}
        />
        <Route component={ErrorPage} />
        </Switch>
      </Router>
    )
  }

}

export default GameContainer;

// 'https://opentdb.com/api_category.php'