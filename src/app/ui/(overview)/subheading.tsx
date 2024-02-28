interface Props {
  title: string;
}

const Subheading = ({ title }: Props) => {
  return (
    <h2 className="text-xl underline decoration-indigo-500 decoration-1 underline-offset-8 md:text-3xl lg:text-4xl">
      {title}
    </h2>
  );
};

export default Subheading;
