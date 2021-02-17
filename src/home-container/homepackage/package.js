import React,{Component} from 'react';
import 'tachyons';
import AOS from 'aos';
import "tailwindcss/tailwind.css";
import './package.css';

const Package=()=>
{
  AOS.init();
  return(
    <div className="mt1 " data-aos="slide-up" data-aos-duration="1300">
    <p className="serv white"> Our <span className="code" style={{fontFamily: 'Yusei Magic'}}>Packages</span> </p>

    <div className=" mt4 packdiv">

       <div className="div1 ma4 pa2 shadow-2 black flex flex-column ">
       <h3 className="white mt4 serv2">Domain + Website</h3>
       <h4 className="white">  (Static)</h4>
       <h5 className="white mt4"> ₹ 3999+</h5>
       <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb1"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
      </div>

      <div className="div1 ma4 pa2 shadow-2 black flex flex-column">
      <h3 className="white mt4 serv2">Domain + Website</h3>
      <h4 className="white">  (Dynamic)</h4>
      <h5 className="white mt4"> ₹ 5999+</h5>
      <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb1"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
     </div>

       <div className="div1 ma4 pa2 shadow-2 black flex flex-column">
       <h3 className="white mt4 serv2"> Website</h3>
       <h4 className="white">  (Static)</h4>
       <h5 className="white mt4"> ₹ 1999+</h5>
       <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb1"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
      </div>

      <div className="div1 ma4 pa2 shadow-2 black flex flex-column">
      <h3 className="white mt4 serv2">Website</h3>
      <h4 className="white">(Dynamic)</h4>
      <h5 className="white mt4"> ₹ 4499+</h5>
      <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb1"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
     </div>

     <div className="div1 ma4 pa2 shadow-2 black flex flex-column">
     <h3 className="white mt4 serv2">Basic Mobile App</h3>
     <h5 className="white mt4"> ₹ 3499+</h5>
     <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb1"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
    </div>

      <div className="div1 ma4 pa2 shadow-2 black flex flex-column">
      <h3 className="white mt4 serv2">Dynamic Apps</h3>
      <h5 className="white mt4"> ₹ 4999+</h5>
      <button className=" book items-center px-4 py-2 mx-auto mt-auto grow br2 mb1"><a href="https://wa.me/919168894490" style={{textDecoration:'none',color:'white'}}>Book</a></button>
     </div>

       </div>
    </div>
  );
}

export default Package;
