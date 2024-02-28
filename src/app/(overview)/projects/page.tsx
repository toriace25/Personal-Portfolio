import SectionHeader from "@/app/ui/(overview)/section-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsPage = () => {
  return <SectionHeader title="Projects" />;
};

export default ProjectsPage;
