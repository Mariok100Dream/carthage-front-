import React,{useState} from "react";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import HtmlWithCdn from "./htmlWithcdn/htmlWithcdn"
import HtmlWithoutCdn from "./htmlWithoutcdn/htmlWithoutCdn"
import ReactExport from "./React/react"
import TunisiaDevsExport from "./tunisiaDev/tunisiaDevs"

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {cssToSassOrLess} from "./functions/csstosass"
import {Minifier} from "./functions/cssMinifier"
import { Templates } from "../templates";
import JSZip from "jszip"
import  FileSaver from 'file-saver' 

import Alert from '@mui/material/Alert';
import axios from "axios";
import AngularExport from "./angular/AngularExport"

import beautify from "js-beautify"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
        };
const ExportOption = (props) =>{
    const {id,history,indexInitHistory,data} = props
    const [openExportOption, setOpenExportOption] = React.useState(false);
    const handleOpenExportOption = () => setOpenExportOption(true);
    const handleCloseExportOption = () =>{
        setShowDetail(false) 
        setShowTunisiaDevs(false)
        setOpenExportOption(false)
        setAngularShowUp(false)
    } 
    const[showDetail,setShowDetail] = useState(false)
    const [showHtmlCss,setShowHtmlCss] = useState(false)
    const [showReact,setShowReact] = useState(false)
    const [showTunisiaDevs,setShowTunisiaDevs] = useState(false)
    let handleShowHtmlCss = () =>{
        setShowHtmlCss(true)
        setShowDetail(true)
   

    }

    const [htmlcssjsoption, setHtmlCssJsOption] = React.useState('withcdn');

    const handleChangeHtmlcssjsoption = (event) => {
        setHtmlCssJsOption(event.target.value);
    };

    const handleShowReact = () =>{
        setShowReact(true)
        setShowDetail(true)        
    }
  
    const handleTunisiaDevs = () =>{
        setShowTunisiaDevs(true)
        setShowDetail(true)     
    }

    const [designType, setDesignType] = React.useState('css');

    const handleChangeDesignType = async(event) => {
      setDesignType(event.target.value);
      

     
    };

    let [minified_html,setMinifiedHtml] = useState(false)
    let [minified_style,setMinifiedStyle] = useState(false)
    let [minified_js,setMinifiedJs] = useState(false)
    let handleGo = async() =>{
      //tasks add scss compiler editor 
      //fix design in export html css js 
      //cdn fix 
      //add assets folder where u find css folder that have all the css done 
      //add in assets folder image  done  
      //if he choose scss or sass or less 
      //we will add 
      //<script src="https://cdn.jsdelivr.net/npm/less@4.1.1" ></script>
      //in terminal run   sass --watch .:.
      
      //our function have problem with @media 
      let searcher =  data.filter(el => el.id ===id)[0]
      //replace owl carousel by there value 
      let style = searcher.section_css
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
     
      //in html replace all container things

      let html = `
      <!DOCTYPE html>
<html >
  <!-- Mirrored from templates.hibootstrap.com/bonsa/default/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 20 Feb 2023 16:20:13 GMT -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      `
      html += `<link rel="stylesheet" href='assets/style/style.css' />\n`
      //if it has no slider we should remove that style
      //for removing the block str.replace(/@media.*?}}/g,'')

      //get all 
      let with_media_tag =  style.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+[^\}]+\}/g) || []
   
     
      
      let result = []
      if(designType!="css"){
        for(let i=0;i<with_media_tag.length;i++){
          let ch1 = with_media_tag[i].substring(0,with_media_tag[i].indexOf("{"))
          let ch2 =  with_media_tag[i].substring(with_media_tag[i].indexOf("{"),with_media_tag[i].length-1)
          style = style.replace(with_media_tag[i],"")  
          let f = {
            media_tag: ch1 + "{ \n",
            media_string:ch2.replace("{","") 
          }
          result.push(f)
        }
      }
  

 

       
      if(designType!="css"){
      
        var fish = new cssToSassOrLess();
        var settings = {
            'comments': true,
            'variables': true,
            'convert': designType
        };
        if(!searcher.hasSlider){
            style = style.substring(0,style.indexOf(" /*End Responsive Checker */")) 
        }
       

        style = fish.scrub(style, settings)
        style = style.replaceAll("@c","$c")

        let style_media = ""
        for(let i=0;i<result.length;i++){
          let fishstring = fish.scrub(result[i].media_string, settings)
          style_media+=result[i].media_tag + 
          fishstring.replaceAll("@c","$c") + "} \n" 
        }        
       
      
        style = style +style_media


      }
      style= beautify.css_beautify(style)
      if(minified_style){
        style = Minifier(style)
      }
      //js export 
      let js =searcher.js_data 
      if(minified_js){
        js = Minifier(js)
      } 


      let zip = new JSZip();
 
      let assets = zip.folder("assets")
      let images = assets.folder("images")
      let stylefolder = assets.folder("style")
      let jsFolder = assets.folder("js")
      //download without cdn things 
      if(htmlcssjsoption=="withoutcdn"){
           
           //add css first and replace the html stringby the new path
           const responseboostrap = await axios.get("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
           //css
           stylefolder.file("bootstrap.min.css",responseboostrap.data)
            html += `
            <link rel="stylesheet" href="assets/style/bootstrap.min.css" >
            `
          
          
       
            html+=`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`     

            if(searcher.hasSlider){
              const jqueycall = await axios.get("https://code.jquery.com/jquery-3.5.1.min.js")
              const owlCarouselCss = await axios.get("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css")
              const owlCarouselJs = await axios.get("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js")
          
              //js 
              jsFolder.file("jquery-3.5.1.min.js",jqueycall.data)
              html += `
              <script src="assets/js/jquery-3.5.1.min.js" > </script>
              `
              jsFolder.file("owl.carousel.min.js",owlCarouselJs.data)
                html += `
                <script src="assets/js/owl.carousel.min.js"></script>
                `
              stylefolder.file("owl.carousel.min.css",owlCarouselCss.data)
                html += `
                <link rel="stylesheet" href="assets/style/owl.carousel.min.css" />
                `

            }

      }
      else{
        const responseboostrap = await axios.get("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
        //css
        stylefolder.file("bootstrap.min.css",responseboostrap.data)
        html += `<link rel="stylesheet" href="assets/style/bootstrap.min.css" >` 
        html+=`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`     
        if(searcher.hasSlider){
          html += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`  
          html += `<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`
          html += `<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`
        
        }
      }
         
        //+
      //remove liberies from the string 
      let data_html = searcher.section_data
      .replace(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`,"")
      .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />`,"")
      .replace(`<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>`,"")
      .replace(`<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>`,"") 
      .replace(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />`,"")
      .replace("{container_margin_top}",searcher.global_style[3].container_margin_top)
      .replace("{container_margin_bottom}",searcher.global_style[3].container_margin_bottom)
      .replace("{container_margin_left}",searcher.global_style[3].container_margin_left)
      .replace("{container_margin_right}",searcher.global_style[3].container_margin_right)
      .replaceAll("{backgroundContainercolor}",searcher.global_style[4].backgroundContainercolor)
      .replace("{backgroundContainerImage}",searcher.global_style[4].backgroundContainerImage)
      
      //get all js scripts of the component 
      let array_of_js_functions =  data_html.match( /<script\b[^>]*>([\s\S]*?)<\/script>/g) || []
      
      let ch_js = ""
      if(array_of_js_functions.length!=0){
        for(let i=0;i<array_of_js_functions.length;i++){
          ch_js+=array_of_js_functions[i].replace("<script>","").replace("</script>","")
          data_html = data_html.replace(array_of_js_functions[i],"")
  
        }
      }
      
      jsFolder.file("script.js",ch_js)
      data_html = beautify.html_beautify(data_html) 
      html+= "</head> \n <body> \n" +data_html

      html += "<script src='assets/js/script.js'></script> \n </body> \n </html>"
    
 
    if(minified_html){
            html = Minifier(html) 
          }
    
      let base64data = html.match(/data:image\/[bmp,gif,ico,jpg,png,svg,webp,x\-icon,svg+xml]+;base64,[a-zA-Z0-9,+,/]+={0,2}/g) || []
   
      var unique = [...new Set(base64data)]
      for(let i=0;i<unique.length;i++){
          images.file(`${i}.jpg`,
          unique[i].split(",")[1]
          ,{"base64": true})
          
          html = html.replaceAll(unique[i],`assets/images/${i}.jpg`)

      }      
      html = beautify.html_beautify(html)
      zip.file("index.html",html)
      stylefolder.file(`style.${designType}`,style)
      zip.file("script.js",js) 
      zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, `result.zip`);
    }); 


    }


    let [angularShowUp,setAngularShowUp] = useState(false)
  
    return(
        <>
       <SystemUpdateAltIcon color='primary'
onClick={handleOpenExportOption}

/>
<Modal
        open={openExportOption}
        onClose={handleCloseExportOption}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
     
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exporting Project 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} 
          style={{maxHeight:400,overflow:"auto"}}
          >
            {!showDetail ?
            <>
                <Grid container spacing={2}>
            {/* Html css js  */}
          <Grid item xs={6}>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Export code html css js 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
        onClick={() => handleShowHtmlCss()}
        >complete details</Button>
      </CardActions>
    </Card>
          </Grid>
            {/* reactjs  */}
          {/* <Grid item xs={6}>

 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Export code Reactjs 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" 
        onClick={() => handleShowReact()}
        >complete details</Button>
      </CardActions>
    </Card>
            
          </Grid>
          
          <Grid item xs={6}>
  
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/png;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Export code Reactjs 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" 
        onClick={() => handleShowAngular()}
        >complete details</Button>
      </CardActions>
    </Card>

          </Grid> */}

           {/* Tunisia Dev Share */}
           <Grid item xs={6}>
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
image="https://res.cloudinary.com/dx8hb4haj/image/upload/v1667292509/app_background_txklxf.jpg"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Export in tunisia Dev format 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"
      onClick={() => handleTunisiaDevs()}
      >complete details</Button>
    </CardActions>
  </Card>

        </Grid>
        </Grid>

       
            </> 
            :
            showHtmlCss ?
            <>
             <Grid container >
          {designType!="css" && 
                  <>
                    <Alert severity="info" fullWidth>
                      Remember to install sass globally 
                      by running 
                      npm i g sass
                      then run 
                     sass --watch .:.
                    </Alert>
                  </>}
               {/* Show Logo of technologie */}                
                <Grid item xs={6}>
                  
                <img 
                src="https://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png"
                style={{width:200}}
               />
                 <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Design type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={designType}
          label="Design type"
          onChange={handleChangeDesignType}
        >
          <MenuItem value={"css"}>css</MenuItem>
          <MenuItem value={"scss"}>scss</MenuItem>
          <MenuItem value={"sass"}>sass</MenuItem>
          <MenuItem value={"less"}>less</MenuItem>
       
          
        </Select>
      </FormControl>
              <FormControlLabel required control={<Checkbox 
              value={minified_style}
              name="minified_style"
              onChange={e => setMinifiedStyle(e.target.checked)}
              />}
               label={`minfiy ${designType}`} />
              <FormControlLabel required control={<Checkbox 
              value={minified_html}
              onChange={e => setMinifiedHtml(e.target.checked)}
              name="minified_html"
              />} 
              label="minify html" />
              <FormControlLabel required control={<Checkbox 
              value={minified_js}
              onChange={e => setMinifiedJs(e.target.checked)}
              name="minified_js"
              />}
               label="minify js" />
              <br></br>
              <div style={{display:"flex",justifyContent:"center"}}>
              <Button variant="text" 
              onClick={() => handleGo()}
              >Download code </Button>
              </div>

                  </Grid>

                {/* Show Detail of exporting */}                
                <Grid item xs={6}>
                    <h3>Exporting html css js </h3>
                    <FormControl fullWidth
                    style={{marginTop:"3%"}}
                    >
        <InputLabel id="demo-simple-select-label">Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={htmlcssjsoption}
          label="Option"
          onChange={handleChangeHtmlcssjsoption}
        >
          <MenuItem value={'withcdn'}>With cdn</MenuItem>
          <MenuItem value={'withoutcdn'}>Without cdn</MenuItem>
        
        </Select>
      </FormControl>
                
                {htmlcssjsoption == "withcdn" && 
                <>
                <HtmlWithCdn />
                </>}
                {htmlcssjsoption == "withoutcdn" && 
                <>
                <HtmlWithoutCdn />
                </>
                }
                
                </Grid>
       
          


             </Grid>
            </>
            :
             showReact &&
             <>
             <ReactExport
             id={id}
             />
             </>   
             

            }

            {  showTunisiaDevs && 
             <>
             <TunisiaDevsExport
             id={id}
             history={history}
             indexInitHistory={indexInitHistory}
             />
             </>}

             {angularShowUp && 
             <>
             <AngularExport  id={id}/>
             </>
             }
          </Typography>
        </Box>



      </Modal>
        </>
    )
}

export default ExportOption