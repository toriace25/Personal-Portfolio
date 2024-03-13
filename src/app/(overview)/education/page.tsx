import {
  BACHELORS_COURSE_LIST,
  BACHELORS_DATE_RANGE,
  MAJOR,
  MASTERS_COURSE_LIST,
  MASTERS_DATE_RANGE,
  ROWAN_UNIVERSITY,
} from "@/app/lib/constants";
import EducationSection from "@/app/ui/(overview)/education/education-section";
import Section from "@/app/ui/(overview)/section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
};

const EducationPage = () => {
  return (
    <Section sectionTitle="Education">
      <EducationSection
        degree="Master of Science"
        major={MAJOR}
        school={ROWAN_UNIVERSITY}
        dateAttended={MASTERS_DATE_RANGE}
        courses={MASTERS_COURSE_LIST}
      />
      <EducationSection
        degree="Bachelor of Science"
        major={MAJOR}
        school={ROWAN_UNIVERSITY}
        dateAttended={BACHELORS_DATE_RANGE}
        courses={BACHELORS_COURSE_LIST}
      />
    </Section>
  );
};

export default EducationPage;
