import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/1.jpg';
import banner2 from '../../../images/banner/2.jpg';
import banner3 from '../../../images/banner/3.jpg';


const Banner = () => {
    return (
        <>
            <Carousel className='container'>
  <Carousel.Item>
    <img  style={{width:"640px",height:"460px"}}
      className="d-block w-100 h-40"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:"640px",height:"460px"}} 
      className="d-block w-100 h-40"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>cational education helped large numbers of young Americans decide whether to become mechanics</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  style={{width:"640px",height:"460px"}}
      className="d-block w-100 h-40"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;