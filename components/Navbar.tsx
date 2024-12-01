import { Stethoscope } from "lucide-react";
import Link from "next/link";
import { LoginButton } from "./auth/login-button";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Stethoscope className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800">
            MediCare
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-800"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-800"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-800"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-800"
            href="#"
          >
            Contact
          </Link>
          <LoginButton>
            <Button className="w-full">Login/Sign Up</Button>
          </LoginButton>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
