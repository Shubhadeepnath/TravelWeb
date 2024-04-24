import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/rajbari.jpg";
import Trip2 from "../assets/JampuiHills.JPG";
import Trip3 from "../assets/Trishna.jpg";

function Trip() {
  return (
    <div className="trip">
      <h2>Plan your own journey</h2>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="West Tripura"
          text="Tripura Sundari Temple is a Hindu temple of the Goddess Tripura Sundari, better known locally as Devi Tripureshwari. The temple is situated in the ancient city of Udaipur, about 55 km from Agartala, Tripura and can be reached by train and road from Agartala. It is believed to be one of the holiest Hindu shrines in this part of the country and witnesses the highest number of visitors for a temple in North-East India, after Kamakhya Temple in Assam. The state of Tripura is named after this temple. Popularly known as Matabari, the shrine is set upon a small hillock that resembles the hump of a tortoise (Kurma). This shape called Kurmapṛṣṭhākṛti is considered the holiest possible site for a Shakti temple, hence also bestowing the name of Kurma Pīṭha.The Goddess is served by traditional Brahmin priests."
          buttonText="Explore More"
          url="/west-tripura"
          btnClass="show"
        />

        <TripData
          image={Trip2}
          heading="North Tripura"
          text="Tripura Sundari Temple is a Hindu temple of the Goddess Tripura Sundari, better known locally as Devi Tripureshwari. The temple is situated in the ancient city of Udaipur, about 55 km from Agartala, Tripura and can be reached by train and road from Agartala. It is believed to be one of the holiest Hindu shrines in this part of the country and witnesses the highest number of visitors for a temple in North-East India, after Kamakhya Temple in Assam. The state of Tripura is named after this temple. Popularly known as Matabari, the shrine is set upon a small hillock that resembles the hump of a tortoise (Kurma). This shape called Kurmapṛṣṭhākṛti is considered the holiest possible site for a Shakti temple, hence also bestowing the name of Kurma Pīṭha.The Goddess is served by traditional Brahmin priests."
          buttonText="Explore More"
          url="/north-tripura"
          btnClass="show"
        />

        <TripData
          image={Trip3}
          heading="South Tripura"
          text="Tripura Sundari Temple is a Hindu temple of the Goddess Tripura Sundari, better known locally as Devi Tripureshwari. The temple is situated in the ancient city of Udaipur, about 55 km from Agartala, Tripura and can be reached by train and road from Agartala. It is believed to be one of the holiest Hindu shrines in this part of the country and witnesses the highest number of visitors for a temple in North-East India, after Kamakhya Temple in Assam. The state of Tripura is named after this temple. Popularly known as Matabari, the shrine is set upon a small hillock that resembles the hump of a tortoise (Kurma). This shape called Kurmapṛṣṭhākṛti is considered the holiest possible site for a Shakti temple, hence also bestowing the name of Kurma Pīṭha.The Goddess is served by traditional Brahmin priests."
          buttonText="Explore More"
          url="/south-tripura"
          btnClass="show"
        />
      </div>
    </div>
  );
}

export default Trip;
