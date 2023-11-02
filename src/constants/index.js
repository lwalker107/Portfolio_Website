import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    youtube,
    googlesearch,
    socialmedia,
    employee_management,
    passwordgenerator,
    weatherapp,
    github,
    youtubeicon,
    linkedIn,
    resume,
    landen_resume_v3,
    jobit,
    tripguide,
    threejs,
    homepage_screenshot,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "resume",
      title: "Resume"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const footerLinks = [
    {
      id: "github",
      icon: github,
      url: "https://github.com/lwalker107",
    },
    {
      id: "linkedIn",
      icon: linkedIn,
      url: "www.linkedin.com/in/landen-walker",
    },
    {
      id: "youtube",
      icon: youtubeicon,
      url: "https://www.youtube.com/channel/UCP-Hn2OqbT5GzeIjZIBGheQ",
    },
  ];
  
  const services = [
    {
      title: "FullStack Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "Developed a clone of the popular website Youtube using React framework that incorporates Youtube's API to grab videos, allows the user to search for related videos, visit profiles and play videos.",
      tags: [
        {
          name: "FrontEnd",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/lwalker107/Landen_Youtube_Clone",
      deployed: "",
    },
    {
      name: "Google Book Search",
      description:
        "Google Search Application for books using GraphQL apis",
      tags: [
        {
          name: "Fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "GraphQL",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: googlesearch,
      source_code_link: "https://github.com/lwalker107/Landen_GraphQL",
      deployed: "https://landen-google-search-books-d994617ca65f.herokuapp.com/",
    },
    {
      name: "Social Media API",
      description:
        "Backend for Social Media site using MongoDB, Express and Mongoose that allows users to use the different API routes to get information on all the users/thoughts, information on a single user/thought and create/update/delete users/thoughts. You are also able to create/delete new friends for each user and new reactions for each thought.",
      tags: [
        {
          name: "Backend",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: socialmedia,
      source_code_link: "https://github.com/lwalker107/Landen_Social_Media_API",
      deployed: "",
    },
    {
      name: "Employee Management System",
      description:
        "A management system created to handle databases containing departments, employees and roles. By using mySQL for the databases and using Nodejs and Inquirer for the backend, the user is able to view, add, delete and update the 3 databases however they want.",
      tags: [
        {
          name: "Backend",
          color: "blue-text-gradient",
        },
        {
          name: "Inquirer",
          color: "green-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
      ],
      image: employee_management,
      source_code_link: "https://github.com/lwalker107/Landen_Employee_Manager#screenshot",
      deployed: "https://drive.google.com/file/d/1RqK-ZU_w13MFK6ILvQILrRfuzzgkoifP/view",
    },
    {
      name: "Promptopolis",
      description:
      "Prompt application that allows users to use their gmail accounts to log in and create prompts that can be later used for AI applications such as ChatGPT. The user is able to create, edit and delete prompts and share these prompts with other users and create tags for each prompt so that it is easier to search for.",
      tags: [
        {
          name: "Fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "NextJS",
          color: "pink-text-gradient",
        },
      ],
      image: homepage_screenshot,
      source_code_link: "https://github.com/lwalker107/share_prompts",
      deployed: "https://share-prompts-4jbicxdk0-landen-walkers-projects.vercel.app/",
    },
    {
      name: "Weather Dashboard App",
      description:
      "Weather Application that uses 3rd Party API Openweather to get real-time data for whatever city the user inputs into the search bar. Data includes temperature, wind speed, humidity, date, name and an icon that represents the weather. Uses localStorage to keep the data from previous searches persistent on the web app and includes a clear button to clear the local storage also.",
      tags: [
        {
          name: "FrontEnd",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/lwalker107/Weather-API-Landen",
      deployed: "https://lwalker107.github.io/Weather-API-Landen/",
    },
  ];

  const my_resume = [
    {
      name: "Resume",
      image: resume,
      download: landen_resume_v3,
    }
  ]
  
  export { footerLinks, services, technologies, experiences, testimonials, projects, my_resume };