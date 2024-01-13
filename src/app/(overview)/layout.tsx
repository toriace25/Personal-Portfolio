import NavLinks from "@/app/ui/nav-links";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full flex-none">
        <NavLinks showHome />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <div className="m-5">
        <a target="_blank" href="https://icons8.com/icon/66763/circled-v">
          Circled V
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </div>
  );
};

export default Layout;
