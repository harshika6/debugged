import React,{Component} from 'react';
import 'tachyons';
import AOS from 'aos';
import './icon.css';

const Homeicon=()=>
{
  AOS.init();
  return(
    <div className="main flex flex-column justify-center" id="homeicon">
    <div className="pa2 mb5 heading">
    <p data-aos="fade-down" data-aos-duration="1500" style={{fontFamily: 'Yusei Magic'}} className="f2 white">THE CREATIVE SIDE OF CODING</p>
    <p className="code f3"  data-aos="fade-down" data-aos-duration="1200" style={{fontFamily: 'Yusei Magic'}}>  PROVIDING CREATIVE SOLUTIONS</p>
    </div>

    <div>
    <p className="f3 letter startp" data-aos="fade-down" data-aos-duration="800">
    <div className="start">
    WEBSITES
    <span className="code " >|</span>
    </div>
    <div>
    MOBILE APPLICATIONS
    <span className="code" >|</span>
    </div>
    <div>
    DIGITAL MARKETING
    </div>
    </p>
    </div>
    </div>

  );
}

export default Homeicon;
// <div className=" home1 pa4">
// <div className=" mb3"  >
//  &nbsp;
//  <div data-aos="fade-down" data-aos-duration='1000' className="pa3 heading">

// <h3 className="code mt3">  PROVIDING CREATIVE SOLUTIONS</h3>
// </div>
// <div data-aos="zoom-out" data-aos-duration='1000'>

// </div>
// </div>
// </div>
