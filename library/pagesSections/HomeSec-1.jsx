import React from "react";
import Image from "next/image";
import { codingperson } from "../images";
import Link from "next/link";
import { motion } from "framer-motion";

export function HomeSec1() {
  return (
    <div className="sec-1 grid w-full place-content-center mb-2 bg-[#FCEDC6] h-screen">
      <div className="con lg:w-9/12 lg:gap-[5em] md:w-8/12 md:gap-[4em] sm:w-7/12 sm:gap-[3em] flex items-center sm:flex-row flex-col-reverse m-auto ">
        <div
          animate={{ y: [20, 0], opacity: [0, 1] }}
          className="flex sm:bg-transparent rounded-tr-2xl rounded-br-2xl bg-white/60 gap-3 z-20 sm:static relative -left-6 pl-6 sm:backdrop-none backdrop-blur-sm sm:mx-0 mx-6 flex-col sm:p-0 p-4"
        >
          <motion.div
            animate={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
            className="font-bold sm:text-4xl text-3xl"
          >
            The right place for learning to code
          </motion.div>
          <motion.div
            transition={{ delay: 1 }}
            animate={{ y: [20, 0], opacity: [0, 1] }}
            className="sm:text-xl text-lg"
          >
            We offer the best coding courses to help you learn to code quickly
            and easily So what are you waiting for? Come and learn to code with
            us today!
          </motion.div>
          <motion.div
            transition={{ delay: 1.5 }}
            animate={{ y: [20, 0], opacity: [0, 1] }}
            className="btns flex gap-5"
          >
            <Link href="/courses">
              <a className="btn-1 p-2 bg-[#FF9800] text-white rounded-lg">
                see courses
              </a>
            </Link>
            <Link href="/about">
              <a className="btn-2 flex items-center">about us</a>
            </Link>
          </motion.div>
        </div>

        <div className="sm:w-[55em] w-[20em] sm:top-0 sm:relative absolute right-0 top-20 z-10">
          <Image
            src={codingperson}
            width={320}
            height={300}
            alt="person coding svg"
            layout="responsive"
            objectFit="cover"
            priority
            className="z-40"
          />


          <motion.div
            animate={{ y: [10,0,10] }}
            transition={{ repeat: Infinity,duration:2}}


          className="box-1 w-[9em] h-[9em] rounded-2xl absolute -bottom-3 z-[30] bg-[#FF9800]"></motion.div>
          <motion.div 
            animate={{ y: [10,0,10],
              x: [-10,0,-10]
            }}
            transition={{ repeat: Infinity,duration:4}}

          className="box-2 w-[9em] h-[9em] rounded-2xl absolute top-7 left-5 z-[30] opacity-20 bg-[#FF9800]"></motion.div>
          <motion.div
            animate={{ y: [10,0,10],
              x: [10,0,10]
            }}
            transition={{ repeat: Infinity,duration:6}}

          className="box-3 w-[9em] h-[9em] rounded-2xl absolute bottom-3 right-5 z-[30] opacity-50 bg-[#FF9800]"></motion.div>
        </div>
      </div>
    </div>
  );
}
