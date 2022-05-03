import React from "react";
import { TutorialCard } from "../Components";
import { motion } from "framer-motion";
import Link from "next/link";

export function HomeSec2({ tuts }) {
  return (
    <div className="sec-2 my-[2em]  lg:px-[9em] md:px-[7em] sm:px-[5em] px-[2em] ">
      <div className="title text-3xl font-bold">our best tutorials __</div>

      <div className="container py-[3em] grid  gap-y-[3em] auto-rows-max xl:grid-cols-3 lg:gap-x-[5em] md:grid-cols-2 md:gap-x-[4em] sm:grid-cols-2 sm:gap-x-[3em] ">
        {tuts.map((tut, index) => {
          return (
            <TutorialCard
              key={index}
              title={tut.title}
              description={tut.description}
              img={tut.img}
              link={tut.link}
              alt={tut.title}
            />
          );
        })}
      </div>

      <Link href="/courses">
        <a className="mx-auto w-max block">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn-3 w-max bg-[#FF9800] text-white py-4 px-5 font-bold rounded-lg"
          >
            checkout more courses
          </motion.div>
        </a>
      </Link>
    </div>
  );
}
