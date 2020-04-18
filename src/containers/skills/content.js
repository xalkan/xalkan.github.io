import { FaPython, FaJs, FaCuttlefish } from 'react-icons/fa';
import { FaReact, FaAngular, FaNodeJs, FaGit } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

import { FaDocker, FaDharmachakra } from 'react-icons/fa';

const content = {
  title: 'Skills.',
  subtitle: 'The more I learn, the more I realize, the less I know',
  languagelinks: [
    {
      to: 'https://github.com/xalkan?tab=repositories&q=&type=&language=javascript',
      text: 'Javascript',
      Icon: FaJs,
      newTab: true,
    },
    {
      to: 'https://github.com/xalkan?tab=repositories&q=&type=&language=typescript',
      text: 'Typescript',
      Icon: FaJs,
      newTab: true,
    },
    {
      to: 'https://github.com/xalkan?tab=repositories&q=&type=&language=python',
      text: 'Python',
      Icon: FaPython,
      newTab: true,
    },
    {
      to: 'http://localhost:8000/experience/',
      text: 'C++',
      Icon: FaCuttlefish,
      newTab: true,
    },
  ],

  frameworkslinks: [
    {
      to: 'https://github.com/search?q=user%3Axalkan+react',
      text: 'React',
      Icon: FaReact,
      newTab: true,
    },
    {
      to: 'https://github.com/search?q=user%3Axalkan+angular',
      text: 'Angular',
      Icon: FaAngular,
      newTab: true,
    },
    {
      to: 'https://github.com/search?q=user%3Axalkan+node&type=Repositories',
      text: 'NodeJS',
      Icon: FaNodeJs,
      newTab: true,
    },
    {
      to: 'https://github.com/xalkan',
      text: 'Git',
      Icon: FaGit,
      newTab: true,
    },
  ],

  databaseslinks: [
    {
      to: 'https://github.com/search?q=user%3Axalkan+mongodb&type=Repositories',
      text: 'MongoDB',
      Icon: FaDatabase,
      newTab: true,
    },
    {
      to: 'https://github.com/search?q=user%3Axalkan+angular',
      text: 'MySQL',
      Icon: FaDatabase,
      newTab: true,
    }
  ],

  toolslinks: [
    {
      to: 'https://github.com/xalkan?tab=repositories&q=&type=&language=javascript',
      text: 'Docker',
      Icon: FaDocker,
      newTab: true,
    },
    {
      to: 'https://github.com/xalkan?tab=repositories&q=&type=&language=typescript',
      text: 'Kubernetes',
      Icon: FaDharmachakra,
      newTab: true,
    },
  ],

  summary: `
            `
  ,

  secondtitle: 'Certificates.',
  secondsubtitle: 'Online Courses Certificates',

};

export default content;
