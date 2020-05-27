import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Typography, Slider, Grid, Box, Button} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

class QuizGeneration extends Component {
  
  constructor(props){
    super(props);
    this.handleNumberOfQuestionsChange = this.handleNumberOfQuestionsChange.bind(this);
  }

  handleNumberOfQuestionsChange(event, value){
    this.props.handleSliderChange(value)
  }

  render(){

    const GradientButton = styled(Button)({
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    });

    if (this.props.reveal === false) {
      return (
        <>
          <Grid container direction="column" spacing={2} align="center" justify="center" style={{ backgroundColor: '#FAEDCA' }} >

            <Grid item>
                <Typography variant="h3">Generate Quiz</Typography>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">Choose the number of questions</Typography>
              </Grid>

              <Grid item>
                <Box width={300} p={2}>
                  <Slider
                  defaultValue={1}
                  onChange={this.handleNumberOfQuestionsChange}
                  value={this.value}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={20}
                />
              </Box>
            </Grid>

            <Grid item>
              <GradientButton onClick={this.props.onButtonPress}>Generate Quiz</GradientButton>
            </Grid>
                   
          </Grid>
        </>
      )
    } else {
      return (
        <>
          <Grid container direction="column" spacing={4} align="center" justify="center" style={{ backgroundColor: '#FAEDCA' }} >

            <Grid item>
                <Typography variant="h3">Let's Play!</Typography>
            </Grid>

            <Grid item>
                <Link to="/game/play-quiz">
                <GradientButton >Start Quiz</GradientButton>
                </Link>
              </Grid>
          </Grid>
        </>
      )
    }
  }
    
}

export default QuizGeneration;