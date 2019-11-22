import React from 'react';
import { Grid } from '@material-ui/core';

import { withStyles } from '@material-ui/styles';

import styles from './style';

type Props = {
  classes: Object,
  src: Object,
  alt: String,
};

const TopImage = ({ classes, src, alt }: Props) => (
  <Grid className={classes.container} container justify = "center">
      <img src={src} alt={alt} />
   </Grid>
);

export default withStyles(styles)(TopImage);
