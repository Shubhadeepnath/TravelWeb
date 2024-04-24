import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Slickalsocheckstyles.css";

function Slickalsocheckoutdata(props) {
  return (
    <div className="c-card">
      <div className="c-image">
        <img src={props.checkimage} alt="image" />
      </div>
      <div>
        <h4>{props.checkheading}</h4>
        <p>{props.checktext}</p>
      </div>

      <Link
        className={props.checkbtnClass}
        to={props.checkurl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLocationDot} />
        &nbsp;&nbsp;&nbsp;
        {props.checkbuttonText}
      </Link>
    </div>
  );
}

export default Slickalsocheckoutdata;
