import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Slider, Grid, Box, Button, ButtonGroup } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

class QuizGeneration extends Component {
  
  constructor(props){
    super(props);
    this.handleNumberOfQuestionsChange = this.handleNumberOfQuestionsChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
  }

  handleNumberOfQuestionsChange(event, value){
    this.props.handleSliderChange(value)
  }

  handleCategory(event){
    this.props.onCategorySelect(event)
  }

  handleDifficulty(value){
    this.props.onDifficultySelect(value)
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

    const GradientButtonTwo = styled(Button)({
      background: '#2196F3',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 35,
      padding: '0 30px',
    });

    if (this.props.reveal === false) {

      const categoryArray = [];
      categoryArray.push(<option key="key" value="">Random</option>);
      for (const category of this.props.categories) {
        categoryArray.push(
          <option key={category.id} value={category.id}>{category.name}</option>
        ); 
      }

      return (
        <>
          <Grid container direction="column" spacing={2} align="center" justify="center" style={{ background: 'linear-gradient(to right bottom, #5ebab0, #6dc4d1, #8ecdea, #b5d4f8, #dadbfe, #e2d9fc, #ebd8f8, #f2d6f4, #e8c9ec, #ddbce4, #d3afdc, #c8a3d4)' }}>

            <Grid item>
                <Box pb={3}>
                  <Typography variant="h3">Generate Quiz</Typography>
                </Box>
              </Grid>

              <Grid item>
              <Typography variant="subtitle1">Choose the number of questions</Typography>
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
            
            <Grid item >
              <Box pb={3}>
                <Typography variant="subtitle1"><label>Category</label></Typography>
                <select name="category" id="category" onChange={this.handleCategory}>
                  {categoryArray}
                </select>
              </Box>
            </Grid>

            <Grid item >
              <Box pb={3}>
                <Typography variant="subtitle1"><label>Difficulty</label></Typography>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                  <GradientButtonTwo value="easy" onClick={this.handleDifficulty}>Easy</GradientButtonTwo>
                  <GradientButtonTwo value="medium" onClick={this.handleDifficulty}>Medium</GradientButtonTwo>
                  <GradientButtonTwo value="hard" onClick={this.handleDifficulty}>Hard</GradientButtonTwo>
                  <GradientButtonTwo value="" onClick={this.handleDifficulty}>Varying</GradientButtonTwo>
                </ButtonGroup>
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
          <Grid container direction="column" spacing={4} align="center" justify="center" style={{ background: 'linear-gradient(to right bottom, #5ebab0, #6dc4d1, #8ecdea, #b5d4f8, #dadbfe, #e2d9fc, #ebd8f8, #f2d6f4, #e8c9ec, #ddbce4, #d3afdc, #c8a3d4)' }} >

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