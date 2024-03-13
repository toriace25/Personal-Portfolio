import { DateRangeResource, NameLocationResource } from "@/app/lib/definitions";
import Subheading from "@/app/ui/(overview)/subheading";
import BadgeGroup from "@/app/ui/(overview)/badge-group";
import DetailsRow from "@/app/ui/(overview)/details-row";

interface Props {
  degree: string;
  major: string;
  school: NameLocationResource;
  dateAttended: DateRangeResource;
  courses: string[];
}

const EducationSection = ({
  degree,
  major,
  school,
  dateAttended,
  courses,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <Subheading title={degree} />
      <div className="flex flex-col items-center gap-4 md:gap-8">
        <div className="flex w-full flex-col items-center gap-1.5">
          <DetailsRow
            leftSubheading={school.name}
            rightSubheading={school.location}
          />
          <DetailsRow
            leftSubheading={major}
            rightSubheading={`${dateAttended.start} - ${dateAttended.end}`}
          />
        </div>
        <BadgeGroup
          headingTitle="Coursework"
          badgeList={courses}
          keyIdentifier={degree}
          smallHeading
        />
      </div>
    </div>
  );
};

export default EducationSection;
