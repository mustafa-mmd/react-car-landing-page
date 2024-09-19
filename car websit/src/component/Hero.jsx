import React from 'react'
import "./Hero.css"
import arrowbtn from "../assets/arrow_btn.png"
import pauseicon from "../assets/pause_icon.png"
import playicon from "../assets/play_icon.png"
const Hero = ({heroData,playstatus,setPlaystatus,heroCount,setHeroCount}) => {
  return (
    <div className='hero'>
<div className="herotext">
  <p>{heroData.text1}</p>
  <p>{heroData.text2}</p>
</div>
<div className="heroexplore">
  <p>Explore the features</p>
  <img src={arrowbtn} alt='arrowBtn' />
</div>

  <div className='herolist'>
    <li onClick={()=>setHeroCount(0)} className={heroCount===0? "herodot orange": "herodot"}>Change pic 1</li>
    <li onClick={()=>setHeroCount(1)} className={heroCount===1? "herodot orange": "herodot"}>Change pic 2</li>
    <li onClick={()=>setHeroCount(2)} className={heroCount===2? "herodot orange": "herodot"}>Change pic 3</li>
  </div>

<div className="heroplay">
  <img onClick={()=>setPlaystatus(!playstatus)} src={playstatus? pauseicon:playicon} alt="" />
  <p className='videopara'>See the video</p>
</div>
    </div>
  )
}

export default Hero