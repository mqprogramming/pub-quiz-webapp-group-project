import { withRouter } from 'react-router'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

class MainMenu extends Component {
  
  constructor(props){
    super(props);

    this.onUserNameSubmit = this.onUserNameSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  onUserNameSubmit(event){
    event.preventDefault();
    this.props.history.push('/game/generate-quiz')
  }

  handleUserNameChange(event){
    this.props.changeUserName(event.target.value);
  }

  render(){
    return(
      <>
        <Grid container direction="column" spacing={5} align="center" justify="center" style={{ backgroundColor: '#FAEDCA' }} >

        <Grid item>
            <Typography variant="h3">Pub Quiz Main Menu</Typography>
          </Grid>

          <Grid item> 
            <form>
              <TextField onChange={this.handleUserNameChange.bind(this)} type="text" placeholder="Enter your name" />
              <Button onClick={this.onUserNameSubmit.bind(this)} type="button">Save Name</Button> 
            </form>
          </Grid>

          <Grid item>
            <Link to="/game/generate-quiz" style={{ textDecoration: 'none'}}>
                <Button variant="contained" color="primary">Start Game</Button>
            </Link>
          </Grid>


        </Grid>
      </>
    )
  }    
}

export default withRouter(MainMenu);