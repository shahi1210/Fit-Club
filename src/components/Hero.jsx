import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
const Hero = () => {
  return (
    <div className='hero'>
<div className="left-h">

    <Header/>
{/* the best ad */}
    <div className="the-best-ad">

        <div></div>
        <span>The Best Fitness Club in the Town</span>
    </div>

{/* hero heading */}
<div className="hero-text">
  <div>
    <span className='stroke-text'>Shape </span>
    <span>Your</span>
  </div>
    <div>
    <span>Ideal Body</span>
    </div>
    <div>
      <span>IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY</span>
    </div>
  </div>
  {/* figures */}
  <div className="figures">
    <div>
      <span>+140</span>
      <span>expert coaches</span>
      </div>
    <div>
      <span>+978</span>
      <span>members joined</span>
      </div>
    <div>
      <span>+50</span>
      <span>fitness programs</span>
      </div>
  </div>
  {/* hero buttons */}
  <div className="hero-buttons">
    <button className="btn">Get Started</button>
    <button className="btn">Learn More</button>
  </div>
</div>
<div className="right-h">
  <button className='btn'>Join Now</button>


  <div className="heart-rate">
    <img src={Heart} alt="" />
    <span>Heart Rate</span><span>116 Bpm</span>
  </div>

  {/* hero images */}
  <img src={hero_image} alt="" className='hero-image'/>
  <img src={hero_image_back} alt="" className='hero-image-back'/>
</div>
    </div>
  )
}

export default Hero;