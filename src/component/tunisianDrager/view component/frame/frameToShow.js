import React from "react"
import LoaderCode from "../loaderCode/loaderCode"
import { useState } from "react"
import { useEffect } from "react"
import {boostarp} from "../../liberys/css/boostrap"
import {fontawsome} from "../../liberys/css/fontawsome"
import {ownCarousel} from "../../liberys/css/owlCarousel"
import {owlCarouselJs} from "../../liberys/js/owlcarousel"
const FrameToShow = (props) =>{
 
let [isLoading,setIsLoading] = useState(true)
let [htmlDataComponent,setHtmlDataComponent] = useState("")
let [cssDataComponent,setCssDataComponent] = useState("")
let [jsDataComponent,setJsDataComponent] = useState("")
useEffect(()=>{
    const {htmlData,cssData,jsData} = props
    setHtmlDataComponent(htmlData)
    setCssDataComponent(cssData)
    setJsDataComponent(jsData)
    setTimeout(function(){ 
      
        setIsLoading(false)
    }, 1300);
    
},[])
    return (
        <>
     {isLoading ? <LoaderCode/> : <>
     <iframe
        srcDoc={`
        <html>
        <style>${cssDataComponent}</style>
          <body>${htmlDataComponent
            .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,
            `<style>${boostarp}</style>`)
         
          .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,
          `<style>${ownCarousel}</style>`
          )
          .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,
          `<script>${owlCarouselJs}</script>`)
          }</body>
          <script>${jsDataComponent}</script>                     
        </html>
      `}
        title="output"
        sandbox="allow-scripts"
        frameBorder="none"
        style={{width:"100vw",height:"100vh"}}   
      />
   
     
     </>}
  
    
       


       
     
       
       
        </>
       
    )
}

export default FrameToShow
