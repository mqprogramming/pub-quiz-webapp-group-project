import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

class QuizGeneration extends Component {
  
  constructor(props){
    super(props);
    this.handleNumberOfQuestionsChange = this.handleNumberOfQuestionsChange.bind(this);
  }

  handleNumberOfQuestionsChange(event, value){
    this.props.handleSliderChange(value)
  }

  render(){
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
                max={5}
              />
            </Box>
          </Grid>
             
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.props.onButtonPress}>Generate Quiz</Button>
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
                <Button variant="contained" color="primary">Start Quiz</Button>
              </Link>
            </Grid>
          </Grid>
        </>
      )
    }
  }
    
}

export default QuizGeneration;