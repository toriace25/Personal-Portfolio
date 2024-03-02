import Subheading from "@/app/ui/(overview)/subheading";
import ItalicizedSubheading from "@/app/ui/(overview)/italicized-subheading";

interface Props {
  jobTitle: string;
  company: string;
  dateStarted: string;
  dateEnded?: string;
  descriptionList: string[];
}

const ExperienceSection = ({
  jobTitle,
  company,
  dateStarted,
  dateEnded,
  descriptionList,
}: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-1.5">
      <Subheading title={jobTitle} />
      <div className="flex w-full flex-col items-center gap-1.5">
        <div className="mt-1 flex w-3/4 justify-between gap-4">
          <ItalicizedSubheading text={company} />
          <ItalicizedSubheading
            text={`${dateStarted} - ${dateEnded || "Present"}`}
          />
        </div>
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
