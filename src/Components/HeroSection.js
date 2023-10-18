import React from 'react'
import { Button } from './Button'
import './HeroSection.css'; 
import '../App.css'; 



function HeroSection() {
  return (
    <div className='hero-container'>
 {/* <video src='\videos\video-3.mp4' autoPlay loop muted /> */}
       <h1>About Me</h1>
      <p>I'm Abdelrahman Elsamalouty, a web developer who is devoted to what he does. I'm a student at GUC currently studying Computer Science and Engineering. I design user-friendly websites and applications using my knowledge in React, HTML, CSS, and JavaScript. My proficiency with Git and GitHub guarantees efficient code management. My creativity and inventiveness in web development are fueled by this desire. I enjoy learning about new computer science areas while I'm not developing websites.
</p>
      <div className='hero-btns'>
        <Button className = 'btns' buttonStyle= 'btn--outline'
        buttonSize= 'btn--large'>HIRE ME</Button>
        <Button className = 'btns' buttonStyle= 'btn--primary'
        buttonSize= 'btn--large'>HIRE ME BUT COOLER <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
