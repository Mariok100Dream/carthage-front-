import  React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false);
    const {data_all} = props
    const [rule, setRule] = React.useState('translated_text');

    const handleChangeRule = (event) => {
      let changed_value = event.target.value
   
      if(changed_value.includes("translated_text")){
        setRule(event.target.value);
      }else{
        return toast.error("tag translated_text cannot changed")
      }
    };
    let [copy,setCopy ] = useState("")
   const  CopyHtml = () =>{
      let left_rule = rule.split("translated_text")[0]
      let right_rule = rule.split("translated_text")[1]
      let final_string = ''
      for (let a = 0;a<data_all;a++){
          final_string +=    `${left_rule}${data_all[a].data}${right_rule}`
      }
      setCopy(final_string)
  
  
  
  
   }
   useEffect(() => {
    CopyHtml()
   }, [])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {t("openFullScreen")}
        
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {t("sound")}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {t("save")}
            </Button>
          </Toolbar>
        </AppBar>
        <p>{t("applicateARule")}</p>
          <TextField
           
          id="filled-multiline-flexible"
      
          multiline
          rows={3}
          value={rule}
          onChange={handleChangeRule}
        
          fullWidth
          
        />
         <CopyToClipboard text={copy}
        onCopy={() => toast.success(t("htmlFileCopied"))}
         >   
         <Button >{t("copyHtml")}</Button>

         </CopyToClipboard>
      </Dialog>
    </div>
  );
}