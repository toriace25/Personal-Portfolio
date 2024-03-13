import { PropsWithChildren } from "react";
import SectionHeader from "@/app/ui/(overview)/section-header";

interface Props extends PropsWithChildren {
  sectionTitle: string;
}

const Section = ({ sectionTitle, children }: Props) => {
  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <SectionHeader title={sectionTitle} />
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-16">
        {children}
      </div>
    </div>
  );
};

export default Section;
