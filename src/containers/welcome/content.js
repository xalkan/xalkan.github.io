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
  summary: `I'm an astute full stack software engineer who's fairly strong-willed and eager to solve challenging engineering
            problems & deliver value. I show extreme perseverance in getting the job done and get along with people while 
            doing so. I have an easy going personality with a hint of witty humor.
            `,
};

export default content;
