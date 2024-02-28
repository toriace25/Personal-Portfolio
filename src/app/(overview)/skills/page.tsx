import SectionHeader from "@/app/ui/(overview)/section-header";
import SkillSection from "@/app/ui/(overview)/skills/skill-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

const SkillsPage = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <SectionHeader title="Skills" />
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-16">
        <SkillSection
          sectionTitle="Languages"
          skillsList={[
            "TypeScript",
            "JavaScript",
            "Java",
            "Python",
            "SQL",
            "HTML",
            "CSS/SCSS",
            "C#",
          ]}
        />
        <SkillSection
          sectionTitle="Frameworks"
          skillsList={[
            "React",
            "React Native",
            "Next.js",
            "Jest",
            "Cypress",
            "Storybook",
          ]}
        />
        <SkillSection
          sectionTitle="Tools"
          skillsList={[
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
          ]}
        />
        <SkillSection
          sectionTitle="Libraries"
          skillsList={[
            "Redux Toolkit",
            "React Testing Library",
            "React Navigation",
            "React Native Reanimated",
            "ESLint",
            "Prettier",
            "Tailwind",
            "Bootstrap",
          ]}
        />
      </div>
    </div>
  );
};

export default SkillsPage;
