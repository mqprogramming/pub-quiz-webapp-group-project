import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const ErrorPage = () => {
  return (
    <>
      <Grid container direction="column" spacing={4} align="center" justify="center" style={{ background: 'linear-gradient(to right bottom, #5ebab0, #6dc4d1, #8ecdea, #b5d4f8, #dadbfe, #e2d9fc, #ebd8f8, #f2d6f4, #e8c9ec, #ddbce4, #d3afdc, #c8a3d4)' }} >

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