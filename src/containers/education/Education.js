import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';

import { Animated, LinkList } from 'components';

import University from '../../images/university.jpg'
import content from './content';

const { title, subtitle, links, summary } = content;

const Education = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <br />

    <Grid container justify = "center">
      <img src={University} alt='Comsats University Islamabad, PK' />
    </Grid>

    <Typography variant='p' color='textPrimary'>
      {summary}
    </Typography>
    <LinkList links={links} />
  </>
);

export default Education;
