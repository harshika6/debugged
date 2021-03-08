import React,{Component,useState,useEffect} from 'react';
import './work.css';
import 'tachyons';
// import Gallery from './Gallery.js';
import {BsChevronDoubleDown } from "react-icons/bs";
import AOS from 'aos';
// import { WorkCompleted } from './workcompleted.js';
// import { UpcomingProjects } from './upcomingprojects.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel'



const Work =()=> {

  AOS.init();
  const[items,setItems]=useState([]);
  const[upcoming,setUpcoming]=useState([]);
  const [visible,setVisible]=useState(3);
  const [len,setLen]=useState(0);
  const[gal,setGal]=useState([]);

   useEffect(()=>{
     fetch('https://fierce-wave-93667.herokuapp.com/completed')
     .then(response=>response.json())
     .then(resp=>{
       if(resp[0].title){
         setItems(resp);
         setLen(resp.length);
         console.log(resp.length);
       }
     })
     .catch(err => {
 			console.log(err)
 			alert('OOPS....something went wrong.Please try again.')
 		})

    fetch('https://fierce-wave-93667.herokuapp.com/digital')
    .then(response=>response.json())
    .then(resp=>{
      if(resp[0]._id){
        setGal(resp);
        console.log(resp.length,"gal");
      }
    })
    .catch(err => {
     console.log(err)
     alert('OOPS....something went wrong.Please try again.')
   })

   fetch('https://fierce-wave-93667.herokuapp.com/upcoming')
   .then(response=>response.json())
   .then(resp=>{
     if(resp[0].title){
       setUpcoming(resp);
       console.log(resp.length);
     }
   })
   .catch(err => {
    console.log(err)
    alert('OOPS....something went wrong.Please try again.')
  })
  },[])


const showMoreItems=()=>
  {
    setVisible((prev)=>prev+3);
  }
   return (
     <>
     <span id="projcomp"></span>
    <div className="home2" >
        <div className="mt4" >
          <p className="pro ml4 white" data-aos="fade-up" data-aos-duration="1500" style={{fontFamily: 'Yusei Magic'}}> Projects Completed</p>
            <div className="bb bw2 left line "></div>
              <div className="proout ">
              {
                items.slice(0,visible).map((data)=>
                  (
                    <div>
                      <div className="comp" data-aos="fade-left" data-aos-duration="2000">
                           <Carousel itemsToShow={1}>
                             <img src={data.image1} alt="project sharva" className=" imgdiv"/>
                             <img src={data.image2} alt="project sharva" className="imgdiv"/>
                             <img src={data.image3} alt="project sharva"  className="imgdiv"/>
                           </Carousel>
                                   <div className="flex flex-column items-center" style={{width:'100vw'}}data-aos="fade-left" data-aos-duration="1000">
                                    <p  className="pro tc white" style={{fontFamily: 'Yusei Magic'}}> {data.title}</p>
                                    <p>{data.description}</p>
                                    <a href={data.link}><button className=" book grow br2 mb1" >View webiste</button></a>
                                   </div>
                                 </div>
                      <div className="bt differline mt3 mb3 center"></div>
                  </div>
                  )
                )
              }

              <h5 onClick={showMoreItems} className={`center showmore mt5 ${visible>=len?'hide':''}`}>Show More</h5>
              <BsChevronDoubleDown className={`arrowdown code ${visible>=len?'hide':''}`} size="2rem"/>


               <div className="mt5">
                 <p className="pro white ml3" data-aos="fade-up" data-aos-duration="1500" style={{fontFamily: 'Yusei Magic'}}>Our digital marketing</p>
                 <div className="bb bw2 left line mb4"></div>
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
              </div>


               <div className="mt5">
                 <p className="pro white ml3" data-aos="fade-up" data-aos-duration="1500" style={{fontFamily: 'Yusei Magic'}}> Upcoming Completed</p>
                 <div className="bb bw2 left line"></div>

                 <Carousel className="mt5 center" style={{width:'100%',height:'100%'}}>
                 {
                   upcoming.map((project)=>
                   (
                     <div className="proj br bl bw1 code">
                       <p className="mt5 proup white fw5" style={{fontFamily: 'Yusei Magic'}}>{project.title.toUpperCase()}</p>
                       <div className="bb center mt4 upcomingline"></div>
                       <p className="updes">{project.description}</p>
                    </div>
                   ))
                 }
                </Carousel>
               </div>
           </div>
         </div>

             <footer className="footer mt6">developed by debugged.exe</footer>
             <footer  className="footer">websites | mobile applications | digital marketing</footer>

        </div>
      </>
      );
    };
export default Work;
