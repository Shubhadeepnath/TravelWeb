import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Slickalsocheckstyles.css";

function Slickcarouseldata(props) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={props.image} alt="image" />
      </div>
      <div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>

      <Link
        className={props.btnClass}
        to={props.url}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <FontAwesomeIcon icon={faLocationDot} />
        &nbsp;&nbsp;&nbsp;
        {props.buttonText}
      </Link>
    </div>
  );
}

export default Slickcarouseldata;
