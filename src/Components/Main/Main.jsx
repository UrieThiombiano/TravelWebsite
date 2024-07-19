import './main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import React,{useEffect} from 'react'
//For scroll animations
import Aos from'aos';
import 'aos/dist/aos.css'

const Main=()=>{

   const Data=[
      {
         id:1,
         imgsrc:"./img1.jpg",
         destTitle:"Ouagadougou",
         location:"Burkina Faso",
         grade:"CULTURAL RELAX",
         fees:'$700',
         description:"The option of relaxation, Ouagadougou is one of the best travel destination in the World.Anyway, this is according to me !"
      },
      {
         id:2,
         imgsrc:"./img2.jpg",
         destTitle:"Abidjan",
         location:"Cote d'Ivoire",
         grade:"CULTURAL RELAX",
         fees:'$700',
         description:"The option of relaxation, Abidjan is one of the best travel destination in the World.Anyway, this is according to me !"
      },
      {
         id:3,
         imgsrc:"./img3.jpg",
         destTitle:"Tunis",
         location:"Tunisie",
         grade:"CULTURAL RELAX",
         fees:'$700',
         description:"The option of relaxation, Tunisia is one of the best travel destination in the World.Anyway, this is according to me !"
      },
      {
         id:4,
         imgsrc:"./img4.jpg",
         destTitle:"Casablanca",
         location:"Maroc",
         grade:"Romance",
         fees:'$900',
         description:"The option of relaxation, Casablanca is one of the best travel destination in the World.Anyway, this is according to me !"
      },
      {
         id:5,
         imgsrc:"./img5.jpg",
         destTitle:"Paris",
         location:"France",
         grade:"Romance",
         fees:'$900',
         description:"The option of relaxation, Paris is one of the best travel destination in the World.Anyway, this is according to me !"
      },
   ]

   //For scroll behavior
useEffect(
   ()=>{
      Aos.init({duration: 2000})
   },[]
)

 return(
   
   <section className="main container section">

      <div className="secTitle" data-aos='fade-right'>
         <h3 className='title'>Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
         {
            Data.map(
               ({id,imgsrc,destTitle,location,grade,fees,description})=>(

                  <div className="singleDestination" key={id} data-aos='fade-up' >

                     <div className="imgDiv">
                        <img src={imgsrc} alt={destTitle} />
                     </div>

                     <div className="cardinfo">

                        <h4 className="destTitle"> {destTitle} </h4>
                        <span className="continent flex">
                           <HiOutlineLocationMarker className='icon'/>
                           <span className='name'> {location} </span>
                        </span>
                        
                        <div className="fees flex">
                           <div className="grade">
                              <span> {grade} <small>+1</small> </span>
                              <div className="price">
                                 <h5> {fees} </h5>
                              </div>
                           </div>
                        </div>

                        <div className="desc">
                           <p>{description}</p> 
                         </div>

                         <button className="btn flex">
                              DETAILS <HiOutlineClipboardCheck className='icon'/>
                         </button>
                         
                     </div>

                  </div>)
               
                  
               
            )
         }
      </div>

   </section>
 )
}
export default Main;