import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const content = {
  title: 'Experience.',
  subtitle: 'Working as a full time software engineer for 4 years',
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
  experiences: [
    {
      company: 'EMPG LABS',
      timeline: 'Jun 2020 - Present',
      summary: `Moving to the full stack side, I joined 
                <a href="https://www.crunchbase.com/organization/emerging-markets-property-group-empg" target="_blank">Empg labs</a>
                as a full stack engineer. Empg Labs is the tech company
                behind Zameen, one of the first unicorns in Pakistan.<br /><br />

                Within months, I was promoted to the senior level.<br />
                I worked on various products, handling frontend, backend, databases, design & architecture and devops.<br />
                As a senior engineer, I started a new product from scratch and delivered the first MVP shortly.<br />

                Responsibilites:
                <ul>
                  <li>Work on a suite of products to support the hyper-growth of company’s businesses in 8 countries.</li>
                  <li>Develop features for various full stack apps using typescript, node express, angular and MySQL.</li>
                  <li>Do test driven development using Jest, Mocha chai and Jasmine.</li>
                  <li>Work with tools such as Docker, CircleCI, Redis, Amazon Web Services EC2/ECR/ECS/S3.</li>
                  <li>Work with distributed teams in Romania and Pakistan.</li>
                </ul>

                Achievements:
                <ul>
                  <li>Promoted to senior software engineer.</li>
                  <li>Rapid learning of new tech stack to thrive in a fast paced and distributed team of 20 engineers.</li>
                  <li>Built a Saas product for property sales and customer management using modern typescript web stack with TDD 
                      (Jest, Jasmine) and CI/CD (CircleCI, Docker, AWS).</li>
                </ul>

                To summarize, my work was related to full stack javascript and typescript.<br /><br />
                Javascript, Typescript  <br />
                Angular, Node, Express  <br />
                Jest, Sequelize, Prisma <br />
                Docker, CircleCI        <br />
                PostgreSQL, Amazon AWS  <br />
                `,
    },
    {
      company: `LMKR`,
      timeline: 'Jul 2017 - Jun 2020',
      summary: `After graduating with my software engineering degree, I worked at 
                <a href="https://www.lmkr.com/company/" target="_blank">Landmark Resources (LMKR)</a>
                as a Software Engineer. My work was related to the core C++ side of LMKR's GeoGraphix suite of products.
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
                In my free time, I used to learn and work with the following tech:
                <ul>
                  <li>Full Stack dev using Python Django, React and GraphQL</li>
                  <li>Machine Learning projects using Python</li>
                  <li>Cloud Native dev with Docker, Kubernetes</li>
                </ul>
                `,
    },
    {
      company: `UPWORK`,
      timeline: `Dec 2010 - Aug 2012`,
      summary: `During my highschool, I learned to code with help from the internet and started working with HTML, 
                CSS and jQuery. <br />
                I started creating websites and quickly became a freelance web developer.
                At that time, responsive web design was the new thing, so I moved websites to responsive design.<br /><br />
                Before going for my engineering degree, I completed 14 projects with excellent feedback from my 
                clients from different countries.`,
    },
  ],
};

export default content;
