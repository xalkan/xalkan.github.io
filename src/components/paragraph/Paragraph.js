import { Link } from 'gatsby';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/styles';

import styles from './style';

type Props = {
  classes: Object,
  paragraph: String,
};

const Paragraph = ({ classes, paragraph }: Props) => (
  <Typography paragraph='true' variant='body1' color='textPrimary' dangerouslySetInnerHTML={{__html: paragraph}}>
  </Typography>
);

export default withStyles(styles)(Paragraph);
