import React from "react";
import './hero.css'
import pause_icon from "../assets/pause_icon.png";
import play_icon from "../assets/play_icon.png";
import arrow_btn from "../assets/arrow_btn.png";

function Hero({ herocount, setPlayvideo , setHerocount, playvideo, heroData}) {
  if (herocount == 1) {
    console.log(heroData)
    return (
      <div className="hero">
        <h1 >{heroData[0].text1}</h1>
        <h1 className="h1text">{heroData[0].text2}</h1>

        <input type="text" placeholder="Enter the text" className="inputstyle" />
        <img className="arrow-btn" src={arrow_btn}/>
 
        <ul className="bottom-btns">
           <li onClick={() => {setHerocount(1)}} style={herocount == 1 ? {color: 'orange'} : {color: 'white'}}></li>
           <li onClick={() => {setHerocount(2)}} style={herocount == 2 ? {color: 'orange'} : {color: 'white'}}></li>
           <li onClick={() => {setHerocount(3)}} style={herocount == 3 ? {color: 'orange'} : {color: 'white'}}></li>
        </ul>

        <div className="playvideo">
          <img onClick={() => {playvideo ? setPlayvideo(false) : setPlayvideo(true)}} className="playbtn" src={play_icon} />
          <label className="playfont">Tap to play</label>
        </div>
      </div>
    );
  } else if (herocount == 2) {
     return(
      <div className="hero">
      <h1 >{heroData[1].text1}</h1>
      <h1 className="h1text">{heroData[1].text2}</h1>

      <input type="text" placeholder="Enter the text" className="inputstyle" />
        <img className="arrow-btn" src={arrow_btn}/>
 
        <ul className="bottom-btns">
           <li onClick={() => {setHerocount(1)}} style={herocount == 1 ? {color: 'orange'} : {color: 'white'}}></li>
           <li onClick={() => {setHerocount(2)}} style={herocount == 2 ? {color: 'orange'} : {color: 'white'}}></li>
           <li onClick={() => {setHerocount(3)}} style={herocount == 3 ? {color: 'orange'} : {color: 'white'}}></li>
        </ul>

        <div className="playvideo">
          <img onClick={() => {playvideo ? setPlayvideo(false) : setPlayvideo(true)}} className="playbtn" src={play_icon} />
          <label className="playfont">Tap to play</label>
        </div>
    </div>
     )
  } else if (herocount == 3) {
      return(
        <div className="hero">
      <h1>{heroData[2].text1}</h1>
      <h1 className="h1text">{heroData[2].text2}</h1>

      <input type="text" placeholder="Enter the text" className="inputstyle" />
        <img className="arrow-btn" src={arrow_btn}/>
 
        <ul className="bottom-btns">
           <li onClick={() => {setHerocount(1)}} style={herocount == 1 ? {color: 'orange'} : {color: 'white'}}></li>
           <li onClick={() => {setHerocount(2)}} style={herocount == 2 ? {color: 'orange'} : {color: 'white'}}></li>
           <li onClick={() => {setHerocount(3)}} style={herocount == 3 ? {color: 'orange'} : {color: 'white'}}></li>
        </ul>

        <div className="playvideo">
          <img onClick={() => {playvideo ? setPlayvideo(false) : setPlayvideo(true)}} className="playbtn" src={play_icon} />
          <label className="playfont">Tap to play</label>
        </div>
    </div> 
      )
  }
}
 
export default Hero
