import React from "react";
import Layout from "./Layout";
import { codingperson, react, html, css } from "../library/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { TutorialCard } from "../library/Components";
import Link from "next/link";
export default function index() {
  const tuts = [
    {
      title: "React Tutorial",
      description:
        "React is a declarative, efficient, and flexible JavaScript library.",
      img: react,
      link: "/courses/react",
    },

    {
      title: "Html Tutorial",
      description:
        "Html is the standard markup language for creating web pages and web applications.",
      img: html,
      link: "/courses/html",
    },
    {
      title: "Css Tutorial",
      description:
        "Css is a style sheet language used for describing the presentation of a document written in a markup language.",
      img: css,
      link: "/courses/css",
    },
  ];

  return (
    <Layout>
      <div className="sec-1 grid w-full place-content-center mb-2 bg-[#FCEDC6] h-screen">
        <div className="con lg:w-9/12 lg:gap-[5em] md:w-8/12 md:gap-[4em] sm:w-7/12 sm:gap-[3em] flex items-center sm:flex-row flex-col-reverse m-auto ">
          <div className="flex sm:bg-transparent rounded-tr-2xl rounded-br-2xl bg-white/60 gap-3 z-20 sm:static relative -left-6 pl-6 sm:backdrop-none backdrop-blur-sm sm:mx-0 mx-6 flex-col sm:p-0 p-4">
            <div className="font-bold sm:text-4xl text-3xl">
              the right place for learning to code
            </div>
            <div className="sm:text-xl text-lg">
              We offer the best coding courses to help you learn to code quickly
              and easily So what are you waiting for? Come and learn to code
              with us today!
            </div>
            <div className="btns flex gap-5">
              <button className="btn-1 p-2 bg-[#FF9800] text-white  rounded-lg">
                see courses
              </button>
              <button className="btn-2">about us</button>
            </div>
          </div>

          <div className="sm:w-[55em] w-[20em] sm:top-0 sm:relative absolute right-0 top-20 z-10">
            <Image src={codingperson} layout="responsive" objectFit="cover" />
          </div>
        </div>
      </div>

      <div className="sec-2 my-[2em] 
      
      lg:px-[9em]
      md:px-[7em]
      sm:px-[5em]
      px-[2em]
      ">
        <div className="title text-3xl font-bold">our best tutorials __</div>

        <div className="container py-[3em] grid  gap-y-[3em] auto-rows-max
        xl:grid-cols-3 lg:gap-x-[5em]
        md:grid-cols-2 md:gap-x-[4em]
        sm:grid-cols-2 sm:gap-x-[3em]
        ">
          {tuts.map((tut, index) => {
            return (
              <TutorialCard
                key={index}
                title={tut.title}
                description={tut.description}
                img={tut.img}
                link={tut.link}
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

      <div className="sec-3 my-[1em] px-[9em]">
        <div className="title text-3xl font-bold">categories __</div>
        <div className="container">

        </div>
      </div>
    </Layout>
  );
}
