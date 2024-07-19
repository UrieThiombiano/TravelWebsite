
import React,{useState} from 'react';
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar=()=>{
  //Gestion du navbar
  const [active,setActive]=useState("navBar");
  const showNavBar=()=>{
    setActive("navBar activeNavbar")
  }
  const removeNavBar=()=>{
    setActive("navBar")
  }
  

  return(
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className='logo'>
            <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
          </a>
        </div>
        
        <div className="toogleNavbar" onClick={showNavBar}>
              <TbGridDots className="icon"/>
        </div>

        <div className={active}>

          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
               <a href="#">BOOK NOW</a>
            </button>
          </ul>

            <div className="closeNavBar" onClick={removeNavBar}>
              <AiFillCloseCircle className="icon"/>
            </div>
           
        </div>

      </header>
    </section>
  )
}
export default Navbar;