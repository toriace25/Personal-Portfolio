import Badge from "@/app/ui/(overview)/badge";
import Subheading from "@/app/ui/(overview)/subheading";

interface Props {
  sectionTitle: string;
  skillsList: string[];
}

const SkillSection = ({ sectionTitle, skillsList }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <Subheading title={sectionTitle} />
      <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-4 lg:gap-8">
        {skillsList.map((skill, i) => (
          <Badge key={`${sectionTitle}-skill-${i}`} title={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
