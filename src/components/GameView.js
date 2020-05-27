import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameView extends Component {

  constructor(props){
    super(props)

    this.getAllAnswers = this.getAllAnswers.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.parseHtmlEntities = this.parseHtmlEntities.bind(this);
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

  parseHtmlEntities(str) {
    const regexApo = /(&#039;)/g
    const regexLt = /(&lt;)/g
    const regexGt = /(&gt;)/g
    const regexQuot = /(&quot;)/g
    const regexAmp = /(&amp;)/g
    
    let str1 = str.replace(regexApo, "'");
    let str2 = str1.replace(regexLt, "<");
    let str3 = str2.replace(regexGt, ">");
    let str4 = str3.replace(regexQuot, "\"");
    let str5 = str4.replace(regexAmp, "&");
    return str5;
  } 

  getAllAnswers(){
    let allAnswers = [];
    const answer = this.parseHtmlEntities(this.props.questions[this.props.questionCounter].correct_answer);
    allAnswers.push(answer);

    let incorrectAnswers = this.props.questions[this.props.questionCounter].incorrect_answers;
    for (const incorrectAnswer of incorrectAnswers) {
      const answer = this.parseHtmlEntities(incorrectAnswer);
      allAnswers.push(answer);
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
    } else if (this.props.questionCounter === this.props.questions.length) {
      return (
        <>
          <h1>Quiz Finished!</h1>
          <h2>Go to <Link to="/game/final-score"> final scoreboard</Link>.</h2>
        </>
      )
    } else {

      const allAnswers = this.getAllAnswers();

      const answersArray = [];
      for (const [index, answer] of allAnswers.entries()){
        answersArray.push(
          <div key={index}>
            <input value={answer} type="radio" name="response" onClick={this.chooseAnswer}/>
            <label>{allAnswers[index]}</label>
            <br></br>
          </div>
        )
      }

      return (
        <>
          <h3>{this.parseHtmlEntities(this.props.questions[this.props.questionCounter].question)}</h3>
          <form>
            {answersArray}
          </form>
          <h3>Score: </h3>
          <p>{this.props.score}</p>
        </>
      )
    }
  }

}

export default GameView;