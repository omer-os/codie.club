import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { searchIcon } from "../images";
import Link from "next/link";

export function HomeSec3({ allTutorials, SearchBoxValue, setSearchBoxValue }) {
  return (
    <div className="sec-3 my-[1em]  lg:px-[20em] md:px-[7em] sm:px-[5em] px-[2em] ">
      <div className="title text-3xl text-center font-bold">
        Search For Lessons
      </div>
      <div className="container flex flex-col my-[2em]">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only text-gray-300"
          >
            Find Lesson
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Image layout="intrinsic" src={searchIcon} alt="" />
            </div>
            <input
              value={SearchBoxValue}
              onChange={(e) => setSearchBoxValue(e.target.value)}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="html, css, javascript..."
              required
            />
          </div>
        </form>

        <div className="recommend-box flex flex-col gap-[.09em] py-2">
          {SearchBoxValue.length > 0 &&
            allTutorials
              .filter((TuT) => TuT.includes(SearchBoxValue.toLowerCase()))
              .map((TuT, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, top: -20 }}
                    animate={{ opacity: 1, top: 0 }}
                    exit={{ opacity: 0, top: -20 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="bg-white p-2 border-[.09em] rounded"
                    onClick={() => setSearchBoxValue(TuT)}
                  >
                    <Link href={`/courses/${TuT}`}>
                      <a className="flex items-center">{TuT}</a>
                    </Link>
                  </motion.div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
