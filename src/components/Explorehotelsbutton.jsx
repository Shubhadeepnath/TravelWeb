import { Link } from "react-router-dom";
import "./Explorehotelsbutton.css";
function Explorehotelsbutton() {
  return (
    <div className="explorehotels">
      <button className="btnclass4">
        <Link className="explore-links" to="https://www.goibibo.com/hotels/hotels-in-agartala-ct/">
          <h4>Explore More Hotels</h4>
        </Link>
      </button>
    </div>
  );
}
export default Explorehotelsbutton;
