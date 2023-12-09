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
import {updateGlobalStyleJS} from "../../../../functionsNeccessairy/updateGlobalStyle"

const CardAllStyle = (
    {data,type,id,itemsData,characters,
        section_id,onTitleSingleSubmit,history,hasSlider
    }) =>{

     const [title_padding_top,setTitlePaddingTop] = useState("")
     const [title_padding_bottom,setTitlePaddingBottom] = useState("")
     const [title_padding_left,setTitlePaddingLeft] = useState("")
     const [title_padding_right,setTitlePaddingRight] = useState("")
     const [title_margin_top,setTitleMarginTop] = useState("")
     const [title_margin_bottom,setTitleMaginBottom] = useState("")
     const [title_margin_left,setTitleMaginLeft] = useState("")
     const [title_margin_right,setTitleMarginRight] = useState("")

     const [title_color,setTitleColor] = useState("")
     const [title_hover_color,setTitleHoverColor] = useState("")
     const [border_card_top,setBorderCardTop] = useState("")
     const [border_card_bottom,setBorderCardBottom] = useState("")
     const [border_card_left,setBorderCardLeft] = useState("")
     const [border_card_right,setBorderCardRight] = useState("")
     const [Image_border_top_left_radius,setImageBorderTopLeftRadius] = useState("")
     const [Image_border_top_right_radius,setImageBoderTopRightRadius] = useState("")
     const [Image_border_bottom_right_radius,setImageBorderBottomRightRadius] = useState("")
     const [Image_border_bottom_left_radius,setImageBorderBottomLeftRadius] = useState("")
    const {t} = useTranslation()
    let handleFormSubmit = (value,field) =>{
     
      if(field ==="title_padding_top"){
        setTitlePaddingTop(value)
      }
      if(field === "title_padding_bottom"){
        setTitlePaddingBottom(value)
      }
      if(field==="title_padding_left"){
        setTitlePaddingLeft(value)
      }
      if(field ==="title_padding_right"){
        setTitlePaddingRight(value)
      }
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
   
  
   
     
      if(field === "title_color"){
        setTitleColor(value)
      }
      if(field === "title_hover_color"){
        setTitleHoverColor(value)
      }
      if(field == "border_card_top"){
        setBorderCardTop(value)
      }
      if(field == "border_card_bottom"){
        setBorderCardBottom(value)
      }
      if(field == "border_card_left"){
        setBorderCardLeft(value)
      }
      if(field == "border_card_right"){
        setBorderCardRight(value)
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
  
      }

        let updateGlobalStyle = (type) =>{
            let historyMaker = history
    
    
            let all = itemsData
            let searcher = characters.filter(el => el.id === section_id)[0]
              let updates = []
              let data = characters.filter(el => el.status!=="New Order" 
              && el.id === section_id
              
              )[0]
              if(type==="card"){
  
                if(title_color!==""){
               
                 searcher.global_style[7]["color"] = title_color
               
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"]                 
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Global Update"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card color to ${title_color}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_color:,!:$*ù${title_color}`
                 historyMaker.push(object_history)
               }
               if(title_hover_color!==""){
                searcher.global_style[7]["hover_color"] = title_hover_color
                
             let object_history = {}
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_tap = ["Global Style","Card Style"]               
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Global Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card hover color to ${title_hover_color}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_hover_color:,!:$*ù${title_hover_color}`
                 historyMaker.push(object_history)
               } 
            
               if(title_padding_top!==""){
                searcher.global_style[7]["padding_top"] = title_padding_top
               
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"] 
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card padding top to ${title_padding_top}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_padding_top:,!:$*ù${title_padding_top}`
                 historyMaker.push(object_history)
               }
               if(title_padding_bottom!==""){
                searcher.global_style[7]["padding_bottom"] = title_padding_bottom
                
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"]        
              object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card padding bottom to ${title_padding_bottom}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_padding_bottom:,!:$*ù${title_padding_bottom}`
                 historyMaker.push(object_history)
               }
               if(title_padding_left!==""){
                searcher.global_style[7]["padding_left"] = title_padding_left
               
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"] 
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card padding left to ${title_padding_left}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_padding_left:,!:$*ù${title_padding_left}`
                 historyMaker.push(object_history)
               }
               if(title_padding_right!==""){
                searcher.global_style[7]["padding_right"] = title_padding_right
                 
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"]
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "title"
                 object_history.iteration_description = `changing card padding right to ${title_padding_right}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle"  
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_padding_right:,!:$*ù${title_padding_right}`
                 historyMaker.push(object_history)
               }
               if(title_margin_top!==""){
                searcher.global_style[7]["margin_top"] = title_margin_top
                
                 let object_history = {}
                 object_history.iteration_tap = ["Global Style","Card Style"]
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card margin top to ${title_margin_top}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle"   
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
                 historyMaker.push(object_history)
               }
               if(title_margin_bottom!==""){
                searcher.global_style[7]["margin_bottom"] = title_margin_bottom 
                
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"]
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id      
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card margin bottom to ${title_margin_bottom}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
                 historyMaker.push(object_history)
               }
               if(title_margin_left!==""){
                searcher.global_style[7]["margin_left"] = title_margin_left
                
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"]
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card margin left to ${title_margin_left}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
                 historyMaker.push(object_history)
               }
               if(title_margin_right!==""){
                searcher.global_style[7]["margin_right"] = title_margin_right
                
             let object_history = {}
             object_history.iteration_tap = ["Global Style","Card Style"]
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card margin right to ${title_margin_right}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
                 historyMaker.push(object_history)
               }
               if(Image_border_top_left_radius!==""){
                searcher.global_style[7]["border_top_left_radius"] = Image_border_top_left_radius
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                   object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border top left radius to ${Image_border_top_left_radius}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `Image_border_top_left_radius:,!:$*ù${Image_border_top_left_radius}`     
                 historyMaker.push(object_history)
               }
               if(Image_border_top_right_radius!==""){
                searcher.global_style[7]["border_top_right_radius"] = Image_border_top_right_radius
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                   object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border top right radius to ${Image_border_top_right_radius}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `Image_border_top_right_radius:,!:$*ù${Image_border_top_right_radius}`     
                 historyMaker.push(object_history)
               }
               if(Image_border_bottom_right_radius!==""){
                searcher.global_style[7]["border_bottom_right_radius"] = Image_border_bottom_right_radius
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border bottom right radius to ${Image_border_bottom_right_radius}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `Image_border_bottom_right_radius:,!:$*ù${Image_border_bottom_right_radius}`     
                 historyMaker.push(object_history)
               }
               if(Image_border_bottom_left_radius!==""){
                searcher.global_style[7]["border_bottom_left_radius"] = Image_border_bottom_left_radius
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border bottom left radius to ${Image_border_bottom_left_radius}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `Image_border_bottom_left_radius:,!:$*ù${Image_border_bottom_left_radius}`     
                 historyMaker.push(object_history)
               }
           
               if(border_card_top!==""){
                searcher.global_style[7]["border_card_top"] = border_card_top
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                   object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border top  to ${border_card_top}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `border_card_top:,!:$*ù${border_card_top}`     
                 historyMaker.push(object_history)
               }
               if(border_card_bottom!==""){
                searcher.global_style[7]["border_card_bottom"] = border_card_bottom
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                   object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border bottom  to ${border_card_bottom}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `border_card_bottom:,!:$*ù${border_card_bottom}`     
                 historyMaker.push(object_history)
               }
               if(border_card_left!==""){
                searcher.global_style[7]["border_card_left"] = border_card_left
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border left  to ${border_card_left}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `border_card_left:,!:$*ù${border_card_left}`     
                 historyMaker.push(object_history)
               }
               if(border_card_right!==""){
                searcher.global_style[7]["border_card_right"] = border_card_right
                
               let object_history = {}
               object_history.iteration_tap = ["Global Style","Card Style"]
           
                 object_history.iteration_id  = uuidv4()
                 object_history.iteration_section = section_id
                 object_history.iteration_title = "Updating"
                 object_history.iteration_type = "card"
                 object_history.iteration_description = `changing card border right to ${border_card_right}`
                 object_history.iteration_date = new Date().toISOString()
                 object_history.function_name = "updateGlobalStyle" 
                 object_history.parameter = `${type}`
                 object_history.variable_change = `border_card_right:,!:$*ù${border_card_right}`     
                 historyMaker.push(object_history)
               }
           
               
           
               }
         
               let {ch1,global_html,ch2} = updateGlobalStyleJS(searcher,data,all)
    
               let final_html =ch1 + global_html + ch2 
                 let data_late = characters.filter(el => el.id !== section_id) 
                 if(data.data_team[0].children[0].lang==="ar"){
                   final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
                   }else{
                     final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
                 
                   }
                 
                 data.section_data = final_html  
             
                  if(hasSlider){
                   data.section_css = data.section_css
                   .replace("$color_arrow_left",searcher.global_style[5]["color"])
                   .replace("$color_hover_arrow_left",searcher.global_style[5]["hover_color"])
                   .replace("$background_color_arrow_left", searcher.global_style[5]["background_color"])
                   .replace("$background_hover_color_arrow_left ",  searcher.global_style[5]["background_hover_color"])
                   .replace("$font_size_arrow_left ",   searcher.global_style[5]["font_size"] )
                   .replace("$left_position_arrow_left ",   searcher.global_style[5]["left"] )
                   .replace("$top_position_arrow_left ",   searcher.global_style[5]["top"] )
                   //arrow Right 
                   .replace(" $color_arrow_right",searcher.global_style[6]["color"])
                   .replace("$color_hover_arrow_right",searcher.global_style[6]["hover_color"])
                   .replace("$background_color_arrow_right", searcher.global_style[6]["background_color"])
                   .replace("$background_hover_color_arrow_right ",  searcher.global_style[6]["background_hover_color"])
                   .replace("$font_size_arrow_right",   searcher.global_style[6]["font_size"] )
                   .replace("$right_position_arrow_right",   searcher.global_style[6]["left"] )
                   .replace("$top_position_arrow_right",   searcher.global_style[6]["top"] )
                  
                   
                  
                 }
                 
                  updates.push(data)  
                 // $color_arrow_left
                     
           
                 let final = [...data_late,...updates]
                    
                 onTitleSingleSubmit(final,historyMaker,historyMaker.length -1,all)
       
          
                     toast.success("successfully updated")
           
            }
   
   
            return (
        <>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <p style={{textAlign:"left"}}>{t("titleColor")}</p>   
                          
        <InputElementTypeColor 
         values={data[0].color}
         onFormSubmit={handleFormSubmit}
         field_name={data[0].field}
        /> 
              
        
      
     
     
        </Grid>
     
        <Grid item xs={6}>
        <p style={{textAlign:"left"}}>{t("titleHoverColor")}</p>
      
        <InputElementTypeColor 
         values={data[1].hover_color}
         onFormSubmit={handleFormSubmit}
         field_name={data[1].field}
        />
     
      
     
        </Grid>                      
     
     
     
        </Grid>
       
                
                  
        { data[2].isPaddingSHowing 
        && 
        <>
     {/* padding title team style */} 
     <Grid container spacing={2}>
              <Grid item xs={2}>
                   {t("padding")}           
              </Grid>
               {/* padding top title team style */} 
              <Grid item xs={2}>
              <p>{t("top")}</p>
             
              <ComponentwithSelectAndInput 
              value={data[3].padding_top}
               onFormSubmit={handleFormSubmit}
               field_name={data[3].field}
              />
         
             
              </Grid> 
     {/* padding bottom title team style */} 
              <Grid item xs={2}>
              <p>{t("bottom")}</p>
            
              <ComponentwithSelectAndInput 
              value={data[4].padding_bottom}
               onFormSubmit={handleFormSubmit}
               field_name={data[4].field}
              />
           
              
           
              </Grid>                
     {/* padding left title team style */} 
     <Grid item xs={2}>
              <p>{t("left")}</p>
        
              <ComponentwithSelectAndInput 
              value={data[5].padding_left}
               onFormSubmit={handleFormSubmit}
               field_name={data[5].field}
              />
          
              
            
              </Grid>
     
     {/* padding right title team style */} 
     <Grid item xs={2}>
              <p>{t("right")}</p>
     
              <ComponentwithSelectAndInput 
              value={data[6].padding_right}
               onFormSubmit={handleFormSubmit}
               field_name={data[6].field}
              />
            
            
              </Grid>          
     
             </Grid>
        </>
        
        }
     
     
     {data[7].isMarginShowing && <>
     {/* margin title team style */} 
     <Grid container spacing={2}>
              <Grid item xs={2}>
                   margin           
              </Grid>
               {/* margin top title team style */} 
              <Grid item xs={2}>
              <p>{t("top")}</p>
             
              <ComponentwithSelectAndInput 
              value={data[8].margin_top}
               onFormSubmit={handleFormSubmit}
               field_name={data[8].field}
              />
          
              </Grid> 
     {/* margin bottom title team style */} 
              <Grid item xs={2}>
              <p>{t("bottom")}</p>
              
              <ComponentwithSelectAndInput 
              value={data[9].margin_bottom}
               onFormSubmit={handleFormSubmit}
               field_name={data[9].field}
              />
      
              </Grid>                
     {/* margin left title team style */} 
     <Grid item xs={2}>
              <p>{t("left")}</p>
              
              <ComponentwithSelectAndInput 
              value={data[10].margin_left}
               onFormSubmit={handleFormSubmit}
               field_name={data[10].field}
              />
            
         
              </Grid>
     
     {/* margin right title team style */} 
     <Grid item xs={2}>
              <p>{t("right")}</p>
              
              <ComponentwithSelectAndInput 
              value={data[11].margin_right}
               onFormSubmit={handleFormSubmit}
               field_name={data[11].field}
              />
          
     
              </Grid>          
     
             </Grid>
     
     </>}
     
     
             
     <Grid container spacing={2}>
                 <Grid item xs={2}>
                     <p>{t("borderRadius")}</p>        
                 </Grid>
                 {/* Border radius Top left Image Team */}
                 <Grid item xs={2}>
                 <p>{t("topLeft")}</p>  
                 <ComponentwithSelectAndInput 
                 value={data[12].border_top_left_radius}
                  onFormSubmit={handleFormSubmit}
                  field_name={data[12].field}
                 />
       
     
                 </Grid>
     
                   {/* Border radius top right Image Team */}
                   <Grid item xs={2}>
                 <p>{t("topRight")}</p>  
                 <ComponentwithSelectAndInput 
                 value={data[13].border_top_right_radius}
                  onFormSubmit={handleFormSubmit}
                  field_name={data[13].field}
                 />
     
                 </Grid>
     
                   {/* Border radius bottom right Image Team */}
                   <Grid item xs={2}>
                 <p>{t("bottomRight")}</p>  
                 <ComponentwithSelectAndInput 
                 value={data[14].border_bottom_right_radius}
                  onFormSubmit={handleFormSubmit}
                  field_name={data[14].field}
                 />
            
     
                 </Grid>
               
                   {/* Border radius bottom left Image Team */}
                   <Grid item xs={2}>
                 <p>{t("bottomLeft")}</p> 
                 <ComponentwithSelectAndInput 
                 value={data[15].border_bottom_left_radius}
                  onFormSubmit={handleFormSubmit}
                  field_name={data[15].field}
                 /> 
       
     
                 </Grid>
     
     
     
             </Grid>    
             {/* border team style */} 
             <Grid item xs={2}>
                   {t("border")}           
              </Grid>
     <Grid container spacing={2}>
            
               {/* border top title team style */} 
              <Grid item xs={6}>
              <p>{t("top")}</p>
             
              <BorderElement 
              value={data[16].border_card_top}
               onFormSubmit={handleFormSubmit}
               field_name={data[16].field}
              />
          
     
              </Grid> 
     {/* border bottom title team style */} 
              <Grid item xs={6}>
              <p>{t("bottom")}</p>
              
              <BorderElement 
              value={data[17].border_card_bottom}
               onFormSubmit={handleFormSubmit}
               field_name={data[17].field}
              />
      
            
              </Grid>                
     {/* border left title team style */} 
     <Grid item xs={6}>
              <p>{t("left")}</p>
              
              <BorderElement 
              value={data[18].border_card_left}
               onFormSubmit={handleFormSubmit}
               field_name={data[18].field}
              />
            
              </Grid>
     
     {/* border right title team style */} 
     <Grid item xs={6}>
              <p>{t("right")}</p>
              
              <BorderElement 
              value={data[19]?.border_card_right}
               onFormSubmit={handleFormSubmit}
               field_name={data[19]?.field}
              />
          
              </Grid>          
     
             </Grid>
        <div style={{display:"flex",justifyContent:"center"}}>

             <Button variant="contained"
                   style={{marginTop:"2%"}}
                   onClick = {() =>updateGlobalStyle("card")}
                   >{t("edit")}</Button>
             </div>
        </>
    )
}

export default CardAllStyle


