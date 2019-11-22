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
  summary: `After I learnt coding, I studied Software Engineering at <a href="https://www.comsats.edu.pk/" target="_blank">Comsats University.</a>
            It's one of the top universities for engineering in Pakistan. 
            During my time, I worked and played hard, made friends for life, worked with professors on various projects
            and had a memorable experience.
            <br/><br/>
            here
            
            `

};

export default content;
