import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImage from "../assets/capitalcomplex.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={ContactImage}
        title="Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
