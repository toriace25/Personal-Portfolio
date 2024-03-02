import ExperienceSection from "@/app/ui/(overview)/experience/experience-section";
import Section from "@/app/ui/(overview)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

const ExperiencePage = () => {
  return (
    <Section sectionTitle="Experience">
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-16">
        <ExperienceSection
          jobTitle="Software Engineer I"
          company="Biomeme, Inc."
          dateStarted="June 2022"
          dateEnded="December 2023"
          descriptionList={[
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
          ]}
        />
        <ExperienceSection
          jobTitle="Software Developer Intern"
          company="Rowan University"
          dateStarted="January 2020"
          dateEnded="January 2021"
          descriptionList={[
            "Internship with Bristol Myers Squibb",
            "Designed algorithms for 2D peak picking and artifact control",
            "Created a GUI that shows a 3D and 2D visualization of LCMS data",
            "Technologies: Python, Mayavi, PyCharm, GitLab",
          ]}
        />
        <ExperienceSection
          jobTitle="Learning Assistant"
          company="Rowan University"
          dateStarted="September 2018"
          dateEnded="April 2020"
          descriptionList={[
            "Helped beginner-level CS students with classwork and labs written in Java",
            "Encouraged students to think through the problem without giving them the answer",
            "Technologies: Java, BlueJ",
          ]}
        />
      </div>
    </Section>
  );
};

export default ExperiencePage;
