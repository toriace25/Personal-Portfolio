import ItalicizedSubheading from "@/app/ui/(overview)/italicized-subheading";

interface Props {
  leftSubheading: string;
  rightSubheading: string;
}

const DetailsRow = ({ leftSubheading, rightSubheading }: Props) => {
  return (
    <div className="mt-1 flex w-3/4 justify-between gap-6">
      <ItalicizedSubheading text={leftSubheading} />
      <ItalicizedSubheading text={rightSubheading} />
    </div>
  );
};

export default DetailsRow;
