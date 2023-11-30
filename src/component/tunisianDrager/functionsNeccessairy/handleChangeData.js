import {updatePerSection} from "./updatePerSection"




export let handleChangeDataHistory = (characters,global_data,global_object,section_id,type,id,text,index,iteration) =>{
    

  let itemsData = global_data.data_team
    
    let all = itemsData
    
    
    let searcher = itemsData.filter(el => el.id === id)[0]

  
      if(type=="title"){
        if(global_object.title_text!=""){
      
          searcher.children[0]["text"] = global_object.title_text
    
        }
       
  
  
         if(global_object.title_color!=""){
        
          searcher.children[0]["color"] = global_object.title_color

        
        }
        if(global_object.title_hover_color!=""){
          searcher.children[0]["hover_color"] = global_object.title_hover_color
         
        }
         
        if(global_object.title_font_family!=""){
          searcher.children[0]["font_family"] = global_object.title_font_family
   
        }
        if(global_object.title_font_size!=""){
          searcher.children[0]["font_size"] = global_object.title_font_size

        }
        if(global_object.title_padding_top!=""){
          searcher.children[0]["padding_top"] = global_object.title_padding_top

        }
        if(global_object.title_padding_bottom!=""){
          searcher.children[0]["padding_bottom"] = global_object.title_padding_bottom

        }
        if(global_object.title_padding_left!=""){
          searcher.children[0]["padding_left"] = global_object.title_padding_left

        }
        if(global_object.title_padding_right!=""){
          searcher.children[0]["padding_right"] = global_object.title_padding_right

        }
        if(global_object.title_margin_top!=""){
          searcher.children[0]["margin_top"] = global_object.title_margin_top
         
        }
  
        if(global_object.title_margin_bottom!=""){
          searcher.children[0]["margin_bottom"] = global_object.title_margin_bottom 
   
        }
        if(global_object.title_margin_left!=""){
          searcher.children[0]["margin_left"] = global_object.title_margin_left
      
        }
        if(global_object.title_margin_right!=""){
          searcher.children[0]["margin_right"] = global_object.title_margin_right
         
        }
        if(global_object.alignmentTitleAlign!=""){
          searcher.children[0]["text_align"] = global_object.alignmentTitleAlign
      
        }
        if(global_object.priority!=""){
         
          searcher.children[0]["priority"] = global_object.priority
       
        }
        }
  if(type=="description"){
      if(global_object.description_text!=""){
        searcher.children[1]["text"] = global_object.description_text
     
      }
    
      if(global_object.description_text_color!=""){
        searcher.children[1]["color"] = global_object.description_text_color
    
      }
  
      if(global_object.description_hover_color!=""){
        searcher.children[1]["hover_color"] = global_object.description_hover_color
      
      }
  
      if(global_object.title_font_family!=""){
        searcher.children[1]["font_family"] = global_object.title_font_family
    
      }
      if(global_object.title_font_size!=""){
        
        searcher.children[1]["font_size"] = global_object.title_font_size
        
      }
      if(global_object.title_padding_top!=""){
        searcher.children[1]["padding_top"] = global_object.title_padding_top
      
      }
      if(global_object.title_padding_bottom!=""){
        searcher.children[1]["padding_bottom"] = global_object.title_padding_bottom
    
      }
      if(global_object.title_padding_left!=""){
        searcher.children[1]["padding_left"] = global_object.title_padding_left
     
      }
      if(global_object.title_padding_right!=""){
        searcher.children[1]["padding_right"] =global_object.title_padding_right
       
      }
      if(global_object.title_margin_top!=""){
        searcher.children[1]["margin_top"] = global_object.title_margin_top
      
      }
  
      if(global_object.title_margin_bottom!=""){
        searcher.children[1]["margin_bottom"] = global_object.title_margin_bottom
     
      }
      if(global_object.title_margin_left!=""){
        searcher.children[1]["margin_left"] = global_object.title_margin_left
      
      }
      if(global_object.title_margin_right!=""){
        searcher.children[1]["margin_right"] = global_object.title_margin_right
      
      }
      if(global_object.alignmentTitleAlign!=""){
        searcher.children[1]["text_align"] = global_object.alignmentTitleAlign
        
      }
  
  }
  
  
    if(type=="image"){
      if(global_object.logo_content !=""){
        searcher.children[2]["text"] = global_object.logo_content
      
      }
      if(global_object.Image_border_top_left_radius!=""){
        searcher.children[2]["border_top_left_radius"] = global_object.Image_border_top_left_radius
    
      }
      if(global_object.Image_border_top_right_radius!=""){
        searcher.children[2]["border_top_right_radius"] = global_object.Image_border_top_right_radius
    
      }
      if(global_object.Image_border_bottom_right_radius!=""){
        searcher.children[2]["border_bottom_right_radius"] = global_object.Image_border_bottom_right_radius
    
      }
      if(global_object.Image_border_bottom_left_radius!=""){
        searcher.children[2]["border_bottom_left_radius"] = global_object.Image_border_bottom_left_radius
      
      }
      if(global_object.Image_width!=""){
        searcher.children[2]["width"] = global_object.Image_width
       
      }
      if(global_object.Image_height!=""){
        searcher.children[2]["height"] = global_object.Image_height
    
      }
      if(global_object.title_margin_top!=""){
        searcher.children[2]["margin_top"] = global_object.title_margin_top
      
      }
  
      if(global_object.title_margin_bottom!=""){
        searcher.children[2]["margin_bottom"] = global_object.title_margin_bottom
     
      }
      if(global_object.title_margin_left!=""){
        searcher.children[2]["margin_left"] = global_object.title_margin_left
     
      }
      if(global_object.title_margin_right!=""){
        searcher.children[2]["margin_right"] = global_object.title_margin_right
      
      }
  
      if(global_object.ImageBackground!=""){
        searcher.children[2]["background_img"] = global_object.ImageBackground
    
      }
      if(global_object.ImageBackgroundWidth!=""){
    
        searcher.children[2]["widthBackground"] = global_object.ImageBackgroundWidth
    
      }
      if(global_object.ImageBackgroundHeight!=""){
        searcher.children[2]["heightBackground"] = global_object.ImageBackgroundHeight
      
      }
  
    }

  all[index] = searcher
  let data = global_data
  
    let team_html = data.team_html
    
    let hasSlider = data.hasSlider
    let {ch1,global_html,ch2}= updatePerSection(hasSlider,all,team_html,data,searcher,characters,section_id)
  
    let final_html = ch1 + global_html + ch2 
  
    if(data.data_team[0].children[0].lang==="ar"){
      final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
      }else{
        final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
    
      }
    data.section_data = final_html   
  
    return data  
  
    }