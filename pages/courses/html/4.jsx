import Layout from "../../Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Four() {
  return (
    <Layout>
      <div className="mt-[8em] mx-auto gap-3 sm:w-9/12 px-[2em] mb-[3em] flex flex-col gap-[2em]">
        <div className="text-2xl font-bold">Comments
</div>
        <div className="text-md text-gray-400 max-w-[500px]">
        The browser does not display comments, but they help document the HTML and add descriptions, reminders, and other notes.
        </div>
        <pre className="text-sm bg-[#292929] text-gray-400 p-4 rounded-lg overflow-auto">
          <code>
            {`<!-- Your comment goes here -->`}
          </code>
        </pre>
        <div className="font-bold">
        Example:
        </div>

        <pre className="text-sm bg-[#292929] text-gray-400 p-4 rounded-lg overflow-auto">
          <code>
            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <p>This is paragraph</p>
    <hr />
    <!-- this is comment, this will not show in the webpage -->
  </body>
</html>`}
          </code>
        </pre>
      </div>

      <div className="text-2xl font-bold text-center">Result:</div>

      <img
        src="https://api.sololearn.com/DownloadFile?id=2534"
        className="mx-auto "
        alt="result"
      />
      <br />

      <div className="btns flex gap-3 w-full justify-between sm:px-[5em] px-[2em]">
        <Link href="/courses/html/3">
          <a className="bg-[#FF9800] w-max font-bold py-2 px-4 sm:text-lg text-white">
            Previous Lesson
          </a>
        </Link>
        <Link href="/courses/html/5">
          <a className="bg-[#FF9800] w-max font-bold py-2 px-4 sm:text-lg text-white">
            Next Lesson
          </a>
        </Link>
      </div>

      <br />
    </Layout>
  );
}
