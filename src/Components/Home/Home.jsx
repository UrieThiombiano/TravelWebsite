import React,{useEffect} from 'react';
import './home.css'
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

//For scroll animations
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home=()=>{
//Effect for scroll animations

useEffect(
  ()=>{
    Aos.init({duration:2000})
  },[]
)

  return(
   <section className="home">
    <div className="overlay"></div>
    <video src="./travel.mp4" muted autoPlay loop type='video/mp4' ></video>

    <div className="homeContain container">
      <div className="textDiv">

        <span className="smallText" data-aos='fade-up' >
          Ours Packages
        </span>
        <h1 className="homeTitle" data-aos='fade-up' >
          Search your Holiday
        </h1>

      </div>

    <div data-aos='fade-up' className="cardDiv grid">

        <div className="destinationIput">
          <label htmlFor="city">Search your
            destination : </label>
            <div className="input flex">
              <input type="text" name="city" id="city" placeholder='Enter name here' />
              <GrLocation className='icon'/>
            </div>
        </div>

        <div className="dateIput">
          <label htmlFor="date">Search your
            date: </label>
            <div className="input flex">
              <input type="date" name="date" id="date"/>
            </div>
        </div>

        <div className="priceIput">
          <div className="label_total flex">
            <label htmlFor="price">Max price :</label>
            <h3 className='total'>$5000</h3>
          </div>
          <div className="input flex">
            <input type="range" max="5000" min="1000" />
          </div>
        </div>

        <div className="searchOptions flex">
          <HiFilter className='icon'/>
          <span>MORE FILTERS</span>
        </div>
    </div>

    <div data-aos='fade-up' className="homeFooterIcons flex">
      <div className="rightIcons">
        <FiFacebook className='icon'/>
        <AiOutlineInstagram className='icon'/>
        <FaTripadvisor className='icon'/>
      </div>
      <div className="leftIcons">
        <BsListTask className='icon'/>
        <TbApps className='icon'/>
      </div>
    </div>

    </div>
   </section>
  )
}
export default Home;