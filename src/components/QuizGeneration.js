import React, { Component } from 'react';

class QuizGeneration extends Component {
  
  constructor(props){
    super(props);
    this.handleNumberOfQuestionsChange = this.handleNumberOfQuestionsChange.bind(this);
  }

  handleNumberOfQuestionsChange(event){
    this.props.handleSliderChange(event.target.value)
  }
  
  render(){
    return(
      <>
      <h3>Generate Quiz</h3>
      <form>
        <label>Choose the number of questions</label>
          <input onChange={this.handleNumberOfQuestionsChange} type="range" min="1" max="5" defaultValue="1" />

        <br></br>
          <button onClick={this.props.onButtonPress}>Start Quiz</button>
      </form>
      </>
    )
  }
}

export default QuizGeneration;