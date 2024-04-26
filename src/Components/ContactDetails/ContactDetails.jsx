import React from "react";
import "./ContactDetails.css";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function ContactDetails() {
  return (
    <div className="contactdetails">
      <h6>CONTACT US</h6>
      <div className="main-bx">
        <div className="details-left">
          <div className="item">
            <div className="top">
              <IoCallOutline />
              <span>Call Us</span>
            </div>
            <p>+966 509 063 068, +966 4269 1118</p>
          </div>
          <div className="item">
            <div className="top">
              <CiMail />
              <span>E-Mail</span>
            </div>
            <p>info@baraaservices.com, visa@baraaservices.com </p>
          </div>
          <div className="item">
            <div className="top">
              <CiLocationOn />
              <span>Locate Us</span>
            </div>
            <p>Opp. Shira Lulu Mall, Dammam, Gate No. 1</p>
          </div>
        </div>
        <form action="">
          <div className="top">
            <div className="box">
              <label htmlFor="">First Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="nameee"
              />
            </div>
            <div className="box">
              <label htmlFor="">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="namee"
              />
            </div>
          </div>
          <label htmlFor="">Email:</label>
          <input type="mail" placeholder="Enter Your Mail" className="msg" />
          <label htmlFor="">Phone Number:</label>
          <input
            type="number"
            placeholder="Enter Your Number"
            className="msg"
          />
          <label htmlFor="">Message</label>
          <input type="text" placeholder="Type your Message" className="msg" />
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
