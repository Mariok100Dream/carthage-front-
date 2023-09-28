import React, { useState,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {
  EditingState,
  FilteringState,
  IntegratedFiltering,
  SearchState,

} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditColumn, TableEditRow,
  PagingPanel,
  TableFilterRow,
  Toolbar,

} from '@devexpress/dx-react-grid-material-ui';
import debounce from 'lodash.debounce';
import Navbar from "../Navbar"

import Footer from '../../pages/footer';

import {
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import Button from '@mui/material/Button';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import Sucess from "./Success"




// we pass in success all the file html & css after combining them 




const EditCell = ({ errors, ...props }) => {
  const { children } = props;
  return (
    <TableEditColumn.Cell {...props}>
      {React.Children.map(children, child => (
        child?.props.id === 'commit'
          ? React.cloneElement(child, { disabled: errors[props.tableRow.rowId] })
          : child
      ))}
    </TableEditColumn.Cell>
  );
};

// Maps the rows to a single object in which each field are is a row IDs
// and the field's value is true if the cell value is invalid (a column is required
// but the cell value is empty)

const exist = (row,data,orginal_classes,final_css) =>{

  
  const specialChars = /[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/;

  //only accept normal cararcter
  if(row.lastName == undefined || row.lastName ==""){
    return true
  }
  if(row.lastName.trim() == ""){
    return true
  }
  console.log("testing regex", specialChars.test(row.lastName))
  if( specialChars.test(row.lastName)){
    return true
  }
  if(orginal_classes.filter(el => el == row.lastName).length!=0){
    return true
  }
  if(data.filter(el => el.lastName == row.lastName).length!=0){
    return true
  }
  if(data.filter(el => el.firstName == row.lastName).length!=0){
    return true
  }
  if(final_css.filter(el => el == row).length!=0){
    return true
  }
  else{
    return false
  }

}
const validate = (rows, columns,data,orginal_classes,final_css) => Object.entries(rows).reduce(

  (acc, [rowId, row]) => ({
    
    ...acc,
    [rowId]: columns.some(column =>  exist(row,data,orginal_classes,final_css) ),
  
  })
  
  , {},
);

const columns = [
  { name: 'firstName', title: 'Orginal class Name', required: true },
  { name: 'lastName', title: 'Changed Class Name', required: true },
 
];
const getRowId = row => row.id;

export default function DuplicatedClass(props) {
  let {rows_data,orginal_classes,to_add_section_classes,final_css,

    
  
  
  
    html_originals,
    css_orginals,
    htmls_toAds,
    css_toAdd,
  } = props
  const [rows, setRows] = useState(rows_data);
  const [errors, setErrors] = useState({});

  const commitChanges = ({ changed }) => {
    console.log(changed)
    const changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    console.log(changedRows)
    setRows(changedRows);
  };
  const [editingStateColumnExtensions] = useState([
    { columnName: 'firstName', editingEnabled: false },
  ]);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageSizes] = useState([5, 10, 15]);
  const onEdited = debounce(edited => setErrors(validate(edited, columns,rows,orginal_classes,final_css)), 250);
  const [searchValue, setSearchState] = useState('');


  let [search_class,setSearchClass] = useState("")

  let [enable_button,setEnableButton] = useState(true)
  let [enable_human_button,setEnableHumanButton] = useState(false)
  useEffect(() => {
     
      let result_final = rows.filter(el => el.lastName=="")
      console.log(result_final)
      if(result_final.length != 0){
        console.log("detect changes final")
        setEnableButton(true)
        setEnableHumanButton(false)
      }else{
        setEnableButton(false)
        setEnableHumanButton(true)
      }
      
  }, [rows])

  const exist_in = (row,data,orginal_classes) =>{

  
    const specialChars = /[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/;
  
    //only accept normal cararcter
   
    

    if( specialChars.test(row)){
      return true
    }
    console.log("classes ",orginal_classes)
    if(orginal_classes.filter(el => el == row).length!=0){
      return true
    }
    if(data.filter(el => el.lastName == row).length!=0){
      return true
    }
    if(data.filter(el => el.firstName == row).length!=0){
      return true
    }
    if(final_css.filter(el => el == row).length!=0){
      return true
    }
  
    else{
      return false
    }
  
  }

  let snakeClass = (class_name,class_section) =>{
      class_section  = class_section.replace(/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/g,"")
      class_name = class_name.replace(/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/g,"")
      let snake_class = class_section +"_"+class_name
      return snake_class
  }


  let DoublesnakeClass = (class_name,class_section) =>{
    class_section  = class_section.replace(/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/g,"")
    class_name = class_name.replace(/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/g,"")
    let snake_class = class_section +"__"+class_name
    return snake_class
}

let CamelClass = (class_name,class_section) =>{
  class_section  = class_section.replace(/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/g,"")
  class_name = class_name.replace(/[`!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?~]/g,"")
  class_name =class_name.toLowerCase()
  class_name = capitalizeFirstLetter(class_name)
  let camel_class = class_section +class_name
  return camel_class
}




function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



  let generateHumanClassesBasedOnComponentName = () =>{
    let result  = rows.filter(el => el.lastName=="")
    //validate function of the new class 
    //id firstName laseName section class

    console.log("sections",to_add_section_classes.length)
    let all = []
    for(let r = 0;r<to_add_section_classes.length;r++){
        let snake_thing =  snakeClass(to_add_section_classes[r].section_name.trim(),to_add_section_classes[r].section_class)
//  rows.filter(el => el.firstName==to_add_section_classes[r].section_class)[0].lastName =  snakeClass(to_add_section_classes[r].section_name,to_add_section_classes[r].section_class)
 
          let  camel_thing = CamelClass(to_add_section_classes[r].section_name.trim(),to_add_section_classes[r].section_class)
        let double_snake = DoublesnakeClass(to_add_section_classes[r].section_name.trim(),to_add_section_classes[r].section_class)
     
      if(!exist_in(snake_thing,rows,orginal_classes)){
          let id= result.filter(el => el.firstName == to_add_section_classes[r].section_class)[0].id
         
          all.push({id,firstName:to_add_section_classes[r].section_class,lastName:snake_thing})
         }  
          else if(!exist_in(camel_thing,rows,orginal_classes)){
          let id= result.filter(el => el.firstName == to_add_section_classes[r].section_class)[0].id
          all.push({id,firstName:to_add_section_classes[r].section_class,lastName:camel_thing})

         }
        else if(!exist_in(double_snake,rows,orginal_classes)){
          let id= result.filter(el => el.firstName == to_add_section_classes[r].section_class)[0].id
          all.push({id,firstName:to_add_section_classes[r].section_class,lastName:double_snake})
         }
         else{
          let id= result.filter(el => el.firstName == to_add_section_classes[r].section_class)[0].id
          all.push({id,firstName:to_add_section_classes[r].section_class,lastName:""})
         
         }


       
      }
    // exist_in(text,data,orginal_classes)
   let final =  rows.map(obj => all.find(o => o.id === obj.id) || obj);
    console.log("all",final)
    setRows(final)
    console.log("to add les ",to_add_section_classes)

  }


  let returnHtmlString = (chaine) =>{
    let ch = chaine 
   
    
    for(let i=0;i<rows.length;i++){
        if( chaine.includes(rows[i].firstName)){
              ch = ch.replaceAll(rows[i].firstName,rows[i].lastName)
        }
    }
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
      for(let row=0;row<rows.length;row++){
        if(final_ch.includes(rows[row].firstName))
          final_ch = final_ch.replaceAll(`.${rows[row].firstName}`,`.${rows[row].lastName}`)
      }






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



  let[final_step,setFinalStep] = useState([])
  let [showTable,setShowTable] = useState(true)
  let gotTofinalStep = () =>{
      //rows all classes modified 
      //contain parent  file_toAddAll
      
    

     
    

        //get html code of section by there name 
        //in to add file 
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
        setFinalStep(final_result)
        setShowTable(false)
        


  
      //for evrey page 
      // we append html of section in the to add files 

      //first we must know





  }
  return (
    <>
    {showTable ? <>
      <Navbar  firstText="don't have a nice day" secondText="have a great day"/>

    <div class="container" >
  <div class="wrapper">
  <Button
  disabled={enable_human_button}
  onClick={() => generateHumanClassesBasedOnComponentName()}
  
  >auto generate human classes names</Button>
  <div style={{display:"flex",justifyContent:"end"}}>
  <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'end', width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search For a class"
        inputProps={{ 'aria-label': 'Search For a class' }}
        value={search_class}
        name="search_class"
        onChange={e => setSearchClass(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
     
    </Paper>
  </div>

  <Paper>
      <Grid
        rows={rows.filter((el) =>{
        
          if(search_class==""){
            return el
          }else if(el.firstName.toLowerCase().includes(search_class.toLowerCase())
          ){
            return el
          }
        })}
        columns={columns}
        getRowId={getRowId}
      >
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <IntegratedPaging />
                <FilteringState defaultFilters={[]} />
                <SearchState
          value={searchValue}
          onValueChange={setSearchState}
        />
        <IntegratedFiltering />
        <EditingState
          onRowChangesChange={onEdited}
          onCommitChanges={commitChanges}
          columnExtensions={editingStateColumnExtensions}
        />
        
        <Table />
        
        <TableHeaderRow />
        <Toolbar />
     
        <TableFilterRow />
      
        <TableEditColumn
          showEditCommand
      
          cellComponent={props => <EditCell {...props} errors={errors} />}
        />
        <TableEditRow />
        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
    </Paper>

    <Button 
    onClick={() => gotTofinalStep()}
    disabled={enable_button}>Go to final step</Button>
    <Footer version={"v3" }/> 
  </div>
    </div>
    </> : 
    <Sucess final_step={final_step}/>
    }
     
    </>
  
 
  
  );
};
