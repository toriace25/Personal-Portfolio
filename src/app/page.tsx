import NavLinks from "@/app/ui/nav-links";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-500">
      <div className="m-8 flex flex-col items-center gap-5 md:gap-8 lg:gap-10">
        <NavLinks />
        <p className="border-b text-4xl md:text-7xl lg:text-8xl">
          Victoria Scavetta
        </p>
        <p className="text-xl md:text-3xl lg:text-4xl">Personal Portfolio</p>
      </div>
    </main>
  );
};

export default Home;
