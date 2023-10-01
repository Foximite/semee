import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <Link href="/welcome">
          <span className="flex items-center space-x-2 text-2xl font-medium text-orange-500 dark:text-gray-100">
            <span>
              <Image
                src="/EDM_Logo.png"
                alt="EDM Logo"
                width="256"
                height="256"
                className=""
              />
            </span>
          </span>
        </Link>

        {/* menu  */}

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/login"
            className="px-6 py-2 text-white bg-orange-400 rounded-md md:ml-5"
          >
            Login
          </Link>

          <Link
            href="/sign-up"
            className="px-6 py-2 border border-orange-400 text-orange-400 rounded-md md:ml-5 hover:bg-orange-400 hover:text-white transition duration-300"
          >
            Registrar-se
          </Link>

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
