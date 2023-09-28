
import React, { useState,useEffect } from "react";

import "../Uploader.css"
import { FileUploader } from "react-drag-drop-files";

import Button from '@mui/material/Button'


import Box from '@mui/material/Box';

import StepperCodeError from "./StepperCodeError"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//banded column 
import Footer from "../../pages/footer"

import Navbar from "../Navbar"
import { v4 as uuidv4 } from 'uuid';
import Sucess from "./Success"
import DuplicatedClass from "./DuplicatedClass"
//uplodi il file 
// tronsfor to text 
// detect begin and end  of the component 
// push all the component result 
 




import Slide from '@mui/material/Slide';




import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import Documentation from "../DocumenTation";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const names = [
  'React',
  'Angular',
  
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CssExtractor = () =>{

  //multiple select
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(["React"]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value,personName)
      if(personName.filter(el => el == value[0]).length != 0){
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      }
     
    
   
  };





  const fileTypes = ["HTML","CSS"];
  const [orginalFiles,setOriginalFiles] = useState([])
const [originalValues,setOrignalValues] = useState([])

let [error_viewer,setErrorViewer] = useState(false)
let [all_errors_captured,setAllErrorsCaptured] = useState(["hello"])





    //for evrey section we make a function that get all html css file at the begining 

    //calcule error in orginal files and to add files 
    // the error is like you miss @begin or @end 

    //if there is an error it display  the code section with an error and the 
    //position of file 








  
  
let [code,setCode] = React.useState()
const [open, setOpen] = React.useState(false);
const [error,setError] = React.useState("")
let [file_updated,setFile] = useState("")



//original files
function readFileAsTextOriginalFile(file){
  return new Promise(function(resolve,reject){
      let fr = new FileReader();

      fr.onload = function(){
          resolve(fr.result);
      };

      fr.onerror = function(){
          reject(fr);
      };

      fr.readAsText(file);
  });
}

const onChangeOriginalFile = (file) => {
 
  let files = file;
  let files_list = file

  let readers = [];
  
  // Abort if there were no files selected
  if(!files.length) return;

  // Store promises in array
  for(let i = 0;i < files.length;i++){

      readers.push(readFileAsTextOriginalFile(files[i]));
  }
  
  // Trigger Promises
  Promise.all(readers).then((values) => {
      // Values will be an array that contains an item
      // with the text of every selected file
      // ["File1 Content", "File2 Content" ... "FileN Content"]
      let html_indexes = []
    
      let html_names =   Array.from(files_list).filter( function(s){ 
        return s.type.includes("text/html") ;
    })
      Array.from(files_list).filter( function(s,i){ 
        if(s.type.includes("text/html")) html_indexes.push(i)
    })
 
    let result_html=[]

      for(let i=0;i<html_names.length;i++){
          
        let f = {
            file_name:html_names[i]?.name,
            file_data:values[html_indexes[i]]
        }
 
        result_html.push(f)
      }
     
 




      let data = Array.from(files_list).filter( function(s){ 
        return s.type.includes("text/html") ;
    })
    let css_indexes = []
    
    let css_names =   Array.from(files_list).filter( function(s){ 
      return s.type.includes("text/css") ;
  })
    Array.from(files_list).filter( function(s,i){ 
      if(s.type.includes("text/css")) css_indexes.push(i)
  })
  let result=[]


    for(let i=0;i<css_names.length;i++){
    
      let f={
        file_name:css_names[i].name,
        file_data:values[css_indexes[i]]
      }
   
    
      result.push(f)
    }
   
 

      setOriginalFiles(Array.from(files_list).filter( function(s){ 
        return s.type.includes("text/html") ;
    }))
 


      setOrignalValues(result_html)
     //now we get values per position

 

     

  
     translThoseOrignalFiles(result_html,result)
  });
  
}




 

let [html_originals,setHtmlOrginal] = useState([])
let [css_orginals,setCssOrginals] = useState([])
const translThoseOrignalFiles = async(htmls,css) =>{

  setHtmlOrginal(htmls)
  setCssOrginals(css)
 //ul li  .class dpsds } container.o.p  }


   
  
  



}

//to adds files




function readFileAsTextToAddFile(file){
  return new Promise(function(resolve,reject){
      let fr = new FileReader();

      fr.onload = function(){
          resolve(fr.result);
      };

      fr.onerror = function(){
          reject(fr);
      };

      fr.readAsText(file);
  });
}

const onChangeToAddFile = (file) => {
 
  let files = file;
  let files_list = file

  let readers = [];
  
  // Abort if there were no files selected
  if(!files.length) return;

  // Store promises in array
  for(let i = 0;i < files.length;i++){

      readers.push(readFileAsTextToAddFile(files[i]));
  }
  
  // Trigger Promises
  Promise.all(readers).then((values) => {
    // Values will be an array that contains an item
    // with the text of every selected file
    // ["File1 Content", "File2 Content" ... "FileN Content"]
    let html_indexes = []
  
    let html_names =   Array.from(files_list).filter( function(s){ 
      return s.type.includes("text/html") ;
  })
    Array.from(files_list).filter( function(s,i){ 
      if(s.type.includes("text/html")) html_indexes.push(i)
  })
  
  let result_html=[]

    for(let i=0;i<html_names.length;i++){
        
      let f = {
          file_name:html_names[i]?.name,
          file_data:values[html_indexes[i]]
      }

      result_html.push(f)
    }
   





    let data = Array.from(files_list).filter( function(s){ 
      return s.type.includes("text/html") ;
  })
  let css_indexes = []
  
  let css_names =   Array.from(files_list).filter( function(s){ 
    return s.type.includes("text/css") ;
})
  Array.from(files_list).filter( function(s,i){ 
    if(s.type.includes("text/css")) css_indexes.push(i)
})
let result=[]


  for(let i=0;i<css_names.length;i++){
  
    let f={
      file_name:css_names[i].name,
      file_data:values[css_indexes[i]]
    }
 
  
    result.push(f)
  }
 


    setOriginalFiles(Array.from(files_list).filter( function(s){ 
      return s.type.includes("text/html") ;
  }))



    setOrignalValues(result_html)
   //now we get values per position



   


   translThoseToADDFiles(result_html,result)
});
  
}


let [htmls_toAds,setHtmlToAdd] = useState([])
let [css_toAdd,setCssToAdd] = useState([])
const translThoseToADDFiles = async(htmls,css) =>{
  setHtmlToAdd(htmls)
  setCssToAdd(css)






}



 

let [mainView,setMainView] = useState(true)
let [errorView,setErrorView] = useState(false)

let [errorsOriginal,setErrorOriginal] = useState([])
let [errorToAdd,setErrorToAdd] = useState([])

let[total_errors,setTotalError] = useState([])

let [all_sections_names_in_begin_toadd_file,setAllSectionsNamesInBeginToAddFiles] = useState([])



let returnHtmlString = (chaine) =>{
  let ch = chaine 
 

  return ch
  



}

let getAllcssUsedInspecificHtmlCode = (all_html,html_code) =>{
  let ch_css_used 
  let all_css_in_file_rule = all_html.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
  let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
  console.log(files_css)
  let ch_css = ""
  for(let coriginal=0;coriginal<files_css.length;coriginal++){
   if(css_toAdd.length!=0){
     let data_css = css_toAdd.filter(el => el.file_name == files_css[coriginal])
     if(data_css.length != 0){
  
        ch_css +=  data_css[0].file_data
     }
   }
  }

  //get all <style> classes in 
 let all_in_style_tag =  all_html.match(/<style>(.*?)<\/style>/g) || [];
 for(let a =0;a<all_in_style_tag.length;a++){
      if(all_in_style_tag.length!=0){
          ch_css+=all_in_style_tag[a]
      }
 } 

 //split all the strings and get only the css used
 let array = ch_css.split("}")
 const regex = /(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/gmi;
 let m;
 let class_name = []
 while ((m = regex.exec(html_code)) !== null) {
   // This is necessary to avoid infinite loops with zero-width matches
   if (m.index === regex.lastIndex) {
       regex.lastIndex++;
   }

   // The result can be accessed through the `m`-variable.
   m.forEach((match, groupIndex) => {
       if(groupIndex==1){
           class_name.push(match.trim().split(" "))
          
       }
      
   });
}
var newArr = [];
for(var i = 0; i < class_name.length; i++)
{
newArr = newArr.concat(class_name[i]);
}
newArr = newArr.filter(el => el!="")



 let class_without_media_tag = ""

 let unique = [...new Set(newArr)]
//  console.log(unique)
for(let u =0;u<unique.length;u++){
let fi = array.filter(el => el.includes(`.${unique[u]}`))

if(fi.length!=0){
if(fi.filter(el => el.includes("@media")).length==0){
  for(let f=0;f<fi.length;f++){
    class_without_media_tag+=fi[f] + "}"

    
  }
}

}

}

console.log(class_without_media_tag)
    //now we have all css used in that section simply

    let final_ch = class_without_media_tag
    //rename field in the class by css from rows 
    






    return final_ch


}



let CssAdder = (all_html,all_css) =>{
  let ch_css_used =""
  let all_css_in_file_rule = all_html.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
  let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
  console.log(files_css)
  let ch_css = ""
  for(let coriginal=0;coriginal<files_css.length;coriginal++){
   if(css_toAdd.length!=0){
     let data_css = css_toAdd.filter(el => el.file_name == files_css[coriginal])
     if(data_css.length != 0){
  
        ch_css +=  data_css[0].file_data
     }
   }
  }

  //get all <style> classes in 
 let all_in_style_tag =  all_html.match(/<style>(.*?)<\/style>/g) || [];
 for(let a =0;a<all_in_style_tag.length;a++){
      if(all_in_style_tag.length!=0){
          ch_css+=all_in_style_tag[a]
      }
 } 

 //split all the strings and get only the css used
 let array = ch_css.split("}")
 const regex = /(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/gmi;
 let m;
 let class_name = []
 while ((m = regex.exec(all_html)) !== null) {
   // This is necessary to avoid infinite loops with zero-width matches
   if (m.index === regex.lastIndex) {
       regex.lastIndex++;
   }

   // The result can be accessed through the `m`-variable.
   m.forEach((match, groupIndex) => {
       if(groupIndex==1){
           class_name.push(match.trim().split(" "))
          
       }
      
   });
}
var newArr = [];
for(var i = 0; i < class_name.length; i++)
{
newArr = newArr.concat(class_name[i]);
}
newArr = newArr.filter(el => el!="")



 let class_without_media_tag = ""

 let unique = [...new Set(newArr)]
//  console.log(unique)
for(let u =0;u<unique.length;u++){
let fi = array.filter(el => el.includes(`.${unique[u]}`))

if(fi.length!=0){
if(fi.filter(el => el.includes("@media")).length==0){
  for(let f=0;f<fi.length;f++){
    class_without_media_tag+=fi[f] + "}"

    
  }
}

}

}

ch_css_used = class_without_media_tag+ all_css


return ch_css_used

}

let getAllCssAtOnce = (data) =>{
  let ch =''
    for(let i=0;i<data.length;i++){
      ch+=data[i].css
    }
    return ch
}
let [file_toAddAll,setFileToAddAll] = useState([])
let [orginal_classes,setOriginalClasses] = useState([])
let [final_css,setFinalCss] = useState([])
let [rows_data,setRows] = useState([])
let [to_add_section_classes,setToAddSectionClasses] = useState([])
let[final_step,setFinalStep] = useState([])
let [show_final_step,setShowFinalStep] = useState(false)
let [showDuplicated,setShowDuplicated] = useState(false)
const letsgo = () =>{
  console.log("orignal",html_originals,css_orginals)

  console.log("to Add",htmls_toAds,css_toAdd)

    //begin by error 

    //simple no file added 
    if(html_originals.length == 0){
      return toast.error("no html original")
    }
    if(htmls_toAds.length == 0){
      return toast.error("no html To ADD files")
    }

    //the to add files 
    //it must have 
    let errors_to_adds = []
    let toadd_sections_begin = []
    let toadd_sections_end = []
    let result_history = []
     for(let to =0;to<htmls_toAds.length;to++){
      let toadd_begin = htmls_toAds[to].file_data.match(/\@Begin.+?\@/g) || []
      toadd_sections_begin.push(toadd_begin)
      let toadd_end = htmls_toAds[to].file_data.match(/\@End.+?\@/g) || []
      toadd_sections_end.push(toadd_end)
      

      //prepare css all file 
       let all_css_in_file_rule = htmls_toAds[to].file_data.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
        let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
        let ch_css = ""

      for(let ctoadd=0;ctoadd<files_css.length;ctoadd++){
        if(css_toAdd.length!=0){
          let data_css = css_toAdd.filter(el => el.file_name == files_css[ctoadd])
          if(data_css.length != 0){
            
             ch_css +=  data_css[0].file_data
          }
        }
      }

      if(toadd_begin.length == 0 && toadd_end.length ==0 ){
        console.log("error")
        errors_to_adds.push({
          file_name:htmls_toAds[to].file_name,
          file_data:htmls_toAds[to].file_data,
          file_css :ch_css,
          error_name:"no tags at all ",
          home:"to Adds Files"
        })
      }



      if(toadd_begin.length != toadd_end.length){
          errors_to_adds.push({
            file_name:htmls_toAds[to].file_name,
            file_data:htmls_toAds[to].file_data,
            file_css :ch_css,
            error_name:"tags missing",
            home:"to Adds Files"
          })
      }
      
      
     







    }
    
       
    toadd_sections_begin =  toadd_sections_begin.flat()
    let result_begin = []
    for(let j=0;j<toadd_sections_begin.length;j++){
        result_begin.push(toadd_sections_begin[j].replace("@Begin","").replace("@",""))
    }




    setAllSectionsNamesInBeginToAddFiles(result_begin)
    toadd_sections_end = toadd_sections_end.flat()

    let errors_orginals = []
    
    for(let o=0;o<html_originals.length;o++){
      let orignal_begin = html_originals[o].file_data.match(/\@Begin.+?\@/g) || []
      let original_end = html_originals[o].file_data.match(/\@End.+?\@/g) || []
      
     



      let error_in = []
      //1 begin in the to add section exist 
      for(let o_search_begin=0 ;o_search_begin<orignal_begin.length;o_search_begin++ ){
        if(toadd_sections_begin.length != 0){
          if(toadd_sections_begin.filter(el => el == orignal_begin[o_search_begin] ).length==0 ){
            error_in.push(false)
          }else{
            error_in.push(true)
          }
         
        } 
      }


      //1 end in the to add section exist 
      for(let o_search_end=0 ;o_search_end<original_end.length;o_search_end++ ){
        if(toadd_sections_begin.length != 0){
          if(toadd_sections_end.filter(el => el == original_end[o_search_end] ).length==0 ){
            error_in.push(false)
          }else{
            error_in.push(true)
          }
         
        } 
      }


        //prepare css all file 
        let all_css_in_file_rule = html_originals[o].file_data.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
        let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
        let ch_css = ""
      for(let coriginal=0;coriginal<files_css.length;coriginal++){
        if(css_orginals.length!=0){
          let data_css = css_orginals.filter(el => el.file_name == files_css[coriginal])
          if(data_css.length != 0){
      
             ch_css +=  data_css[0].file_data
          }
        }
      }

    
      if(error_in.filter(el => el==true).length==0){
        errors_orginals.push({
          file_name:html_originals[o].file_name,
          file_data:html_originals[o].file_data,
          error_name:"no section in to add file has called",
          css_original:ch_css,
          home:"Orginal files"
        })
      }


     


      if(orignal_begin.length == 0 && original_end.length == 0){
        errors_orginals.push({
          file_name:html_originals[o].file_name,
          file_data:html_originals[o].file_data,
          error_name:"no tags at all",
          css_original:ch_css,
          home:"Orginal files"
        })
      }

      if(orignal_begin.length != original_end.length){
        errors_orginals.push({
          file_name:html_originals[o].file_name,
          file_data:html_originals[o].file_data,
          error_name:"tags missing",
          css_original:ch_css,
          home:"Orginal files"
        })

       



    }



    }
   



    //errors 
    //all errors array 

    //send
    
    //remove all duplicated error of an array of object 
    
   let  arrayUniqueByKeyOrginal = [...new Map(errors_orginals.map(item =>
      [item["file_name"], item])).values()];

      let  arrayUniqueByKeyToAdd = [...new Map(errors_to_adds.map(item =>
        [item["file_name"], item])).values()];

        console.log("to add files : ",arrayUniqueByKeyToAdd)
      //error table tha have the two arrat 
    let total_error = []
   
 
  
    if(errors_orginals.length == 0 && errors_to_adds.length ==0 ){
        //we go to step three  or final step 
         //get all classes of orginal 
    const regex = /(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/gmi;

    let all_original = []
    let all_toadd= []
    let classes_original = []
    for (let o=0;o<html_originals.length;o++){
     
     

      let m;
      let class_name = []
      while ((m = regex.exec(html_originals[o].file_data)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
    
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            if(groupIndex==1){
                class_name.push(match.trim().split(" "))
               
            }
           
        });
    }
    let newArr = []
    for(var i = 0; i < class_name.length; i++)
    {
    newArr = newArr.concat(class_name[i]);
    }
    
    
    var unique = [...new Set(newArr)]
   unique = unique.filter(el => el!="")
 //prepare css all file 
 let all_css_in_file_rule = html_originals[o].file_data.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
 let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
 let ch_css = ""
 let ch_css_toadd = ""
for(let coriginal=0;coriginal<files_css.length;coriginal++){
 if(css_orginals.length!=0){
   let data_css = css_orginals.filter(el => el.file_name == files_css[coriginal])
   if(data_css.length != 0){

      ch_css +=  data_css[0].file_data
   }
 }
}

//file component @Begin 
let orignal_begin = html_originals[o].file_data.match(/\@Begin.+?\@/g) || []
    for(let ftoadd=0;ftoadd<htmls_toAds.length;ftoadd++){
        //file data 
        for(let ob=0;ob<orignal_begin.length;ob++){
          if(htmls_toAds[ftoadd].file_data.includes(orignal_begin[ob])){
            let d={
            parent_file:html_originals[o].file_name,
            parent_html_data:html_originals[o].file_data,
            child_file:htmls_toAds[ftoadd].file_name,
            component:orignal_begin[ob],
            css_component_all: ch_css_toadd
            }
            all_toadd.push(d)
          }
        }

    }
    let f= {
      css_data:ch_css,
      class_names_original:unique,
      file_name:html_originals[o].file_name,
      file_data:html_originals[o].file_data,
      file_component:orignal_begin
      
    }
    classes_original.push(unique)
    all_original.push(f)

    }

    classes_original = classes_original.flat()

    let all_unique_css_to_add = []

    let all_classes_to_add_by_section = [] 
  
    for(let a=0;a<htmls_toAds.length;a++){

      //get all sections
      let orignal_begin = htmls_toAds[a].file_data.match(/\@Begin.+?\@/g) || []
      let original_end = htmls_toAds[a].file_data.match(/\@End.+?\@/g) || []
      
      for(let ob=0;ob<orignal_begin.length;ob++){
        let mySubString = htmls_toAds[a].file_data.substring(
          htmls_toAds[a].file_data.lastIndexOf(orignal_begin[ob]) + 1, 
          htmls_toAds[a].file_data.lastIndexOf(original_end[ob])
      );
      console.log("String : ",mySubString)
       //class name 
       let m;
       let class_name = []
       while ((m = regex.exec(mySubString)) !== null) {
         // This is necessary to avoid infinite loops with zero-width matches
         if (m.index === regex.lastIndex) {
             regex.lastIndex++;
         }
     
         // The result can be accessed through the `m`-variable.
         m.forEach((match, groupIndex) => {
             if(groupIndex==1){
                 class_name.push(match.trim().split(" "))
                
             }
            
         });
     }
     let newArr = []
     for(var i = 0; i < class_name.length; i++)
     {
     newArr = newArr.concat(class_name[i]);
     }
     
    //  let f_to_add={
    //   section_name:

    //  }
    
     var unique = [...new Set(newArr)]
    unique = unique.filter(el => el!="")

    all_unique_css_to_add.push(unique)
     console.log("unique",unique)

// all_classes_to_add_by_section


     for(let cltoa=0;cltoa<unique.length;cltoa++){
        let d_section ={
          section_name:orignal_begin[ob].replace("@Begin","").replace("@",""),
          section_class:unique[cltoa]

        }      
        all_classes_to_add_by_section.push(d_section)

     }



      }

      

     
    
  
  
  }
  
all_unique_css_to_add = all_unique_css_to_add.flat()

const intersection = classes_original.filter(element => all_unique_css_to_add.includes(element));

    
  setFileToAddAll(all_toadd)

  setOriginalClasses(classes_original)
  var unique = [...new Set(intersection)]

    let result = []

  for (let int=0;int<unique.length;int++){
      let f= {
        id:uuidv4(),
        firstName:unique[int],
        lastName:""
      }
      result.push(f)
  }

  let global_css = ""

  console.log("global css",css_orginals)

  for(let g=0;g<css_orginals.length;g++){
    global_css+=css_orginals[g].file_data
  }

  let css_find_inoroginal  =global_css.match(/\.[a-zA-Z_][\w_-]*[^\.\s\{#:\,;]/gm) ||[] 
  //if there is a class in to add in the global css and not in result 
  //we append it in 
 
  let final_css_array = []
  for(let cs =0;cs<css_find_inoroginal.length;cs++){
    let ch = css_find_inoroginal[cs].replace(".","")
    final_css_array.push(ch)
  }
  setFinalCss(final_css_array)

  for(let r=0;r<all_unique_css_to_add.length;r++){
    let ch = "."+all_unique_css_to_add[r]

    if(global_css.includes(ch)){
      console.log("includes")
      result.push({
        id:uuidv4(),
        firstName:all_unique_css_to_add[r],
        lastName:""
      })
    }
  }

  const arrayUniqueByKey = [...new Map(result.map(item =>
    [item["firstName"], item])).values()];
  setRows(arrayUniqueByKey)
  setToAddSectionClasses(all_classes_to_add_by_section)
  console.log("array duplicated",arrayUniqueByKey)

  //go to final step directely
  if(arrayUniqueByKey.length==0){
    let result_by_section_name_html_part =[]
 
    for(let to=0;to<htmls_toAds.length;to++){

      let to_add_begin = htmls_toAds[to].file_data.match(/\@Begin.+?\@/g) || []

      let to_add_end = htmls_toAds[to].file_data.match(/\@End.+?\@/g) || []
      
    
      for(let ob=0;ob<to_add_begin.length;ob++){
        let mySubString = htmls_toAds[to].file_data.substring(
          htmls_toAds[to].file_data.lastIndexOf(to_add_begin[ob]) , 
          htmls_toAds[to].file_data.lastIndexOf(to_add_end[ob])
      );
      result_by_section_name_html_part.push({
        section_name:to_add_begin[ob],
        section_html_data:mySubString.replace(to_add_begin[ob],""),
        section_css_data:getAllcssUsedInspecificHtmlCode(htmls_toAds[to].file_data,mySubString.replace(to_add_begin[ob],""))
      })
    }


    }
    console.log("final :",result_by_section_name_html_part)

    let final_result = []
    for(let o=0;o<html_originals.length;o++){
      let ch_html =  html_originals[o].file_data
      let result_css = []
      //search for component
      //add for evrey component there code html 
      //replace @Sign to the component data 
      let original_begin = html_originals[o].file_data.match(/\@Begin.+?\@/g) || []

  let oroginal_end = html_originals[o].file_data.match(/\@End.+?\@/g) || []
  for(let ob=0;ob<original_begin.length;ob++){
    let mySubString = html_originals[o].file_data.substring(
      html_originals[o].file_data.lastIndexOf(original_begin[ob]) , 
      html_originals[o].file_data.lastIndexOf(oroginal_end[ob])
  );
  let text =returnHtmlString(result_by_section_name_html_part.filter(el =>el.section_name ==original_begin[ob])[0].section_html_data)
  if(result_by_section_name_html_part.filter(el =>el.section_name ==original_begin[ob]).length !=0 ){

    ch_html = ch_html.replace(original_begin[ob],text)
    .replace(oroginal_end[ob],"")

  }
  let f= {
    file_name:html_originals[o].file_name,
    css: result_by_section_name_html_part.filter(el =>el.section_name ==original_begin[ob])[0].section_css_data
  }

  result_css.push(f)
}
let ch_final_css = getAllCssAtOnce(result_css)
final_result.push({
  file_name:html_originals[o].file_name,
  file_data:ch_html,
  file_css : CssAdder(html_originals[o].file_data,
    ch_final_css)
})

      



    }
    //go to final step
    setFinalStep(final_result)
    setShowFinalStep(true)
    setMainView(false)

  }else{
    //go to step duplicated array
    setShowDuplicated(true)
    setMainView(false)
  }






    }
      //go to step 2
    if(errors_orginals.length != 0 || errors_to_adds.length!=0){
  
      setErrorOriginal(arrayUniqueByKeyOrginal)
      setErrorToAdd(arrayUniqueByKeyToAdd)
      setErrorView(true)
      setMainView(false)
    }



}






    return (
        <>
        <Navbar  firstText="don't have a nice day" secondText="have a great day"/>
        <div className="" id="ALl">
     
   

{mainView && <>
  <div class="container" >
   <div class="wrapper">
   tool version 0.6/5




<>
<div  
>


<Box
     sx={{
       display: 'flex',
       alignItems: 'center',
       width: 'fit-content',
       border: (theme) => `1px solid ${theme.palette.divider}`,
       borderRadius: 1,
       bgcolor: 'background.paper',
       color: 'text.secondary',
       '& svg': {
         m: 1.5,
       },
       '& hr': {
         mx: 0.5,
       },
     }}
   >
     <div>
     <div     
     style={{display:"flex",justifyContent:"space-between"}}
     id="fileUploader">
      <div>
      <h3>Orginal Files</h3>
     <FileUploader handleChange={onChangeOriginalFile}  
       multiple={true}
     types={fileTypes}
      type="file" name="myOriginalfile"
   
     />
      </div>
      <div>
      <h3>To Add  Files</h3>
     <FileUploader handleChange={onChangeToAddFile}  
       multiple={true}
     types={fileTypes}
      type="file" name="myToAddfile"
   
     />
      </div>
     
    
  


    



     </div>
     <Documentation type="CssCombiner" />
     <Button variant="contained" endIcon={<SendIcon />}
     onClick={() => letsgo()}
     
     >
        let's do it
      </Button>

     </div>

    

   </Box>





  
  

</div>
</>






  
   </div>

   <Footer version={"v3" }/>    
 </div>
</>}


{errorView && <>
  <StepperCodeError 
  errorsOriginal={errorsOriginal}
  errorToAdd={errorToAdd}
  html_originals={html_originals}
  css_orginals={css_orginals}
  htmls_toAds={htmls_toAds}
  css_toAdd={css_toAdd}
 
  all_sections_names_in_begin_toadd_file={all_sections_names_in_begin_toadd_file}
  />
</>}

{showDuplicated && <>
   <DuplicatedClass 

   rows_data={rows_data}
   orginal_classes={orginal_classes}
   to_add_section_classes={to_add_section_classes}
   final_css={final_css}
   html_originals={html_originals}
    css_orginals={css_orginals}
    htmls_toAds={htmls_toAds}
    css_toAdd={css_toAdd}
   />
    </>}
    {show_final_step && <>

<Sucess final_step={final_step}/>
</>}











 <ToastContainer 
 position="bottom-center"
 autoClose={5000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 theme="light"/>

 </div>
        </>
    )
}

export default CssExtractor








