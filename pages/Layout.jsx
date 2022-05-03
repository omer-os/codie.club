import React from "react";
import { NavBar, Footer } from "../library/components";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo1.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo1.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
