import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const content = {
  tagline: 'Hello, Nice to meet ya, I am ',
  title: 'Shahid Ali Khan',
  subtitle: 'Full Stack Software Engineer with 4 yrs of experience and a software engineering degree!',
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
};

export default content;
