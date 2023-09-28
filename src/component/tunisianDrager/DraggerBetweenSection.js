import React, { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextField from '@mui/material/TextField';
import { FileUploader } from "react-drag-drop-files";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';


import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const style= {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const reorder = (list, startIndex, endIndex) => {
  console.log("list",list)
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "#539165" : "#3F497F",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "#F8F5E4" : "#F7C04A",
  padding: grid,
 
});

 const DraggerBetweenSection =() => {
  const fileTypesContent = ["JPG","PNG","JPEG"];

  let [logo_content,setLogoContent] = useState("")

  const onLoadContent = fileString => {
    setLogoContent(fileString);
  };

  const getBase64Content = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoadContent(reader.result);
    };
  };


  const onChangeLogoContent = file => {
   
    getBase64Content(file);
  };

  let [itemsData,setItems] = useState(
    [
      {id:"1",content:"number 1",
    children:[
      {id:"5",content:"title",
      text:" Lorem ipsum ",
      color:"#070f4d",
      hover_color:"#070f4d",
    type:"title"
    },
  
      {id:"6",
      content:"description",
      type:"description",
      text:"dolor",
      color:"#707070",
      hover_color:"#707070",
    
    },
      {id:"13",content:"Image",
      type:"image",
      text:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      color:"hover",hover_color:"hoverme"},
  
      {id:"14",content:"Social links",
      type:"sociallinks",
      text:"decriptionhello",color:"hover",hover_color:"hoverme",
      social_media_data : [
        {name:"Facebook",url:"https://www.facebook.com/"},
      
        {name:"Twitter",url:"https://twitter.com/?lang=fr"},
    
        {name:"Instagram",url:"https://www.instagram.com/"},
    
      ]
    
    
    },
    
    
    
    ]
    },
  
  
  
  
  
  
  
  
      {id:"2",content:"number 2",
      children:[  
  
        {id:"7",content:"title",
        type:"title",
        text:"sit amet",
        color:"#070f4d",
        hover_color:"#070f4d"},
      {id:"8",
      type:"description",
      content:"description",text:"consectetur ",
      color:"#707070",
      hover_color:"#707070",
    },
      {id:"16",content:"Image",
      type:"image",
      text:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",color:"hover",hover_color:"hoverme"},
  
      {id:"17",content:"Social links",
      type:"sociallinks",
      text:"decriptionhello",
      social_media_data : [
          {name:"Facebook",url:"https://www.facebook.com/"},
        
          {name:"Twitter",url:"https://twitter.com/?lang=fr"},
      
          {name:"Instagram",url:"https://www.instagram.com/"},
      
        ],
  
      color:"hover",hover_color:"hoverme"},
    
    
    ]
    },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      {id:"3",content:"number 3",
    children:[
      {id:"9",content:"title",
      type:"title",
      text:"adipisicing eli", color:"#070f4d",
      hover_color:"#070f4d"},
  
      {id:"10",
      type:"description",
      content:"description",text:"Maxime",
      color:"#707070",
      hover_color:"#707070",
    
    },
      {id:"19",content:"Image",
      type:"image",
      text:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",color:"hover",hover_color:"hoverme"},
      {id:"20",content:"Social links",
      type:"sociallinks",
      social_media_data : [
          {name:"Facebook",url:"https://www.facebook.com/"},
        
          {name:"Twitter",url:"https://twitter.com/?lang=fr"},
      
          {name:"Instagram",url:"https://www.instagram.com/"},
      
        ],
      text:"decriptionhello",color:"hover",hover_color:"hoverme"},
    
    ]
    },
  
  
  
  
  
  
  
  
  
      {id:"4",content:"number 4",
      children:[
        {id:"11",content:"title",
        type:"title",
        text:"molestiae quas",
        color:"#070f4d",
        hover_color:"#070f4d"
      },
        {id:"12",
        type:"description",
        content:"description",text:"vel",
        color:"#707070",
        hover_color:"#707070",
      },
        {id:"22",content:"Image",
        type:"image",
        text:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",color:"hover",hover_color:"hoverme"},
      {id:"23",content:"Social links",
      type:"sociallinks",
      social_media_data : [
          {name:"Facebook",url:"https://www.facebook.com/"},
        
          {name:"Twitter",url:"https://twitter.com/?lang=fr"},
      
          {name:"Instagram",url:"https://www.instagram.com/"},
      
        ],
      text:"decriptionhello",color:"hover",hover_color:"hoverme"},
      
      ]
    }
    ])

  let onDragEndForContent=(result) =>{
   
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      itemsData,
      result.source.index,
      result.destination.index
    );

   setItems(items)
  }

  const [expandedParent, setExpandedParent] = React.useState(false);

  const handleChangeParent = (panel) => (event, isExpanded) => {
    setExpandedParent(isExpanded ? panel : false);
  };



 

  let onDragEndDetail=(result) =>{
   
    // dropped outside the list
    if (!result.destination) {
      return;
    }

//     const items = reorderChildren(
//       itemsData,
//       result.source.index,
//       result.destination.index
//     );
// console.log("Children dragging",items)
   setItems(itemsData)
  }

  const [expandedChildren, setExpandedChildren] = React.useState(false);

  const handleChangeChildren = (panel) => (event, isExpanded) => {
    setExpandedChildren(isExpanded ? panel : false);
  };

  let deleteSectionContent = (id) =>{
    let parents = itemsData.filter(el => el.id != id)
     setItems(parents) 

  }

  let copySection = (id) =>{
    let parentsCopy = itemsData
    let to_copy_section = itemsData.filter(el => el.id == id)[0]
    
  
    parentsCopy.push(to_copy_section)
    console.log(parentsCopy)
    setItems(parentsCopy)
    
  }


  const [selectSocialMedia, setSelectSocialMedia] = React.useState('');

  const handleChangeSocialMediaContent = (event) => {
    setSelectSocialMedia(event.target.value);
  };



  const handleCloseContent = () => setOpenContent(false);
  let [title_text,setTitleText] =useState("")
  let [title_color,setTitleColor] = useState("")
  let [title_hover_color,setTitleHoverColor] = useState("")


  //description content changing
  let [description_text,setDescriptionText] = useState("")
  let [description_text_color,setDescriptionTextColor] = useState("")
  let[description_hover_color,setDescriptionHoverColor] = useState("")


  //social media adder 
  let [url_social_media_adder,setUrlSocialMediaAdder] = useState("https")


  //social media update 

  const [opencontent, setOpenContent] = React.useState(false);
  let [url_edit,setUrlEdit] = useState("")
  const [selectSocialMediaEdit, setSelectSocialMediaEdit] = React.useState('');
  let [indexEdit,setIndexEdit] = useState("")
  
  const handleChangeSocialMediaEdit = (event) => {
    setSelectSocialMediaEdit(event.target.value);
  };
  let [itemParentId,setItemParentId] = useState("")
  let [indexParentData,setindexParentData] = useState("")
  const handleOpenContent = (type,url,i,id,index) => {
    setUrlEdit(url)
    setSelectSocialMediaEdit(type)
  
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
 let handleChangeData = (type,id,text,index,iteration) =>{
  let all = itemsData
    let searcher = itemsData.filter(el => el.id === id)[0]
    if(type=="title"){
      if(title_text!=""){
        searcher.children[0]["text"] = title_text
       
      }
      else{
       return toast.error("title text field is empty")
      }


       if(title_color!=""){
      
        searcher.children[0]["color"] = title_color
       
      }
      if(title_hover_color!=""){
        searcher.children[0]["hover_color"] = title_hover_color
      }
       
    
      
      }
if(type=="description"){
    if(description_text!=""){
      searcher.children[1]["text"] = description_text

    }
    else{
      return toast.error("description content field is empty")
    }
  

    if(description_text_color!=""){
      searcher.children[1]["color"] = description_text_color

    }

    if(description_hover_color!=""){
      searcher.children[1]["hover_color"] = description_hover_color
    }

}

  if(type=="sociallinks"){
    if(iteration=="adder"){
      if(url_social_media_adder!="" && selectSocialMedia!=""){
        searcher.children[3].social_media_data.push({
          name:selectSocialMedia,
          url:url_social_media_adder
        })
      }
      else if(url_social_media_adder==""){
        return toast.error("Social media url  field is empty")
      }
      else{
        return toast.error("Social media name  field is empty")
      }
  

     

    }
    if(iteration=="editSocialMedia"){
       if(url_edit==""){
        return toast.error("Social media url in edit popup is empty")
      }

      if(url_edit!="" ||selectSocialMediaEdit!="" ){

        searcher.children[3].social_media_data[indexEdit] = {
          name:selectSocialMediaEdit,
          url:url_edit

        }
      
      }
  
     
    }

  }


all[index] = searcher
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
  }
 
  return (
      <>
      <DragDropContext onDragEnd={onDragEndForContent}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {itemsData.map((itemParent, indexParent) => (
                <Draggable key={itemParent.id} draggableId={itemParent.id} index={indexParent}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.styleContent
                      )}
                    >
  <Accordion expanded={expandedParent === `parent${indexParent}`} onChange={handleChangeParent(`parent${indexParent}`)}>
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
         <DragDropContext onDragEnd={onDragEndDetail}>
         <Droppable droppableId="droppable1">
          
         {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
 {itemParent.children.map((item, index) => (
<>
<Draggable key={item.id} draggableId={item.id} index={index}>
{(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {/* Second Accordian  */}
                      
                      <Accordion expanded={expandedChildren === `children${index}`} onChange={handleChangeChildren(`children${index}`)}>
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
{item.type =="title" && <>
     <p style={{textAlign:"left"}}>title text</p>                
    <TextField id="outlined-basic"
            fullWidth
            label={`${item.text}`}
            value={title_text}
            name="title_text"
            onChange={e => setTitleText(e.target.value
              
              )}            

            variant="outlined" />
     
    <TextField id="outlined-basic"
            fullWidth
            type="color"
            name="title_color"
            value={title_color!= "" ?title_color : item.color}
            onChange = {e => setTitleColor(e.target.value)}  
            label="Title Color" 
            style={{marginTop:"2%"}}
            variant="outlined" />

    <TextField id="outlined-basic"
            fullWidth
            type="color"
            label="Title Color on Hover" 
            name="title_hover_color"
            
            onChange={e =>setTitleHoverColor(e.target.value)}
            value={title_hover_color!="" ? title_hover_color :   item.hover_color}
            style={{marginTop:"2%"}}
            variant="outlined" />

<FormControlLabel control={<Switch defaultChecked />} label="Show Title" />
<Button variant="contained"
      style={{marginTop:"2%"}}
      onClick = {() =>handleChangeData(item.type,itemParent.id,
        "text",indexParent
        
        )}
      >Edit</Button>
</>}

{item.type =="description" && <>
<p style={{textAlign:"left"}}>Description Content</p>
<TextField id="outlined-basic"
            fullWidth
            label={item.text}
            value={description_text}
            name="description_text"
          onChange={(e) => setDescriptionText(e.target.value)}

            variant="outlined" />
     
    <TextField id="outlined-basic"
            fullWidth
            type="color"
            label="Description Color"
            name="description_text_color"
            value={description_text_color!="" ? description_text_color :  item.color} 
            style={{marginTop:"2%"}}
            onChange={e => setDescriptionTextColor(e.target.value)}

            variant="outlined" />

    <TextField id="outlined-basic"
            fullWidth
            type="color"
            value={description_hover_color!=""? description_hover_color : item.hover_color}
            label="Description Color on Hover" 
            name="description_hover_color"
            onChange={e => setDescriptionHoverColor(e.target.value)}
            style={{marginTop:"2%"}}
            variant="outlined" />
<FormControlLabel control={<Switch defaultChecked />} label="Show Decription" />
<Button variant="contained"
      style={{marginTop:"2%"}}
      onClick = {() =>handleChangeData(item.type,itemParent.id,
        "text",indexParent
        
        )}
      >Edit</Button>
</>}


     {item.type=="image" && <>
     <div 
     style={{display:"flex",justifyContent:"center"}}
     >

<FileUploader handleChange={onChangeLogoContent}  
            multiple={false}
          types={fileTypesContent}
           type="file" name="myOriginalfile"
        
          />
     </div>
     <FormControlLabel control={<Switch defaultChecked />} label="Show Image" />

     
     </>}   

     {item.type == "sociallinks" && 
     <>
     <Grid container spacing={2}>
     <Grid item xs={6}>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Social Media</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectSocialMedia}
    label="Social Media"
    onChange={handleChangeSocialMediaContent}
  >
    <MenuItem value={"Instagram"}>Instagram</MenuItem>
    <MenuItem value={"YouTube"}>YouTube</MenuItem>
    <MenuItem value={"Facebook"}>Facebook</MenuItem>

    <MenuItem value={"Twitter"}>Twitter</MenuItem>
    <MenuItem value={"TikTok"}>TikTok</MenuItem>
    <MenuItem value={"Pinterest"}>Pinterest</MenuItem>

    <MenuItem value={"Snapchat"}>Snapchat</MenuItem>
    <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
    <MenuItem value={"GooglePlus"}>Google Plus</MenuItem>
    <MenuItem value={"Behance"}>Behance</MenuItem>
    <MenuItem value={"Gmail"}>Gmail</MenuItem>
    <MenuItem value={"goArrow"}>goArrow</MenuItem>
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
     
      >ADD</Button>

      </div>
      {item.social_media_data.
      filter(el => el!="").
      map((el,i) => (
        <>
         <Card sx={{ minWidth: 275 }}>
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
  indexParent
  )}
style={{cursor:"pointer"}}
color="primary"/>
        </div>
        

    </Card>


        </>
      ))}
         <FormControlLabel control={<Switch defaultChecked />} label="Show Social links" />

     </>}   

          </Typography>
        </AccordionDetails>
      </Accordion>

                      </div>
                      
                      )}
</Draggable>
                 
  
</>

 ))}
            </div>
          )}



          </Droppable>
         </DragDropContext>
 
       
         </Typography>
       </AccordionDetails>
     </Accordion>
                   
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
     
      <Modal
        open={opencontent}
        onClose={handleCloseContent}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {url_edit}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
     <Grid item xs={6}>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Social Media</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectSocialMediaEdit}
    label="Social Media"
    onChange={handleChangeSocialMediaEdit}
  >
    <MenuItem value={"Instagram"}>Instagram</MenuItem>
    <MenuItem value={"YouTube"}>YouTube</MenuItem>
    <MenuItem value={"Facebook"}>Facebook</MenuItem>

    <MenuItem value={"Twitter"}>Twitter</MenuItem>
    <MenuItem value={"TikTok"}>TikTok</MenuItem>
    <MenuItem value={"Pinterest"}>Pinterest</MenuItem>

    <MenuItem value={"Snapchat"}>Snapchat</MenuItem>
    <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
    <MenuItem value={"GooglePlus"}>Google Plus</MenuItem>
    <MenuItem value={"Behance"}>Behance</MenuItem>
    <MenuItem value={"Gmail"}>Gmail</MenuItem>


  </Select>
</FormControl>
     </Grid>

     <Grid item xs={6}>
     <TextField id="outlined-basic"
            fullWidth
            name="url_edit"
            value={url_edit}
            onChange={e => setUrlEdit(e.target.value)}
            label="url" 
         
            variant="outlined" />              
     </Grid>

     </Grid>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Button variant="contained"
      style={{marginTop:"2%"}}
      onClick = {() =>handleChangeData("sociallinks",itemParentId,
        "text",indexParentData,"editSocialMedia"
        
        )}
      >Edit</Button>

      </div>
          </Typography>
        </Box>
      </Modal>
      <ToastContainer />
     </>
    );
  
}

export default DraggerBetweenSection
