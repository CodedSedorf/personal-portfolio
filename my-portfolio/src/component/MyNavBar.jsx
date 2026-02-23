import React from 'react'
import "../component/MyNavBar.css"
import resume from "../../assets/My Woman.pdf"

const MyNavBar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Dev Sedorf</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className='n-list'>
                <ul>
                    <li class="hover:text-blue-500 transition-colors duration-300">Home</li>
                    <li class="hover:text-blue-500 transition-colors duration-300">Services</li>
                    <li class="hover:text-blue-500 transition-colors duration-300">Experience</li>
                    <li class="hover:text-blue-500 transition-colors duration-300">Portfolio</li>
                    <li class="hover:text-blue-500 transition-colors duration-300">Testimonial</li>
                </ul>
            </div>
          <a href={resume} download>
           <button className='button hover:text-blue-500 transition-colors duration-300'>
                Marry Me
            </button>
          </a>
            
        </div>
    </div>
  )
}

export default MyNavBar
