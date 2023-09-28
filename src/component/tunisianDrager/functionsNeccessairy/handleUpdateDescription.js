import {updateDescriptionJS} from "./UpdateDescription"



export let handleUpdateDescription = (characters,global_data,global_object,section_id) =>{
  let itemsData = global_data.data_team
    let all = itemsData
    let searcher = characters.filter(el => el.id === section_id)[0]
      let updates = []
      let data = characters.filter(el =>  el.id == section_id
      
      )[0]

      if(global_object.title_text!=""){
        data.description.text = global_object.title_text
      }
       if(global_object.title_color!=""){
      
        data.description.color = global_object.title_color

      
      }
      if(global_object.title_hover_color!=""){
        data.description.hover_color = global_object.title_hover_color
       
      }
       
      if(global_object.title_font_family!=""){
        data.description.font_family = global_object.title_font_family
 
      }
      if(global_object.title_font_size!=""){
        data.description.font_size = global_object.title_font_size

      }
      if(global_object.title_padding_top!=""){
        data.description.padding_top = global_object.title_padding_top

      }
      if(global_object.title_padding_bottom!=""){
        data.description.padding_bottom = global_object.title_padding_bottom

      }
      if(global_object.title_padding_left!=""){
        data.description.padding_left = global_object.title_padding_left

      }
      if(global_object.title_padding_right!=""){
        data.description.padding_right = global_object.title_padding_right

      }
      if(global_object.title_margin_top!=""){
        data.description.margin_top = global_object.title_margin_top
       
      }

      if(global_object.title_margin_bottom!=""){
        data.description.margin_bottom = global_object.title_margin_bottom 
 
      }
      if(global_object.title_margin_left!=""){
        data.description.margin_left = global_object.title_margin_left
    
      }
      if(global_object.title_margin_right!=""){
        data.description.margin_right = global_object.title_margin_right
       
      }
      if(global_object.alignmentTitleAlign!=""){
        data.description.text_align = global_object.alignmentTitleAlign
    
      } 

    
   let {ch1,global_html,ch2} = updateDescriptionJS(searcher,data,all)

    let final_html =ch1 + global_html + ch2 

      if(data.data_team[0].children[0].lang==="ar"){
        final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
        }else{
          final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
      
        }
      



      data.section_data = final_html  
        let hasSlider = data.hasSlider
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
      
     
    return data 

  } 
