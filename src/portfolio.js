/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/pythonLogo"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Николай Боряев",
  title: "Всем привет, я Николай",
  subTitle: emoji(
    "Нравится изучать все, от фронтенда до бекенда 🚀 Имею опыт с Java+Spring, приходилось изучить и писать фронтенд на " +
      "React, Angular. Сейчас занимаюсь разработкой бэкенда на Python + Django Rest Framework"
  ),
  resumeLink:
    "https://hh.ru/resume/3635c5dfff098f81690039ed1f674c57354a68", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kolanvs",
  gmail: "kolanvs@gmail.com",
  vk: "https://vk.com/nikkolas",
  telegram: "https://t.me/scpflash",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Что я умею и делаю",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Занимаюсь разработкой энтерпрайз приложения с помощью Python + DRF"
    ),
    emoji("⚡ Знаю и понимаю фронтенд, хотя им не занимаюсь"),
    emoji(
      "⚡ Постоянно развиваюсь и изучаю новое"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django Rest Framework",
      fontAwesomeClassname: "far fa-circle"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "redis",
      fontAwesomeClassname: "far fa-circle"
    },
    {
      skillName: "celery",
      fontAwesomeClassname: "far fa-circle"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React-JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Postgres-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Нижегородский государственный технический университет им. Р.Е. Алексеева",
      logo: require("./assets/images/ngtu.png"),
      subHeader: "Кафедра пркладной математики",
      duration: "Сентябрь 2008 - Июль 2013",
      desc: "Спасибо этому институту:",
      descBullets: [
        "За то, что я получил свои первые серьезные знания тут",
        "За то, что получил тот фундамент, на котором строятся все мои знания сегодня",
        "За хорошие студенческие годы"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python/Django", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java/Spring",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Стажер, инженер-программист",
      company: "ОАО АНПП Темп-Авиа",
      companylogo: require("./assets/images/temp_avia.jpg"),
      date: "Апрель 2012 – Ноябрь 2013",
      desc: "Небольшое предприятие, где я получил первый опыт разработчика",
      descBullets: [
        "Занимался разработкой ПО для систем навигации и автоматического управления",
        "Научился профессионально моргать лампочками на отладочной плате отечественных процессоров на ядре ARM))"
      ]
    },
    {
      role: "Инженер, научный сотрудник",
      company: "ФГУП РФЯЦ-ВНИИЭФ",
      companylogo: require("./assets/images/vniief.png"),
      date: "Декабрь 2013 – Май 2022",
      desc: "Занимался укреплением ядерного щита России",
      descBullets: [
        "Занимался расчетами тепла, газо- и гидродинамики",
        "Затем с мая 2021 года занимался разработкой СУПЖЦ. Пришлось изучить JS+React, Java+Spring, PHP"
      ]
    },
    {
      role: "Разработчик",
      company: "Гринатом",
      companylogo: require("./assets/images/greenatom.png"),
      date: "Май 2022 – настоящее время",
      desc: "Место, где я научился, и учусь до сих пор нормальной разработке",
      descBullets: [
        "Начинал как фулл-стек, сейчас занимаюсь чисто бэкенд-разработкой",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Большие проекты",
  subtitle: "Некоторые большие проекты, которые я делал и делаю",
  projects: [
    {
      image: require("./assets/images/feo.jpg"),
      projectName: "ФГИС ОПВК",
      projectDesc: "Занимаюсь поддержкой и развитием федеральной государственной системы по работе" +
          " с отходами 1 и 2 класса опасности",
      footerLink: [
        {
          name: "ФГИС ОПВК",
          url: "https://gisopvk.ru/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Свяжись со мной! ☎️"),
  subtitle:
    "Интересно чем я занимаюсь, или хочешь предложить мне работу, звони или пиши в почту или телегу. Чур не спамить)",
  number: "+79307060893",
  email_address: "kolanvs@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
