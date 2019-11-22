import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { LinkList, Paragraph, TopImage } from 'components';

import University from '../../images/university.jpg'
import content from './content';

const { title, subtitle, links, summary } = content;

const Education = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        {title}
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>

    <TopImage src={University} alt='Comsats University Islamabad, PK' />

    <Paragraph paragraph={summary} />

    <LinkList links={links} />
  </>
);

export default Education;
