import React from "react";
import Layout from "../../Layout";
import htmllogo from "./imgs/htmllogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <div
        className="mt-[8em] mx-auto sm:gap-3 mb-[3em]
      flex
      sm:flex-row
      gap-[3em]
      flex-col
      lg:w-9/12
        w-11/12
      "
      >
        <div className="img-left sm:min-w-[200px] w-[100px]">
          <Image
            src={htmllogo}
            alt="html"
            width={350}
            height={350}
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold">HTML</h1>
          <p className="text-xl">
            stands for hyper text makup language. html is not a programming
            language like (python, javascript, etc...) because you cant do
            calculations in it. html is used for building websites main
            structure.
          </p>
          <Link href="/courses/html/2">
            <a className="bg-[#FF9800] w-max font-bold py-2 px-4 text-lg text-white">
              Next Lesson
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
