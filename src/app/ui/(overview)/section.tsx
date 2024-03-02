import { PropsWithChildren } from "react";
import SectionHeader from "@/app/ui/(overview)/section-header";

interface Props extends PropsWithChildren {
  sectionTitle: string;
}

const Section = ({ sectionTitle, children }: Props) => {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <SectionHeader title={sectionTitle} />
      {children}
    </div>
  );
};

export default Section;
