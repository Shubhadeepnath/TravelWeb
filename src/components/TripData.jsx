import { Link } from "react-router-dom";
import "./TripStyle.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>

      <Link
        className={props.btnClass}
        to={props.url}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        {props.buttonText}
      </Link>
    </div>
  );
}

export default TripData;
