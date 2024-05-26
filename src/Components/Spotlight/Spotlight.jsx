import React from "react";
import "./Spotlight.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Spotlight() {
  var settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    accessibility: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="spotlight">
          <div className="content">
            <h3>Our Experts simplifies</h3>
            <h4>Your Documentation Requirements</h4>
            <button>
              <Link to="/service">
                Services <FaArrowDown />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="spotlight two">
          <div className="content">
            <h3>Documenting Dreams </h3>
            <h4>Translating Visions</h4>
            <button>
              <Link to="/about">
                About Us <FaArrowDown />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="spotlight three">
          <div className="content">
            <h3>Baraa Offers Outstanding Solutions</h3>
            <h4>
              We promise to give excellent business solutions using our
              expertise and innovation so that our clients can do well in
              changing environments
            </h4>
            <button>
              <Link to="/contact">
                Contact Us <FaArrowDown />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="spotlight">
          <div className="content">
            <h3>Our Experts simplifies</h3>
            <h4>Your Documentation Requirements</h4>
            <button>
              Services <FaArrowDown />
            </button>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Spotlight;
