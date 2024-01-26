import NavBar from "@/app/ui/(overview)/nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center overflow-y-auto">
      <NavBar />
      <div className="flex w-full items-center p-6 md:w-4/5 md:p-12">
        <div className="w-full rounded-lg bg-white p-6 text-gray-900 md:p-12">
          {children}
        </div>
      </div>
      <div className="m-5 text-sm">
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
