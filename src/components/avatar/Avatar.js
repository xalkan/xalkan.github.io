import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import styles from './style';
import content from './content';

const { title } = content;

type Props = {
  classes: Object,
};

const Avatar = ({ classes }: Props) => (
  <div className={classes.container}>
    <Typography variant='h5' color='textPrimary'>
      {title}
    </Typography>
  </div>
);

export default withStyles(styles)(Avatar);
