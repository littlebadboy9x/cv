import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Trần Việt Vương",
  initials: "TVV",
  location: "Minh Khai, Bac Tu Liem, Hanoi, Vietnam",
  locationLink: "https://maps.app.goo.gl/MgZaWcXKQFX5R7bS7",
  about:
    "Back-End Developer Engineer focused on building products with extra attention to detail",
  summary:
    "Detail-oriented and enthusiastic Back-End Developer with a strong passion for building robust web applications. Currently pursuing a degree in Software Applications at FPT Polytechnic. Possesses solid foundation in full-stack web development technologies, including Java Spring framework, RESTful APIs, and modern frontend frameworks. Proactive and eager to contribute to innovative web development projects while continuously expanding technical skills.",
  avatarUrl: "https://i.imgur.com/cBxU1V5.jpeg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "vuongtv1267.dev@gmail.com",
    tel: "+84386602039",
    github: "https://github.com/littlebadboy9x",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/littlebadboy9x",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tran-viet-vuong-238776229/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/vuongtv171",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "FPT Polytechnic",
      degree: "Bachelor's Degree in Software Applications",
      start: "1/2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "School Project Workshop",
      link: "ap.poly.edu.vn",
      badges: ["onsite"],
      title: "Back-End Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Developed new features, proposed innovative solutions, and improved existing functionality for school workshop projects. Gained hands-on experience with Java Spring ecosystem and collaborative development practices.",
    },
  ],
  skills: [
    "Java Spring",
    "Spring Boot",
    "Spring Security", 
    "RESTful API Development",
    "Database Management (Firebase, PostgreSQL, SQL Server)",
    "Frontend Development (React.js)",
    "Docker (Currently studying)",
    "DevOps (Currently studying)",
  ],
  projects: [
    {
      title: "Web Store",
      techStack: [
        "Spring Boot",
        "Spring Security",
        "Spring JPA",
        "Thymeleaf",
        "JavaScript",
        "SQL Server",
        "RESTful API",
      ],
      description: "An e-commerce platform for interior design business with comprehensive product management and customer interaction features.",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/littlebadboy9x/WebStoreX",
        href: "https://github.com/littlebadboy9x/WebStoreX",
      },
    },
    {
      title: "FanTech Electric Fan E-commerce Website",
      techStack: [
        "Spring Boot",
        "Spring Security",
        "Spring JPA",
        "Thymeleaf",
        "JavaScript",
        "SQL Server",
        "RESTful API",
      ],
      description: "A fully featured e-commerce platform for FanTech supporting both online and in-store (POS) sales with unified inventory, order management, customer accounts, and secure payments.",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/anhq792004/websiteFanTech",
        href: "https://github.com/anhq792004/websiteFanTech",
      },
    },
    {
      title: "Shuttle Management System",
      techStack: [
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "RESTful API",
        "SQL Server",
      ],
              description: "A comprehensive badminton court management system with online booking, schedule management, and payment processing capabilities.",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/littlebadboy9x/ShuttleSync.git",
        href: "https://github.com/littlebadboy9x/ShuttleSync.git",
      },
    },
  ],
} as const;
