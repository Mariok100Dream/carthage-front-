import {updateSliderForHistory} from "./updateSlider"



export let handleUpdateSlider = (
    characters,
    section_id,
    global_data,
    hasSlider,
    global_object
) =>{
  let itemsData = global_data.data_team
    let all = itemsData

      let data = characters.filter(el =>  el.id == section_id
      
      )[0]

      if(global_object.item576!=""){
        data.item576 = global_object.item576
      }
       if(global_object.item768!=""){
      
        data.item768 = global_object.item768

      
      }
      if(global_object.item1200!=""){
        data.title.item1200 = global_object.item1200
       
      }
       
      if(global_object.autoplay!=""){
        data.autoplay= global_object.autoplay
 
      }
      if(global_object.showDots!=""){
        data.showDots = global_object.showDots

      }

      if(global_object.showArrows!=""){
        data.showArrows = global_object.showArrows

      }
      if(global_object.mouseDrag!=""){
        data.mouseDrag = global_object.mouseDrag

      }
      if(global_object.hasSlider!=""){
        data.hasSlider =  (String(global_object.hasSlider).toLowerCase() === 'true');

      }


   let {ch1,global_html,ch2} = updateSliderForHistory(
    characters,
    section_id,
    data,
    data.hasSlider,
    itemsData
   )

    let final_html =ch1 + global_html + ch2 
  
      if(data.data_team[0].children[0].lang==="ar"){
        final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
        }else{
          final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
      
        }
      

      data.section_data = final_html  
   
       if(hasSlider){
        data.section_css = data.section_css
        .replace("$color_arrow_left",data.global_style[5]["color"])
        .replace("$color_hover_arrow_left",data.global_style[5]["hover_color"])
        .replace("$background_color_arrow_left", data.global_style[5]["background_color"])
        .replace("$background_hover_color_arrow_left ",  data.global_style[5]["background_hover_color"])
        .replace("$font_size_arrow_left ",   data.global_style[5]["font_size"] )
        .replace("$left_position_arrow_left ",   data.global_style[5]["left"] )
        .replace("$top_position_arrow_left ",   data.global_style[5]["top"] )
        //arrow Right 
        .replace(" $color_arrow_right",data.global_style[6]["color"])
        .replace("$color_hover_arrow_right",data.global_style[6]["hover_color"])
        .replace("$background_color_arrow_right", data.global_style[6]["background_color"])
        .replace("$background_hover_color_arrow_right ",  data.global_style[6]["background_hover_color"])
        .replace("$font_size_arrow_right",   data.global_style[6]["font_size"] )
        .replace("$right_position_arrow_right",   data.global_style[6]["left"] )
        .replace("$top_position_arrow_right",   data.global_style[6]["top"] )
       
        
       
      }
      
     
    return data 

  } 
