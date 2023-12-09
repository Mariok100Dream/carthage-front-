import React, { useState } from "react";

import InputElement from '../../../../elements/inputElement/inputElement';
import { useTranslation } from 'react-i18next'
import PrioritySelectElement from '../../../../elements/prioritySelectElement/prioritySelectElement';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import {updatePerSection} from "../../../../functionsNeccessairy/updatePerSection"

const ContentTitleSingle = (
    {data,type,id,typeThinks,indexParent,itemsData,characters,
        section_id,onTitleSingleSubmit,history
    }) =>{
    const [titleText,setTitleText] = useState("")
    const [priority,setPriority] = useState("")
    const {t} = useTranslation()
    let handleFormSubmit = (value,field) =>{
    
        if(field === "title_text"){
          setTitleText(value)
        }
        if(field === "priority"){
            setPriority(value)
          }
      
    
        }

        let handleChangeData = (type,id,text,index,iteration) =>{
            let all = itemsData
          
              let searcher = itemsData.filter(el => el.id === id)[0]
              let updates = []
              let historyMaker = history
          
          
              if(type==="title"){
                if(titleText!==""){
                  searcher.children[0]["text"] = titleText
                
                   let object_history = {}
                  object_history.iteration_id  = uuidv4()
                  object_history.iteration_tap = ["Content","Content Card","title","content"]
                  
                   object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "title"
                  object_history.iteration_description = `changing title text to ${titleText}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `title_text:,!:$*ù${titleText}`
                 
                  historyMaker.push(object_history)
                }
         
          
                if(priority!==""){
                 
                  searcher.children[0]["priority"] = priority
                
              let object_history = {}
              object_history.iteration_tap = ["Content","Content Card","title","content"]
                  object_history.iteration_id  = uuidv4()
                  object_history.iteration_section = section_id
                  object_history.iteration_title = "Updating"
                  object_history.iteration_type = "title"
                  object_history.iteration_description = `changing title Priority to ${priority}`
                  object_history.iteration_date = new Date().toISOString()
                  object_history.function_name = "handleChangeData" 
                  object_history.parameter = `${type},${id},${text},${index},${iteration}`
                  object_history.variable_change = `priority:,!:$*ù${priority}`
                
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
           
                setTitleText("")
      
                setPriority("")
               
                toast.success("successfully updated")
            }
    return (
        <>
             <p style={{textAlign:"left"}}>{t("titleText")}</p>   
 
     
 <InputElement  
       values={data[0]?.text}
       onFormSubmit={handleFormSubmit}
       field_name={data[0]?.field}
 /> 
        
        <div style={{display:"flex",justifyContent:"center"}}>
             
             <PrioritySelectElement 
                 values={data[1]?.priority}
                 onFormSubmit={handleFormSubmit}
                 field_name={data[1]?.field}
             /> 
             
            
            
       
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

export default ContentTitleSingle


