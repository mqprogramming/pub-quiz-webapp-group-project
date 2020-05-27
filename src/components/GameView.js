import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameView extends Component {

  constructor(props){
    super(props)
  }

  render(){
    if (this.props.questions.length === 0){
      return ( 
        <>
          <h1>There are no questions!</h1>
          <h2>Go back to <Link to="/game/generate-quiz">generate a quiz</Link>.</h2>
        </>
      )
    }

    if (this.props.showScore === true) {
      return (
        <div>
          <h3>Score: </h3>
          <p>{this.props.score}</p>
        </div>
      )
    }

    return(
      <>
        <h3>{this.props.questions[0].question}</h3>
        <form>
          <input value="Answer1" type="radio" name="response" />
          <label>Answer 1</label>
          <br></br>

          <input value="Answer2" type="radio" name="response" />
          <label>Answer 2</label>
          <br></br>

          <input value="Answer3" type="radio" name="response" />
          <label>Answer 3</label>
          <br></br>

          <input value="Answer4" type="radio" name="response" />
          <label>Answer 4</label>
        </form>
      </>
    )
  }

}

export default GameView;