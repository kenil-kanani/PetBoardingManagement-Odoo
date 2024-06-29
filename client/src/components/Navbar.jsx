import PawPrintIcon from "../assets/pawPringIcon";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { isLoggedIn, role } = useContext(AuthContext);
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
          {!isLoggedIn && (
            <Link
              to={"/signup"}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Signup
            </Link>
          )}
          {isLoggedIn && role === "user" && (
            <>
              <Link
                to={"/bookings"}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Booking
              </Link>
              <Link
                to={"/userDashboard"}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Dashboard
              </Link>
              <Link
                to={"/profile"}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Profile
              </Link>
            </>
          )}{" "}
          {isLoggedIn && role === "admin" && (
            <Link
              to={"/adminDashboard"}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Dashboard
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
