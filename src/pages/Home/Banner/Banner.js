import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel className="container">
        <Carousel.Item>
          <img
            style={{ width: "640px", height: "460px" }}
            className="d-block w-100 h-40"
            src={"https://i.ibb.co/Ms7WhGd/6.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "640px", height: "460px" }}
            className="d-block w-100 h-40"
            src={"https://i.ibb.co/TPJ9PsX/1.jpg"}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              cational education helped large numbers of young Americans decide
              whether to become mechanics
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "640px", height: "460px" }}
            className="d-block w-100 h-40"
            src={"https://i.ibb.co/tLWQv9s/2.jpg"}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
