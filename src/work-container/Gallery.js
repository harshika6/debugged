import React,{Component,useState} from 'react';
import 'tachyons';
import {Gal} from './galleryimg';

function Gallery() {
   const[gal,setgal]=useState(Gal);
    return (
               <div className="flex flex-wrap">
               {
                  Gal.map((data)=>(
                  <div data-aos={data.dataaos} data-aos-duration={data.dataaosduration} className="ma3">
                       <a className="dim" href={data.link}>
                      <img src={data.image} height={data.height} width={data.width}/></a>
                    </div>
                  ))
                }
               </div>
        );
}

export default Gallery;
