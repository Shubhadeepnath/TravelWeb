import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImage from "../assets/neermahal3.jpg";
import Footer from "../components/Footer";
import Slickcarousel from "../components/Slickcarousel";
import Explorehotelsbutton from "../components/Explorehotelsbutton";
import Luxurystays from "../components/Luxurystays";
import Slickalsocheckout from "../components/Slickalsocheckout";

function Service() {
  return (
    <>
      <Navbar />

      
      <div style={{backgroundColor: "#fef2f2"}}>
      <Hero
        cName="hero-mid"
        heroImg={ServiceImage}
        title="Stay & Savour"
        btnClass="hide"
      />
      <Slickcarousel />
      <Explorehotelsbutton />
      <Luxurystays />
      <Slickalsocheckout />
      <Footer />
      </div>
     
    </>
  );
}

export default Service;
