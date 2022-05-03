import React from "react";
import { TutorialCard } from "../../library/Components";
import Layout from "../Layout";
import {
  html,
  css,
  react,
  javascript,
  python,
  tailwindcss,
} from "../../library/images";
import Head from "next/head";

export default function Index
() {
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
    {
      title: "Javascript Tutorial",
      description:
        "Javascript is a lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
      img: javascript,
      link: "/courses/javascript",
    },
    {
      title: "Python Tutorial",
      description:
        "Python is a general-purpose, high-level programming language.",
      img: python,
      link: "/courses/python",
    },
    {
      title: "Tailwind CSS Tutorial",
      description:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
      img: tailwindcss,
      link: "/courses/tailwindcss",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="best platform for learning to code. web development and programming languages."
        />
        <meta
          name="keywords"
          content="web development, programming languages, web development courses, programming languages courses, web development tutorials, programming languages tutorials"
        />
        <meta name="author" content="omar ch." />
        <meta name="copyright" content="omer-os" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="flex flex-col items-center pb-[4em] pt-[6em]">
        <div className="title text-3xl font-bold text-center">Our Courses</div>
        <div
          className="grid gap-[2em] mt-[2em] sm:px-[5em] px-[3em]
        lg:grid-cols-4
        md:grid-cols-3
        sm:grid-cols-2
        grid-cols-1
        "
        >
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
      </div>
    </Layout>
  );
}
