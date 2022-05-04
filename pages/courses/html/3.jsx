import Layout from "../../Layout";
import { StartingPoint } from "./index";
import { Head1, Head2 } from "./index";
import { TextContent } from "./index";
import { Code } from "./index";
import { BottomNavigation } from "./index";

export default function Three() {
  return (
    <Layout>
      <StartingPoint>
        <Head1>Horizontal Lines</Head1>
        <TextContent>
          To create a horizontal line, use the {`<hr>`} tag.
        </TextContent>

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
    <hr>
    <p>This is paragraph</p>
  </body>
</html>`}
        </Code>

        <Head2>Result:</Head2>

        <img
          src="https://api.sololearn.com/DownloadFile?id=2533"
          className="mx-auto "
          alt="result"
        />
        <br />

        <BottomNavigation
          previousLink="/courses/html/2"
          nextLink="/courses/html/4"
        />
      </StartingPoint>
    </Layout>
  );
}
