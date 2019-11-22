import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { LinkList } from 'components';

import content from './content';

const { tagline, title, subtitle, links } = content;

const Welcome = () => (
  <>
    <Typography variant='h3' color='textPrimary'>
      {tagline}
    </Typography>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        {title}
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <LinkList links={links} />
  </>
);

export default Welcome;
