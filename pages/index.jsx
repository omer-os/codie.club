import React from "react";
import Layout from "./Layout";
import { codingperson } from "../library/images";
import Image from "next/image";
export default function index() {
  return (
    <Layout>
      <div className="sec-1 grid w-full place-content-center mb-2 bg-[#FCEDC6] h-screen">
        <div className="con w-9/12 m-auto flex gap-[5em] items-center">
          <div className="flex gap-3 flex-col">
            <div className="font-bold text-4xl">
              the right place for learning to code
            </div>
            <div className="text-xl">
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

          <div className="w-[55em] relative z-10">
            <Image
              src={codingperson}
              layout="responsive"
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia adipisci,
      unde, ut recusandae dolores velit atque dolore consectetur laborum odit
      sed enim numquam aperiam fugiat nemo alias aut, voluptatum laudantium
      tenetur qui architecto! Dignissimos neque modi quis ab, magnam rerum
      dolorem cum similique. Deleniti sunt natus laborum ducimus harum minima
      quos quibusdam, laudantium culpa, error voluptate laboriosam ea nobis
      provident nisi velit amet rem a rerum repellendus aliquid aspernatur
      facilis delectus tenetur. Iure quisquam repellendus voluptatibus adipisci
      nemo quas aliquid distinctio maiores voluptate, debitis impedit? A,
      cumque. Facere suscipit dolore recusandae illo, praesentium, ex maiores
      necessitatibus reiciendis repudiandae, excepturi asperiores eius. Ex
      facilis deleniti eaque quo laborum consectetur provident quas amet nam
      minus deserunt numquam facere similique cupiditate laudantium impedit
      animi, rem, unde, sequi voluptas non in. Enim omnis unde, molestias fuga
      eligendi, sed vel hic pariatur dolor aliquid adipisci tenetur, impedit
      facilis earum cumque fugit atque ipsum a minima consequuntur
      exercitationem corporis. Iusto at illo molestias eos quis, hic corporis
      repellendus voluptatem, cumque mollitia quidem provident, tenetur sequi
      itaque dolor asperiores suscipit accusamus ullam incidunt ipsam maxime.
      Tempora aut, deleniti quaerat eligendi, harum ratione similique error
      repellat officiis omnis ex repellendus perferendis vitae! Accusamus vero
      illo tenetur quasi ullam.
    </Layout>
  );
}
