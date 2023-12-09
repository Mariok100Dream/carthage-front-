import React, { useState } from "react";

import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import {updateDescriptionJS} from "../../../../functionsNeccessairy/UpdateDescription"

import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import InputElementTypeColor from '../../../../elements/inputElementTypeColor/inputElementTypeColor';
import ComponentwithSelectAndInput from '../../../../elements/ComponentWithSelectANdInput/conponentWithSelectAndInput'
import  FontFamilySelect from '../../../../elements/fontFamilySelect/fontFamilyselect'
import AlignElement from '../../../../elements/AlignElement/alignElement';
import Grid from '@mui/material/Grid';
import {updateTitleJS} from "../../../../functionsNeccessairy/UpdateTitle"
const DescriptionHeaderAllStyle = (
    {data,itemsData,characters,
        section_id,onTitleSingleSubmit,history,hasSlider
    }) =>{
     const [title_font_size,setTitleFontSize]  = useState("")
     const [title_padding_top,setTitlePaddingTop] = useState("")
     const [title_padding_bottom,setTitlePaddingBottom] = useState("")
     const [title_padding_left,setTitlePaddingLeft] = useState("")
     const [title_padding_right,setTitlePaddingRight] = useState("")
     const [title_margin_top,setTitleMarginTop] = useState("")
     const [title_margin_bottom,setTitleMaginBottom] = useState("")
     const [title_margin_left,setTitleMaginLeft] = useState("")
     const [title_margin_right,setTitleMarginRight] = useState("")
     const [title_font_family,setTitleFontFamily] = useState("")
     const [alignmentTitleAlign,setAlignmentTitleAlign] = useState("")
     const [title_color,setTitleColor] = useState("")
     const [title_hover_color,setTitleHoverColor] = useState("")
    const {t} = useTranslation()
    let handleFormSubmit = (value,field) =>{
      if(field ==="title_font_size"){
        setTitleFontSize(value)
      }
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
   
  
   
   
      if(field === "title_font_family"){
        setTitleFontFamily(value)
      }
      if(field === "text_align"){
        setAlignmentTitleAlign(value)
      }
     
      if(field === "title_color"){
        setTitleColor(value)
      }
      if(field === "title_hover_color"){
        setTitleHoverColor(value)
      }

  
      }

      let updateDescriptionUnique = () =>{
        let all = itemsData
        let searcher = characters.filter(el => el.id === section_id)[0]
        let updates = []
        let data = characters.filter(el => el.status!=="New Order" 
        && el.id === section_id
        )[0]
       
        let historyMaker = history
       
         if(title_color!==""){
        
          searcher.description.color = title_color
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
          object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description color to ${title_color}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_color:,!:$*ù${title_color}`
          historyMaker.push(object_history)
        }
        if(title_hover_color!==""){
          searcher.description.hover_color = title_hover_color
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Content","Description","Style"]
                object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description hover color to ${title_hover_color}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_hover_color:,!:$*ù${title_hover_color}`
          historyMaker.push(object_history)
        } 
        if(title_font_family!==""){
          searcher.description.font_family = title_font_family
       
      let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Content","Description","Style"]
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description font family to ${title_font_family}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_font_family:,!:$*ù${title_font_family}`
          historyMaker.push(object_history)
        }
        if(title_font_size!==""){
          searcher.description.font_size = title_font_size
         
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
      object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description font size to ${title_font_size}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription" 
          object_history.parameter = ``
          object_history.variable_change = `title_font_size:,!:$*ù${title_font_size}`
          historyMaker.push(object_history)
        }
        if(title_padding_top!==""){
          searcher.description.padding_top = title_padding_top
        
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
      object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description padding top to ${title_padding_top}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_padding_top:,!:$*ù${title_padding_top}`
          historyMaker.push(object_history)
        }
        if(title_padding_bottom!==""){
          searcher.description.padding_bottom = title_padding_bottom
         
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
      object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description padding bottom to ${title_padding_bottom}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_padding_bottom:,!:$*ù${title_padding_bottom}`
          historyMaker.push(object_history)
        }
        if(title_padding_left!==""){
          searcher.description.padding_left = title_padding_left
        
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
            object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description padding left to ${title_padding_left}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_padding_left:,!:$*ù${title_padding_left}`
          historyMaker.push(object_history)
        }
        if(title_padding_right!==""){
          searcher.description.padding_right = title_padding_right
          
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
      object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description padding right to ${title_padding_right}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_padding_right:,!:$*ù${title_padding_right}`
          historyMaker.push(object_history)
        }
        if(title_margin_top!==""){
          searcher.description.margin_top = title_margin_top
         
          let object_history = {}
          object_history.iteration_tap = ["Content","Description","Style"]
          object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description margin top to ${title_margin_top}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription" 
          object_history.parameter = ``
          object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
          historyMaker.push(object_history)
        }
        if(title_margin_bottom!==""){
          searcher.description.margin_bottom = title_margin_bottom 
         
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
      object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id      
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description margin bottom to ${title_margin_bottom}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription" 
          object_history.parameter = ``
          object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
          historyMaker.push(object_history)
        }
        if(title_margin_left!==""){
          searcher.description.margin_left = title_margin_left
         
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","style"]
          object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description margin left to ${title_margin_left}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription"
          object_history.parameter = ``
          object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
          historyMaker.push(object_history)
        }
        if(title_margin_right!==""){
          searcher.description.margin_right = title_margin_right
         
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
      object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing description margin right to ${title_margin_right}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription" 
          object_history.parameter = ``
          object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
          historyMaker.push(object_history)
        }
        if(alignmentTitleAlign!==""){
          searcher.description.text_align = alignmentTitleAlign
          
      let object_history = {}
      object_history.iteration_tap = ["Content","Description","Style"]
      object_history.iteration_id  = uuidv4()
          object_history.iteration_section = section_id
          object_history.iteration_title = "Updating"
          object_history.iteration_type = "title"
          object_history.iteration_description = `changing  description align to ${alignmentTitleAlign}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "handleChangeDescription" 
          object_history.parameter = ``
          object_history.variable_change = `alignmentTitleAlign:,!:$*ù${alignmentTitleAlign}`
          historyMaker.push(object_history)
        }
    
        let {ch1,global_html,ch2} = updateDescriptionJS(searcher,data,all)
    
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
           
    
      }
   
            return (
        <>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <p style={{textAlign:"left"}}>{t("descriptionColor")} </p>
      <InputElementTypeColor 
       values={ data[0].color}
       onFormSubmit={handleFormSubmit}
       field_name={data[0].field}
      />

      </Grid>

      <Grid item xs={6}>
      <p style={{textAlign:"left"}}>{t("descriptionHoverColor")} </p>
      <InputElementTypeColor 
       values={  data[1].hover_color}
       onFormSubmit={handleFormSubmit}
       field_name={data[1].field}
      />
     
      
      </Grid>                      



      </Grid>
     
              
                

<Grid container spacing={2}>
             {/* font family title  team style */} 
          <Grid item xs={6}>
          <p>{t("fontFamily")}</p>
          <FontFamilySelect 
           values={data[2].font_family}
           onFormSubmit={handleFormSubmit}
           field_name={data[2].field}
          />

        
          </Grid>
         
  {/* font size title team style */} 
          <Grid item xs={6}>
            <p>{t("fontSize")} </p>
            <ComponentwithSelectAndInput 
            value={data[3].font_size}
             onFormSubmit={handleFormSubmit}
             field_name={data[3].field}
            />
            
            </Grid>        
            </Grid>

  {/* padding title team style */} 
           <Grid container spacing={2}>
            <Grid item xs={2}>
                 {t("padding")}           
            </Grid>
             {/* padding top title team style */} 
            <Grid item xs={2}>
            <p>{t("top")}</p>
            <ComponentwithSelectAndInput 
            value={data[4].padding_top}
             onFormSubmit={handleFormSubmit}
             field_name={data[4].field}
            />
           
            </Grid> 
 {/* padding bottom title team style */} 
            <Grid item xs={2}>
            <p>{t("bottom")}</p>
            <ComponentwithSelectAndInput 
            value={data[5].padding_bottom}
             onFormSubmit={handleFormSubmit}
             field_name={data[5].field}
            />
            
            </Grid>                
 {/* padding left title team style */} 
 <Grid item xs={2}>
            <p>{t("left")}</p>
            <ComponentwithSelectAndInput 
            value={data[6].padding_left}
             onFormSubmit={handleFormSubmit}
             field_name={data[6].field}
            />
             
            </Grid>

   {/* padding right title team style */} 
 <Grid item xs={2}>
            <p>{t("right")}</p>
            <ComponentwithSelectAndInput 
            value={data[7].padding_right}
             onFormSubmit={handleFormSubmit}
             field_name={data[7].field}
            />
            
            </Grid>          

           </Grid>

 {/* margin title team style */} 
 <Grid container spacing={2}>
            <Grid item xs={2}>
                 {t("margin")}           
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
           <Grid item xs={2}>
           <p>{t("textAlign")}</p>
           <AlignElement 
             values={data[12].text_align}
            onFormSubmit={handleFormSubmit}
            field_name={data[12].field}
           /> 
            
           </Grid>
           
           


        <div style={{display:"flex",justifyContent:"center"}}>

             <Button variant="contained"
                   style={{marginTop:"2%"}}
                   onClick = {() =>updateDescriptionUnique()}
                   >{t("edit")}</Button>
             </div>
        </>
    )
}

export default DescriptionHeaderAllStyle


