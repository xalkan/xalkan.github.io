import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated, LinkList, Paragraph } from 'components';

import Gallery from 'react-grid-gallery';

import content from './content';

const { title, subtitle, languagelinks, frameworkslinks, databaseslinks, toolslinks, interests, summary, summarylink } = content;
const { secondtitle, secondsubtitle, certificates } = content;

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
    <Paragraph title='interests' paragraph={interests} />

    <LinkList links={languagelinks} />
    <LinkList links={frameworkslinks} />
    <LinkList links={databaseslinks} />
    <LinkList links={toolslinks} />

    <LinkList links={summarylink} />

    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{secondtitle}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {secondsubtitle}
    </Typography>
    <br />

    {[
      {
        // subtitle: nodejsSubtitle,
        certificates: certificates,
      },
    ].map(item => {
      return (
        <div>
          {/* <Typography variant='h3' color='textPrimary'>
            {item.subtitle}
          </Typography> */}

          <Gallery images={item.certificates} margin='5' />

          <br />
          <br />
          <br />
          <br />
        </div>
      );
    })}
  </>
);

export default Skills;
