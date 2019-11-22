import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';

import { LinkList, Paragraph } from 'components';

import Workplace from '../../images/workplace.jpg'
import content from './content';

const { title, subtitle, links, summary } = content;

const Experience = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        {title}
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <br />
    
    <Grid container justify = "center">
      <img src={Workplace} alt='Ufone Tower Islamabad, PK' />
    </Grid>
    
    <Paragraph paragraph={summary} />

    <LinkList links={links} />
  </>
);

export default Experience;
