
export let handleupdateResponsiveStyle = (data_global,object_to_modify) =>{
    let responsivedesktop = "block"
    let responsiveTablet = "block"
    let responsiveMobile = "block" 
    

   if(object_to_modify.show_desktop=="false"){
        responsivedesktop = "none"
    }

    if(object_to_modify.show_tablet=="false" ){
        responsiveTablet = "none"
    }
    if(object_to_modify.show_mobile == "false"){
        responsiveMobile = "none"
    }
    console.log("data_global",data_global)
    let ch1_css = data_global.old_css.substring(
     0, 
     data_global.old_css.lastIndexOf("/*Begin Responsive Checker */")
 ); 
     let ch2_css =data_global.old_css.substring(
        data_global.old_css.lastIndexOf("/*Begin Responsive Checker */"), 
        data_global.old_css.lastIndexOf("/*End Responsive Checker */")
   ); 
       
    let team_css = data_global.css_responsive
    team_css = team_css
    .replaceAll("{descktopContainerDisplay}",responsivedesktop)
    .replaceAll("{tabletContainerDisplay}",responsiveTablet)
    .replaceAll("{phoneContainerDisplay}",responsiveMobile)
    ch2_css ="/*Begin Responsive Checker */"+ team_css +"/*End Responsive Checker */"
      
    data_global.section_css = ch1_css +ch2_css
     
    return  data_global
}

