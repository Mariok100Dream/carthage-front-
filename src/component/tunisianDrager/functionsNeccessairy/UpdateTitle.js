export const updateTitleJS = (searcher, data, all) => {
 
    let team_html = data.team_html;
  
    let hasSlider = data.hasSlider;
  
    if(hasSlider){
  
      team_html = team_html.replace("$section_caller","")
    } else{
      team_html = team_html.replace("$section_caller",data.normale_call_section)
    }
  
  
    let global_html = "<!-- Begin Team -->";
    
    for(let i=0;i<all.length;i++){
  
      let ch =""
      let all_ch = ""
      for(let j=0;j<all[i].children[3].social_media_data.length;j++){
        ch +=data.social_icon_html
        .replace("{font_size_icon}",all[i].children[3].social_media_data[j].font_size_icon)
        .replaceAll("{color_icon}",all[i].children[3].social_media_data[j].color_icon)
        .replace("{color_icon_hover}",all[i].children[3].social_media_data[j].color_icon_hover)
        .replaceAll("{backgroundcolorContainer}",all[i].children[3].social_media_data[j].backgroundcolorContainer)
        .replace("{background_color_hover}",all[i].children[3].social_media_data[j].background_color_hover)
  
        //border radius of icon 
        .replace("{borderRadiusTopLeft}",all[i].children[3].social_media_data[j].borderRadiusTopLeft)
        .replace("{borderRadiusTopRight}",all[i].children[3].social_media_data[j].borderRadiusTopRight)
        .replace("{borderRadiusBottomLeft}",all[i].children[3].social_media_data[j].borderRadiusBottomLeft)
        .replace("{borderRadiusBottomRight}",all[i].children[3].social_media_data[j].borderRadiusBottomRight)
     //width and height of container
     .replace("{widthIcon}",all[i].children[3].social_media_data[j].widthIcon)
     .replace("{heightIcon}",all[i].children[3].social_media_data[j].heightIcon)
        
        if(all[i].children[3].social_media_data[j].name == "Facebook"){
          ch=ch.replace("{icon}","fab fa-facebook")
   
        }
        else if(all[i].children[3].social_media_data[j].name == "Instagram"){
          ch=ch.replace("{icon}","fab fa-instagram")
        
        }
        else if(all[i].children[3].social_media_data[j].name == "YouTube"){
          ch=ch.replace("{icon}","fab fa-youtube")
         
        }
        else if(all[i].children[3].social_media_data[j].name == "Twitter"){
          ch=ch.replace("{icon}","fab fa-twitter")
         
        }
        else if(all[i].children[3].social_media_data[j].name == "TikTok"){
          ch=ch.replace("{icon}","fab fa-tiktok")
       
        }
        else if(all[i].children[3].social_media_data[j].name == "Pinterest"){
          ch=ch.replace("{icon}","fab fa-pinterest")
     
        }
        else if(all[i].children[3].social_media_data[j].name == "Snapchat"){
          ch=ch.replace("{icon}","fab fa-snapchat ")
        
        }
        else if(all[i].children[3].social_media_data[j].name == "LinkedIn"){
          ch=ch.replace("{icon}","fab fa-linkedin ")
      
        }
        else if(all[i].children[3].social_media_data[j].name == "GooglePlus"){
          ch=ch.replace("{icon}","fab fa-google-plus")
        
        }
        else if(all[i].children[3].social_media_data[j].name == "Behance"){
          ch=ch.replace("{icon}","fab fa-behance")
      
        }
        else if(all[i].children[3].social_media_data[j].name == "Gmail"){
          ch=ch.replace("{icon}","fab fa-google")
       
        }
        else if(all[i].children[3].social_media_data[j].name == "goArrow"){
          ch=ch.replace("{icon}","	fas fa-angle-right")
         
        }
        all_ch+=ch
        ch =""
       
      }
  
  
      if(all[i].children[0].priority == "0"){
       global_html += team_html
      .replace("{text}",all[i].children[0].text)
        .replace("{font_size}", data.global_style[0].font_size)
        .replaceAll("{color_title}", data.global_style[0].color)
        .replace("{color_title_hover}",  data.global_style[0].hover_color)
        .replace("{font_family}",  data.global_style[0].font_family)
        .replace("{padding_top}", data.global_style[0].padding_top)
        .replace("{padding_bottom}", data.global_style[0].padding_bottom)
        .replace("{padding_left}",data.global_style[0].padding_left)
        .replace("{padding_right}", data.global_style[0].padding_right)
        .replace("{margin_top}", data.global_style[0].margin_top)
        .replace("{margin_bottom}", data.global_style[0].margin_bottom)
        .replace("{margin_left}", data.global_style[0].margin_left)
        .replace("{margin_right}", data.global_style[0].margin_right)
        .replace("{description}",all[i].children[1].text)
        .replace("{font_size}", data.global_style[1].font_size)
        .replaceAll("{color_description}", data.global_style[1].color)
        .replace("{color_description_hover}", data.global_style[1].hover_color)
        .replace("{font_family}", data.global_style[1].font_family)
        .replace("{padding_top}", data.global_style[1].padding_top)
        .replace("{padding_bottom}", data.global_style[1].padding_bottom)
        .replace("{padding_left}",data.global_style[1].padding_left)
        .replace("{padding_right}",data.global_style[1].padding_right)
        .replace("{image}", all[i].children[2].text)
  
        .replace(
          "{border_top_left_radius}",
          data.global_style[2].border_top_left_radius
        )
        .replace(
          "{border_top_right_radius}",
          data.global_style[2].border_top_right_radius
        )
        .replace(
          "{border_bottom_right_radius}",
          data.global_style[2].border_bottom_right_radius
        )
        .replace(
          "{border_bottom_left_radius}",
          data.global_style[2].border_bottom_left_radius
        )
        .replace("{width}",data.global_style[2].width)
        .replace("{height}", data.global_style[2].height)
        .replace("{margin_top_image}",data.global_style[2].margin_top)
        .replace("{margin_bottom_image}", data.global_style[2].margin_bottom)
        .replace("{margin_left_image}",data.global_style[2].margin_left)
        .replace("{margin_right_image}",data.global_style[2].margin_right)
        .replace("{background_img}", data.global_style[2].background_img)
        .replace("{widthBackground}", data.global_style[2].widthBackground)
        .replace("{heightBackground}",data.global_style[2].heightBackground)
        
        //icon thing just text without url
        .replace("{socialLinkReplacer}", all_ch);
      }
      else if(all[i].children[0].priority == "1"){
  
        global_html += 
        team_html.replace("{text}",
        all[i].children[0].text
        )
        .replace("{text}",all[i].children[0].text)
        .replace("{font_size}",all[i].children[0].font_size)
        .replaceAll("{color_title}",all[i].children[0].color)
        .replace("{color_title_hover}",all[i].children[0].hover_color)
        .replace("{font_family}",all[i].children[0].font_family)
        .replace("{padding_top}",all[i].children[0].padding_top)
        .replace("{padding_bottom}",all[i].children[0].padding_bottom)
        .replace("{padding_left}",all[i].children[0].padding_left)
        .replace("{padding_right}",all[i].children[0].padding_right)
        .replace("{margin_top}",all[i].children[0].margin_top)
        .replace("{margin_bottom}",all[i].children[0].margin_bottom)
        .replace("{margin_left}",all[i].children[0].margin_left)
        .replace("{margin_right}",all[i].children[0].margin_right)
        .replace("{text_align}",all[i].children[0].text_align)
        //description thing
        .replace("{description}",all[i].children[1].text)
        .replace("{font_size}",all[i].children[1].font_size)
        .replaceAll("{color_description}",all[i].children[1].color)
        .replace("{color_description_hover}",all[i].children[1].hover_color)
        .replace("{font_family}",all[i].children[1].font_family)
        .replace("{padding_top}",all[i].children[1].padding_top)
        .replace("{padding_bottom}",all[i].children[1].padding_bottom)
        .replace("{padding_left}",all[i].children[1].padding_left)
        .replace("{padding_right}",all[i].children[1].padding_right)
        .replace("{margin_top}",all[i].children[1].margin_top)
        .replace("{margin_bottom}",all[i].children[1].margin_bottom)
        .replace("{margin_left}",all[i].children[1].margin_left)
        .replace("{margin_right}",all[i].children[1].margin_right)
        .replace("{text_align}",all[i].children[1].text_align)
        //image content
        .replace("{image}",
        all[i].children[2].text
        )
        .replace("{image}",all[i].children[2].text)
        .replace("{border_top_left_radius}",all[i].children[2].border_top_left_radius)
        .replace("{border_top_right_radius}",all[i].children[2].border_top_right_radius)
        .replace("{border_bottom_right_radius}",all[i].children[2].border_bottom_right_radius)
        .replace("{border_bottom_left_radius}",all[i].children[2].border_bottom_left_radius)
        .replace("{width}",all[i].children[2].width)
        .replace("{height}",all[i].children[2].height)
        .replace("{margin_top_image}",all[i].children[2].margin_top)
        .replace("{margin_bottom_image}",all[i].children[2].margin_bottom)
        .replace("{margin_left_image}",all[i].children[2].margin_left)
        .replace("{margin_right_image}",all[i].children[2].margin_right)
        .replace("{background_img}",all[i].children[2].background_img)
        .replace("{widthBackground}",all[i].children[2].widthBackground)
        .replace("{heightBackground}",all[i].children[2].heightBackground)
  
        //icon thing just text without url 
        .replace("{socialLinkReplacer}",all_ch)
      }
   
      
  
   }
    let ch1 = data.section_data.substring(
      0,
      data.section_data.lastIndexOf("<!-- Begin Team -->")
    );
  
    let ch2 = data.section_data.substring(
      data.section_data.lastIndexOf("<!-- End Team -->")
    );
   
    if(data.hasSlider){
      if(ch1.includes("$owl_carousel_show_hide")){
        ch1 = ch1.replace("$owl_carousel_show_hide",data.html_element_parent_for_slider_show)
      
      }else{
        let start = ch1.indexOf("$slider");
       
       ch1 = ch1.substring(0, start) + data.html_element_parent_for_slider_show + ">";
      }
   
    }
    else {
     if(ch1.includes("$owl_carousel_show_hide")){
      ch1 = ch1.replace("$owl_carousel_show_hide",data.html_element_parent_for_slider_hide)
     
     }
     else {
      let start = ch1.indexOf("$slider");
    
     ch1  = ch1.substring(0, start) + data.html_element_parent_for_slider_hide + ">";
      
     }
     
    }
  
    ch1 = ch1
      .replace(
        "{container_margin_top}",
        searcher.global_style[3].container_margin_top
      )
      .replace(
        "{container_margin_bottom}",
        searcher.global_style[3].container_margin_bottom
      )
      .replace(
        "{container_margin_left}",
        searcher.global_style[3].container_margin_left
      )
      .replace(
        "{container_margin_right}",
        searcher.global_style[3].container_margin_right
      )
      .replaceAll(
        "{backgroundContainercolor}",
        searcher.global_style[4].backgroundContainercolor
      )
      .replace(
        "{backgroundContainerImage}",
        searcher.global_style[4].backgroundContainerImage
      );
  
    //section change the class of the main card
   
    //section  add js
    let code_js = data.ch_slider_code_js_show
      .replaceAll("$item1200", data.item1200)
      .replace("$autoplay", data.autoplay)
      .replace("$showDots", data.showDots)
      .replace("$showArrows", data.showArrows)
      .replace("$mouseDrag", data.mouseDrag)
      .replaceAll("$item576", data.item576)
      .replace("$item768", data.item768);
        
      ch2 = ch2.substring(0,ch2.indexOf("<!-- owl carousel functionality-->"))
  
      if(hasSlider){
        //already exist then change some functionality  
        if(ch2.includes("<!-- owl carousel functionality-->")){
          //all controls goes here 
          ch2 =ch2 +"<!-- owl carousel functionality-->"+code_js
        }
        //no exist and he call the slider
        else{
          //we need to add other functionality that something change 
          //or we map it all 
          ch2 =ch2 +"<!-- owl carousel functionality-->"+code_js
          
        }
    
      }
      else{
        ch2 += "<!-- owl carousel functionality-->"
      }
      let ch1_title = ch1.substring(
        0,
        ch1.indexOf("<!-- Begin Title -->")
      ) 
      let ch2_title = ch1.substring(
        ch1.indexOf("<!-- End Title -->"),
        ch1.length
      ) 
      //we modify title as usual 
       let new_title ="<!-- Begin Title -->" +
       data.title_html
       .replace("{text}",data.title.text)
        .replace("{font_size}", data.title.font_size)
        .replaceAll("{color_title}", data.title.color)
        .replace("{color_title_hover}",  data.title.hover_color)
        .replace("{font_family}",  data.title.font_family)
        .replace("{padding_top}", data.title.padding_top)
        .replace("{padding_bottom}", data.title.padding_bottom)
        .replace("{padding_left}",data.title.padding_left)
        .replace("{padding_right}", data.title.padding_right)
        .replace("{margin_top}", data.title.margin_top)
        .replace("{margin_bottom}", data.title.margin_bottom)
        .replace("{margin_left}", data.title.margin_left)
        .replace("{margin_right}", data.title.margin_right)
      
  
        ch1 = ch1_title + new_title + ch2_title
  
  
      //description add things 


let ch1_description = ch1.substring(
    0,
    ch1.indexOf("<!-- Begin Description -->")
  ) 
  let ch2_description = ch1.substring(
    ch1.indexOf("<!-- End Description -->"),
    ch1.length
  ) 
  //we modify description as usual 
   let new_description ="<!-- Begin Description -->" +
   data.description_html
   .replace("{text}",data.description.text)
    .replace("{font_size}", data.description.font_size)
    .replaceAll("{color_title}", data.description.color)
    .replace("{color_title_hover}",  data.description.hover_color)
    .replace("{font_family}",  data.description.font_family)
    .replace("{padding_top}", data.description.padding_top)
    .replace("{padding_bottom}", data.description.padding_bottom)
    .replace("{padding_left}",data.description.padding_left)
    .replace("{padding_right}", data.description.padding_right)
    .replace("{margin_top}", data.description.margin_top)
    .replace("{margin_bottom}", data.description.margin_bottom)
    .replace("{margin_left}", data.description.margin_left)
    .replace("{margin_right}", data.description.margin_right)
    

    ch1 = ch1_description + new_description + ch2_description


    return { ch1, ch2, global_html };
  };
  