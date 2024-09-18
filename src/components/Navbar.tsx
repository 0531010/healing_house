import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="font-light text-xl p-4 flex items-center my-a my-0 mx-auto border-b-2 border-b-my_border_color w-10/12 container"
      style={{
        // fontSize: "large",
      }}>
        <h1>Logo</h1>
        <div className="ml-auto no-underline m-2 ">
          <Link
            to="/about"
            className="ml-4 text-main_blue_color hover:text-hover_color"
          >
            About
          </Link>
          <Link
            to="/help"
            className="ml-4 text-main_blue_color hover:text-hover_color"
          >
            Help
          </Link>
          <Link
            to="/create"
            className="ml-4 text-white bg-main_blue_color rounded-full p-2 pl-4 pr-4 hover:bg-hover_color "
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
