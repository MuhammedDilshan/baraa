import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ContactSpotlight from "../../Components/ContactSpotlight/ContactSpotlight";
import Help from "../../Components/Help/Help";
import ContactDetails from "../../Components/ContactDetails/ContactDetails";

function Contact() {
  return (
    <div>
      <Header />
      <ContactSpotlight />
      <ContactDetails />
      <Help />
      <Footer />
    </div>
  );
}

export default Contact;
