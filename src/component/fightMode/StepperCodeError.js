import React, { useState, useEffect } from 'react';


import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import "./Stepper.css"
import Navbar from "../Navbar"
import Alert from '@mui/material/Alert';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CodeMirror from "@uiw/react-codemirror";

import "./Stepper.css"

import OpenWithIcon from '@mui/icons-material/OpenWith';
import { v4 as uuidv4 } from 'uuid';


import { FullScreen, useFullScreenHandle } from "react-full-screen";


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import Footer from '../../pages/footer';

import DuplicatedClass from "./DuplicatedClass"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import Button from '@mui/material/Button';
import DatasetIcon from '@mui/icons-material/Dataset';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useTranslation } from 'react-i18next'
//table of search of evrey section 
import Sucess from "./Success"

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }






export default function StepperCodeError(props) {
  let {
    errorsOriginal,
    errorToAdd,
    html_originals,
    css_orginals,
    htmls_toAds,
    css_toAdd,
  
    all_sections_names_in_begin_toadd_file
  } = props

  const {t} = useTranslation()


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let [valueFilesOriginal,setValueFiles] = React.useState(0)
  const   handleChangeFilesOriginal = (event, newValue) => {
    setValueFiles(newValue);
  };

  let [valueFilesToAdds,setValueToAdds] = React.useState(0)
  const   handleChangeFilesToAdds = (event, newValue) => {
    setValueToAdds(newValue);
  };


  const [srcDoc, setSrcDoc] = useState('')
  let [html,setHtml] = useState("")
  let [htmlToDisplay,setHtmlToDisplay] = useState('')
  let [css,setCSS] = useState("")

  let [errorsOriginals,setErrorOriginal] = useState(errorsOriginal)

  let [errorToAdds,setErrorToAdd] =useState(errorToAdd)


  let [htmls_orginal,setOriginalsHtml] = useState(html_originals)

  let [html_toadd,setHtmlToAdd] = useState(htmls_toAds)
  
  let [showStepper,setShowStepper] = useState(true)

  let [showDuplicated,setShowDuplicated] = useState(false)

  let [rows_data,setRows] = useState([])


  let [all_sections_names,setAllSectionsNamesInBeginToAddFiles] = useState(all_sections_names_in_begin_toadd_file)
  
  
  let [orginal_classes,setOriginalClasses] = useState([])

  let [to_add_section_classes,setToAddSectionClasses] = useState([])
  let [final_css,setFinalCss] = useState([])

  let [file_toAddAll,setFileToAddAll] = useState([])



  let returnHtmlString = (chaine) =>{
    let ch = chaine 
   
  
    return ch
    



  }

  let getAllcssUsedInspecificHtmlCode = (all_html,html_code) =>{
    let ch_css_used 
    let all_css_in_file_rule = all_html.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
    let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
   
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


      //now we have all css used in that section simply

      let final_ch = class_without_media_tag
      //rename field in the class by css from rows 
      






      return final_ch


  }



  let CssAdder = (all_html,all_css) =>{
    let ch_css_used =""
    let all_css_in_file_rule = all_html.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
    let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
    
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
  
  let[final_step,setFinalStep] = useState([])
  let [show_final_step,setShowFinalStep] = useState(false)
  const onChangeCode = React.useCallback((value,css,type,file_name) => {
    setHtml(value);
    setCSS(css)
    let errors_to_adds = []
    let toadd_sections_begin = []
    let toadd_sections_end = []

    //in error case we just update the html value 
    if(type == "to_add"){
      
      html_toadd.filter(el => el.file_name == file_name)[0].file_data = value
     
    }

    if(type =="original"){
      htmls_orginal.filter(el => el.file_name == file_name)[0].file_data = value
      
    }





     for(let to =0;to<html_toadd.length;to++){
      let toadd_begin = html_toadd[to].file_data.match(/\@Begin.+?\@/g) || []
      toadd_sections_begin.push(toadd_begin)
      let toadd_end = html_toadd[to].file_data.match(/\@End.+?\@/g) || []
      toadd_sections_end.push(toadd_end)


      //prepare css all file 
       let all_css_in_file_rule = html_toadd[to].file_data.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
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
        
        errors_to_adds.push({
          file_name:htmls_toAds[to].file_name,
          file_data:htmls_toAds[to].file_data,
          file_css :ch_css,
          error_name:t("noTagsAtAll"),
          home:"to Adds Files"
        })
      }

      if(toadd_begin.length != toadd_end.length){
          errors_to_adds.push({
            file_name:html_toadd[to].file_name,
            file_data:html_toadd[to].file_data,
            file_css :ch_css,
            error_name:t("tagsMissing"),
            home:"to Adds Files"
          })
      }



    }

    toadd_sections_begin =  toadd_sections_begin.flat()
    toadd_sections_end = toadd_sections_end.flat()
    let result_begin = []
    for(let j=0;j<toadd_sections_begin.length;j++){
      let ch = toadd_sections_begin[j] + "\n"+ "@End "+toadd_sections_begin[j].replace("@Begin","").replace("@","")+"@"
        result_begin.push(ch)
    }

    setAllSectionsNamesInBeginToAddFiles(result_begin)
    let errors_orginals = []
    
    for(let o=0;o<htmls_orginal.length;o++){
      let orignal_begin = htmls_orginal[o].file_data.match(/\@Begin.+?\@/g) || []
      let original_end = htmls_orginal[o].file_data.match(/\@End.+?\@/g) || []
      
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
        let all_css_in_file_rule = htmls_orginal[o].file_data.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
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
          file_name:htmls_orginal[o].file_name,
          file_data:htmls_orginal[o].file_data,
          error_name:t("noSectionInToADDFilesHasCalled"),
          css_original:ch_css,
          home:"Orginal files"
        })
      }


     


      if(orignal_begin.length == 0 && original_end.length == 0){
        errors_orginals.push({
          file_name:htmls_orginal[o].file_name,
          file_data:htmls_orginal[o].file_data,
          error_name:t("noTagsAtAll"),
          css_original:ch_css,
          home:"Orginal files"
        })
      }

      if(orignal_begin.length != original_end.length){
        errors_orginals.push({
          file_name:htmls_orginal[o].file_name,
          file_data:htmls_orginal[o].file_data,
          error_name:t("tagsMissing"),
          css_original:ch_css,
          home:"Orginal files"
        })


    }



    }
    


   //remove all duplicated error of an array of object 
   let  arrayUniqueByKeyOrginal = [...new Map(errors_orginals.map(item =>
    [item["file_name"], item])).values()];

    let  arrayUniqueByKeyToAdd = [...new Map(errors_to_adds.map(item =>
      [item["file_name"], item])).values()];


  //error table tha have the two array 
  let total_error = []
  if(arrayUniqueByKeyOrginal.length!=0 ){
    total_error.push(arrayUniqueByKeyOrginal[0])
  }
  if(arrayUniqueByKeyToAdd.length!=0){
    total_error.push(arrayUniqueByKeyToAdd[0])
  }

  

  if(total_error.length !=0){
    setHtmlToAdd(html_toadd)
    setErrorOriginal(arrayUniqueByKeyOrginal)
    setErrorToAdd(arrayUniqueByKeyToAdd)
    setOriginalsHtml(htmls_orginal)
  }
  let ch_css_toadd = ""
  for(let to=0 ;to<html_toadd.length;to++){
    let all_css_in_file_rule = html_toadd[to].file_data.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
    let files_css= all_css_in_file_rule.filter(el => el.includes(".css"))
 
  for(let ctoadd=0;ctoadd<files_css.length;ctoadd++){
    if(css_toAdd.length!=0){
      let data_css = css_toAdd.filter(el => el.file_name == files_css[ctoadd])
      if(data_css.length != 0){
        
        ch_css_toadd +=  data_css[0].file_data
      }
    }
  }
  }
 

  if(total_error.length == 0 ){
    setShowStepper(false)
  

    //get all classes of orginal 
    const regex = /(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/gmi;

    let all_original = []
    let all_toadd= []
    let classes_original = []
    for (let o=0;o<htmls_orginal.length;o++){
     
     

      let m;
      let class_name = []
      while ((m = regex.exec(htmls_orginal[o].file_data)) !== null) {
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
 let all_css_in_file_rule = htmls_orginal[o].file_data.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)
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

//file component @Begin 
let orignal_begin = htmls_orginal[o].file_data.match(/\@Begin.+?\@/g) || []
    for(let ftoadd=0;ftoadd<html_toadd.length;ftoadd++){
        //file data 
        for(let ob=0;ob<orignal_begin.length;ob++){
          if(html_toadd[ftoadd].file_data.includes(orignal_begin[ob])){
            let d={
            parent_file:htmls_orginal[o].file_name,
            parent_html_data:htmls_orginal[o].file_data,
            child_file:html_toadd[ftoadd].file_name,
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
      file_name:htmls_orginal[o].file_name,
      file_data:htmls_orginal[o].file_data,
      file_component:orignal_begin
      
    }
    classes_original.push(unique)
    all_original.push(f)

    }

    classes_original = classes_original.flat()

    let all_unique_css_to_add = []

    let all_classes_to_add_by_section = [] 
    for(let a=0;a<html_toadd.length;a++){

      //get all sections
      let orignal_begin = html_toadd[a].file_data.match(/\@Begin.+?\@/g) || []
      let original_end = html_toadd[a].file_data.match(/\@End.+?\@/g) || []
      
      for(let ob=0;ob<orignal_begin.length;ob++){
        let mySubString = html_toadd[a].file_data.substring(
          html_toadd[a].file_data.lastIndexOf(orignal_begin[ob]) + 1, 
          html_toadd[a].file_data.lastIndexOf(original_end[ob])
      );
     
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
    setFinalStep(final_result)
    setShowFinalStep(true)

  }else{
    setShowDuplicated(true)
  }





    

    //get all classes of to add 
    
  }



   
  }, []);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
         
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html])


  const handle = useFullScreenHandle();



  //drawer 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  let [search_name,setSearchName] = useState("")



  return (
    <>
    {showStepper && <>
      <Navbar  firstText={t("dontHaveANiceDay")} secondText={t("haveAGreatDay")}/>

    <div class="container" >
   <div class="wrapper">
   <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
         
        {errorsOriginals.length != 0 && 
          <Tab label={t("orginalFiles")}  />
        }
        {errorToAdds.length != 0 && 
        
        <Tab label={t("toAddFiles")}  />
        }
        
        </Tabs>
      </Box>
         {/* orginal  sections  */}
      {errorsOriginals.length != 0 && 
          <>
             <TabPanel value={value} index={errorsOriginals.length!=0 ? 0 :1}>
       
          

       <Box sx={{ width: '100%' }}>
 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
   <Tabs value={valueFilesOriginal} onChange={handleChangeFilesOriginal} aria-label="basic tabs example">
       
   {errorsOriginals.length!=0 && errorsOriginals.map((el,i) =>(
    
      <Tab label={el.file_name} {...a11yProps(i)} />
   
 
   ))
   }
   </Tabs>
 </Box>
 {errorsOriginals.length!=0 && errorsOriginals.map((el,i) =>(
 <TabPanel value={valueFilesOriginal} index={i}>
 <div  style={{display:"flex",justifyContent:"end",marginRight:"5%"}}>
 <OpenWithIcon 
 onClick={handle.enter}
 />
 </div>
 <FullScreen handle={handle} >
   <div style={{backgroundColor:"white",height:"100vh"}}>
   <Breadcrumbs aria-label="breadcrumb">
 <Link
   underline="hover"
   sx={{ display: 'flex', alignItems: 'center' }}
   color="inherit"
 
 >
   <FolderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
   {el.home}
 </Link>

 <Typography
   sx={{ display: 'flex', alignItems: 'center' }}
   color="text.primary"
 >
   <InsertDriveFileIcon sx={{ mr: 0.5 }} fontSize="inherit" />
   {el.file_name}
 </Typography>
</Breadcrumbs>

   <Alert severity="error">{el.error_name}</Alert>
  {el.error_name =="no section in to add file has called" && <>
 
        <React.Fragment >
          <Button onClick={toggleDrawer('right', true)}>
          <Tooltip title={t("allSectionNamesToAddsFiles")}>
          <IconButton>
          <DatasetIcon style={{color:"#3949ab"}} />
          </IconButton>
          </Tooltip>
            </Button>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            style={{width:"40vw"}}
          >
            <Box
     
      role="presentation"
    >

       <ListItemText primary={t("sectionNamesToAddsFiles")} />

       <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Sections"
        inputProps={{ 'aria-label': 'search google maps' }}

        name="search_name"
        value={search_name}
        onChange={e => setSearchName(e.target.value)}
      />
      <IconButton type="button"  color="primary" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
      <Divider />
    
      <List>
      {all_sections_names
      
      .filter((el) =>{
   
        if(search_name==""){
          return el
        }else if(el.toLowerCase().includes(search_name.toLowerCase())
        ){
          return el
        }
      })
      .map(el =>(
          <ListItem disablePadding>
            <ListItemButton>
            <CopyToClipboard text={el}
             onCopy={() => toast.success(t("textCopyedClipboard"))}
            
            >
            <ListItemText primary={el.replace("@Begin","").split("@")[0]} 
              
              />
            </CopyToClipboard>
            
              
          
            </ListItemButton>
            
        
          </ListItem>
          ))}
           {/*create an array for    <p>location with breadcumb</p>    */}
     
      </List>
    </Box>
          </Drawer>
        </React.Fragment>
   
  </>}
  
 
  
 <div style={{display:"flex",width:"80vw"}} >
<div className="pane top-pane"  >
<CodeMirror
style={{textAlign:"left",width:"40vw"}}
 value={el.file_data}
 height="700px"
 theme="dark"

 onChange={(value) =>onChangeCode(value,el.css_original,"original",el.file_name)}

/>

</div>
<div className="pane" >
 <iframe
 style={{width:"40vw",backgroundColor:"white"}}

   srcDoc={srcDoc}
   title="output"
   sandbox="allow-scripts"
     frameBorder="none"
   width="100%"
   height="100%"
 />
</div>
</div>
   </div>
 
 </FullScreen>

</TabPanel>
 ))}

 
</Box>
 </TabPanel>

          </>
     
      }
    





    {/* to add sections  */}
 
    {errorToAdds.length != 0 && 
    

    <TabPanel value={value} index={errorToAdds.length!=0 &&errorsOriginals.length==0
    ? 0 :1}>
     
    <Box sx={{ width: '100%' }}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={valueFilesToAdds} onChange={handleChangeFilesToAdds} aria-label="basic tabs example">
      {errorToAdds.map((el,i)=>(

<Tab label={el.file_name} {...a11yProps(i)} />
      ))}
      
    </Tabs>
  </Box>
{/* taP pannel for evrey to add file */}
{errorToAdds.length!=0 && errorToAdds.map((el,i)=>(
  <TabPanel value={valueFilesToAdds} index={i}>
  <div  style={{display:"flex",justifyContent:"end",marginRight:"5%"}}>
  <OpenWithIcon 
  onClick={handle.enter}
  />
  </div>
  <FullScreen handle={handle} >
    <div style={{backgroundColor:"white",height:"100vh"}}>
    <Breadcrumbs aria-label="breadcrumb">
  <Link
    underline="hover"
    sx={{ display: 'flex', alignItems: 'center' }}
    color="inherit"
  
  >
    <FolderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
    {el.home}
  </Link>
 
  <Typography
    sx={{ display: 'flex', alignItems: 'center' }}
    color="text.primary"
  >
    <InsertDriveFileIcon sx={{ mr: 0.5 }} fontSize="inherit" />
    {el.file_name}
  </Typography>
 </Breadcrumbs>

    <Alert severity="error">{el.error_name}</Alert>
  <div style={{display:"flex",width:"80vw"}} >
 <div className="pane top-pane"  >
 <CodeMirror
 style={{textAlign:"left",width:"40vw"}}
  value={el.file_data}
  height="700px"
  theme="dark"

  onChange={(value) =>onChangeCode(value,el.file_css,"to_add",el.file_name)}
 
 />
 
 </div>
 <div className="pane" >
  <iframe
  style={{width:"40vw",backgroundColor:"white"}}
 
    srcDoc={srcDoc}
    title="output"
    sandbox="allow-scripts"
      frameBorder="none"
    width="100%"
    height="100%"
  />
 </div>
 </div>
    </div>
  
  </FullScreen>
 
 </TabPanel>
))}
 
 

</Box>
  </TabPanel>

    }
    
    </Box>
    <div style={{marginTop:"2%"}}>
    <Footer version={"v3" }/>  
    </div>
    
   </div>
    </div>
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
   
     
    </>
  


  );
}