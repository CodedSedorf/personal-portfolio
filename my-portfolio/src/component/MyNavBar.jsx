import React from 'react'
import "../component/MyNavBar.css"

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
                    <li>Home</li>
                    <li>Services</li>
                    <li>Exprience</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className='button'>
                Contact Me
            </button>
        </div>
    </div>
  )
}

export default MyNavBar