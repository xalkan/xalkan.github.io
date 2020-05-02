import { FaPython, FaJs, FaCuttlefish } from 'react-icons/fa';
import { FaReact, FaAngular, FaNodeJs, FaGit } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

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

  interests: "microservices, serverless, cloud native, full stack, polyglot, architecture, solving complex problems, continuous learning",

  summary: "here is a summary",

  summarylink: [
    {
      to: 'https://github.com/xalkan/learning-modern-backend-tech',
      text: 'Click here to view my skills details and how I learn',
      Icon: FaLink,
      newTab: true,
    }
  ],

  secondtitle: 'Certificates.',
  secondsubtitle: 'Online Courses Certificates',
  certificates:
  [
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_CloudArchitecture_AdvancedConcepts.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_CloudArchitecture_AdvancedConcepts_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Cloud Architecture Advanced Concepts",
      thumbnailCaption:"Cloud Architecture Advanced"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Kubernetes_CloudNativeEcosystem.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Kubernetes_CloudNativeEcosystem_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Kubernetes Cloud Native Ecosystem",
      thumbnailCaption: "Kubernetes Ecosystem"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Kubernetes_Microservices.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Kubernetes_Microservices_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Kubernetes Microservices",
      thumbnailCaption: "Kubernetes Microservices"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Kubernetes_NativeTools.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Kubernetes_NativeTools_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Kubernetes Native Tools",
      thumbnailCaption: "Kubernetes Native Tools"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_LearningDocker.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_LearningDocker_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Learning Docker",
      thumbnailCaption: "Learning Docker"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_LearningKubernetes.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_LearningKubernetes_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Learning Kubernetes",
      thumbnailCaption: "Learning Kubernetes"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_NodeEssentialTraining.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_NodeEssentialTraining_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "NodeJs Essential Training",
      thumbnailCaption: "NodeJs Essential Training"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_KafkaEssentialTraining.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_KafkaEssentialTraining_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Kafka Essential Training",
      thumbnailCaption: "Kafka Essential Training"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_MicroservicesFoundations.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_MicroservicesFoundations_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Microservices Foundations",
      thumbnailCaption: "Microservices Foundations"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Microservices_AsynchronousMessaging.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Microservices_AsynchronousMessaging_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Microservices Asynchronous Messaging",
      thumbnailCaption: "Microservices Messaging"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_PolyglotWebDevelopment.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_PolyglotWebDevelopment_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Polyglot Web Development",
      thumbnailCaption: "Polyglot Web Development"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Learning NoSQLDatabases.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Learning NoSQLDatabases_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Learning NoSQL Databases",
      thumbnailCaption: "Learning NoSQL Databases"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_ServerlessArchitecture.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_ServerlessArchitecture_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Serverless Architecture",
      thumbnailCaption: "Serverless Architecture"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_LearningJenkins.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_LearningJenkins_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Learning Jenkins",
      thumbnailCaption: "Learning Jenkins"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Node.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_Node_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Node.js Essential Training: Web Servers, Tests, and Deployment",
      thumbnailCaption: "Node.js Essential Training 2"
    },
    {
      src: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_ExpressEssentialTraining.png",
      thumbnail: "https://raw.githubusercontent.com/xalkan/certificates/master/meta/CertificateOfCompletion_ExpressEssentialTraining_thumbnail.png",
      thumbnailWidth: 330,
      thumbnailHeight: 255,
      caption: "Express Essential Training",
      thumbnailCaption: "Express Essential Training"
    },
  ]
};

export default content;
