interface Props {
  title: string;
}

const Badge = ({ title }: Props) => {
  return (
    <div className="md:text-md flex items-center justify-center gap-2 rounded-md bg-violet-500 p-1.5 text-sm text-white md:p-3 lg:text-lg">
      {title}
    </div>
  );
};

export default Badge;
