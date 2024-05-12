import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Our Website</h2>
      <p className="about-description">
        Welcome to our business card sharing platform! Our website provides a
        convenient platform for users to register, login, and upload business
        cards to showcase their businesses to others.
      </p>
      <p className="about-description">
        Users can register for an account, securely log in, and then upload
        their business cards with relevant information about their businesses.
        These uploaded cards can then be viewed by other users who are
        interested in discovering new businesses and services.
      </p>
      <p className="about-description">
        Our goal is to create a community-driven platform where businesses can
        connect and network with each other. Whether you're a small startup or
        an established company, our website offers a space for you to showcase
        your business and reach a wider audience.
      </p>
      <p className="about-description">
        Thank you for choosing our platform. We hope you find it useful for
        promoting your business and discovering new opportunities!
      </p>
    </div>
  );
};

export default About;
