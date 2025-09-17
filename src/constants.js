// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import a2it from "./assets/company_logo/A2ITOnline_logo.svg";
import agcLogo from "./assets/company_logo/agc_logo.png";
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import cuLogo from "./assets/education_logo/cuLogo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import educoreHome from "./assets/work_logo/educore.png";
import wanderlustHome from "./assets/work_logo/wanderlust_home.png";
import EventifyHome from "./assets/work_logo/Eventify_home.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import DailyByteHome from "./assets/work_logo/DailyByte_home.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  // {
  //   title: "Languages",
  //   skills: [
  //     { name: "C", logo: cLogo },
  //     { name: "C++", logo: cppLogo },
  //     { name: "Java", logo: javaLogo },
  //     { name: "Python", logo: pythonLogo },
  //     { name: "C-Sharp", logo: csharpLogo },
  //     { name: "JavaScript", logo: javascriptLogo },
  //     { name: "TypeScript", logo: typescriptLogo },
  //   ],
  // },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      // { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: a2it,
    role: "Frontend Developer Intern",
    company: "A2IT, Mohali",
    date: "Jan 2025 - July 2025",
    desc: "Worked under senior developers to implement responsive user interfaces using React.js, contributed to component development and API integration . Collaborated with cross-functional teams to build responsive UI",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      // "TypeScript",
      // "Node JS",
      "Tailwind CSS",
      // "MongoDb",
      "Redux",
      // " Next Js",
    ],
  },
  // {
  //   id: 1,
  //   img: agcLogo,
  //   role: "Fullstack Engineer",
  //   company: "Agumentik Group of Companies",
  //   date: "July 2023 - March 2024",
  //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "HTML",
  //     "CSS",
  //     "SQL",
  //   ],
  // },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  // },
];

export const education = [
  {
    id: 0,
    img: cuLogo,
    school: "Chandigarh University, Mohali",
    date: "Sept 2020 - July 2024",
    grade: "7.81 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science (B.E.) from Chandigarh University, Mohali. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Engineering (B.E. in CSE)",
  },
  // {
  //   id: 1,
  //   img: bsaLogo,
  //   school: "BSA College, Mathura",
  //   date: "Sept 2018 - Aug 2021",
  //   grade: "73.2%",
  //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
  //   degree: "Bachelor of Science - BSC (Computer Science)",
  // },
  // {
  //   id: 2,
  //   img: vpsLogo,
  //   school: "Vatsalya Public School Govardhan, Mathura",
  //   date: "Apr 2017 - March 2018",
  //   grade: "78%",
  //   desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  //   degree: "CBSE(XII) - PCM with Computer Science",
  // },
  // {
  //   id: 3,
  //   img: vpsLogo,
  //   school: "Vatsalya Public School Govardhan, Mathura",
  //   date: "Apr 2015 - March 2016",
  //   grade: "87.5%",
  //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
  //   degree: "CBSE(X), Science with Computer Application",
  // },
];

export const projects = [
  {
    id: 0,
    title: "EduCore - A Learning Management System (LMS)",
    description:
      "EduCore is a full-stack e-learning platform inspired by Udemy, built to connect educators and students in an intuitive and responsive environment. Educators can create courses by adding video content, track total earnings, view enrollments, and manage their student base through a personalized dashboard. Students can browse and search for courses, watch lessons with a built-in video player, mark progress as completed, and share feedback through ratings. Secure authentication is handled with Clerk (Google login), payments are processed via Stripe, and all media is stored seamlessly with Cloudinary. The platform is powered by React, Tailwind CSS, and a Node.js/MongoDB backend, with additional tooling such as Axios, Quill, rc-progress, and react-toastify to enhance user experience. Deployed on Vercel, EduCore demonstrates a scalable, user-friendly foundation for modern online learning.",
    image: educoreHome,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
    ],
    github: "https://github.com/sourabhmenaria07/EduCore",
    webapp: "https://educore-bice.vercel.app/",
  },
  {
    id: 1,
    title: "WanderLust - Travel Accommodation Platform",
    description:
      "WanderLust is an Airbnb-inspired full-stack responsive web app built with Node.js, Express, MongoDB, Bootstrap, and EJS following the MVC pattern. It provides secure authentication and authorization, RESTful APIs for listings and reviews, Joi-based validation, role-based access control, pagination with search, and interactive maps via MapTiler for location display.",
    image: wanderlustHome,
    tags: [
      "JavaScript",
      "EJS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "REST APIs",
    ],
    github: "https://github.com/sourabhmenaria07/WANDERLUST",
    webapp: "https://wanderlust-2cnl.onrender.com/listings",
  },
  {
    id: 2,
    title: "Eventify - Event Management Platform",
    description:
      "Eventify is a full-stack web app built with React, Redux, TailwindCSS, and Appwrite that allows users to create, explore, and manage events. It features secure authentication with email verification and password reset, user dashboards for managing personal events with search, filters, and sorting, a bookmark system for saving favorite events, full CRUD operations with image uploads, and a light/dark theme toggle for enhanced user experience. The platform also includes profile management and responsive, reusable UI components, delivering a smooth and user-friendly event experience.",
    image: EventifyHome,
    tags: [
      "React JS",
      "Appwrite",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
    ],
    github: "https://github.com/sourabhmenaria07/Eventify",
    webapp: "https://github.com/sourabhmenaria07/Eventify",
  },
  {
    id: 3,
    title: "DailyByte - Blog Application",
    description:
      "DailyByte is a React-based blog application with Tailwind CSS and Appwrite integration for authentication and database management. It features full CRUD operations for posts, a rich text editor for content creation, reusable components, form handling with react-hook-form, and state management using Redux Toolkit",
    image: DailyByteHome,
    tags: ["React JS", "Tailwind CSS", "Redux", "React-router", "JavaScript"],
    github: "https://github.com/sourabhmenaria07/mega-blog-app-project",
    webapp: "https://github.com/sourabhmenaria07/mega-blog-app-project",
  },
];
