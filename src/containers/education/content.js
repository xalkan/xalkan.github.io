import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const content = {
  title: 'Education.',
  subtitle: 'Got that 4 yrs Bachelors in Software Engineering degree',
  links: [
    {
      to: 'https://github.com/xalkan',
      text: 'Github',
      Icon: FaGithub,
      newTab: true,
    },
    {
      to: 'https://www.linkedin.com/in/shahidalyk/',
      text: 'LinkedIn',
      Icon: FaLinkedin,
      newTab: true,
    },
    {
      to: 'mailto:shahidalyk@gmail.com',
      text: 'Email',
      Icon: FaEnvelope,
      newTab: true,
    },
  ],
  university: `Comsats University`,
  timeline: `Sep 2012 - Jun 2016`,
  summary: `After I learnt coding, I studied Software Engineering at <a href="https://www.timeshighereducation.com/world-university-rankings/comsats-university-islamabad" target="_blank">Comsats University.</a>
            It's one of the top universities for engineering in Pakistan. 
            During my time, I worked and played hard, made friends for life, worked with professors on various projects
            and had a memorable experience.
            <br/><br/>
            Some of my top ranked courses were:
            <ul>
              <li>Algorithms and Data Structures</li>
              <li>Object Oriented Programming</li>
              <li>Database Systems</li>
              <li>Software Design and Architecture</li>
              <li>Distributed Computing</li>
              <li>Scripting Languages</li>
              <li>Entrepeneurship</li>
              <li>French</li>
              <li>Core Software Engineering courses (Project Management, Requirements Engg)</li>
              <li>Maths courses (Calculus, Statistics and Probability, Linear Algebra)</li>
              <li>Capstone Project</li>
            </ul>
            
            `,
};

export default content;
