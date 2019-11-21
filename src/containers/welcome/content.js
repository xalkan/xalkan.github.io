import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const content = {
  tagline: 'Hello, Nice to meet ya, I am ',
  title: 'Shahid Ali Khan',
  subtitle: 'Software Engineer with ~3 yrs of experience and 4 years degree!',
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
