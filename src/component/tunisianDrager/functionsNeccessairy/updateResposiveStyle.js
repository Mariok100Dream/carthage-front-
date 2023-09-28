
export let updateResponsiveStyle = (data_global) =>{
    let responsivedesktop = "block"
    let responsiveTablet = "block"
    let responsiveMobile = "block" 
    console.log(data_global.show_desktop,data_global.show_tablet,data_global.show_mobile)  
    if(data_global.show_desktop==false){
        responsivedesktop = "none"
    }

    if(data_global.show_tablet==false ){
        responsiveTablet = "none"
    }
    if(data_global.show_mobile == false){
        responsiveMobile = "none"
    }
    console.log(responsivedesktop,responsiveTablet,responsiveMobile)

   
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
     
    return  {data_global}
}

