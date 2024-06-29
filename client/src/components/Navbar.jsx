import PawPrintIcon from "../assets/pawPringIcon";
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

const Navbar = () => {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center">
          <PawPrintIcon className="h-6 w-6" />
          <span className="sr-only">Paw Care</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
