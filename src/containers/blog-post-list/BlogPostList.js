import React from 'react';
import { withStyles } from '@material-ui/styles';

import { BlogPost } from 'components';

import styles from './style';

type Props = {
  classes: Object,
};

const BlogPostList = ({ classes }: Props) => {
  
  return (
    <div className={classes.container}>
      
    </div>
  );
};

export default withStyles(styles)(BlogPostList);
