import React from 'react';
import img1 from '../assets/second-banner2.avif';
import img2 from '../assets/banner.avif';
import img3 from '../assets/bedrrom.avif';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>


    
      
    <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-75 " 
              src={img1}
              alt="First slide" id='cimg'
              style={{height:'70vh'}}
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src={img2}
              alt="Second slide" id='cimg'
              
            />
           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-75"
              src={img3}
              alt="Third slide" id='cimg'
              
            />
            
          </Carousel.Item>
        </Carousel>
     
    
    
    
        </div>
  )
}

export default Slider