import React, { useState } from "react";
import Layout from "./Layout";
import { react, html, css } from "../library/images";
import {
  HomeSec1,
  HomeSec2,
  HomeSec3,
  TutorialCard,
} from "../library/Components";

export default function index() {
  const [SearchBoxValue, setSearchBoxValue] = useState("");
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

  const allTutorials = [
    "react",
    "html",
    "css",
    "jvascript",
    "python",
    "angular",
  ];

  return (
    <Layout>
      <HomeSec1 />
      <HomeSec2 tuts={tuts} />
      <HomeSec3 allTutorials={allTutorials} SearchBoxValue={SearchBoxValue} setSearchBoxValue={setSearchBoxValue} />
    </Layout>
  );
}
