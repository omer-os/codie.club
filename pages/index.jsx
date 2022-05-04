import React, { useState } from "react";
import Layout from "./Layout";
import { react, html, css, logo } from "../library/images";
import { HomeSec1, HomeSec2, HomeSec3 } from "../library/components";
import Head from "next/head";

export default function Index() {
  const [SearchBoxValue, setSearchBoxValue] = useState("");

  // const tuts = [
  //   {
  //     title: "React Tutorial",
  //     description:
  //       "React is a declarative, efficient, and flexible JavaScript library.",
  //     img: react,
  //     link: "/courses/react",
  //   },

  //   {
  //     title: "Html Tutorial",
  //     description:
  //       "Html is the standard markup language for creating web pages and web applications.",
  //     img: html,
  //     link: "/courses/html",
  //   },
  //   {
  //     title: "Css Tutorial",
  //     description:
  //       "Css is a style sheet language used for describing the presentation of a document written in a markup language.",
  //     img: css,
  //     link: "/courses/css",
  //   },
  // ];

  // const allTutorials = [
  //   "react",
  //   "html",
  //   "css",
  //   "jvascript",
  //   "python",
  //   "angular",
  // ];

  const tuts = [
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

  const allTutorials = ["html", "css"];

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

      <HomeSec1 />
      <HomeSec2 tuts={tuts} />
      <HomeSec3
        allTutorials={allTutorials}
        SearchBoxValue={SearchBoxValue}
        setSearchBoxValue={setSearchBoxValue}
      />
    </Layout>
  );
}
