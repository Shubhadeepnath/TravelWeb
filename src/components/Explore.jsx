import "./ExploreStyle.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Explore(props) {
  return (
    <div className="e-card">
      <div className="e-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>

      <Link
        className={props.btnClass}
        to={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLocationDot} />
        &nbsp;&nbsp;&nbsp;
        {props.buttonText}
      </Link>
    </div>
  );
}

export default Explore;
