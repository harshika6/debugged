import React,{Component} from 'react';
import './home.css';
import 'tachyons';
import App1 from './faqfun';
import {Parallax} from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiMobile ,BiLaptop} from "react-icons/bi";
// import logo from './debuggedlogo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import image1 from '.././testimonials/1.png';
import image2 from '.././testimonials/2.png';
import image3 from '.././testimonials/3.png';
import parallaximg from './parallaximg.png';
import Test from './hometestimonial/testimonial.js';
import Services from './homeservices/services.js';
import Homeicon from './homeiconpage/Homeicon.js'
import Package from './homepackage/package.js'

class Home extends Component {
  constructor() {
    super();
  }

  render(){
    AOS.init();
    return (
      <div className="Home"  style={{backgroundcolor:'black'}}>
         <Homeicon/>
         <div  className="mt3" data-aos="zoom-out" data-aos-duration='1000'>
         </div>
      <Services/>
      &nbsp;
      <Package/>
      &nbsp;
      <Test/>

   <span className="pa5-l"  id="about"></span>
     <Parallax bgImage={parallaximg} strength={500} className="parallax">
      <div>
        <h1 className="code ma3 mt5" style={{fontFamily: 'Yusei Magic'}}>About Us</h1>
        <p className="pa5 white" style={{fontFamily: 'Yusei Magic'}}> We have been hands on various projects together and Abhishek is one of the best people I had as a patner,
        He has strong problem solving skills and his ability for tackling problems is remarkable!
        We have been hands on various projects together and Abhishek is one of the best people I had as a patner,
        He has strong problem solving skills and his ability for tackling problems is remarkable!</p>
      </div>
    </Parallax>

      <div class="ques mt5" data-aos="flip-left" data-aos-delay="400" data-aos-duration="1000">
       <p className="serv white" style={{fontFamily: 'Yusei Magic'}}>Any Questions</p>
       <p className="serv"><span className="code" style={{fontFamily: 'Yusei Magic'}}>FAQ</span></p>
       &nbsp;
       &nbsp;
       <div class="ques1">
         <App1/>
      </div>
      </div>

      <footer className="footer mt6">developed by debugged.exe</footer>
      <footer  className="footer">websites | mobile applications | digital marketing</footer>
      </div>
    );
  }
}
export default Home;
