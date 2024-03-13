import Subheading from "@/app/ui/(overview)/subheading";
import DetailsRow from "@/app/ui/(overview)/details-row";
import ItalicizedSubheading from "@/app/ui/(overview)/italicized-subheading";
import { DateRangeResource, NameLocationResource } from "@/app/lib/definitions";

interface Props {
  jobTitle: string;
  company: NameLocationResource;
  dateRange: DateRangeResource;
  descriptionList: string[];
}

const ExperienceSection = ({
  jobTitle,
  company,
  dateRange,
  descriptionList,
}: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-1.5">
      <Subheading title={jobTitle} />
      <div className="flex w-full flex-col items-center gap-1.5">
        <DetailsRow
          leftSubheading={company.name}
          rightSubheading={company.location}
        />
        <ItalicizedSubheading
          text={`${dateRange.start} - ${dateRange.end || "Present"}`}
        />
        <ul className="w-full list-outside list-disc px-4 md:px-0">
          {descriptionList.map((descriptionItem, i) => (
            <li
              className="md:text-md text-sm lg:text-lg"
              key={`${company}-experience-${i}`}
            >
              {descriptionItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
