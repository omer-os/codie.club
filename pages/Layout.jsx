import React from "react";
import { NavBar, Footer } from "../library/Components";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
