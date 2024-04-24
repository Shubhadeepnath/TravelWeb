import Slickalsocheckoutdata from "./Slickalsocheckoutdata";
import Hotel1 from "../assets/geetanjaliguest.jpg";
import Trip2 from "../assets/JampuiHills.JPG";
import Trip3 from "../assets/Trishna.jpg";

import "./Slickcarouselstyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Slickalsocheckout() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="CheckSlick">
     
        <h1>Also Checkout</h1>
        <p>The flavours of Tripura</p>
      

      <Slider {...settings}>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="Aquilaria Clubhouse"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/oMVvp5LzYb8q6VNx5"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="HML Roof Top Restaurant"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/7AVN9oePhCsNXwFh6"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="KFC"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/VpMJqjVGWXpUz7ib8"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="Grill Nation"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/1LWjMk6RZhqkanf66"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="THE PARKLINE CLASSIC"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/YK3nT7Mqa1199pS9A"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="1&Only Restaurant & Cafe"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/QARzm7wjN6NRLnbF7"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="Green Hub"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/zJY3tpAaPv1GhRwu9"
            checkbtnClass="show"
          />
        </div>

        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="Sherowali Sweets"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/qjKimGzEo3RS2JJj6"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="GIGS music cafe & studio"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/VuJk5EZsapMaqjLu9"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="SHEROWALI BHOJ"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/YWVgz6ignuwC9LQq5"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="BONSAI"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/GFFetEbZLuaaTFXj9"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="Eatopia Zannat "
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/U5PzgZAwqf1sD4qg6"
            checkbtnClass="show"
          />
        </div>
        <div className="CheckSlickcard">
          <Slickalsocheckoutdata
            checkimage={Hotel1}
            checkheading="Abhishek Restaurant"
            checkbuttonText="Explore Spot"
            checkurl="https://maps.app.goo.gl/utvwtY2jJwRir6fr5"
            checkbtnClass="show"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slickalsocheckout;
