import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { LinkList, Paragraph, TopImage } from 'components';

import Me from '../../images/me.jpg';
import content from './content';

const { tagline, title, subtitle, links, summary } = content;

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

    <br />

    <TopImage src={Me} alt='Me' />

    <br />
    <Paragraph paragraph={summary} />

    <LinkList links={links} />
  </>
);

export default Welcome;
