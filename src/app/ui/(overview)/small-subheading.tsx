interface Props {
  title: string;
}

const SmallSubheading = ({ title }: Props) => {
  return (
    <h3 className="text-md underline decoration-indigo-500 decoration-1 underline-offset-8 md:text-xl lg:text-2xl">
      {title}
    </h3>
  );
};

export default SmallSubheading;
