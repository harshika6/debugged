import React,{Component,useState,useEffect} from 'react';
import 'tachyons';
// import {Gal} from './galleryimg';

function Gallery() {
   const[gal,setgal]=useState([]);

   useEffect(()=>{
     fetch('http://localhost:3000/digital')
     .then(response=>response.json())
     .then(resp=>{
       if(resp[0].title){
         setgal(resp);
         console.log(resp.length,"gal");
       }
     })
     .catch(err => {
      console.log(err)
      alert('OOPS....something went wrong.Please try again.')
    })
   },[]);

   
    return (
               <div className="flex flex-wrap">
               {
                  gal.map((data)=>(
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
