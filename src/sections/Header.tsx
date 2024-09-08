export const Header = () => {
  return <div className="fixed z-10 flex justify-center items-center top-3 w-full font-sans">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10">
      <a className="nav-item" href="#hero">Home</a>
      <a className="nav-item" href="#Projects">Projects</a>
      <a className="nav-item bg-white text-gray-900 hover:bg-[#1a9753]" href="#Contact">Contact</a>
    </nav>
  </div>;
};
