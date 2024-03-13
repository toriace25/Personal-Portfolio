import {
  FRAMEWORKS_LIST,
  LANGUAGES_LIST,
  LIBRARIES_LIST,
  TOOLS_LIST,
} from "@/app/lib/constants";
import Section from "@/app/ui/(overview)/section";
import SkillSection from "@/app/ui/(overview)/skills/skill-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

const SkillsPage = () => {
  return (
    <Section sectionTitle="Skills">
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-16">
        <SkillSection sectionTitle="Languages" skillsList={LANGUAGES_LIST} />
        <SkillSection sectionTitle="Frameworks" skillsList={FRAMEWORKS_LIST} />
        <SkillSection sectionTitle="Tools" skillsList={TOOLS_LIST} />
        <SkillSection sectionTitle="Libraries" skillsList={LIBRARIES_LIST} />
      </div>
    </Section>
  );
};

export default SkillsPage;
