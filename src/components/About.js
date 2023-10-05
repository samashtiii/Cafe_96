import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes us special?</h3>
            <p>
            Welcome to Cafe 96, a beloved establishment nestled
            within the heart of MNNIT campus, proudly sponsored by the dynamic 1996 batch.
            With a rich history dating back to our inception, 
            we've been serving up delectable brews and bites, 
            fostering a warm community atmosphere for over two decades.
            </p>
            <p>
            Join us in celebrating the spirit of camaraderie 
            and good taste that define Cafe 96.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
