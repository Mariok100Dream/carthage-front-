import {updateGlobalStyleJS} from "./updateGlobalStyle"

const hexToRGB = (hex) =>{

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, .6)`;
  
}

export let handleUpdateGlobalStyle = (characters,global_data,global_object,section_id,type) =>{
  let itemsData = global_data.data_team
    
    let all = itemsData
    let searcher = characters.filter(el => el.id === section_id)[0]
      let updates = []
      let data = characters.filter(el =>  el.id == section_id
      
      )[0]

      if(type=="title"){
       if(global_object.title_color!=""){
      
        searcher.global_style[0]["color"] = global_object.title_color
      
      }
      if(global_object.title_hover_color!=""){
        searcher.global_style[0]["hover_color"] = global_object.title_hover_color
 
      }
       
      if(global_object.title_font_family!=""){
        searcher.global_style[0]["font_family"] = global_object.title_font_family
      
      }
      if(global_object.title_font_size!=""){
        searcher.global_style[0]["font_size"] = global_object.title_font_size
     
      }
      if(global_object.title_padding_top!=""){
        searcher.global_style[0]["padding_top"] = global_object.title_padding_top
  
      }
      if(global_object.title_padding_bottom!=""){
        searcher.global_style[0]["padding_bottom"] = global_object.title_padding_bottom
     
      }
      if(global_object.title_padding_left!=""){
        searcher.global_style[0]["padding_left"] = global_object.title_padding_left
     
      }
      if(global_object.title_padding_right!=""){
        searcher.global_style[0]["padding_right"] = global_object.title_padding_right
      
      }
      if(global_object.title_margin_top!=""){
        searcher.global_style[0]["margin_top"] = global_object.title_margin_top
       
      }

      if(global_object.title_margin_bottom!=""){
        searcher.global_style[0]["margin_bottom"] = global_object.title_margin_bottom
    
      }
      if(global_object.title_margin_left!=""){
        searcher.global_style[0]["margin_left"] = global_object.title_margin_left
   
      }
      if(global_object.title_margin_right!=""){
        searcher.global_style[0]["margin_right"] = global_object.title_margin_right

      }
      if(global_object.alignmentTitleAlign!=""){
        searcher.global_style[0]["text_align"] = global_object.alignmentTitleAlign

      }
      }
     
      if(type=="description"){
        if(global_object.description_text_color!=""){
          searcher.global_style[1]["color"] =global_object. description_text_color
    
        }
    
        if(global_object.description_hover_color!=""){
          searcher.global_style[1]["hover_color"] =global_object. description_hover_color
     
        }
    
        if(global_object.title_font_family!=""){
          searcher.global_style[1]["font_family"] = global_object.title_font_family
    
        }
        if(global_object.title_font_size!=""){
          searcher.global_style[1]["font_size"] = global_object.title_font_size
     
        }
        if(global_object.title_padding_top!=""){
          searcher.global_style[1]["padding_top"] = global_object.title_padding_top
      
        }
        if(global_object.title_padding_bottom!=""){
          searcher.global_style[1]["padding_bottom"] = global_object.title_padding_bottom
     
        }
        if(global_object.title_padding_left!=""){
          searcher.global_style[1]["padding_left"] = global_object.title_padding_left
        
        }
        if(global_object.title_padding_right!=""){
          searcher.global_style[1]["padding_right"] = global_object.title_padding_right
       
        }
        if(global_object.title_margin_top!=""){
          searcher.global_style[1]["margin_top"] = global_object.title_margin_top
       
        }
    
        if(global_object.title_margin_bottom!=""){
          searcher.global_style[1]["margin_bottom"] = global_object.title_margin_bottom

        }
        if(global_object.title_margin_left!=""){
          searcher.global_style[1]["margin_left"] = global_object.title_margin_left
      
        }
        if(global_object.title_margin_right!=""){
          searcher.global_style[1]["margin_right"] = global_object.title_margin_right
      
        }
        if(global_object.alignmentTitleAlign!=""){
          searcher.global_style[1]["text_align"] = global_object.alignmentTitleAlign
         
        }
    
    }

    if(type=="image"){
    
      if(global_object.Image_border_top_left_radius!=""){
        searcher.global_style[2]["border_top_left_radius"] = global_object.Image_border_top_left_radius
    
      }
      if(global_object.Image_border_top_right_radius!=""){
        searcher.global_style[2]["border_top_right_radius"] = global_object.Image_border_top_right_radius
      
      }
      if(global_object.Image_border_bottom_right_radius!=""){
        searcher.global_style[2]["border_bottom_right_radius"] = global_object.Image_border_bottom_right_radius
   
      }
      if(global_object.Image_border_bottom_left_radius!=""){
        searcher.global_style[2]["border_bottom_left_radius"] =global_object. Image_border_bottom_left_radius
  
      }
      if(global_object.Image_width!=""){
        searcher.global_style[2]["width"] =global_object. Image_width
    
      }
      if(global_object.Image_height!=""){
        searcher.global_style[2]["height"] =global_object. Image_height
  
      }
      if(global_object.title_margin_top!=""){
        searcher.global_style[2]["margin_top"] = global_object.title_margin_top
      
      }
  
      if(global_object.title_margin_bottom!=""){
        searcher.global_style[2]["margin_bottom"] =global_object. title_margin_bottom
     
      }
      if(global_object.title_margin_left!=""){
        searcher.global_style[2]["margin_left"] = global_object.title_margin_left

      }
      if(global_object.title_margin_right!=""){
        searcher.global_style[2]["margin_right"] = global_object.title_margin_right

      }
  
      if(global_object.ImageBackground!=""){
        searcher.global_style[2]["background_img"] = global_object.ImageBackground
      
      }
      if(global_object.ImageBackgroundWidth!=""){
        searcher.global_style[2]["widthBackground"] = global_object.ImageBackgroundWidth
      
      }
      if(global_object.ImageBackgroundHeight!=""){
        searcher.global_style[2]["heightBackground"] = global_object.ImageBackgroundHeight
      
      }
  
    }
    if(type=="container"){
      if(global_object.title_margin_top!=""){
        searcher.global_style[3]["container_margin_top"] = global_object.title_margin_top
   
      }
  
      if(global_object.title_margin_bottom!=""){
        searcher.global_style[3]["container_margin_bottom"] =global_object. title_margin_bottom
       
      }
      if(global_object.title_margin_left!=""){
        searcher.global_style[3]["container_margin_left"] = global_object.title_margin_left
  
      }
      if(global_object.title_margin_right!=""){
        searcher.global_style[3]["container_margin_right"] = global_object.title_margin_right
        
      }
    }

    if(type=="background"){
      if(global_object.title_color!=""){
        searcher.global_style[4]["backgroundContainercolor"] =  hexToRGB(global_object.title_color)     
        
      }
      if(global_object.logo_content !=""){
        searcher.global_style[4]["backgroundContainerImage"] =global_object. logo_content

     
      }


    }
  

    if(type =="arrowLeft"){ 
      if(global_object.description_text_color!=""){
        searcher.global_style[5]["color"] = global_object.description_text_color
       
      }
      if(global_object.description_hover_color!=""){
        searcher.global_style[5]["hover_color"] = global_object.description_hover_color
      
      
      }
      if(global_object.title_color!=""){
      
        searcher.global_style[5]["background_color"] = global_object.title_color
       
      }
      if(global_object.title_hover_color!=""){
        searcher.global_style[5]["background_hover_color"] = global_object.title_hover_color
       
      }
      if(global_object.title_font_size!=""){
        searcher.global_style[5]["font_size"] = global_object.title_font_size
       
      }
      if(global_object.title_padding_top!=""){
        searcher.global_style[5]["left"] = global_object.title_padding_top
       
      }
      if(global_object.title_padding_bottom!=""){
        searcher.global_style[5]["top"] = global_object.title_padding_bottom
      
      }
    }

    if(type =="arrowRight"){ 
      if(global_object.description_text_color!=""){
        searcher.global_style[6]["color"] = global_object.description_text_color
     
      }
      if(global_object.description_hover_color!=""){
        searcher.global_style[6]["hover_color"] = global_object.description_hover_color
       
      }
      if(global_object.title_color!=""){
      
        searcher.global_style[6]["background_color"] = global_object.title_color
  
      }
      if(global_object.title_hover_color!=""){
        searcher.global_style[6]["background_hover_color"] = global_object.title_hover_color
     
      }
      if(global_object.title_font_size!=""){
        searcher.global_style[6]["font_size"] = global_object.title_font_size
    
      }
      if(global_object.title_padding_top!=""){
        searcher.global_style[6]["left"] = global_object.title_padding_top
    
      }
      if(global_object.title_padding_bottom!=""){
  
        searcher.global_style[6]["top"] = global_object.title_padding_bottom
       
      }
    }

   let {ch1,global_html,ch2} = updateGlobalStyleJS(searcher,data,all)

    let final_html =ch1 + global_html + ch2 
      let data_late = characters.filter(el => el.id != section_id) 
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
