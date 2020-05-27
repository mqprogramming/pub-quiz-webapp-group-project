import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameView extends Component {

  constructor(props){
    super(props)

    this.getAllAnswers = this.getAllAnswers.bind(this);
    this.shuffle = this.shuffle.bind(this);
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
    allAnswers.push(this.props.questions[0].correct_answer);
    
    let incorrectAnswers = this.props.questions[0].incorrect_answers;
    for (const incorrectAnswer of incorrectAnswers) {
      allAnswers.push(incorrectAnswer);
    }
    
    return this.shuffle(allAnswers);
  }


  render(){

    if (this.props.questions.length === 0){

      return ( 
        <>
          <h1>There are no questions!</h1>
          <h2>Go back to <Link to="/game/generate-quiz">generate a quiz</Link>.</h2>
        </>
      )
    } else if (this.props.showScore === true) {

      return (
        <div>
          <h3>Score: </h3>
          <p>{this.props.score}</p>
        </div>
      )
    } else {

      const allAnswers = this.getAllAnswers();


      for (const answer of allAnswers){
        
      }

      return (
        <>
          <h3>{this.props.questions[0].question}</h3>
          <form>
            <input value="Answer1" type="radio" name="response" />
            <label>{allAnswers[0]}</label>
            <br></br>

            <input value="Answer2" type="radio" name="response" />
            <label>{allAnswers[1]}</label>
            <br></br>

            <input value="Answer3" type="radio" name="response" />
            <label>{allAnswers[2]}</label>
            <br></br>

            <input value="Answer4" type="radio" name="response" />
            <label>{allAnswers[3]}</label>
          </form>
          <button onClick={this.getAllAnswers}>Mairi's All Answers Button</button>
        </>
      )
    }
  }

}

export default GameView;