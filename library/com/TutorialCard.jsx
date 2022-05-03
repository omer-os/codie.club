import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export function TutorialCard({ title, description, img, link, alt }) {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  return (
    <div
      className="tutorial-card relative"
      onDoubleClick={() => {
        router.push(link);
      }}
    >
      <a
        href={link}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <motion.div
          className="tutorialCard h-full cursor-pointer group bg-[#FCEDC6] p-[1em] rounded-xl grid"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          animate={{
            placeItems: isHover ? "center" : "center",
            scale: isHover ? 1.1 : 1,
          }}
        >
          <motion.div
            className="img relative"
            animate={{
              width: isHover ? "5em" : "6em",
              top: isHover ? "0%" : "70%",
            }}
          >
            <Image
              src={img}
              alt={alt}
              layout="responsive"
              objectFit="contain"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: isHover ? 1 : 0,
              y: isHover ? 0 : -20,
            }}
            className="title  mt-5 capitalize text-center text-2xl font-bold"
          >
            {title}
          </motion.div>
          <motion.div
            animate={{
              opacity: isHover ? 1 : 0,
              y: isHover ? 0 : -20,
            }}
            className="description  text-center text-lg"
          >
            {description}
          </motion.div>
        </motion.div>
      </a>
    </div>
  );
}
