interface Props {
  text: string;
}

const ItalicizedSubheading = ({ text }: Props) => {
  return (
    <p className="text-md text-center italic md:text-xl lg:text-2xl">{text}</p>
  );
};

export default ItalicizedSubheading;
