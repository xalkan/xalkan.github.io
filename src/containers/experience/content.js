import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const content = {
  title: 'Experience.',
  subtitle: 'Working as a full time software engineer for ~3 yrs',
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
  summary: 'After graduating, I worked here at <a href="https://www.lmkr.com/" target="_blank">Landmark Resources (LMKR)</a>'

};

export default content;
