import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const content = {
  title: 'About.',
  subtitle: 'Find out more on Github',
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
  summary: `I'm an astute software engineer with lifelong learning interests. 
            I'm fairly strong-willed when it comes to solving complex engineering problems. 
            My belief lies in quick result oriented learning and I am always eager to find patterns in what I do. 
            I have a pleasant and easy going personality with the right mix of witty sense of humor. 
            My specialties include quickly learning new skills and programming languages, showing extreme perseverance 
            in problem solving, getting the job done within constraints and getting along with people while doing so. 
            So far I've worked in the C++, Python and Javascript ecosystem. I would consider myself battle hardened after 
            working with complex systems and complex problems that would stay with me for days. So, I can safely say that 
            I can "live with problems" without burning out until they get resolved. It resonates with my core belief in 
            "You can't defeat a person who never gives up".
            </br></br>
            In my free time, I love to learn and work with:</br>
              - Full Stack dev with Python and JavaScript (Django, React, GraphQL)</br>
              - Machine Learning projects (Python Tensorflow)</br>
              - Cloud Native dev (Docker, Kubernetes)</br>
            `

};

export default content;
