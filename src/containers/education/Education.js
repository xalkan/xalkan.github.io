import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList } from 'components';

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
    <Typography variant='p' color='textPrimary'>
      {summary}
    </Typography>
    <LinkList links={links} />
  </>
);

export default Education;
