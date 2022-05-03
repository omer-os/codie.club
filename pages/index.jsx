import React from "react";
import Layout from "./Layout";
import { codingperson } from "../library/images";
import Image from "next/image";
export default function index() {
  return (
    <Layout>
      <div className="sec-1 grid w-full place-content-center mb-2 bg-[#FCEDC6] h-screen">
        <div
          className="
        
        
        con lg:w-9/12 lg:gap-[5em]
        md:w-8/12 md:gap-[4em]
        sm:w-7/12 sm:gap-[3em]
        flex items-center
        sm:flex-row
        flex-col-reverse
        m-auto "
        >
          <div className="flex sm:bg-transparent rounded-tr-2xl rounded-br-2xl bg-white/60 gap-3 z-20 sm:static 
          relative -left-6 pl-6
          sm:backdrop-none backdrop-blur-sm sm:mx-0 mx-6 flex-col sm:p-0 p-4   ">
            <div className="font-bold sm:text-4xl text-3xl">
              the right place for learning to code
            </div>
            <div className="sm:text-xl text-lg">
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

          <div className="sm:w-[55em] w-[20em] sm:top-0 sm:relative absolute right-0 top-20 z-10">
            <Image src={codingperson} layout="responsive" objectFit="cover" />
          </div>
        </div>
      </div>


      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cumque aperiam nulla maiores ab ex corrupti molestias architecto dolore quidem nobis, sequi enim blanditiis ducimus, possimus voluptas et odio incidunt!
    </Layout>
  );
}
