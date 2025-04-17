
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  projzom,
  projdoc,
} from '../assets'


// Import  separately
import skillhub from "../assets/company/skillhub.png";
import cuvette from "../assets/company/cuvette.svg"
import bootstrapLogo from "../assets/tech/bootstrapLogo.png"
import cloudinary from "../assets/tech/cloudinary.webp"
import excel from "../assets/tech/excel.png"
import expo from "../assets/tech/expo.png"
import postman from "../assets/tech/postman.png"
import vscode from "../assets/tech/vscode.png"
import github from "../assets/tech/github.jpg"



export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://drive.google.com/file/d/1Zrlb1rYDdeVQ3K_1wiSzfc13uxA1e3yO/view?usp=drive_link ",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },


  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },


  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Bootstrap",
    icon: bootstrapLogo,
  },
  {
    name: "Cloudinary",
    icon: cloudinary,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Expo",
    icon: expo,
  },
  {
    name: "Postman",
    icon: postman,
  },

  {
    name: "VS Code",
    icon: vscode,
  },


];

const experiences = [

  {
    title: "Front-End Developer Internship Trainee",
    company_name: "Cuvette",
    icon: cuvette,
    iconBg: "#383E56",
    date: "Dec 2023 - June 2024",
    points: [
      "Completed 4-month Frontend Web Development Internship Training at Cuvette Tech Pvt. Ltd.",
      "Built real-world frontend projects like e-commerce and food delivery UIs using React.js.",
      "Designed responsive interfaces with TailwindCSS and Bootstrap for web platforms.",
      "Practiced version control and deployments using Git, Postman, and Vercel."
    ]

  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Skillhub IT Solutions",
    icon: skillhub,
    iconBg: "#FFFFFF",
    date: "June 2024 - present",
    points: [
      "Developing and maintaining full-stack web and mobile applications using React.js, React Native, Node.js, Express, and MongoDB.",
      "Collaborating on real-world projects like e-commerce and food delivery platforms with cross-functional teams to ensure functional and intuitive solutions.",
      "Implementing responsive UIs using TailwindCSS and Bootstrap, and ensuring cross-platform compatibility across web and mobile.",
      "Working with tools like Git, Postman, and Vercel while participating in project-based code reviews and continuous improvement."

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Farhan proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Farhan does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Farhan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Shop Ease",
    description:
      "Shop Ease is a full-stack e-commerce app with secure JWT auth, protected routes, file uploads via Multer, Cloudinary integration, form validation using Formik & Yup, and state management with Redux Toolkit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "purple-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Farhan22798/ShopeEase",
    live_link: "https://shopeease.onrender.com/",
  },

  {
    name: "DineDash",
    description:
      "DineDash is a full-stack food delivery platform with a React Native customer & rider app, and a web-based admin panel. It features JWT auth, real-time tracking, file uploads, email notifications, and smooth UX with Formik, Yup, and RN Paper.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "purple-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: projzom, // 
    source_code_link: "https://github.com/Farhan22798/zomato",
    live_link: "https://zomato-2zr3.onrender.com/",
  },
  {
    name: "Doc-Connect",
    description:
      "Doc-Connect is a full-stack web and mobile app for booking doctor appointments. Patients can search and book doctors, manage medical history, while doctors efficiently handle their schedules.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: projdoc,
    source_code_link: "https://github.com/Farhan22798/doc-connect", // replace with actual link
    live_link: "https://doc-connect-7tm9.onrender.com/",

  }


];

export { services, technologies, experiences, testimonials, projects };
