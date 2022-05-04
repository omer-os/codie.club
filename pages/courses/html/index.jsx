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
      <div className="con-2 mx-[2em]">
      <Head1>web architecture</Head1>
      <br />
        <TextContent>
          Once you’ve developed a website, you’ll need to host it on a server to
          make it accessible on the world wide web. All servers have an IP
          address (i.e 149.56.240.169) which you can think of as a phone number.
          We normally put a domain name (i.e. scrimba.com) over that IP address,
          so that it’s easier to remember.
          <br />
          <br />
          When you type that domain name in the browser, it’ll give the server a
          call. The server will then send over a bunch of HTML, CSS, and
          JavaScript files, like this:
          <br />
          <img
            src="https://cdn-media-1.freecodecamp.org/images/BRF0UCTRXQwPmChUfudbIZnnelGaVxlnpiN1"
            className="mx-auto "
            alt="result"
          />
          <br />
          You browser starts by loading the main HTML file, before it continues with the CSS and JavaScript. These files enable the browser to render a beautiful and interactive website.



          <br />

          <img src="https://cdn-media-1.freecodecamp.org/images/VjV6nvDloznKazqZhXbn6tXzcb5zVPleJLn5" alt="" />
          <br />
          <br />
          <img src="https://cdn-media-1.freecodecamp.org/images/lZv-vAkRnVxCmzO0utjYN6iAa8bQxRveAY4n" alt="" />
          <br />
          <br />
          <img src="https://cdn-media-1.freecodecamp.org/images/dsna40xpfnzPvB8Nymr1UbyfcUdXc6e7PfGa" alt="" />
        </TextContent>
      </div>
    </Layout>
  );
}

// components
export const Head1 = ({ children }) => {
  return <div className="text-2xl font-bold">{children}</div>;
};

export const Head2 = ({ children }) => {
  return <div className="text-xl font-bold text-center">{children}</div>;
};

export const Code = ({ children }) => {
  return (
    <pre className="text-sm bg-[#292929] text-gray-400 p-4 rounded-lg overflow-auto">
      <code>{children}</code>
    </pre>
  );
};

export const TextContent = ({ children }) => {
  return <div className="text-md text-gray-400 ">{children}</div>;
};

export const BottomNavigation = ({ previousLink, nextLink }) => {
  return (
    <div className="btns flex gap-3 w-full justify-between sm:px-[5em] px-[2em]">
      {previousLink && (
        <Link href={previousLink}>
          <a className="bg-[#FF9800] w-max font-bold py-2 px-4 sm:text-lg text-white">
            Previous Lesson
          </a>
        </Link>
      )}

      {nextLink && (
        <Link href={nextLink}>
          <a className="bg-[#FF9800] w-max font-bold py-2 px-4 sm:text-lg text-white">
            Next Lesson
          </a>
        </Link>
      )}
    </div>
  );
};

export const StartingPoint = ({ children }) => {
  return (
    <>
      <div className="mt-[8em] mx-auto gap-3 sm:w-9/12 px-[2em] mb-[3em] flex flex-col gap-[2em]">
        {children}
      </div>
      <br />
    </>
  );
};
