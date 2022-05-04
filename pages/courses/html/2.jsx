import Layout from "../../Layout";
import Link from "next/link";

import { StartingPoint } from "./index";
import { Head1, Head2 } from "./index";
import { TextContent } from "./index";
import { Code } from "./index";
import { BottomNavigation } from "./index";

export default function Two() {
  return (
    <Layout>
      <StartingPoint>
        <Head1>How to create html file</Head1>
        <TextContent>
          <ol>
            <li>
              write your code. you can use{" "}
              <a
                className="text-blue-600 underline"
                href="https://code.visualstudio.com/download"
              >
                vscode editor
              </a>{" "}
              or simple notepad. <br /> <br />
              <img
                src="https://www.udacity.com/blog/wp-content/uploads/2020/06/Screen-Shot-2020-06-24-at-12.36.25-PM.png.webp"
                alt="write code"
              />{" "}
              <br />
              <br />
            </li>
            <li>
              save your code in a file that ends with .html like mycode.html{" "}
              <br />
              <br />
            </li>
            <li>
              If you save the code in a file ending in .html and open it in a
              web browser, it will render a simple HTML web page for you: <br />
              <br />
              <img
                src="https://www.udacity.com/blog/wp-content/uploads/2020/06/Screen-Shot-2020-06-24-at-12.39.15-PM.png.webp"
                alt="html page"
              />
            </li>
          </ol>
        </TextContent>

        <br />
        <Head1>HTML Headings</Head1>
        <TextContent>
          HTML includes six levels of headings, which are ranked according to
          importance. These are {"<h1>, <h2>, <h3>, <h4>, <h5>, and <h6>"}.
        </TextContent>
        <Head2>The following code defines all of the headings:</Head2>

        <Code>
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
  </body>
</html>
`}
        </Code>

        <br />
        <hr />
        <br />

<Head2>Notes:</Head2>
<TextContent>All HTML documents must start with a document type declaration: {`<!DOCTYPE html>.`}</TextContent>
<TextContent>The HTML document itself begins with {'<html>'} and ends with {'</html>'}</TextContent>


        <Head2>Result:</Head2>

        <img
          src="https://api.sololearn.com/DownloadFile?id=2532"
          className="mx-auto "
          alt="result"
        />
        <br />

        <BottomNavigation
          previousLink="/courses/html"
          nextLink="/courses/html/3"
        />
      </StartingPoint>
    </Layout>
  );
}
