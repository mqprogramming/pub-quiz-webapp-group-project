import { withRouter } from 'react-router'
import React, { Component } from 'react';
import {Typography, Button, Grid, TextField} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ParticlesBg from "particles-bg";

class MainMenu extends Component {
  
  constructor(props){
    super(props);

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleUserNameChange(event){
    this.props.changeUserName(event.target.value);
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

    return(
      <React.Fragment>
        <Grid container direction="column" spacing={5} align="center" justify="center">

          <Grid item>
              <Typography variant="h3">Pub Quiz Game</Typography>
          </Grid>

          <Grid item> 
            <form>
              <TextField onChange={this.handleUserNameChange.bind(this)} type="text" placeholder="Enter your name" inputProps={{ style: {textAlign: 'center'} }} />
            </form>
          </Grid>

          <Grid item>
            <Link to="/game/generate-quiz">
                <GradientButton>Start Game</GradientButton>
            </Link>
          </Grid>

        </Grid>
        <ParticlesBg type="polygon" bg={true}/>
      </React.Fragment>
    )
  }    
}

export default withRouter(MainMenu);