import BadgeGroup from "@/app/ui/(overview)//badge-group";

interface Props {
  sectionTitle: string;
  skillsList: string[];
}

const SkillSection = ({ sectionTitle, skillsList }: Props) => {
  return (
    <BadgeGroup
      headingTitle={sectionTitle}
      badgeList={skillsList}
      keyIdentifier={sectionTitle}
    />
  );
};

export default SkillSection;
