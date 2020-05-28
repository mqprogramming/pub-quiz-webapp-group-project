import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Typography, Grid, Box} from '@material-ui/core';
import {Radio, RadioGroup, FormControlLabel, FormControl, Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class GameView extends Component {

  constructor(props){
    super(props)

    this.getAllAnswers = this.getAllAnswers.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.parseHtmlEntities = this.parseHtmlEntities.bind(this);
    this.getCorrectAnswer = this.getCorrectAnswer.bind(this);
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
    let str1 = str.replace(/(&#039;)/g, "'");
    let str2 = str1.replace(/(&lt;)/g, "<");
    let str3 = str2.replace(/(&gt;)/g, ">");
    let str4 = str3.replace(/(&quot;)/g, "\"");
    let str5 = str4.replace(/(&amp;)/g, "&");
    let str6 = str5.replace(/(&eacute;)/g, "é");
    return str6;
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

  getCorrectAnswer(){
    let correctAnswer = "";
    if (this.props.questionCounter > 0) {
      correctAnswer = this.parseHtmlEntities(this.props.questions[this.props.questionCounter - 1].correct_answer)
    }
    return ("The correct answer was");
  }

  chooseAnswer(event){
    this.props.checkAnswer(event.target.value);
  }

  render(){

    const useStyles = makeStyles({
      root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });

    if (this.props.questions.length === 0){

      return ( 
        <>
          <Grid container direction="column" spacing={2} align="center" justify="center" style={{ background: 'linear-gradient(to right bottom, #5ebab0, #6dc4d1, #8ecdea, #b5d4f8, #dadbfe, #e2d9fc, #ebd8f8, #f2d6f4, #e8c9ec, #ddbce4, #d3afdc, #c8a3d4)' }} >
            <Grid item>
                <Typography variant="h2">There are no questions!</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4">Go back to <Link to="/game/generate-quiz">generate a quiz</Link>.</Typography>
            </Grid>
          </Grid>
        </>
      )
    } else if (this.props.questionCounter === this.props.questions.length) {
      return (
        <>
          <Grid container direction="column" spacing={2} align="center" justify="center" style={{ background: 'linear-gradient(to right bottom, #5ebab0, #6dc4d1, #8ecdea, #b5d4f8, #dadbfe, #e2d9fc, #ebd8f8, #f2d6f4, #e8c9ec, #ddbce4, #d3afdc, #c8a3d4)' }} >
              <Grid item>
                <Typography variant="h2">Quiz Finished!</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Go to <Link to="/game/final-score"> final scoreboard</Link></Typography>
              </Grid>
          </Grid>
        </>
      )
    } else {

      const allAnswers = this.getAllAnswers();

      const answersArray = [];
      for (const [index, answer] of allAnswers.entries()){
        answersArray.push(
          <FormControlLabel key={answer} value={answer} control={<Radio />} label={allAnswers[index]} onClick={this.chooseAnswer} />
        )
      }

      return (
        <>
          <Grid container direction="column" spacing={4} align="center" justify="center" style={{ background: 'linear-gradient(to right bottom, #5ebab0, #6dc4d1, #8ecdea, #b5d4f8, #dadbfe, #e2d9fc, #ebd8f8, #f2d6f4, #e8c9ec, #ddbce4, #d3afdc, #c8a3d4)' }} >

          <Grid item>
            <Box width="600px">
                <Typography variant="h5"> {this.parseHtmlEntities(this.props.questions[this.props.questionCounter].question)}</Typography>
            </Box>
          </Grid>
          
          <Grid item>
              <Box width="500px">
                <Card border="single" style={{ backgroundColor: '#E7E6F7' }} >
                  <CardContent>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="answers" name="answers">
                        {answersArray}
                      </RadioGroup>
                    </FormControl>
                  </CardContent>
                </Card>
            </Box>
          </Grid> 

          <Grid item>
              <Box width="500px">
                <Card border="single" style={{ backgroundColor: '#E7E6F7' }} >
                  <CardContent>
                    <Typography>
                      {this.props.previousCorrectAnswer}
                    </Typography>
                  </CardContent>
                </Card>
                <Card border="single" style={{ backgroundColor: '#E7E6F7' }} >
                  <CardContent>
                    <Typography variant="h5">
                      Score:
                    </Typography>
                    <Typography>
                      {this.props.score}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

          </Grid>
        </>
      )
    }
  }
}

export default GameView;