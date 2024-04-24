import React from "react";
import Hero2 from "../components/Hero2";

import Footer from "../components/Footer";
import Trishna from "../assets/Trishna.jpg";
import Navbar from "../components/Navbar";
import Explore from "../components/Explore";

function SouthTripura() {
  return (
    <div>
      <Navbar />
      <Hero2
        cName="hero2"
        hero2Vid={Trishna}
        title2="Welcome to South Tripura"
        text2="Select your journey's endpoint"
      />

      <div className="explore">
        <h2>Choose your destination</h2>

        <div className="explorecard">
          <Explore
            image={Trishna}
            heading="Trishna Wild Life Sanctuary"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://maps.app.goo.gl/rLoPPsmUrvdhbJjC9"
            btnClass="show"
          />
          <Explore
            image={Trishna}
            heading="Trishna Wild Life Sanctuary"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://maps.app.goo.gl/rLoPPsmUrvdhbJjC9"
            btnClass="show"
          />
          <Explore
            image={Trishna}
            heading="Trishna Wild Life Sanctuary"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://maps.app.goo.gl/rLoPPsmUrvdhbJjC9"
            btnClass="show"
          />
        </div>

        <div className="explorecard">
          <Explore
            image={Trishna}
            heading="Trishna Wild Life Sanctuary"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://maps.app.goo.gl/rLoPPsmUrvdhbJjC9"
            btnClass="show"
          />
          <Explore
            image={Trishna}
            heading="Trishna Wild Life Sanctuary"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://maps.app.goo.gl/rLoPPsmUrvdhbJjC9"
            btnClass="show"
          />
          <Explore
            image={Trishna}
            heading="Trishna Wild Life Sanctuary"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://maps.app.goo.gl/rLoPPsmUrvdhbJjC9"
            btnClass="show"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SouthTripura;
