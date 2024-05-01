import React from "react";
import "./Review.css";
import { assets } from "../../Assets/Assets";

function Review() {
  return (
    <div className="review">
      <div className="top-review">
        <div className="left-review">
          <h4>Testimonial</h4>
          <h5>Customers Review</h5>
          <div className="valuation">
            <div className="total">
              <h6>Total Reviews</h6>
              <div className="amout">
                <p>50</p>
                <span>24%</span>
              </div>
            </div>
            <div className="rating">
              <h6>Average Rating</h6>
              <div className="amout-rate">
                <p>4.5</p>
                <img src={assets.Rating} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-review">
          <img src={assets.ReviewImg} alt="" />
        </div>
      </div>
      <div className="bottom-review">
        <div className="item">
          <div className="info">
            <div className="info-details">
              <div className="in-img">
                <img src={assets.Ibrahim} alt="" />
              </div>
              <div className="info-name">
                <h4>Mhd. Ibrahim</h4>
                <h5>CHIEF EXECUTIVE OFFICER</h5>
                <span>AL RUQEE GROUP</span>
                <small>24-10-2022</small>
              </div>
            </div>
          </div>
          <div className="details">
            <h4>Results-Driven Approach</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="like">
            <img src={assets.like} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="info">
            <div className="info-details">
              <div className="in-img">
                <img src={assets.Jameel} alt="" />
              </div>
              <div className="info-name">
                <h4>Abdullah Jameel</h4>
                <h5>Business Owner</h5>
                <span>SAUDI CABIN</span>
                <small>24-10-2022</small>
              </div>
            </div>
          </div>
          <div className="details">
            <h4>Innovative Strategies</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="like">
            <img src={assets.like} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="info">
            <div className="info-details">
              <div className="in-img">
                <img src={assets.Khalid} alt="" />
              </div>
              <div className="info-name">
                <h4>Khalid Waleed</h4>
                <h5>E-commerce Manager</h5>
                <span>SEMAKA GROUP</span>
                <small>24-10-2022</small>
              </div>
            </div>
          </div>
          <div className="details">
            <h4>Expertise in New Business setup </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="like">
            <img src={assets.like} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
