import  React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Success.css"
import Navbar from "../Navbar"
import Footer from '../../pages/footer';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import ShareIcon from '@mui/icons-material/Share';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import CodeMirror from "@uiw/react-codemirror";

import OpenWithIcon from '@mui/icons-material/OpenWith';

import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JSZip from "jszip"
import  FileSaver from 'file-saver' 
import { v4 as uuidv4 } from 'uuid';
import Confetti from "react-confetti";
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


function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  



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

export default function Success(props) {
  let {final_step} = props
  const [value, setValue] = React.useState(0);
  let [showing,setShowing] = useState(true)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  
    setHtml(show[newValue].file_data)
    setCss(show[newValue].file_css)
    setShowing(!showing)
  };


  const theme = useTheme();
  const [downloades, setDownloades] = React.useState([]);

  const handleChangeDownload = (event) => {
    const {
      target: { value },
    } = event;
    setDownloades(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  let [html,setHtml] = useState("")
  let [css,setCss] = useState("")
  let [srcDoc,setSrcDoc] = useState("")


  let [show,setShow] = useState(final_step)

  const onChangeCode = React.useCallback((value,i) => {
    //now we change the html code  index per page 
    let result = show.filter((el,j) => j==i)
    result[0].file_data = value
    let final =  show.map(function (a) {
      return this[a.name] || a;
  }, result.reduce(function (r, a) {
      r[a.file_name] = a;
      return r;
  }, Object.create(null)));
   
    setShow(final)
    setHtml(value);
    setShowing(!showing)
  }, []);

 const onChangeCssCode =React.useCallback((value,i) => {
  let result = show.filter((el,j) => j==i)
  result[0].file_css = value
  let final =  show.map(function (a) {
    return this[a.name] || a;
}, result.reduce(function (r, a) {
    r[a.file_name] = a;
    return r;
}, Object.create(null)));
setShow(final)
    setCss(value);
  
    setShowing(!showing)
  }, []);


  let [showConfetti,setShowCofetti] = useState(false)
  let DownloadFiles = () =>{
    if(downloades.length == 0){
     return toast.error("no Files selected to download ...")
    }
    let zip = new JSZip();
    for(let i=0;i<downloades.length;i++){
          //prepare the html and css file that converted 
          let react = zip.folder(downloades[i].split(".")[0])
          let searcher = show.filter(el => el.file_name == downloades[i])[0]
          let styleName = downloades[i].split(".")[0] +".css"
          let html_adder = `<link rel="stylesheet" href="${styleName}">` +searcher.file_data
          react.file(downloades[i],html_adder)
          react.file(styleName,searcher.file_css)
          

    }
    zip.generateAsync({type:"blob"}).then(function(content) {
      // see FileSaver.js
      FileSaver.saveAs(content, `${uuidv4()}.zip`);
  });
  setShowCofetti(true)
 




  }



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
  }, [showing,html,css])
  useEffect(()=>{
    setShowing(!showing)
  },[])

  const handle = useFullScreenHandle();
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShowCofetti(false)
    }, 8000)

    return () => {
      clearTimeout(timeId)
    }
  }, [showConfetti]);
  return (
    <>
    <Navbar  firstText="don't have a nice day" secondText="have a great day"/>

    {showConfetti&&
      <Confetti
      width={1400}
      height={1400}
    />
     }
  
    <div class="container" >

        <div class="wrapper">
        <Alert severity="info">All those border in result will not be exported</Alert>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Download Files</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={downloades}
          onChange={handleChangeDownload}
          input={<OutlinedInput id="select-multiple-chip" label="Download Files" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {show.length!= 0 && show.map((el) => (
            <MenuItem
              key={el.file_name}
              value={el.file_name}
              style={getStyles(el.file_name, downloades, theme)}
            >
              {el.file_name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" endIcon={<DownloadIcon />}
        style={{marginTop:"1%"}}
        onClick={() => DownloadFiles()}
        >
        Download
      </Button>
      </FormControl>



        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        {show.length!= 0 && show.map((el,i)=>(
           <Tab label={el.file_name} {...a11yProps(i)} />
        ))}
       
          
        </Tabs>
      </Box>
      {show.length!= 0 && show.map((el,i)=>(
  <TabPanel value={value} index={i}>
  <div  style={{display:"flex",justifyContent:"end",marginRight:"5%"}}>
<OpenWithIcon 
onClick={handle.enter}
/>
</div>
<FullScreen handle={handle} >
<div style={{backgroundColor:"white",height:"100vh"}}>
<Breadcrumbs aria-label="breadcrumb">


<Typography
sx={{ display: 'flex', alignItems: 'center' }}
color="text.primary"
>
<InsertDriveFileIcon sx={{ mr: 0.5 }} fontSize="inherit" />
{el.file_name}
</Typography>
</Breadcrumbs>


<div style={{display:"flex",width:"80vw"}} >
<div className="pane top-pane" 
style={{ height: "50px"}}
>
html
<CodeMirror
style={{textAlign:"left",width:"40vw",height:"10vh !important"}}
value={el.file_data}
height="70vh"
theme="dark"

onChange={(value) =>onChangeCode(value,i)}

/>


</div>
<div>
css
<CodeMirror
style={{textAlign:"left",width:"40vw",marginLeft:"1%"}}
value={el.file_css}
height="70vh"
theme="dark"

onChange={(value) =>onChangeCssCode(value,i)}

/>
</div>

</div>
<div className="pane" >
Result
<iframe
style={{backgroundColor:"white",border:"2px solid #FD5959"}}

srcDoc={srcDoc}
title="output"
sandbox="allow-scripts"
 
width="100%"
height="100%"
/>
</div>
</div>

</FullScreen>
  </TabPanel>
      ))}
    
     
    </Box>

        </div>
        <Stack direction="row" 
    style={{marginBottom:"1%",marginTop:"1%",display:"flex",justifyContent:"center"}}
    spacing={2}>
      {/* <Button variant="contained" startIcon={<TranslateIcon />}>
        Translate
      </Button> */}
      <Button variant="contained" startIcon={<ShareIcon />}>
        Share Project
      </Button>
      {/* <Button variant="contained" startIcon={<PrecisionManufacturingIcon />}>
        Convert
      </Button> */}
    </Stack>
        <Footer version={"v3" }/>   
    </div>
   
   
    </>
  );
}