import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImage from "../assets/dumboor2.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg={HomeImage}
        title="Welcome to Land of Lakes and Palaces"
        text="Select your journey's endpoint"
        buttonText="Your Travel Roadmap"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
