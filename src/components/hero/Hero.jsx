import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./hero.css";

const Hero = () => {
  return (
    <div className="heroWrapper  ">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/10002144/pexels-photo-10002144.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="First slide"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)]" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/12909623/pexels-photo-12909623.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Second slide"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)]" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/12334433/pexels-photo-12334433.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/6344238/pexels-photo-6344238.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)]" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
