import React,{useState,useEffect} from 'react'
import "./viewComponent.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FileUploader } from "react-drag-drop-files";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkIfPasswordIsCorrect,decryptString} from "../Exportoption/tunisiaDev/exportTunisiaDevsFunction"
import {handlerHistory} from "./handlerHistory"
import FrameToShow from "./frame/frameToShow" 
const ViewComponent = () =>{
    const fileTypes = ["txt"];
    let [password,setPassword] = useState("")
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
            reader(values)
        });
        
      }
      let [fileData,setFileData] = useState("")
      let reader = (data) =>{
       
        setFileData(data[0])
      }

      
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let [showIframe,setShowIframe] = useState(false)
  let [htmlData,setHtmlData] = useState("")
  let [cssData,setCssData] = useState("")
  let [jsData,setJsData] = useState("")
  let handleSubmit =async () =>{
    if(fileData=="")
    return toast.error("please insert a file")
    if(password=="")
    return toast.error("please write your password")
    if(!await checkIfPasswordIsCorrect(fileData.slice(0,
        60) ,password))
    return toast.error("uncorrect password")    
    let history_array = await decryptString(fileData.slice(60,
        fileData.length) ,password)
    let data_history = history_array.filter(el => el.actual == true) [0]   
    let data = await handlerHistory(history_array,data_history)
    setHtmlData(data.section_data) 
    setCssData(data.section_css)
    setJsData(data.js_data)
    setShowIframe(true)

  }
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ''; // Some browsers require a non-empty string here
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
    return (
        <>
        { showIframe  ? 
          <FrameToShow 
          htmlData={htmlData}
          cssData={cssData}   
          jsData={jsData}
          />
          :
<>
          <div >
          <Card sx={{ minWidth: 575 }} style={{marginTop:"29%"}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <FileUploader handleChange={onChange}  
         multiple={true}
       types={fileTypes}
        type="file" name="myfile"
     
       />
          </Typography>
          <Typography variant="h5" component="div">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" 
          style={{marginLeft:"40%"}}
          onClick={() => handleSubmit()}
          >Go to Interface</Button>
        </CardActions>
      </Card>
          </div>
          <ToastContainer />
          </>
      }
      



      
        </>
       
    )
}

export default ViewComponent