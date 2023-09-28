import React,{useState, useRef,useEffect } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {tunisiaDevsString} from "./exportTunisiaDevsFunction"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import {Templates} from "../../templates"
import JSZip from "jszip"
import  FileSaver from 'file-saver' 

import TextField from '@mui/material/TextField';



const TunisiaDevsExport = (props) =>{
    const {indexInitHistory,history,id} = props
 
    const [showPassword, setShowPassword] = React.useState(false);
    let [password,setPassword] = useState("")
    let[component_name,setComponentName] = useState("")
    let[disabled_button,setDisabledButton] = useState(true)
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChangePassword = (event) => {
      event.preventDefault();
      setPassword(event.target.value)
   
   
      let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  
      let testPasswordStringth = strongPassword.test(event.target.value)
      if(testPasswordStringth){
        setDisabledButton(false)
      }
      console.log("test",testPasswordStringth)
    };


    
    const handleDownload = async() =>{
          // Convert canvas to dataURL and log to console
        history[indexInitHistory].actual = true 
          let return_of_string = tunisiaDevsString(history,password,component_name) 
          let zip = new JSZip();

           zip.file(`${component_name}.tunisiadevs.txt`,return_of_string)

           zip.generateAsync({type:"blob"}).then(function(content) {
            // see FileSaver.js
            FileSaver.saveAs(content, `${component_name}.zip`);
        });
         
    }
   
    let [html_code,setHtmlCode] = useState("")
    let [css_code,setCssCode] = useState("")
    let [js_code,setjscode] = useState("")
    useEffect(()=>{
      let data = Templates.filter(el => el.id == id)[0]
      console.log( data.section_data)
      setHtmlCode(data.section_data)
      setCssCode(data.section_css)
      setjscode(data.js_data)




      let ch_code =
       `<html >`
      +"<style>"+
      data.section_css+
      "</style>"+
      +`<body >`+
      data.section_data+
      "<script>"+
      data.js_data
      +"</script>" 
      +"</body>"
      +"</html>"
       setHtmlCode(ch_code) 
    },[]) 

    return ( 
        <>
      
           <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
          <div style={{display:"flex",justifyContent:"end"}}>
          <Avatar 
           
           alt="tunisia Devs Logo"
            src="https://res.cloudinary.com/dx8hb4haj/image/upload/v1667292509/app_background_txklxf.jpg" />
            
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            <h6>Please name your section</h6>
            </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <TextField id="outlined-basic" label="section Name" variant="outlined"
          name="component_name"
          value={component_name}
          onChange={e =>setComponentName(e.target.value)}
          />
          </div>
        
            <div style={{display:"flex",justifyContent:"center"}}>
            <h6>Please give a password to your section</h6>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>

            <FormControl 
              name="password"
             
            sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            value={password}
            onChange={e => handleChangePassword(e)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
           
          />
           <FormHelperText id="filled-weight-helper-text"
           style={{color: disabled_button ? 'red' : 'rgba(0, 0, 0, 0.6)' }}
           >
            Password Must have at least one lowercase letter
            , one uppercase letter , one digit, one special character
            , and is at least eight characters long
           </FormHelperText>
        </FormControl>
            </div>
    
            <div style={{display:"flex",justifyContent:"center"}}>

            <Button variant="text"
            disabled={disabled_button && component_name!=""}
            onClick={() => handleDownload()}
            >Download</Button>

            </div>
          
        
            
            </Box>
        </>
    )
}

export default TunisiaDevsExport