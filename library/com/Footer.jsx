import React from "react";
import { logo } from "../images";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full gap-[1em] transition-all duration-300 overflow-hidden sm:h-max h-[45em]  relative grid sm:grid-cols-[430px_1fr] bg-[#FCEDC6] py-[2em] px-[1.2em] ">
      <div className="left-container flex flex-col gap-3">
        <div className="logo flex gap-1 ">
          <div className="img w-[4em]">
            <Image
              src={logo}
              layout="responsive"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="text-5xl font-bold">Club</div>
        </div>
        <div className="text-xl text-[#FF9800]">
          We offer the best coding courses to help you learn to code quickly and
          easily So what are you waiting for? Come and learn to code with us
          today!
        </div>
      </div>

      <div className="right-container flex items-center justify-center text-[#FF9800]">
        <div className="bg-text z-10 opacity-20 text-[13em] absolute sm:-top-[.19em] top-[1em] sm:left-auto -left-[.8em] sm:rotate-0 rotate-90 sm:right-[.5em] transition-all duration-300">
          PAGES
        </div>
        <ul className="flex md:flex-row sm:flex-wrap flex-col  relative left-40 sm:left-0 z-20 md:text-3xl text-2xl gap-[2em] -top-[5em] sm:top-0 transition-all duration-300 ">
          <li>
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a className="hover:underline">Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
