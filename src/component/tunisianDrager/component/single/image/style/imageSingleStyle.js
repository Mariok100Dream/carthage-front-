import React, { useState } from "react";

import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import {updatePerSection} from "../../../../functionsNeccessairy/updatePerSection"
import InputElementTypeColor from '../../../../elements/inputElementTypeColor/inputElementTypeColor';
import ComponentwithSelectAndInput from '../../../../elements/ComponentWithSelectANdInput/conponentWithSelectAndInput'
import Grid from '@mui/material/Grid';
import BorderElement from "../../../../elements/borderElement/borderElement"

const ImageSingleStyle = (
    {data,type,id,typeThinks,indexParent,itemsData,characters,
        section_id,onTitleSingleSubmit,history
    }) =>{


     const [title_margin_top,setTitleMarginTop] = useState("")
     const [title_margin_bottom,setTitleMaginBottom] = useState("")
     const [title_margin_left,setTitleMaginLeft] = useState("")
     const [title_margin_right,setTitleMarginRight] = useState("")

     const [Image_width,setImagewidth] = useState("")

     const [Image_border_top_left_radius,setImageBorderTopLeftRadius] = useState("")
     const [Image_border_top_right_radius,setImageBoderTopRightRadius] = useState("")
     const [Image_border_bottom_right_radius,setImageBorderBottomRightRadius] = useState("")
     const [Image_border_bottom_left_radius,setImageBorderBottomLeftRadius] = useState("")
     const [Image_height,setImageHeight] = useState("")   
     const [ImageBackgroundWidth,setImageBackgroundWidth] = useState("")
     const [ImageBackgroundHeight,setImageBackgroundHeight] = useState("")
     const {t} = useTranslation()
    let handleFormSubmit = (value,field) =>{
     
   
      if(field==="title_margin_top"){
        setTitleMarginTop(value)
      }
      if(field==="title_margin_bottom"){
        setTitleMaginBottom(value)
      }
      if(field==="title_margin_left"){
        setTitleMaginLeft(value)
      }
      if(field==="title_margin_right"){
        setTitleMarginRight(value)
      }
   
  


      if(field ==="Image_border_top_left_radius"){
        setImageBorderTopLeftRadius(value)
      }
      if(field === "Image_border_top_right_radius"){
        setImageBoderTopRightRadius(value)
      }
      if(field === "Image_border_bottom_right_radius"){
        setImageBorderBottomRightRadius(value)
      }
      if(field === "Image_border_bottom_left_radius"){
        setImageBorderBottomLeftRadius(value)
      }
      if(field === "Image_width"){
        setImagewidth(value)
      }
      if(field === "Image_height"){
        setImageHeight(value)
      }
      if(field === "ImageBackgroundWidth"){ 
        setImageBackgroundWidth(value)
      }
      if(field === "ImageBackgroundHeight"){
        setImageBackgroundHeight(value)
      }
  
      }

        let handleChangeData = (type,id,text,index,iteration) =>{
            let all = itemsData
          
              let searcher = itemsData.filter(el => el.id === id)[0]
              let updates = []
              let historyMaker = history
              if(type==="image"){
   
                if(Image_border_top_left_radius!==""){
                  searcher.children[2]["border_top_left_radius"] = Image_border_top_left_radius
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                    object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image border top left radius to ${Image_border_top_left_radius}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `Image_border_top_left_radius:,!:$*ù${Image_border_top_left_radius}`     
                  historyMaker.push(object_history)
                }
                if(Image_border_top_right_radius!==""){
                  searcher.children[2]["border_top_right_radius"] = Image_border_top_right_radius
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                    object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image border top right radius to ${Image_border_top_right_radius}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `Image_border_top_right_radius:,!:$*ù${Image_border_top_right_radius}`     
                  historyMaker.push(object_history)
                }
                if(Image_border_bottom_right_radius!==""){
                  searcher.children[2]["border_bottom_right_radius"] = Image_border_bottom_right_radius
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                  object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image border bottom right radius to ${Image_border_bottom_right_radius}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `Image_border_bottom_right_radius:,!:$*ù${Image_border_bottom_right_radius}`     
                  historyMaker.push(object_history)
                }
                if(Image_border_bottom_left_radius!==""){
                  searcher.children[2]["border_bottom_left_radius"] = Image_border_bottom_left_radius
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                  object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image border bottom left radius to ${Image_border_bottom_left_radius}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `Image_border_bottom_left_radius:,!:$*ù${Image_border_bottom_left_radius}`     
                  historyMaker.push(object_history)
                }
                if(Image_width!==""){
                  searcher.children[2]["width"] = Image_width
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                    object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image width to ${Image_width}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `Image_width:,!:$*ù${Image_width}`     
                  historyMaker.push(object_history)
                }
                if(Image_height!==""){
                  searcher.children[2]["height"] = Image_height
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                    object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image height to ${Image_height}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `Image_height:,!:$*ù${Image_height}`     
                  historyMaker.push(object_history)
                }
                if(title_margin_top!==""){
                  searcher.children[2]["margin_top"] = title_margin_top
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                  object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image margin top to ${Image_height}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`     
                  historyMaker.push(object_history)
                }
            
                if(title_margin_bottom!==""){
                  searcher.children[2]["margin_bottom"] = title_margin_bottom
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                  object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image margin bottom to ${title_margin_bottom}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`     
                  historyMaker.push(object_history)
                }
                if(title_margin_left!==""){
                  searcher.children[2]["margin_left"] = title_margin_left
                
                  let object_history = {}
                  object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                  object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image margin left to ${title_margin_left}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`  
                  historyMaker.push(object_history)
                }
                if(title_margin_right!==""){
                  searcher.children[2]["margin_right"] = title_margin_right
                
                  let object_history = {}
                  object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                    object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image margin right to ${title_margin_right}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`  
                  historyMaker.push(object_history)
                }
            
                if(ImageBackgroundWidth!==""){
                  
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                    object_history.iteration_section = section_id
                  searcher.children[2]["widthBackground"] = ImageBackgroundWidth
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image background width to ${ImageBackgroundWidth}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `ImageBackgroundWidth:,!:$*ù${ImageBackgroundWidth}`  
                  historyMaker.push(object_history)
                }
                if(ImageBackgroundHeight!==""){
                  searcher.children[2]["heightBackground"] = ImageBackgroundHeight
                 
                let object_history = {}
                object_history.iteration_tap = ["Content","Content Card","Image","style"]
            
                  object_history.iteration_id  = uuidv4()
                    object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "image"
                  object_history.iteration_description = `changing image background width to ${ImageBackgroundHeight}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `ImageBackgroundHeight:,!:$*ù${ImageBackgroundHeight}`  
                  historyMaker.push(object_history)
                }
            
              }
       
          all[index] = searcher
          
          let data = characters.filter(el => el.status!=="New Order" 
          && el.id === section_id
          
          )[0]
          
            let team_html = data.team_html
            
            let hasSlider = data.hasSlider
          
            let {ch1,global_html,ch2}= updatePerSection(hasSlider,all,team_html,data,searcher,characters,section_id)
          
            let final_html = ch1 + global_html + ch2 
            let data_late = characters.filter(el => el.id !== section_id) 
             
            if(data.data_team[0].children[0].lang==="ar"){
              final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
              }else{
                final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
            
              }
            data.section_data = final_html   
          
          
          
             updates.push(data)  
            
                
            let final = [...data_late,...updates]
            onTitleSingleSubmit(final,historyMaker,historyMaker.length -1,all)
           
              
               
                toast.success("successfully updated")
            }
   
   
            return (
        <>
         <Grid container spacing={2}>
            <Grid item xs={2}>
                <p>{t("borderRadius")}</p>        
            </Grid>
            {/* Border radius Top left Image Team */}
            <Grid item xs={2}>
            <p>{t("topLeft")}</p>  
            <ComponentwithSelectAndInput 
            value={data[0].border_top_left_radius}
             onFormSubmit={handleFormSubmit}
             field_name={data[0].field}
            />
    

            </Grid>

              {/* Border radius top right Image Team */}
              <Grid item xs={2}>
            <p>{t("topRight")}</p>  
            <ComponentwithSelectAndInput 
            value={data[1].border_top_right_radius}
             onFormSubmit={handleFormSubmit}
             field_name={data[1].field}
            />

            </Grid>

              {/* Border radius bottom right Image Team */}
              <Grid item xs={2}>
            <p>{t("bottomRight")}</p>  
            <ComponentwithSelectAndInput 
            value={data[2].border_bottom_right_radius}
             onFormSubmit={handleFormSubmit}
             field_name={data[2].field}
            />
           

            </Grid>
          
              {/* Border radius bottom left Image Team */}
              <Grid item xs={2}>
            <p>{t("bottomLeft")}</p> 
            <ComponentwithSelectAndInput 
            value={data[3].border_bottom_left_radius}
             onFormSubmit={handleFormSubmit}
             field_name={data[3].field}
            /> 


            </Grid>



        </Grid>       

        <Grid container spacing={2}>

  {/* Width  Image Team */}
  <Grid item xs={6}>
            <p>{t("width")}</p>  
            <ComponentwithSelectAndInput 
            value={data[4].width}
             onFormSubmit={handleFormSubmit}
             field_name={data[4].field}
            /> 
            
            </Grid>          
 {/* Height  Image Team */}
 <Grid item xs={6}>
            <p>{t("height")}</p>  
            <ComponentwithSelectAndInput 
            value={data[5].height}
             onFormSubmit={handleFormSubmit}
             field_name={data[5].field}
            /> 


            </Grid>  


        </Grid>

 {/* Margin  Image Team */}
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <p>{t("margin")}</p>        
            </Grid>
            {/* margin Top  Image Team */}
            <Grid item xs={2}>
            <p>{t("top")} </p>  
            <ComponentwithSelectAndInput 
            value={data[6].margin_top}
             onFormSubmit={handleFormSubmit}
             field_name={data[6].field}
            /> 

            </Grid>

              {/* Margin Bottom Image Team */}
              <Grid item xs={2}>
            <p>{t("bottom")}</p>  
            <ComponentwithSelectAndInput 
            value={data[7].margin_bottom}
             onFormSubmit={handleFormSubmit}
             field_name={data[7].field}
            /> 

            </Grid>

              {/* Margin Left Image Team */}
              <Grid item xs={2}>
            <p>{t("left")}</p>  
            <ComponentwithSelectAndInput 
            value={data[8].margin_left}
             onFormSubmit={handleFormSubmit}
             field_name={data[8].field}
            /> 

            </Grid>
          
              {/* Margin Right Image Team */}
              <Grid item xs={2}>
            <p>{t("right")}</p>  
            <ComponentwithSelectAndInput 
            value={data[9].margin_right}
             onFormSubmit={handleFormSubmit}
             field_name={data[9].field}
            /> 

            </Grid>



        </Grid>
        <Grid container spacing={2}>

  {/* background color Image Team */}
  <Grid item xs={4}
  style={{marginTop:'2%'}}
  >
      <p>{t("backgroundColor")}</p>
           
           <InputElementTypeColor 
       values={data[10].background_img}
       onFormSubmit={handleFormSubmit}
       field_name={data[10].field}
      />

            </Grid> 
       {/* background color width Image Team */}
  <Grid item xs={4}
  style={{marginTop:'2%'}}
  >
      <p>{t("backgroundWidth")}</p>  
     <ComponentwithSelectAndInput 
            value={data[11].widthBackground}
             onFormSubmit={handleFormSubmit}
             field_name={data[11].field}
            /> 
  
            </Grid>       


{/* background color height Image Team */}
<Grid item xs={4}
  style={{marginTop:'2%'}}
  >
            <p>{t("backgroundHeight")}</p>
           <ComponentwithSelectAndInput 
            value={data[12].heightBackground}
             onFormSubmit={handleFormSubmit}
             field_name={data[12].field}
            /> 

            </Grid>

        </Grid>
        <div style={{display:"flex",justifyContent:"center"}}>

             <Button variant="contained"
                   style={{marginTop:"2%"}}
                   onClick = {() =>handleChangeData(type,id,
                    typeThinks,indexParent
                     
                     )}
                   >{t("edit")}</Button>
             </div>
        </>
    )
}

export default ImageSingleStyle


