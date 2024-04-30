import { PropsWithChildren } from "react";

const Text = ({ children }: PropsWithChildren) => {
  return (
    <p className="md:text-md text-center text-sm lg:text-lg">{children}</p>
  );
};

export default Text;
