import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList, Paragraph } from 'components';

import content from './content';

const { title, subtitle, languagelinks, frameworkslinks, databaseslinks, toolslinks, summary } = content;
const { secondtitle, secondsubtitle} = content;

const Skills = () => (
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
    <Paragraph paragraph={summary} />

    <LinkList links={languagelinks} />
    <LinkList links={frameworkslinks} />
    <LinkList links={databaseslinks} />
    <LinkList links={toolslinks} />

    <br /><br /><br /><br />
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{secondtitle}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {secondsubtitle}
    </Typography>
    <br />

  </>
);

export default Skills;
