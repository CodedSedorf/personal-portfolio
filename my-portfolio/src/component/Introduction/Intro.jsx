import React from 'react'
import "../Introduction/Intro.css"
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import instagram from "../../assets/img/instagram.png";
import vector1 from "../../assets/img/Vector1.png";
import vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/portfolio2.png";
import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";
import glassesimoji from "../../assets/img/languages.png";
import { Link } from 'react-router-dom';
import Floatingdiv from '../Floatingdiv';


const Intro = () => {
  return (
    <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hello! I Am</span>
                    <span>Dev Sedorf,</span>
                    <span>I'm a dedicated full-stack web developer proficient in React.js, Vue.js, Angular, Next.js, Node.js, Express, MongoDB, and PHP. With a strong track record in crafting dynamic web applications, I excel in meeting user needs and achieving business objectives..</span>
                </div>
                <div className="button i-button text-center">Hire me</div>
                <div className="social-icons flex flex:col">
                    <Link to='https://github.com/CodedSedorf' target='_blank'><img src={github} alt="" /></Link>
                    <Link to='https://www.linkedin.com/in/olamoyegun-saheed-4b12a624b' target='_blank'><img src={linkedin} alt="" /></Link>
                    <Link><img src={instagram} alt="" /></Link>
                    {/* https://www.linkedin.com/in/olamoyegun-saheed-4b12a624b */}
                </div>
            </div>
            <div className='i-right'>
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div className='floatingDivContainer1'>
                    <Floatingdiv image={crown} txt1="Frontend" txt2="Developer"/>
                </div>
                <div className='floatingDivContainer2'>
                    <Floatingdiv image={thumbup} txt1="Backend" txt2="Developer"/>
                </div>
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{
                    background: "#c1f5ff",
                    top: "17rem",
                    width: "21rem",
                    height: "11rem",
                    left: "-9rem"
                }}></div>
            </div>
    </div>
  )
}

export default Intro