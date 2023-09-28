import React, { useEffect,useState } from "react"
import "./RocketLoader.css"
const RocketLoader = (props) =>{
   
    return (
        <>
        <div class="rocket">
  <div 
  className= "rocket_body launched_animation"
  style={{animationPlayState: "running"}}
  >
    <div class="body"></div>
    <div class="window"></div>
    <div class="window small"></div>
    <div class="wing wing-left"></div>
    <div class="wing wing-right"></div>
    <div class="wing wing-center"></div>
    <div 
 
    className= "fire_body"
       style={{opacity:1,animationPlayState: "running"}} 
    >
      <div class="fire_red">
        <div class="fire_yellow"></div>
      </div>
    </div>
  </div>
  <div class="base"></div>
</div>
        </>
    )
}
export default RocketLoader