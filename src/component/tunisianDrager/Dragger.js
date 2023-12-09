import  React,{useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import "./Dragger.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionHeaderAllStyle from "./component/all/descriptionHeader/style/descriptionHeader"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CardSingleStyle from "./component/single/card/style/cardSingleStyle"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Templates} from "./templates"
import { FileUploader } from "react-drag-drop-files";
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Frame from 'react-frame-component';
import InputAdornment from '@mui/material/InputAdornment';

import CodeIcon from '@mui/icons-material/Code';
import ShareIcon from '@mui/icons-material/Share';

import DeleteIcon from '@mui/icons-material/Delete';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CloseIcon from '@mui/icons-material/Close';

import CardAllStyle from "./component/all/card/style/cardALLStyle"

//content things

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import ContentCopyIcon from '@mui/icons-material/ContentCopy';


import Grid from '@mui/material/Grid';



import CardActions from '@mui/material/CardActions';

import EditIcon from '@mui/icons-material/Edit';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

import { FacebookShareButton, TwitterShareButton ,LinkedinShareButton,
  WhatsappShareButton,InstapaperShareButton
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon,
  WhatsappIcon,InstapaperIcon
} from "react-share";

import ImageUploading from "react-images-uploading";

import axios from 'axios';

import { styled } from '@mui/material/styles';

//export 
import ExportOption from "./Exportoption/ExportOption"
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Avatar from '@mui/material/Avatar';
//open in new window 
import LaunchIcon from '@mui/icons-material/Launch';
import PortalShowUp from "./OpenInNewWindow/PortalshowUp"
import {  replaceWithRandom } from './OpenInNewWindow/helpers'
import {checkIfPasswordIsCorrect,decryptString} from "./Exportoption/tunisiaDev/exportTunisiaDevsFunction"
import {updateSlider} from "./functionsNeccessairy/updateSlider"
import {updateGlobalStyleJS} from "./functionsNeccessairy/updateGlobalStyle"
import {updatePerSection} from "./functionsNeccessairy/updatePerSection"
import TranslatorDrager from "./translator/tunisiaDevDragerTranslator"
import CardDescriptionTranslator from "./translator/cardDescriptionTranslator/CardDescriptionTranslator"
import TitleTranslator from "./translator/titleTranslator/titleTranslator"
import DescriptionTranslator from "./translator/descriptionTranslator/descriptionTranslator"
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import moment from 'moment';

import {handleUpdateGlobalStyle} from "./functionsNeccessairy/handleUpdateGlobalStyle"
import {handleChangeDataHistory} from "./functionsNeccessairy/handleChangeData"

import {htmlStringBase64Image} from "./Exportoption/tunisiaDev/functions"
import CircularProgress from '@mui/material/CircularProgress';
import {getRandomEncourgmentMessage} from "./encorgmentMessages/messageEncourgment"


import TitleClassifier from "./Classifier/titleclassifier"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {updateTitleJS} from "./functionsNeccessairy/UpdateTitle"
import {handleUpdateTitle} from "./functionsNeccessairy/handleUpdateTitle"
import {updateDescriptionJS} from "./functionsNeccessairy/UpdateDescription"
import {handleUpdateDescription} from "./functionsNeccessairy/handleUpdateDescription"
import {handleUpdateSlider} from "./functionsNeccessairy/handleUpdateSlider"
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginImageEdit from "filepond-plugin-image-edit";

// css
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css";

import "./vendor/doka.min.css";
import { create } from "./vendor/doka.esm.min";
import {updateResponsiveStyle} from "./functionsNeccessairy/updateResposiveStyle"
import {handleupdateResponsiveStyle} from "./functionsNeccessairy/handleUpdateResponsive"
import {handleAddSection} from "./functionsNeccessairy/handleAddSection"
import {handleDeleteSection} from "./functionsNeccessairy/handleDeleteSection"
import ReportIcon from '@mui/icons-material/Report';
import CommingSoon from "./elements/CommingSoon/CommingSoon"
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SteperFinish from "./SteperFinish/steperFinish"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import {handlerOrders} from "./view component/handlerHistory"
import {handleDownload} from "./functionsNeccessairy/downloadOrders"
import {boostarp} from "./liberys/css/boostrap"
import {fontawsome} from "./liberys/css/fontawsome"
import {ownCarousel} from "./liberys/css/owlCarousel"

import {owlCarouselJs} from "./liberys/js/owlcarousel"
import ComponentwithSelectAndInput from './elements/ComponentWithSelectANdInput/conponentWithSelectAndInput'

import  FontFamilySelect from './elements/fontFamilySelect/fontFamilyselect'
import AlignElement from './elements/AlignElement/alignElement';
import InputElement from './elements/inputElement/inputElement';
import InputElementTypeColor from './elements/inputElementTypeColor/inputElementTypeColor';
import PrioritySelectElement from './elements/prioritySelectElement/prioritySelectElement';
import ContentTitleSingle from "./component/single/title/content/contentTitleSingle"
import LinearProgress from '@mui/material/LinearProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import {logo} from "../../logo/logoDrager"
import FullScreenCodeResultDialog from "./Models/getCodeResultFullPopup"
import { useTranslation } from 'react-i18next'
import BorderElement from "./elements/borderElement/borderElement"
import TitleSingleStyle from "./component/single/title/style/titleSingleStyle"
import DescriptionSingleStyle from "./component/single/description/style/descriptionSingleStyle"
import ImageSingleStyle from "./component/single/image/style/imageSingleStyle"
import TitleHeaderAllStyle from "./component/all/titleHeader/style/titleHeader"
import TitleAllStyle from "./component/all/title/style/titleGlobalStyle"
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const tabs = [
  { title: "title color", field_name: "title_color" },
  { title: "title hover color", field_name: "title_hover_color" },
  // Add other tab data as needed
];

// Calculate the total height required to display all tabs
const totalHeight = 50 * tabs.length; // Adjust the height based on your needs

// Render function for the List component in react-virtualized




const steps = [
  "Choose Order to Export",
  "Confirm Result",
  "Write your password"
];

const stepsForCharge = [
  "Upload Your File",
  "Confirm password",
  "confirm result",
  "Applicate"
];






// Register the FilePond plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginImageEdit
);


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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

const styleVideo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 690,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};




//popup history Detail 
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



export default function ClippedDrawer() {
  const {t} = useTranslation()
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
  let [encourgmentMessage,setEncourgmentMessage] = useState("")
  //change the title and icon of the application 
  useEffect(()=>{
    let {randomMessage,randomIcon} = getRandomEncourgmentMessage()
    let message = randomMessage + " " + randomIcon 
    setEncourgmentMessage(message)
    window.document.title = randomMessage
  },[])


  let [tasks,setTasks] = useState(Templates)
 let  onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";

  };

  let onDragEnd = (evt) => {
    evt.currentTarget.classList.remove("dragged");
  };
  let onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };
  let  onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };
  let onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };
  const [characters, updateCharacters] = useState([]);
  let onDrop = (evt, value, status) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let taskso = tasks;
   
    //he get the id 
   
    let updated = taskso.map((task) => {

      if (task.id.toString() === data.toString()) {
        task.status = status; // 
      } //function to update something
      return task;
    });

   

    setTasks( updated );
    let done = updated.filter((data) => data.status === "Completed");
    


    updateCharacters(done)
  };

  let deleteSection = (id) =>{
   
    let taskso = characters;
   
    //he get the id 

    let updated = taskso.filter(el => el.id !== id)
    //update status to that id into New Order 
   let array = taskso.filter(obj => {
    return id=== obj.id;   
    }).map((obj, idx) => {
      
       obj.status = "New Order";
   
       return obj;
  })[0]

    updated.push(array)



  

    updateCharacters( updated );
  }



  function handleOnDragEnd(result) {
 
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }


  let newOrder = Templates


  const [open, setOpen] = React.useState(false);
  let [section_name,setSectionName] = useState("")
  let [id,setId] = useState("")
  let [type,setType] = useState()
 
  let [itemsData,setItems] =useState([])
  let [section_id,setSectionId] =useState("")
  let [global_style,setGlobalStyle] = useState([])
  let [hasSlider,setHasSlider] = useState(false)

  //slider things  
  let [item576,setItem576] = useState("")
  let [item768,setItem768] = useState()
  let [item1200,setItem1200] = useState()
  let [autoplay,setAutoPlay] = useState()
  let [showDots,setShowDots] = useState()
  let [showArrows,setShowArrows] = useState()
  let [mouseDrag,setMouseDrag] = useState()
  let [history,setHistory] = useState([])

  let [titleInOpen,setTitleInOpen] = useState()
  let [descriptionInOpen,setDescriptionInOpen] = useState()
  const handleOpen = (name,typo,ido,data_team,
    global,slide,all_data
    ) =>  {
      
      setItem576(all_data.item576)
      setItem768(all_data.item768)
      setItem1200(all_data.item1200)
      setAutoPlay(all_data.autoplay)
      setShowDots(all_data.showDots)
      setShowArrows(all_data.showArrows)
      setMouseDrag(all_data.mouseDrag)
      //title and description 
      setTitleInOpen(all_data.title)
      setDescriptionInOpen(all_data.description)

    setHasSlider(slide)
    setOpen(true)
    setSectionName(name)
    setType(typo)
    setId(ido)
    setGlobalStyle(global)
  
    setSectionId(ido)
    //history navigator

    setItems(all_data.data_team)
  };
  const handleClose = () => setOpen(false);



  //table 

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  let [video_url,setVideoUrl] = useState("")
 
  const [open_video, setOpenVideo] = React.useState(false);
  let [section_video_name,setSectionVideoName] = useState("")
  const handleOpenVideo = (video,name) => {
    setVideoUrl(video)
    setSectionVideoName(name)
    setOpenVideo(true)};
  const handleCloseVideo = () => setOpenVideo(false);

  //content controller 
 
  const fileTypesFromTunisiaDevs = [t("txt")]
  let [logo_content,setLogoContent] = useState("")

  const [expandedParent, setExpandedParent] = React.useState(false);

  const handleChangeParent = (panel) => (event, isExpanded) => {
    setExpandedParent(isExpanded ? panel : false);
  };

  const [expandedChildren, setExpandedChildren] = React.useState(false);

  const handleChangeChildren = (panel) => (event, isExpanded) => {
    setExpandedChildren(isExpanded ? panel : false);
  };

  let deleteSectionContent = (id) =>{
    let historyMaker = history
    let object_history = {}
   object_history.iteration_id  = uuidv4()
   object_history.iteration_tap = ["Content","Content Card","Copy"]

    object_history.iteration_section = section_id
   object_history.iteration_title = "Delete "
   object_history.iteration_type = "title"
   object_history.iteration_description = `delete section `
   object_history.iteration_date = new Date().toISOString()
   object_history.function_name = "handleDeleteSection" 
   object_history.parameter = `${section_id}`
   object_history.variable_change = `numberOfcopiedSection:,!:$*ù${id}`
  
   historyMaker.push(object_history)
  


    let parents = itemsData.filter(el => el.id !== id)
     setItems(parents) 

  }

  let copySection = (id) =>{
    let parentsCopy = itemsData
    let to_copy_section = itemsData.filter(el => el.id === id)[0]

   let historyMaker = history
    let object_history = {}
   object_history.iteration_id  = uuidv4()
   object_history.iteration_tap = ["Content","Content Card","Copy"]

    object_history.iteration_section = section_id
   object_history.iteration_title = "Copy"
   object_history.iteration_type = "title"
   object_history.iteration_description = `copy section `
   object_history.iteration_date = new Date().toISOString()
   object_history.function_name = "handleAddSection" 
   object_history.parameter = `${section_id}`
   object_history.variable_change = `numberOfcopiedSection:,!:$*ù${id}`
  
   historyMaker.push(object_history)
  
    parentsCopy.push(to_copy_section)
    
    setItems(parentsCopy)
    
  }


  const [selectSocialMedia, setSelectSocialMedia] = React.useState('');

  const handleChangeSocialMediaContent = (event) => {
    setSelectSocialMedia(event.target.value);
  };



  const handleCloseContent = () => setOpenContent(false);
  //title
  let [title_text,setTitleText] =useState("")
  let [title_color,setTitleColor] = useState("")
  let [title_hover_color,setTitleHoverColor] = useState("")
  let [title_font_family,setTitleFontFamily] = useState("")
  let [title_font_size,setTitleFontSize] = useState("")
  let [title_padding_top,setTitlePaddingTop] = useState("")
  let [title_padding_bottom,setTitlePaddingBottom] = useState("")
  let [title_padding_left,setTitlePaddingLeft] = useState("")
  let [title_padding_right,setTitlePaddingRight] = useState("")
  let [title_margin_top,setTitleMarginTop] = useState("")
  let [title_margin_bottom,setTitleMaginBottom] = useState("")
  let [title_margin_left,setTitleMaginLeft] = useState("")
  let [title_margin_right,setTitleMarginRight] = useState("")
  const [alignmentTitleAlign, setAlignmentTitleAlign] = React.useState('');


  //description content changing
  let [description_text,setDescriptionText] = useState("")
  let [description_text_color,setDescriptionTextColor] = useState("")
  let[description_hover_color,setDescriptionHoverColor] = useState("")
  //Image 
  let [Image_border_top_left_radius,setImageBorderTopLeftRadius] = useState("")
  let [Image_border_top_right_radius,setImageBoderTopRightRadius] = useState("")
  let [Image_border_bottom_right_radius,setImageBorderBottomRightRadius] = useState("")
  let [Image_border_bottom_left_radius,setImageBorderBottomLeftRadius] = useState("")
  let [Image_width,setImagewidth] = useState("")
  let [Image_height,setImageHeight] = useState("")  
  let [ImageBackground,setImageBackground]= useState("")
  let [ImageBackgroundWidth,setImageBackgroundWidth] = useState("")
  let [ImageBackgroundHeight,setImageBackgroundHeight] = useState("")  
  //social media adder 
  let [url_social_media_adder,setUrlSocialMediaAdder] = useState("https")
  let [fontsizeContainerIcon,setFontSizeContainerIcon] = useState("")
  let [fontsizeIcon,setFontSizeIcon] = useState("")
  //social media update 

  const [opencontent, setOpenContent] = React.useState(false);
  let [background_color_hover,setBackgroundColorHover] = useState("")
  let [ backgroundcolorContainer,setBackgroundColorIcon] = useState("")
  let [url_edit,setUrlEdit] = useState("")
  const [selectSocialMediaEdit, setSelectSocialMediaEdit] = React.useState('');
  let [indexEdit,setIndexEdit] = useState("")
  let [priority,setPriority] = useState("")  


  //card 
  const [border_card_top,setBorderCardTop] = useState("")
  const [border_card_bottom,setBorderCardBottom] = useState("")
  const [border_card_left,setBorderCardLeft] = useState("")
  const [border_card_right,setBorderCardRight] = useState("")  
  const handleChangeSocialMediaEdit = (event) => {
    setSelectSocialMediaEdit(event.target.value);
  };
  let [itemParentId,setItemParentId] = useState("")
  let [indexParentData,setindexParentData] = useState("")
  let [dataForm,setDataForm] = useState("")

  //url dynamique balise things 

  const handleOpenContent = (type,url,i,id,index,data) => {
    setUrlEdit(url)
    setSelectSocialMediaEdit(type)
    setDataForm(data)
    setIndexEdit(i)
    setItemParentId(id)
    setindexParentData(index)
    setOpenContent(true)
  };


  let handleDelete = (i,id,indexParent) =>{
    let all = itemsData
    let searcher = itemsData.filter(el => el.id === id)[0]
    searcher.children[3].social_media_data[i] =""
    all[indexParent] = searcher

    setItems(all)
  
    setUrlSocialMediaAdder(uuidv4())
  
 
  }


  const [valueFunctionalityTap, setValueFunctionalityTap] = React.useState(0);

  const handleChangeFunctionalityTap = (event, newValue) => {
    setValueFunctionalityTap(newValue);
  };

  const [valueTitle,setValueTitle] = useState(0)
  const handleChangeValueTitleTap = (event, newValue) => {
    setValueTitle(newValue);
  };
  const [valueDescription,setValueDescription] = useState(0)
  const handleChangeValueDescription = (event, newValue) => {
    setValueDescription(newValue);
  };
  const [valueImage,setValueImage] = useState(0)
  const handleChangeValueImage = (event, newValue) => {
    setValueImage(newValue);
  };



  const [valueTitleTap,setValueTap ] = useState(0)

  const handleChangeFunctionalityTapTitle = (event, newValue) => {
    setValueTap(newValue);
  };


 let handleChangeData = (type,id,text,index,iteration) =>{
  let all = itemsData

    let searcher = itemsData.filter(el => el.id === id)[0]
    let updates = []
    let historyMaker = history


    if(type==="title"){
      if(title_text!==""){
        searcher.children[0]["text"] = title_text
      
         let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Content","Content Card","title","content"]
        
         object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text to ${title_text}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_text:,!:$*ù${title_text}`
       
        historyMaker.push(object_history)
      }
       if(title_color!==""){
      
        searcher.children[0]["color"] = title_color
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title color to ${title_color}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_color:,!:$*ù${title_color}`
        historyMaker.push(object_history)
      }
      if(title_hover_color!==""){
        searcher.children[0]["hover_color"] = title_hover_color
       
    let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title hover color to ${title_hover_color}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_hover_color:,!:$*ù${title_hover_color}`
        historyMaker.push(object_history)
      } 
      if(title_font_family!==""){
        searcher.children[0]["font_family"] = title_font_family
     
    let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title font family to ${title_font_family}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_font_family:,!:$*ù${title_font_family}`
        historyMaker.push(object_history)
      }
      if(title_font_size!==""){
        searcher.children[0]["font_size"] = title_font_size
       
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title font size to ${title_font_size}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_font_size:,!:$*ù${title_font_size}`
        historyMaker.push(object_history)
      }
      if(title_padding_top!==""){
        searcher.children[0]["padding_top"] = title_padding_top
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title padding top to ${title_padding_top}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_padding_top:,!:$*ù${title_padding_top}`
        historyMaker.push(object_history)
      }
      if(title_padding_bottom!==""){
        searcher.children[0]["padding_bottom"] = title_padding_bottom
       
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title padding bottom to ${title_padding_bottom}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_padding_bottom:,!:$*ù${title_padding_bottom}`
        historyMaker.push(object_history)
      }
      if(title_padding_left!==""){
        searcher.children[0]["padding_left"] = title_padding_left
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title padding left to ${title_padding_left}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_padding_left:,!:$*ù${title_padding_left}`
        historyMaker.push(object_history)
      }
      if(title_padding_right!==""){
        searcher.children[0]["padding_right"] = title_padding_right
        
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title padding right to ${title_padding_right}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_padding_right:,!:$*ù${title_padding_right}`
        historyMaker.push(object_history)
      }
      if(title_margin_top!==""){
        searcher.children[0]["margin_top"] = title_margin_top
       
        let object_history = {}
        object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title margin top to ${title_margin_top}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
        historyMaker.push(object_history)
      }
      if(title_margin_bottom!==""){
        searcher.children[0]["margin_bottom"] = title_margin_bottom 
       
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id      
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title margin bottom to ${title_margin_bottom}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
        historyMaker.push(object_history)
      }
      if(title_margin_left!==""){
        searcher.children[0]["margin_left"] = title_margin_left
       
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title margin left to ${title_margin_left}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
        historyMaker.push(object_history)
      }
      if(title_margin_right!==""){
        searcher.children[0]["margin_right"] = title_margin_right
       
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title margin right to ${title_margin_right}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
        historyMaker.push(object_history)
      }

      if(alignmentTitleAlign!==""){
        searcher.children[0]["text_align"] = alignmentTitleAlign
        
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing  title align to ${alignmentTitleAlign}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `alignmentTitleAlign:,!:$*ù${alignmentTitleAlign}`
        historyMaker.push(object_history)
      }

      if(priority!==""){
       
        searcher.children[0]["priority"] = priority
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","title","content"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title Priority to ${priority}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `priority:,!:$*ù${priority}`
      
        historyMaker.push(object_history)
      }
      }
if(type==="description"){
    if(description_text!==""){
      searcher.children[1]["text"] = description_text
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","content"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description text to ${description_text}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `description_text:,!:$*ù${description_text}`
      historyMaker.push(object_history)
    }
  
    if(description_text_color!==""){
      searcher.children[1]["color"] = description_text_color
     
    let object_history = {}
    object_history.iteration_tap = "Content/Content Card"
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description text color to ${description_text_color}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `description_text_color:,!:$*ù${description_text_color}`
      historyMaker.push(object_history)
    }

    if(description_hover_color!==""){
      searcher.children[1]["hover_color"] = description_hover_color
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description text hover color to ${description_hover_color}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `description_hover_color:,!:$*ù${description_hover_color}`
      historyMaker.push(object_history)
    }

    if(title_font_family!==""){
      searcher.children[1]["font_family"] = title_font_family
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description text font family to ${title_font_family}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_font_family:,!:$*ù${title_font_family}`
      historyMaker.push(object_history)
    }

    if(title_font_size!==""){
      
      searcher.children[1]["font_size"] = title_font_size
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description text font size to ${title_font_size}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_font_size:,!:$*ù${title_font_size}`
      historyMaker.push(object_history)
    }

    if(title_padding_top!==""){
      searcher.children[1]["padding_top"] = title_padding_top
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description padding top to ${title_padding_top}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_top:,!:$*ù${title_padding_top}`
      historyMaker.push(object_history)
    }

    if(title_padding_bottom!==""){
      searcher.children[1]["padding_bottom"] = title_padding_bottom
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description padding bottom to ${title_padding_bottom}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_bottom:,!:$*ù${title_padding_bottom}`
      historyMaker.push(object_history)
    }

    if(title_padding_left!==""){
      searcher.children[1]["padding_left"] = title_padding_left
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description padding left to ${title_padding_left}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_left:,!:$*ù${title_padding_left}`
      historyMaker.push(object_history)
    }

    if(title_padding_right!==""){
      searcher.children[1]["padding_right"] = title_padding_right
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description padding right to ${title_padding_right}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_right:,!:$*ù${title_padding_right}`
      historyMaker.push(object_history)
    }

    if(title_margin_top!==""){
      searcher.children[1]["margin_top"] = title_margin_top
    
      let object_history = {}
      object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description margin top to ${title_margin_top}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
      historyMaker.push(object_history)
    }

    if(title_margin_bottom!==""){
      searcher.children[1]["margin_bottom"] = title_margin_bottom
    
      let object_history = {}
      object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description margin bottom to ${title_margin_bottom}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
      historyMaker.push(object_history)
    }

    if(title_margin_left!==""){
      searcher.children[1]["margin_left"] = title_margin_left
    
      let object_history = {}
       object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description margin left to ${title_margin_left}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
      historyMaker.push(object_history)
    }

    if(title_margin_right!==""){
      searcher.children[1]["margin_right"] = title_margin_right
    
      let object_history = {}
      object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description margin right to ${title_margin_right}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
      historyMaker.push(object_history)
    }

    if(alignmentTitleAlign!==""){
      searcher.children[1]["text_align"] = alignmentTitleAlign
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","description","style"]
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "description"
      object_history.iteration_description = `changing Description margin right to ${alignmentTitleAlign}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `alignmentTitleAlign:,!:$*ù${alignmentTitleAlign}`
      historyMaker.push(object_history)
    }

}

  if(type==="sociallinks"){
   

    if(iteration==="adder"){
      if(url_social_media_adder!=="" && selectSocialMedia!==""){
       
    let object_history = {}
        searcher.children[3].social_media_data.push({
          name:selectSocialMedia,
          url:url_social_media_adder
        })
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Content","Content Card","Social links"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "sociallinks"
        object_history.iteration_sub_type = "adder"
        object_history.iteration_description = `changing social media link add  to ${url_social_media_adder} platform ${selectSocialMedia} `
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeData" 
        object_history.parameter = `${type},${id},${text},${index},${iteration}`
        object_history.variable_change = `url_social_media_adder:,!:$*ù${url_social_media_adder},selectSocialMedia:,!:$*ù${selectSocialMedia}`  
        historyMaker.push(object_history)
      }
      else if(url_social_media_adder===""){
        return toast.error("Social media url  field is empty")
      }
      else{
        return toast.error("Social media name  field is empty")
      }
  

     

    }
    if(iteration==="editSocialMedia"){
    
      let object_history = {}
      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_tap = ["Content","Content Card","Social links"]
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "sociallinks"
      object_history.iteration_sub_type = "editSocialMedia"
      object_history.iteration_description = `changing social media link edit  to ${url_social_media_adder} platform ${selectSocialMedia} `
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `url_social_media_adder:,!:$*ù${url_social_media_adder},selectSocialMedia:,!:$*ù${selectSocialMedia}`    
      historyMaker.push(object_history)
      //let's create a global variable by chaging 
      searcher.children[3].social_media_data[indexEdit] = {
        name:selectSocialMediaEdit === "" ? searcher.children[3].social_media_data[indexEdit].name: selectSocialMediaEdit,
        url:url_edit === "" ?searcher.children[3].social_media_data[indexEdit].url  : url_edit,
        font_size_icon:fontsizeIcon!=="" ? fontsizeIcon : dataForm.font_size_icon,
        color_icon : title_color!=="" ?  title_color:  dataForm.color_icon,
        color_icon_hover:title_hover_color!=="" ? title_hover_color:   dataForm.color_icon_hover,
        backgroundcolorContainer:backgroundcolorContainer!=="" ? backgroundcolorContainer:  dataForm.backgroundcolorContainer ,
        background_color_hover:background_color_hover!=="" ? background_color_hover: dataForm.background_color_hover ,
      //border radius changing
        borderRadiusTopLeft:Image_border_top_left_radius!=="" ?Image_border_top_left_radius : dataForm.borderRadiusTopLeft,
        borderRadiusTopRight: Image_border_top_right_radius !=="" ?Image_border_top_right_radius : dataForm.borderRadiusTopRight,
        
        borderRadiusBottomLeft:Image_border_bottom_left_radius!=="" ? Image_border_bottom_left_radius : dataForm.borderRadiusBottomLeft,
        borderRadiusBottomRight: Image_border_bottom_right_radius!=="" ? Image_border_bottom_right_radius : dataForm.borderRadiusBottomRight,
        widthIcon:Image_width!=="" ? Image_width : dataForm.widthIcon,
        heightIcon:Image_height!=="" ? Image_height : dataForm.heightIcon
        


      }




    }



  }
  
  if(type==="image"){
   
    if(logo_content !==""){
      searcher.children[2]["text"] = logo_content
     
    let object_history = {}
      object_history.iteration_id  = uuidv4()
      object_history.iteration_tap = ["Content","Content Card","Image","content"]
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image to ${logo_content}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `logo_content:,!:$*ù${logo_content}`   
      historyMaker.push(object_history)
    }
    if(Image_border_top_left_radius!==""){
      searcher.children[2]["border_top_left_radius"] = Image_border_top_left_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image border top left radius to ${Image_border_top_left_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_top_left_radius:,!:$*ù${Image_border_top_left_radius}`     
      historyMaker.push(object_history)
    }
    if(Image_border_top_right_radius!==""){
      searcher.children[2]["border_top_right_radius"] = Image_border_top_right_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image border top right radius to ${Image_border_top_right_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_top_right_radius:,!:$*ù${Image_border_top_right_radius}`     
      historyMaker.push(object_history)
    }
    if(Image_border_bottom_right_radius!==""){
      searcher.children[2]["border_bottom_right_radius"] = Image_border_bottom_right_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image border bottom right radius to ${Image_border_bottom_right_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_bottom_right_radius:,!:$*ù${Image_border_bottom_right_radius}`     
      historyMaker.push(object_history)
    }
    if(Image_border_bottom_left_radius!==""){
      searcher.children[2]["border_bottom_left_radius"] = Image_border_bottom_left_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image border bottom left radius to ${Image_border_bottom_left_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_bottom_left_radius:,!:$*ù${Image_border_bottom_left_radius}`     
      historyMaker.push(object_history)
    }
    if(Image_width!==""){
      searcher.children[2]["width"] = Image_width
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image width to ${Image_width}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_width:,!:$*ù${Image_width}`     
      historyMaker.push(object_history)
    }
    if(Image_height!==""){
      searcher.children[2]["height"] = Image_height
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image height to ${Image_height}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_height:,!:$*ù${Image_height}`     
      historyMaker.push(object_history)
    }
    if(title_margin_top!==""){
      searcher.children[2]["margin_top"] = title_margin_top
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image margin top to ${Image_height}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`     
      historyMaker.push(object_history)
    }

    if(title_margin_bottom!==""){
      searcher.children[2]["margin_bottom"] = title_margin_bottom
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image margin bottom to ${title_margin_bottom}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`     
      historyMaker.push(object_history)
    }
    if(title_margin_left!==""){
      searcher.children[2]["margin_left"] = title_margin_left
    
      let object_history = {}
      object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image margin left to ${title_margin_left}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`  
      historyMaker.push(object_history)
    }
    if(title_margin_right!==""){
      searcher.children[2]["margin_right"] = title_margin_right
    
      let object_history = {}
      object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image margin right to ${title_margin_right}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`  
      historyMaker.push(object_history)
    }

    if(ImageBackground!==""){
      searcher.children[2]["background_img"] = ImageBackground
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image background to ${ImageBackground}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `ImageBackground:,!:$*ù${ImageBackground}`  
      historyMaker.push(object_history)
    }
    if(ImageBackgroundWidth!==""){
      
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      searcher.children[2]["widthBackground"] = ImageBackgroundWidth
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image background width to ${ImageBackgroundWidth}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `ImageBackgroundWidth:,!:$*ù${ImageBackgroundWidth}`  
      historyMaker.push(object_history)
    }
    if(ImageBackgroundHeight!==""){
      searcher.children[2]["heightBackground"] = ImageBackgroundHeight
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Image","style"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "image"
      object_history.iteration_description = `changing image background width to ${ImageBackgroundHeight}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `ImageBackgroundHeight:,!:$*ù${ImageBackgroundHeight}`  
      historyMaker.push(object_history)
    }

  }
  
  if(type==="card"){
  
     if(title_color!==""){
    
      searcher.children[4]["color"] = title_color
    
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card color to ${title_color}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_color:,!:$*ù${title_color}`
      historyMaker.push(object_history)
    }
    if(title_hover_color!==""){
      searcher.children[4]["hover_color"] = title_hover_color
     
  let object_history = {}
      object_history.iteration_id  = uuidv4()
      object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card hover color to ${title_hover_color}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_hover_color:,!:$*ù${title_hover_color}`
      historyMaker.push(object_history)
    } 
 
    if(title_padding_top!==""){
      searcher.children[4]["padding_top"] = title_padding_top
    
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card padding top to ${title_padding_top}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_top:,!:$*ù${title_padding_top}`
      historyMaker.push(object_history)
    }
    if(title_padding_bottom!==""){
      searcher.children[4]["padding_bottom"] = title_padding_bottom
     
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card padding bottom to ${title_padding_bottom}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_bottom:,!:$*ù${title_padding_bottom}`
      historyMaker.push(object_history)
    }
    if(title_padding_left!==""){
      searcher.children[0]["padding_left"] = title_padding_left
    
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card padding left to ${title_padding_left}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_left:,!:$*ù${title_padding_left}`
      historyMaker.push(object_history)
    }
    if(title_padding_right!==""){
      searcher.children[4]["padding_right"] = title_padding_right
      
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "title"
      object_history.iteration_description = `changing card padding right to ${title_padding_right}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_padding_right:,!:$*ù${title_padding_right}`
      historyMaker.push(object_history)
    }
    if(title_margin_top!==""){
      searcher.children[4]["margin_top"] = title_margin_top
     
      let object_history = {}
      object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card margin top to ${title_margin_top}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
      historyMaker.push(object_history)
    }
    if(title_margin_bottom!==""){
      searcher.children[4]["margin_bottom"] = title_margin_bottom 
     
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id      
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card margin bottom to ${title_margin_bottom}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
      historyMaker.push(object_history)
    }
    if(title_margin_left!==""){
      searcher.children[4]["margin_left"] = title_margin_left
     
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card margin left to ${title_margin_left}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
      historyMaker.push(object_history)
    }
    if(title_margin_right!==""){
      searcher.children[4]["margin_right"] = title_margin_right
     
  let object_history = {}
  object_history.iteration_tap = ["Content","Content Card","card"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card margin right to ${title_margin_right}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
      historyMaker.push(object_history)
    }
    if(Image_border_top_left_radius!==""){
      searcher.children[4]["border_top_left_radius"] = Image_border_top_left_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border top left radius to ${Image_border_top_left_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_top_left_radius:,!:$*ù${Image_border_top_left_radius}`     
      historyMaker.push(object_history)
    }
    if(Image_border_top_right_radius!==""){
      searcher.children[4]["border_top_right_radius"] = Image_border_top_right_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border top right radius to ${Image_border_top_right_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_top_right_radius:,!:$*ù${Image_border_top_right_radius}`     
      historyMaker.push(object_history)
    }
    if(Image_border_bottom_right_radius!==""){
      searcher.children[4]["border_bottom_right_radius"] = Image_border_bottom_right_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border bottom right radius to ${Image_border_bottom_right_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_bottom_right_radius:,!:$*ù${Image_border_bottom_right_radius}`     
      historyMaker.push(object_history)
    }
    if(Image_border_bottom_left_radius!==""){
      searcher.children[4]["border_bottom_left_radius"] = Image_border_bottom_left_radius
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border bottom left radius to ${Image_border_bottom_left_radius}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `Image_border_bottom_left_radius:,!:$*ù${Image_border_bottom_left_radius}`     
      historyMaker.push(object_history)
    }

    if(border_card_top!==""){
      searcher.children[4]["border_card_top"] = border_card_top
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border top  to ${border_card_top}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `border_card_top:,!:$*ù${border_card_top}`     
      historyMaker.push(object_history)
    }
    if(border_card_bottom!==""){
      searcher.children[4]["border_card_bottom"] = border_card_bottom
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border bottom  to ${border_card_bottom}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `border_card_bottom:,!:$*ù${border_card_bottom}`     
      historyMaker.push(object_history)
    }
    if(border_card_left!==""){
      searcher.children[4]["border_card_left"] = border_card_left
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border left  to ${border_card_left}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `border_card_left:,!:$*ù${border_card_left}`     
      historyMaker.push(object_history)
    }
    if(border_card_right!==""){
      searcher.children[4]["border_card_right"] = border_card_right
     
    let object_history = {}
    object_history.iteration_tap = ["Content","Content Card","Card"]

      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_type = "card"
      object_history.iteration_description = `changing card border right to ${border_card_right}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `${type},${id},${text},${index},${iteration}`
      object_history.variable_change = `border_card_right:,!:$*ù${border_card_right}`     
      historyMaker.push(object_history)
    }

    

    }
all[index] = searcher

let data = characters.filter(el => el.status!=="New Order" 
&& el.id === section_id

)[0]

  let team_html = data.team_html
  
  let hasSlider = data.hasSlider

  let {ch1,global_html,ch2}= updatePerSection(hasSlider,all,team_html,data,searcher,characters,section_id)

  let final_html = ch1 + global_html + ch2 
  let data_late = characters.filter(el => el.id !== section_id) 
   
  if(data.data_team[0].children[0].lang==="ar"){
    final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
    }else{
      final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
  
    }
  data.section_data = final_html   



   updates.push(data)  
  
      
  let final = [...data_late,...updates]
   
  setTasks(final)



   setOrders(historyMaker) 
setHistory(historyMaker)
setApplied(historyMaker.length -1)
    
      setItems(all)
      setTitleText("")
      setTitleColor("")
      setTitleHoverColor("")
      setDescriptionText("")
      setDescriptionTextColor("")
      setDescriptionHoverColor("")
      setSelectSocialMedia("")
      setUrlSocialMediaAdder("")
      setUrlEdit("")
      setSelectSocialMediaEdit("")
      setLogoContent("")
      setTitleFontFamily("")
      setTitleFontSize("")
      setTitlePaddingTop("")
      setTitlePaddingLeft("")
      setTitlePaddingRight("")
      setTitleMarginTop("")
      setTitleMaginBottom("")
      setTitleMaginLeft("")
      setTitleMarginRight("")
      setAlignmentTitleAlign("")
      setImageBorderTopLeftRadius("")
      setImageBoderTopRightRadius("")
      setImageBorderBottomRightRadius("")
      setImageBorderBottomLeftRadius("")
      setImagewidth("")
      setImageHeight("")
      setImageBackground("")
      setImageBackgroundWidth("")
      setImageBackgroundHeight("")
      setFontSizeContainerIcon("")
      setFontSizeIcon("")
      setBackgroundColorIcon("")
      setBackgroundColorHover("")
      setPriority("")
      setBorderCardTop("")
      setBorderCardBottom("")
      setBorderCardLeft("")
      setBorderCardRight("")
      toast.success("successfully updated")
  }
 
//hex to rgba 
const hexToRGB = (hex) =>{

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, .6)`;
  
}

  let [checkMobileDisplay,setCheckMobileDisplay] = useState(true)
  let [checkDesktopDisplay,setCheckDesktopDisplay] = useState(true)
  let [checkTabletDisplay,setCheckTabletDisplay] = useState(true)


  let updateResponsive = () =>{
    let object_history = {}
    let updates = []
    let historyMaker = history
    let data = characters.filter(el => el.status!=="New Order" 
    && el.id === section_id
    )[0]
     
      if( data.show_desktop !== checkDesktopDisplay){
        data.show_desktop = checkDesktopDisplay
       
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Advanced","Responsive"]
        object_history.iteration_section = section_id
        object_history.iteration_title =  checkDesktopDisplay ? "show in Desktop" : "unshow in Desktop" 
        object_history.iteration_type = "background"
        object_history.iteration_description = checkDesktopDisplay ? "show in Desktop" : "unshow in Desktop"
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateResponsive" 
        object_history.parameter = ``
        object_history.variable_change = `show_desktop:,!:$*ù${checkDesktopDisplay}`
        historyMaker.push(object_history)
    
      }
      if( data.show_tablet !== checkTabletDisplay){
        data.show_tablet = checkTabletDisplay
       
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Advanced","Responsive"]
        object_history.iteration_section = section_id
        object_history.iteration_title =  checkTabletDisplay ? "show in Tablet" : "unshow in Tablet" 
        object_history.iteration_type = "background"
        object_history.iteration_description = checkTabletDisplay ? "show in Tablet" : "unshow in Tablet"
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateResponsive" 
        object_history.parameter = ``
        object_history.variable_change = `show_tablet:,!:$*ù${checkTabletDisplay}`
        historyMaker.push(object_history)
    
      }
if(data.show_mobile !== checkMobileDisplay){
  object_history.iteration_id  = uuidv4()
  object_history.iteration_tap = ["Advanced","Responsive"]
  object_history.iteration_section = section_id
  object_history.iteration_title =  checkTabletDisplay ? "show in Mobile" : "unshow in Mobile" 
  object_history.iteration_type = "background"
  object_history.iteration_description = checkTabletDisplay ? "show in Mobile" : "unshow in Mobile"
  object_history.iteration_date = new Date().toISOString()
  object_history.function_name = "updateResponsive" 
  object_history.parameter = ``
  object_history.variable_change = `show_mobile:,!:$*ù${checkMobileDisplay}`
  historyMaker.push(object_history)

}
        
      
      let data_late = tasks.filter(el => el.id !== section_id) 
      let {data_global} =  updateResponsiveStyle(data)
     
      updates.push(data_global)  
      // $color_arrow_left
      let final = [...data_late,...updates]
      setHistory(historyMaker)
      setOrders(historyMaker) 
      setApplied(historyMaker.length -1)
      updateCharacters(final)
      
  }



  let updateGlobalStyle = (type) =>{
    let historyMaker = history


    let all = itemsData
    let searcher = characters.filter(el => el.id === section_id)[0]
      let updates = []
      let data = characters.filter(el => el.status!=="New Order" 
      && el.id === section_id
      
      )[0]
     

      if(type==="title"){
       if(title_color!==""){
        let object_history = {} 
        searcher.global_style[0]["color"] = title_color
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text color  to ${title_color}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_color:,!:$*ù${title_color}`
        historyMaker.push(object_history)
      }
      if(title_hover_color!==""){
        searcher.global_style[0]["hover_color"] = title_hover_color
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text hover color to ${title_hover_color}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_hover_color:,!:$*ù${title_hover_color}`
        historyMaker.push(object_history)
      }
       
      if(title_font_family!==""){
        searcher.global_style[0]["font_family"] = title_font_family
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text font family to ${title_font_family}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_font_family:,!:$*ù${title_font_family}`
        historyMaker.push(object_history)
      }
      if(title_font_size!==""){
        searcher.global_style[0]["font_size"] = title_font_size
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text font size to ${title_font_size}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_font_size:,!:$*ù${title_font_size}`
        historyMaker.push(object_history)
      }
      if(title_padding_top!==""){
        searcher.global_style[0]["padding_top"] = title_padding_top
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text padding top to ${title_padding_top}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_top:,!:$*ù${title_padding_top}`
        historyMaker.push(object_history)
      }
      if(title_padding_bottom!==""){
        searcher.global_style[0]["padding_bottom"] = title_padding_bottom
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text padding bottom to ${title_padding_bottom}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_bottom:,!:$*ù${title_padding_bottom}`
        historyMaker.push(object_history)
      }
      if(title_padding_left!==""){
        searcher.global_style[0]["padding_left"] = title_padding_left
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text padding left to ${title_padding_left}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_left:,!:$*ù${title_padding_left}`
        historyMaker.push(object_history)
      }
      if(title_padding_right!==""){
        searcher.global_style[0]["padding_right"] = title_padding_right
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text padding right to ${title_padding_right}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_right:,!:$*ù${title_padding_right}`
        historyMaker.push(object_history)
      }
      if(title_margin_top!==""){
        searcher.global_style[0]["margin_top"] = title_margin_top
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text margin top to ${title_margin_top}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
        historyMaker.push(object_history)
      }

      if(title_margin_bottom!==""){
        searcher.global_style[0]["margin_bottom"] = title_margin_bottom
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text margin bottom to ${title_margin_bottom}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
        historyMaker.push(object_history)
      }
      if(title_margin_left!==""){
        searcher.global_style[0]["margin_left"] = title_margin_left
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text margin left to ${title_margin_left}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
        historyMaker.push(object_history)
      }
      if(title_margin_right!==""){
        searcher.global_style[0]["margin_right"] = title_margin_right
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text margin right to ${title_margin_right}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
        historyMaker.push(object_history)
      }
      if(alignmentTitleAlign!==""){
        searcher.global_style[0]["text_align"] = alignmentTitleAlign
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Title Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text align to ${alignmentTitleAlign}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `alignmentTitleAlign:,!:$*ù${alignmentTitleAlign}`
        historyMaker.push(object_history)
      }
      }
     
      if(type==="description"){
        if(description_text_color!==""){
          searcher.global_style[1]["color"] = description_text_color
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]
          object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text color  to ${description_text_color}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `description_text_color:,!:$*ù${description_text_color}`
          historyMaker.push(object_history)
        }
    
        if(description_hover_color!==""){
          searcher.global_style[1]["hover_color"] = description_hover_color
          let object_history = {}
          object_history.iteration_tap = ["Global Style","Description Style"]
          object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text hover color  to ${description_hover_color}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `description_hover_color:,!:$*ù${description_hover_color}`
          historyMaker.push(object_history)
        }
    
        if(title_font_family!==""){
          searcher.global_style[1]["font_family"] = title_font_family
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

        object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text font family  to ${title_font_family}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_font_family:,!:$*ù${title_font_family}`
          historyMaker.push(object_history)
        }
        if(title_font_size!==""){
          searcher.global_style[1]["font_size"] = title_font_size
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]
          object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text font size  to ${title_font_size}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_font_size:,!:$*ù${title_font_size}`
          historyMaker.push(object_history)
        }
        if(title_padding_top!==""){
          searcher.global_style[1]["padding_top"] = title_padding_top
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

        object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text padding top to ${title_padding_top}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_padding_top:,!:$*ù${title_padding_top}` 
          historyMaker.push(object_history)
        }
        if(title_padding_bottom!==""){
          searcher.global_style[1]["padding_bottom"] = title_padding_bottom
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

          object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text padding bottom to ${title_padding_bottom}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_padding_bottom:,!:$*ù${title_padding_bottom}`
          historyMaker.push(object_history)
        }
        if(title_padding_left!==""){
          searcher.global_style[1]["padding_left"] = title_padding_left
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

          object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text padding left to ${title_padding_left}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_padding_left:,!:$*ù${title_padding_left}`
          historyMaker.push(object_history)
        }
        if(title_padding_right!==""){
          searcher.global_style[1]["padding_right"] = title_padding_right
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

          object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text padding right to ${title_padding_right}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_padding_right:,!:$*ù${title_padding_right}`
          historyMaker.push(object_history)
        }
        if(title_margin_top!==""){
          searcher.global_style[1]["margin_top"] = title_margin_top
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

          object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text margin top to ${title_margin_top}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
          historyMaker.push(object_history)
        }
    
        if(title_margin_bottom!==""){
          searcher.global_style[1]["margin_bottom"] = title_margin_bottom
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

        object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text margin bottom to ${title_margin_bottom}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
          historyMaker.push(object_history)
        }
        if(title_margin_left!==""){
          searcher.global_style[1]["margin_left"] = title_margin_left
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

        object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text margin left to ${title_margin_left}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
          historyMaker.push(object_history)
        }
        if(title_margin_right!==""){
          searcher.global_style[1]["margin_right"] = title_margin_right
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

        object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text margin right to ${title_margin_right}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
          historyMaker.push(object_history)
        }
        if(alignmentTitleAlign!==""){
          searcher.global_style[1]["text_align"] = alignmentTitleAlign
          let object_history = {}
          object_history.iteration_id  = uuidv4()
          object_history.iteration_tap = ["Global Style","Description Style"]

        object_history.iteration_section = section_id
          object_history.iteration_title = "Global Update"
          object_history.iteration_type = "description"
          object_history.iteration_description = `changing description text align to ${alignmentTitleAlign}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `alignmentTitleAlign:,!:$*ù${alignmentTitleAlign}`
          historyMaker.push(object_history)
        }
    
    }

    if(type==="image"){
    
      if(Image_border_top_left_radius!==""){
        searcher.global_style[2]["border_top_left_radius"] = Image_border_top_left_radius
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
          object_history.iteration_type = "image"
          object_history.iteration_description = `changing image top left radius to ${Image_border_top_left_radius}`
          object_history.iteration_date = new Date().toISOString()
          object_history.function_name = "updateGlobalStyle" 
          object_history.parameter = `${type}`
          object_history.variable_change = `Image_border_top_left_radius:,!:$*ù${Image_border_top_left_radius}`
          historyMaker.push(object_history)
      }
      if(Image_border_top_right_radius!==""){
        searcher.global_style[2]["border_top_right_radius"] = Image_border_top_right_radius
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image top right radius to ${Image_border_top_right_radius}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `Image_border_top_right_radius:,!:$*ù${Image_border_top_right_radius}`
        historyMaker.push(object_history)
      }
      if(Image_border_bottom_right_radius!==""){
        searcher.global_style[2]["border_bottom_right_radius"] = Image_border_bottom_right_radius
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image bottom right radius to ${Image_border_bottom_right_radius}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `Image_border_bottom_right_radius:,!:$*ù${Image_border_bottom_right_radius}`
        historyMaker.push(object_history)
      }
      if(Image_border_bottom_left_radius!==""){
        searcher.global_style[2]["border_bottom_left_radius"] = Image_border_bottom_left_radius
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image bottom left radius to ${Image_border_bottom_left_radius}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `Image_border_bottom_left_radius:,!:$*ù${Image_border_bottom_left_radius}`
        historyMaker.push(object_history)
      }
      if(Image_width!==""){
        searcher.global_style[2]["width"] = Image_width
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image width to ${Image_width}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `Image_width:,!:$*ù${Image_width}`
        historyMaker.push(object_history)
      }
      if(Image_height!==""){
        searcher.global_style[2]["height"] = Image_height
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image height to ${Image_height}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `Image_height:,!:$*ù${Image_height}`
        historyMaker.push(object_history)
      }
      if(title_margin_top!==""){
        searcher.global_style[2]["margin_top"] = title_margin_top
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image margin top to ${title_margin_top}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
        historyMaker.push(object_history)
      }
  
      if(title_margin_bottom!==""){
        searcher.global_style[2]["margin_bottom"] = title_margin_bottom
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image margin bottom  to ${title_margin_bottom}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
        historyMaker.push(object_history)
      }
      if(title_margin_left!==""){
        searcher.global_style[2]["margin_left"] = title_margin_left
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image margin left to ${title_margin_left}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
        historyMaker.push(object_history)
      }
      if(title_margin_right!==""){
        searcher.global_style[2]["margin_right"] = title_margin_right
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image margin right to ${title_margin_right}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_right:,!:$*ù${title_margin_right}`
        historyMaker.push(object_history)
      }
  
      if(ImageBackground!==""){
        searcher.global_style[2]["background_img"] = ImageBackground
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image background to ${ImageBackground}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `ImageBackground:,!:$*ù${ImageBackground}`
        historyMaker.push(object_history)
      }
      if(ImageBackgroundWidth!==""){
        searcher.global_style[2]["widthBackground"] = ImageBackgroundWidth
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image background width  to ${ImageBackgroundWidth}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `ImageBackgroundWidth:,!:$*ù${ImageBackgroundWidth}`
        historyMaker.push(object_history)
      }
      if(ImageBackgroundHeight!==""){
        searcher.global_style[2]["heightBackground"] = ImageBackgroundHeight
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Image Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "image"
        object_history.iteration_description = `changing image background height  to ${ImageBackgroundHeight}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `ImageBackgroundHeight:,!:$*ù${ImageBackgroundHeight}`
        historyMaker.push(object_history)
      }
  
    }
    if(type==="container"){
      if(title_margin_top!==""){
        searcher.global_style[3]["container_margin_top"] = title_margin_top
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Container Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "container"
        object_history.iteration_description = `changing container margin top  to ${title_margin_top}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_top:,!:$*ù${title_margin_top}`
        historyMaker.push(object_history)
      }
  
      if(title_margin_bottom!==""){
        searcher.global_style[3]["container_margin_bottom"] = title_margin_bottom
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Container Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "container"
        object_history.iteration_description = `changing container margin bottom  to ${title_margin_bottom}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_bottom:,!:$*ù${title_margin_bottom}`
        historyMaker.push(object_history)
      }
      if(title_margin_left!==""){
        searcher.global_style[3]["container_margin_left"] = title_margin_left
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Container Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "container"
        object_history.iteration_description = `changing container margin left  to ${title_margin_left}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
        historyMaker.push(object_history)
      }
      if(title_margin_right!==""){
        searcher.global_style[3]["container_margin_right"] = title_margin_right
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Container Style"]

        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "container"
        object_history.iteration_description = `changing container margin left  to ${title_margin_left}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_margin_left:,!:$*ù${title_margin_left}`
        historyMaker.push(object_history)
      }
    }

    if(type==="background"){
      if(title_color!==""){
        searcher.global_style[4]["backgroundContainercolor"] =  hexToRGB(title_color)     
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Background Style"]
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "background"
        object_history.iteration_description = `changing background color  to ${ hexToRGB(title_color) }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_color:,!:$*ù${ hexToRGB(title_color) }`
        historyMaker.push(object_history)
      }
      if(logo_content !==""){
        searcher.global_style[4]["backgroundContainerImage"] = logo_content
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Background Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "background"
        object_history.iteration_description = `changing logo  to ${ logo_content }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `logo_content:,!:$*ù${ logo_content }`
        historyMaker.push(object_history)
      }


    }
   
    if(type ==="arrowLeft"){ 
      if(description_text_color!==""){
        searcher.global_style[5]["color"] = description_text_color
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Left Style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowLeft"
        object_history.iteration_description = `changing arrow left color  to ${ description_text_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `description_text_color:,!:$*ù${ description_text_color }`
        historyMaker.push(object_history)
      }
      if(description_hover_color!==""){
        searcher.global_style[5]["hover_color"] = description_hover_color
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Arrow Left Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowLeft"
        object_history.iteration_description = `changing arrow left hover color  to ${ description_hover_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `description_hover_color:,!:$*ù${ description_hover_color }`
        historyMaker.push(object_history)
      
      }
      if(title_color!==""){
      
        searcher.global_style[5]["background_color"] = title_color
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Arrow Left Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowLeft"
        object_history.iteration_description = `changing arrow left background color  to ${ title_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_color:,!:$*ù${ title_color }`
        historyMaker.push(object_history)
      }
      if(title_hover_color!==""){
        searcher.global_style[5]["background_hover_color"] = title_hover_color
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Arrow Left Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowLeft"
        object_history.iteration_description = `changing arrow left background hover color  to ${ title_hover_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_hover_color:,!:$*ù${ title_hover_color }`
        historyMaker.push(object_history)
      }
      if(title_font_size!==""){
        searcher.global_style[5]["font_size"] = title_font_size
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Arrow Left Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowLeft"
        object_history.iteration_description = `changing arrow left font size  to ${ title_font_size }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_font_size:,!:$*ù${ title_font_size }`
        historyMaker.push(object_history)
      }
      if(title_padding_top!==""){
        searcher.global_style[5]["left"] = title_padding_top
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Arrow Left Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowLeft"
        object_history.iteration_description = `changing arrow left position left  to ${ title_padding_top }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_top:,!:$*ù${ title_padding_top }`
        historyMaker.push(object_history)
      }
      if(title_padding_bottom!==""){
        searcher.global_style[5]["top"] = title_padding_bottom
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Global Style","Arrow Left Style"]

        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowLeft"
        object_history.iteration_description = `changing arrow left position top  to ${ title_padding_bottom }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_bottom:,!:$*ù${ title_padding_bottom }`
        historyMaker.push(object_history)
      }
    }

    if(type ==="arrowRight"){ 
      if(description_text_color!==""){
        searcher.global_style[6]["color"] = description_text_color
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Right Style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowRight"
        object_history.iteration_description = `changing arrow right color  to ${ description_text_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `description_text_color:,!:$*ù${ description_text_color }`
        historyMaker.push(object_history)
      }
      if(description_hover_color!==""){
        searcher.global_style[6]["hover_color"] = description_hover_color
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Right Style"]
        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowRight"
        object_history.iteration_description = `changing arrow right hover color  to ${ description_hover_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `description_hover_color:,!:$*ù${ description_hover_color }`
        historyMaker.push(object_history)
      }
      if(title_color!==""){
      
        searcher.global_style[6]["background_color"] = title_color
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Right Style"]

        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowRight"
        object_history.iteration_description = `changing arrow right background  color  to ${ title_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_color:,!:$*ù${ title_color }`
        historyMaker.push(object_history)
      }
      if(title_hover_color!==""){
        searcher.global_style[6]["background_hover_color"] = title_hover_color
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Right Style"]

        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_title = "Global Update"
        object_history.iteration_type = "arrowRight"
        object_history.iteration_description = `changing arrow right background  hover color  to ${ title_hover_color }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_hover_color:,!:$*ù${ title_hover_color }`
        historyMaker.push(object_history)
      }
      if(title_font_size!==""){
        searcher.global_style[6]["font_size"] = title_font_size
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Right Style"]

        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_type = "arrowRight"
        object_history.iteration_description = `changing arrow right font size  to ${ title_font_size }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_font_size:,!:$*ù${ title_font_size }`
        historyMaker.push(object_history)
      }
      if(title_padding_top!==""){
        searcher.global_style[6]["left"] = title_padding_top
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Right Style"]

        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_type = "arrowRight"
        object_history.iteration_description = `changing arrow right position left  to ${ title_padding_top }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_top:,!:$*ù${ title_padding_top }`
        historyMaker.push(object_history)
      }
      if(title_padding_bottom!==""){
  
        searcher.global_style[6]["top"] = title_padding_bottom
        let object_history = {}
        object_history.iteration_tap = ["Global Style","Arrow Right Style"]

        object_history.iteration_id  = uuidv4()
        object_history.iteration_section = section_id
        object_history.iteration_type = "arrowRight"
        object_history.iteration_description = `changing arrow right position top to ${ title_padding_bottom }`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "updateGlobalStyle" 
        object_history.parameter = `${type}`
        object_history.variable_change = `title_padding_bottom:,!:$*ù${ title_padding_bottom }`
        historyMaker.push(object_history)
      }
    }

   let {ch1,global_html,ch2} = updateGlobalStyleJS(searcher,data,all)

    let final_html =ch1 + global_html + ch2 
      let data_late = characters.filter(el => el.id !== section_id) 
      if(data.data_team[0].children[0].lang==="ar"){
        final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
        }else{
          final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
      
        }
      
      data.section_data = final_html  
  
       if(hasSlider){
        data.section_css = data.section_css
        .replace("$color_arrow_left",searcher.global_style[5]["color"])
        .replace("$color_hover_arrow_left",searcher.global_style[5]["hover_color"])
        .replace("$background_color_arrow_left", searcher.global_style[5]["background_color"])
        .replace("$background_hover_color_arrow_left ",  searcher.global_style[5]["background_hover_color"])
        .replace("$font_size_arrow_left ",   searcher.global_style[5]["font_size"] )
        .replace("$left_position_arrow_left ",   searcher.global_style[5]["left"] )
        .replace("$top_position_arrow_left ",   searcher.global_style[5]["top"] )
        //arrow Right 
        .replace(" $color_arrow_right",searcher.global_style[6]["color"])
        .replace("$color_hover_arrow_right",searcher.global_style[6]["hover_color"])
        .replace("$background_color_arrow_right", searcher.global_style[6]["background_color"])
        .replace("$background_hover_color_arrow_right ",  searcher.global_style[6]["background_hover_color"])
        .replace("$font_size_arrow_right",   searcher.global_style[6]["font_size"] )
        .replace("$right_position_arrow_right",   searcher.global_style[6]["left"] )
        .replace("$top_position_arrow_right",   searcher.global_style[6]["top"] )
       
        
       
      }
      
       updates.push(data)  
      // $color_arrow_left
          

      let final = [...data_late,...updates]
         
  
  
setHistory(historyMaker)
setOrders(historyMaker) 
setApplied(historyMaker.length -1)
      setTasks(final)
          setItems(all)
          setTitleText("")
          setTitleColor("")
          setTitleHoverColor("")
          setDescriptionText("")
          setDescriptionTextColor("")
          setDescriptionHoverColor("")
          setSelectSocialMedia("")
          setUrlSocialMediaAdder("")
          setUrlEdit("")
          setSelectSocialMediaEdit("")
          setLogoContent("")
          setTitleFontFamily("")
          setTitleFontSize("")
          setTitlePaddingTop("")
          setTitlePaddingLeft("")
          setTitlePaddingRight("")
          setTitleMarginTop("")
          setTitleMaginBottom("")
          setTitleMaginLeft("")
          setTitleMarginRight("")
          setAlignmentTitleAlign("")
          setImageBorderTopLeftRadius("")
          setImageBoderTopRightRadius("")
          setImageBorderBottomRightRadius("")
          setImageBorderBottomLeftRadius("")
          setImagewidth("")
          setImageHeight("")
          setImageBackground("")
          setImageBackgroundWidth("")
          setImageBackgroundHeight("")
          setFontSizeContainerIcon("")
          setFontSizeIcon("")
          setBackgroundColorIcon("")
          setBackgroundColorHover("")
          setBorderCardTop("")
          setBorderCardBottom("")
          setBorderCardLeft("")
          setBorderCardRight("")
          toast.success("successfully updated")

  } 



//element global section
  const [widget, setwidget] = React.useState(0);

  const handleChangewidget = (event, newValue) => {
    setwidget(newValue);
  };

  let [order,setOrder] = useState(0)

  const handleChangeOrder = (event, newValue) => {
    setOrder(newValue);
  };

  let [show,setShow] = useState(true)
  const disshowLeft = () =>{
      setShow(!show)
    
  } 

  let [search_in_sections,setSearchInSection] = useState("")

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
   
    setImages(imageList);
  };


  //slider update
   let updateTeamToSlider = () =>{
    let historyMaker = history 

    let searcher = characters.filter(el => el.id === section_id)[0]
    let data = characters.filter(el => el.status!=="New Order" 
    && el.id === section_id
    
    )[0]
 
  let updates = []
 
    let data_late = characters.filter(el => el.id !== section_id) 
    
    if(item576<1){
      return toast.error("value must be greater then 1")
    }
    if(item768<1){
      return toast.error("value must be greater then 1")
    }
    if(item1200<1){
      return toast.error("value must be greater then 1")
    }
    if(data.hasSlider !==hasSlider){
      data.hasSlider = hasSlider 
      let object_history = {} 
      object_history.iteration_tap = ["Content","Slider"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Slider Update"
      object_history.iteration_type = "hasSlider"
      object_history.iteration_description = `changing in slider with slider  to ${hasSlider}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "updateSlider" 
      object_history.parameter = `${hasSlider}`
      object_history.variable_change = `hasSlider:,!:$*ù${hasSlider}`
      historyMaker.push(object_history)
     }
    if(data.item576 !== item576){
      data.item576 = item576
      let object_history = {} 
      object_history.iteration_tap = ["Content","Slider"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Slider Update"
      object_history.iteration_type = "item576"
      object_history.iteration_description = `changing in slider  with 576  to ${item576}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "updateSlider" 
      object_history.parameter = `${hasSlider}`
      object_history.variable_change = `item576:,!:$*ù${item576}`
      historyMaker.push(object_history)
    }
    if(data.item768 !== item768){
      data.item768 = item768
      let object_history = {} 
      object_history.iteration_tap = ["Content","Slider"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Slider Update"
      object_history.iteration_type = "item768"
      object_history.iteration_description = `changing in slider  with 768  to ${item768}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "updateSlider" 
      object_history.parameter = `${hasSlider}`
      object_history.variable_change = `item768:,!:$*ù${item768}`
      historyMaker.push(object_history)
    }
    if( data.item1200 !== item1200){
      data.item1200 = item1200
      let object_history = {} 
      object_history.iteration_tap = ["Content","Slider"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Slider Update"
      object_history.iteration_type = "item1200"
      object_history.iteration_description = `changing in slider  with 1200  to ${item1200}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "updateSlider" 
      object_history.parameter = `${hasSlider}`
      object_history.variable_change = `item1200:,!:$*ù${item1200}`
      historyMaker.push(object_history)
    }
    if(data.autoplay !== autoplay){
      data.autoplay = autoplay
      let object_history = {} 
      object_history.iteration_tap = ["Content","Slider"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Slider Update"
      object_history.iteration_type = "autoplay"
      object_history.iteration_description = `changing in slider Auto Play  to ${autoplay}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "updateSlider" 
      object_history.parameter = `${hasSlider}`
      object_history.variable_change = `autoplay:,!:$*ù${autoplay}`
      historyMaker.push(object_history)
    }
   if(data.showDots !== showDots){
    data.showDots = showDots
    let object_history = {} 
      object_history.iteration_tap = ["Content","Slider"]
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Slider Update"
      object_history.iteration_type = "showDots"
      object_history.iteration_description = `changing in slider Show Dots  to ${showDots}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "updateSlider" 
      object_history.parameter = `${hasSlider}`
      object_history.variable_change = `showDots:,!:$*ù${showDots}`
      historyMaker.push(object_history)
   }
   if(data.showArrows!== showArrows){
    data.showArrows = showArrows
    let object_history = {} 
    object_history.iteration_tap = ["Content","Slider"]
    object_history.iteration_id  = uuidv4()
    object_history.iteration_section = section_id
    object_history.iteration_title = "Slider Update"
    object_history.iteration_type = "showArrows"
    object_history.iteration_description = `changing in slider Show Arrows  to ${showArrows}`
    object_history.iteration_date = new Date().toISOString()
    object_history.function_name = "updateSlider" 
    object_history.parameter = `${hasSlider}`
    object_history.variable_change = `showArrows:,!:$*ù${showArrows}`
    historyMaker.push(object_history)
   }
   if(data.mouseDrag !== mouseDrag){
    data.mouseDrag = mouseDrag
    let object_history = {} 
    object_history.iteration_tap = ["Content","Slider"]
    object_history.iteration_id  = uuidv4()
    object_history.iteration_section = section_id
    object_history.iteration_title = "Slider Update"
    object_history.iteration_type = "mouseDrag"
    object_history.iteration_description = `changing in slider Mouse Drag to ${mouseDrag}`
    object_history.iteration_date = new Date().toISOString()
    object_history.function_name = "updateSlider" 
    object_history.parameter = `${hasSlider}`
    object_history.variable_change = `mouseDrag:,!:$*ù${mouseDrag}`
    historyMaker.push(object_history)
   }

    let {final_html,ch_css} = updateSlider(characters,section_id,searcher,hasSlider,itemsData)
   
    if(hasSlider){
      data.section_css = ch_css 
     
    }
    if(data.data_team[0].children[0].lang==="ar"){
      final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
      }else{
        final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
    
      }
      setOrders(historyMaker) 
      setHistory(historyMaker)
     data.section_data = final_html  
    updates.push(data)  
    setApplied(historyMaker.length -1)
    
   let final = [...data_late,...updates]
    
   


   setTasks(final)
   toast.success("successfully updated")

   } 


   const [openAddSectionSaved, setOpenAddSectionSaved] = React.useState(false);
   const handleOpenAddSectionSaved = () => setOpenAddSectionSaved(true);
   const handleCloseAddSectionSaved = () => setOpenAddSectionSaved(false);
   //read and add section from tunisia devs
   let [password_enterd,setPasswordEntered] = useState("")
   let[data_from_tunisiaDevs,setDataFromTunisiaDevs] = useState("")
   const handleChangeFromTunisiadevs = (file) => {
    let files = file;
    let readers = [];
    
    // Abort if there were no files selected
    if(!files.length) return;

    // Store promises in array
    for(let i = 0;i < files.length;i++){

        readers.push(readFileAsText(files[i]));
    }
    
    // Trigger Promises
    Promise.all(readers).then((values) => {
    
     
      saveData(values[0])

    });
    
  };

  let saveData = (value) =>{
   
    setDataFromTunisiaDevs(value)
     
  }
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

  //file txt exposed 
  let handleAddFromTunisiaDevs = async() => {
  let checker = await checkIfPasswordIsCorrect(data_from_tunisiaDevs.slice(0,60),password_enterd)
  
  if(!checker && publictunisiadev)
  return   toast.error("Invalid Password")

  let decipher_object = decryptString(data_from_tunisiaDevs.slice(60,
    data_from_tunisiaDevs.length),!publictunisiadev ? password_enterd : "")
   
  
    // Step 2: Extract the iteration_section values
const iterationSections = decipher_object.map(obj => obj.iteration_section);

// Step 3: Use a Set to store unique iteration_section values
const uniqueIterationSectionsSet = new Set(iterationSections);

// Step 4: Convert the Set back to an array (if needed)
const uniqueIterationSections = Array.from(uniqueIterationSectionsSet);

    for(let i=0;i<uniqueIterationSections.length;i++){
    let decipher =  decryptString(data_from_tunisiaDevs.slice(60,
        data_from_tunisiaDevs.length),password_enterd).filter(el => el.iteration_section ===uniqueIterationSections[i])
      
      let global_data = await handlerOrders(
        decipher,
      uniqueIterationSections[i])

     
      let updates = []
      let data_late = characters.filter(el => el.id !== uniqueIterationSectionsSet[i]) 

      global_data.status = "done"
      updates.push(global_data)
      let final = [...data_late,...updates]
      updateCharacters(final)
      
     
      setHistory(decipher)
      setApplied(decipher.length -1)
      setOrders(decipher)
      // toast.success("updated successfuly")
    }

  }

  //real time iteration 
  let data = {
    something: 600,
    other: 200
  }
  let interval = null
  let [timesOn, setIsTimerOn] = useState(false)
  let [dataState, setDataState] = useState(data)
  useEffect(() => {
    interval = setInterval(() => {
      setIsTimerOn(true)
      setDataState(replaceWithRandom(dataState))
      const event = new CustomEvent('onOverlayDataUpdate', {
        detail: dataState
      })
      document.dispatchEvent(event)
    }, 5000)
    return function clear() {
      setIsTimerOn(false)
      clearInterval(interval)
    }
  }, [])
  useEffect(
    function getData() {
      document.addEventListener('onOverlayDataUpdate', e => {
        setDataState(replaceWithRandom(e.detail))
      })
      return function cleanup() {
        document.removeEventListener('onOverlayDataUpdate', document)
      }
    },
    [dataState]
  )
 

  // State handling
  const [isPopupWindowOpen, setIsPopupWindowOpen] = useState(false)

  const togglePopupWindow = () => setIsPopupWindowOpen(!isPopupWindowOpen)

  const closePopupWindow = () => setIsPopupWindowOpen(false)

  // Side Effect
  useEffect(() =>
    window.addEventListener('beforeunload', () => {
      closePopupWindow()
  
    })
  )

  let [component_to_show_up,setComponentToShowup] = useState([])
 
  useEffect(() =>{
   
      const interval = setInterval(() => {
        let result = characters.filter(el => el.status !== "New Order")
        let ch_html = ""
        let ch_css = ""
        let ch_js = "" 
        let data = []
        if(result.length!==0){
          for(let i=0;i<result.length;i++){
            ch_html += result[i].section_data
            ch_css += result[i].section_css
            ch_js += result[i].js_data
    
          }
        }else{
          ch_html = `
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

          <div id='oopss'>
          <div id='error-text'>
              <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404">
              <span>No Section Dragged Yet </span>
              <p class="p-a">
                 Please Drag Some Section and remember to enjoy it
              
          </div>
      </div>
          `
          ch_css = `
          #oopss {
            background: linear-gradient(-45deg, #fff300, #efe400);
            position: fixed;
            left: 0px;
            top: 0;
            width: 100%;
            height: 100%;
            line-height: 1.5em;
            z-index: 9999;
          }
          #oopss #error-text {
            font-size: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'Shabnam', Tahoma, sans-serif;
            color: #000;
            direction: rtl;
          }
          #oopss #error-text img {
            margin: 85px auto 20px;
            height: 342px;
          }
          #oopss #error-text span {
            position: relative;
            font-size: 3.3em;
            font-weight: 900;
            margin-bottom: 50px;
          }
          #oopss #error-text p.p-a {
            font-size: 19px;
            margin: 30px 0 15px 0;
          }
          #oopss #error-text p.p-b {
            font-size: 15px;
          }
          #oopss #error-text .back {
            background: #fff;
            color: #000;
            font-size: 30px;
            text-decoration: none;
            margin: 2em auto 0;
            padding: .7em 2em;
            border-radius: 500px;
            box-shadow: 0 20px 70px 4px rgba(0, 0, 0, 0.1), inset 7px 33px 0 0px #fff300;
            font-weight: 900;
            transition: all 300ms ease;
          }
          #oopss #error-text .back:hover {
            -webkit-transform: translateY(-13px);
                    transform: translateY(-13px);
            box-shadow: 0 35px 90px 4px rgba(0, 0, 0, 0.3), inset 0px 0 0 3px #000;
          }
          
          @font-face {
            font-family: Shabnam;
            src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot");
            src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot?#iefix") format("embedded-opentype"), url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff") format("woff"), url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff2") format("woff2"), url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.ttf") format("truetype");
            font-weight: bold;
          }
          @font-face {
            font-family: Shabnam;
            src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot");
            src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot?#iefix") format("embedded-opentype"), url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff") format("woff"), url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff2") format("woff2"), url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.ttf") format("truetype");
            font-weight: normal;
          }
          `
        }
       
        data.push({ch_html,ch_css,ch_js})
        setComponentToShowup(data)
      }, 3000);
      return () => clearInterval(interval);
 
 },[])

 //translation tasks
 const receivedData = (data) => {
  //we modify the component
  let all = itemsData
    let searcher = characters.filter(el => el.id === section_id)[0]
    let updates = []

    let team_html = searcher.team_html
  
  let hasSlider = searcher.hasSlider
  let {ch1,global_html,ch2}= updatePerSection(hasSlider,data,team_html,searcher,searcher,characters,section_id)

  let final_html = ch1 + global_html + ch2 
  let data_late = characters.filter(el => el.id !== section_id) 
  if(data[0].children[0].lang==="ar"){
    final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
    }else{
      final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
  
    }
   searcher.section_data = final_html   
    
   updates.push(searcher)  
  
      
  let final = [...data_late,...updates]
  let historyMaker = history
   for(let i=0;i<all.length;i++){

    let object_history = {}
    object_history.iteration_id  = uuidv4()
    object_history.iteration_section = section_id
    object_history.iteration_title = "Updating"
    object_history.iteration_tap = ["Translating","Card Title"]

    object_history.iteration_type = "title"
    object_history.iteration_description = `changing title text to ${all[i].children[0].text}`
    object_history.iteration_date = new Date().toISOString()
    object_history.function_name = "handleChangeData" 
    object_history.parameter = `title,${i+1},text,${i},undefined`
    object_history.variable_change = `title_text:,!:$*ù${all[i].children[0].text}`
    historyMaker.push(object_history)
   } 
  setTasks(final)
      setItems(all)
  setOpen(false)
  setValue(0)  
  toast.success("successfully updated")
  setHistory(historyMaker)
  setApplied(historyMaker.length -1)
};

  const [valueTapTranslation, setTapTranslation] = React.useState(0);

  const handleChangeTranslationTap = (event, newValue) => {
    setTapTranslation(newValue);
  };

  const [valueTapDescription, setTapDescription] = React.useState(0);

  const handleChangeDescriptionTap = (event, newValue) => {
    setTapDescription(newValue);
  };



  const receivedDataCardDescription = (data) => {
    //we modify the component
    let all = itemsData
      let searcher = characters.filter(el => el.id === section_id)[0]
      let updates = []

      let team_html = searcher.team_html
    
    let hasSlider = searcher.hasSlider
    let {ch1,global_html,ch2}= updatePerSection(hasSlider,data,team_html,searcher,searcher,characters,section_id)
  
    let final_html = ch1 + global_html + ch2 
    if(data[0].children[0].lang==="ar"){
      final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
      }else{
        final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
    
      }
    let data_late = characters.filter(el => el.id !==section_id) 
     searcher.section_data = final_html   
      

     let historyMaker = history
     for(let i=0;i<all.length;i++){
  
      let object_history = {}
      object_history.iteration_id  = uuidv4()
      object_history.iteration_section = section_id
      object_history.iteration_title = "Updating"
      object_history.iteration_tap = ["Translating","Card Description"]
      object_history.iteration_type = "title"
      object_history.iteration_description = `changing description text to ${all[i].children[1].text}`
      object_history.iteration_date = new Date().toISOString()
      object_history.function_name = "handleChangeData" 
      object_history.parameter = `description,${i+1},text,${i},undefined`
      object_history.variable_change = `description_text:,!:$*ù${all[i].children[1].text}`
      historyMaker.push(object_history)
     } 
     updates.push(searcher)  
    
        
    let final = [...data_late,...updates]

    setTasks(final)
     setHistory(historyMaker)
     setOrders(historyMaker) 
    setApplied(historyMaker.length -1)
        setItems(all)
    setOpen(false)
    setValue(0)  
    toast.success("successfully updated")
  };


  const receivedDataTitle = (
    data,description_lang,description_text,description_text_from,description_lang_from,value_switcher
    ) => {
    //we modify the component
    let all = itemsData
      let searcher = characters.filter(el => el.id === section_id)[0]
      let updates = []
      let team_html = searcher.team_html
    
    let hasSlider = searcher.hasSlider
    if(value_switcher==="title"){
      searcher.title.text = description_text
    }
    if(value_switcher==="description"){
      searcher.description.text = description_text
    }
    let {ch1,global_html,ch2}= updatePerSection(hasSlider,data,team_html,searcher,searcher,characters,section_id)
  
    let final_html = ch1 + global_html + ch2 
    if(data[0].children[0].lang==="ar"){
      final_html = final_html.replace("rtl:false,","rtl:true,").replaceAll("dir='ltr'","dir='rtl'")
      }else{
        final_html = final_html.replace("rtl:true,","rtl:false,").replaceAll("dir='rtl'","dir='ltr'")
    
      }
    let data_late = characters.filter(el => el.id !== section_id) 
     searcher.section_data = final_html   
      final_html.replace(description_text_from,description_text)
      searcher.description_text = description_text
      searcher.description_lang = description_lang

    
    


     updates.push(searcher)  
    
        
    let final = [...data_late,...updates]
      
    setTasks(final)
  
      
        setItems(all)
      let historyMaker = history
      if(value_switcher==="title"){
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Translation","Title"]
        
         object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing title text to ${  searcher.description_text}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeTitle" 
        object_history.parameter = ``
        object_history.variable_change = `title_text:,!:$*ù${searcher.description_text}`
       
        historyMaker.push(object_history)
      }
      if(value_switcher==="description"){
        let object_history = {}
        object_history.iteration_id  = uuidv4()
        object_history.iteration_tap = ["Translation","Description"]
        
         object_history.iteration_section = section_id
        object_history.iteration_title = "Updating"
        object_history.iteration_type = "title"
        object_history.iteration_description = `changing description text to ${  searcher.description_text}`
        object_history.iteration_date = new Date().toISOString()
        object_history.function_name = "handleChangeDescription" 
        object_history.parameter = ``
        object_history.variable_change = `title_text:,!:$*ù${searcher.description_text}`
       
        historyMaker.push(object_history)
      }
  
      setHistory(historyMaker)
      setOrders(historyMaker) 
    setOpen(false)
    setApplied(historyMaker.length -1)
    setValue(0)  
    toast.success("successfully updated")
  };


  const returnToOldHistory =async (data) =>{
   
   
  let indexhistoryNow = history.findIndex(item => item.iteration_id === data.iteration_id);

  setIndexInitHistory(indexhistoryNow)

    let history_of_section = history.filter(el => el.iteration_section === data.iteration_section)
// Find the index of the item with the specific ID
const index = history_of_section.findIndex(item => item.iteration_id === data.iteration_id);

// Get all items preceding the specific ID
const precedingItems = history_of_section.slice(0, index);
precedingItems.push(data)

let table = await axios.get("http://62.72.36.199:5000/api/getTemplates")


let global_data = table.data.result.filter(el => el.id === data.iteration_section)[0]
let characters = table.data.result.filter(el => el.id === data.iteration_section)
for(let i=0;i<precedingItems.length;i++){
  
  //we make functions like handlechange data and update global 
  if(precedingItems[i].function_name ==="handleChangeData"){

    let parameters = precedingItems[i].parameter.split(",")
    let parametre1 = parameters[0]
    let parametre2 = parameters[1]
    let parametre3 = parameters[2]
    let parametre4 = parameters[3]
    let parametre5 = parameters[4]
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_text:spliter_variable[0]==="title_text" ? spliter_variable[1] : "",
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] ==="title_font_family" ? spliter_variable[1] :"",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] :"",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] :"",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] :"",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "" ,
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] ==="title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right" ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] : "",
      priority:spliter_variable[0] ==="priority" ? spliter_variable[1]  : "",
      description_text:spliter_variable[0] === "description_text"  ? spliter_variable[1] : "",
      description_text_color:spliter_variable[0] === "description_text_color" ? spliter_variable[1] : "",
      description_hover_color:spliter_variable[0] ==="description_hover_color" ? spliter_variable[1] : "",
      url_social_media_adder:spliter_variable[0] === "url_social_media_adder" ? spliter_variable[1] :"",
      selectSocialMedia:spliter_variable[0] === "selectSocialMedia" ? spliter_variable[1] : "",
      logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",
      Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ? spliter_variable[1] : "",
      Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] : "",
      Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] : "",
      Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
      Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
      Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
      ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
      ImageBackgroundWidth:spliter_variable[0]=== "ImageBackgroundWidth" ? spliter_variable[1] : "",
      ImageBackgroundHeight:spliter_variable[0] === "ImageBackgroundHeight" ? spliter_variable[1] : ""
  
    }
    global_data = handleChangeDataHistory(
      characters,
      global_data,
      global_object,
      data.iteration_section,
      parametre1,
      parametre2,
      parametre3,
      parametre4,
      parametre5,
      )
     
  
  }
  
  if(precedingItems[i].function_name === "updateGlobalStyle"){
    let parametre1 = precedingItems[i].parameter
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
      description_text_color:spliter_variable[0] ==="description_text_color" ? spliter_variable[1] : "",
      description_hover_color:spliter_variable[0] === "description_hover_color" ? spliter_variable[1] : "",
      Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ?spliter_variable[1] : "",
      Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] :"",
      Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] :"",
      Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
      Image_width:spliter_variable[0] ==="Image_width" ? spliter_variable[1] : "",
      Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
      ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
      ImageBackgroundWidth:spliter_variable[0]==="ImageBackgroundWidth" ? spliter_variable[1] : "",
      ImageBackgroundHeight:spliter_variable[0]  === "ImageBackgroundHeight" ? spliter_variable[1] : "",
      logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",
  
  
    }
 
   global_data = handleUpdateGlobalStyle(
    characters,global_data,global_object,
    data.iteration_section,parametre1
   )
  
  }
  
  if(precedingItems[i].function_name === "handleChangeTitle"){
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
    
  
    }
 
   global_data = handleUpdateTitle(
    characters,global_data,global_object,
    data.iteration_section
   )
  
  }

//handleChangeDescription
if(precedingItems[i].function_name === "handleChangeDescription"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
  

  }

 global_data = handleUpdateDescription(
  characters,global_data,global_object,
  data.iteration_section
 )

}

//updateSlider 
if(precedingItems[i].function_name === "updateSlider"){
  let parameter = precedingItems[i].parameter
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    item576:spliter_variable[0] === "item576" ? spliter_variable[1] : "",
    item768:spliter_variable[0] === "item768" ? spliter_variable[1] : "",
    item1200:spliter_variable[0] === "item1200" ? spliter_variable[1] : "",
    autoplay:spliter_variable[0] === "autoplay" ? spliter_variable[1] : "",
    showDots:spliter_variable[0] === "showDots" ? spliter_variable[1] : "",
    showArrows:spliter_variable[0] === "showArrows" ? spliter_variable[1] : "",
    mouseDrag:spliter_variable[0] === "mouseDrag" ? spliter_variable[1] : "",
    hasSlider:spliter_variable[0] === "hasSlider" ? spliter_variable[1] : "" 

  }

 global_data = handleUpdateSlider(
  characters,  data.iteration_section,
  global_data,parameter,
global_object
 )
 //parameter

}

//updateResponsive
if(precedingItems[i].function_name === "updateResponsive"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    show_desktop:spliter_variable[0] === "show_desktop" ? spliter_variable[1] : "",
    show_tablet:spliter_variable[0] === "show_tablet" ? spliter_variable[1] : "",
    show_mobile:spliter_variable[0] === "show_mobile" ? spliter_variable[1] : ""
  }

 global_data = handleupdateResponsiveStyle(
  global_data,global_object
 )

}

if(precedingItems[i].function_name === "handleAddSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleAddSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}

//handleDeleteSection
if(precedingItems[i].function_name === "handleDeleteSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleDeleteSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}

}
    global_data.status = "Completed"
    let updates = []
    updates.push(global_data)  

    let data_late = tasks.filter(el => el.id !== id) 

    
    let final = [...data_late,...updates]

  setTasks(final)
setTitleColor("")
setApplied(indexhistoryNow)
updateCharacters(final)
  toast.success("successfully updated")
  }

  const [openPopupHistoryDetail, setOpenPopupHistoryDetail] = React.useState(false);


  const handleClosePopupHistoryDetail = () => {
    setOpenPopupHistoryDetail(false);
    setIndexInitHistory(0)
    setHtmlDataHistory("")
    setCssDataHistory("")
    setJsDataHisory("")
  };

  const [titlePopupDetailHistory,setTitlePopupDetailHistory] = useState("")
  const [loadingImagePopupDetailHistory,setLoadingImagePopupDetailHistory] = useState(true)
  const [datePopupDetailHistory,setDatePopupHistory] = useState("")
   const [html_data_history,setHtmlDataHistory] = useState("")
   const [css_data_history,setCssDataHistory] = useState("")
   const [jsDataHistory,setJsDataHisory] = useState("") 

    let [indexInitHistory,setIndexInitHistory] = useState(0)
    let [applied,setApplied] = useState("none")
  
    const returnViewPopup = async(data) => {
  
    setOpenPopupHistoryDetail(true)
    setLoadingImagePopupDetailHistory(true)
    
    setTitlePopupDetailHistory(data?.iteration_description)
  
    setDatePopupHistory(data?.iteration_date)

//with ability to share image and download it 
//the same for the code  
let indexhistoryNow = history.findIndex(item => item.iteration_id === data.iteration_id);

setIndexInitHistory(indexhistoryNow)

    let history_of_section = history.filter(el => el.iteration_section === data.iteration_section)
// Find the index of the item with the specific ID
const index = history_of_section.findIndex(item => item.iteration_id === data.iteration_id);

// Get all items preceding the specific ID
const precedingItems = history_of_section.slice(0, index);
precedingItems.push(data)


let table = await axios.get("http://62.72.36.199:5000/api/getTemplates")


let global_data = table.data.result.filter(el => el.id === data.iteration_section)[0]
let characters = table.data.result.filter(el => el.id === data.iteration_section)
for(let i=0;i<precedingItems.length;i++){
  
  //we make functions like handlechange data and update global 
  if(precedingItems[i].function_name ==="handleChangeData"){

    let parameters = precedingItems[i].parameter.split(",")
    let parametre1 = parameters[0]
    let parametre2 = parameters[1]
    let parametre3 = parameters[2]
    let parametre4 = parameters[3]
    let parametre5 = parameters[4]
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_text:spliter_variable[0]==="title_text" ? spliter_variable[1] : "",
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] ==="title_font_family" ? spliter_variable[1] :"",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] :"",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] :"",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] :"",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "" ,
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] ==="title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right" ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] : "",
      priority:spliter_variable[0] ==="priority" ? spliter_variable[1]  : "",
      description_text:spliter_variable[0] === "description_text"  ? spliter_variable[1] : "",
      description_text_color:spliter_variable[0] === "description_text_color" ? spliter_variable[1] : "",
      description_hover_color:spliter_variable[0] ==="description_hover_color" ? spliter_variable[1] : "",
      url_social_media_adder:spliter_variable[0] === "url_social_media_adder" ? spliter_variable[1] :"",
      selectSocialMedia:spliter_variable[0] === "selectSocialMedia" ? spliter_variable[1] : "",
      logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",
      Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ? spliter_variable[1] : "",
      Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] : "",
      Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] : "",
      Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
      Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
      Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
      ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
      ImageBackgroundWidth:spliter_variable[0]=== "ImageBackgroundWidth" ? spliter_variable[1] : "",
      ImageBackgroundHeight:spliter_variable[0] === "ImageBackgroundHeight" ? spliter_variable[1] : ""
  
    }
    global_data = handleChangeDataHistory(
      characters,
      global_data,
      global_object,
      data.iteration_section,
      parametre1,
      parametre2,
      parametre3,
      parametre4,
      parametre5,
      )
     
  
  }
  
  if(precedingItems[i].function_name === "updateGlobalStyle"){
    let parametre1 = precedingItems[i].parameter
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
      description_text_color:spliter_variable[0] ==="description_text_color" ? spliter_variable[1] : "",
      description_hover_color:spliter_variable[0] === "description_hover_color" ? spliter_variable[1] : "",
      Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ?spliter_variable[1] : "",
      Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] :"",
      Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] :"",
      Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
      Image_width:spliter_variable[0] ==="Image_width" ? spliter_variable[1] : "",
      Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
      ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
      ImageBackgroundWidth:spliter_variable[0]==="ImageBackgroundWidth" ? spliter_variable[1] : "",
      ImageBackgroundHeight:spliter_variable[0]  === "ImageBackgroundHeight" ? spliter_variable[1] : "",
      logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",
  
  
    }
 
   global_data = handleUpdateGlobalStyle(
    characters,global_data,global_object,
    data.iteration_section,parametre1
   )
  
  }
  
  if(precedingItems[i].function_name === "handleChangeTitle"){
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
    
  
    }
 
   global_data = handleUpdateTitle(
    characters,global_data,global_object,
    data.iteration_section
   )
  
  }

//handleChangeDescription
if(precedingItems[i].function_name === "handleChangeDescription"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
  

  }

 global_data = handleUpdateDescription(
  characters,global_data,global_object,
  data.iteration_section
 )

}

//updateSlider 
if(precedingItems[i].function_name === "updateSlider"){
  let parameter = precedingItems[i].parameter
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    item576:spliter_variable[0] === "item576" ? spliter_variable[1] : "",
    item768:spliter_variable[0] === "item768" ? spliter_variable[1] : "",
    item1200:spliter_variable[0] === "item1200" ? spliter_variable[1] : "",
    autoplay:spliter_variable[0] === "autoplay" ? spliter_variable[1] : "",
    showDots:spliter_variable[0] === "showDots" ? spliter_variable[1] : "",
    showArrows:spliter_variable[0] === "showArrows" ? spliter_variable[1] : "",
    mouseDrag:spliter_variable[0] === "mouseDrag" ? spliter_variable[1] : "",
    hasSlider:spliter_variable[0] === "hasSlider" ? spliter_variable[1] : "" 

  }

 global_data = handleUpdateSlider(
  characters,  data.iteration_section,
  global_data,parameter,
global_object
 )
 //parameter

}

//updateResponsive
if(precedingItems[i].function_name === "updateResponsive"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    show_desktop:spliter_variable[0] === "show_desktop" ? spliter_variable[1] : "",
    show_tablet:spliter_variable[0] === "show_tablet" ? spliter_variable[1] : "",
    show_mobile:spliter_variable[0] === "show_mobile" ? spliter_variable[1] : ""
  }

 global_data = handleupdateResponsiveStyle(
  global_data,global_object
 )

}

if(precedingItems[i].function_name === "handleAddSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleAddSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}

//handleDeleteSection
if(precedingItems[i].function_name === "handleDeleteSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleDeleteSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}

}
//htmlStringBase64Image

let datasection = `
<html>
<style>
${global_data.section_css}
</style>
<body>
${global_data.section_data}
<script>${global_data.js_data}</script>
</body>

</html>
`


setHtmlDataHistory(global_data.section_data)
setCssDataHistory(global_data.section_css)
setJsDataHisory(global_data.js_data)

    setLoadingImagePopupDetailHistory(false)

  } 

  const [valueViewHistory, setValueViewHistory] = React.useState(0);

  const handleChangeViewHistory = (event, newValue) => {
    setValueViewHistory(newValue);
  };

  const handleGoPrevieus = async() =>{
    let indexgo = indexInitHistory-1
    setIndexInitHistory(indexgo)
    setLoadingImagePopupDetailHistory(true)
    let data = history[indexgo]
    setTitlePopupDetailHistory(data?.iteration_description)
  
    setDatePopupHistory(data?.iteration_date)

//with ability to share image and download it 
//the same for the code  


    let history_of_section = history.filter(el => el.iteration_section === data.iteration_section)
// Find the index of the item with the specific ID
const index = history_of_section.findIndex(item => item.iteration_id === data.iteration_id);

// Get all items preceding the specific ID
const precedingItems = history_of_section.slice(0, index);
precedingItems.push(data)
//so let's begin the great journey 
//we set the value of the state  them  we execute figure out witch function to execute 

//we get templates init and pass it in the function  
// with selecting the state that we are in  
let table = await axios.get("http://62.72.36.199:5000/api/getTemplates")


let global_data = table.data.result.filter(el => el.id === data.iteration_section)[0]
let characters = table.data.result.filter(el => el.id === data.iteration_section)

for(let i=0;i<precedingItems.length;i++){
  //we make functions like handlechange data and update global 
   //we make functions like handlechange data and update global 
   if(precedingItems[i].function_name ==="handleChangeData"){
   
    let parameters = precedingItems[i].parameter.split(",")
    let parametre1 = parameters[0]
    let parametre2 = parameters[1]
    let parametre3 = parameters[2]
    let parametre4 = parameters[3]
    let parametre5 = parameters[4]
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_text:spliter_variable[0]==="title_text" ? spliter_variable[1] : "",
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] ==="title_font_family" ? spliter_variable[1] :"",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] :"",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] :"",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] :"",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "" ,
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] ==="title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right" ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] : "",
      priority:spliter_variable[0] ==="priority" ? spliter_variable[1]  : "",
      description_text:spliter_variable[0] === "description_text"  ? spliter_variable[1] : "",
      description_text_color:spliter_variable[0] === "description_text_color" ? spliter_variable[1] : "",
      description_hover_color:spliter_variable[0] ==="description_hover_color" ? spliter_variable[1] : "",
      url_social_media_adder:spliter_variable[0] === "url_social_media_adder" ? spliter_variable[1] :"",
      selectSocialMedia:spliter_variable[0] === "selectSocialMedia" ? spliter_variable[1] : "",
      logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",
      Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ? spliter_variable[1] : "",
      Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] : "",
      Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] : "",
      Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
      Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
      Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
      ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
      ImageBackgroundWidth:spliter_variable[0] === "ImageBackgroundWidth" ? spliter_variable[1] : "",
      ImageBackgroundHeight:spliter_variable[0] === "ImageBackgroundHeight" ? spliter_variable[1] : ""
 
    }
    global_data = handleChangeDataHistory(
      characters,
      global_data,
      global_object,
      data.iteration_section,
      parametre1,
      parametre2,
      parametre3,
      parametre4,
      parametre5,
      )
     

  }

 if(precedingItems[i].function_name === "updateGlobalStyle"){
    let parametre1 = precedingItems[i].parameter
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
      description_text_color:spliter_variable[0] ==="description_text_color" ? spliter_variable[1] : "",
      description_hover_color:spliter_variable[0] === "description_hover_color" ? spliter_variable[1] : "",
      Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ?spliter_variable[1] : "",
      Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] :"",
      Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] :"",
      Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
      Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
      Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
      ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
      ImageBackgroundWidth:spliter_variable[0]==="ImageBackgroundWidth" ? spliter_variable[1] : "",
      ImageBackgroundHeight:spliter_variable[0]  === "ImageBackgroundHeight" ? spliter_variable[1] : "",
      logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",


    }
    
  //  characters,
  //     global_data,
   //      data.iteration_section,  

   global_data = handleUpdateGlobalStyle(
    characters,global_data,global_object,
    data.iteration_section,parametre1
   )

  }
  if(precedingItems[i].function_name === "handleChangeTitle"){
    let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
    let global_object = {
      title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
      title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
      title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
      title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
      title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
      title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
      title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
      title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
      title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
      title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
      title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
      title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
      title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
      alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
    
  
    }
 
   global_data = handleUpdateTitle(
    characters,global_data,global_object,
    data.iteration_section
   )
  
  }
  //handleChangeDescription
if(precedingItems[i].function_name === "handleChangeDescription"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
  

  }

 global_data = handleUpdateDescription(
  characters,global_data,global_object,
  data.iteration_section
 )

}

//updateSlider 
if(precedingItems[i].function_name === "updateSlider"){
  let parameter = precedingItems[i].parameter
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    item576:spliter_variable[0] === "item576" ? spliter_variable[1] : "",
    item768:spliter_variable[0] === "item768" ? spliter_variable[1] : "",
    item1200:spliter_variable[0] === "item1200" ? spliter_variable[1] : "",
    autoplay:spliter_variable[0] === "autoplay" ? spliter_variable[1] : "",
    showDots:spliter_variable[0] === "showDots" ? spliter_variable[1] : "",
    showArrows:spliter_variable[0] === "showArrows" ? spliter_variable[1] : "",
    mouseDrag:spliter_variable[0] === "mouseDrag" ? spliter_variable[1] : "",
    hasSlider:spliter_variable[0] === "hasSlider" ? spliter_variable[1] : "" 

  }

 global_data = handleUpdateSlider(
  characters,  data.iteration_section,
  global_data,parameter,
global_object
 )
 //parameter

}

//updateResponsive
if(precedingItems[i].function_name === "updateResponsive"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    show_desktop:spliter_variable[0] === "show_desktop" ? spliter_variable[1] : "",
    show_tablet:spliter_variable[0] === "show_tablet" ? spliter_variable[1] : "",
    show_mobile:spliter_variable[0] === "show_mobile" ? spliter_variable[1] : ""
  }

 global_data = handleupdateResponsiveStyle(
  global_data,global_object
 )

}

//handleAddSection

if(precedingItems[i].function_name === "handleAddSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleAddSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}
//handleDeleteSection
if(precedingItems[i].function_name === "handleDeleteSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleDeleteSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}

}
//htmlStringBase64Image

let datasection = `
<html>
<style>
${global_data.section_css}
</style>
<body>
${global_data.section_data}
<script>${global_data.js_data}</script>
</body>

</html>
`
let image_url = await htmlStringBase64Image(datasection)
setHtmlDataHistory(global_data.section_data)
setCssDataHistory(global_data.section_css)
setJsDataHisory(global_data.js_data)


    setLoadingImagePopupDetailHistory(false)


  }

  const handleGoAfter = async() =>{
    let indexgo = indexInitHistory+1
    setIndexInitHistory(indexgo)
    setLoadingImagePopupDetailHistory(true)
    let data = history[indexgo]
    setTitlePopupDetailHistory(data?.iteration_description)
  
    setDatePopupHistory(data?.iteration_date)

//with ability to share image and download it 
//the same for the code  


    let history_of_section = history.filter(el => el.iteration_section === data.iteration_section)
// Find the index of the item with the specific ID
const index = history_of_section.findIndex(item => item.iteration_id === data.iteration_id);

// Get all items preceding the specific ID
const precedingItems = history_of_section.slice(0, index);
precedingItems.push(data)
//so let's begin the great journey 
//we set the value of the state  them  we execute figure out witch function to execute 

//we get templates init and pass it in the function  
// with selecting the state that we are in  
let table = await axios.get("http://62.72.36.199:5000/api/getTemplates")

let global_data = table.data.result.filter(el => el.id === data.iteration_section)[0]
let characters = table.data.result.filter(el => el.id === data.iteration_section)

for(let i=0;i<precedingItems.length;i++){
  //we make functions like handlechange data and update global 
 if(precedingItems[i].function_name ==="handleChangeData"){

  let parameters = precedingItems[i].parameter.split(",")
  let parametre1 = parameters[0]
  let parametre2 = parameters[1]
  let parametre3 = parameters[2]
  let parametre4 = parameters[3]
  let parametre5 = parameters[4]
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0]==="title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] ==="title_font_family" ? spliter_variable[1] :"",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] :"",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] :"",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] :"",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "" ,
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] ==="title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right" ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] : "",
    priority:spliter_variable[0] ==="priority" ? spliter_variable[1]  : "",
    description_text:spliter_variable[0] === "description_text"  ? spliter_variable[1] : "",
    description_text_color:spliter_variable[0] === "description_text_color" ? spliter_variable[1] : "",
    description_hover_color:spliter_variable[0] ==="description_hover_color" ? spliter_variable[1] : "",
    url_social_media_adder:spliter_variable[0] === "url_social_media_adder" ? spliter_variable[1] :"",
    selectSocialMedia:spliter_variable[0] === "selectSocialMedia" ? spliter_variable[1] : "",
    logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",
    Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ? spliter_variable[1] : "",
    Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] : "",
    Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] : "",
    Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
    Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
    Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
    ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
    ImageBackgroundWidth:spliter_variable[0] === "ImageBackgroundWidth" ? spliter_variable[1] : "",
    ImageBackgroundHeight:spliter_variable[0] === "ImageBackgroundHeight" ? spliter_variable[1] : ""

  }
  global_data = handleChangeDataHistory(
    characters,
    global_data,
    global_object,
    data.iteration_section,
    parametre1,
    parametre2,
    parametre3,
    parametre4,
    parametre5,
    )
   

}

if(precedingItems[i].function_name === "updateGlobalStyle"){
  let parametre1 = precedingItems[i].parameter
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
    description_text_color:spliter_variable[0] ==="description_text_color" ? spliter_variable[1] : "",
    description_hover_color:spliter_variable[0] === "description_hover_color" ? spliter_variable[1] : "",
    Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ?spliter_variable[1] : "",
    Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] :"",
    Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] :"",
    Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
    Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
    Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
    ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
    ImageBackgroundWidth:spliter_variable[0]==="ImageBackgroundWidth" ? spliter_variable[1] : "",
    ImageBackgroundHeight:spliter_variable[0]  === "ImageBackgroundHeight" ? spliter_variable[1] : "",
    logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",


  }
//  characters,
//     global_data,
 //      data.iteration_section,  

 global_data = handleUpdateGlobalStyle(
  characters,global_data,global_object,
  data.iteration_section,parametre1
 )

}

if(precedingItems[i].function_name === "handleChangeTitle"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
  

  }

 global_data = handleUpdateTitle(
  characters,global_data,global_object,
  data.iteration_section
 )

}

//handleChangeDescription
if(precedingItems[i].function_name === "handleChangeDescription"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
  

  }

 global_data = handleUpdateDescription(
  characters,global_data,global_object,
  data.iteration_section
 )

}

//updateSlider 
if(precedingItems[i].function_name === "updateSlider"){
  let parameter = precedingItems[i].parameter
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    item576:spliter_variable[0] === "item576" ? spliter_variable[1] : "",
    item768:spliter_variable[0] === "item768" ? spliter_variable[1] : "",
    item1200:spliter_variable[0] === "item1200" ? spliter_variable[1] : "",
    autoplay:spliter_variable[0] === "autoplay" ? spliter_variable[1] : "",
    showDots:spliter_variable[0] === "showDots" ? spliter_variable[1] : "",
    showArrows:spliter_variable[0] === "showArrows" ? spliter_variable[1] : "",
    mouseDrag:spliter_variable[0] === "mouseDrag" ? spliter_variable[1] : "",
    hasSlider:spliter_variable[0] === "hasSlider" ? spliter_variable[1] : "" 

  }

 global_data = handleUpdateSlider(
  characters,  data.iteration_section,
  global_data,parameter,
global_object
 )
 //parameter

}

//updateResponsive
if(precedingItems[i].function_name === "updateResponsive"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    show_desktop:spliter_variable[0] === "show_desktop" ? spliter_variable[1] : "",
    show_tablet:spliter_variable[0] === "show_tablet" ? spliter_variable[1] : "",
    show_mobile:spliter_variable[0] === "show_mobile" ? spliter_variable[1] : ""
  }

 global_data = handleupdateResponsiveStyle(
  global_data,global_object
 )

}

//handleAddSection

if(precedingItems[i].function_name === "handleAddSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleAddSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}

//handleDeleteSection
if(precedingItems[i].function_name === "handleDeleteSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleDeleteSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}
}
//htmlStringBase64Image

let datasection = `
<html>
<style>
${global_data.section_css}
</style>
<body>
${global_data.section_data}
<script>${global_data.js_data}</script>
</body>

</html>
`

setHtmlDataHistory(global_data.section_data)
setCssDataHistory(global_data.section_css)
setJsDataHisory(global_data.js_data)


    setLoadingImagePopupDetailHistory(false)

  }

  const handleApply = async() =>{
    
    let data = history[indexInitHistory]

 
    let history_of_section = history.filter(el => el.iteration_section === data.iteration_section)
// Find the index of the item with the specific ID
const index = history_of_section.findIndex(item => item.iteration_id === data.iteration_id);

// Get all items preceding the specific ID
const precedingItems = history_of_section.slice(0, index);
precedingItems.push(data)
//so let's begin the great journey 
//we set the value of the state  them  we execute figure out witch function to execute 

//we get templates init and pass it in the function  
// with selecting the state that we are in  
let table = await axios.get("http://62.72.36.199:5000/api/getTemplates")

let global_data = table.data.result.filter(el => el.id === data.iteration_section)[0]
let characters = table.data.result.filter(el => el.id === data.iteration_section)

for(let i=0;i<precedingItems.length;i++){
  //we make functions like handlechange data and update global 
 if(precedingItems[i].function_name ==="handleChangeData"){

  let parameters = precedingItems[i].parameter.split(",")
  let parametre1 = parameters[0]
  let parametre2 = parameters[1]
  let parametre3 = parameters[2]
  let parametre4 = parameters[3]
  let parametre5 = parameters[4]

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0]==="title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] ==="title_font_family" ? spliter_variable[1] :"",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] :"",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] :"",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] :"",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "" ,
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] ==="title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right" ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] : "",
    priority:spliter_variable[0] ==="priority" ? spliter_variable[1]  : "",
    description_text:spliter_variable[0] === "description_text"  ? spliter_variable[1] : "",
    description_text_color:spliter_variable[0] === "description_text_color" ? spliter_variable[1] : "",
    description_hover_color:spliter_variable[0] ==="description_hover_color" ? spliter_variable[1] : "",
    url_social_media_adder:spliter_variable[0] === "url_social_media_adder" ? spliter_variable[1] :"",
    selectSocialMedia:spliter_variable[0] === "selectSocialMedia" ? spliter_variable[1] : "",
    logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",
    Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ? spliter_variable[1] : "",
    Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] : "",
    Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] : "",
    Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
    Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
    Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
    ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
    ImageBackgroundWidth:spliter_variable[0] === "ImageBackgroundWidth" ? spliter_variable[1] : "",
    ImageBackgroundHeight:spliter_variable[0] === "ImageBackgroundHeight" ? spliter_variable[1] : ""

  }
  global_data = handleChangeDataHistory(
    characters,
    global_data,
    global_object,
    data.iteration_section,
    parametre1,
    parametre2,
    parametre3,
    parametre4,
    parametre5,
    )
   

}

if(precedingItems[i].function_name === "updateGlobalStyle"){
  let parametre1 = precedingItems[i].parameter
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] ==="title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
    description_text_color:spliter_variable[0] ==="description_text_color" ? spliter_variable[1] : "",
    description_hover_color:spliter_variable[0] === "description_hover_color" ? spliter_variable[1] : "",
    Image_border_top_left_radius:spliter_variable[0] === "Image_border_top_left_radius" ?spliter_variable[1] : "",
    Image_border_top_right_radius:spliter_variable[0] === "Image_border_top_right_radius" ? spliter_variable[1] :"",
    Image_border_bottom_right_radius:spliter_variable[0] === "Image_border_bottom_right_radius" ? spliter_variable[1] :"",
    Image_border_bottom_left_radius:spliter_variable[0] === "Image_border_bottom_left_radius" ? spliter_variable[1] : "",
    Image_width:spliter_variable[0] === "Image_width" ? spliter_variable[1] : "",
    Image_height:spliter_variable[0] === "Image_height" ? spliter_variable[1] :"",
    ImageBackground:spliter_variable[0] === "ImageBackground" ? spliter_variable[1] : "",
    ImageBackgroundWidth:spliter_variable[0]==="ImageBackgroundWidth" ? spliter_variable[1] : "",
    ImageBackgroundHeight:spliter_variable[0]  === "ImageBackgroundHeight" ? spliter_variable[1] : "",
    logo_content:spliter_variable[0] === "logo_content" ? spliter_variable[1] : "",


  }
//  characters,
//     global_data,
 //      data.iteration_section,  

 global_data = handleUpdateGlobalStyle(
  characters,global_data,global_object,
  data.iteration_section,parametre1
 )

}
if(precedingItems[i].function_name === "handleChangeTitle"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
  

  }

 global_data = handleUpdateTitle(
  characters,global_data,global_object,
  data.iteration_section
 )

}

//handleChangeDescription
if(precedingItems[i].function_name === "handleChangeDescription"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    title_text:spliter_variable[0] === "title_text" ? spliter_variable[1] : "",
    title_color:spliter_variable[0]==="title_color" ? spliter_variable[1] : "",
    title_hover_color:spliter_variable[0] === "title_hover_color" ? spliter_variable[1] : "",
    title_font_family:spliter_variable[0] === "title_font_family" ? spliter_variable[1] : "",
    title_font_size:spliter_variable[0] === "title_font_size" ? spliter_variable[1] : "",
    title_padding_top:spliter_variable[0] === "title_padding_top" ? spliter_variable[1] : "",
    title_padding_bottom:spliter_variable[0] === "title_padding_bottom" ? spliter_variable[1] : "",
    title_padding_left:spliter_variable[0] === "title_padding_left" ? spliter_variable[1] : "",
    title_padding_right:spliter_variable[0] === "title_padding_right" ? spliter_variable[1] : "",
    title_margin_top:spliter_variable[0] === "title_margin_top" ? spliter_variable[1] : "",
    title_margin_bottom:spliter_variable[0] === "title_margin_bottom" ? spliter_variable[1] : "",
    title_margin_left:spliter_variable[0] === "title_margin_left" ? spliter_variable[1] : "",
    title_margin_right:spliter_variable[0] === "title_margin_right"  ? spliter_variable[1] : "",
    alignmentTitleAlign:spliter_variable[0] === "alignmentTitleAlign" ? spliter_variable[1] :"",
  

  }

 global_data = handleUpdateDescription(
  characters,global_data,global_object,
  data.iteration_section
 )

}

//updateSlider 
if(precedingItems[i].function_name === "updateSlider"){
  let parameter = precedingItems[i].parameter
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    item576:spliter_variable[0] === "item576" ? spliter_variable[1] : "",
    item768:spliter_variable[0] === "item768" ? spliter_variable[1] : "",
    item1200:spliter_variable[0] === "item1200" ? spliter_variable[1] : "",
    autoplay:spliter_variable[0] ==="autoplay" ? spliter_variable[1] : "",
    showDots:spliter_variable[0] === "showDots" ? spliter_variable[1] : "",
    showArrows:spliter_variable[0] === "showArrows" ? spliter_variable[1] : "",
    mouseDrag:spliter_variable[0] === "mouseDrag" ? spliter_variable[1] : "",
    hasSlider:spliter_variable[0] === "hasSlider" ? spliter_variable[1] : "" 

  }

 global_data = handleUpdateSlider(
  characters,  data.iteration_section,
  global_data,parameter,
global_object
 )
 //parameter

}

//updateResponsive
if(precedingItems[i].function_name === "updateResponsive"){
  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")
  let global_object = {
    show_desktop:spliter_variable[0] === "show_desktop" ? spliter_variable[1] : "",
    show_tablet:spliter_variable[0] === "show_tablet" ? spliter_variable[1] : "",
    show_mobile:spliter_variable[0] === "show_mobile" ? spliter_variable[1] : ""
  }

 global_data = handleupdateResponsiveStyle(
  global_data,global_object
 )

}

//handleAddSection

if(precedingItems[i].function_name === "handleAddSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleAddSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}
//handleDeleteSection
if(precedingItems[i].function_name === "handleDeleteSection"){

  let spliter_variable = precedingItems[i].variable_change.split(":,!:$*ù")

  let  numberOfcopiedSection =spliter_variable[0] ==="numberOfcopiedSection" ?  spliter_variable[1] : ""
  let section_idd =  precedingItems[i].parameter 
 global_data = handleDeleteSection(
  characters,global_data,numberOfcopiedSection,section_idd
 )

}

}

    global_data.status = "Completed"
    let updates = []
    updates.push(global_data)  

    let data_late = tasks.filter(el => el.id !== id) 
    let final = [...data_late,...updates]
    setTasks(final)
    setApplied(indexInitHistory)
    updateCharacters(final)

    toast.success("successfully updated")
  }

  const [history_searcher,setHistorySearcher] = useState("")

  
  const [files, setFiles] = useState([]);
 

  useEffect(()=>{
      const links = Array.from(document.getElementsByClassName('filepond--credits'));
      links.forEach(link => link.remove());
  })
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  

  let handleFormSubmit = (value,field) =>{
    if(field ==="title_font_size"){
      setTitleFontSize(value)
    }
    if(field ==="title_padding_top"){
      setTitlePaddingTop(value)
    }
    if(field === "title_padding_bottom"){
      setTitlePaddingBottom(value)
    }
    if(field==="title_padding_left"){
      setTitlePaddingLeft(value)
    }
    if(field ==="title_padding_right"){
      setTitlePaddingRight(value)
    }
    if(field==="title_margin_top"){
      setTitleMarginTop(value)
    }
    if(field==="title_margin_bottom"){
      setTitleMaginBottom(value)
    }
    if(field==="title_margin_left"){
      setTitleMaginLeft(value)
    }
    if(field==="title_margin_right"){
      setTitleMarginRight(value)
    }
    if(field ==="Image_border_top_left_radius"){
      setImageBorderTopLeftRadius(value)
    }
    if(field === "Image_border_top_right_radius"){
      setImageBoderTopRightRadius(value)
    }
    if(field === "Image_border_bottom_right_radius"){
      setImageBorderBottomRightRadius(value)
    }
    if(field === "Image_border_bottom_left_radius"){
      setImageBorderBottomLeftRadius(value)
    }
    if(field === "Image_width"){
      setImagewidth(value)
    }
    if(field === "Image_height"){
      setImageHeight(value)
    }
    if(field === "ImageBackgroundWidth"){ 
      setImageBackgroundWidth(value)
    }
    if(field === "ImageBackgroundHeight"){
      setImageBackgroundHeight(value)
    }
    if(field === "fontsizeIcon"){
      setFontSizeIcon(value)
    }
    if(field === "title_font_family"){
      setTitleFontFamily(value)
    }
    if(field === "text_align"){
      setAlignmentTitleAlign(value)
    }
    if(field === "title_text"){
      setTitleText(value)
    }
    if(field === "description_text"){
      setDescriptionText(value)
    }
    if(field === "title_color"){
      setTitleColor(value)
    }
    if(field === "title_hover_color"){
      setTitleHoverColor(value)
    }
    if(field === "description_text_color"){
      setDescriptionTextColor(value)
    }
    if(field === "description_hover_color"){
      setDescriptionHoverColor(value)
    }
    if(field === "ImageBackground"){
      setImageBackground(value)
    }
    if(field=== "backgroundcolorContainer"){
      setBackgroundColorIcon(value)
    }
    if(field === "background_color_hover"){
      setBackgroundColorHover(value)
    }
    if(field === "priority"){
      setPriority(value)
    }
    if(field == "border_card_top"){
      setBorderCardTop(value)
    }
    if(field == "border_card_bottom"){
      setBorderCardBottom(value)
    }
    if(field == "border_card_left"){
      setBorderCardLeft(value)
    }
    if(field == "border_card_right"){
      setBorderCardRight(value)
    }


    }
    //stepper for export here
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  let [html_order,setHtmlOrder] = useState("")
  let [css_order,setCssOrder] = useState("")
  let [js_order,setJsOrder] = useState("")
  const handleNext = async() => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if(activeStep === 0){
      let global_data = await handlerOrders(orders.filter(el => el.iteration_section === section_id),section_id)
      setHtmlOrder(global_data?.section_data)
      setCssOrder(global_data?.section_css)
      setJsOrder(global_data?.js_data)
    }
    if(activeStep===2){
      
      let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  
      let testPasswordStringth = strongPassword.test(password_export_order)
      if(!testPasswordStringth && !publicExportOrder)
      return;
      else{
        await handleDownload(orders.filter(el => el.iteration_section === section_id),
        !publicExportOrder ? password_export_order : "",
        Templates.filter(el => el.id === section_id)[0].section_name
        )
       
      }
    }
 


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };  


  const [showPassword, setShowPassword] = React.useState(false);
  let [password_export_order,setPasswordExportOrder] = useState("")
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; 
 let [orders,setOrders] = useState([]) 
  
let deleteFromOrders = (data) =>{
  let data_orders_changes = orders.filter(el => el.iteration_id !==data.iteration_id)
  setOrders(data_orders_changes)  
  toast.success("order deleted successfully")
}


    //stepper for charge order here
    const [activeStepCharge, setActiveStepCharge] = React.useState(0);
    const [skippedCharge] = React.useState(new Set());
  
    const isStepSkippedCharge = (step) => {
      return skippedCharge.has(step);
    };
  
    let [password_charge_order,setPasswordChargeOrder] = useState("")
    let [html_order_charge,setHtmlOrderCharge] = useState("")
    let [css_order_charge,setCssOrderCharge] = useState("")
    let [js_order_charge,setJsOrderCharge] = useState("")
    let [globalChargerOrder,setGlobalChargeOrder] = useState()
    const handleNextCharge = async() => {
      let newSkipped = skipped;
      if (isStepSkippedCharge(activeStepCharge)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStepCharge);
      }
      // if(activeStepCharge == 0){
      //   let global_data = await handlerOrders(orders.filter(el => el.iteration_section == section_id),section_id)
      //   setHtmlOrderCharge(global_data?.section_data)
      //   setCssOrderCharge(global_data?.section_css)
      //   setJsOrderCharge(global_data?.js_data)
      // }
      if(activeStepCharge===1){
        
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    
        let testPasswordStringth = strongPassword.test(password_charge_order)
        if(!testPasswordStringth && !publicChargeOrder)
        return;
        else{
          let checker = await checkIfPasswordIsCorrect(chargeOrder.slice(0,60),password_charge_order)
  
  if(!checker && !publicChargeOrder)
  return   toast.error("Invalid Password")
        
  let decipher_object = decryptString(chargeOrder.slice(60,
    chargeOrder.length),!publicChargeOrder ? password_charge_order : "") 
      
        
        let global_data = await handlerOrders(decipher_object,section_id)
       
        setGlobalChargeOrder(global_data)
        setHtmlOrderCharge(global_data?.section_data)
        setCssOrderCharge(global_data?.section_css)
        setJsOrderCharge(global_data?.js_data)
        }
      }
      if(activeStepCharge===2){
        let updates = []
        let data_late = characters.filter(el => el.id !== section_id) 
        globalChargerOrder.status = "done"
        updates.push(globalChargerOrder)
        let final = [...data_late,...updates]
        updateCharacters(final)

        //history here set 
        let decipher_object = decryptString(chargeOrder.slice(60,
          chargeOrder.length),password_charge_order) 
       
        setHistory(decipher_object)
        setApplied(decipher_object.length -1)
        setOrders(decipher_object)
        toast.success("updated successfuly")
      }
  
  
      setActiveStepCharge((prevActiveStep) => prevActiveStep + 1);
      
    };
  
    const handleBackCharge = () => {
      setActiveStepCharge((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleResetCharge = () => {
      setActiveStepCharge(0);
    };  
  
    //file input
    const handleChangeOrderCharge = (file) => {
      let files = file;
      let readers = [];
      
      // Abort if there were no files selected
      if(!files.length) return;
  
      // Store promises in array
      for(let i = 0;i < files.length;i++){
  
          readers.push(readFileAsTextOrderCharge(files[i]));
      }
      
      // Trigger Promises
      Promise.all(readers).then((values) => {
      
       
        saveDataOrderCharge(values[0])
  
      });
      
    };
  
    let [chargeOrder,setChargeOrder] = useState("")
    let saveDataOrderCharge = (value) =>{
      setChargeOrder(value)

       
    }
    function readFileAsTextOrderCharge(file){
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

    let [publicExportOrder,setPublicExportOrder] = useState(true)
    let [publicChargeOrder,setPublicChargeOrder] = useState(true)
    let [publictunisiadev,setPublicTunisiaDev] = useState(true)

    //adjust height per view 
    const [iframeHeight, setIframeHeight] = useState('80vh');

  // This function handles the resizing of the iframe based on its content.
  const handleSingleTitleSubmit = (final,historyMaker,historyMaker2,all) =>{
    setTasks(final)
          
          
          
    setOrders(historyMaker) 
 setHistory(historyMaker)
 setApplied(historyMaker2)
     
       setItems(all)
  }
   return (
    <Box sx={{ display: 'flex' }}>
        <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon 
          onClick={handleOpenAddSectionSaved}
          />}
      ></SpeedDial>
        {/* for tunisia dev export */}
        <Modal
        open={openAddSectionSaved}
        onClose={handleCloseAddSectionSaved}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
         
          <IconButton
          aria-label="close"
          onClick={handleCloseAddSectionSaved}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> 
        <Avatar 
           
           alt="tunisia Devs Logo"
            src="https://res.cloudinary.com/dx8hb4haj/image/upload/v1667292509/app_background_txklxf.jpg" />
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <FileUploader
        multiple={true}
        handleChange={handleChangeFromTunisiadevs}
        name="fileFromTunisiaDevs"
        types={fileTypesFromTunisiaDevs}
      />
      
    
            </div>
        
      <br></br>
      <div style={{display:"flex"}}>
        <Switch
      checked={publictunisiadev}
      onClick={e => setPublicTunisiaDev(e.target.checked)}
      label="public"
        />
        {publictunisiadev ? <h3>{t("publicNoNeedToEnterPassword")}</h3> : <h3>{t("noPublic")}</h3> }

        </div>
          {!publictunisiadev &&
           <>
  <div style={{display:"flex",justifyContent:"center"}}>
            <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{t("password")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password_enterd}
            name="password_enterd"
            onChange={e => setPasswordEntered(e.target.value)}
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
                 <FormHelperText id="filled-weight-helper-text"
           >
           {t("passwordRule")}
           </FormHelperText>
        </FormControl>
           
            </div>
          </>}
          
    
            <div style={{display:"flex",justifyContent:"center"}}>
                
            <Button variant="text"
            onClick={() => handleAddFromTunisiaDevs()}
            >{t("add")}</Button>
          </div>
          <ToastContainer />   
          </Typography>
          
        </Box>
      </Modal>
      
      <CssBaseline />

      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar style={{    display: "flex",
    justifyContent: "space-between"}}>
      {show ? <CloseIcon 
      style={{cursor:"pointer"}}
       onClick={() => disshowLeft()}
      /> : 
         < MenuIcon 
         style={{cursor:"pointer"}}
         onClick={() => disshowLeft()}
         />   
      }
       
<Typography variant="h6" noWrap component="div">
<img src={logo} width={70} height={50}/>
{t("carthage")}
          </Typography>

     
<div>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <FullScreenCodeResultDialog />
           
    
           <Tooltip title={t("sharePageWithClient")}>
           <IconButton>
           <ShareIcon  style={{marginLeft:14,color:"white"}}/>
           </IconButton>
           </Tooltip>
          
  </div>

         
          </div>

         

          
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: show ? 300 : "0px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: show ? 300 : "0px", boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={widget} onChange={handleChangewidget} aria-label="basic tabs example">
          <Tab label={t("sections")} {...a11yProps(0)} />
  
          <Tab label={t("global")} {...a11yProps(1)} />
          <Tab label={t("favorites")} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={widget} index={0}>
      <Box sx={{ overflow: 'auto' }}>
        <div
          className="order small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "New Order")}
        >
          <section className="drag_container">
            <div className="">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>{t("sections")}</h4>
                  <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 210 }}
    >
   
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search For a  Section"
        inputProps={{ 'aria-label': 'search google maps' }}
        name="search_in_sections"
        value={search_in_sections}
        onChange={e => setSearchInSection(e.target.value)}

      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    </Paper>
  
    
    <div  
    style={{maxHeight:500,overflowY:"auto"}}
    >
    {newOrder
   .filter(el => {
    if (search_in_sections === "") {
      return true; // Include all elements when search_in_sections is empty
    }
    return el.section_name.toLowerCase().includes(search_in_sections.toLowerCase());
  })
    .map((task) => (
                     <Card sx={{ maxWidth: 345 }}
                     key={task.name}
                     id={task.id}
                     draggable
                     onDragStart={(e) => onDragStart(e)}
                     onDragEnd={(e) => onDragEnd(e)}
                     >
                     <CardActionArea>
                       <CardMedia
                         component="img"
                         height="110"
                         image={task.section_image}
                         alt={task.section_name}
                       />
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                           {task.section_name}
                         </Typography>
                         <LinearProgressWithLabel value={task.progress} />
                          <p>{task.lastUpdate}</p>
                         <Button onClick={() =>handleOpenVideo(task.video_url,
                          task.section_name
                          )}>{t("watchVideos")}</Button>              
                       </CardContent>
                     </CardActionArea>
                   </Card>
                   
                  ))}
    </div>
                     
 
                
                </div>
              </div>
            </div>
          </section>
        </div>

        <div  onClick={togglePopupWindow}>
        <LaunchIcon 
        color="primary"
        />
      </div>
   
     
      {isPopupWindowOpen && (
        <PortalShowUp closePopupWindow={closePopupWindow}>
               <iframe
   srcDoc={`
   <html>
   <style>${component_to_show_up[0]?.ch_css}</style>
     <body>${  component_to_show_up[0]?.ch_html
 
    
    }</body>
     <script>${component_to_show_up[0]?.ch_js}</script>                     
   </html>
 `}
   title="output"
   sandbox="allow-scripts"
   frameBorder="none"
   width="100%"
   height="100%"     
 />
        </PortalShowUp>
      )}

        </Box>
      </TabPanel>

      <TabPanel value={widget} index={1}>
      <CommingSoon />
      </TabPanel>

      <TabPanel value={widget} index={2}>
       
      <CommingSoon />
      </TabPanel>
    </Box>

  
      </Drawer>

      {/* video modal of section */}
      <Modal
        open={open_video}
        onClose={handleCloseVideo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleVideo}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {section_video_name}

            <IconButton
          aria-label="close"
          onClick={handleCloseVideo}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> 
        
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZS9RBjRNGWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Typography>
        </Box>
      </Modal>


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography 
        >
       

         <div
        

          className="done small-box"
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "Completed")}
        >
          <section className="drag_container">
            <div
                    style={{background:"white",height:"100vh ",width: show ?"75vw " : "90vw"}}

            >
              <div className="drag_column">
                <div className="drag_row">
                  <h4>{t("dragHere")}</h4>
                
                 



<DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters
                
                .filter(el => el.status!=="New Order").map((task, index) => {
                  return (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                         
                         <div
                      className="card"
                     
                      key={task.name}
                      id={task.id}
                      draggable
                      onDragStart={(e) => onDragStart(e)}
                      onDragEnd={(e) => onDragEnd(e)}
                    >
                     
                        <Card variant="outlined">
                       
                        <SettingsIcon 
                        color="primary"
                        style={{cursor:"pointer"}}
                        onClick={() =>handleOpen(
                          task.section_name,
                          task.type,
                          task.id,
                          task.data_team,
                          task.global_style,
                          task.hasSlider,
                          task
                          )}
                        />

<DeleteIcon color="error"
onClick={() => deleteSection(task.id)}
style={{cursor:"pointer"}}
/>
<ExportOption 
data={characters}
history={history}
indexInitHistory={indexInitHistory}

id={task.id}
/>




<iframe
 style={{
 width: show ?"75vw " : "90vw"
 ,backgroundColor:"white",height:"90vh"}}

   srcDoc={`
   <html>
   <style>${task.section_css}</style>
     <body>${task.section_data
     
    }</body>
     <script>${task.js_data}</script>                     
   </html>
 `}
   title="output"
   sandbox="allow-scripts"
   frameBorder="none"
   width="100%"
    
 />

   
            
                        </Card>
                           
                    </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                
              </ul>
            )}
          </Droppable>
        </DragDropContext>
<Modal
        keepMounted
        open={open}
        onClose={handleClose}
        style={{width:"60% !important"}}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {section_name}
            <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
         
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          
            
              <p>{encourgmentMessage}</p> 
            {type ==="Team" && <>
            
            <>

<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={t("content")} {...a11yProps(0)} />
          <Tab label={t("globalStyle")} {...a11yProps(1)} />
      
           <Tab label={t("advanced")} {...a11yProps(2)} />
           {/* <Tab label="dynamique" {...a11yProps(3)} /> */}
           <Tab label={t("translation")} {...a11yProps(3)} />
         
           <Tab label={t("history")} {...a11yProps(4)} />
           <Tab label={t("order")} {...a11yProps(5)} />
           <Tab label={t("howTo")} {...a11yProps(6)} />
            
         
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} 
      
      style={{maxHeight:"500px",overflowY: "auto"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelContentTeam-content"
          id="panelContentTeam-header"
        >
          <Typography>{t("contentCard")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography>
        
          {itemsData.map((itemParent, indexParent) => (
                
                <Accordion key={indexParent} expanded={expandedParent === `parent${indexParent}`} onChange={handleChangeParent(`parent${indexParent}`)}>
                     <AccordionSummary
                       expandIcon={<ExpandMoreIcon />}
                       aria-controls="panel1bh-content"
                       id="panel1bh-header"
                     >
                       <Typography sx={{ width: '33%', flexShrink: 0 }}>
                       {itemParent.content}
                       </Typography>
                       <Typography sx={{ color: 'text.secondary' }}
                       style={{marginLeft:"15%"}}
                       >
                       <DeleteForeverIcon 
                       color="error"
                       onClick={() =>deleteSectionContent(itemParent.id)}
                       />
                       <ContentCopyIcon 
                       color="primary"
                       onClick = {() =>copySection(itemParent.id)}
                       />
              
                       </Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                       <Typography>
                        {/* Entering in Children mode drag things */}
      
               {itemParent.children.map((item, index) => (
              <>
          
                       {/* Priority for title in team */}
      
                                    {/* Second Accordian  */}
                                    
                                    <Accordion key={index} expanded={expandedChildren === `children${index}`} onChange={handleChangeChildren(`children${index}`)}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                         {item.content}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                        <p style={{color:"white"}}> 
                          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                          Aliquam eget maximus est, id dignissim quam.est, id dignissim
                          </p>
              {item.type ==="title" && <>
           
      
              <Tabs value={valueTitle} onChange={handleChangeValueTitleTap} aria-label="basic tabs example">
          <Tab label={t("content")} {...a11yProps(0)} />
          <Tab label={t("style")} {...a11yProps(1)} />
     
         
        </Tabs> 
        <TabPanel value={valueTitle} index={0}  >
          
               <ContentTitleSingle 
               data={
                [
                  {text:item.text,field:"title_text"},
                  {text:item.priority,field:"priority"}
                
              ] }
              type={item.type}
              id={itemParent.id}
              typeThinks={"text"}
              indexParent={indexParent}
               onTitleSingleSubmit={handleSingleTitleSubmit} 
               itemsData={itemsData}
               characters={characters}
               section_id={section_id}
               history={history}
               /> 
       
       
      </TabPanel>
      <TabPanel value={valueTitle} index={1} key={index} >
    
      <TitleSingleStyle 
           data={
            [
              {color:item.color,field:"title_color"},
              {hover_color:item.hover_color,field:"title_hover_color"},
              {font_family:item.font_family,field:"title_font_family"},
              {font_size:item.font_size,field:"title_font_size"},
              {padding_top:item.padding_top,field:"title_padding_top"},
              {padding_bottom:item.padding_bottom,field:"title_padding_bottom"},
              {padding_left:item.padding_left,field:"title_padding_left"},
              {padding_right:item.padding_right,field:"title_padding_right"},

              {margin_top:item.margin_top,field:"title_margin_top"},
              {margin_bottom:item.margin_bottom,field:"title_margin_bottom"},
              {margin_left:item.margin_left,field:"title_margin_left"},
              {margin_right:item.margin_right,field:"title_margin_right"},
              {text_align:item.text_align,field:"text_align"},

              

            
          ] }
          type={item.type}
          id={itemParent.id}
          typeThinks={"text"}
          indexParent={indexParent}
           onTitleSingleSubmit={handleSingleTitleSubmit} 
           itemsData={itemsData}
           characters={characters}
           section_id={section_id}
           history={history}
      
      />




        </TabPanel>         
                  
        
              </>}
              
              {item.type ==="description" && <>
              <Tabs value={valueDescription} onChange={handleChangeValueDescription} aria-label="basic tabs example">
          <Tab label={t("content")} {...a11yProps(0)} />
          <Tab label={t("style")} {...a11yProps(1)} />

        </Tabs>
        <TabPanel value={valueDescription} index={0}  >
        <p style={{textAlign:"left"}}>{t("descriptionContent")}</p>
        <InputElement  
                values={item.text}
                onFormSubmit={handleFormSubmit}
                field_name={"description_text"}
          /> 

        </TabPanel> 
            
        <TabPanel value={valueDescription} index={1} key={index}  >
          <DescriptionSingleStyle 
                  data={
                    [
                      {color:item.color,field:"description_text_color"},
                      {hover_color:item.hover_color,field:"description_hover_color"},
                      {font_family:item.font_family,field:"title_font_family"},
                      {font_size:item.font_size,field:"title_font_size"},
                      {padding_top:item.padding_top,field:"title_padding_top"},
                      {padding_bottom:item.padding_bottom,field:"title_padding_bottom"},
                      {padding_left:item.padding_left,field:"title_padding_left"},
                      {padding_right:item.padding_right,field:"title_padding_right"},
        
                      {margin_top:item.margin_top,field:"title_margin_top"},
                      {margin_bottom:item.margin_bottom,field:"title_margin_bottom"},
                      {margin_left:item.margin_left,field:"title_margin_left"},
                      {margin_right:item.margin_right,field:"title_margin_right"},
                      {text_align:item.text_align,field:"text_align"},
        
                      
        
                    
                  ] }
                  type={item.type}
                  id={itemParent.id}
                  typeThinks={"text"}
                  indexParent={indexParent}
                   onTitleSingleSubmit={handleSingleTitleSubmit} 
                   itemsData={itemsData}
                   characters={characters}
                   section_id={section_id}
                   history={history}
              
          />
          
        </TabPanel>        

       
            
              </>}
              
              {item.type ==="card" && <>

        
              <CardSingleStyle 
           data={
            [
              {color:item.color,field:"title_color"},
              {hover_color:item.hover_color,field:"title_hover_color"},
              {isPaddingSHowing:item.isPaddingSHowing},
              {padding_top:item.padding_top,field:"title_padding_top"},
              {padding_bottom:item.padding_bottom,field:"title_padding_bottom"},
              {padding_left:item.padding_left,field:"title_padding_left"},
              {padding_right:item.padding_right,field:"title_padding_right"},
              {isMarginShowing:item.isMarginShowing},
              {margin_top:item.margin_top,field:"title_margin_top"},
              {margin_bottom:item.margin_bottom,field:"title_margin_bottom"},
              {margin_left:item.margin_left,field:"title_margin_left"},
              {margin_right:item.margin_right,field:"title_margin_right"},
     
              {border_top_left_radius:item.border_top_left_radius,field:"Image_border_top_left_radius"},
              {border_top_right_radius:item.border_top_right_radius,field:"Image_border_top_right_radius"},
              {border_bottom_right_radius:item.border_bottom_right_radius,field:"Image_border_bottom_right_radius"},
              {border_bottom_left_radius:item.border_bottom_left_radius,field:"Image_border_bottom_left_radius"},

              {border_card_top:item.border_card_top,field:"border_card_top"},
              {border_card_bottom:item.border_card_bottom,field:"border_card_bottom"},
              {border_card_left:item.border_card_left,field:"border_card_left"},
              {border_card_right:item.border_card_right,field:"border_card_right"},

              
              
            
          ] }
          type={item.type}
          id={itemParent.id}
          typeThinks={"text"}
          indexParent={indexParent}
           onTitleSingleSubmit={handleSingleTitleSubmit} 
           itemsData={itemsData}
           characters={characters}
           section_id={section_id}
           history={history}
      
      />
      
           
           </>}
                   {item.type==="image" && <>

                   <Tabs value={valueImage} onChange={handleChangeValueImage} aria-label="basic tabs example">
          <Tab label={t("content")} {...a11yProps(0)} />
          <Tab label={t("style")} {...a11yProps(1)} />

          
         
        </Tabs>

        <TabPanel value={valueImage} index={0}  >
        <div 
                 
                   > 
                    <FilePond
        files={files}
        allowReorder={true}
        onupdatefiles={setFiles}
        onpreparefile={async(file, output) => {
       
          setLogoContent(await blobToBase64(output))
         
          // const img = document.createElement("img");
          // img.src = await blobToDataUrl(output);
          // document.body.appendChild(img);
        }}
        imageResizeTargetWidth={200}
        imageResizeTargetHeight={144}
        imageResizeUpscale={false}
        imageResizeMode={"contain"}
        imageEditEditor={create({
          cropMinImageWidth: 128,
          cropMinImageHeight: 128
        })}
      />
               
                 
                   </div>
        </TabPanel>
        <TabPanel value={valueImage} index={1}  >
       
        <ImageSingleStyle 
           data={
            [
              {border_top_left_radius:item.border_top_left_radius,field:"Image_border_top_left_radius"},
             
              {border_top_right_radius:item.border_top_right_radius,field:"Image_border_top_right_radius"},
              
          
              {border_bottom_right_radius:item.border_bottom_right_radius,field:"Image_border_bottom_right_radius"},
             
             
              {border_bottom_left_radius:item.border_bottom_left_radius,field:"Image_border_bottom_left_radius"},
              
              {width:item.width,field:"Image_width"},
              
              {height:item.height,field:"Image_height"},
        
              {margin_top:item.margin_top,field:"title_margin_top"},
              {margin_bottom:item.margin_bottom,field:"title_margin_bottom"},
              {margin_left:item.margin_left,field:"title_margin_left"},
              {margin_right:item.margin_right,field:"title_margin_right"},
     
              {background_img:item.background_img,field:"ImageBackground"},
             
              {widthBackground:item.widthBackground,field:"ImageBackgroundWidth"},

              {heightBackground:item.heightBackground,field:"ImageBackgroundHeight"}, 
          ] }
          type={item.type}
          id={itemParent.id}
          typeThinks={"text"}
          indexParent={indexParent}
           onTitleSingleSubmit={handleSingleTitleSubmit} 
           itemsData={itemsData}
           characters={characters}
           section_id={section_id}
           history={history}
      
      />
     

        </TabPanel>
 
                    
                   
                   </>}   
              
                   {item.type === "sociallinks" && 
                   <>
                   <Grid container spacing={2}>
                   <Grid item xs={6}>
                   <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t("socialMedia")}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectSocialMedia}
                  label="Social Media"
                  onChange={handleChangeSocialMediaContent}
                >
                  <MenuItem value={"Instagram"}>{t("instagram")}</MenuItem>
                  <MenuItem value={"YouTube"}>{t("youtube")}</MenuItem>
                  <MenuItem value={"Facebook"}>{t("facebook")}</MenuItem>
              
                  <MenuItem value={"Twitter"}>{t("twitter")}</MenuItem>
                  <MenuItem value={"TikTok"}>{t("tiktok")}</MenuItem>
                  <MenuItem value={"Pinterest"}>{t("printest")}</MenuItem>
              
                  <MenuItem value={"Snapchat"}>{t("snapchat")}</MenuItem>
                  <MenuItem value={"LinkedIn"}>{t("linkedin")}</MenuItem>
                  <MenuItem value={"GooglePlus"}>{t("googlePlus")}</MenuItem>
                  <MenuItem value={"Behance"}>{t("behance")}</MenuItem>
                  <MenuItem value={"Gmail"}>{t("gmail")}</MenuItem>
                  <MenuItem value={"goArrow"}>{t("goArrow")}</MenuItem>
                </Select>
                
              </FormControl>
                   </Grid>
              
                   <Grid item xs={6}>
                    
                   <TextField id="outlined-basic"
                          fullWidth
                          
                          label="url" 
                          name="url_social_media_adder"
                          value={url_social_media_adder}
                          onChange={e => setUrlSocialMediaAdder(e.target.value)}
              
                          variant="outlined" />  
                            
                   </Grid>
              
              
              
                   </Grid>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained"
                    style={{marginTop:"2%"}}
                    onClick = {() =>handleChangeData(item.type,itemParent.id,
                      "text",indexParent,"adder"
                      
                      )}
                   
                    >{t("add")}</Button>
                     
                    </div>
                    {item.social_media_data
                    .filter(el => el!=="")
                    .map((el,i) => (
                      <>
                       <Card sx={{ minWidth: 275 }} key={i}>
                    <CardContent>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {el.name}
                      </Typography>
                      <Typography variant="h5" component="div">
                      {el.url}
                      </Typography>
                    
                    
                    </CardContent>
               
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                      <DeleteForeverIcon 
                      color="error"
                      style={{cursor:"pointer"}}
                      onClick={() =>handleDelete(i,itemParent.id,
                        indexParent
                        )}
                      />
                      
              <EditIcon
              onClick={() =>handleOpenContent (el.name,el.url,i,itemParent.id,
                indexParent,el
                )}
              style={{cursor:"pointer"}}
              color="primary"/>
             
                      </div>
                      
              
                  </Card>
              
              
                      </>
                    ))}
              
                   </>}   
              
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
              
                             
                
              </>
              
               ))}
                      
               
           
            
               
                     
                       </Typography>
                     </AccordionDetails>
                   </Accordion>
                                 
                                
                            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
{/* accordion for slider functionnality */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelslider-content"
          id="panelslider-header"
        >
          <Typography>{t("slider")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={2}>


   {/* show dots  */}
   <Grid item xs={12}>
              <FormControlLabel control={<Switch 
              checked={hasSlider}
              onChange={e => setHasSlider(e.target.checked)}
              name
              />} label={t("showSlider")} />
               
            </Grid>

          {/* items Per 576 */}
          <Grid item xs={4}>
            <TextField id="outlined-basic" label={t("item576Dimensional")}
          type="number"
          variant="outlined"
          fullWidth
          defaultValue={0}
          name="item576"
          value={item576}
          onChange={e => setItem576(e.target.value)}
          />


            </Grid>
          {/* items Per 768 */}
            <Grid item xs={4}>
            <TextField id="outlined-basic" label={t("item768Dimensional")}
          type="number"
          variant="outlined"
          fullWidth
          defaultValue={0}
          name="item768"
          value={item768}
          onChange={e => setItem768(e.target.value)}
          />
        
            </Grid>
   {/* items Per 1200 */}
   <Grid item xs={4}>
            <TextField id="outlined-basic" label={t("item1200Dimensional")}
          type="number"
          variant="outlined"
          fullWidth
          defaultValue={0}
          name="item1200"
          value={item1200}
          onChange={e => setItem1200(e.target.value)}
          />
       
            </Grid>
            {/* auto play  */}
            <Grid item xs={3}>
              <FormControlLabel control={<Switch 
                 checked={autoplay}
                 onChange={e => setAutoPlay(e.target.checked)}
              />} label={t("autoPlay")} />
             
            </Grid>
            {/* show dots  */}
            <Grid item xs={3}>
              <FormControlLabel control={<Switch 
              checked={showDots}
              onChange={e => setShowDots(e.target.checked)}
              
              />} label={t("showDots")} />
               
            </Grid>
          {/* show arrows  */}
           <Grid item xs={3}>
              <FormControlLabel control={<Switch 
                checked={showArrows}
                onChange={e => setShowArrows(e.target.checked)}
              />} label={t("showArrow")} />
               
            </Grid>
          {/* mouse dragged  */}
           <Grid item xs={3}>
              <FormControlLabel control={<Switch 
                 checked={mouseDrag}
                 onChange={e => setMouseDrag(e.target.checked)}
              />} label={t("mouseDragged")} />
                 
            </Grid>


          </Grid>
        
          <div 
             style={{display:"flex",justifyContent:"center",marginTop:"2%"}}
          >
<Button
      onClick={() => updateTeamToSlider()}
      
       variant="contained">{t("update")}</Button>
          </div>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
    
{/* accordion for title text */}

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelslider-content"
          id="panelslider-header"
        >
          <Typography>{t("title")} </Typography>
        </AccordionSummary>
        <AccordionDetails>
         
          <p style={{color:"white"}}> 
                          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                          Aliquam eget maximus est, id dignissim quam.est, id dignissim
                          </p>
          
           
      
              <Tabs value={valueTitleTap} onChange={handleChangeFunctionalityTapTitle} aria-label="basic tabs example">
          <Tab label={t("content")} {...a11yProps(0)} />
          <Tab label={t("style")} {...a11yProps(1)} />
 
         
        </Tabs> 

        <TabPanel value={valueTitleTap} index={0}  >
          <p style={{textAlign:"left"}}>{t("titleText")}</p>      
          <InputElement  
                values={titleInOpen.text}
                onFormSubmit={handleFormSubmit}
                field_name={"title_text"}
          />         
             
 
      </TabPanel>
      <TabPanel value={valueTitleTap} index={1}  >
      <TitleHeaderAllStyle 
           data={
            [
              {color:titleInOpen.color,field:"title_color"},
             
              {hover_color:titleInOpen.hover_color,field:"title_hover_color"},
              
          
              {font_family:titleInOpen.font_family,field:"title_font_family"},
             
             
              {font_size:titleInOpen.font_size,field:"title_font_size"},
              
              {padding_top:titleInOpen.padding_top,field:"title_padding_top"},
              
              {padding_bottom:titleInOpen.padding_bottom,field:"title_padding_bottom"},
        
              {padding_left:titleInOpen.padding_left,field:"title_padding_left"},
              
              {padding_right:titleInOpen.padding_right,field:"title_padding_right"},
             
              {margin_top:titleInOpen.margin_top,field:"title_margin_top"},
              
              {margin_bottom:titleInOpen.margin_bottom,field:"title_margin_bottom"},
     
              {margin_left:titleInOpen.margin_left,field:"title_margin_left"},
             
              {margin_right:titleInOpen.margin_right,field:"title_margin_right"},

              {text_align:titleInOpen.text_align,field:"text_align"}, 
          ] }
         
          typeThinks={"text"}
       
           onTitleSingleSubmit={handleSingleTitleSubmit} 
           itemsData={itemsData}
           characters={characters}
           section_id={section_id}
           history={history}
           hasSlider={hasSlider}
      />


        </TabPanel>         
       
        
          
        
        </AccordionDetails>
      </Accordion>

{/* accordion for description text */}
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelslider-content"
          id="panelslider-header"
        >
          <Typography>{t("description")} </Typography>
        </AccordionSummary>
        <AccordionDetails>
         
          <p style={{color:"white"}}> 
                          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                          Aliquam eget maximus est, id dignissim quam.est, id dignissim
                          </p>
          
           
      
              <Tabs value={valueTapDescription} onChange={handleChangeDescriptionTap} aria-label="basic tabs example">
          <Tab label={t("content")} {...a11yProps(0)} />
          <Tab label={t("style")} {...a11yProps(1)} />

         
        </Tabs> 

        <TabPanel value={valueTapDescription} index={0}  >
          <p style={{textAlign:"left"}}>{t("descriptionContent")}</p>   
          <InputElement  
                values={descriptionInOpen.text}
                onFormSubmit={handleFormSubmit}
                field_name={"title_text"}
          />               
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid033YizSm8tkDauo2wVwM3VyyuujYhnCZpJ75thC1prWc3YE2canRfQsGA3ErqzuRSAl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueDescriptionContent")} 
        </FormHelperText>
          </a> 
      </TabPanel>

      <TabPanel value={valueTapDescription} index={1}  >
      <DescriptionHeaderAllStyle 
           data={
            [
              {color:descriptionInOpen.color,field:"title_color"},
             
              {hover_color:descriptionInOpen.hover_color,field:"title_hover_color"},
              
          
              {font_family:descriptionInOpen.font_family,field:"title_font_family"},
             
             
              {font_size:descriptionInOpen.font_size,field:"title_font_size"},
              
              {padding_top:descriptionInOpen.padding_top,field:"title_padding_top"},
              
              {padding_bottom:descriptionInOpen.padding_bottom,field:"title_padding_bottom"},
        
              {padding_left:descriptionInOpen.padding_left,field:"title_padding_left"},
              
              {padding_right:descriptionInOpen.padding_right,field:"title_padding_right"},
             
              {margin_top:descriptionInOpen.margin_top,field:"title_margin_top"},
              
              {margin_bottom:descriptionInOpen.margin_bottom,field:"title_margin_bottom"},
     
              {margin_left:descriptionInOpen.margin_left,field:"title_margin_left"},
             
              {margin_right:descriptionInOpen.margin_right,field:"title_margin_right"},

              {text_align:descriptionInOpen.text_align,field:"text_align"}, 
          ] }
         
          typeThinks={"text"}
       
           onTitleSingleSubmit={handleSingleTitleSubmit} 
           itemsData={itemsData}
           characters={characters}
           section_id={section_id}
           history={history}
           hasSlider={hasSlider}
      />

        </TabPanel>  

        </AccordionDetails>
      </Accordion>




     {/* social icon modal */}
      <Modal
        open={opencontent}
        onClose={handleCloseContent}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
 
      >
        <Box sx={style}
         style={{maxHeight:"700px",overflowY:"auto"}}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {url_edit}
           <IconButton
          aria-label="close"
          onClick={handleCloseContent}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}
          >
          <Grid container spacing={2}>
           
     <Grid item xs={6}>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{t("socialMedia")}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectSocialMediaEdit}
    label="Social Media"
    onChange={handleChangeSocialMediaEdit}
  >
    <MenuItem value={"Instagram"}>{t("instagram")}</MenuItem>
    <MenuItem value={"YouTube"}>{t("youtube")}</MenuItem>
    <MenuItem value={"Facebook"}>{t("facebook")}</MenuItem>

    <MenuItem value={"Twitter"}>{t("twitter")}</MenuItem>
    <MenuItem value={"TikTok"}>{t("tiktok")}</MenuItem>
    <MenuItem value={"Pinterest"}>{t("printest")}</MenuItem>

    <MenuItem value={"Snapchat"}>{t("snapchat")}</MenuItem>
    <MenuItem value={"LinkedIn"}>{t("linkedin")}</MenuItem>
    <MenuItem value={"GooglePlus"}>{t("googlePlus")}</MenuItem>
    <MenuItem value={"Behance"}>{t("behance")}</MenuItem>
    <MenuItem value={"Gmail"}>{t("gmail")}</MenuItem>


  </Select>
  <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid023rdrhDp6RvyTX8syjezpkNnLg4XHkEKTYKwJ3jo75NMj4zKWSMPNGJZ3CkHEkTZul&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueSocialMediaSelect")}
        </FormHelperText>
          </a> 
</FormControl>
     </Grid>

     <Grid item xs={6}>
      <p>{t("url")}</p>
     <TextField id="outlined-basic"
            fullWidth
            name="url_edit"
            value={url_edit}
            onChange={e => setUrlEdit(e.target.value)}
            label={dataForm.url}
         
            variant="outlined" />  
        <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02E2hVRUHWFhhe5JLBiVzf14fXcyW2Y9fyZjCHvCaMENBjvy5Mjpdt1evCr77NdVNEl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueSocialMediaUrl")}
        </FormHelperText>
          </a>             
     </Grid>

  {/* Font size  icon part social media team  */}
  <Grid item xs={12}>
    <p>{t("fontSize")}</p>
    <ComponentwithSelectAndInput 
            value={dataForm.font_size_icon}
             onFormSubmit={handleFormSubmit}
             field_name={"fontsizeIcon"}
            />
       <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0MaQwjkXGkNeQFmWdfTqQyB5G7S2969pYUgRLX185EdJiRH7rAHxjrpCaPAhDXefJl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueSocialMediaFontSize")}
        </FormHelperText>
          </a>          
     </Grid>   

  {/*   icon  color part social media team  */}
  <Grid item xs={6}>
    <p>{t("iconColor")}</p>
    <InputElementTypeColor 
       values={dataForm.color_icon}
       onFormSubmit={handleFormSubmit}
       field_name={"title_color"}
      />
          <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0zTBg22tfnFowszh9f2n5esCv139vtpTyCAW1iBkeJ9WwD7i1q41SgBiLE17gR3eJl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueSocialMediaIconColor")}
        </FormHelperText>
          </a> 
     </Grid>        


  {/*   icon  hover color part social media team  */}
  <Grid item xs={6}>
  <p>{t("iconHoverColor")}</p>
  <InputElementTypeColor 
       values={dataForm.color_icon_hover}
       onFormSubmit={handleFormSubmit}
       field_name={"title_hover_color"}
      />   
    <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02capNf2VzG8uEc1zacsCt9VUNwDEJzAzeF73gYXKc2etHKJp7SmFU8FxVp3AV7mFFl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueSocialMediaIconHoverColor")}
        </FormHelperText>
          </a>          
     </Grid> 

       {/*  background icon   color part social media team  */}
  <Grid item xs={6}>
  <p>{t("backgroundIconColor")}</p>
  <InputElementTypeColor 
       values={dataForm.backgroundcolorContainer}
       onFormSubmit={handleFormSubmit}
       field_name={"backgroundcolorContainer"}
      />  
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid027CNjDzMPCSogWn5juNFhTLCTkLVC6ie1mQkeepkb9qKZsxDUCeNS4cHBYeZQwVEml&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueSocialMediabackgroundIconColor")}
        </FormHelperText>
          </a>             
     </Grid>

 {/*  background icon hover color part social media team  */}
 <Grid item xs={6}>
 <p>{t("backgroundIconHoverColor")}</p>
 <InputElementTypeColor 
       values={""}
       onFormSubmit={handleFormSubmit}
       field_name={"background_color_hover"}
      />  
   <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0THeXnSdiVii6wJLPcMdx8WbMsZHT6LFGoyEns1t2SEi9SHuJ5Mor7t44UHGgf2SYl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueSocialMediabackgroundIconHoverColor")}
        </FormHelperText>
          </a>                
     </Grid>




     </Grid>

 {/*  border radius part social media team  */}
 <Grid container spacing={2}>
 <Grid item xs={2}>
    <p>{t("borderRadius")}</p>            
     </Grid>
 {/*  border radius top left part social media team  */}
     <Grid item xs={2}>
      <p>{t("topLeft")}</p>
      <ComponentwithSelectAndInput 
            value={dataForm.borderRadiusTopLeft}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_top_left_radius"}
            />
       <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02PkssZDc8NWHyennZm87WfG125V5cvx27yk5KawQ3cnBsYM6B1Tm2ZtueAfF4boKYl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueBorderRadiusTopLeft")}
        </FormHelperText>
          </a>    
     </Grid>
      {/*  border radius top right part social media team  */}
     <Grid item xs={2}>
      <p>{t("topRight")}</p>
      <ComponentwithSelectAndInput 
            value={dataForm.borderRadiusTopRight}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_top_right_radius"}
            />
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02S4swh8JhKUjH3Rbfbjdh7fynrtosDSRD2mHBdbi7eSNzeucbmsRDrZqb8SQ3YKx8l&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageBorderRadiusTopRight")}
        </FormHelperText>
          </a>          
     </Grid>
      {/*  border radius bottom left part social media team  */}
     <Grid item xs={2}>
      <p>{t("bottomLeft")}</p>
      <ComponentwithSelectAndInput 
            value={dataForm.borderRadiusBottomLeft}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_bottom_left_radius"}
            />
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0D9hV83iv8rEZNcqM99d4yHyhTLm6BKwmpFn1DioVSfMMPwocNTKfPi1Gdugri4Sfl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueImageBorderRasdiusBottomLeft")}
        </FormHelperText>
          </a>      
     </Grid>
    {/*  border radius bottom right part social media team  */}

     <Grid item xs={2}>
      <p>{t("bottomRight")}</p>
      <ComponentwithSelectAndInput 
            value={dataForm.borderRadiusBottomRight}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_bottom_right_radius"}
            />
          <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0gqdfq3ThyFuhUVSaL6dRPPU8SMhZrRqBzMm2jgExcghstTfRURzfLS2q7hWcpuKUl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
            >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageBorderRadiusBottomRight")}
        </FormHelperText>
          </a>       
     </Grid>
 </Grid>


 <Grid container spacing={2}>
     <Grid item xs={6}>
      {t("width")}
      <ComponentwithSelectAndInput 
            value={dataForm.widthIcon}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_width"}
            />
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02WL8YMy2T9Zzy9TPC1owzaSnWsjvBNac5mKGaLeXtWCLzePjCJUKxVPhSufuorRRdl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueSocialMediaWidth")}
        </FormHelperText>
          </a>         
     </Grid>

     <Grid item xs={6}>
      <p>{t("height")}</p>
      <ComponentwithSelectAndInput 
            value={dataForm.heightIcon}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_height"}
            />
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0289kAJk17tFQxHHVTQwHLA6mCkzxwKEr7xeRv6dTUR21iBZbtoWSM6xYFgRRUohW3l&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueSocialMediaHeight")}
        </FormHelperText>
          </a>          
     </Grid>
     
     </Grid>


 

      <div style={{display:"flex",justifyContent:"center"}}>
      <Button variant="contained"
      style={{marginTop:"2%"}}
      onClick = {() =>handleChangeData("sociallinks",itemParentId,
        "text",indexParentData,"editSocialMedia"
        
        )}
      >{t("edit")}</Button>

      </div>
          </Typography>
        </Box>
      </Modal>
      <ToastContainer />   




      </TabPanel>


      <TabPanel value={value} index={1} 
      
      >
      
      <div 
       style={{maxHeight:"400px",overflowY:"auto"}}
      >
    {/* accordion for title global  style global_style[0] */}
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="paneltitleStyleteam-content"
          id="paneltitleStyleteam-header"
        >
          <Typography>{t("titleStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TitleAllStyle 
           data={
            [
              {color:global_style[0].color,field:"title_color"},
             
              {hover_color:global_style[0].hover_color,field:"title_hover_color"},
              
          
              {font_family:global_style[0].font_family,field:"title_font_family"},
             
             
              {font_size:global_style[0].font_size,field:"title_font_size"},
              
              {padding_top:global_style[0].padding_top,field:"title_padding_top"},
              
              {padding_bottom:global_style[0].padding_bottom,field:"title_padding_bottom"},
        
              {padding_left:global_style[0].padding_left,field:"title_padding_left"},
              
              {padding_right:global_style[0].padding_right,field:"title_padding_right"},
             
              {margin_top:global_style[0].margin_top,field:"title_margin_top"},
              
              {margin_bottom:global_style[0].margin_bottom,field:"title_margin_bottom"},
     
              {margin_left:global_style[0].margin_left,field:"title_margin_left"},
             
              {margin_right:global_style[0].margin_right,field:"title_margin_right"},

              {text_align:global_style[0].text_align,field:"text_align"}, 
          ] }
         
          typeThinks={"text"}
       
           onTitleSingleSubmit={handleSingleTitleSubmit} 
           itemsData={itemsData}
           characters={characters}
           section_id={section_id}
           history={history}
           hasSlider={hasSlider}
      />
          </Typography>
        </AccordionDetails>
      </Accordion>

        {/* accordion for description global Style  */}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="paneldescriptionStyleteam-content"
          id="paneldescriptionStyleteam-header"
        >
          <Typography>{t("descriptionStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <p>{t("descriptionColor")}</p>
          <InputElementTypeColor 
       values={global_style[1].color}
       onFormSubmit={handleFormSubmit}
       field_name={"description_text_color"}
      />  
             <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0hZEzgG1qgKirEp1ChaUQQM6f7A8giv5apQgwpwbaiXU8t9JA4sXKaBAcX6tC4iT9l&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
               {t("reportIssueDescriptionColor")}
        </FormHelperText>
          </a>
          </Grid>
          <Grid item xs={6}>
          <p>{t("descriptionHoverColor")}</p>
          <InputElementTypeColor 
       values={global_style[1].hover_color}
       onFormSubmit={handleFormSubmit}
       field_name={"description_hover_color"}
      />  
    <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02TfpK2MwoXE1kYKL5ffPudGZYFp8nVHSJngtqtge8d2z93z6h3pFNVVisMafxMrEKl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionHoverColor")}
        </FormHelperText>
          </a>
          </Grid>
        </Grid>
       


        
              
                

<Grid container spacing={2}>
             {/* font family title  team style */} 
          <Grid item xs={6}>
          <p>{t("fontFamily")}</p>
          <FontFamilySelect 
           values={global_style[1].font_family}
           onFormSubmit={handleFormSubmit}
           field_name={"title_font_family"}
          />
 <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid088erWhiSC6DzER7JWvnAF6jcoVDUGg53Wt86aqSk3xG8CSANeW9QN1cugx2bUtF2l&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
            {t('reportIssueDescriptionFontFamily')}
        </FormHelperText>
          </a>
        
          </Grid>
         
  {/* font size title team style */} 
          <Grid item xs={6}>
            <p>{t("fontSize")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].font_size}
             onFormSubmit={handleFormSubmit}
             field_name={"title_font_size"}
            />
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02ixiEnE9Yp3UmaddZNaL7TDq9K6BEhsRfHCJZLrt7gC8jWdZeTFdwJ61rPdkKaXEel&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionFontSize")}
        </FormHelperText>
          </a>
            </Grid>        
            </Grid>

  {/* padding title team style */} 
           <Grid container spacing={2}>
            <Grid item xs={2}>
                 {t("padding")}           
            </Grid>
             {/* padding top title team style */} 
            <Grid item xs={2}>
            <p>{t("top")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].padding_top}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_top"}
            />
           <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0FNZoPxfsmkcyb6XUvAeC9mViaUTGbLwMpaVT5xsyN7FKmuEbP4UycQU5dMBWHt8Al&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionPaddingTop")}
        </FormHelperText>
          </a>
            </Grid> 
 {/* padding bottom title team style */} 
            <Grid item xs={2}>
            <p>{t("bottom")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].padding_bottom}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_bottom"}
            />
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid032cfZxSYTCrJuWzXb1t6HFBM2u3nJyTv2nthDZEyiXrHQw9rs4zNCmJTmhgqwfoNsl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionPaddingBottom")}
        </FormHelperText>
          </a>
            </Grid>                
 {/* padding left title team style */} 
 <Grid item xs={2}>
            <p>{t("left")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].padding_left}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_left"}
            />
          <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0NSsLbPD9fAYZzC8GsKf3cXYXLtpgt523iyLg65idyEkTLWT3fdKmgQVVzSvbP6Pql&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionPaddingLeft")}
        </FormHelperText>
          </a>
            </Grid>

   {/* padding right title team style */} 
 <Grid item xs={2}>
            <p>{t("right")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].padding_right}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_right"}
            />
        <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02dzPzBBeXv2hAJd1k3whuvjgEaaf1MifeZeKLpT5yQUqndcYuVbZZgzSwUALAmzkbl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionPaddingRight")}
        </FormHelperText>
          </a>
            </Grid>          

           </Grid>

 {/* margin title team style */} 
 <Grid container spacing={2}>
            <Grid item xs={2}>
                 {t("margin")}           
            </Grid>
             {/* margin top title team style */} 
            <Grid item xs={2}>
            <p>{t("top")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].margin_top}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_top"}
            />
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0Wwqt1TivA2Z1dgk7aSBxUjigmyTaecmfz2R9ZHyNZeBEWuXQLzAjxPTTbkw2WUncl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionMarginTop")}
        </FormHelperText>
          </a>
            </Grid> 
 {/* margin bottom title team style */} 
            <Grid item xs={2}>
            <p>{t("bottom")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].margin_bottom}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_bottom"}
            />
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0HHk16GzSrLkkJHJ7773yMggYsjdG1a3UtjZwNoSS7TeoauoqJJNz791jVNt93buJl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionMarginBottom")}
        </FormHelperText>
          </a>
            </Grid>                
 {/* margin left title team style */} 
 <Grid item xs={2}>
            <p>{t("left")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].margin_left}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_left"}
            />
           <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid08hdn7ueNZNAxFDHiaH8ufT2Ck3oRWSwFAAxufDWNDChWGvjZymFe8WWFMH39rFEfl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionMarginLeft")}
        </FormHelperText>
          </a>
            </Grid>

   {/* margin right title team style */} 
 <Grid item xs={2}>
            <p>{t("right")}</p>
            <ComponentwithSelectAndInput 
            value={global_style[1].margin_right}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_right"}
            />
              <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02pQL35wLDoGj5ciCnaX8qay5zsyMM5bdTeq8dszNxNPAAKXtwCHVqF7Ab7yjhnCM8l&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionMarginRight")}
        </FormHelperText>
          </a>
            </Grid>          

           </Grid>

           <Grid container spacing={2} 
           style={{marginTop:"2%"}}
           >
           <Grid item xs={2}>
           <p>{t("textAlign")}</p>
           </Grid>
           <Grid item xs={6}>
           <AlignElement 
             values={global_style[1].text_align}
            onFormSubmit={handleFormSubmit}
            field_name={"text_align"}
           /> 
                <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid021NG64Xh8xxpe5v6Brr1xi9cBGiHea5H2VJU5eiUtc7wqbbKDG8pyacQ1nVZkUroZl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueDescriptionTextAlign")}
        </FormHelperText>
          </a>
           </Grid>
           </Grid>
          <div 
             style={{display:"flex",justifyContent:"center"}}
          >
<Button
       onClick={() => updateGlobalStyle("description")}
       variant="contained">{t("update")}</Button>
          </div>
          

          </Typography>
        </AccordionDetails>
      </Accordion>


  {/* accordion for Image team style */}
  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelimageStyleteam-content"
          id="panelimageStyleteam-header"
        >
          <Typography>{t("imageStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={2}>
            <Grid item xs={2}>
                <p>{t("borderRadius")}</p>        
            </Grid>
            {/* Border radius Top left Image Team */}
            <Grid item xs={2}>
            <p>{t("topLeft")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].border_top_left_radius}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_top_left_radius"}
            />
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid033c13N5RESUuPyPU8VGqgeZYQwu6t7QZXzSTMAXuDsQVud915GSDZ389kcm8wYAAol&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueBorderRadiusTopLeft")}
        </FormHelperText>
          </a>
            </Grid>

              {/* Border radius top right Image Team */}
              <Grid item xs={2}>
            <p>{t("topRight")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].border_top_right_radius}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_top_right_radius"}
            />
        <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0uhRq14YdoebjWeC4xPyuQFHDXWMAW7Fk75W7ZrXaeNQaGYqokdZX1PtSq2DhEpSAl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
            {t("reportIssueImageBorderRadiusTopRight")}
        </FormHelperText>
          </a>

            </Grid>

              {/* Border radius bottom right Image Team */}
              <Grid item xs={2}>
            <p>{t("bottomRight")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].border_bottom_right_radius}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_bottom_right_radius"}
            />
        <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0zs6rrRBK6LdRpt12DedFk5L6Ub7RXm2ahtwVHPLdGoqarVja2ULaro3WemYXs72Dl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageBorderRadiusBottomRight")}
        </FormHelperText>
          </a>

            </Grid>
          
              {/* Border radius bottom left Image Team */}
              <Grid item xs={2}>
            <p>{t("bottomLeft")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].border_bottom_left_radius}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_border_bottom_left_radius"}
            />
        <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0b674k6VzjJajrfa2XdrexoMs9WRXXaRC7SwNsSCTxtYx6GDXyhn5gRe7qVZksH3tl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageBorderRasdiusBottomLeft")}
        </FormHelperText>
          </a>

            </Grid>



        </Grid>       

        <Grid container spacing={2}>

  {/* Width  Image Team */}
  <Grid item xs={6}>
            <p>{t("width")}</p> 
            <ComponentwithSelectAndInput 
            value={global_style[2].width}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_width"}
            /> 
              <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02ahHBhkW37BpsWJPq9xrf6Tg6przx39wthkexiHGYReWkYSxfcDG3hE5JkhpLXT6Ll&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueImageWidth")}
        </FormHelperText>
          </a>
            </Grid>          
 {/* Height  Image Team */}
 <Grid item xs={6}>
            <p>{t("height")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].height}
             onFormSubmit={handleFormSubmit}
             field_name={"Image_height"}
            />
            
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid08TsftNYmaswQBdtrUtyBEQiSYTQqrJq3m5igAb9AFEPdjpRLu38DqXMeYWrkYMvrl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueImageHeight")}
        </FormHelperText>
          </a>
            </Grid>  


        </Grid>

 {/* Margin  Image Team */}
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <p>{t("margin")}</p>        
            </Grid>
            {/* margin Top  Image Team */}
            <Grid item xs={2}>
            <p>{t("top")} </p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].margin_top}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_top"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0MFC8N5gwMiZrdUvDLHRjoLc86xshB6FzwyScTeyNJUiuBRyHyemxqzioKRHxfLvjl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageMarginTop")}
        </FormHelperText>
          </a>
            </Grid>

              {/* Margin Bottom Image Team */}
              <Grid item xs={2}>
            <p>{t("bottom")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].margin_bottom}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_bottom"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0mFqftW4yvevhKxWigShatpcaVVV7cifMpW53wcjLK5sAryPLstoKoWZRQb8C7wWXl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageMarginBottom")}
        </FormHelperText>
          </a>

            </Grid>

              {/* Margin Left Image Team */}
              <Grid item xs={2}>
            <p>{t("left")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].margin_left}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_left"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0VVeDsCpgPFuZaodiQEoqdggV1KJs2db1gNG76C2MqhqiGEjXTKbAJZDfrrv5UhiTl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageMarginLeft")}
        </FormHelperText>
          </a>
            </Grid>
          
              {/* Margin Right Image Team */}
              <Grid item xs={2}>
            <p>{t("right")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[2].margin_right}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_right"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0KrpC49quvBWiJfRqYr9q1asbA274M1xzPMbvqha53yMpXZi1ZugHbAa1uCXdgCYhl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageMarginRight")}
        </FormHelperText>
          </a>
            </Grid>



        </Grid>
        <Grid container spacing={2}>

  {/* background color Image Team */}
  <Grid item xs={4}
  style={{marginTop:'2%'}}
  >
     <p>{t("backgroundColor")}</p>
           
           <InputElementTypeColor 
       values={global_style[2].background_img}
       onFormSubmit={handleFormSubmit}
       field_name={"ImageBackground"}
      />  
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02ZLyYoCiXdRUntsfFSmiUu6nyN5SUbyB7asMsipSYx54BSEc6VWYkZn195o3gVzAnl&id=100081746135007"
           target='_blank'
           
           rel="noreferrer">
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageBackgroundColor")}
        </FormHelperText>
          </a>
            </Grid> 
       {/* background color width Image Team */}
  <Grid item xs={4}
  style={{marginTop:'2%'}}
  >
      <p>{t("backgroundWidth")}</p>
               <ComponentwithSelectAndInput 
            value={global_style[2].widthBackground}
             onFormSubmit={handleFormSubmit}
             field_name={"ImageBackgroundWidth"}
            />
 <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0V7h2VEUswfxkAukAhUhn2tQPPUSrCigzEcpjNNeqUaRbFejTwSqjGvXi4yL1BwzJl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageBackgroundWidth")}
        </FormHelperText>
          </a>

            </Grid>       


{/* background color height Image Team */}
<Grid item xs={4}
  style={{marginTop:'2%'}}
  >
             <p>{t("backgroundHeight")}</p>
           <ComponentwithSelectAndInput 
            value={global_style[2].heightBackground}
             onFormSubmit={handleFormSubmit}
             field_name={"ImageBackgroundHeight"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0aRmnpCECiJhzfFkoxuo7ATsuMMwEKoZ1ye2xws2DnJVfEHE7h6xSQUEjLMeysNv3l&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueImageBackgroundHeight")}
        </FormHelperText>
          </a>
            </Grid>

        </Grid>
          {/* accordion thumbnail carousel team style */}
          <div style={{display:"flex",justifyContent:"center",
        marginTop:"2%",marginBottom:"2%"
        }}> 
  
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}
            style={{marginBottom:"9%"}}
            >Remove all images</button>
            <Grid container spacing={2}>
            {imageList.map((image, index) => (
              <div key={index} className="image-item"
         
              >
                  <Grid item xs={4}>
                  <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                  </Grid>
              
             
              </div>
            ))}
                </Grid>
          </div>
        )}
      </ImageUploading>
    
  
          </div>
       
          <div 
             style={{display:"flex",justifyContent:"center"}}
          >
<Button
       onClick={() => updateGlobalStyle("image")}
       variant="contained">{t("update")}</Button>
          </div>
          </Typography>
          
        </AccordionDetails>
      </Accordion>

      {hasSlider &&
       <>
       {/* accordion for arrow left team style */}
 <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelarrowleftStyleteam-content"
          id="panelarrowleftStyleteam-header"
        >
          <Typography>{t("arrowLeftStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={2}>
            {/* Icon Color Arrow left team section */}
            <Grid item xs={4}>
            <p>{t("iconColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].color}
       onFormSubmit={handleFormSubmit}
       field_name={"description_text_color"}
      />  
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0eWKcXwLwinaVTvhcX6DxFhsUiTLVChiPDsJ1fYFDHPngXUtsKucoNJ7mdRSzqPXZl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueSocialMediaIconColor")}
        </FormHelperText>
          </a>
          
            </Grid>
              {/* Icon  Color Arrow left team section */}
            <Grid item xs={4}>
            <p>{t("iconHoverColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].hover_color}
       onFormSubmit={handleFormSubmit}
       field_name={"description_hover_color"}
      />  
           <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid033VtKvj9rT4uy5qC85Y4GxgfUabk7yFZyeCdDB6xRKxZ958mrUG7ap1Sn528rtFQkl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
        {t("reportIssueSocialMediaIconHoverColor")}
        </FormHelperText>
          </a>
            </Grid>

            <Grid item xs={4}>
            <p>{t("backgroundIconColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].background_color}
       onFormSubmit={handleFormSubmit}
       field_name={"title_color"}
      />  
         <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0255Wk8kdpwjehdTLcxJYDW476QdS2fnwbWJN2MPA1Ms9XN51tyrxTeteRaUcHVDLTl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueBackgroundColorIcon")}
        </FormHelperText>
          </a>
 
            </Grid>

            <Grid item xs={6}>
            <p>{t("backgroundIconHoverColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].background_hover_color}
       onFormSubmit={handleFormSubmit}
       field_name={"title_hover_color"}
      /> 
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02fPYK314BXrBigU4B1G3hRqR9i9iRRg7CqGoy1eHNyCp5FhVNP2T4TXWoRmeToCLAl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueBacondIconHoverColor")}
        </FormHelperText>
          </a>
            </Grid>

            <Grid item xs={6}>
              {t("fontSize")}
              <ComponentwithSelectAndInput 
            value={global_style[5].font_size}
             onFormSubmit={handleFormSubmit}
             field_name={"title_font_size"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0p14wTE7VL4vcisjhxcFHAVGtqUZWBQacf6oGpGDRimrjP8cu43jBwRjXNaakbQntl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueFontSize")}
        </FormHelperText>
          </a>
            </Grid>

            <Grid item xs={6}>
              <p>{t("left")}</p>
              <ComponentwithSelectAndInput 
            value={global_style[5].left}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_top"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02Ev2ZLj1ab56a8GdRAPAtUdBHsuh3A7Faou1QHgovEr2uaCVgodHjwrcwtLgk9sQbl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueLeft")}
        </FormHelperText>
          </a>
            </Grid>

           
            
            <Grid item xs={6}>
              <p>{t("top")}</p>
              <ComponentwithSelectAndInput 
            value={global_style[5].top}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_bottom"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0QbofxUGRYuo19njpkchNvXgqi4qirrK4QAsdVC6PyKVQNmfRLiEjaEXoWcHKSSJBl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueTop")}
        </FormHelperText>
          </a>
            </Grid>

         

          </Grid>


<div 
             style={{display:"flex",justifyContent:"center",marginTop:"2%"}}
          >
<Button
        onClick={() => updateGlobalStyle("arrowLeft")}
       variant="contained">{t("update")}</Button>
          </div>

          </Typography>
        </AccordionDetails>
      </Accordion>


 {/* accordion for arrow right team style */}
 <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelarrowrightStyleteam-content"
          id="panelarrowrightStyleteam-header"
        >
          <Typography>{t("arrowRightStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        <Grid container spacing={2}>
            {/* Icon Color Arrow left team section */}
            <Grid item xs={4}>
              
            <p> {t("iconColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].color}
       onFormSubmit={handleFormSubmit}
       field_name={"description_text_color"}
      /> 
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02sJBhtfzvYZ8Pfnv48fMuumziReyms9GGvPfdg4YSYw6Fy8hH6svp8vbNaDDSDWcUl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueSocialMediaIconColor")}
        </FormHelperText>
          </a>
            </Grid>
              {/* Icon  Color Arrow left team section */}
            <Grid item xs={4}>
              
            <p> {t("iconHoverColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].hover_color}
       onFormSubmit={handleFormSubmit}
       field_name={"description_hover_color"}
      /> 
  <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0uw4YXTwdKLiJitpfn7tyaqMnCeaWZ2XjxR9KnD1Ru1cmJdWehPmidgq2Z9c3SNSl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
            {t("reportIssueSocialMediaIconHoverColor")}
          </FormHelperText>
          </a>
            </Grid>

            <Grid item xs={4}>
            <p>{t("backgroundIconColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].background_color }
       onFormSubmit={handleFormSubmit}
       field_name={"title_color"}
      /> 
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0Qx7qAAeWEEqz6SJaTpH8gSyrZmSpuSvWuYouJMqcBtQtpkxTw4Dw93N71Nx5HhMJl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
        {t("reportIssueSocialMediabackgroundIconColor")}
        </FormHelperText>
          </a>
            </Grid>

            <Grid item xs={6}>
            <p>{t("backgroundIconHoverColor")}</p>
            <InputElementTypeColor 
       values={global_style[5].background_hover_color }
       onFormSubmit={handleFormSubmit}
       field_name={"title_hover_color"}
      /> 
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid09egD442nTVxNYaKnmSJwG5XdmZs4Gx4qrMmLKjN8b3UJkhJEC38LMEoiaJLdaszLl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
        {t("reportIssueSocialMediabackgroundIconHoverColor")}
        </FormHelperText>
          </a>
            </Grid>

            <Grid item xs={6}>
              {t("fontSize")}
              <ComponentwithSelectAndInput 
            value={global_style[5].font_size}
             onFormSubmit={handleFormSubmit}
             field_name={"title_font_size"}
            />
    <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02eRqsoe984gqrzHLPybXfXDsR1nkZqa4MDU12piPnERPRmSkwUh1WXcxdQ8wTzXKYl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueFontSize")}
        </FormHelperText>
          </a>
            </Grid>

            <Grid item xs={6}>
              <p>{t("right")}</p>
              <ComponentwithSelectAndInput 
            value={global_style[5].left}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_top"}
            />
    <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0AMCDWUgGirMYcgkTTHVtk8q1mjgvTxiBFnjA7PrgSoY1EJ4LwXFw7iazjyzS9R4yl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueRight")}
        </FormHelperText>
          </a>
            </Grid>

           
            
            <Grid item xs={6}>
              <p>{t("top")}</p>
              <ComponentwithSelectAndInput 
            value={global_style[5].top}
             onFormSubmit={handleFormSubmit}
             field_name={"title_padding_bottom"}
            />
<a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02UXQ4FcEaqhyZHkU6dsermCo5n3odo71KJL1pBhffG6EiYSu2x5ETzaiv4ctJ4Yvsl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueTop")}
        </FormHelperText>
          </a>
            </Grid>

         

          </Grid>


<div 
             style={{display:"flex",justifyContent:"center",marginTop:"2%"}}
          >
<Button
        onClick={() => updateGlobalStyle("arrowRight")}
       variant="contained">{t("update")}</Button>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      </>}


      {/* accordion for background team style */}           

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelbackgroundStyleteam-content"
          id="panelbackgroundStyleteam-header"
        >
          <Typography>{t("backgroundStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Background color or Image  */}
            <div >
            <p>{t("backgroundImage")}</p>
            <FilePond
        files={files}
        allowReorder={true}
        onupdatefiles={setFiles}
        onpreparefile={async(file, output) => {
         
          // const img = document.createElement("img");
          // img.src = await blobToDataUrl(output);
          // document.body.appendChild(img);
        }}
        imageResizeTargetWidth={200}
        imageResizeTargetHeight={144}
        imageResizeUpscale={false}
        imageResizeMode={"contain"}
        imageEditEditor={create({
          cropMinImageWidth: 128,
          cropMinImageHeight: 128
        })}
      />
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid028a6gfwJrumUGXM6ZdE42QFASa8h9oGxyVngXNKhqpTbra38ThrtxBTGLYoRZfCQdl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueBackgroundImage")}
        </FormHelperText>
          </a>
            </div>
            <p>{t("backgroundImageColor")}</p>
            <InputElementTypeColor 
       values={global_style[4].backgroundContainercolor }
       onFormSubmit={handleFormSubmit}
       field_name={"title_color"}
      /> 
          <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0UaTUSWGSGWTCUBVKPZ1uEzhLp72ytK6HoTtJK6EYVYQYsNG94mbUfWMma9hk5zGKl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueBackgroundImageColor")}
        </FormHelperText>
          </a>
<div 
             style={{display:"flex",justifyContent:"center",marginTop:"2%"}}
          >
<Button
        onClick={() => updateGlobalStyle("background")}   
       variant="contained">{t("update")}</Button>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>


   {/* accordion for container team style */}           

   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelcontainerStyleteam-content"
          id="panelcontainerStyleteam-header"
        >
          <Typography>{t("containerStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            {/* Margin container Team  */}

          {/* Margin  Image Team */}
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <p>{t("margin")}</p>        
            </Grid>
            {/* margin Top  Image Team */}
            <Grid item xs={2}>
            <p>{t("top")} </p>  
            <ComponentwithSelectAndInput 
            value={global_style[3].container_margin_top}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_top"}
            />
  <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0ev8VRMWuwq8faUNZNquEudgrSPZhioQMJiTAiYuG92WLz46VgB6rRsmV8TvyupvVl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueMarginTop")}
        </FormHelperText>
          </a>
            </Grid>

              {/* Margin Bottom Image Team */}
              <Grid item xs={2}>
            <p>{t("bottom")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[3].container_margin_bottom}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_bottom"}
            />
  <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0fTN3U5jMctxA5jAPg1nFz6MjE9RAGMVk9iSTEMCrRyR5Znek397mm66JCzbCRrQSl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
          {t("reportIssueMarginBottom")}
        </FormHelperText>
          </a>

            </Grid>

              {/* Margin Left Image Team */}
              <Grid item xs={2}>
            <p>{t("left")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[3].container_margin_left}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_left"}
            />
 <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0Web5XSUXUQKH7ibGKNQ3WvMWaAmgNg7wcVM4nAccoZCSmT3q4cDNiBC8NMV8pfRnl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueMarginLeft")}
        </FormHelperText>
          </a>
            </Grid>
          
              {/* Margin Right Image Team */}
              <Grid item xs={2}>
            <p>{t("right")}</p>  
            <ComponentwithSelectAndInput 
            value={global_style[3].container_margin_right}
             onFormSubmit={handleFormSubmit}
             field_name={"title_margin_right"}
            />
            <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid026WBkMQcKZUavKzt61yZjvjhqspDBDoF7iNcKbifEkn456T8H8D38getjhT7wAizel&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueMarginRight")} 
        </FormHelperText>
          </a>


            </Grid>



        </Grid>


          <div 
             style={{display:"flex",justifyContent:"center",marginTop:"2%"}}
          >
<Button
 onClick={() => updateGlobalStyle("container")}       
       variant="contained">{t("update")}</Button>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

{/* accordion for card team style */} 
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelcardStyleteam-content"
          id="panelcardStyleteam-header"
        >
          <Typography>{t("cardStyle")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

      
      <CardAllStyle 
           data={
            [
              {color:global_style[7].color,field:"title_color"},
              {hover_color:global_style[7].hover_color,field:"title_hover_color"},
              {isPaddingSHowing:global_style[7].isPaddingSHowing},
              {padding_top:global_style[7].padding_top,field:"title_padding_top"},
              {padding_bottom:global_style[7].padding_bottom,field:"title_padding_bottom"},
              {padding_left:global_style[7].padding_left,field:"title_padding_left"},
              {padding_right:global_style[7].padding_right,field:"title_padding_right"},
              {isMarginShowing:global_style[7].isMarginShowing},
              {margin_top:global_style[7].margin_top,field:"title_margin_top"},
              {margin_bottom:global_style[7].margin_bottom,field:"title_margin_bottom"},
              {margin_left:global_style[7].margin_left,field:"title_margin_left"},
              {margin_right:global_style[7].margin_right,field:"title_margin_right"},
     
              {border_top_left_radius:global_style[7].border_top_left_radius,field:"Image_border_top_left_radius"},
              {border_top_right_radius:global_style[7].border_top_right_radius,field:"Image_border_top_right_radius"},
              {border_bottom_right_radius:global_style[7].border_bottom_right_radius,field:"Image_border_bottom_right_radius"},
              {border_bottom_left_radius:global_style[7].border_bottom_left_radius,field:"Image_border_bottom_left_radius"},

              {border_card_top:global_style[7].border_card_top,field:"border_card_top"},
              {border_card_bottom:global_style[7].border_card_bottom,field:"border_card_bottom"},
              {border_card_left:global_style[7].border_card_left,field:"border_card_left"},
              {border_card_right:global_style[7].border_card_right,field:"border_card_right"},

              
              
            
          ] }
          type={global_style[7].type}
          typeThinks={"text"}
           onTitleSingleSubmit={handleSingleTitleSubmit} 
           itemsData={itemsData}
           characters={characters}
           section_id={section_id}
           history={history}
           hasSlider={hasSlider}
      />
          </Typography>
        </AccordionDetails>
      </Accordion>

      </div>
    


      </TabPanel>


  {/* accordion for advanced team  */}    
      <TabPanel value={value} index={2 } style={{maxHeight:"500px",overflowY: "auto"}}>
          {/* accordion for show section in team on appareil */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelresponsiveshowUpteam-content"
          id="panelresponsiveshowUpteam-header"
        >
          <Typography>{t("responsive")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControlLabel control={<Switch 
               checked={checkDesktopDisplay}
               onChange={e => setCheckDesktopDisplay(e.target.checked )}
          />} label={t("showSectionInDesktop")} />
          <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0282KSGxgSkjgobwNUgwXvmcWrFf5repirsuaz2eXYro8efKdGEj95ifXmoAUaLABfl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueShowInDesktop")}
        </FormHelperText>
          </a>
          <FormControlLabel control={<Switch 
            checked={checkMobileDisplay}
            onChange={e => setCheckMobileDisplay(e.target.checked )}
          />} label={t("showSectionInMobile")} />
              <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid031ZBRSLdLXvysNFgoVEmquoSs4t5yAEyW1y9YvQReHzVzEK4odwrwBFxy1Yz1dUrTl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueShowInMobile")}
        </FormHelperText>
          </a>
          <FormControlLabel control={<Switch 
            checked={checkTabletDisplay}
            onChange={e => setCheckTabletDisplay(e.target.checked )}
          />} label={t("showSectionInTablet")} />
    <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0Q3b62gcugYg9U5tqXjJwwYUqXEiqfq1JAJGSQjSy58NYF52zUzHQriLt9nnNY7Bil&id=100081746135007&__cft__[0]=AZW4XQQEyoIASOyJHzOkrquuc7Tz1ZbiHPfCECVMi8yumxsMhdyHbB9mCUBSUFKeT1mb65xsGQdDnOiiHd5U4mypS9XR4577cthsTkaXQ2LF08KacsCrVQ2uZXYfyE5kAYM1ADZRyPnoxZsPvSrCQi594XpACqTfA0uEF0k4JO4YODmvZ4rkLWVPsyKkUIoFNO0&__tn__=%2CO%2CP-R"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueShowInTablet")}
        </FormHelperText>
          </a>
          <div 
             style={{display:"flex",justifyContent:"center",marginTop:"2%"}}
          >
<Button
       onClick={() => updateResponsive()}      
       variant="contained">{t("update")}</Button>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
        
       
        


      </TabPanel>


      <TabPanel  style={{maxHeight:"500px",overflowY: "auto"}} value={value} index={3}>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueTapTranslation} onChange={handleChangeTranslationTap} aria-label="basic tabs example">
          <Tab label={t("cardTitle")} {...a11yProps(0)} />
          <Tab label={t("cardDescription")} {...a11yProps(1)} />
          <Tab label={t("title")} {...a11yProps(2)} />
          <Tab label={t("description")} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={valueTapTranslation} index={0}>
            {/* Table card title of Translation */}
      <h4>Card Title </h4>  
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid078t6Sj6kvYmRtuPmX2Wko8zE16Nu4CsudwMX6uM5ECkXWGR37T6T4XkRxEAsySpGl&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueCardTitle")}
        </FormHelperText>
          </a>   
      <TranslatorDrager 
      myFunc={receivedData} 
      data={characters.filter(el => el.id === section_id)[0]?.data_team}
      />
      </TabPanel>
      <TabPanel value={valueTapTranslation} index={1}>
          {/* Table of Translation */}
      <h4>{t("cardDescription")} </h4>  
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid0jLfUCBkQr6Sp7T5bDn69Q5n2cwPDcMQn4MdyfrEZ95R1hzzFULFJqEbMobsstkw6l&id=100081746135007"
           target='_blank' 
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                {t("reportIssueCardDescription")}
        </FormHelperText>
          </a>    
      <CardDescriptionTranslator 
      myFunc={receivedDataCardDescription} 
      data={characters.filter(el => el.id === section_id)[0]?.data_team}
      />
      </TabPanel>
      <TabPanel value={valueTapTranslation} index={2}>
       
        <h4>{t("title")} </h4> 
        <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02DNNC4LNcPrsfW6nQZvNtxXrFVovRpqRDbhE11CBQtGs6hLgnLmNueSygSpPnEhvXl&id=100081746135007&__cft__[0]=AZWXN5nIsj6w9FJ008IrVQ2xI_ZaBTiGEFqy765hvdAqtKNlNH4Kzd8L3UpOb9XmUxgTgJcumbp24C9OCJL_G142inYTH7tnTrxl9a6WkDbhrrrkRbBBDNLgmjwl4N72iTKMRStTuJjvlI8G0gZLwIGl3X2v5Ne4ozToi9SVHUuY0eY5jDssD8XBL9eORBiIUjE&__tn__=%2CO%2CP-R"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
                 {t("reportIssueTitle")}
        </FormHelperText>
          </a>        
      <TitleTranslator 
      myFunc={receivedDataTitle} 
      data={characters.filter(el => el.id === section_id)[0]?.data_team}
      title_text={characters.filter(el => el.id === section_id)[0]?.title_text}
      title_lang = {characters.filter(el => el.id === section_id)[0]?.title_text_lang}
      title_text_from={characters.filter(el => el.id === section_id)[0]?.title_text}
      title_lang_from={characters.filter(el => el.id === section_id)[0]?.title_text_lang}

/>
      </TabPanel>
      <TabPanel value={valueTapTranslation} index={3}>

      <h4>{t("description")} </h4>  
      <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid02Av4iq2KAteMfcyN9r4BT1oU2eQqCwZvJWScgHfBxuXcrevZtBjDcHGBvMrWwSpknl&id=100081746135007"
           target='_blank'
           rel="noreferrer"
           >
          <FormHelperText id="component-helper-text">
                 <ReportIcon color="error"/>
            {t("reportIssueDescription")}
        </FormHelperText>
          </a>    
      <DescriptionTranslator 
      myFunc={receivedDataTitle} 
      data={characters.filter(el => el.id === section_id)[0]?.data_team}
      description_text={characters.filter(el => el.id === section_id)[0]?.description_text}
      description_lang = {characters.filter(el => el.id === section_id)[0]?.lang}
      description_text_from={characters.filter(el => el.id === section_id)[0]?.description_text}
      description_lang_from={characters.filter(el => el.id === section_id)[0]?.lang}

      />







      </TabPanel>
    </Box>
    




      </TabPanel>

      <TabPanel 
       style={{maxHeight:"500px",overflowY: "auto"}}
      value={value} index={4}>
        <h4>{t("history")} </h4>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',

       }}
   fullWidth
    >
   
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        name="history_searcher"
        value={history_searcher}
        onChange={e => setHistorySearcher(e.target.value)}
        placeholder="Search in history ?"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    
    </Paper>
        {history
       .filter(el => {
        if (history_searcher === "") {
          return true; // Include all elements when history_searcher is empty
        }
        return el.iteration_description.toLowerCase().includes(history_searcher.toLowerCase());
      })
        .map((el,i) =>(
  <Card fullWidth 
  key={i}
  style={{border:applied === i ? "4px solid #164B60" : "none"}}>
  <CardHeader
  avatar={
    <>
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      {t("sh")}
    </Avatar>
    <Breadcrumbs aria-label="breadcrumb">
     {el.iteration_tap.map((elhistory,i) => (

<div
key={i}
underline="hover"
color="inherit"
style={{fontSize:"11px"}}
>
{elhistory}
</div>
     )) }
       
    
      </Breadcrumbs>
    </>
  
  }
  action={
    <>
    <IconButton aria-label="settings">
     <Button variant="text"
     onClick={() => returnViewPopup(el)}
     >{t("view")}</Button>
    </IconButton>   
    <IconButton aria-label="settings">
     <Button variant="text"
     onClick={() => returnToOldHistory(el)}
     >{t("apply")}</Button>
    </IconButton>
    </>
  }
  title={el.iteration_description.includes("image") ?
  <>
  <p>{el.iteration_description.split("to")[0]} to </p>
  <img 
  alt="carthage history"
  style={{width:"100px",height:"100px",borderRadius:"30px"}}
  src={el.iteration_description.split("to")[1]}/> 
  </> 
  : el.iteration_description }
  subheader={moment(el.iteration_date).format('MMMM Do, YYYY HH:mm:ss')}
/>
  </Card>
      ))}
      
    
      </TabPanel>

      <TabPanel value={value} index={6}>
        {/* <div 
        style={{maxHeight:"400px",overflowY:"auto"}}
        >
              <div 
        style={{display:"flex",justifyContent:"center",
      marginTop:"2%"
      }}
     > */}
      <CommingSoon />
     {/* <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',

      width: 400 }}
   
    >
   
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        
        placeholder="How to update title in card ?"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    
    </Paper>
     </div>

     
     <Grid container spacing={2}
     style={{marginTop:"1%"}}
     >
      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions 
      style={{display:"flex",justifyContent:"center"}}
      >
      <FacebookShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <br />
      <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        
      </TwitterShareButton>
      <LinkedinShareButton
         title={"test"}
         url={"https://peing.net/ja/"}
         hashtags={["hashtag1", "hashtag2"]}
      >
        <LinkedinIcon 
        size={32} round
        />
      </LinkedinShareButton>
      <WhatsappShareButton
       title={"test"}
       url={"https://peing.net/ja/"}
       hashtags={["hashtag1", "hashtag2"]}
      >
         <WhatsappIcon 
        size={32} round
        />
      </WhatsappShareButton>

      <InstapaperShareButton
         title={"test"}
         url={"https://peing.net/ja/"}
         hashtags={["hashtag1", "hashtag2"]}
      >
      <InstapaperIcon 
        size={32} round
        />   
      </InstapaperShareButton>
      </CardActions>
    </Card>
      </Grid>

      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions 
      style={{display:"flex",justifyContent:"center"}}
      >
      <FacebookShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <br />
      <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        
      </TwitterShareButton>
      <LinkedinShareButton
         title={"test"}
         url={"https://peing.net/ja/"}
         hashtags={["hashtag1", "hashtag2"]}
      >
        <LinkedinIcon 
        size={32} round
        />
      </LinkedinShareButton>
      <WhatsappShareButton
       title={"test"}
       url={"https://peing.net/ja/"}
       hashtags={["hashtag1", "hashtag2"]}
      >
         <WhatsappIcon 
        size={32} round
        />
      </WhatsappShareButton>

      <InstapaperShareButton
         title={"test"}
         url={"https://peing.net/ja/"}
         hashtags={["hashtag1", "hashtag2"]}
      >
      <InstapaperIcon 
        size={32} round
        />   
      </InstapaperShareButton>
      </CardActions>
    </Card>
      </Grid>

      <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions 
      style={{display:"flex",justifyContent:"center"}}
      >
      <FacebookShareButton
        url={"https://peing.net/ja/"}
        quote={"フェイスブックはタイトルが付けれるようです"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <br />
      <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
      >
        <TwitterIcon size={32} round />
        
      </TwitterShareButton>
      <LinkedinShareButton
         title={"test"}
         url={"https://peing.net/ja/"}
         hashtags={["hashtag1", "hashtag2"]}
      >
        <LinkedinIcon 
        size={32} round
        />
      </LinkedinShareButton>
      <WhatsappShareButton
       title={"test"}
       url={"https://peing.net/ja/"}
       hashtags={["hashtag1", "hashtag2"]}
      >
         <WhatsappIcon 
        size={32} round
        />
      </WhatsappShareButton>

      <InstapaperShareButton
         title={"test"}
         url={"https://peing.net/ja/"}
         hashtags={["hashtag1", "hashtag2"]}
      >
      <InstapaperIcon 
        size={32} round
        />   
      </InstapaperShareButton>
      </CardActions>
    </Card>
      </Grid>


     </Grid> */}
        {/* </div>         */}

 
      </TabPanel>

      <TabPanel value={value} index={5}>
      
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={order} onChange={handleChangeOrder} aria-label="basic tabs example">
          <Tab label={t("exportOrders")} {...a11yProps(0)} />
  
          <Tab label={t("chargeOrders")} {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <TabPanel value={order} index={0}    style={{maxHeight:"500px",overflowY: "auto"}}>
        {t("exportOrders")}
        <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

        

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>

              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
           <SteperFinish />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>{t("reset")}</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
        {activeStep ===0 && <>
          {/* <RefreshIcon /> */}
          {orders.filter(el => el.iteration_section === section_id)
        .map((el,i) =>(
  <Card fullWidth 
  key={i}
  >
  <CardHeader
  avatar={
    <>
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      {t("sh")}
    </Avatar>
    <Breadcrumbs aria-label="breadcrumb">
     {el.iteration_tap.map((elhistory,i) => (

<div
key={i}
underline="hover"
color="inherit"
style={{fontSize:"11px"}}
>
{elhistory}
</div>
     )) }
       
    
      </Breadcrumbs>
    </>
  
  }

  title={el.iteration_description.includes("image") ?
  <>
  <p>{el.iteration_description.split("to")[0]} to </p>
  <img 
  style={{width:"100px",height:"100px",borderRadius:"30px"}}
  src={el.iteration_description.split("to")[1]}
  alt="history carthage"
  /> 
  </> 
  : el.iteration_description }
  subheader={moment(el.iteration_date).format('MMMM Do, YYYY HH:mm:ss')}
  action={
    <>
    <IconButton aria-label="settings">
    <DeleteForeverIcon color="error"
    onClick={() => deleteFromOrders(el)}
    />
     
    </IconButton>   
   
    </>
  }
/>
  </Card>
      ))}
     
        </>}
        {activeStep ===1 && <> 
        
          <iframe
   srcDoc={`
   <html>
   <style>${css_order}</style>
     <body>${html_order
      .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,
      `<style>${boostarp}</style>`)
  
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,
    `<style>${ownCarousel}</style>`
    )
    .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,
    `<script>${owlCarouselJs}</script>`)
   
    }</body>
     <script>${js_order}</script>                     
   </html>
 `}
   title="output"
   sandbox="allow-scripts"
   frameBorder="none"
   width="100%"

 />
        </>}
        {activeStep ===2 &&
         <>
         <div style={{display:"flex"}}>
         <Switch
    checked={publicExportOrder}
    onClick={e => setPublicExportOrder(e.target.checked)}
    label="public"
/>
{publicExportOrder ? <h3>{t("publicNoNeedToEnterPassword")}</h3> : <h3>{t("noPublic")}</h3> }

         </div>
      
          {!publicExportOrder &&
          <>
          <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{t("password")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password_export_order"
            value={password_export_order}
            onChange={e => setPasswordExportOrder(e.target.value)}
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
                 <FormHelperText id="filled-weight-helper-text"
           >
           {t("passwordRule")}
           </FormHelperText>
        </FormControl>
          </>
          }
         
        
        </>}

          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              {t("back")}
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? t("finish") : t("next")}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
   
      </TabPanel>
      <TabPanel value={order} index={1}>
        {t("chargeOrders")}
        <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStepCharge}>
        {stepsForCharge.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

        

          if (isStepSkippedCharge(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>

              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStepCharge === stepsForCharge.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
           <SteperFinish />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleResetCharge}>{t("reset")}</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
        {activeStepCharge ===0 && <>
          {/* <RefreshIcon /> */}
          <FileUploader
        multiple={true}
        handleChange={handleChangeOrderCharge}
        name="fileFromTunisiaDevs"
        types={fileTypesFromTunisiaDevs}
      />
        </>}
        {activeStepCharge ===1 && <> 
        <div style={{display:"flex"}}>
        <Switch
      checked={publicChargeOrder}
      onClick={e => setPublicChargeOrder(e.target.checked)}
      label="public"
        />
        {publicChargeOrder ? <h3>{t("publicNoNeedToEnterPassword")}</h3> : <h3>{t("noPublic")}</h3> }

        </div>
    {!publicChargeOrder  && 
    <>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">{t("password")}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password_charge_order"
            value={password_charge_order}
            onChange={e => setPasswordChargeOrder(e.target.value)}
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
                 <FormHelperText id="filled-weight-helper-text"
           >
           {t("passwordRule")}
           </FormHelperText>
        </FormControl>
    </>}
      
   
        </>}
        {activeStepCharge ===2 &&
         <>
       
       <iframe
   srcDoc={`
   <html>
   <style>${css_order_charge}</style>
     <body>${html_order_charge
      .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,
      `<style>${boostarp}</style>`)
   
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,
    `<style>${ownCarousel}</style>`
    )
    .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,
    `<script>${owlCarouselJs}</script>`)
 
    }</body>
     <script>${js_order_charge}</script>                     
   </html>
 `}
   title="output"
   sandbox="allow-scripts"
   frameBorder="none"
   width="100%"

 />
        </>}

          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStepCharge === 0}
              onClick={handleBackCharge}
              sx={{ mr: 1 }}
            >
              {t("back")}
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNextCharge}>
              {activeStep === steps.length - 1 ? t("finish") : t("next")}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
      </TabPanel>
      </TabPanel>
      
   





     
    </Box>



          
            </>




            </>}
          </Typography>
          <div   style={{display:"flex",justifyContent:"end"}}>
          
       
        
          </div>
      
        </Box>
      </Modal>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Card fullWidth>
       <div 
         style={{display:"flex",justifyContent:"space-between"}}
     
      >
        <div   >{t("madeBy")} <FavoriteIcon style={{color:"red"}} /> {t("reallyMany")} <FreeBreakfastIcon color="primary"/> <FreeBreakfastIcon color="primary"/> </div>
    
        <div><CopyrightIcon /> {new Date().getFullYear()} {t("shadowKinght")}{" "} {t("lastUpdate")}</div>
      </div>
        
    
    </Card>
        </Typography>
       


        <BootstrapDialog
    
        onClose={handleClosePopupHistoryDetail}
        aria-labelledby="customized-dialog-title"
        open={openPopupHistoryDetail}
      >
        {loadingImagePopupDetailHistory ?   
        <>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClosePopupHistoryDetail}>
         {titlePopupDetailHistory}
         <DialogContentText>
          { moment(datePopupDetailHistory).format('MMMM Do, YYYY HH:mm:ss')}
          </DialogContentText>
       
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <CircularProgress />
        </DialogContent>
       
        </> 
        :
<>
<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClosePopupHistoryDetail}>
         <TitleClassifier titlePopupDetailHistory={titlePopupDetailHistory}/>
         <DialogContentText>
          { moment(datePopupDetailHistory).format('MMMM Do, YYYY HH:mm:ss')}
          </DialogContentText>
       
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={valueViewHistory} onChange={handleChangeViewHistory} aria-label="basic tabs example">
          <Tab label={t("playArround")} {...a11yProps(0)} />
      
          
        </Tabs>
      </Box>
      <TabPanel value={valueViewHistory} index={0}>
        
      <iframe
 style={{
 width: show ?"75vw " : "90vw"
 ,backgroundColor:"white",height:"40vh"}}

   srcDoc={`
   <html>
   <style>${css_data_history}</style>
     <body>${html_data_history
      .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,
      `<style>${boostarp}</style>`)
   
    .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,
    `<style>${ownCarousel}</style>`
    )
    .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,
    `<script>${owlCarouselJs}</script>`)
    
    }</body>
     <script>${jsDataHistory}</script>                     
   </html>
 `}
   title="output"
   sandbox="allow-scripts"
   frameBorder="none"
   width="100%"

 />
      </TabPanel>
     
 
    </Box>
         
        </DialogContent>
        <DialogActions>
        <Button autoFocus
        disabled={indexInitHistory===0}
        onClick={handleGoPrevieus}>
            {t("previeus")}
          </Button>
        <Button autoFocus onClick={handleApply}>
            {t("apply")}
          </Button>
          <Button autoFocus 
             disabled={indexInitHistory===history.length-1}
          onClick={handleGoAfter}>
            {t("next")}
          </Button>
        </DialogActions>
</>
        }



     
      </BootstrapDialog>




      </Box>
      <ToastContainer />   
    </Box>
  );
}
