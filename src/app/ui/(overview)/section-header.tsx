interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-4xl md:text-6xl lg:text-7xl">{title}</h1>
      <span className="w-1/2 border-t border-indigo-500" />
    </div>
  );
};

export default SectionHeader;
