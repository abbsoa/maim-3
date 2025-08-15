import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full m-auto flex justify-around items-center p-4 sticky left-0 top-0 z-50 border-b border-zinc-300 bg-zinc-100">
      <div className="flex items-center justify-around w-[75%] m-auto">
        <h1>logo</h1>
        <nav className="flex items-center justify-center gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/favorites"}>My List</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
