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
    const regexPokeE = /(&eacute;)/g
    
    let str1 = str.replace(regexApo, "'");
    let str2 = str1.replace(regexLt, "<");
    let str3 = str2.replace(regexGt, ">");
    let str4 = str3.replace(regexQuot, "\"");
    let str5 = str4.replace(regexAmp, "&");
    let str6 = str5.replace(regexAmp, "é");
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
          <Grid container direction="column" spacing={2} align="center" justify="center" style={{ backgroundColor: '#FAEDCA' }} >
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
          <Grid container direction="column" spacing={2} align="center" justify="center" style={{ backgroundColor: '#FAEDCA' }} >
              <Grid item>
                <Typography variant="h2">Quiz Finished!</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">Go to <Link to="/game/final-score"> final scoreboard</Link>.</Typography>
              </Grid>
          </Grid>
        </>
      )
    } else {

      const allAnswers = this.getAllAnswers();

      const answersArray = [];
      for (const [index, answer] of allAnswers.entries()){
        answersArray.push(
          <FormControlLabel value={answer} control={<Radio />} label={allAnswers[index]} onClick={this.chooseAnswer} />
        )
      }

      return (
        <>
          <Grid container direction="column" spacing={4} align="center" justify="center" style={{ backgroundColor: '#FAEDCA' }} >

          <Grid item>
            <Box width="600px">
                <Typography variant="h5"> {this.parseHtmlEntities(this.props.questions[this.props.questionCounter].question)}</Typography>
            </Box>
          </Grid>
          
          <Grid item>
            <Box width="500px" p={4} style={{ backgroundColor: '#FEF9D7' }}>
              <FormControl component="fieldset">
                <RadioGroup aria-label="answers" name="answers">
                  {answersArray}
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid> 

          <Grid item>
              <Box width="300px">
                <Card style={{ backgroundColor: '#FFFCDA' }} >
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