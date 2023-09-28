import React,{useEffect,useState} from "react"
import Avatar from '@mui/material/Avatar';
import "./classifier.css"
const TitleClassifier = (props) =>{
    const {titlePopupDetailHistory} = props
    let [view,setView] = useState("")
    useEffect(()=>{
        if(titlePopupDetailHistory.includes("image")){
          
            setView("image")
        }
        else if(titlePopupDetailHistory.includes("color")){
            setView("color")
        }
        else{
            setView("text")
        }
    },[])

    return ( 
        <>
        {view == "text" && <p>{titlePopupDetailHistory}</p>}
        {view == "image" &&
        <>
      <div style={{display:"flex"}}>
      <p> {titlePopupDetailHistory.split("image to")[0]} image to </p>
      
      <Avatar
      style={{marginLeft:"2%"}}
      alt="Remy Sharp" src={titlePopupDetailHistory.split("image to")[1]} />
     
      </div>
      </>
        }
          {view == "color" && 
          <>
          <div style={{display:"flex"}}>
          {titlePopupDetailHistory.split("color to")[0]} color to 
  
         <div class="color-platte" 
         style={{
            marginLeft:"2%",
            backgroundColor:titlePopupDetailHistory.split("color to")[1]}}
         ></div>
          </div>
        

          </>
          }
        </>
    )
}
export default TitleClassifier

