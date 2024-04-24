import Neermahal1 from "../assets/neermahal.jpg";
import Neermahal2 from "../assets/neermahal2.jpg";
import Unakoti1 from "../assets/unakoti.jpg";
import Unakoti2 from "../assets//unakoti2.jpg";
import Jampui1 from "../assets/jampui.jpeg";
import Jampui2 from "../assets/jampui2.jpeg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Spots</h1>
      <h2>
        A tour can broaden one's perspectives and enrich their life experiences
      </h2>
      <DestinationData
        className="firstDestination"
        heading="Neermahal, Sepahijala"
        text="Neermahal also known as Twijilikma Nuyung ( Literally: 'Water Palace' ) is a former royal palace of Tripura Kingdom, built by Maharaja Bir Bikram Kishore Manikya bahadur in 1930. It is also the largest water palace in India. The palace is situated in the middle of Rudrasagar Lake ( Twijilikma ), in Melaghar 53 kilometers away from Agartala, the capital of Tripura.The 'lake palace' of Tripura, Neer-Mahal was constructed as a summer residence of the royal family. Maharaja Bir Bikram Kishore Manikya Debbarma, of the 'Manikya Dynasty', which is supposed to be the second longest remaining dynasty in the world today built this palace in 1921."
        img1={Neermahal1}
        img2={Neermahal2}
      />

      <DestinationData
        className="firstDestination-reverse"
        heading="Unakoti, Kailasahar"
        text="Unakoti famously known as Angkor Wat of the North-East,[1] is a sculptural emblem and ancient Shaivite place that hosts rock carvings, figures and images of gods and goddesses. It is a place of worship with huge rock reliefs celebrating Shiva. Unakoti literally means 'one less than one crore' or 'koti' in Hindi. In the local Kokborok language, it is called Subrai Khung. It was put on the UNESCO world heritage site tentative list in 2022. It is the prime tourist spot of Unakoti District, in the Kailashahar Subdivision of the North-eastern Indian state of Tripura.

            In the name of Cambodia's Angkor Wat temple, Unakoti is called 'Angkor Wat of the North-East'. Its sculptures are carved on a hill of the Raghunandan hills of Tripura. It is known that there are ninety-nine lakh ninety-nine thousand nine hundred and ninety-nine (99,99,999) idols found here."
        img1={Unakoti1}
        img2={Unakoti2}
      />

      <DestinationData
        className="firstDestination"
        heading="Jampui Hills, North Tripura"
        text="Jampui Hills is a part of the Mizo hills (Lushai Hills) range located in the North Tripura district in the north eastern part of the Indian state of Tripura. The average altitude of the hill range is approximately 1000 metres above sea level.The Jampui Hills stretch from North to South and are bordering the state Mizoram in the east.930 m high Betalongchhip, also known as Betlingchhip, Balinchhip and Thaidawr, is the highest point in Tripura."
        img1={Jampui1}
        img2={Jampui2}
      />
    </div>
  );
};

export default Destination;
