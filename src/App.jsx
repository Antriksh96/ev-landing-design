import React, { useEffect, useState } from "react" 
import Background from "./components/Background"
import Header from "./components/Header"
import Hero from './components/Hero'
function App() { 

  let heroData = [
    {text1 : 'Dive into', text2 : 'What you love'},
    {text1 : 'Indulge', text2 : 'your passions'},
    {text1 : 'Give into', text2 : 'your passions'} 
  ]


  const [playvideo, setPlayvideo] = useState(false)
  const [herocount, setHerocount] = useState(1)

  let count = 1
  useEffect(() => {
    
    setInterval(() => {
      if(count == 4){
        count = 1
      }
      setHerocount(count)
      count = count + 1

    }, 3000)
  
  }, [])

  return (
    <>  
      <Header/>
      <Background playvideo = {playvideo} herocount = {herocount} />
      <Hero herocount = {herocount} setPlayvideo = {setPlayvideo} setHerocount = {setHerocount} playvideo = {playvideo} heroData = {heroData}/>
    </>
  )
}

export default App
