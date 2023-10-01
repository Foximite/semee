"use client";
import React from "react";
import Head from "next/head";
import Hero from "../../components/welcomeComponents/hero";
import Navbar from "../../components/welcomeComponents/navbar";
import Footer from "../../components/welcomeComponents/footer";

const Welcome = () => {
  return (
    <>
      <Head>
        <title>
          SEMEE - Sistema De Estimativa e Monitoria de Energia Eléctrica
        </title>
        <meta
          name="SEMEE"
          content="Sistema De Estimativa e Monitoria de Energia Electrica"
        />
        <link rel="icon" href="/EDM_Logo_2.png" />
      </Head>

      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Welcome;
