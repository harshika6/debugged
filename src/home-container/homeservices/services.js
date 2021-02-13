import React,{Component} from 'react';
import 'tachyons';
import { BiMobile ,BiLaptop} from "react-icons/bi";
import './services.scss';

const Service=()=>
{
  return(
    <div className="flex flex-column items-center">
       <p className="mt4 mb4 center serv white" style={{fontFamily: 'Yusei Magic'}}>Our <span className="code" style={{fontFamily: 'Yusei Magic'}}>services</span>.</p>
       <div className="ma3 pa2 tl w-50">
         <div className=" serv1 white" data-aos="fade-right" data-aos-duration="800"><BiMobile size="2em" color="#e88f0a"/>Android/iOS Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f5 desc pa2">Lorem ipsum olalalalaolaloalaolallallalla</div>
       </div>
       <div  className="ma3 pa2  tl w-50">
         <div className=" serv1 white" data-aos="fade-right" data-aos-duration="800"><BiMobile size="2em" color="#e88f0a"/>Android/iOS Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f5 desc pa2">Lorem ipsum</div>
       </div>
       <div className="ma3 pa2 tl w-50">
         <div className=" serv1 white" data-aos="fade-right" data-aos-duration="800"><BiMobile size="2em" color="#e88f0a"/>Android/iOS Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f5 desc pa2">Lorem ipsum</div>
       </div>
       <div className="ma3 pa2 tl w-50">
         <div className="  serv1 white" data-aos="fade-right" data-aos-duration="800"><BiMobile size="2em" color="#e88f0a"/>Android/iOS Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f5 desc pa2">Lorem ipsum</div>
       </div>
       <div className="ma3 pa2 tl w-50">
         <div className="   serv1 white" data-aos="fade-right" data-aos-duration="800"><BiMobile size="2em" color="#e88f0a"/>Android/iOS Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f5 desc pa2">Lorem ipsum</div>
       </div>
       <div className="ma3 pa2 tl w-50">
         <div className= " serv1 white" data-aos="fade-right" data-aos-duration="800"><BiMobile size="2em" color="#e88f0a"/>Android/iOS Development</div>
         <div className="bb bw1 center mt3" ></div>
         <div className="f5 desc pa2">Lorem ipsum</div>
       </div>
    </div>

  );
}
export default Service;
