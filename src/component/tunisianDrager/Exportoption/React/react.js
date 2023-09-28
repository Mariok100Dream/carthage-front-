import React,{useState,useEffect} from "react";
import Box from '@mui/material/Box';

import ReactCodeSinppet from 'react-code-snippet'
import TextField from '@mui/material/TextField';

import {
    indexHtml,
    callJquey,
    packageJson,
    teamPackageJson,
    IndexjsCall,
    boostrapIndexJSCall,
    SimpleComponentcall,
    liberysCallComponent,
    teamSliderCall,
    appJSCall
} from "./initialReactProject/initialReactProject"
import { Templates } from "../../templates";
import  htmlToJsx from "html-to-jsx";
import Button from '@mui/material/Button';
import JSZip from "jszip"
import  FileSaver from 'file-saver' 
const ReactExport = (props) =>{
    const {id} = props
    let [component_name,setComponentName] = useState("")
    let [showCodeSnippet,setShowCodeSnippet] = useState(false)
    let [componetCodeHtmlSnippet,setComponentCodeSnippet] = useState("")
    let [resultTemplate,setResultTemplate] = useState()
    let [hasSlider,setHasSlider] = useState(false)
    let [css_data,setCssData] = useState("")
    let [base64Table,setBase64Table] = useState([])
    let[base64Rapido,setBase64Rapido] = useState([])
    useEffect(()=>{
        let result = Templates.filter(el => el.id == id)[0]
        setResultTemplate(result)
        setHasSlider(result.hasSlider)
        console.log("result for React = ",result)
    },[])


    let  handleChangeComponentName = (e) =>{
        setComponentName(e.target.value)
        if(hasSlider){
                
            
            
        }else{
            //remove all css call and js call 
            let ch_html  = SimpleComponentcall.replaceAll("$component_name",
            e.target.value.replace(/[^a-zA-Z0-9 ]/g, ''))

            let data_html  = resultTemplate.section_data
            .replaceAll(/(<script.*>|<\/script>)/g,"") //removing script tags
            .replaceAll(/(<script.*>)/g,"") //removing script tags
          
            .replaceAll(/(<link.*>)/g,"") //removing style tags
            //container replacer 
            .replace("{container_margin_top}","0")
            .replace("{container_margin_bottom}","0")
            .replace("{container_margin_left}","0")
            .replace("{container_margin_right}","0")
          
            ch_html = ch_html.replace("$data_html",data_html)  
            .replace("$owl_carousel_show_hide","")
            

            //get all base 64 image and save it by name 
          
            let names = ch_html.match(/(?<=<!--ImageAndAssociatedText\s+).*?(?=\s+-->)/g) ||[]
           let base64data = ch_html.match(/src=\"data:image\/([a-zA-Z]*);base64,([^\"]*)\"/g) || []
            let result = []
    
            if(names.length != 0){
                for(let i =0;i<names.length;i++){
                    
                    let f= {
                        name:names[i].split("|")[1],
                        image:names[i].split("|")[0].split("4,")[1],
                        image_base:names[i].split("|")[0]
                    }
                   
                    result.push(f)
                    
                }
               
            }
            setBase64Rapido(base64data)
            setBase64Table(result)
           
            setComponentCodeSnippet(htmlToJsx(ch_html))
            setCssData(resultTemplate.section_css)

          
        }

    }

    let downloadComponent = () =>{
        let zip = new JSZip();
        let ch_imports_images = ""
        
        let ch_html = componetCodeHtmlSnippet
        let global_image_import = 'import {imageName} from "./images/{imageName}.jpg"'
        if(base64Table.length!=0){
            let images = zip.folder("images")

            for(let i=0;i<base64Table.length;i++){
                console.log(base64Table[i].image)
               if(base64Table[i].image != undefined){
                images.file(`${base64Table[i].name}.jpg`,
                base64Table[i].image
                ,{"base64": true})
                ch_imports_images+=global_image_import
                .replaceAll("{imageName}",base64Table[i].name) 
                ch_html = ch_html.replaceAll(
                    `${base64Rapido[i].replaceAll('"',"").replace("src=","")}`,
                    `{${base64Table[i].name}}`) 
                ch_html = ch_html.replaceAll(
                `"${base64Rapido[i].replaceAll('"',"").replace("src=","")}"`,
                `{${base64Table[i].name}}`) 
           
               }
               
            }
        }
        if(ch_imports_images!=""){
            ch_html = ch_html.replace("$imports_for_images",ch_imports_images)

        }
        else{
            ch_html = ch_html.replace("$imports_for_images","")
        }
   
        zip.file(`${component_name}.js`,ch_html)
        zip.file(`${component_name}.css`,css_data)

        zip.generateAsync({type:"blob"}).then(function(content) {
            // see FileSaver.js
            FileSaver.saveAs(content, `${component_name}.zip`);
        });
    }

    let downloadSectionAsProject = () =>{
        let zip = new JSZip();
        //package json file config 
        let ch_package = ""
        if(hasSlider){
            ch_package = packageJson.replace("$packageJsonLiberyCall",teamPackageJson)
        }else{
            ch_package = packageJson.replace("$packageJsonLiberyCall","")
        }
        zip.file("package.json",ch_package)

        //public folder of react 
        let publicFolder = zip.folder("public")
        let ch_index_html = ""
        if(hasSlider){
            ch_index_html = indexHtml.replace("$jqueryreactappImport",callJquey)
        }else{
            ch_index_html = indexHtml.replace("$jqueryreactappImport","")
        }
        publicFolder.file("index.html",
        ch_index_html)
        //src folder 
        let srcFolder = zip.folder("src")
        srcFolder.file("index.js",IndexjsCall)

        //App js 
        srcFolder.file("App.js",appJSCall.replaceAll("$component_name",component_name))

        //component folder 
        let componentFolder = srcFolder.folder("components")
        let subComponentFolder = componentFolder.folder(`${component_name}`)
        subComponentFolder.file(`${component_name}.css`,css_data)
        let ch_imports_images = ""
        let ch_html = componetCodeHtmlSnippet
        let global_image_import = 'import {imageName} from "./images/{imageName}.jpg"'
        if(base64Table.length!=0){
            let images = subComponentFolder.folder("images")

            for(let i=0;i<base64Table.length;i++){
                console.log(base64Table[i].image)
               if(base64Table[i].image != undefined){
                images.file(`${base64Table[i].name}.jpg`,
                base64Table[i].image
                ,{"base64": true})
                ch_imports_images+=global_image_import
                .replaceAll("{imageName}",base64Table[i].name) 
                ch_html = ch_html.replaceAll(
                    `${base64Rapido[i].replaceAll('"',"").replace("src=","")}`,
                    `{${base64Table[i].name}}`) 
                ch_html = ch_html.replaceAll(
                `"${base64Rapido[i].replaceAll('"',"").replace("src=","")}"`,
                `{${base64Table[i].name}}`) 
           
               }
               
            }
        }
        if(ch_imports_images!=""){
            ch_html = ch_html.replace("$imports_for_images",ch_imports_images)
        }
        else{
            ch_html = ch_html.replace("$imports_for_images","")
        }
        
        //if there is is onmouseover or onmouseout 
        //regex for  onmouseover attributes
        // /(?<=onmouseover=')(.*)(?=')/g  
        //regex format to get all on mouse out event attributes
        // /(?<=onmouseout=')(.*)(?=')/g  

        let all_mouseOver = ch_html.match(/(?<=onmouseover=')(.*)(?=')/g) || []
        let all_mouseOut = ch_html.match(/(?<=onmouseout=')(.*)(?=')/g )
        if (all_mouseOver.length!=0){
            for(let i=0;i<all_mouseOver.length;i++){
                let original_string = "onmouseover='" + all_mouseOver[i] +"'"
                let value = all_mouseOver[i].split('"')[1]
                let to_workwith = all_mouseOver[i].split(".")[2].split("=")[0] 
                let functionJSX = `
                onMouseOver={e => e.target.style.${to_workwith} = "${value}"}
                `
                ch_html = ch_html.replace(original_string,functionJSX)
                

            }

            for(let i=0;i<all_mouseOut.length;i++){
                let original_string = "onmouseout='" + all_mouseOut[i] +"'"
                let value = all_mouseOut[i].split('"')[1]
                let to_workwith = all_mouseOut[i].split(".")[2].split("=")[0] 
                let functionJSX = `
                onMouseOut={e => e.target.style.${to_workwith} = "${value}"}
                `
                ch_html = ch_html.replace(original_string,functionJSX)
                

            }
        }
        console.log("ch_html",ch_html)
    
        subComponentFolder.file(`${component_name}.js`,ch_html)
        zip.generateAsync({type:"blob"}).then(function(content) {
            // see FileSaver.js
            FileSaver.saveAs(content, `${component_name}.zip`);
        });        


    }










    return ( 
        <>
           <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
     
          {hasSlider ? 
            <>

            Steps 
            <h5>Step 1 </h5>
            <h6>run</h6>
            <ReactCodeSinppet lang="html" code={`npm i bootstrap`}>
         
                </ReactCodeSinppet>
                <h5>Step 2 </h5>
            <h6>run</h6>
            <ReactCodeSinppet lang="html" code={`npm i react-bootstrap`}>
         
         </ReactCodeSinppet>

         <h5>Step 3 </h5>
            <h6>run</h6>
            <ReactCodeSinppet lang="html" code={`npm i react-owl-carousel`}>
         </ReactCodeSinppet>

         <h5>Step 4 </h5>
            <h6>in index.js or App.js as you want write</h6>
            <ReactCodeSinppet lang="html" code={`import 'bootstrap/dist/css/bootstrap.min.css';`}>
         </ReactCodeSinppet>

         <h5>Step 5 </h5>
            <h6>Please give as the name of component</h6>
            <TextField 
            style={{marginTop:"2%"}}
            id="outlined-basic" 
            label="Name of component"
             variant="outlined"
             value={component_name}
             name="component_name"
             onChange={e => handleChangeComponentName(e)}    
             />

            <h5>
            generate component here
            </h5>
            {showCodeSnippet && 
            <>
               <ReactCodeSinppet lang="jsx"
                code={ReactCodeSinppet}>
                </ReactCodeSinppet>
            </>
            }
            </>  
        : 
            <>
            <h6>Please give as the name of component</h6>
            <TextField 
            style={{marginTop:"2%"}}
            id="outlined-basic" 
            label="Name of component"
             variant="outlined"
             value={component_name}
             name="component_name"
             onChange={e => handleChangeComponentName(e)}    
             />
             {componetCodeHtmlSnippet!="" &&
            <>
        
        <Button variant="text" 
        onClick={() => downloadComponent()}
        >
            download Section
        </Button>

        <Button variant="text" 
        onClick={() => downloadSectionAsProject()}
        >
            download Section as project
        </Button>

           
            </>
             }
             
                 
            </>
        }


            </Box>
        </>
    )
}

export default ReactExport