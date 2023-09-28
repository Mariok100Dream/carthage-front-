import {updateGlobalStyleJS} from "./updateGlobalStyle"
export const  handleAddSection = (characters,global_data,numberOfcopiedSection,section_id) =>{
    let data_copy = global_data.data_team.filter(el => el.id == numberOfcopiedSection)[0]
   let array =  global_data.data_team 
   array.push(data_copy)
    global_data.data_team =array
    let itemsData = global_data.data_team
    
    let all = itemsData
    let searcher = characters.filter(el => el.id === section_id)[0]
 
      let data = characters.filter(el =>  el.id == section_id
      
      )[0]

    let { ch1, ch2, global_html } = updateGlobalStyleJS(searcher,data,all)
    
    let final_html =ch1 + global_html + ch2 

    //   if(itemsData[0].children[0].lang==="ar"){
    //     final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
    //     }else{
    //       final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
      
    //     }
      
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