import { useState } from "react";
import { logo } from "../images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavBar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [OpenMenu, setOpenMenu] = useState(false);

  return (
    <div className="grid grid-cols-[auto_1fr_auto] w-full py-[1em] px-[2em] border-2 items-center">
      <div className="logo">
        <Image src={logo} width="40px" height="30px" />
      </div>

      <div
        className={`grid grid-cols-1 auto-rows-max fixed z-40 bg-white gap-3  sm:flex sm:ml-[2em] sm:relative sm:bg-transparent sm:place-content-start place-content-center text-center sm:text-auto transition-all duration-300 overflow-hidden
        ${
          OpenMenu
            ? "top-0 left-0 right-0 bottom-0"
            : "right-full top-0 left-0 bottom-0"
        }
        `}
      >
        <Link href="/">
          <a
            className={`text-gray-500 hover:text-gray-700 ${
              pathname === "/" ? "font-bold text-black scale-[1.09]" : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`text-gray-500 hover:text-gray-700 ${
              pathname === "/About" ? "font-bold scale-[1.09]" : ""
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/courses">
          <a
            className={`text-gray-500 hover:text-gray-700 ${
              pathname === "/Courses" ? "font-bold scale-[1.09]" : ""
            }`}
          >
            Courses
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`text-gray-500 hover:text-gray-700 ${
              pathname === "/Contact" ? "font-bold scale-[1.09]" : ""
            }`}
          >
            Contact
          </a>
        </Link>
      </div>

      <div className="flex gap-5">
        <Link href="/login">
          <a className="sm:flex hidden items-center">login</a>
        </Link>
        <Link href="/signup">
          <a className="py-[.5em] sm:block hidden font-bold px-[1em] bg-[#FF9800] text-white rounded-xl">
            signup
          </a>
        </Link>

        <div
          className="menu-btn sm:hidden flex flex-col items-center gap-2 cursor-pointer z-50 absolute right-7 top-5"
          onClick={() => {
            setOpenMenu(!OpenMenu);
          }}
        >
          <div
            className={`
          line w-8 h-1 bg-black relative rounded-full transition-all duration-300 left-0 rotate-0 opacity-1 top-0
          ${OpenMenu ? "rotate-45 top-3" : ""}`}
          ></div>
          <div
            className={`
          line w-8 h-1 bg-black relative rounded-full transition-all duration-300 left-0 rotate-0 opacity-1 top-0
          ${OpenMenu ? "-left-[1em] opacity-0" : ""}`}
          ></div>
          <div
            className={`
          line w-8 h-1 bg-black relative rounded-full transition-all duration-300 left-0 rotate-0 opacity-1 top-0
          ${OpenMenu ? "-rotate-45 -top-3" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
