import axios from "axios"
import {handleUpdateGlobalStyle} from "../functionsNeccessairy/handleUpdateGlobalStyle"
import {handleChangeDataHistory} from "../functionsNeccessairy/handleChangeData"
import {handleUpdateDescription} from "../functionsNeccessairy/handleUpdateDescription"
import {handleUpdateSlider} from "../functionsNeccessairy/handleUpdateSlider"
import {handleupdateResponsiveStyle} from "../functionsNeccessairy/handleUpdateResponsive"
import {handleUpdateTitle} from "../functionsNeccessairy/handleUpdateTitle"
import {handleAddSection} from "../functionsNeccessairy/handleAddSection"
import {handleDeleteSection} from "../functionsNeccessairy/handleDeleteSection"
export const handlerHistory = async(history,data) =>{
  
    let history_of_section = history.filter(el => el.iteration_section == data.iteration_section)
    // Find the index of the item with the specific ID
    const index = history_of_section.findIndex(item => item.iteration_id === data.iteration_id);
    
    // Get all items preceding the specific ID
    const precedingItems = history_of_section.slice(0, index);
    precedingItems.push(data)
    
    
    let table = await axios.get("http://62.72.36.199:5000/api/getTemplates")
    
    
    let global_data = table.data.result.filter(el => el.id == data.iteration_section)[0]
    let characters = table.data.result.filter(el => el.id == data.iteration_section)
   
    for(let i=0;i<precedingItems.length;i++){
      
      //we make functions like handlechange data and update global 
      if(precedingItems[i].function_name ==="handleChangeData"){
    
        let parameters = precedingItems[i].parameter.split(",")
        let parametre1 = parameters[0]
        let parametre2 = parameters[1]
        let parametre3 = parameters[2]
        let parametre4 = parameters[3]
        let parametre5 = parameters[4]
        let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
        let global_object = {
          title_text:spliter_variable[0]=="title_text" ? spliter_variable[1] : "",
          title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
          title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
          title_font_family:spliter_variable[0] =="title_font_family" ? spliter_variable[1] :"",
          title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
          title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] :"",
          title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] :"",
          title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] :"",
          title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "" ,
          title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
          title_margin_bottom:spliter_variable[0] =="title_margin_bottom" ? spliter_variable[1] : "",
          title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
          title_margin_right:spliter_variable[0] == "title_margin_right" ? spliter_variable[1] : "",
          alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] : "",
          priority:spliter_variable[0] =="priority" ? spliter_variable[1]  : "",
          description_text:spliter_variable[0] == "description_text"  ? spliter_variable[1] : "",
          description_text_color:spliter_variable[0] == "description_text_color" ? spliter_variable[1] : "",
          description_hover_color:spliter_variable[0] =="description_hover_color" ? spliter_variable[1] : "",
          url_social_media_adder:spliter_variable[0] == "url_social_media_adder" ? spliter_variable[1] :"",
          selectSocialMedia:spliter_variable[0] == "selectSocialMedia" ? spliter_variable[1] : "",
          logo_content:spliter_variable[0] == "logo_content" ? spliter_variable[1] : "",
          Image_border_top_left_radius:spliter_variable[0] == "Image_border_top_left_radius" ? spliter_variable[1] : "",
          Image_border_top_right_radius:spliter_variable[0] == "Image_border_top_right_radius" ? spliter_variable[1] : "",
          Image_border_bottom_right_radius:spliter_variable[0] == "Image_border_bottom_right_radius" ? spliter_variable[1] : "",
          Image_border_bottom_left_radius:spliter_variable[0] == "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
          Image_width:spliter_variable[0] == "Image_width" ? spliter_variable[1] : "",
          Image_height:spliter_variable[0] == "Image_height" ? spliter_variable[1] :"",
          ImageBackground:spliter_variable[0] == "ImageBackground" ? spliter_variable[1] : "",
          ImageBackgroundWidth:spliter_variable[0] == "ImageBackgroundWidth" ? spliter_variable[1] : "",
          ImageBackgroundHeight:spliter_variable[0] == "ImageBackgroundHeight" ? spliter_variable[1] : ""
      
        }
        global_data = handleChangeDataHistory(
          characters,
          global_data,
          global_object,
          data.iteration_section,
          parametre1,
          parametre2,
          parametre3,
          parametre4,
          parametre5,
          )
         
      
      }
      
      if(precedingItems[i].function_name == "updateGlobalStyle"){
        let parametre1 = precedingItems[i].parameter
        let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
        let global_object = {
          title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
          title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
          title_font_family:spliter_variable[0] == "title_font_family" ? spliter_variable[1] : "",
          title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
          title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] : "",
          title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] : "",
          title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] : "",
          title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "",
          title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
          title_margin_bottom:spliter_variable[0] == "title_margin_bottom" ? spliter_variable[1] : "",
          title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
          title_margin_right:spliter_variable[0] == "title_margin_right"  ? spliter_variable[1] : "",
          alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] :"",
          description_text_color:spliter_variable[0] =="description_text_color" ? spliter_variable[1] : "",
          description_hover_color:spliter_variable[0] == "description_hover_color" ? spliter_variable[1] : "",
          Image_border_top_left_radius:spliter_variable[0] == "Image_border_top_left_radius" ?spliter_variable[1] : "",
          Image_border_top_right_radius:spliter_variable[0] == "Image_border_top_right_radius" ? spliter_variable[1] :"",
          Image_border_bottom_right_radius:spliter_variable[0] == "Image_border_bottom_right_radius" ? spliter_variable[1] :"",
          Image_border_bottom_left_radius:spliter_variable[0] == "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
          Image_width:spliter_variable[0] == "Image_width" ? spliter_variable[1] : "",
          Image_height:spliter_variable[0] == "Image_height" ? spliter_variable[1] :"",
          ImageBackground:spliter_variable[0] == "ImageBackground" ? spliter_variable[1] : "",
          ImageBackgroundWidth:spliter_variable[0]=="ImageBackgroundWidth" ? spliter_variable[1] : "",
          ImageBackgroundHeight:spliter_variable[0]  == "ImageBackgroundHeight" ? spliter_variable[1] : "",
          logo_content:spliter_variable[0] == "logo_content" ? spliter_variable[1] : "",
      
      
        }
     
       global_data = handleUpdateGlobalStyle(
        characters,global_data,global_object,
        data.iteration_section,parametre1
       )
      
      }
      
      if(precedingItems[i].function_name == "handleChangeTitle"){
        let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
        let global_object = {
          title_text:spliter_variable[0] == "title_text" ? spliter_variable[1] : "",
          title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
          title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
          title_font_family:spliter_variable[0] == "title_font_family" ? spliter_variable[1] : "",
          title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
          title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] : "",
          title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] : "",
          title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] : "",
          title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "",
          title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
          title_margin_bottom:spliter_variable[0] == "title_margin_bottom" ? spliter_variable[1] : "",
          title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
          title_margin_right:spliter_variable[0] == "title_margin_right"  ? spliter_variable[1] : "",
          alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] :"",
        
      
        }
     
       global_data = handleUpdateTitle(
        characters,global_data,global_object,
        data.iteration_section
       )
      
      }
    
    //handleChangeDescription
    if(precedingItems[i].function_name == "handleChangeDescription"){
      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
      let global_object = {
        title_text:spliter_variable[0] == "title_text" ? spliter_variable[1] : "",
        title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
        title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
        title_font_family:spliter_variable[0] == "title_font_family" ? spliter_variable[1] : "",
        title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
        title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] : "",
        title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] : "",
        title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] : "",
        title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "",
        title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
        title_margin_bottom:spliter_variable[0] == "title_margin_bottom" ? spliter_variable[1] : "",
        title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
        title_margin_right:spliter_variable[0] == "title_margin_right"  ? spliter_variable[1] : "",
        alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] :"",
      
    
      }
    
     global_data = handleUpdateDescription(
      characters,global_data,global_object,
      data.iteration_section
     )
    
    }
    
    //updateSlider 
    if(precedingItems[i].function_name == "updateSlider"){
      let parameter = precedingItems[i].parameter
      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
      let global_object = {
        item576:spliter_variable[0] == "item576" ? spliter_variable[1] : "",
        item768:spliter_variable[0] == "item768" ? spliter_variable[1] : "",
        item1200:spliter_variable[0] == "item1200" ? spliter_variable[1] : "",
        autoplay:spliter_variable[0] == "autoplay" ? spliter_variable[1] : "",
        showDots:spliter_variable[0] == "showDots" ? spliter_variable[1] : "",
        showArrows:spliter_variable[0] == "showArrows" ? spliter_variable[1] : "",
        mouseDrag:spliter_variable[0] == "mouseDrag" ? spliter_variable[1] : "",
        hasSlider:spliter_variable[0] == "hasSlider" ? spliter_variable[1] : "" 
    
      }
    
     global_data = handleUpdateSlider(
      characters,  data.iteration_section,
      global_data,parameter,
    global_object
     )
     //parameter
    
    }
    
    //updateResponsive
    if(precedingItems[i].function_name == "updateResponsive"){
      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
      let global_object = {
        show_desktop:spliter_variable[0] == "show_desktop" ? spliter_variable[1] : "",
        show_tablet:spliter_variable[0] == "show_tablet" ? spliter_variable[1] : "",
        show_mobile:spliter_variable[0] == "show_mobile" ? spliter_variable[1] : ""
      }
    
     global_data = handleupdateResponsiveStyle(
      global_data,global_object
     )
    
    }

    if(precedingItems[i].function_name == "handleAddSection"){

      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    
      let  numberOfcopiedSection =spliter_variable[0] =="numberOfcopiedSection" ?  spliter_variable[1] : ""
      let section_idd =  precedingItems[i].parameter 
     global_data = handleAddSection(
      characters,global_data,numberOfcopiedSection,section_idd
     )
    
    }
    //handleDeleteSection
    if(precedingItems[i].function_name == "handleDeleteSection"){
    
      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    
      let  numberOfcopiedSection =spliter_variable[0] =="numberOfcopiedSection" ?  spliter_variable[1] : ""
      let section_idd =  precedingItems[i].parameter 
     global_data = handleDeleteSection(
      characters,global_data,numberOfcopiedSection,section_idd
     )
    
    }
    
    }
    return global_data
} 


export const handlerOrders = async(data_sended,iteration_section) =>{

  let precedingItems = data_sended
  let table = await axios.get("http://62.72.36.199:5000/api/getTemplates")
    
    
  let global_data = table.data.result.filter(el => el.id == iteration_section)[0]
  let characters = table.data.result.filter(el => el.id == iteration_section)

  for(let i=0;i<precedingItems.length;i++){
    
    //we make functions like handlechange data and update global 
    if(precedingItems[i].function_name ==="handleChangeData"){
  
      let parameters = precedingItems[i].parameter.split(",")
      let parametre1 = parameters[0]
      let parametre2 = parameters[1]
      let parametre3 = parameters[2]
      let parametre4 = parameters[3]
      let parametre5 = parameters[4]
      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
      let global_object = {
        title_text:spliter_variable[0]=="title_text" ? spliter_variable[1] : "",
        title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
        title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
        title_font_family:spliter_variable[0] =="title_font_family" ? spliter_variable[1] :"",
        title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
        title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] :"",
        title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] :"",
        title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] :"",
        title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "" ,
        title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
        title_margin_bottom:spliter_variable[0] =="title_margin_bottom" ? spliter_variable[1] : "",
        title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
        title_margin_right:spliter_variable[0] == "title_margin_right" ? spliter_variable[1] : "",
        alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] : "",
        priority:spliter_variable[0] =="priority" ? spliter_variable[1]  : "",
        description_text:spliter_variable[0] == "description_text"  ? spliter_variable[1] : "",
        description_text_color:spliter_variable[0] == "description_text_color" ? spliter_variable[1] : "",
        description_hover_color:spliter_variable[0] =="description_hover_color" ? spliter_variable[1] : "",
        url_social_media_adder:spliter_variable[0] == "url_social_media_adder" ? spliter_variable[1] :"",
        selectSocialMedia:spliter_variable[0] == "selectSocialMedia" ? spliter_variable[1] : "",
        logo_content:spliter_variable[0] == "logo_content" ? spliter_variable[1] : "",
        Image_border_top_left_radius:spliter_variable[0] == "Image_border_top_left_radius" ? spliter_variable[1] : "",
        Image_border_top_right_radius:spliter_variable[0] == "Image_border_top_right_radius" ? spliter_variable[1] : "",
        Image_border_bottom_right_radius:spliter_variable[0] == "Image_border_bottom_right_radius" ? spliter_variable[1] : "",
        Image_border_bottom_left_radius:spliter_variable[0] == "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
        Image_width:spliter_variable[0] == "Image_width" ? spliter_variable[1] : "",
        Image_height:spliter_variable[0] == "Image_height" ? spliter_variable[1] :"",
        ImageBackground:spliter_variable[0] == "ImageBackground" ? spliter_variable[1] : "",
        ImageBackgroundWidth:spliter_variable[0] == "ImageBackgroundWidth" ? spliter_variable[1] : "",
        ImageBackgroundHeight:spliter_variable[0] == "ImageBackgroundHeight" ? spliter_variable[1] : ""
    
      }
      global_data = handleChangeDataHistory(
        characters,
        global_data,
        global_object,
        iteration_section,
        parametre1,
        parametre2,
        parametre3,
        parametre4,
        parametre5,
        )
       
    
    }
    
    if(precedingItems[i].function_name == "updateGlobalStyle"){
      let parametre1 = precedingItems[i].parameter
      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
      let global_object = {
        title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
        title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
        title_font_family:spliter_variable[0] == "title_font_family" ? spliter_variable[1] : "",
        title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
        title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] : "",
        title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] : "",
        title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] : "",
        title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "",
        title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
        title_margin_bottom:spliter_variable[0] == "title_margin_bottom" ? spliter_variable[1] : "",
        title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
        title_margin_right:spliter_variable[0] == "title_margin_right"  ? spliter_variable[1] : "",
        alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] :"",
        description_text_color:spliter_variable[0] =="description_text_color" ? spliter_variable[1] : "",
        description_hover_color:spliter_variable[0] == "description_hover_color" ? spliter_variable[1] : "",
        Image_border_top_left_radius:spliter_variable[0] == "Image_border_top_left_radius" ?spliter_variable[1] : "",
        Image_border_top_right_radius:spliter_variable[0] == "Image_border_top_right_radius" ? spliter_variable[1] :"",
        Image_border_bottom_right_radius:spliter_variable[0] == "Image_border_bottom_right_radius" ? spliter_variable[1] :"",
        Image_border_bottom_left_radius:spliter_variable[0] == "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
        Image_width:spliter_variable[0] == "Image_width" ? spliter_variable[1] : "",
        Image_height:spliter_variable[0] == "Image_height" ? spliter_variable[1] :"",
        ImageBackground:spliter_variable[0] == "ImageBackground" ? spliter_variable[1] : "",
        ImageBackgroundWidth:spliter_variable[0]=="ImageBackgroundWidth" ? spliter_variable[1] : "",
        ImageBackgroundHeight:spliter_variable[0]  == "ImageBackgroundHeight" ? spliter_variable[1] : "",
        logo_content:spliter_variable[0] == "logo_content" ? spliter_variable[1] : "",
    
    
      }
   
     global_data = handleUpdateGlobalStyle(
      characters,global_data,global_object,
      iteration_section,parametre1
     )
    
    }
    
    if(precedingItems[i].function_name == "handleChangeTitle"){
      let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
      let global_object = {
        title_text:spliter_variable[0] == "title_text" ? spliter_variable[1] : "",
        title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
        title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
        title_font_family:spliter_variable[0] == "title_font_family" ? spliter_variable[1] : "",
        title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
        title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] : "",
        title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] : "",
        title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] : "",
        title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "",
        title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
        title_margin_bottom:spliter_variable[0] == "title_margin_bottom" ? spliter_variable[1] : "",
        title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
        title_margin_right:spliter_variable[0] == "title_margin_right"  ? spliter_variable[1] : "",
        alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] :"",
      
    
      }
   
     global_data = handleUpdateTitle(
      characters,global_data,global_object,
      iteration_section
     )
    
    }
  
  //handleChangeDescription
  if(precedingItems[i].function_name == "handleChangeDescription"){
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_text:spliter_variable[0] == "title_text" ? spliter_variable[1] : "",
      title_color:spliter_variable[0]=="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] == "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] == "title_font_family" ? spliter_variable[1] : "",
      title_font_size:spliter_variable[0] == "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] == "title_padding_top" ? spliter_variable[1] : "",
      title_padding_bottom:spliter_variable[0] == "title_padding_bottom" ? spliter_variable[1] : "",
      title_padding_left:spliter_variable[0] == "title_padding_left" ? spliter_variable[1] : "",
      title_padding_right:spliter_variable[0] == "title_padding_right" ? spliter_variable[1] : "",
      title_margin_top:spliter_variable[0] == "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] == "title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] == "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] == "title_margin_right"  ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] == "alignmentTitleAlign" ? spliter_variable[1] :"",
    
  
    }
  
   global_data = handleUpdateDescription(
    characters,global_data,global_object,
    iteration_section
   )
  
  }
  
  //updateSlider 
  if(precedingItems[i].function_name == "updateSlider"){
    let parameter = precedingItems[i].parameter
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      item576:spliter_variable[0] == "item576" ? spliter_variable[1] : "",
      item768:spliter_variable[0] == "item768" ? spliter_variable[1] : "",
      item1200:spliter_variable[0] == "item1200" ? spliter_variable[1] : "",
      autoplay:spliter_variable[0] == "autoplay" ? spliter_variable[1] : "",
      showDots:spliter_variable[0] == "showDots" ? spliter_variable[1] : "",
      showArrows:spliter_variable[0] == "showArrows" ? spliter_variable[1] : "",
      mouseDrag:spliter_variable[0] == "mouseDrag" ? spliter_variable[1] : "",
      hasSlider:spliter_variable[0] == "hasSlider" ? spliter_variable[1] : "" 
  
    }
  
   global_data = handleUpdateSlider(
    characters, iteration_section,
    global_data,parameter,
  global_object
   )
   //parameter
  
  }
  
  //updateResponsive
  if(precedingItems[i].function_name == "updateResponsive"){
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      show_desktop:spliter_variable[0] == "show_desktop" ? spliter_variable[1] : "",
      show_tablet:spliter_variable[0] == "show_tablet" ? spliter_variable[1] : "",
      show_mobile:spliter_variable[0] == "show_mobile" ? spliter_variable[1] : ""
    }
  
   global_data = handleupdateResponsiveStyle(
    global_data,global_object
   )
  
  }

  if(precedingItems[i].function_name == "handleAddSection"){

    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  
    let  numberOfcopiedSection =spliter_variable[0] =="numberOfcopiedSection" ?  spliter_variable[1] : ""
    let section_idd =  precedingItems[i].parameter 
   global_data = handleAddSection(
    characters,global_data,numberOfcopiedSection,section_idd
   )
  
  }
  //handleDeleteSection
  if(precedingItems[i].function_name == "handleDeleteSection"){
  
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  
    let  numberOfcopiedSection =spliter_variable[0] =="numberOfcopiedSection" ?  spliter_variable[1] : ""
    let section_idd =  precedingItems[i].parameter 
   global_data = handleDeleteSection(
    characters,global_data,numberOfcopiedSection,section_idd
   )
  
  }
  
  }
  return global_data
}