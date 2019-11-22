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
  summary: `After graduating, I worked here at <a href="https://www.lmkr.com/company/" target="_blank">Landmark Resources (LMKR)</a>
            as a Software Engineer. My work is related to the core C++ side of LMKR's GeoGraphix suite of products.
            <ul>
              <li>Implementing new features in various GeoGraphix applications, platform and architecture.</li>
              <li>Continuously fixing issues and customers' problems to make the apps better.</li>
              <li>Working on the data layers and handling communications between apps and relational databases.</li>
              <li>Working with performance profilers, system tools, memory optimizer and debuggers for improvements.</li>
              <li>Using Visual Studio, VS Code, Team Foundation Server, Git and other tools with bells and whistles.</li>
              <li>Following Agile scrum for everything including daily calls to remote teams in the U.S.</li>
              <li>Being involved in the hiring process, taking technical interviews and training new hires.</li>
            </ul>
            <br />
            In my free time, I love to learn and work with the following:
            <ul>
              <li>Full Stack dev using Python Django, React and GraphQL</li>
              <li>Machine Learning projects using Python</li>
              <li>Cloud Native dev with Docker, Kubernetes</li>
            </ul>
            `

};

export default content;
