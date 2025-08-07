export const Header = () => {
  return <div className="flex justify-center item-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#" className="nav-item">Home</a>
      <a href="https://github.com/winnersingh31/" className="nav-item">About</a>
      <a href="https://github.com/winnersingh31?tab=projects" className="nav-item">Projects</a>
      <a href="mailto:info@skyhighwebs.com" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>;
};
