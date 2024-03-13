import Badge from "@/app/ui/(overview)/badge";
import SmallSubheading from "@/app/ui/(overview)/small-subheading";
import Subheading from "@/app/ui/(overview)/subheading";

interface Props {
  headingTitle: string;
  badgeList: string[];
  keyIdentifier: string;
  smallHeading?: boolean;
}

const BadgeGroup = ({
  headingTitle,
  badgeList,
  keyIdentifier,
  smallHeading,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      {smallHeading ? (
        <SmallSubheading title={headingTitle} />
      ) : (
        <Subheading title={headingTitle} />
      )}
      <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-4 lg:gap-8">
        {badgeList.map((course, i) => (
          <Badge key={`${keyIdentifier}-badge-group-${i}`} title={course} />
        ))}
      </div>
    </div>
  );
};

export default BadgeGroup;
