import project1 from "../assets/projects/BearHabitC.png";
import project2 from "../assets/projects/UMNDate2.png";
import project3 from "../assets/projects/gbiNLC2.png";
import project4 from "../assets/projects/notion.png";
import project5 from "../assets/projects/orimovie.png";
import sololearn1 from '../assets/certificate/intro.png';
import sololearn2 from '../assets/certificate/inter.png';
import huawei from '../assets/certificate/huawei.png';
import talenthub from '../assets/certificate/talenthub.jpg';
import gemastik from '../assets/certificate/gemastik.jpeg';


export const EXPERIENCES = [
  {
    year: "Feb 2023 - Aug 2023",
    role: "Member of the Security Division",
    company: "OMB UMN 2023",
    description: `Played a key role in managing the security and order of over 1,500 participants during university orientation events. Responsibilities included ensuring smooth operations and maintaining a conducive environment for both in-person and online (via Zoom) activities.`,
  },
  {
    year: "Sep 2022 - June 2023",
    role: "Member of the Campus Photography Extracurricular",
    company: "Obscura Gen-16",
    description: `Actively participated in a photography-focused community, honing skills in creative photography and visual storytelling through various workshops and collaborative projects.`,
  },
];

export const PROJECTS = [
  {
    title: "BearHabit",
    image: project1,
    description:
      "Android habit tracking mobile app made to fulfill the requirements for passing the Mobile Application Programming final exam. The app features habit scheduling, progress tracking, and competitive mode to encourage consistency.",
    technologies: ["Kotlin", "Firebase", "Android Studio"],
    link: 'https://github.com/Teukufazariz/BearHabitApp'
  },
  {
    title: "UMNDate",
    image: project2,
    description:
      "A mobile dating app prototype reserved for UMN students. The app integrates features such as profile matching and community chats, designed with HCI and UX principles to ensure an engaging and user-friendly experience.",
    technologies: ["Figma"],
    link: 'https://shorturl.at/8dT4M'
  },
  {
    title: "GBI NLC Website",
    image: project3,
    description:
      "A profile website for GBI NLC, designed to represent the church’s mission, vision, and activities. The website features sections for service schedules and community programs, made to be responsive.",
    technologies: ["Laravel", "Tailwind CSS", "SQL"],
    link: 'https://gbinlcserpong.site/home'
  },
  {
    title: "NotNot",
    image: project4,
    description:
      "A PHP-based notes-taking application inspired by Notion, made to fulfill the requirements to pass the Web Programming Mid-Term exam.",
    technologies: ["PHP", "Tailwind CSS", "SQL"],
    link: 'https://github.com/Teukufazariz/tugaslab'
  },
  {
    title: "OriMovie",
    image: project5,
    description:
      "A film information website similar to IMDb, providing detailed data on movies, including synopses, cast, reviews, and ratings. Developed to fulfill the requirements for passing the Intro to Internet Technology final exam.",
    technologies: ["React", "Bootstrap"],
    link: 'https://orimovie.netlify.app/'
  },
];


export const CONTACT = {
  address: "Kota Jakarta Timur, DKI Jakarta, 13560",
  phoneNo: "+62 895 3833 12067 ",
  email: "teukufazarizbasya@gmail.com",
};

export const CERTIFICATIONS = [
  {
    title: "Introduction to Python",
    issuer: "Sololearn",
    date: "June 2023",
    credentialLink: "https://www.example.com/certifications/react",
    image: sololearn1, 
  },
  {
    title: "Intermediate Python",
    issuer: "Sololearn",
    date: "May 2022",
    credentialLink: "https://www.example.com/certifications/fullstack",
    image: sololearn2, 
  },
  {
    title: "HCIA AI V3.5 Course",
    issuer: "Huawei",
    date: "May 2022",
    credentialLink: "https://www.example.com/certifications/fullstack",
    image: huawei, 
  },
  {
    title: "Learn To Be UI/UX Designer",
    issuer: "Talenthub, Kemnaker",
    date: "May 2022",
    credentialLink: "https://www.example.com/certifications/fullstack",
    image: talenthub, 
  },
  // {
  //   title: "GEMASTIK Cyber Security",
  //   issuer: "Gemastik",
  //   date: "May 2022",
  //   credentialLink: "https://www.example.com/certifications/fullstack",
  //   image: gemastik, // Tambahkan properti image
  // },
];

export const SKILLS = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "PHP", "Kotlin", "JavaScript", "R"],
  },
  {
    category: "Frontend Development",
    skills: ["Tailwind CSS", "Bootstrap", "React.js"],
  },
  {
    category: "Backend Development",
    skills: ["Laravel"],
  },
  {
    category: "Database",
    skills: ["MySQL", "Firebase"],
  },
  {
    category: "Tools",
    skills: ["Git", "Figma", "WSL", "Jira"],
  },
];