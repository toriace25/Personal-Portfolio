import Section from "@/app/ui/(overview)/section";
import { Metadata } from "next";
import Project from "@/app/ui/(overview)/projects/project";
import {
  CARPEDIA,
  FACE_DETECTION,
  MORSE_CODE_ROBOT,
  NBA_PREDICTOR,
  SEINFELD_MBTI_PREDICTOR,
} from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return (
    <Section sectionTitle="Projects">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
        <Project project={NBA_PREDICTOR} />
        <Project project={SEINFELD_MBTI_PREDICTOR} />
        <Project project={MORSE_CODE_ROBOT} />
        <Project project={CARPEDIA} />
        <Project project={FACE_DETECTION} />
      </div>
    </Section>
  );
};

export default ProjectsPage;
