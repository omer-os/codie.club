import Layout from "../../Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Three() {
  return (
    <Layout>
      <div className="mt-[8em] mx-auto gap-3 sm:w-9/12 px-[2em] mb-[3em] flex flex-col gap-[2em]">
        <div className="text-2xl font-bold">Horizontal Lines
</div>
        <div className="text-md text-gray-400 max-w-[500px]">
        To create a horizontal line, use the {`<hr>`} tag.
        </div>
        {/* <div className="font-bold">
          The following code defines all of the headings:
        </div> */}

        <pre className="text-sm bg-[#292929] text-gray-400 p-4 rounded-lg overflow-auto">
          <code>
            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <h5>This is heading 5</h5>
    <h6>This is heading 6</h6>
    <hr>
    <p>This is paragraph</p>
  </body>
</html>`}
          </code>
        </pre>
      </div>

      <div className="text-2xl font-bold text-center">Result:</div>

      <img
        src="https://api.sololearn.com/DownloadFile?id=2533"
        className="mx-auto "
        alt="result"
      />
      <br />

      <div className="btns flex gap-3 w-full justify-between sm:px-[5em] px-[2em]">
        <Link href="/courses/html/2">
          <a className="bg-[#FF9800] w-max font-bold py-2 px-4 sm:text-lg text-white">
            Previous Lesson
          </a>
        </Link>
        <Link href="/courses/html/4">
          <a className="bg-[#FF9800] w-max font-bold py-2 px-4 sm:text-lg text-white">
            Next Lesson
          </a>
        </Link>
      </div>

      <br />
    </Layout>
  );
}
