import PawPrintIcon from "../assets/pawPringIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary">
        <Link to={"/"} className="flex items-center justify-center">
          <PawPrintIcon className="h-6 w-6" />
          <span className="sr-only">Paw Care</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to={"/services"}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Services
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
