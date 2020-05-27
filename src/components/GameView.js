import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameView extends Component {

  constructor(props){
    super(props)

    this.getAllAnswers = this.getAllAnswers.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.chooseAnswer = this.chooseAnswer.bind(this);
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  getAllAnswers(){
    let allAnswers = [];
    allAnswers.push(this.props.questions[this.props.questionCounter].correct_answer);

    let incorrectAnswers = this.props.questions[this.props.questionCounter].incorrect_answers;
    for (const incorrectAnswer of incorrectAnswers) {
      allAnswers.push(incorrectAnswer);
    }
    
    return this.shuffle(allAnswers);
  }

  chooseAnswer(event){
    this.props.checkAnswer(event.target.value);
  }

  render(){

    if (this.props.questions.length === 0){

      return ( 
        <>
          <h1>There are no questions!</h1>
          <h2>Go back to <Link to="/game/generate-quiz">generate a quiz</Link>.</h2>
        </>
      )
    } else {

      const allAnswers = this.getAllAnswers();

      const answersArray = [];
      for (const [index, answer] of allAnswers.entries()){
        answersArray.push(
          <div key={index}>
            <input value={answer} type="radio" name="response" onChange={this.chooseAnswer}/>
            <label>{allAnswers[index]}</label>
            <br></br>
          </div>
        )
      }

      const scoreArray = [];
      if (this.props.showScore === true) {
        scoreArray.push(
          <div key="key">
            <h3>Score: </h3>
            <p>{this.props.score}</p>
          </div>
        )
      }

      return (
        <>
          <h3>{this.props.questions[this.props.questionCounter].question}</h3>
          <form>
            {answersArray}
          </form>
            {scoreArray}
        </>
      )
    }
  }

}

export default GameView;