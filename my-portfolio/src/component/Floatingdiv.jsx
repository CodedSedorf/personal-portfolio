import React from 'react'
// import crown from "../assets/img/crown.png";
import "../../src/component/Floatingdiv.css"


const Floatingdiv = ({image, txt1, txt2}) => {
  return (
    <div className='floatingdiv'>
        <img src={image} alt="" />
        <span className='font-primary'>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
    
  )
}

export default Floatingdiv