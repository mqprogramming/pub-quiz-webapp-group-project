import { withRouter } from 'react-router'
import React, { Component } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ParticlesBg from "particles-bg";

class ScoreBoard extends Component {

  constructor(props){
    super(props);
    this.onPlayAgain = this.onPlayAgain.bind(this);
  }

  onPlayAgain(event){
    event.preventDefault();
    this.props.resetQuiz();
    this.props.history.push('/game/generate-quiz')
  }

  render(){

    const percentage = this.props.score / this.props.numberOfQuestions;
    const quipArray = [];
  
    if (percentage < 0.2) {
        quipArray.push(<Typography variant="subtitle1" key="key">You did real bad, {this.props.userName}!</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">You are literal rubbish, {this.props.userName}!</Typography>)
    } else if (percentage >= 0.2 && percentage < 0.4) {
        quipArray.push(<Typography variant="subtitle1" key="key">Still kinda awful, {this.props.userName}...</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">Need to brush up on your knowledge, don't you {this.props.userName}?</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">Wee bit pathetic don'tcha think, {this.props.userName}?</Typography>)
    } else if (percentage >= 0.4 && percentage < 0.6) {
        quipArray.push(<Typography variant="subtitle1" key="key">You did alright, {this.props.userName}...</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">You did fine I suppose, {this.props.userName}!</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">You are pretty mediocre, {this.props.userName}!</Typography>)
    } else if (percentage >= 0.6 && percentage < 0.8) {
        quipArray.push(<Typography variant="subtitle1" key="key">This was a little better, {this.props.userName}!</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">Not too bad, {this.props.userName}.</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">You did kinda good, actually, {this.props.userName}!</Typography>)
    } else if (percentage >= 0.8 && percentage < 0.9) {
        quipArray.push(<Typography variant="subtitle1" key="key">{this.props.userName}, you are a relative accomplished quizzer!</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">Bit of a trivia fiend, aren't you, {this.props.userName}!</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">Wow, I'm actually fairly impressed with you, {this.props.userName}!</Typography>)
    } else if (percentage >= 0.9) {
        quipArray.push(<Typography variant="subtitle1" key="key">You're a trivia god, {this.props.userName}! Join my pub quiz team, we're calling it "{this.props.userName} Is Our Lord And Saviour"!!!</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">I love you, {this.props.userName}!!! 😍</Typography>)
        quipArray.push(<Typography variant="subtitle1" key="key">Insane performance, {this.props.userName}!!</Typography>)
    }

    const GradientButton = styled(Button)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      });

    return (
      <>
        <Grid container direction="column" spacing={4} align="center" justify="center" >

            <Grid item>
              <Typography variant="h4">Final Score</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h2">{this.props.score}/{this.props.numberOfQuestions}</Typography>
            </Grid>
            
            <Grid item>
              <Typography variant="h6"> {quipArray[Math.floor(Math.random() * quipArray.length)]}</Typography>
            </Grid>

            <Grid item>
              <GradientButton onClick={this.onPlayAgain.bind(this)} type="button">Play Again</GradientButton>
            </Grid>
        </Grid>
        <ParticlesBg type="circle" bg={true} />
      </>
    )
  }
  
}

export default withRouter(ScoreBoard);