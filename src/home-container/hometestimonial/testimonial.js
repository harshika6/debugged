import React,{Component,useState} from 'react';
import 'tachyons';
import AOS from 'aos';
import {Carousel} from 'react-bootstrap';
import {Testies} from './testimonialnames';


const Test=()=>
{
  const[tests,setTest]=useState(Testies);

return(
<div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="1000">
  <p style={{fontFamily: 'Yusei Magic'}} className="white serv">Our <span className="code mb6 mt4" style={{fontFamily: 'Yusei Magic'}}>testimonials</span>.</p>
  <Carousel className="mt2" >
{
    tests.map((test)=>(

   <Carousel.Item className="pa5" >
    <img
      className="d-block w-100"
      src={test.photo}
      alt="First slide"
      className="test"
    />
    <p className="mt3 serv1 white" style={{fontFamily: 'Yusei Magic'}}>{test.name}</p>
    <p style={{fontFamily: 'Yusei Magic'}}>{test.description}</p>
  <p>{test.date}</p>
  </Carousel.Item>
))
}
</Carousel>
</div>
);
}
export default Test;
