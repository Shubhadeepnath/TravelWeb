import Luxurystaysdata from "./Luxurystaysdata";
import "./Luxurystyles.css";
import Trip1 from "../assets/rajbari.jpg";
import Trip2 from "../assets/JampuiHills.JPG";
import Trip3 from "../assets/Trishna.jpg";

function Luxurystays() {
  return (
    <div className="luxury">
      <h2>Luxury Stays</h2>

      <div className="luxurycard">
        <Luxurystaysdata
          luxuryimage={Trip1}
          luxuryheading="Hotel Polo Towers "
          luxurybuttonText="Explore"
          luxuryurl="https://www.hotelpolotowers.com/hotel-polo-towers-agartala/"
          luxurybtnClass="show"
        />
        <Luxurystaysdata
          luxuryimage={Trip1}
          luxuryheading="Narkel Kunja Resort"
          luxurybuttonText="Explore"
          luxuryurl="https://www.goibibo.com/hotels/narkel-kunja-resort-hotel-in-kamalpur-2133086790562129770/"
          luxurybtnClass="show"
        />
        <Luxurystaysdata
          luxuryimage={Trip1}
          luxuryheading="Lake Side Resort Neermahal"
          luxurybuttonText="Explore"
          luxuryurl="https://www.hotelpolotowers.com/lake-side-resort-neermahal/"
          luxurybtnClass="show"
        />

        <Luxurystaysdata
          luxuryimage={Trip1}
          luxuryheading="The Parkline Hotel"
          luxurybuttonText="Explore"
          luxuryurl="https://www.goibibo.com/hotels/the-parkline-hotel-in-agartala-296927569037228902/"
          luxurybtnClass="show"
        />
      </div>
    </div>
  );
}
export default Luxurystays;
