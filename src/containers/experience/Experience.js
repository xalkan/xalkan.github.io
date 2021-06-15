import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { LinkList, Paragraph, TopImage } from 'components';

import Workplace from '../../images/workplace.jpg';
import content from './content';

const { title, subtitle, links, experiences } = content;

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

    <TopImage src={Workplace} alt='Ufone Tower Islamabad, PK' />

    {experiences.map(({ company, timeline, summary }, i) => (
      <div>
        <Typography variant='h2' color='textPrimary'>
          {company}
        </Typography>

        <Typography variant='h3' color='textPrimary'>
          {timeline}
        </Typography>

        <br />
        <Paragraph paragraph={summary} />

        <br />
        <br />
      </div>
    ))}

    <LinkList links={links} />
  </>
);

export default Experience;
