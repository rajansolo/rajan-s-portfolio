import {
  meta,
  shopify,
  starbucks,
  tesla,
  citizen,
  cmpa,
  fiverr,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Web Specialist Co-op",
    company_name: "CMPA",
    icon: cmpa,
    iconBg: "#accbe1",
    date: "Sep 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Front-End Developer",
    company_name: "Citizen Infotech Nepal",
    icon: citizen,
    iconBg: "#fbc3bc",
    date: "August 2021 - August 2022",
    points: [
      "Designed and developed a web-based Card Management System using React, TypeScript, and Sass, reducing ID issuance time by 50% and improving management efficiency by 30% for municipalities serving vulnerable citizen groups",
      "Collaborated with UX/UI designers and back-end developers to build robust, scalable solutions that meet user requirements",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Demonstrated an understanding of the Software Development Life Cycle and Quality Assurance Concept, and applied these skills to responsive design, develop, and deploy multiple website and mobile applications",
    ],
  },

  {
    title: "Web Developer Frelancer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#b7e4c7",
    date: "Jan 2021 - Current",
    points: [
      "Developed end-to-end web applications using MERN stack (MongoDB, Express, React, Node.js), resulting in seamless user experiences and efficient backend processing.",
      "Collaborated with clients to gather requirements, design UI/UX, and deliver custom web solutions, leading to a 30% increase in client satisfaction and repeat business.",
      "Integrated RESTful APIs and third-party services into applications, enhancing functionality and improving data flow between frontend and backend components.",
      "Optimized application performance through code refactoring, database indexing, and implementing caching strategies, reducing load times by up to 40%.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "MyCMPA - A Web Application for CMPA Employee's",
    description:
      "At CMPA, I developed and maintained responsive webpages using React.js and SCSS, managed continuous deployment with Jenkins and Azure, and ensured cross-browser compatibility with BrowserStack. I also handled content management with Crafter CMS and Sugar CRM, adhered to WCAG 2.0 standards, and collaborated effectively in Agile sprints.",
    link: "https://www.cmpa-acpm.ca/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Job Channelized Learning",
    description:
      "A course recommendation system that uses AI and user profiling to personalize learning paths, aligning education with career goals and job requirements. It enhances employability by tailoring course suggestions to individual skills and ambitions",
    link: "https://github.com/rajansolo/JobChannelizedLearning",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "World of Robbie 2D platformer",
    description:
      "World of Robbie: 2D platformer is video game genre and subgenre of action games in which the core objective is to move the player character between points in a rendered environment. Platform games are characterized by their level design featuring uneven terrain and suspended platforms of varying height that requires use of the player character's abilities, such as jumping and climbing, to navigate the player's environment and reach their goal. Other acrobatic maneuvers may factor into the gameplay as well, such as swinging from objects such as vines or grappling hooks, jumping off walls, air dashing, gliding through the air",
    link: "https://github.com/rajansolo/World-of-Robbie-2D-platformer",
  },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
