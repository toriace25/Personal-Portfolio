import NavBar from "@/app/ui/(overview)/nav-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between overflow-y-auto overflow-x-hidden">
      <div className="flex w-screen flex-col items-center">
        <NavBar />
        <div className="flex w-full items-center p-6 md:w-4/5 md:p-12">
          <div className="w-full rounded-lg bg-white p-6 text-gray-900 md:px-24 md:py-12 lg:px-32">
            {children}
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-col items-center text-sm">
        <p className="text-sm">
          Copyright &copy; 2024 | Victoria Scavetta | All Rights Reserved
        </p>
        <div>
          Icons by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
