import React, { useState } from 'react'
import Background from './component/Background'
import "./App.css"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
const App = () => {
  let heroData=[{text1:"Dive into",text2:"what you love"},
   { text1:"Indulge",text2:"your passions"},
   { text1:"Give into",text2:"your passions"},
  ]
  const [heroCount, setHeroCount]=useState(2);
  const [playStatus, setPlaystatus]=useState(false)
  return (
    <div>
      <Background playstatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero heroData={heroData[heroCount]} playstatus={playStatus} setPlaystatus={setPlaystatus} heroCount={heroCount} setHeroCount={setHeroCount}/>
    </div>
  )
}

export default App