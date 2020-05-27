import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const ErrorPage = () => {
  return (
    <>
      <Grid container direction="column" spacing={4} align="center" justify="center" style={{ backgroundColor: '#FAEDCA' }} >

        <Grid item>
          <Typography variant="h2">ERROR 404</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4">Sorry, couldn't find this page :(</Typography>
        </Grid>

      </Grid>
    </>
  )
}

export default ErrorPage;