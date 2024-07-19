import React,{useEffect} from 'react';
import './footer.css'
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer=()=>{

       //For scroll behavior
useEffect(
    ()=>{
       Aos.init({duration: 2000})
    },[]
 )
 
return(
    <section className='footer'>

        <div className="videoDiv">
            <video src="./video2.mp4" muted autoPlay loop type='video/mp4' ></video>
        </div>

        <div className="secContent container">

            <div className="contactDiv flex">

                <div className="text" data-aos='fade-up'>
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us </h2>
                </div>

                <div className="inputDiv flex">
                    <input data-aos='fade-up' type="email" placeholder='Enter your mail address'/>
                    <button data-aos='fade-up' className='btn flex' type='submit'>
                       SEND <FiSend className='icon'/>
                    </button>
                </div>
                
            </div>
            <div className="footerCard flex">

                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="" className="logo flex">
                            <MdOutlineTravelExplore className='icon'/>Travel.
                        </a>
                    </div>
                    <div data-aos='fade-up' className="paragraphDiv">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iusto sapiente at delectus aspernatur qui reprehenderit repellat expedita suscipit laborum,
                     porro voluptatibus est quae. Aperiam ipsa voluptas enim soluta quis!
                    </div>
                    <div data-aos='fade-up' className="footerSocials flex">
                        <AiOutlineTwitter className='icon'/>
                        <AiFillYoutube className='icon'/>
                        <AiFillInstagram className='icon'/>
                        <FaTripadvisor className='icon'/>
                    </div>
                </div>
                
                <div className="footerLinks grid">
                    <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Services
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Insurance
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Agency
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Tourism
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Payment
                        </li>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                        <span className="groupTitle">
                            PATNERS
                        </span>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Bookings
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Rentcars
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            HosteWorld
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Trivago
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            TripAdvisor
                        </li>
                    </div>

                    <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Ouagadougou
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Abidjan
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Paris
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            Tunis
                        </li>
                        <li className="footerList">
                            <FiChevronRight className='icon'/>
                            California
                        </li>
                    </div>
                </div>

                <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME </small>
                    <small>COPYRIGHTS RESERVED - Urie THIOMBIANO {new Date().getFullYear()} </small>
                </div>

            </div>
            
        </div>

    </section>

)
}
export default Footer;