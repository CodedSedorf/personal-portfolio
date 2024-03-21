import React from 'react'
import "../Services/Services.css";
import heartEmoji from "../../assets/img/heartemoji.png";
import glasses from "../../assets/img/glasses.png";
import humble from "../../assets/img/humble.png";
import Cards from '../Card/Cards';
import resume from "../../assets/Curriculum_Vitae.pdf"


const Services = () => {
  return (
    <div className='services'>
        {/* {left side} */}
        <div className="awesome">
          <span className='font-primary'>My Awesome</span>
          <span className='font-primary'>services</span>
          <span className='font-primary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, amet!
          </span>
          <a href={resume} download>
          <button className='button s-button text-center font-primary'>Download CV</button>
          </a>
          <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
        </div>
        
        
        {/* {right side} */}
        <div className="cards">
          <div style={{left: "14rem"}}>
            <Cards
            emoji = {heartEmoji}
            heading={"Frontend Development"}
            detail ={"Designing and developing responsive user interfaces (UI) for web applications."}
            /> 
          </div>
          <div style={{top: "14rem"}}>
            <Cards
            emoji = {glasses}
            heading={"Backend Development"}
            detail ={"Building and configuring server-side applications and APIs to handle data processing, business logic, and interaction with databases."}
            /> 
          </div>
          <div style={{left: "28rem", top: "14rem"}}>
            <Cards
            emoji = {humble}
            heading={"Database Management"}
            detail ={"Designing database structures for efficient data storage. Optimizing queries and executing data management plans to maintain integrity and availability."}
            /> 
          </div>
        </div>

    </div>
  )
}

export default Services