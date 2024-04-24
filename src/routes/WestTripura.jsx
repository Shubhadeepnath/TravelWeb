import Explore from "../components/Explore";
import Navbar from "../components/Navbar";
import Rajbari from "../assets/rajbari.jpg";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";

function WestTripura() {
  return (
    <div>
      <Navbar />
      <Hero2
        cName="hero2"
        hero2Vid={Rajbari}
        title2="Welcome to West Tripura"
        text2="Select your journey's endpoint"
      />
      <div className="explore">
        <h2>Choose your destination</h2>

        <div className="explorecard">
          <Explore
            image={Rajbari}
            heading="Ujjayanta Palace"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://www.google.com/maps/place/Tripura+State+Museum/data=!4m5!3m4!1s0x3753f40c3b19f6eb:0xe0a6589460dde370!8m2!3d23.8344601!4d91.2800933"
            btnClass="show"
          />
          <Explore
            image={Rajbari}
            heading="Ujjayanta Palace"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://www.google.com/maps/place/Tripura+State+Museum/data=!4m5!3m4!1s0x3753f40c3b19f6eb:0xe0a6589460dde370!8m2!3d23.8344601!4d91.2800933"
            btnClass="show"
          />
          <Explore
            image={Rajbari}
            heading="Ujjayanta Palace"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://www.google.com/maps/place/Tripura+State+Museum/data=!4m5!3m4!1s0x3753f40c3b19f6eb:0xe0a6589460dde370!8m2!3d23.8344601!4d91.2800933"
            btnClass="show"
          />
        </div>
        <div className="explorecard">
          <Explore
            image={Rajbari}
            heading="Ujjayanta Palace"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://www.google.com/maps/place/Tripura+State+Museum/data=!4m5!3m4!1s0x3753f40c3b19f6eb:0xe0a6589460dde370!8m2!3d23.8344601!4d91.2800933"
            btnClass="show"
          />
          <Explore
            image={Rajbari}
            heading="Ujjayanta Palace"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://www.google.com/maps/place/Tripura+State+Museum/data=!4m5!3m4!1s0x3753f40c3b19f6eb:0xe0a6589460dde370!8m2!3d23.8344601!4d91.2800933"
            btnClass="show"
          />
          <Explore
            image={Rajbari}
            heading="Ujjayanta Palace"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            buttonText="Explore Location"
            url="https://www.google.com/maps/place/Tripura+State+Museum/data=!4m5!3m4!1s0x3753f40c3b19f6eb:0xe0a6589460dde370!8m2!3d23.8344601!4d91.2800933"
            btnClass="show"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WestTripura;
