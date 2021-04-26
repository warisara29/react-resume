/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Warisara",
  logo_name: "Warisara.P",
  nickname: "harry / picleric",
  full_name: "Warisara Pilasuk",
  subTitle:
    "Fresh graduate student, Interesting in web application development and " +
    "ready to learn mobile application development or another software development. " +
    "Always learning.",
  resumeLink: "https://www.canva.com/design/DAEcRKIrxSo/1frvLjvtn7m5YscTATZapQ/view?utm_content=DAEcRKIrxSo&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
  mail: "mailto:warisarap225@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/warisara29",
  gmail: "warisarap225@gmail.com",
  facebook: "https://www.facebook.com/devil.engel29",
};

const skills = {
  data: [
    {
      title: "",
      fileName: "FullStackImg",
      skills: [
        " 🖊 Develop interactive Front end / User Interfaces for web applications",
        " 🖊 Building responsive website front end using ReactJS and Django Framework",
        " 🖊 Basic developing mobile applications using Android (Kotlin)",
        " 🖊 Creating application backend in Node, Express, and Python",
        " 🖊 Integration of third party services such as Firebase",
        " 🖊 Experience hosting websites by using Heroku and Firebase",
        " 🖊 Basic using Docker",
        " 🖊 Experience with GitHub",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFA500",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#008000",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Khon Kaen University, Thailand",
      subtitle: "bachelor degree in Computer Engineering",
      logo_path: "ssgandhy.png",
      alt_name: "EN KKU",
      duration: "2017 - 2021",
      descriptions: [
        "😃 I have studied core subjects like Data Structures and Algorithms, Database Systems, Computer Network, Software Enginnering, etc.",
        "😃 I have also completed various courses for Web Application Development, Human and Computer Interaction, Computational Fianance, etc.",
        "😃 I have implemented several projects based on what I've learnt under my Computer Engineering degree. ",
      ],
      website_link: "https://gear.kku.ac.th/?lang=en",
    },
  ],
};

//Experience Page
const experience = {
  title: "Experience",
  description:
    "I've completed one internship. I've mostly done projects on my own.",
  header_image_path: "experience.svg",
  title: "Work Experience",
  experiences: [
   
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects and Experience",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "0",
      name: "EN Heathy and Happy",
      url: "https://arcane-peak-04089.herokuapp.com/",
      description: "A Web application for automating save running distance of runners in KKU by detecting images that uploaded",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Node.js",
          iconifyClass: "simple-icons:node-dot-js",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      id: "1",
      name: "SE Budget Management",
      url: "https://drive.google.com/file/d/1Zy-B2QMaBw52hApBOzTtPPISwFk8tiIS/view?usp=sharing",
      description:
        "A web application for manage budget in EN KKU.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Node.js",
          iconifyClass: "simple-icons:node-dot-js",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      id: "2",
      name: "TUGTORR",
      url: "https://warisara29.github.io/TUGTORR_Deploy_Version/",
      description:
        "A UI website to representing the idea of our team in Startup Thailand League KKU2020 (Summer Internship).",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Node.js",
          iconifyClass: "simple-icons:node-dot-js",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      id: "3",
      name: "Electrical Problem Analysis System of Seagate Technology (Thailand)Ltd.",
      url: "https://drive.google.com/file/d/1Vpep64tOn_uRdS3_NecDhtF9l8wMVUeL/view?usp=sharing",
      description:
        "A web application for analyzing electrical problems of Seagate Technology (Thailand), Ltd to be an automatic system.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Docker",
          iconifyClass: "logos-docker",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  projects,
};
