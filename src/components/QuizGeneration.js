import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizGeneration extends Component {
  
  constructor(props){
    super(props);
    this.handleNumberOfQuestionsChange = this.handleNumberOfQuestionsChange.bind(this);
  }

  handleNumberOfQuestionsChange(event){
    this.props.handleSliderChange(event.target.value)
  }

  
  render(){
    if (this.props.reveal === false) {
      return (
        <>
          <h3>Generate Quiz</h3>
          <form>
            <label>Choose the number of questions</label>
            <input onChange={this.handleNumberOfQuestionsChange} type="range" min="1" max="5" defaultValue="1" />

            <br></br>
            <button onClick={this.props.onButtonPress}>Generate Quiz</button>
          </form>
        </>
      )
    } else {
      return (
        <>
          <Link to="/game/play-quiz">
            <button>Play Quiz</button>
          </Link>
        </>
      )
    }
  }
    
}

export default QuizGeneration;