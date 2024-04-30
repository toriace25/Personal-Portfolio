import {
  DateRangeResource,
  NameLocationResource,
  ProjectResource,
} from "@/app/lib/definitions";

/* -------------- NAME LOCATION RESOURCES -------------- */
export const ROWAN_UNIVERSITY: NameLocationResource = {
  name: "Rowan University",
  location: "Glassboro, NJ",
};

export const BIOMEME: NameLocationResource = {
  name: "Biomeme, Inc.",
  location: "Philadelphia, PA",
};

/* -------------- DATE RANGE RESOURCES -------------- */
export const MASTERS_DATE_RANGE: DateRangeResource = {
  start: "September 2021",
  end: "May 2022",
};

export const BACHELORS_DATE_RANGE: DateRangeResource = {
  start: "September 2017",
  end: "May 2021",
};

export const BIOMEME_DATE_RANGE: DateRangeResource = {
  start: "June 2022",
  end: "December 2023",
};

export const ROWAN_INTERNSHIP_DATE_RANGE: DateRangeResource = {
  start: "January 2020",
  end: "January 2021",
};

export const ROWAN_LEARNING_ASSISTANT_DATE_RANGE: DateRangeResource = {
  start: "September 2018",
  end: "April 2020",
};

/* -------------- LISTS -------------- */
export const MASTERS_COURSE_LIST = [
  "Computer Networks",
  "Advanced Web Programming",
  "Advanced Cyber Security: Principles and Applications",
  "Natural Language Processing",
  "Advanced Theory of Computing",
  "Computer Animation",
  "Advanced Design and Analysis of Algorithms",
  "Advanced Robotics",
  "Concepts in AI",
  "Computer Vision",
];

export const BACHELORS_COURSE_LIST = [
  "Object-Oriented Design and Data Abstraction",
  "Data Structures and Algorithms",
  "Design and Analysis of Algorithms",
  "Database Systems: Theory and Programming",
  "Software Engineering",
  "Computer Lab Techniques",
  "Programming Languages",
  "Foundations of Computer Science",
  "Probability and Statistics for Computational Systems",
  "Operating Systems",
  "Intro Cyber Security: Principles and Applications",
  "Computer Organization",
  "Intro Game Design and Development",
];

export const BIOMEME_DESCRIPTION_LIST = [
  "Contributed to the planning and development of three major cloud-based projects",
  "Completed an individual project for Customer Success in Python that enabled the team to convert FreshDesk data into data compatible with HubSpot, reducing their workload significantly",
  "Contributed to the development of a new Android app using React Native that interacted with AWS services such as S3, Cognito, and CloudFront",
  "Worked on several progressive web applications using React and TypeScript",
  "Major contributor to the development of a cloud-based solution to assist in patient scheduling to increase our coordinators' efficiency and minimize mistakes",
  "Translated Figma designs into pixel-perfect React and React Native components",
  "Assisted with analyzing and processing molecular data for machine learning development",
  "Contributed to the creation of API endpoints and backend development in C#",
  "Wrote unit and integration tests with 100% coverage using Jest and Cypress",
  "Reviewed PRs daily, leaving detailed comments on typos, bugs, and improvements",
  "Technologies: TypeScript, React, React Native, Redux, Jest, Cypress, CircleCI, Python, C#, Bitbucket, Figma, Storybook, AWS, Docker, Vite, JIRA",
];

export const ROWAN_INTERNSHIP_DESCRIPTION_LIST = [
  "Internship with Bristol Myers Squibb",
  "Designed algorithms for 2D peak picking and artifact control",
  "Created a GUI that shows a 3D and 2D visualization of LCMS data",
  "Technologies: Python, Mayavi, PyCharm, GitLab",
];

export const ROWAN_LEARNING_ASSISTANT_DESCRIPTION_LIST = [
  "Helped beginner-level CS students with classwork and labs written in Java",
  "Encouraged students to think through the problem without giving them the answer",
  "Technologies: Java, BlueJ",
];

export const LANGUAGES_LIST = [
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "SQL",
  "HTML",
  "CSS/SCSS",
  "C#",
];

export const FRAMEWORKS_LIST = [
  "React",
  "React Native",
  "Next.js",
  "Jest",
  "Cypress",
  "Storybook",
];

export const TOOLS_LIST = [
  "Git",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "VS Code",
  "Visual Studio",
  "PyCharm",
  "IntelliJ",
  "Eclipse",
  "Docker",
  "AWS",
  "Redux DevTools",
  "React Developer Tools",
  "Figma",
  "CircleCI",
];

export const LIBRARIES_LIST = [
  "Redux Toolkit",
  "React Testing Library",
  "React Navigation",
  "React Native Reanimated",
  "ESLint",
  "Prettier",
  "Tailwind",
  "Bootstrap",
];

/* -------------- PROJECT RESOURCES -------------- */
export const NBA_PREDICTOR: ProjectResource = {
  name: "NBA Game Outcome Predictor",
  description:
    "Predict the results of NBA games based on past team statistics and results.",
  sourceCodeLink: "https://github.com/toriace25/NBA-Game-Outcome-Predictor",
  imageSrc: "/static/images/nba-logo_2x.png",
  imageAlt: "NBA logo",
};

export const SEINFELD_MBTI_PREDICTOR: ProjectResource = {
  name: "Seinfeld Myers-Briggs Predictor",
  description:
    "Predict the Myers-Briggs personality type of 22 Seinfeld characters.",
  sourceCodeLink:
    "https://github.com/toriace25/Seinfeld-Myers-Briggs-Predictor",
  imageSrc: "/static/images/myers-briggs.webp",
  imageAlt: "Myers Briggs icon",
};

export const MORSE_CODE_ROBOT: ProjectResource = {
  name: "Morse Code Robot",
  description:
    "A LEGO robot implementation that can follow a light source and read/translate morse code.",
  sourceCodeLink: "https://github.com/toriace25/morse-code-robot",
  imageSrc: "/static/images/morse-code.svg",
  imageAlt: "Morse code symbol",
};

export const CARPEDIA: ProjectResource = {
  name: "Carpedia",
  description:
    "A website that allows users to find information on specific vehicles and save them for later use.",
  sourceCodeLink: "https://github.com/toriace25/Carpedia",
  imageSrc: "/static/images/car.png",
  imageAlt: "Cartoon car",
};

export const FACE_DETECTION: ProjectResource = {
  name: "Face Detection",
  description:
    "A simple webpage that is able to detect faces through webcam input.",
  sourceCodeLink: "https://github.com/toriace25/Face-Detection",
  imageSrc: "/static/images/face-detection.png",
  imageAlt: "Face detection icon",
};

/* -------------- OTHER -------------- */
export const MAJOR = "Computer Science";
