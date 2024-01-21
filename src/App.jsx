import React, { useState } from 'react'
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"|", text2:"-"},
  ]

  const [heroCount, setHeroCount] = useState(1);


  return (
    <div>
      
        <Background heroCount={heroCount}/>
        <Navbar/>
        <Hero
          heroData={heroData[heroCount]} 
          setHeroCount={setHeroCount}
          heroCount={heroCount}
           />
        
    </div>
  )
}

export default App