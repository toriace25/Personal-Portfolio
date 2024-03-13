import {
  BIOMEME,
  BIOMEME_DATE_RANGE,
  BIOMEME_DESCRIPTION_LIST,
  ROWAN_INTERNSHIP_DATE_RANGE,
  ROWAN_INTERNSHIP_DESCRIPTION_LIST,
  ROWAN_LEARNING_ASSISTANT_DATE_RANGE,
  ROWAN_LEARNING_ASSISTANT_DESCRIPTION_LIST,
  ROWAN_UNIVERSITY,
} from "@/app/lib/constants";
import ExperienceSection from "@/app/ui/(overview)/experience/experience-section";
import Section from "@/app/ui/(overview)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

const ExperiencePage = () => {
  return (
    <Section sectionTitle="Experience">
      <ExperienceSection
        jobTitle="Software Engineer I"
        company={BIOMEME}
        dateRange={BIOMEME_DATE_RANGE}
        descriptionList={BIOMEME_DESCRIPTION_LIST}
      />
      <ExperienceSection
        jobTitle="Software Developer Intern"
        company={ROWAN_UNIVERSITY}
        dateRange={ROWAN_INTERNSHIP_DATE_RANGE}
        descriptionList={ROWAN_INTERNSHIP_DESCRIPTION_LIST}
      />
      <ExperienceSection
        jobTitle="Learning Assistant"
        company={ROWAN_UNIVERSITY}
        dateRange={ROWAN_LEARNING_ASSISTANT_DATE_RANGE}
        descriptionList={ROWAN_LEARNING_ASSISTANT_DESCRIPTION_LIST}
      />
    </Section>
  );
};

export default ExperiencePage;
