import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
//root constants
import {
    angularJson
} from "./angularCss/root/angularJson"
import {PackageJson} from "./angularCss/root/packageJson"
import {tsConfigApp} from "./angularCss/root/tsconfigApp"
import {tsConfigJson} from "./angularCss/root/tsconfigJSON"
import {tsconfigSpecJson} from "./angularCss/root/tsconfigSpecJson"
//app
import {appComponentcss} from "./angularCss/app/appcomponentCsssrcApp"
import {appcompoentHtml} from "./angularCss/app/appComponenthtmlsrcApp"
import {appComponentSpec} from "./angularCss/app/appComponentSpecSrcApp"
import {appComponentTs} from "./angularCss/app/appComponentSrcApp"
import {appModuleTSSrcApp} from "./angularCss/app/appModuleTsSrcApp"
import {appRoutingModule} from "./angularCss/app/appRoutingModuleSrcApp"
//src 
import {indeHtmlSrc} from "./angularCss/src/indexHtmlSrc"
import {mainTsSrc} from "./angularCss/src/mainTsSrc"
import {styleCssSrc} from "./angularCss/src/stylesCssSrc"


//scss 
//root
import {angularJsonScss} from "./angularScss/root/angularJsonScss"
import {packageJsonScss} from "./angularScss/root/packageJsonScss"
import {tsConfigAppScss} from "./angularScss/root/tsConfigAppScss"
import {tsConfigJsonScss} from "./angularScss/root/tsConfigJsonScss"
import {tsconfigSpecJsonScss} from "./angularScss/root/tsconfigSpecJsonScss"
//app 
import {appComponentHtmlScss} from "./angularScss/app/appComponentHtmlScss"
import {appComponentSpecScss} from "./angularScss/app/appComponentSpecScss"
import {appComponentStyleScss} from "./angularScss/app/appComponentStyleScss"
import {appComponentTsScss} from "./angularScss/app/appComponentTsScss"
import {appModuleScss} from "./angularScss/app/appModuleScss"
import {appRoutingModuleTsScss} from "./angularScss/app/appRoutingModuleTsScss"
//src 
import {indexhtmlScss} from "./angularScss/src/indexhtmlScss"
import {mainTsScss} from "./angularScss/src/mainTsScss"
import {stylesScss} from "./angularScss/src/stylesScss"

//sass 
//root 
import {angularJsonSass} from "./angularSass/root/angularJsonSass"
import {packagejsonSass} from "./angularSass/root/packageJsonSass"
import {tsConfigAppjsonSass} from "./angularSass/root/tsConfigAppJsonSass"
import {tsconfigJsonSass} from "./angularSass/root/tsconfigJsonSass"
import {tsConfigSpecJsonSass} from "./angularSass/root/tsconfigSpescJsonSass"
//src 
import {indexHtmlSass} from "./angularSass/src/indexHtmlSass"
import {mainTsSass} from "./angularSass/src/mainTsSass"
import {styleSass} from "./angularSass/src/styleSass"
//app 
import {appComponentSass} from "./angularSass/app/appComponentSass"
import {appComponentSpecSass} from "./angularSass/app/appComponentSpecSass"
import {appModuleTsSass} from "./angularSass/app/appModuleTsSass"
import {appRoutingSass} from "./angularSass/app/appRoutingTsSass"

//less 
//root
import {angularJsonLess} from "./angularLess/root/angularJsonless"
import {packageJsonLess} from "./angularLess/root/packagejsonless"
import {tsconfigappjsonless} from "./angularLess/root/tsconfigappjsonless"
import {tsconfigjsonless} from "./angularLess/root/tsconfigjsonless"
import {tsconfigspecjsonless} from "./angularLess/root/tsconfigspecJsonless"
//src 
import {indexHtmlLess} from "./angularLess/src/indexHtmlLess"
import {maintsLess} from "./angularLess/src/mainTsLess"
import {styleLess} from "./angularLess/src/styleLess"

//app 
import {appComponentTSLess} from "./angularLess/app/appComponentTsLess"
import {appModuleLess} from "./angularLess/app/appModuleLess"
import {appRoutingLess} from "./angularLess/app/appRoutingLess"
import {appSpecLess} from "./angularLess/app/appSpecLess"

import JSZip from "jszip"
import  FileSaver from 'file-saver' 
import beautify from "js-beautify"

//get all the templates
import {Templates} from "../../templates"
import {cssToSassOrLess} from "../functions/csstosass"
import RocketLoader from "../RocketLoader/RocketLoader"
const AngularExport = (props) =>{
    const {id}  = props 
    const [typeOExport , setTypeOfExport] = React.useState('css');

    const handleChangeTypeOfExport = (event) => {
    setTypeOfExport(event.target.value);
  };
  let [component_name,setComponentName] = useState("")
  let [go,setGo] = useState(false)

  let  getStringsBetween = (str, start, end) => {
    let results = [];
    let index = str.indexOf(start);
    
    while (index !== -1) {
      let endIndex = str.indexOf(end, index + start.length);
      if (endIndex !== -1) {
        results.push(str.substring(index + start.length, endIndex));
        index = str.indexOf(start, endIndex + end.length);
      } else {
        break;
      }
    }
    
    return results;
  }
  


  let handleExportAngularCss = () =>{
   setGo(true)
    let searcher = Templates.filter(el => el.id == id)[0]

    let zip = new JSZip();
    //root files 

    zip.file("tsconfig.app.json",tsConfigApp)
    zip.file("tsconfig.json",tsConfigJson)   
    zip.file("tsconfig.spec.json",tsconfigSpecJson) 
    //src files 
    let srcFolder = zip.folder("src")
    srcFolder.file("index.html",indeHtmlSrc)
    srcFolder.file("main.ts",mainTsSrc)
    srcFolder.file("styles.css",styleCssSrc)
    //app folder 
    let appFolder = srcFolder.folder("app")
    let assetsFolder = srcFolder.folder("assets")
    let imagesFolder = assetsFolder.folder("images")
    let html = ""
     if(searcher.hasSlider){

        //here first we add in package .json the libery used 
        //libery name used is ngx-owl-carousel-o 
       //docs  https://www.npmjs.com/package/ngx-owl-carousel-o 
       //so for configuration setup  
       //in angular.json file we add 
       //$import_libery 
       // with those values 
       // "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.carousel.min.css",
      // "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.theme.default.min.css",
      //in the main style we add  the imports 
      //@import 'ngx-owl-carousel-o/lib/styles/scss/owl.carousel';
      //@import 'ngx-owl-carousel-o/lib/styles/scss/owl.theme.default';
      //in app module .ts we add 
      //import and configuration 
      //import { CarouselModule } from 'ngx-owl-carousel-o';
      //in imports array we add CarouselModule
       //in the main component ts wee add 
       //import { OwlOptions } from 'ngx-owl-carousel-o';
       //for component html 
    //    <owl-carousel-o [options]="customOptions">
    //    <ng-template carouselSlide>Slide 1</ng-template>  
    //    <ng-template carouselSlide>Slide 2</ng-template>  
    //    <ng-template carouselSlide>Slide 3</ng-template>  
    //  </owl-carousel-o> 


    html =  
    appcompoentHtml.replace("$compoenthtml",searcher.section_data)
    .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
    .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
    .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
    .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
    .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
    .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
    .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
    .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
    .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)

   //image replace and adder to assets 
   let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []

     var unique = [...new Set(base64data)]
    for(let i=0;i<unique.length;i++){
       imagesFolder.file(`${i}.jpg`,
     unique[i].split(",")[1]
     ,{"base64": true})
     
     html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

    } 
    let team_header  = html.substring(
      0, 
      html.lastIndexOf("<!--team here -->")
    );
    let team_sections =  getStringsBetween(html, "<!-- begin section call -->", "<!-- end section call -->");
    let team_footer = html.substring(
      html.lastIndexOf("<!-- begin footer -->"), 
      html.lastIndexOf("<!-- owl carousel functionality-->")
    );
     let string_for_owl_carousel = `<owl-carousel-o [options]="customOptions">`
     for(let i=0;i<team_sections.length;i++){
      string_for_owl_carousel+="<ng-template carouselSlide>" +
      team_sections[i]+
      "</ng-template> \n "
     } 
     string_for_owl_carousel += `  </owl-carousel-o>`
     html = team_header+ string_for_owl_carousel + team_footer
   
     let object_ts =" customOptions: OwlOptions = { \n"+
      searcher.angular_object_to_export
     .replaceAll("$item1200",searcher.item1200)
     .replace("$autoplay",searcher.autoplay)
     .replace("$showDots",searcher.showDots)
     .replace("$showArrows",searcher.showArrows)
     .replace("$mouseDrag",searcher.mouseDrag)  
     .replaceAll("$item576",searcher.item576)
     .replace("$item768",searcher.item768)
     .replace("$item1200",searcher.item1200)
     + "\n }"
 

    zip.file("angular.json",angularJson.replace("$imports_liberys",
   `
   "node_modules/animate.css/animate.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.carousel.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.theme.default.min.css",
   
   ` 
    ))
    zip.file("package.json",PackageJson.replace("$packages_imports",`
    "animate.css": "^4.1.1",
    "ngx-owl-carousel-o": "15.0.1",
    `))

    appFolder.file("app.module.ts",appModuleTSSrcApp.replace("$import_modules",
    `
    import { CarouselModule } from 'ngx-owl-carousel-o'; 
   `).replace("$import_modules_in_import",`
   CarouselModule
   `) )
   appFolder.file("app.component.ts",
   appComponentTs.replace("$functionalityAppComponentTs",object_ts)
   .replace("$import_libery_owl","import { OwlOptions } from 'ngx-owl-carousel-o'; \n")
   )

     } 
     else{
        //change html 
        html =  
         appcompoentHtml.replace("$compoenthtml",searcher.section_data)
         .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
         .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
         .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
         .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
         .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
         .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
         .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
         .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
         .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)
   
        //image replace and adder to assets 
        let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []
   
      var unique = [...new Set(base64data)]
      for(let i=0;i<unique.length;i++){
        imagesFolder.file(`${i}.jpg`,
          unique[i].split(",")[1]
          ,{"base64": true})
          
          html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

      }  
      zip.file("angular.json",angularJson.replace("$imports_liberys",""))
      zip.file("package.json",PackageJson.replace("$packages_imports",""))
      appFolder.file("app.module.ts",appModuleTSSrcApp
      .replace("$import_modules","")
      .replace("import_modules_in_import","")
      )
      appFolder.file("app.component.ts",
      appComponentTs.replace("$functionalityAppComponentTs","")
      .replace("$import_libery_owl","")
      )
    }  
    html = beautify.html_beautify(html)

    let  style=  beautify.css_beautify(searcher.section_css) 
     
     
    appFolder.file("app.component.css",style)

    appFolder.file("app.component.html",html)
    appFolder.file("app.component.spec.ts",appComponentSpec)

  
    appFolder.file("app-routing.module.ts",appRoutingModule)
  

    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, `${component_name}.zip`);
    }); 


  } 

  let handleExportAngularScss = () =>{
   
    let searcher = Templates.filter(el => el.id == id)[0]

    let zip = new JSZip();
    //root files 
    zip.file("angular.json",angularJsonScss)
    zip.file("package.json",packageJsonScss)
    zip.file("tsconfig.app.json",tsConfigAppScss)
    zip.file("tsconfig.json",tsConfigJsonScss)   
    zip.file("tsconfig.spec.json",tsconfigSpecJsonScss) 
    //src files 
    let srcFolder = zip.folder("src")
    srcFolder.file("index.html",indexhtmlScss)
    srcFolder.file("main.ts",mainTsScss)
    
    //app folder 
    let appFolder = srcFolder.folder("app")
    let assetsFolder = srcFolder.folder("assets")
    let imagesFolder = assetsFolder.folder("images")
    let html = ""
    if(searcher.hasSlider){
   

    html =  
    appcompoentHtml.replace("$compoenthtml",searcher.section_data)
    .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
    .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
    .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
    .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
    .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
    .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
    .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
    .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
    .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)

   //image replace and adder to assets 
   let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []

     var unique = [...new Set(base64data)]
    for(let i=0;i<unique.length;i++){
       imagesFolder.file(`${i}.jpg`,
     unique[i].split(",")[1]
     ,{"base64": true})
     
     html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

    } 
    let team_header  = html.substring(
      0, 
      html.lastIndexOf("<!--team here -->")
    );
    let team_sections =  getStringsBetween(html, "<!-- begin section call -->", "<!-- end section call -->");
    let team_footer = html.substring(
      html.lastIndexOf("<!-- begin footer -->"), 
      html.lastIndexOf("<!-- owl carousel functionality-->")
    );

     let string_for_owl_carousel = `<owl-carousel-o [options]="customOptions">`
     for(let i=0;i<team_sections.length;i++){
      string_for_owl_carousel+="<ng-template carouselSlide>" +
      team_sections[i]+
      "</ng-template> \n "
     } 
     string_for_owl_carousel += `  </owl-carousel-o>`
     html = team_header+ string_for_owl_carousel + team_footer
   
     let object_ts =" customOptions: OwlOptions = { \n"+
      searcher.angular_object_to_export
     .replaceAll("$item1200",searcher.item1200)
     .replace("$autoplay",searcher.autoplay)
     .replace("$showDots",searcher.showDots)
     .replace("$showArrows",searcher.showArrows)
     .replace("$mouseDrag",searcher.mouseDrag)  
     .replaceAll("$item576",searcher.item576)
     .replace("$item768",searcher.item768)
     .replace("$item1200",searcher.item1200)
     + "\n }"
 

    zip.file("angular.json",angularJsonScss.replace("$imports_liberys",
   `
   "node_modules/animate.css/animate.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.carousel.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.theme.default.min.css",
   
   ` 
    ))
    zip.file("package.json",packageJsonScss.replace("$packages_imports",`
    "animate.css": "^4.1.1",
    "ngx-owl-carousel-o": "15.0.1",
    `))

    appFolder.file("app.module.ts",appModuleScss.replace("$import_modules",
    `
    import { CarouselModule } from 'ngx-owl-carousel-o'; 
   `).replace("$import_modules_in_import",`
   CarouselModule
   `) )
   appFolder.file("app.component.ts",
   appComponentTsScss.replace("$functionalityAppComponentTs",object_ts)
   .replace("$import_libery_owl","import { OwlOptions } from 'ngx-owl-carousel-o'; \n")
   )
   srcFolder.file("styles.scss",`
   @import 'ngx-owl-carousel-o/lib/styles/scss/owl.carousel';
   @import 'ngx-owl-carousel-o/lib/styles/scss/owl.theme.default';
   `)
     }  else{
        //change html 
        html =  
         appcompoentHtml.replace("$compoenthtml",searcher.section_data)
         .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
         .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
         .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
         .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
         .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
         .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
         .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
         .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
         .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)
   
        //image replace and adder to assets 
        let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []
   
      var unique = [...new Set(base64data)]
      for(let i=0;i<unique.length;i++){
        imagesFolder.file(`${i}.jpg`,
          unique[i].split(",")[1]
          ,{"base64": true})
          
          html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

      }  
      srcFolder.file("styles.scss",stylesScss)   

      zip.file("angular.json",angularJsonScss.replace("$imports_liberys",
      `
     
      ` 
       ))
       zip.file("package.json",packageJsonScss.replace("$packages_imports",` `))
   
       appFolder.file("app.module.ts",appModuleScss.replace("$import_modules",
       `
     `).replace("$import_modules_in_import",`
    `) )
      appFolder.file("app.component.ts",
      appComponentTsScss.replace("$functionalityAppComponentTs","")
      .replace("$import_libery_owl","")
      )
      srcFolder.file("styles.scss",``)
    
    }

 
      let style = searcher.section_css
      
      var fish = new cssToSassOrLess();
      var settings = {
          'comments': true,
          'variables': true,
          'convert': "scss"
      };
      if(!searcher.hasSlider){
          style = style.substring(0,style.indexOf(" /*End Responsive Checker */")) 
      }
     
      let with_media_tag =  style.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+[^\}]+\}/g) || []


      let result = []
  
      for(let i=0;i<with_media_tag.length;i++){
        let ch1 = with_media_tag[i].substring(0,with_media_tag[i].indexOf("{"))
        let ch2 =  with_media_tag[i].substring(with_media_tag[i].indexOf("{"),with_media_tag[i].length-1)
     
        style = style.replace(with_media_tag[i],"")  
      
        let f = {
          media_tag: ch1 + "{ \n",
          media_string:ch2.replace("{","") 
        }
        result.push(f)
      }
  
      style = fish.scrub(style, settings)
      style = style.replaceAll("@c","$c")
      let style_media = ""
      for(let i=0;i<result.length;i++){
        let fishstring = fish.scrub(result[i].media_string, settings)
        style_media+=result[i].media_tag + 
        fishstring.replaceAll("@c","$c") + "} \n" 
      }        
      
      
      style = style +style_media
    
      
  
    appFolder.file("app.component.scss",style)
    appFolder.file("app.component.html",html)
    appFolder.file("app.component.spec.ts",appComponentSpecScss)

    appFolder.file("app-routing.module.ts",appRoutingModuleTsScss)

    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, `${component_name}.zip`);
    }); 
  } 




  let handleExportAngularSass = () =>{
   
    let searcher = Templates.filter(el => el.id == id)[0]

    let zip = new JSZip();
    //root files 

    zip.file("tsconfig.app.json",tsConfigAppjsonSass)
    zip.file("tsconfig.json",tsconfigJsonSass)   
    zip.file("tsconfig.spec.json",tsConfigSpecJsonSass) 
    //src files 
    let srcFolder = zip.folder("src")
    srcFolder.file("index.html",indexHtmlSass)
    srcFolder.file("main.ts",mainTsSass)

    //app folder 
    let appFolder = srcFolder.folder("app")
    let assetsFolder = srcFolder.folder("assets")
    let imagesFolder = assetsFolder.folder("images")
    let html = ""
    if(searcher.hasSlider){
   

    html =  
    appcompoentHtml.replace("$compoenthtml",searcher.section_data)
    .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
    .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
    .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
    .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
    .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
    .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
    .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
    .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
    .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)

   //image replace and adder to assets 
   let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []

     var unique = [...new Set(base64data)]
    for(let i=0;i<unique.length;i++){
       imagesFolder.file(`${i}.jpg`,
     unique[i].split(",")[1]
     ,{"base64": true})
     
     html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

    } 
    let team_header  = html.substring(
      0, 
      html.lastIndexOf("<!--team here -->")
    );
    let team_sections =  getStringsBetween(html, "<!-- begin section call -->", "<!-- end section call -->");
    let team_footer = html.substring(
      html.lastIndexOf("<!-- begin footer -->"), 
      html.lastIndexOf("<!-- owl carousel functionality-->")
    );
     let string_for_owl_carousel = `<owl-carousel-o [options]="customOptions">`
     for(let i=0;i<team_sections.length;i++){
      string_for_owl_carousel+="<ng-template carouselSlide>" +
      team_sections[i]+
      "</ng-template> \n "
     } 
     string_for_owl_carousel += `  </owl-carousel-o>`
     html = team_header+ string_for_owl_carousel + team_footer

     let object_ts =" customOptions: OwlOptions = { \n"+
      searcher.angular_object_to_export
     .replaceAll("$item1200",searcher.item1200)
     .replace("$autoplay",searcher.autoplay)
     .replace("$showDots",searcher.showDots)
     .replace("$showArrows",searcher.showArrows)
     .replace("$mouseDrag",searcher.mouseDrag)  
     .replaceAll("$item576",searcher.item576)
     .replace("$item768",searcher.item768)
     .replace("$item1200",searcher.item1200)
     + "\n }"
 

    zip.file("angular.json",angularJsonSass.replace("$imports_liberys",
   `
   "node_modules/animate.css/animate.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.carousel.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.theme.default.min.css",
   
   ` 
    ))
    zip.file("package.json",packagejsonSass.replace("$packages_imports",`
    "animate.css": "^4.1.1",
    "ngx-owl-carousel-o": "15.0.1",
    `))

    appFolder.file("app.module.ts",appModuleTsSass.replace("$import_modules",
    `
    import { CarouselModule } from 'ngx-owl-carousel-o'; 
   `).replace("$import_modules_in_import",`
   CarouselModule
   `) )
   appFolder.file("app.component.ts",
   appComponentSass.replace("$functionalityAppComponentTs",object_ts)
   .replace("$import_libery_owl","import { OwlOptions } from 'ngx-owl-carousel-o'; \n")
   )
   srcFolder.file("styles.sass",`
   @import 'ngx-owl-carousel-o/lib/styles/scss/owl.carousel';
   @import 'ngx-owl-carousel-o/lib/styles/scss/owl.theme.default';
   `)
     } 
      else{
        //change html 
        html =  
         appcompoentHtml.replace("$compoenthtml",searcher.section_data)
         .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
         .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
         .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
         .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
         .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
         .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
         .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
         .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
         .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)
   
        //image replace and adder to assets 
        let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []
   
      var unique = [...new Set(base64data)]
      for(let i=0;i<unique.length;i++){
        imagesFolder.file(`${i}.jpg`,
          unique[i].split(",")[1]
          ,{"base64": true})
          
          html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

      }  
     

      zip.file("angular.json",angularJsonSass.replace("$imports_liberys",
      `
  
      ` 
       ))
       zip.file("package.json",packagejsonSass.replace("$packages_imports",`

       `))
   
       appFolder.file("app.module.ts",appModuleTsSass.replace("$import_modules",
       `
      
      `).replace("$import_modules_in_import",`
 
      `) )
      appFolder.file("app.component.ts",
      appComponentSass.replace("$functionalityAppComponentTs","")
      .replace("$import_libery_owl","")
      )
      srcFolder.file("styles.sass",`
    
      `)



    }  
 
      let style = searcher.section_css
      
      var fish = new cssToSassOrLess();
      var settings = {
          'comments': true,
          'variables': true,
          'convert': "sass"
      };
      if(!searcher.hasSlider){
          style = style.substring(0,style.indexOf(" /*End Responsive Checker */")) 
      }
     
      let with_media_tag =  style.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+[^\}]+\}/g) || []


      let result = []
  
      for(let i=0;i<with_media_tag.length;i++){
        let ch1 = with_media_tag[i].substring(0,with_media_tag[i].indexOf("{"))
        let ch2 =  with_media_tag[i].substring(with_media_tag[i].indexOf("{"),with_media_tag[i].length-1)
     
        style = style.replace(with_media_tag[i],"")  
      
        let f = {
          media_tag: ch1 + " \n",
          media_string:ch2.replace("{","") 
        }
        result.push(f)
      }
  
      style = fish.scrub(style, settings)
      style = style.replaceAll("@c","$c")
      let style_media = ""
      for(let i=0;i<result.length;i++){
        let fishstring = fish.scrub(result[i].media_string, settings)
        style_media+=result[i].media_tag + 
        fishstring.replaceAll("@c","$c") + " \n" 
      }        
      style = style +style_media
    appFolder.file("app.component.sass",style)
    appFolder.file("app.component.html",html)
    appFolder.file("app.component.spec.ts",appComponentSpecSass)

    appFolder.file("app-routing.module.ts",appRoutingSass)

    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, `${component_name}.zip`);
    }); 
  } 



  let handleExportAngularLess = () =>{
   
    let searcher = Templates.filter(el => el.id == id)[0]

    let zip = new JSZip();
    //root files 
 
    zip.file("tsconfig.app.json",tsconfigappjsonless)
    zip.file("tsconfig.json",tsconfigjsonless)   
    zip.file("tsconfig.spec.json",tsconfigspecjsonless) 
    //src files 
    let srcFolder = zip.folder("src")
    srcFolder.file("index.html",indexHtmlLess)
    srcFolder.file("main.ts",maintsLess)
    //app folder 
    let appFolder = srcFolder.folder("app")
    let assetsFolder = srcFolder.folder("assets")
    let imagesFolder = assetsFolder.folder("images")
    let html = ""
    if(searcher.hasSlider){
   
    html =  
    appcompoentHtml.replace("$compoenthtml",searcher.section_data)
    .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
    .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
    .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
    .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
    .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
    .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
    .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
    .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
    .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)

   //image replace and adder to assets 
   let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []

     var unique = [...new Set(base64data)]
    for(let i=0;i<unique.length;i++){
       imagesFolder.file(`${i}.jpg`,
     unique[i].split(",")[1]
     ,{"base64": true})
     
     html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

    } 
    let team_header  = html.substring(
      0, 
      html.lastIndexOf("<!--team here -->")
    );
    let team_sections =  getStringsBetween(html, "<!-- begin section call -->", "<!-- end section call -->");
    let team_footer = html.substring(
      html.lastIndexOf("<!-- begin footer -->"), 
      html.lastIndexOf("<!-- owl carousel functionality-->")
    );
     let string_for_owl_carousel = `<owl-carousel-o [options]="customOptions">`
     for(let i=0;i<team_sections.length;i++){
      string_for_owl_carousel+="<ng-template carouselSlide>" +
      team_sections[i]+
      "</ng-template> \n "
     } 
     string_for_owl_carousel += `  </owl-carousel-o>`
     html = team_header+ string_for_owl_carousel + team_footer

     let object_ts =" customOptions: OwlOptions = { \n"+
      searcher.angular_object_to_export
     .replaceAll("$item1200",searcher.item1200)
     .replace("$autoplay",searcher.autoplay)
     .replace("$showDots",searcher.showDots)
     .replace("$showArrows",searcher.showArrows)
     .replace("$mouseDrag",searcher.mouseDrag)  
     .replaceAll("$item576",searcher.item576)
     .replace("$item768",searcher.item768)
     .replace("$item1200",searcher.item1200)
     + "\n }"
 

    zip.file("angular.json",angularJsonLess.replace("$imports_liberys",
   `
   "node_modules/animate.css/animate.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.carousel.min.css",
   "node_modules/ngx-owl-carousel-o/lib/styles/prebuilt-themes/owl.theme.default.min.css",
   
   ` 
    ))
    zip.file("package.json",packageJsonLess.replace("$packages_imports",`
    "animate.css": "^4.1.1",
    "ngx-owl-carousel-o": "15.0.1",
    `))

    appFolder.file("app.module.ts",appModuleLess.replace("$import_modules",
    `
    import { CarouselModule } from 'ngx-owl-carousel-o'; 
   `).replace("$import_modules_in_import",`
   CarouselModule
   `) )
   appFolder.file("app.component.ts",
   appComponentTSLess.replace("$functionalityAppComponentTs",object_ts)
   .replace("$import_libery_owl","import { OwlOptions } from 'ngx-owl-carousel-o'; \n")
   )
   srcFolder.file("styles.less",`
   @import 'ngx-owl-carousel-o/lib/styles/scss/owl.carousel';
   @import 'ngx-owl-carousel-o/lib/styles/scss/owl.theme.default';
   `)
     }  
     else{
        //change html 
        html =  
         appcompoentHtml.replace("$compoenthtml",searcher.section_data)
         .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
         .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
         .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
         .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
         .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
         .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
         .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
         .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
         .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
         .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)
   
        //image replace and adder to assets 
        let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []
   
      var unique = [...new Set(base64data)]
      for(let i=0;i<unique.length;i++){
        imagesFolder.file(`${i}.jpg`,
          unique[i].split(",")[1]
          ,{"base64": true})
          
          html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

      }  
     
    zip.file("angular.json",angularJsonLess.replace("$imports_liberys",
    `
   
    ` 
     ))
     zip.file("package.json",packageJsonLess.replace("$packages_imports",`
    
     `))
 
     appFolder.file("app.module.ts",appModuleLess.replace("$import_modules",
     `
    
    `).replace("$import_modules_in_import",`
    
    `) )
    appFolder.file("app.component.ts",
    appComponentTSLess.replace("$functionalityAppComponentTs","")
    .replace("$import_libery_owl","")
    )
    srcFolder.file("styles.less",`

   `)








    }  
 
      let style = searcher.section_css
      
      var fish = new cssToSassOrLess();
      var settings = {
          'comments': true,
          'variables': true,
          'convert': "less"
      };
      if(!searcher.hasSlider){
          style = style.substring(0,style.indexOf(" /*End Responsive Checker */")) 
      }
     
      let with_media_tag =  style.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+[^\}]+\}/g) || []


      let result = []
  
      for(let i=0;i<with_media_tag.length;i++){
        let ch1 = with_media_tag[i].substring(0,with_media_tag[i].indexOf("{"))
        let ch2 =  with_media_tag[i].substring(with_media_tag[i].indexOf("{"),with_media_tag[i].length-1)
     
        style = style.replace(with_media_tag[i],"")  
      
        let f = {
          media_tag: ch1 + " \n",
          media_string:ch2.replace("{","") 
        }
        result.push(f)
      }
  
      style = fish.scrub(style, settings)
      style = style.replaceAll("@c","$c")
      let style_media = ""
      for(let i=0;i<result.length;i++){
        let fishstring = fish.scrub(result[i].media_string, settings)
        style_media+=result[i].media_tag + 
        fishstring.replaceAll("@c","$c") + " \n" 
      }        
      style = style +style_media
    appFolder.file("app.component.less",style)
    appFolder.file("app.component.html",html)
    appFolder.file("app.component.spec.ts",appSpecLess)
  
    appFolder.file("app-routing.module.ts",appRoutingLess)

    zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, `${component_name}.zip`);
    }); 
  } 






    return (
        <>
        {go && 
         <RocketLoader 
       
         />
        }
       
         <TextField id="outlined-basic" 
         style={{marginTop:"2%"}}
         label="Project Name" 
         variant="outlined"
         fullWidth
         value={component_name}
         name="component_name"
         onChange={e => setComponentName(e.target.value)}
         /> 
        
              <FormControl fullWidth style={{marginTop:"2%"}}>
        <InputLabel id="demo-simple-select-label">Export Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeOExport}
          label="Export Type"
          onChange={handleChangeTypeOfExport}
        >
          <MenuItem value={"css"}>css</MenuItem>
          <MenuItem value={"scss"}>scss</MenuItem>
          <MenuItem value={"sass"}>sass</MenuItem>
          <MenuItem value={"less"}>less</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel control={<Checkbox defaultChecked />} label={`minify ${typeOExport}`} />
        <div style={{display:"flex",justifyContent:"center"}}>
        <Button variant="text" 
      style={{marginTop:"2%"}}
      onClick={()=> typeOExport=="css" ? handleExportAngularCss() : 
      typeOExport=="scss"? 
      handleExportAngularScss() 
    :
    typeOExport=="sass"? 
      handleExportAngularSass()
    : 
      handleExportAngularLess()
    }
      >Download Project</Button>
        </div>

 


   
        </>
    )
}

export default AngularExport