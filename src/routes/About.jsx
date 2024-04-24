import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import AboutImage from "../assets/rajbari.jpg";
import Footer from "../components/Footer";
import AboutNavbar from "../components/AboutNavbar";
import Destination from "../components/Destination";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="About"
        btnClass="hide"
      />

      <AboutNavbar />

      <Footer />
    </>
  );
}

export default About;
