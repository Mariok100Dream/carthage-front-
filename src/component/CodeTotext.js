import React, { useState,useEffect,useRef, useCallback } from "react";
import axios from "axios"
import "./Uploader.css"
import { FileUploader } from "react-drag-drop-files";

import Button from '@mui/material/Button'


import Box from '@mui/material/Box';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import DataGrid  from "./datagrid"
import { MultiSelect } from "react-multi-select-component";
//banded column 
import Footer from "../pages/footer"

// live : https://www.youtube.com/watch?v=7lvWzg4Is5U
//animation
import AOS from "aos";
import "aos/dist/aos.css";

import Tour from 'reactour'

import { v4 as uuidv4 } from 'uuid';
import {
    PagingState,
    IntegratedPaging,
    FilteringState,
    IntegratedFiltering,
  } from '@devexpress/dx-react-grid';
import moment from 'moment';
import useSound from 'use-sound';
import ErrorLoader  from "./ErrorLoader";


import Navbar from "./Navbar"


import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

// popup csv reader
import PropTypes from 'prop-types';
import { GridExporter } from '@devexpress/dx-react-grid-export';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  Toolbar,
  ExportPanel,
  TableEditRow,
  TableEditColumn,
  TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';

import saveAs from 'file-saver';

import { EditingState } from '@devexpress/dx-react-grid';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});










const onSave = (workbook) => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
    });
  };
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









const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


const getRowId = row => row.id;
function HtmlToText() {

  const [text, setText] = useState();
  
  
  const fileTypes = ["HTML"];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 
  let fileReader;

function readFileAsText(file){
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

const [selected, setSelected] = useState([]);

let [file_states,setFileState] = useState([
  {text:"begin of iteration of translation"}
])



const [orginalFiles,setOriginalFiles] = useState([])
const [originalValues,setOrignalValues] = useState([])
  const onChange = (file) => {
   
    let files = file;
    let files_list = file
  
    let readers = [];
    
    // Abort if there were no files selected
    if(!files.length) return;

    // Store promises in array
    for(let i = 0;i < files.length;i++){

        readers.push(readFileAsText(files[i]));
    }
    
    // Trigger Promises
    Promise.all(readers).then((values) => {
        // Values will be an array that contains an item
        // with the text of every selected file
        // ["File1 Content", "File2 Content" ... "FileN Content"]
        setOriginalFiles(files_list)
        setOrignalValues(values)
       
    });
    
  }
 

  const extractContent = (s) => {
    const span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };

  //layout for uploder 
  //


const [rows,setRows] = useState([



])

const [showLoader,setLoader] = useState(false)
const [showTable,setShowTable] = useState(false)
const [firstContent,setFirstContent] = useState(true)
let [orginal_html,setOrignalHtml] = useState("")











const [fileTranslator,setFileTranslatior] = useState([])

const [orginals_html,setOriginalsHtml] = useState([])



const structureData = (data) =>{
  let result = []
  
  console.log(data,orginalFiles)
  var merged = data.flat()

  if(selected.length == 2) {
    

    for(let i=0;i<orginalFiles.length;i++){
      console.log(orginalFiles[i])
      let res = merged.filter(el => el.file == String(orginalFiles[i].name))
     
      let  half = Math.ceil(res.length / orginalFiles.length);

   let result_to_calculate_rounds = []
      for (let d = 2; d > 0; d--) {
        result_to_calculate_rounds.push(res.splice(0, Math.ceil(res.length / d)));
    }
  
      let file_auto = String(orginalFiles[i].name).split(".")[0]+"auto" 
      let mergedBy_auto
           mergedBy_auto =    result_to_calculate_rounds[0].map(itm => ({
            ...result_to_calculate_rounds[1].find((item) => (item[file_auto] === itm[file_auto]  ) && item),
            ...itm
          }));


       
   
        
     
      
    
   
   
     
   



      result.push(mergedBy_auto)
  }

  setFileTranslatior(result)
    
      

          

       merged = result.flat()
    

  } 
 

  

  // 
  return merged
}




let [files_names_all,setFilesNames] = useState([])
  




  
 


  let  steps = [
    {
      selector: '#ALl',
      content: "Hi this Shadow knight and let's make a tour into the website",
    },
    {
      selector: '#SelectLanguageChooser',
      content: 'From here You can choose the languages apllicate to translate thoose files',
    },
    
    {
      selector: '#fileUploader',
      content: 'From here You can Upload One or multiple File',
    },
    {
      selector: '#Submit',
      content: 'And finaly submit ',
    },
   
   
  ]



  let [openTour,setOpenTour] = useState(true)
  const closeTheTour = () =>{
    setOpenTour(false)
  }

  let [projectCode,setProjectCode] = useState(uuidv4())



  let [reservedCodes,setReservedCode] = useState([])
  let [isThereAnyProject,setIsThereAnyProjects] = useState(false)
  function containsNumbers(str) {
    return /\d/.test(str);
  }

  useEffect(()=>{
    let result = []
  
    for (let i = 0; i < localStorage.length; i++) {
      if(containsNumbers(localStorage.key(i))){
        setIsThereAnyProjects(true)
        result.push(localStorage.key(i))

      }
  

      
    }
   
    setReservedCode(result)
    setProjectUserCode(result[0])
  },[])










  const [ProjectUserCode, setProjectUserCode] = React.useState();
  let [data_related_to_file_names,setDataRealatedToFileNames] = useState([])
  let [date_created,setDateCreated] = useState('')
  const handleChangeCode = (event) => {
    setProjectUserCode(event.target.value);
  let filter_data_related =  event.target.value
  let local = JSON.parse(localStorage.getItem(filter_data_related)) 
  setDateCreated(moment(local[1]).format('MMMM Do YYYY, h:mm a')) 
  setDataRealatedToFileNames(local[0])
  };


  const [play] = useSound("https://res.cloudinary.com/dx8hb4haj/video/upload/v1667292765/Mouse-Click_yrm94m.mp3", {
    volume: 0.5,
  });
  let [depaced_value_affect_on_displaying_table,setValueAffect] = useState(false)
  



  

  // values,files





  let [showErrorPage,setShowErrorPage] = useState(false)
  let [allErrorsFound,setAllErrorsFound] = useState([])
  const [playError] = useSound("https://res.cloudinary.com/dx8hb4haj/video/upload/v1667292641/errorSound_ciejli.mp3", {
    volume: 0.5,
  });


 







  const [all_data_reserved_from_projects,setALLDATARESERVEDFROMOTHERPROJECTS] = useState([])
 let [indicators_data,setIndicatorsData] = useState([])
 



 let [data_all,setDataAll] = useState([])

  const translateThoseFiles = async() =>{

    localStorage.setItem("firstMeet",false)
  
    play();
    

   



    let comumnbrand = []

   
    let global_object = {}
 

   
    for(let x = 0 ;x<originalValues.length;x++){
        global_object[String(orginalFiles[String(x)].name.split(".")[0]+"auto")] = ""

        for(let n = 0;n<selected.length;n++){
         let  auto_string= orginalFiles[String(x)].name.split(".")[0] + selected[n].label

         global_object[auto_string] = ""
        }
    }

    //global verification before any translation 
    let eroors = []
    for(let e = 0;e<originalValues.length;e++){
   
    
      let begin_body
      if(originalValues[e].includes("</head>")){
      begin_body = originalValues[e].split("</head>")[1]
      }else{
        begin_body = originalValues[e]
      }
     
      if(begin_body.length == 0){
        eroors.push({text_error : `file ${orginalFiles[String(e)].name} is empty`})
      }
      let text_without_script = begin_body.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
      //remove css attributes
      let text_without_css_attributes =  text_without_script.replace(/<([a-z][a-z0-9]*)(?:[^>]*?((?:\s(?:src|href|style)=['\"][^'\"]*['\"]){0,3}))[^>]‌​*?(\/?)>/, '') 
      
      let table_with_spaces = extractContent(text_without_css_attributes).split("\n")
      
     
      let result = []
      for(let i=0;i<table_with_spaces.length;i++){
          let string = table_with_spaces[i].trimStart()
          let string_end= string.trimEnd()
          result.push(string_end)
      }
  
      let new_result = result.filter(el => el!="")
      var unique = [...new Set(new_result)]

      if(unique.length == 0){
        eroors.push({text_error : `no text found in file ${orginalFiles[String(e)].name}`})
      }
    
     

    }
    
    if(eroors.length != 0){
      
      setFirstContent(false)
      playError()
      setAllErrorsFound(eroors)
       return  setShowErrorPage(true)
    }


  


    let files_originals =[]

    let x= []
    let files_names = []
    let all_unique = []
    for (let d=0;d<originalValues.length;d++){

      files_names.push(orginalFiles[String(d)].name)
      let parent = String(orginalFiles[String(d)].name)
      comumnbrand.push({title:orginalFiles[String(d)].name,children:[]})

      let t =  {}
      t[parent] = []
      // let text = deleteLines(content, 3);
  
      let content = originalValues[d];
      setOrignalHtml(content)
      let original = {

      }
      original[orginalFiles[String(d)].name] = content
      original["name"]=orginalFiles[String(d)].name
      files_originals.push(original)
      let begin_body
      if(content.includes("</head>")){
      begin_body = content.split("</head>")[1]
      }else{
        begin_body = content
      }

    //remove script
      let text_without_script = begin_body.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
      //remove css attributes
      let text_without_css_attributes =  text_without_script.replace(/<([a-z][a-z0-9]*)(?:[^>]*?((?:\s(?:src|href|style)=['\"][^'\"]*['\"]){0,3}))[^>]‌​*?(\/?)>/, '') 
      
      let table_with_spaces = extractContent(text_without_css_attributes).split("\n")
      
     
      let result = []
      for(let i=0;i<table_with_spaces.length;i++){
          let string = table_with_spaces[i].trimStart()
          let string_end= string.trimEnd()
          result.push(string_end)
      }
  
      let new_result = result.filter(el => el!="")
      var unique = [...new Set(new_result)]
      
      for(let u=0;u<unique.length;u++){
            let f={
                id:u,
                data : unique[u]
            }
            all_unique.push(f)
      }

    
  
      
     
     
    
    
 
    }
   
  
    


    setDataAll(all_unique)

    setLoader(false)
    
    setFileState(x) 
    setShowTable(true)
  }


 let columns = [{name: "data",
 title: "Text"},{name: "id",
 title: "ID"}]




 const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    
    if (changed) {
        console.log("changes")
      changedRows = data_all.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = data_all.filter(row => !deletedSet.has(row.id));
    }
    setDataAll(changedRows);
  };




 const exporterRef = useRef(null);

  const startExport = useCallback(() => {
    exporterRef.current.exportGrid();
  }, [exporterRef]);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };






  const [rule, setRule] = React.useState('translated_text');

  const handleChangeRule = (event) => {
    let changed_value = event.target.value
    if(changed_value.includes("translated_text")){
      setRule(event.target.value);
    }else{
      return toast.error("tag translated_text cannot changed")
    }
  };

 const  CopyHtml = () =>{
    let left_rule = rule.split("translated_text")[0]
    let right_rule = rule.split("translated_text")[1]
    let final_string = ''
    for (let a = 0;a<data_all.length;a++){
      
        final_string +=    `${left_rule}${data_all[a].data}${right_rule}`
    }

    return final_string


 }


  return (
    <>
    <Navbar />
    <div className="App" id="ALl">
       
   {showErrorPage 
   && <ErrorLoader allErrorsFound={allErrorsFound}/>
   }


<div className="container" data-aos="zoom-in" data-aos-delay="70">
      <div className="wrapper">
{showLoader && <>

  

{indicators_data.map(el =>(
  <p>{el.text}</p>
))}

</> }



{
!showTable &&
<>
<Tour
        steps={steps}
        isOpen={openTour}
        onRequestClose={() => closeTheTour()} />
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
        <div        id="fileUploader">
        <FileUploader handleChange={onChange}  
          multiple={true}
        types={fileTypes}
         type="file" name="myfile"
     
        />

        </div>
        <ul className="controls">
         
          <li className="exchange"><i className="fas fa-exchange-alt"></i></li>
         
        </ul>
        <div
        style={{backgroundColor: "#e7f3fe",
          borderLeft: "6px solid #2196F3",
        cursor:"pointer"
        }}
        variant="outlined" onClick={() => console.log("advanced")} >
          <strong>Advenced Options!</strong>
       
      </div>
 <div    id="SelectLanguageChooser">
 
 </div>
       
    
      <Button variant="contained"
      id="Submit"
      onClick={() => translateThoseFiles()}
      >Extract</Button>
        </div>



      </Box>

</div>
</>

}



 
     
      </div>
      {showTable 
      && <>
    <Paper>
      <Grid
        rows={data_all}
        columns={columns}
        getRowId={getRowId}
      >
          <EditingState
          onCommitChanges={commitChanges}
        />
           <FilteringState defaultFilters={[]} />
        <IntegratedFiltering />
         <Toolbar />
                <ExportPanel startExport={startExport} />

            <PagingState
          defaultCurrentPage={0}
          pageSize={5}
        />
        <IntegratedPaging />
        <Table />
        <TableHeaderRow />
        <TableEditColumn
     
 
     showDeleteCommand
   />
        <TableFilterRow />
        <PagingPanel />
        <GridExporter
        ref={exporterRef}
        rows={data_all}
        columns={columns}
        onSave={onSave}
      />
     
      </Grid>
    </Paper>
   
    <Button
 
    variant="outlined" onClick={handleClickOpen}>
    Dev Option
      </Button>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      
      >
        <DialogTitle>{"Format ure input"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"   style={{paddingTop:"13%"}}>
          <p>Applicate a Roule</p>
          <TextField
           
          id="filled-multiline-flexible"
      
          multiline
          rows={15}
          value={rule}
          onChange={handleChangeRule}
        
          fullWidth
          
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
           <CopyToClipboard text={CopyHtml()}
        onCopy={() => toast.success("html file Copied")}
         >   
         <Button >Copy html</Button>
         

         </CopyToClipboard>

         <CopyToClipboard text={JSON.stringify(data_all) }
        onCopy={() => toast.success("html file Copied")}
         >   
         <Button >Copy data</Button>

         </CopyToClipboard>
       
        </DialogActions>
      </Dialog>
      </>
      }
      <Footer version={"v1" }/>   
    </div>
    <BorderLinearProgress variant="determinate" value={3} 
    
    style={{zIndex:-1}}
    />

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
    
  );
}

export default HtmlToText


