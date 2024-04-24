import "./Luxurystyles.css";
import { Link } from "react-router-dom";

function Luxurystaysdata(props) {
  return (
    <div className="l-card">
      <div className="l-image">
        <img src={props.luxuryimage} alt="imagel" />
      </div>
      <h4>{props.luxuryheading}</h4>
      <p>{props.luxurytext}</p>

      <Link
        className={props.luxurybtnClass}
        to={props.luxuryurl}
        onClick={() => {}}
      >
        {props.luxurybuttonText}
      </Link>
    </div>
  );
}
export default Luxurystaysdata;
