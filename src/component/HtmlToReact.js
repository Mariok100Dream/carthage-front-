
import React, { useState,useEffect } from "react";

import "./Uploader.css"
import { FileUploader } from "react-drag-drop-files";

import Button from '@mui/material/Button'

import axios from "axios"
import Box from '@mui/material/Box';


import {ToastContainer,toast} from "react-toastify"


//banded column 
import Footer from "../pages/footer"

import Navbar from "./Navbar"
//uplodi il file 
// tronsfor to text 
// detect begin and end  of the component 
// push all the component result 
 

import { v4 as uuidv4 } from 'uuid';
import JSZip from "jszip"
import  FileSaver from 'file-saver' 

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CodeMirror from "@uiw/react-codemirror";


import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Documentation from "./DocumenTation";
import { useTranslation } from 'react-i18next'
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HtmlToReact = () =>{
  const { t } = useTranslation()
  //multiple select
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([t("react")]);
  const names = [
    t("react"),
    t("angular")
    
  ];
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
   
      if(personName.filter(el => el == value[0]).length != 0){
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      }
     
    
   
  };





  const fileTypes = [t("html"),t("css")];
  const [orginalFiles,setOriginalFiles] = useState([])
const [originalValues,setOrignalValues] = useState([])

let [error_viewer,setErrorViewer] = useState(false)
let [all_errors_captured,setAllErrorsCaptured] = useState(["hello"])
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
        let html_indexes = []
      
        let html_names =   Array.from(files_list).filter( function(s){ 
          return s.type.includes("text/html") ;
      })
        Array.from(files_list).filter( function(s,i){ 
          if(s.type.includes("text/html")) html_indexes.push(i)
      })
   
      let result_html=[]
    
  
        for(let i=0;i<html_names.length;i++){

          result_html.push(values[html_indexes[i]])
        }
       




        let data = Array.from(files_list).filter( function(s){ 
          return s.type.includes("text/html") ;
      })
      let css_indexes = []
      
      let css_names =   Array.from(files_list).filter( function(s){ 
        return s.type.includes("text/css") ;
    })
      Array.from(files_list).filter( function(s,i){ 
        if(s.type.includes("text/css")) css_indexes.push(i)
    })
    let result=[]
  

      for(let i=0;i<css_names.length;i++){
      
        let f={
          file_name:css_names[i].name,
          file_data:values[css_indexes[i]]
        }
     
      
        result.push(f)
      }
 
        setOriginalFiles(Array.from(files_list).filter( function(s){ 
          return s.type.includes("text/html") ;
      }))
   


        setOrignalValues(result_html)
       //now we get values per position

   

       

    
        translateThoseFiles(Array.from(files_list).filter( function(s){ 
          return s.type.includes("text/html") ;
      }),result_html,result)
    });
    
  }

 
  let [projectCode,setProjectCode] = useState("Converter"+uuidv4())



  useEffect(()=>{
    localStorage.setItem("BeginingProcessOfConverting",false)
  },[])
 
  const translateThoseFiles = async(orginalFiles,originalValues,css) =>{
  
    let errors= []
    //basic error
    if(originalValues.length == 0){
      return toast.error(t("noFileUploaded"))
    }


    let links_data = []
    let style_data = []
    for(let e = 0;e<originalValues.length;e++){
   
   
      let begin_body
      if(originalValues[e].includes("</head>")){
      begin_body = originalValues[e].split("</head>")[1]
      }else{
        begin_body = originalValues[e]
      }
      //link
   
      let expression_links_css = originalValues[e].match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)|| []
    
      expression_links_css =  expression_links_css.filter(el => el.endsWith(".css")) 
      let unique_links = [...new Set(expression_links_css)]
 
      //set Data of links for evrey style with it name 
      
      if(unique_links.length !=0){
        for(let l=0;l<unique_links.length;l++){
        let file_name = orginalFiles[l]?.name
          let linko = {
            file_name,
            style_links:unique_links[l]
          }
          links_data.push(linko)
        }
      }


      //style attribute 
      let stylesThinks = originalValues[e].match(/<style>(.*?)</gs) || [] ;
      //don' t forget to remove <style> and <
   
      if(stylesThinks.length !=0){
        for(let st = 0;st<stylesThinks.length;st++){
          let stylo = {
            file_name:orginalFiles[st].name,
            file_data:stylesThinks[st].replaceAll("<style>","").replaceAll("<","")
          }
          style_data.push(stylo)
        }
      }



      ///  /\sstyle="[a-zA-Z0-9:%#';!\.\s\(\)\-\,]*"/g; regex format to get all style in an element



      //link 


  
   
      let text_without_script = begin_body.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
      //remove css attributes
      let text_without_css_attributes =  text_without_script.replace(/<([a-z][a-z0-9]*)(?:[^>]*?((?:\s(?:src|href|style)=['\"][^'\"]*['\"]){0,3}))[^>]‌​*?(\/?)>/, '') 
      
    
      let text_without_html_comment = text_without_css_attributes.replace(/<!-[\S\s]*?-->/gm, '') 
      .replace(/\/\*[\S\s]*?\*\//gm,'')
      .replace(/^.*?\/\/.*/gm, '$1')
      
 
      let components_begin = text_without_html_comment.match(/\@Begin.+?\@/g) || []
      let components_end = text_without_html_comment.match(/\@End.+?\@/g) || []
      if(components_begin.length != components_end.length){
        errors.push({
          file:orginalFiles[e].name,
          erroe:"tags missing",
          code:text_without_html_comment,
          original_code: originalValues[e].replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
        })
        setErrorViewer(true)
      }
      
     
      //components between two strings 
     
     

   

    }
  
    let res = [] 
    //forma of autosaving in conveter
    //key project ID {file_one_ok:"",""}
    let final_data = []
    
    final_data.push(css)

    final_data.push(links_data)
    final_data.push(style_data)
   
    localStorage.setItem(`CSS${projectCode}`,JSON.stringify(final_data))
    for (let j= 0;j<orginalFiles.length;j++){
          if(errors.filter(el => el.file !=orginalFiles[j].name  ).length !=0){
          
      
           let begin_body
          
      if(originalValues[j].includes("</head>")){
      begin_body = originalValues[j].split("</head>")[1]
      }else{
        begin_body = originalValues[j]
      }
     
   
      let text_without_script = begin_body.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
      //remove css attributes
      // let text_without_css_attributes =  text_without_script.replace(/<([a-z][a-z0-9]*)(?:[^>]*?((?:\s(?:src|href|style)=['\"][^'\"]*['\"]){0,3}))[^>]‌​*?(\/?)>/, '') 
      
    
      let text_without_html_comment = text_without_script.replace(/<!-[\S\s]*?-->/gm, '') 
      .replace(/\/\*[\S\s]*?\*\//gm,'')
      .replace(/^.*?\/\/.*/gm, '$1')
      
           let f = {
            file_name:orginalFiles[j].name,
            file_value:originalValues[j],
            file_converted:"",
            
                }
           res.push(f)
            
          }
    }
    localStorage.setItem(projectCode,JSON.stringify(res))
    setAllErrorsCaptured(errors)
    if(errors.length == 0){
      setAllErrorsCaptured(["hi"])
   
 

      beginOfTheProcess(originalValues,true,orginalFiles)
    }
    



  }



  const htmltoJsx = async(test) =>{
        const response =  await axios.post("http://62.72.36.199:5000/api/html-jsx",{
          text_without_html_comment:test
        }) 
        return response?.htmljsx
  }
  function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item.style_links])
          object[item.style_links] = 0;
        object[item.style_links] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

  const beginOfTheProcess = async(data,condition,orginalFiles) =>{
    let components_data = []
    let zip = new JSZip();
    //if it has many personNames 
    //like angular and react 
    //the we generate two folder 
    //folder for react and other folder for angular 
    let pagesFolder
    let publicFolder
    let srcFolder
    let componentFolder
    let data_css = JSON.parse(localStorage.getItem(`CSS${projectCode}`)) 
    let saveDatacss = data_css[0]
    let data_links = data_css[1]
    let style_data_per_file=data_css[2]
    
    let all_captured_css_files = []
    for(let s = 0;s<saveDatacss.length;s++){
      all_captured_css_files.push(saveDatacss[s].file_name)
    }
    

     let duplicated =  find_duplicate_in_array(data_links)
    //if there is a duplicate 
 
    let global_style = ""
    let uniques_file = []
    if(duplicated.length!=0){
        for(let d =0;d<duplicated.length;d++){
          if(saveDatacss.filter(el => el.file_name ==duplicated[d]).length != 0){
            global_style+= saveDatacss.filter(el => el.file_name ==duplicated[d])[0].file_data 
            uniques_file.push(saveDatacss.filter(el => el.file_name ==duplicated[d])[0].file_name)
          }
        }
    }
  
    //make unique array 
    let all_unique_css_link_per_file = []
    for(let du = 0;du<data_links.length;du++){
      if(duplicated.filter(el => el != data_links[du].style_links).length !=0 ){
        all_unique_css_link_per_file.push(data_links[du])
      }
    }
  


    //if style is not empty then 
        // remove all <style> and <link> from html 
        //add to css file those think 
        // if link already exist in all of pages we add in the start 

    if(personName.filter(el => el == "React").length !=0){
        // create an initial folder called react


        let react = zip.folder("React")

         publicFolder = react.folder("public");
        let initialHtmlFolder =`
        <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <!--
          manifest.json provides metadata used when your web app is added to the
          homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
        -->
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
      
      <title>React App</title>
    </head>
    
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root"></div>
      
    </body>
    
    </html>
        `
        publicFolder.file("index.html", initialHtmlFolder);
        let packageFile =  `
        {
          "name": "react",
          "version": "1.0.0",
          "description": "React example starter project",
          "keywords": ["react", "starter"],
          "main": "src/index.js",
          "dependencies": {
            "react": "18.2.0",
            "react-dom": "18.2.0",
            "react-router-dom": "^6.4.3",
            "react-scripts": "^4.0.0"
          },
          "devDependencies": {
            "@babel/runtime": "7.13.8",
            "typescript": "4.1.3"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
          },
          "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
        }`
    
        react.file("package.json",packageFile)
    
         srcFolder = react.folder("src")
        let index = `
        import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    
    import App from "./App";
    
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    
        `
        srcFolder.file("index.js",index)
        
         pagesFolder = srcFolder.folder("pages")
         componentFolder = srcFolder.folder("components")
    }


    let angularComponent
    let angularPages
    let app_folder
    if(personName.filter(el => el == "Angular").length !=0){
      // create an initial folder called angular
      let angular = zip.folder("Angular")
      let angularJson = `
      {
        "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
        "cli": {
          "analytics": false
        },
        "version": 1,
        "newProjectRoot": "projects",
        "projects": {
          "angular-starts": {
            "projectType": "application",
            "schematics": {
              "@schematics/angular:application": {
                "strict": true
              }
            },
            "root": "",
            "sourceRoot": "src",
            "prefix": "app",
            "architect": {
              "build": {
                "builder": "@angular-devkit/build-angular:browser",
                "options": {
                  "outputPath": "dist/angular-starts",
                  "index": "src/index.html",
                  "main": "src/main.ts",
                  "polyfills": "src/polyfills.ts",
                  "tsConfig": "tsconfig.app.json",
                  "assets": [
                    "src/favicon.ico",
                    "src/assets"
                  ],
                  "styles": [
                    "src/styles.css"
                  ],
                  "scripts": []
                },
                "configurations": {
                  "production": {
                    "budgets": [
                      {
                        "type": "initial",
                        "maximumWarning": "500kb",
                        "maximumError": "1mb"
                      },
                      {
                        "type": "anyComponentStyle",
                        "maximumWarning": "2kb",
                        "maximumError": "4kb"
                      }
                    ],
                    "fileReplacements": [
                      {
                        "replace": "src/environments/environment.ts",
                        "with": "src/environments/environment.prod.ts"
                      }
                    ],
                    "outputHashing": "all"
                  },
                  "development": {
                    "buildOptimizer": false,
                    "optimization": false,
                    "vendorChunk": true,
                    "extractLicenses": false,
                    "sourceMap": true,
                    "namedChunks": true
                  }
                },
                "defaultConfiguration": "production"
              },
              "serve": {
                "builder": "@angular-devkit/build-angular:dev-server",
                "configurations": {
                  "production": {
                    "browserTarget": "angular-starts:build:production"
                  },
                  "development": {
                    "browserTarget": "angular-starts:build:development"
                  }
                },
                "defaultConfiguration": "development"
              },
              "extract-i18n": {
                "builder": "@angular-devkit/build-angular:extract-i18n",
                "options": {
                  "browserTarget": "angular-starts:build"
                }
              },
              "test": {
                "builder": "@angular-devkit/build-angular:karma",
                "options": {
                  "main": "src/test.ts",
                  "polyfills": "src/polyfills.ts",
                  "tsConfig": "tsconfig.spec.json",
                  "karmaConfig": "karma.conf.js",
                  "assets": [
                    "src/favicon.ico",
                    "src/assets"
                  ],
                  "styles": [
                    "src/styles.css"
                  ],
                  "scripts": []
                }
              }
            }
          }
        },
        "defaultProject": "angular-starts"
      }
      
      `
      angular.file("angular.json",angularJson)

      let karmaConfig = `
      // Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
      
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-starts'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};

      `
      angular.file("karma.conf.js",karmaConfig)

      let packageLock = `
      {
        "name": "angular-starts",
        "version": "0.0.0",
        "lockfileVersion": 1,
        "requires": true,
        "dependencies": {
          "@ampproject/remapping": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.0.tgz",
            "integrity": "sha512-qRmjj8nj9qmLTQXXmaR1cck3UXSRMPrbsLJAasZpF+t3riI71BXed5ebIOYwQntykeZuhjsdweEc9BxH5Jc26w==",
            "dev": true,
            "requires": {
              "@jridgewell/gen-mapping": "^0.1.0",
              "@jridgewell/trace-mapping": "^0.3.9"
            }
          },
          "@angular-devkit/architect": {
            "version": "0.1303.9",
            "resolved": "https://registry.npmjs.org/@angular-devkit/architect/-/architect-0.1303.9.tgz",
            "integrity": "sha512-RMHqCGDxbLqT+250A0a8vagsoTdqGjAxjhrvTeq7PJmClI7uJ/uA1Fs18+t85toIqVKn2hovdY9sNf42nBDD2Q==",
            "dev": true,
            "requires": {
              "@angular-devkit/core": "13.3.9",
              "rxjs": "6.6.7"
            },
            "dependencies": {
              "rxjs": {
                "version": "6.6.7",
                "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
                "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
                "dev": true,
                "requires": {
                  "tslib": "^1.9.0"
                }
              },
              "tslib": {
                "version": "1.14.1",
                "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                "dev": true
              }
            }
          },
          "@angular-devkit/build-angular": {
            "version": "13.3.9",
            "resolved": "https://registry.npmjs.org/@angular-devkit/build-angular/-/build-angular-13.3.9.tgz",
            "integrity": "sha512-1LqcMizeabx3yOkx3tptCSAoEhG6nO6hPgI/B3EJ07G/ZcoxunMWSeN3P3zT10dZMEHhcxl+8cSStSXaXj9hfA==",
            "dev": true,
            "requires": {
              "@ampproject/remapping": "2.2.0",
              "@angular-devkit/architect": "0.1303.9",
              "@angular-devkit/build-webpack": "0.1303.9",
              "@angular-devkit/core": "13.3.9",
              "@babel/core": "7.16.12",
              "@babel/generator": "7.16.8",
              "@babel/helper-annotate-as-pure": "7.16.7",
              "@babel/plugin-proposal-async-generator-functions": "7.16.8",
              "@babel/plugin-transform-async-to-generator": "7.16.8",
              "@babel/plugin-transform-runtime": "7.16.10",
              "@babel/preset-env": "7.16.11",
              "@babel/runtime": "7.16.7",
              "@babel/template": "7.16.7",
              "@discoveryjs/json-ext": "0.5.6",
              "@ngtools/webpack": "13.3.9",
              "ansi-colors": "4.1.1",
              "babel-loader": "8.2.5",
              "babel-plugin-istanbul": "6.1.1",
              "browserslist": "^4.9.1",
              "cacache": "15.3.0",
              "circular-dependency-plugin": "5.2.2",
              "copy-webpack-plugin": "10.2.1",
              "core-js": "3.20.3",
              "critters": "0.0.16",
              "css-loader": "6.5.1",
              "esbuild": "0.14.22",
              "esbuild-wasm": "0.14.22",
              "glob": "7.2.0",
              "https-proxy-agent": "5.0.0",
              "inquirer": "8.2.0",
              "jsonc-parser": "3.0.0",
              "karma-source-map-support": "1.4.0",
              "less": "4.1.2",
              "less-loader": "10.2.0",
              "license-webpack-plugin": "4.0.2",
              "loader-utils": "3.2.0",
              "mini-css-extract-plugin": "2.5.3",
              "minimatch": "3.0.5",
              "open": "8.4.0",
              "ora": "5.4.1",
              "parse5-html-rewriting-stream": "6.0.1",
              "piscina": "3.2.0",
              "postcss": "8.4.5",
              "postcss-import": "14.0.2",
              "postcss-loader": "6.2.1",
              "postcss-preset-env": "7.2.3",
              "regenerator-runtime": "0.13.9",
              "resolve-url-loader": "5.0.0",
              "rxjs": "6.6.7",
              "sass": "1.49.9",
              "sass-loader": "12.4.0",
              "semver": "7.3.5",
              "source-map-loader": "3.0.1",
              "source-map-support": "0.5.21",
              "stylus": "0.56.0",
              "stylus-loader": "6.2.0",
              "terser": "5.14.2",
              "text-table": "0.2.0",
              "tree-kill": "1.2.2",
              "tslib": "2.3.1",
              "webpack": "5.70.0",
              "webpack-dev-middleware": "5.3.0",
              "webpack-dev-server": "4.7.3",
              "webpack-merge": "5.8.0",
              "webpack-subresource-integrity": "5.1.0"
            },
            "dependencies": {
              "esbuild": {
                "version": "0.14.22",
                "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.14.22.tgz",
                "integrity": "sha512-CjFCFGgYtbFOPrwZNJf7wsuzesx8kqwAffOlbYcFDLFuUtP8xloK1GH+Ai13Qr0RZQf9tE7LMTHJ2iVGJ1SKZA==",
                "dev": true,
                "optional": true,
                "requires": {
                  "esbuild-android-arm64": "0.14.22",
                  "esbuild-darwin-64": "0.14.22",
                  "esbuild-darwin-arm64": "0.14.22",
                  "esbuild-freebsd-64": "0.14.22",
                  "esbuild-freebsd-arm64": "0.14.22",
                  "esbuild-linux-32": "0.14.22",
                  "esbuild-linux-64": "0.14.22",
                  "esbuild-linux-arm": "0.14.22",
                  "esbuild-linux-arm64": "0.14.22",
                  "esbuild-linux-mips64le": "0.14.22",
                  "esbuild-linux-ppc64le": "0.14.22",
                  "esbuild-linux-riscv64": "0.14.22",
                  "esbuild-linux-s390x": "0.14.22",
                  "esbuild-netbsd-64": "0.14.22",
                  "esbuild-openbsd-64": "0.14.22",
                  "esbuild-sunos-64": "0.14.22",
                  "esbuild-windows-32": "0.14.22",
                  "esbuild-windows-64": "0.14.22",
                  "esbuild-windows-arm64": "0.14.22"
                }
              },
              "rxjs": {
                "version": "6.6.7",
                "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
                "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
                "dev": true,
                "requires": {
                  "tslib": "^1.9.0"
                },
                "dependencies": {
                  "tslib": {
                    "version": "1.14.1",
                    "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                    "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                    "dev": true
                  }
                }
              },
              "tslib": {
                "version": "2.3.1",
                "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.1.tgz",
                "integrity": "sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw==",
                "dev": true
              }
            }
          },
          "@angular-devkit/build-webpack": {
            "version": "0.1303.9",
            "resolved": "https://registry.npmjs.org/@angular-devkit/build-webpack/-/build-webpack-0.1303.9.tgz",
            "integrity": "sha512-CdYXvAN1xAik8FyfdF1B8Nt1B/1aBvkZr65AUVFOmP6wuVzcdn78BMZmZD42srYbV2449sWi5Vyo/j0a/lfJww==",
            "dev": true,
            "requires": {
              "@angular-devkit/architect": "0.1303.9",
              "rxjs": "6.6.7"
            },
            "dependencies": {
              "rxjs": {
                "version": "6.6.7",
                "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
                "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
                "dev": true,
                "requires": {
                  "tslib": "^1.9.0"
                }
              },
              "tslib": {
                "version": "1.14.1",
                "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                "dev": true
              }
            }
          },
          "@angular-devkit/core": {
            "version": "13.3.9",
            "resolved": "https://registry.npmjs.org/@angular-devkit/core/-/core-13.3.9.tgz",
            "integrity": "sha512-XqCuIWyoqIsLABjV3GQL/+EiBCt3xVPPtNp3Mg4gjBsDLW7PEnvbb81yGkiZQmIsq4EIyQC/6fQa3VdjsCshGg==",
            "dev": true,
            "requires": {
              "ajv": "8.9.0",
              "ajv-formats": "2.1.1",
              "fast-json-stable-stringify": "2.1.0",
              "magic-string": "0.25.7",
              "rxjs": "6.6.7",
              "source-map": "0.7.3"
            },
            "dependencies": {
              "rxjs": {
                "version": "6.6.7",
                "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
                "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
                "dev": true,
                "requires": {
                  "tslib": "^1.9.0"
                }
              },
              "tslib": {
                "version": "1.14.1",
                "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                "dev": true
              }
            }
          },
          "@angular-devkit/schematics": {
            "version": "13.3.9",
            "resolved": "https://registry.npmjs.org/@angular-devkit/schematics/-/schematics-13.3.9.tgz",
            "integrity": "sha512-oNHLNtwbtEJ0dYPPXy1NpfRdSiFsYBl7+ozJklLgNV/AEOxlSi2qlVx6DoxNVjz5XgQ7Z+eoVDMw7ewGPnGSyA==",
            "dev": true,
            "requires": {
              "@angular-devkit/core": "13.3.9",
              "jsonc-parser": "3.0.0",
              "magic-string": "0.25.7",
              "ora": "5.4.1",
              "rxjs": "6.6.7"
            },
            "dependencies": {
              "rxjs": {
                "version": "6.6.7",
                "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
                "integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
                "dev": true,
                "requires": {
                  "tslib": "^1.9.0"
                }
              },
              "tslib": {
                "version": "1.14.1",
                "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
                "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
                "dev": true
              }
            }
          },
          "@angular/animations": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/animations/-/animations-13.3.11.tgz",
            "integrity": "sha512-KE/3RuvixHIk9YTSwaUsezsUm9Ig9Y8rZMpHOT/8bRtzPiJ5ld2GnDHjrJgyZn7TdoP4wz4YCta5eC4ycu+KCw==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@angular/cli": {
            "version": "13.3.9",
            "resolved": "https://registry.npmjs.org/@angular/cli/-/cli-13.3.9.tgz",
            "integrity": "sha512-b64mfB7A8vw5QmopEnkCVhGH8zDX5FrQVKKCRlK1dO3GEtAdfhFJb5J7TBbCOwp1XfYJ5jl+biNQy4HoX5HQPw==",
            "dev": true,
            "requires": {
              "@angular-devkit/architect": "0.1303.9",
              "@angular-devkit/core": "13.3.9",
              "@angular-devkit/schematics": "13.3.9",
              "@schematics/angular": "13.3.9",
              "@yarnpkg/lockfile": "1.1.0",
              "ansi-colors": "4.1.1",
              "debug": "4.3.3",
              "ini": "2.0.0",
              "inquirer": "8.2.0",
              "jsonc-parser": "3.0.0",
              "npm-package-arg": "8.1.5",
              "npm-pick-manifest": "6.1.1",
              "open": "8.4.0",
              "ora": "5.4.1",
              "pacote": "12.0.3",
              "resolve": "1.22.0",
              "semver": "7.3.5",
              "symbol-observable": "4.0.0",
              "uuid": "8.3.2"
            },
            "dependencies": {
              "debug": {
                "version": "4.3.3",
                "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.3.tgz",
                "integrity": "sha512-/zxw5+vh1Tfv+4Qn7a5nsbcJKPaSvCDhojn6FEl9vupwK2VCSDtEiEtqr8DFtzYFOdz63LBkxec7DYuc2jon6Q==",
                "dev": true,
                "requires": {
                  "ms": "2.1.2"
                }
              },
              "resolve": {
                "version": "1.22.0",
                "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.0.tgz",
                "integrity": "sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==",
                "dev": true,
                "requires": {
                  "is-core-module": "^2.8.1",
                  "path-parse": "^1.0.7",
                  "supports-preserve-symlinks-flag": "^1.0.0"
                }
              }
            }
          },
          "@angular/common": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/common/-/common-13.3.11.tgz",
            "integrity": "sha512-gPMwDYIAag1izXm2tRQ6EOIx9FVEUqLdr+qYtRVoQtoBmfkoTSLGcpeBXqqlPVxVPbA6Li1WZZT5wxLLlLAN+Q==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@angular/compiler": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/compiler/-/compiler-13.3.11.tgz",
            "integrity": "sha512-EV6JCBbXdHDHbPShWmymvuoxFYG0KVc8sDJpYp47WLHCY2zgZaXhvWs//Hrls3fmi+TGTekgRa2jOBBNce/Ggg==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@angular/compiler-cli": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/compiler-cli/-/compiler-cli-13.3.11.tgz",
            "integrity": "sha512-cl+3Wzxt8NRi2WY+RdsxuQ3yQRUp8pSlfSlJJnfaKE1BEqap6uem2DovuhnIbmrLhxZ5xt7o+I1szyO6sn6+ag==",
            "dev": true,
            "requires": {
              "@babel/core": "^7.17.2",
              "chokidar": "^3.0.0",
              "convert-source-map": "^1.5.1",
              "dependency-graph": "^0.11.0",
              "magic-string": "^0.26.0",
              "reflect-metadata": "^0.1.2",
              "semver": "^7.0.0",
              "sourcemap-codec": "^1.4.8",
              "tslib": "^2.3.0",
              "yargs": "^17.2.1"
            },
            "dependencies": {
              "@babel/core": {
                "version": "7.20.2",
                "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.20.2.tgz",
                "integrity": "sha512-w7DbG8DtMrJcFOi4VrLm+8QM4az8Mo+PuLBKLp2zrYRCow8W/f9xiXm5sN53C8HksCyDQwCKha9JiDoIyPjT2g==",
                "dev": true,
                "requires": {
                  "@ampproject/remapping": "^2.1.0",
                  "@babel/code-frame": "^7.18.6",
                  "@babel/generator": "^7.20.2",
                  "@babel/helper-compilation-targets": "^7.20.0",
                  "@babel/helper-module-transforms": "^7.20.2",
                  "@babel/helpers": "^7.20.1",
                  "@babel/parser": "^7.20.2",
                  "@babel/template": "^7.18.10",
                  "@babel/traverse": "^7.20.1",
                  "@babel/types": "^7.20.2",
                  "convert-source-map": "^1.7.0",
                  "debug": "^4.1.0",
                  "gensync": "^1.0.0-beta.2",
                  "json5": "^2.2.1",
                  "semver": "^6.3.0"
                },
                "dependencies": {
                  "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                  }
                }
              },
              "@babel/generator": {
                "version": "7.20.4",
                "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.20.4.tgz",
                "integrity": "sha512-luCf7yk/cm7yab6CAW1aiFnmEfBJplb/JojV56MYEK7ziWfGmFlTfmL9Ehwfy4gFhbjBfWO1wj7/TuSbVNEEtA==",
                "dev": true,
                "requires": {
                  "@babel/types": "^7.20.2",
                  "@jridgewell/gen-mapping": "^0.3.2",
                  "jsesc": "^2.5.1"
                }
              },
              "@babel/template": {
                "version": "7.18.10",
                "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.18.10.tgz",
                "integrity": "sha512-TI+rCtooWHr3QJ27kJxfjutghu44DLnasDMwpDqCXVTal9RLp3RSYNh4NdBrRP2cQAoG9A8juOQl6P6oZG4JxA==",
                "dev": true,
                "requires": {
                  "@babel/code-frame": "^7.18.6",
                  "@babel/parser": "^7.18.10",
                  "@babel/types": "^7.18.10"
                }
              },
              "@jridgewell/gen-mapping": {
                "version": "0.3.2",
                "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.2.tgz",
                "integrity": "sha512-mh65xKQAzI6iBcFzwv28KVWSmCkdRBWoOh+bYQGW3+6OZvbbN3TqMGo5hqYxQniRcH9F2VZIoJCm4pa3BPDK/A==",
                "dev": true,
                "requires": {
                  "@jridgewell/set-array": "^1.0.1",
                  "@jridgewell/sourcemap-codec": "^1.4.10",
                  "@jridgewell/trace-mapping": "^0.3.9"
                }
              },
              "magic-string": {
                "version": "0.26.7",
                "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.26.7.tgz",
                "integrity": "sha512-hX9XH3ziStPoPhJxLq1syWuZMxbDvGNbVchfrdCtanC7D13888bMFow61x8axrx+GfHLtVeAx2kxL7tTGRl+Ow==",
                "dev": true,
                "requires": {
                  "sourcemap-codec": "^1.4.8"
                }
              }
            }
          },
          "@angular/core": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/core/-/core-13.3.11.tgz",
            "integrity": "sha512-9BmE2CxyV0g+AkBeuc8IwjSOiJ8Y+kptXnqD/J8EAFT3B0/fLGVnjFdZC6Sev9L0SNZb6qdzebpfIOLqbUjReQ==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@angular/forms": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/forms/-/forms-13.3.11.tgz",
            "integrity": "sha512-iMgTNB+Qc3TsfAZSk1FnUE6MVoddPzxhG9AKCfSlvpjFh8VmXkIjxPL3dun7J8OjayT3X+B8f7LZ9AkKNXtBKw==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@angular/platform-browser": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/platform-browser/-/platform-browser-13.3.11.tgz",
            "integrity": "sha512-PG3chCErARb6wNzkOed2NsZmgvTmbumRx/6sMXqGkDKXYQm0JULnl4X42Rn+JCgJ9DLJi5/jrd1dbcBCrKk9Vg==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@angular/platform-browser-dynamic": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/platform-browser-dynamic/-/platform-browser-dynamic-13.3.11.tgz",
            "integrity": "sha512-xM0VRC1Nw//SHO3gkghUHyjCaaQbk1UYMq4vIu3iKVq9KLqOSZgccv0NcOKHzXXN3S5RgX2auuyOUOCD6ny1Pg==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@angular/router": {
            "version": "13.3.11",
            "resolved": "https://registry.npmjs.org/@angular/router/-/router-13.3.11.tgz",
            "integrity": "sha512-bJTcxDYKEyoqtsi1kJcDJWLmEN+dXpwhU07SsqUwfyN4V5fYF1ApDhpJ4c17hNdjEqe106srT9tiHXhmWayhmQ==",
            "requires": {
              "tslib": "^2.3.0"
            }
          },
          "@assemblyscript/loader": {
            "version": "0.10.1",
            "resolved": "https://registry.npmjs.org/@assemblyscript/loader/-/loader-0.10.1.tgz",
            "integrity": "sha512-H71nDOOL8Y7kWRLqf6Sums+01Q5msqBW2KhDUTemh1tvY04eSkSXrK0uj/4mmY0Xr16/3zyZmsrxN7CKuRbNRg==",
            "dev": true
          },
          "@babel/code-frame": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.18.6.tgz",
            "integrity": "sha512-TDCmlK5eOvH+eH7cdAFlNXeVJqWIQ7gW9tY1GJIpUtFb6CmjVyq2VM3u71bOyR8CRihcCgMUYoDNyLXao3+70Q==",
            "dev": true,
            "requires": {
              "@babel/highlight": "^7.18.6"
            }
          },
          "@babel/compat-data": {
            "version": "7.20.1",
            "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.20.1.tgz",
            "integrity": "sha512-EWZ4mE2diW3QALKvDMiXnbZpRvlj+nayZ112nK93SnhqOtpdsbVD4W+2tEoT3YNBAG9RBR0ISY758ZkOgsn6pQ==",
            "dev": true
          },
          "@babel/core": {
            "version": "7.16.12",
            "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.16.12.tgz",
            "integrity": "sha512-dK5PtG1uiN2ikk++5OzSYsitZKny4wOCD0nrO4TqnW4BVBTQ2NGS3NgilvT/TEyxTST7LNyWV/T4tXDoD3fOgg==",
            "dev": true,
            "requires": {
              "@babel/code-frame": "^7.16.7",
              "@babel/generator": "^7.16.8",
              "@babel/helper-compilation-targets": "^7.16.7",
              "@babel/helper-module-transforms": "^7.16.7",
              "@babel/helpers": "^7.16.7",
              "@babel/parser": "^7.16.12",
              "@babel/template": "^7.16.7",
              "@babel/traverse": "^7.16.10",
              "@babel/types": "^7.16.8",
              "convert-source-map": "^1.7.0",
              "debug": "^4.1.0",
              "gensync": "^1.0.0-beta.2",
              "json5": "^2.1.2",
              "semver": "^6.3.0",
              "source-map": "^0.5.0"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              },
              "source-map": {
                "version": "0.5.7",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                "integrity": "sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==",
                "dev": true
              }
            }
          },
          "@babel/generator": {
            "version": "7.16.8",
            "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.16.8.tgz",
            "integrity": "sha512-1ojZwE9+lOXzcWdWmO6TbUzDfqLD39CmEhN8+2cX9XkDo5yW1OpgfejfliysR2AWLpMamTiOiAp/mtroaymhpw==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.16.8",
              "jsesc": "^2.5.1",
              "source-map": "^0.5.0"
            },
            "dependencies": {
              "source-map": {
                "version": "0.5.7",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                "integrity": "sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==",
                "dev": true
              }
            }
          },
          "@babel/helper-annotate-as-pure": {
            "version": "7.16.7",
            "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.16.7.tgz",
            "integrity": "sha512-s6t2w/IPQVTAET1HitoowRGXooX8mCgtuP5195wD/QJPV6wYjpujCGF7JuMODVX2ZAJOf1GT6DT9MHEZvLOFSw==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.16.7"
            }
          },
          "@babel/helper-builder-binary-assignment-operator-visitor": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.18.9.tgz",
            "integrity": "sha512-yFQ0YCHoIqarl8BCRwBL8ulYUaZpz3bNsA7oFepAzee+8/+ImtADXNOmO5vJvsPff3qi+hvpkY/NYBTrBQgdNw==",
            "dev": true,
            "requires": {
              "@babel/helper-explode-assignable-expression": "^7.18.6",
              "@babel/types": "^7.18.9"
            }
          },
          "@babel/helper-compilation-targets": {
            "version": "7.20.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.20.0.tgz",
            "integrity": "sha512-0jp//vDGp9e8hZzBc6N/KwA5ZK3Wsm/pfm4CrY7vzegkVxc65SgSn6wYOnwHe9Js9HRQ1YTCKLGPzDtaS3RoLQ==",
            "dev": true,
            "requires": {
              "@babel/compat-data": "^7.20.0",
              "@babel/helper-validator-option": "^7.18.6",
              "browserslist": "^4.21.3",
              "semver": "^6.3.0"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "@babel/helper-create-class-features-plugin": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.20.2.tgz",
            "integrity": "sha512-k22GoYRAHPYr9I+Gvy2ZQlAe5mGy8BqWst2wRt8cwIufWTxrsVshhIBvYNqC80N0GSFWTsqRVexOtfzlgOEDvA==",
            "dev": true,
            "requires": {
              "@babel/helper-annotate-as-pure": "^7.18.6",
              "@babel/helper-environment-visitor": "^7.18.9",
              "@babel/helper-function-name": "^7.19.0",
              "@babel/helper-member-expression-to-functions": "^7.18.9",
              "@babel/helper-optimise-call-expression": "^7.18.6",
              "@babel/helper-replace-supers": "^7.19.1",
              "@babel/helper-split-export-declaration": "^7.18.6"
            },
            "dependencies": {
              "@babel/helper-annotate-as-pure": {
                "version": "7.18.6",
                "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.18.6.tgz",
                "integrity": "sha512-duORpUiYrEpzKIop6iNbjnwKLAKnJ47csTyRACyEmWj0QdUrm5aqNJGHSSEQSUAvNW0ojX0dOmK9dZduvkfeXA==",
                "dev": true,
                "requires": {
                  "@babel/types": "^7.18.6"
                }
              }
            }
          },
          "@babel/helper-create-regexp-features-plugin": {
            "version": "7.19.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.19.0.tgz",
            "integrity": "sha512-htnV+mHX32DF81amCDrwIDr8nrp1PTm+3wfBN9/v8QJOLEioOCOG7qNyq0nHeFiWbT3Eb7gsPwEmV64UCQ1jzw==",
            "dev": true,
            "requires": {
              "@babel/helper-annotate-as-pure": "^7.18.6",
              "regexpu-core": "^5.1.0"
            },
            "dependencies": {
              "@babel/helper-annotate-as-pure": {
                "version": "7.18.6",
                "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.18.6.tgz",
                "integrity": "sha512-duORpUiYrEpzKIop6iNbjnwKLAKnJ47csTyRACyEmWj0QdUrm5aqNJGHSSEQSUAvNW0ojX0dOmK9dZduvkfeXA==",
                "dev": true,
                "requires": {
                  "@babel/types": "^7.18.6"
                }
              }
            }
          },
          "@babel/helper-define-polyfill-provider": {
            "version": "0.3.3",
            "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.3.3.tgz",
            "integrity": "sha512-z5aQKU4IzbqCC1XH0nAqfsFLMVSo22SBKUc0BxGrLkolTdPTructy0ToNnlO2zA4j9Q/7pjMZf0DSY+DSTYzww==",
            "dev": true,
            "requires": {
              "@babel/helper-compilation-targets": "^7.17.7",
              "@babel/helper-plugin-utils": "^7.16.7",
              "debug": "^4.1.1",
              "lodash.debounce": "^4.0.8",
              "resolve": "^1.14.2",
              "semver": "^6.1.2"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "@babel/helper-environment-visitor": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-environment-visitor/-/helper-environment-visitor-7.18.9.tgz",
            "integrity": "sha512-3r/aACDJ3fhQ/EVgFy0hpj8oHyHpQc+LPtJoY9SzTThAsStm4Ptegq92vqKoE3vD706ZVFWITnMnxucw+S9Ipg==",
            "dev": true
          },
          "@babel/helper-explode-assignable-expression": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.18.6.tgz",
            "integrity": "sha512-eyAYAsQmB80jNfg4baAtLeWAQHfHFiR483rzFK+BhETlGZaQC9bsfrugfXDCbRHLQbIA7U5NxhhOxN7p/dWIcg==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.18.6"
            }
          },
          "@babel/helper-function-name": {
            "version": "7.19.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.19.0.tgz",
            "integrity": "sha512-WAwHBINyrpqywkUH0nTnNgI5ina5TFn85HKS0pbPDfxFfhyR/aNQEn4hGi1P1JyT//I0t4OgXUlofzWILRvS5w==",
            "dev": true,
            "requires": {
              "@babel/template": "^7.18.10",
              "@babel/types": "^7.19.0"
            },
            "dependencies": {
              "@babel/template": {
                "version": "7.18.10",
                "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.18.10.tgz",
                "integrity": "sha512-TI+rCtooWHr3QJ27kJxfjutghu44DLnasDMwpDqCXVTal9RLp3RSYNh4NdBrRP2cQAoG9A8juOQl6P6oZG4JxA==",
                "dev": true,
                "requires": {
                  "@babel/code-frame": "^7.18.6",
                  "@babel/parser": "^7.18.10",
                  "@babel/types": "^7.18.10"
                }
              }
            }
          },
          "@babel/helper-hoist-variables": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.18.6.tgz",
            "integrity": "sha512-UlJQPkFqFULIcyW5sbzgbkxn2FKRgwWiRexcuaR8RNJRy8+LLveqPjwZV/bwrLZCN0eUHD/x8D0heK1ozuoo6Q==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.18.6"
            }
          },
          "@babel/helper-member-expression-to-functions": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.18.9.tgz",
            "integrity": "sha512-RxifAh2ZoVU67PyKIO4AMi1wTenGfMR/O/ae0CCRqwgBAt5v7xjdtRw7UoSbsreKrQn5t7r89eruK/9JjYHuDg==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.18.9"
            }
          },
          "@babel/helper-module-imports": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.18.6.tgz",
            "integrity": "sha512-0NFvs3VkuSYbFi1x2Vd6tKrywq+z/cLeYC/RJNFrIX/30Bf5aiGYbtvGXolEktzJH8o5E5KJ3tT+nkxuuZFVlA==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.18.6"
            }
          },
          "@babel/helper-module-transforms": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.20.2.tgz",
            "integrity": "sha512-zvBKyJXRbmK07XhMuujYoJ48B5yvvmM6+wcpv6Ivj4Yg6qO7NOZOSnvZN9CRl1zz1Z4cKf8YejmCMh8clOoOeA==",
            "dev": true,
            "requires": {
              "@babel/helper-environment-visitor": "^7.18.9",
              "@babel/helper-module-imports": "^7.18.6",
              "@babel/helper-simple-access": "^7.20.2",
              "@babel/helper-split-export-declaration": "^7.18.6",
              "@babel/helper-validator-identifier": "^7.19.1",
              "@babel/template": "^7.18.10",
              "@babel/traverse": "^7.20.1",
              "@babel/types": "^7.20.2"
            },
            "dependencies": {
              "@babel/template": {
                "version": "7.18.10",
                "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.18.10.tgz",
                "integrity": "sha512-TI+rCtooWHr3QJ27kJxfjutghu44DLnasDMwpDqCXVTal9RLp3RSYNh4NdBrRP2cQAoG9A8juOQl6P6oZG4JxA==",
                "dev": true,
                "requires": {
                  "@babel/code-frame": "^7.18.6",
                  "@babel/parser": "^7.18.10",
                  "@babel/types": "^7.18.10"
                }
              }
            }
          },
          "@babel/helper-optimise-call-expression": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.18.6.tgz",
            "integrity": "sha512-HP59oD9/fEHQkdcbgFCnbmgH5vIQTJbxh2yf+CdM89/glUNnuzr87Q8GIjGEnOktTROemO0Pe0iPAYbqZuOUiA==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.18.6"
            }
          },
          "@babel/helper-plugin-utils": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.20.2.tgz",
            "integrity": "sha512-8RvlJG2mj4huQ4pZ+rU9lqKi9ZKiRmuvGuM2HlWmkmgOhbs6zEAw6IEiJ5cQqGbDzGZOhwuOQNtZMi/ENLjZoQ==",
            "dev": true
          },
          "@babel/helper-remap-async-to-generator": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.18.9.tgz",
            "integrity": "sha512-dI7q50YKd8BAv3VEfgg7PS7yD3Rtbi2J1XMXaalXO0W0164hYLnh8zpjRS0mte9MfVp/tltvr/cfdXPvJr1opA==",
            "dev": true,
            "requires": {
              "@babel/helper-annotate-as-pure": "^7.18.6",
              "@babel/helper-environment-visitor": "^7.18.9",
              "@babel/helper-wrap-function": "^7.18.9",
              "@babel/types": "^7.18.9"
            },
            "dependencies": {
              "@babel/helper-annotate-as-pure": {
                "version": "7.18.6",
                "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.18.6.tgz",
                "integrity": "sha512-duORpUiYrEpzKIop6iNbjnwKLAKnJ47csTyRACyEmWj0QdUrm5aqNJGHSSEQSUAvNW0ojX0dOmK9dZduvkfeXA==",
                "dev": true,
                "requires": {
                  "@babel/types": "^7.18.6"
                }
              }
            }
          },
          "@babel/helper-replace-supers": {
            "version": "7.19.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.19.1.tgz",
            "integrity": "sha512-T7ahH7wV0Hfs46SFh5Jz3s0B6+o8g3c+7TMxu7xKfmHikg7EAZ3I2Qk9LFhjxXq8sL7UkP5JflezNwoZa8WvWw==",
            "dev": true,
            "requires": {
              "@babel/helper-environment-visitor": "^7.18.9",
              "@babel/helper-member-expression-to-functions": "^7.18.9",
              "@babel/helper-optimise-call-expression": "^7.18.6",
              "@babel/traverse": "^7.19.1",
              "@babel/types": "^7.19.0"
            }
          },
          "@babel/helper-simple-access": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.20.2.tgz",
            "integrity": "sha512-+0woI/WPq59IrqDYbVGfshjT5Dmk/nnbdpcF8SnMhhXObpTq2KNBdLFRFrkVdbDOyUmHBCxzm5FHV1rACIkIbA==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.20.2"
            }
          },
          "@babel/helper-skip-transparent-expression-wrappers": {
            "version": "7.20.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.20.0.tgz",
            "integrity": "sha512-5y1JYeNKfvnT8sZcK9DVRtpTbGiomYIHviSP3OQWmDPU3DeH4a1ZlT/N2lyQ5P8egjcRaT/Y9aNqUxK0WsnIIg==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.20.0"
            }
          },
          "@babel/helper-split-export-declaration": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.18.6.tgz",
            "integrity": "sha512-bde1etTx6ZyTmobl9LLMMQsaizFVZrquTEHOqKeQESMKo4PlObf+8+JA25ZsIpZhT/WEd39+vOdLXAFG/nELpA==",
            "dev": true,
            "requires": {
              "@babel/types": "^7.18.6"
            }
          },
          "@babel/helper-string-parser": {
            "version": "7.19.4",
            "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.19.4.tgz",
            "integrity": "sha512-nHtDoQcuqFmwYNYPz3Rah5ph2p8PFeFCsZk9A/48dPc/rGocJ5J3hAAZ7pb76VWX3fZKu+uEr/FhH5jLx7umrw==",
            "dev": true
          },
          "@babel/helper-validator-identifier": {
            "version": "7.19.1",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.19.1.tgz",
            "integrity": "sha512-awrNfaMtnHUr653GgGEs++LlAvW6w+DcPrOliSMXWCKo597CwL5Acf/wWdNkf/tfEQE3mjkeD1YOVZOUV/od1w==",
            "dev": true
          },
          "@babel/helper-validator-option": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.18.6.tgz",
            "integrity": "sha512-XO7gESt5ouv/LRJdrVjkShckw6STTaB7l9BrpBaAHDeF5YZT+01PCwmR0SJHnkW6i8OwW/EVWRShfi4j2x+KQw==",
            "dev": true
          },
          "@babel/helper-wrap-function": {
            "version": "7.19.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.19.0.tgz",
            "integrity": "sha512-txX8aN8CZyYGTwcLhlk87KRqncAzhh5TpQamZUa0/u3an36NtDpUP6bQgBCBcLeBs09R/OwQu3OjK0k/HwfNDg==",
            "dev": true,
            "requires": {
              "@babel/helper-function-name": "^7.19.0",
              "@babel/template": "^7.18.10",
              "@babel/traverse": "^7.19.0",
              "@babel/types": "^7.19.0"
            },
            "dependencies": {
              "@babel/template": {
                "version": "7.18.10",
                "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.18.10.tgz",
                "integrity": "sha512-TI+rCtooWHr3QJ27kJxfjutghu44DLnasDMwpDqCXVTal9RLp3RSYNh4NdBrRP2cQAoG9A8juOQl6P6oZG4JxA==",
                "dev": true,
                "requires": {
                  "@babel/code-frame": "^7.18.6",
                  "@babel/parser": "^7.18.10",
                  "@babel/types": "^7.18.10"
                }
              }
            }
          },
          "@babel/helpers": {
            "version": "7.20.1",
            "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.20.1.tgz",
            "integrity": "sha512-J77mUVaDTUJFZ5BpP6mMn6OIl3rEWymk2ZxDBQJUG3P+PbmyMcF3bYWvz0ma69Af1oobDqT/iAsvzhB58xhQUg==",
            "dev": true,
            "requires": {
              "@babel/template": "^7.18.10",
              "@babel/traverse": "^7.20.1",
              "@babel/types": "^7.20.0"
            },
            "dependencies": {
              "@babel/template": {
                "version": "7.18.10",
                "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.18.10.tgz",
                "integrity": "sha512-TI+rCtooWHr3QJ27kJxfjutghu44DLnasDMwpDqCXVTal9RLp3RSYNh4NdBrRP2cQAoG9A8juOQl6P6oZG4JxA==",
                "dev": true,
                "requires": {
                  "@babel/code-frame": "^7.18.6",
                  "@babel/parser": "^7.18.10",
                  "@babel/types": "^7.18.10"
                }
              }
            }
          },
          "@babel/highlight": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.18.6.tgz",
            "integrity": "sha512-u7stbOuYjaPezCuLj29hNW1v64M2Md2qupEKP1fHc7WdOA3DgLh37suiSrZYY7haUB7iBeQZ9P1uiRF359do3g==",
            "dev": true,
            "requires": {
              "@babel/helper-validator-identifier": "^7.18.6",
              "chalk": "^2.0.0",
              "js-tokens": "^4.0.0"
            }
          },
          "@babel/parser": {
            "version": "7.20.3",
            "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.20.3.tgz",
            "integrity": "sha512-OP/s5a94frIPXwjzEcv5S/tpQfc6XhxYUnmWpgdqMWGgYCuErA3SzozaRAMQgSZWKeTJxht9aWAkUY+0UzvOFg==",
            "dev": true
          },
          "@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/-/plugin-bugfix-safari-id-destructuring-collision-in-function-expression-7.18.6.tgz",
            "integrity": "sha512-Dgxsyg54Fx1d4Nge8UnvTrED63vrwOdPmyvPzlNN/boaliRP54pm3pGzZD1SJUwrBA+Cs/xdG8kXX6Mn/RfISQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.18.9.tgz",
            "integrity": "sha512-AHrP9jadvH7qlOj6PINbgSuphjQUAK7AOT7DPjBo9EHoLhQTnnK5u45e1Hd4DbSQEO9nqPWtQ89r+XEOWFScKg==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9",
              "@babel/helper-skip-transparent-expression-wrappers": "^7.18.9",
              "@babel/plugin-proposal-optional-chaining": "^7.18.9"
            }
          },
          "@babel/plugin-proposal-async-generator-functions": {
            "version": "7.16.8",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.16.8.tgz",
            "integrity": "sha512-71YHIvMuiuqWJQkebWJtdhQTfd4Q4mF76q2IX37uZPkG9+olBxsX+rH1vkhFto4UeJZ9dPY2s+mDvhDm1u2BGQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.16.7",
              "@babel/helper-remap-async-to-generator": "^7.16.8",
              "@babel/plugin-syntax-async-generators": "^7.8.4"
            }
          },
          "@babel/plugin-proposal-class-properties": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.18.6.tgz",
            "integrity": "sha512-cumfXOF0+nzZrrN8Rf0t7M+tF6sZc7vhQwYQck9q1/5w2OExlD+b4v4RpMJFaV1Z7WcDRgO6FqvxqxGlwo+RHQ==",
            "dev": true,
            "requires": {
              "@babel/helper-create-class-features-plugin": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-proposal-class-static-block": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-static-block/-/plugin-proposal-class-static-block-7.18.6.tgz",
            "integrity": "sha512-+I3oIiNxrCpup3Gi8n5IGMwj0gOCAjcJUSQEcotNnCCPMEnixawOQ+KeJPlgfjzx+FKQ1QSyZOWe7wmoJp7vhw==",
            "dev": true,
            "requires": {
              "@babel/helper-create-class-features-plugin": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/plugin-syntax-class-static-block": "^7.14.5"
            }
          },
          "@babel/plugin-proposal-dynamic-import": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.18.6.tgz",
            "integrity": "sha512-1auuwmK+Rz13SJj36R+jqFPMJWyKEDd7lLSdOj4oJK0UTgGueSAtkrCvz9ewmgyU/P941Rv2fQwZJN8s6QruXw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/plugin-syntax-dynamic-import": "^7.8.3"
            }
          },
          "@babel/plugin-proposal-export-namespace-from": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.18.9.tgz",
            "integrity": "sha512-k1NtHyOMvlDDFeb9G5PhUXuGj8m/wiwojgQVEhJ/fsVsMCpLyOP4h0uGEjYJKrRI+EVPlb5Jk+Gt9P97lOGwtA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9",
              "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
            }
          },
          "@babel/plugin-proposal-json-strings": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.18.6.tgz",
            "integrity": "sha512-lr1peyn9kOdbYc0xr0OdHTZ5FMqS6Di+H0Fz2I/JwMzGmzJETNeOFq2pBySw6X/KFL5EWDjlJuMsUGRFb8fQgQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/plugin-syntax-json-strings": "^7.8.3"
            }
          },
          "@babel/plugin-proposal-logical-assignment-operators": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.18.9.tgz",
            "integrity": "sha512-128YbMpjCrP35IOExw2Fq+x55LMP42DzhOhX2aNNIdI9avSWl2PI0yuBWarr3RYpZBSPtabfadkH2yeRiMD61Q==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9",
              "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
            }
          },
          "@babel/plugin-proposal-nullish-coalescing-operator": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.18.6.tgz",
            "integrity": "sha512-wQxQzxYeJqHcfppzBDnm1yAY0jSRkUXR2z8RePZYrKwMKgMlE8+Z6LUno+bd6LvbGh8Gltvy74+9pIYkr+XkKA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3"
            }
          },
          "@babel/plugin-proposal-numeric-separator": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.18.6.tgz",
            "integrity": "sha512-ozlZFogPqoLm8WBr5Z8UckIoE4YQ5KESVcNudyXOR8uqIkliTEgJ3RoketfG6pmzLdeZF0H/wjE9/cCEitBl7Q==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/plugin-syntax-numeric-separator": "^7.10.4"
            }
          },
          "@babel/plugin-proposal-object-rest-spread": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.20.2.tgz",
            "integrity": "sha512-Ks6uej9WFK+fvIMesSqbAto5dD8Dz4VuuFvGJFKgIGSkJuRGcrwGECPA1fDgQK3/DbExBJpEkTeYeB8geIFCSQ==",
            "dev": true,
            "requires": {
              "@babel/compat-data": "^7.20.1",
              "@babel/helper-compilation-targets": "^7.20.0",
              "@babel/helper-plugin-utils": "^7.20.2",
              "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
              "@babel/plugin-transform-parameters": "^7.20.1"
            }
          },
          "@babel/plugin-proposal-optional-catch-binding": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.18.6.tgz",
            "integrity": "sha512-Q40HEhs9DJQyaZfUjjn6vE8Cv4GmMHCYuMGIWUnlxH6400VGxOuwWsPt4FxXxJkC/5eOzgn0z21M9gMT4MOhbw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/plugin-syntax-optional-catch-binding": "^7.8.3"
            }
          },
          "@babel/plugin-proposal-optional-chaining": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.18.9.tgz",
            "integrity": "sha512-v5nwt4IqBXihxGsW2QmCWMDS3B3bzGIk/EQVZz2ei7f3NJl8NzAJVvUmpDW5q1CRNY+Beb/k58UAH1Km1N411w==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9",
              "@babel/helper-skip-transparent-expression-wrappers": "^7.18.9",
              "@babel/plugin-syntax-optional-chaining": "^7.8.3"
            }
          },
          "@babel/plugin-proposal-private-methods": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.18.6.tgz",
            "integrity": "sha512-nutsvktDItsNn4rpGItSNV2sz1XwS+nfU0Rg8aCx3W3NOKVzdMjJRu0O5OkgDp3ZGICSTbgRpxZoWsxoKRvbeA==",
            "dev": true,
            "requires": {
              "@babel/helper-create-class-features-plugin": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-proposal-private-property-in-object": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.18.6.tgz",
            "integrity": "sha512-9Rysx7FOctvT5ouj5JODjAFAkgGoudQuLPamZb0v1TGLpapdNaftzifU8NTWQm0IRjqoYypdrSmyWgkocDQ8Dw==",
            "dev": true,
            "requires": {
              "@babel/helper-annotate-as-pure": "^7.18.6",
              "@babel/helper-create-class-features-plugin": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/plugin-syntax-private-property-in-object": "^7.14.5"
            },
            "dependencies": {
              "@babel/helper-annotate-as-pure": {
                "version": "7.18.6",
                "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.18.6.tgz",
                "integrity": "sha512-duORpUiYrEpzKIop6iNbjnwKLAKnJ47csTyRACyEmWj0QdUrm5aqNJGHSSEQSUAvNW0ojX0dOmK9dZduvkfeXA==",
                "dev": true,
                "requires": {
                  "@babel/types": "^7.18.6"
                }
              }
            }
          },
          "@babel/plugin-proposal-unicode-property-regex": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.18.6.tgz",
            "integrity": "sha512-2BShG/d5yoZyXZfVePH91urL5wTG6ASZU9M4o03lKK8u8UW1y08OMttBSOADTcJrnPMpvDXRG3G8fyLh4ovs8w==",
            "dev": true,
            "requires": {
              "@babel/helper-create-regexp-features-plugin": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-syntax-async-generators": {
            "version": "7.8.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
            "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.0"
            }
          },
          "@babel/plugin-syntax-class-properties": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
            "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.12.13"
            }
          },
          "@babel/plugin-syntax-class-static-block": {
            "version": "7.14.5",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
            "integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.14.5"
            }
          },
          "@babel/plugin-syntax-dynamic-import": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
            "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.0"
            }
          },
          "@babel/plugin-syntax-export-namespace-from": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
            "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.3"
            }
          },
          "@babel/plugin-syntax-json-strings": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
            "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.0"
            }
          },
          "@babel/plugin-syntax-logical-assignment-operators": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
            "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.10.4"
            }
          },
          "@babel/plugin-syntax-nullish-coalescing-operator": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
            "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.0"
            }
          },
          "@babel/plugin-syntax-numeric-separator": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
            "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.10.4"
            }
          },
          "@babel/plugin-syntax-object-rest-spread": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
            "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.0"
            }
          },
          "@babel/plugin-syntax-optional-catch-binding": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
            "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.0"
            }
          },
          "@babel/plugin-syntax-optional-chaining": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
            "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.8.0"
            }
          },
          "@babel/plugin-syntax-private-property-in-object": {
            "version": "7.14.5",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
            "integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.14.5"
            }
          },
          "@babel/plugin-syntax-top-level-await": {
            "version": "7.14.5",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
            "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.14.5"
            }
          },
          "@babel/plugin-transform-arrow-functions": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.18.6.tgz",
            "integrity": "sha512-9S9X9RUefzrsHZmKMbDXxweEH+YlE8JJEuat9FdvW9Qh1cw7W64jELCtWNkPBPX5En45uy28KGvA/AySqUh8CQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-async-to-generator": {
            "version": "7.16.8",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.16.8.tgz",
            "integrity": "sha512-MtmUmTJQHCnyJVrScNzNlofQJ3dLFuobYn3mwOTKHnSCMtbNsqvF71GQmJfFjdrXSsAA7iysFmYWw4bXZ20hOg==",
            "dev": true,
            "requires": {
              "@babel/helper-module-imports": "^7.16.7",
              "@babel/helper-plugin-utils": "^7.16.7",
              "@babel/helper-remap-async-to-generator": "^7.16.8"
            }
          },
          "@babel/plugin-transform-block-scoped-functions": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.18.6.tgz",
            "integrity": "sha512-ExUcOqpPWnliRcPqves5HJcJOvHvIIWfuS4sroBUenPuMdmW+SMHDakmtS7qOo13sVppmUijqeTv7qqGsvURpQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-block-scoping": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.20.2.tgz",
            "integrity": "sha512-y5V15+04ry69OV2wULmwhEA6jwSWXO1TwAtIwiPXcvHcoOQUqpyMVd2bDsQJMW8AurjulIyUV8kDqtjSwHy1uQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.20.2"
            }
          },
          "@babel/plugin-transform-classes": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.20.2.tgz",
            "integrity": "sha512-9rbPp0lCVVoagvtEyQKSo5L8oo0nQS/iif+lwlAz29MccX2642vWDlSZK+2T2buxbopotId2ld7zZAzRfz9j1g==",
            "dev": true,
            "requires": {
              "@babel/helper-annotate-as-pure": "^7.18.6",
              "@babel/helper-compilation-targets": "^7.20.0",
              "@babel/helper-environment-visitor": "^7.18.9",
              "@babel/helper-function-name": "^7.19.0",
              "@babel/helper-optimise-call-expression": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.20.2",
              "@babel/helper-replace-supers": "^7.19.1",
              "@babel/helper-split-export-declaration": "^7.18.6",
              "globals": "^11.1.0"
            },
            "dependencies": {
              "@babel/helper-annotate-as-pure": {
                "version": "7.18.6",
                "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.18.6.tgz",
                "integrity": "sha512-duORpUiYrEpzKIop6iNbjnwKLAKnJ47csTyRACyEmWj0QdUrm5aqNJGHSSEQSUAvNW0ojX0dOmK9dZduvkfeXA==",
                "dev": true,
                "requires": {
                  "@babel/types": "^7.18.6"
                }
              }
            }
          },
          "@babel/plugin-transform-computed-properties": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.18.9.tgz",
            "integrity": "sha512-+i0ZU1bCDymKakLxn5srGHrsAPRELC2WIbzwjLhHW9SIE1cPYkLCL0NlnXMZaM1vhfgA2+M7hySk42VBvrkBRw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9"
            }
          },
          "@babel/plugin-transform-destructuring": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.20.2.tgz",
            "integrity": "sha512-mENM+ZHrvEgxLTBXUiQ621rRXZes3KWUv6NdQlrnr1TkWVw+hUjQBZuP2X32qKlrlG2BzgR95gkuCRSkJl8vIw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.20.2"
            }
          },
          "@babel/plugin-transform-dotall-regex": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.18.6.tgz",
            "integrity": "sha512-6S3jpun1eEbAxq7TdjLotAsl4WpQI9DxfkycRcKrjhQYzU87qpXdknpBg/e+TdcMehqGnLFi7tnFUBR02Vq6wg==",
            "dev": true,
            "requires": {
              "@babel/helper-create-regexp-features-plugin": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-duplicate-keys": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.18.9.tgz",
            "integrity": "sha512-d2bmXCtZXYc59/0SanQKbiWINadaJXqtvIQIzd4+hNwkWBgyCd5F/2t1kXoUdvPMrxzPvhK6EMQRROxsue+mfw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9"
            }
          },
          "@babel/plugin-transform-exponentiation-operator": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.18.6.tgz",
            "integrity": "sha512-wzEtc0+2c88FVR34aQmiz56dxEkxr2g8DQb/KfaFa1JYXOFVsbhvAonFN6PwVWj++fKmku8NP80plJ5Et4wqHw==",
            "dev": true,
            "requires": {
              "@babel/helper-builder-binary-assignment-operator-visitor": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-for-of": {
            "version": "7.18.8",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.18.8.tgz",
            "integrity": "sha512-yEfTRnjuskWYo0k1mHUqrVWaZwrdq8AYbfrpqULOJOaucGSp4mNMVps+YtA8byoevxS/urwU75vyhQIxcCgiBQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-function-name": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.18.9.tgz",
            "integrity": "sha512-WvIBoRPaJQ5yVHzcnJFor7oS5Ls0PYixlTYE63lCj2RtdQEl15M68FXQlxnG6wdraJIXRdR7KI+hQ7q/9QjrCQ==",
            "dev": true,
            "requires": {
              "@babel/helper-compilation-targets": "^7.18.9",
              "@babel/helper-function-name": "^7.18.9",
              "@babel/helper-plugin-utils": "^7.18.9"
            }
          },
          "@babel/plugin-transform-literals": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.18.9.tgz",
            "integrity": "sha512-IFQDSRoTPnrAIrI5zoZv73IFeZu2dhu6irxQjY9rNjTT53VmKg9fenjvoiOWOkJ6mm4jKVPtdMzBY98Fp4Z4cg==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9"
            }
          },
          "@babel/plugin-transform-member-expression-literals": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.18.6.tgz",
            "integrity": "sha512-qSF1ihLGO3q+/g48k85tUjD033C29TNTVB2paCwZPVmOsjn9pClvYYrM2VeJpBY2bcNkuny0YUyTNRyRxJ54KA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-modules-amd": {
            "version": "7.19.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.19.6.tgz",
            "integrity": "sha512-uG3od2mXvAtIFQIh0xrpLH6r5fpSQN04gIVovl+ODLdUMANokxQLZnPBHcjmv3GxRjnqwLuHvppjjcelqUFZvg==",
            "dev": true,
            "requires": {
              "@babel/helper-module-transforms": "^7.19.6",
              "@babel/helper-plugin-utils": "^7.19.0"
            }
          },
          "@babel/plugin-transform-modules-commonjs": {
            "version": "7.19.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.19.6.tgz",
            "integrity": "sha512-8PIa1ym4XRTKuSsOUXqDG0YaOlEuTVvHMe5JCfgBMOtHvJKw/4NGovEGN33viISshG/rZNVrACiBmPQLvWN8xQ==",
            "dev": true,
            "requires": {
              "@babel/helper-module-transforms": "^7.19.6",
              "@babel/helper-plugin-utils": "^7.19.0",
              "@babel/helper-simple-access": "^7.19.4"
            }
          },
          "@babel/plugin-transform-modules-systemjs": {
            "version": "7.19.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.19.6.tgz",
            "integrity": "sha512-fqGLBepcc3kErfR9R3DnVpURmckXP7gj7bAlrTQyBxrigFqszZCkFkcoxzCp2v32XmwXLvbw+8Yq9/b+QqksjQ==",
            "dev": true,
            "requires": {
              "@babel/helper-hoist-variables": "^7.18.6",
              "@babel/helper-module-transforms": "^7.19.6",
              "@babel/helper-plugin-utils": "^7.19.0",
              "@babel/helper-validator-identifier": "^7.19.1"
            }
          },
          "@babel/plugin-transform-modules-umd": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.18.6.tgz",
            "integrity": "sha512-dcegErExVeXcRqNtkRU/z8WlBLnvD4MRnHgNs3MytRO1Mn1sHRyhbcpYbVMGclAqOjdW+9cfkdZno9dFdfKLfQ==",
            "dev": true,
            "requires": {
              "@babel/helper-module-transforms": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-named-capturing-groups-regex": {
            "version": "7.19.1",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.19.1.tgz",
            "integrity": "sha512-oWk9l9WItWBQYS4FgXD4Uyy5kq898lvkXpXQxoJEY1RnvPk4R/Dvu2ebXU9q8lP+rlMwUQTFf2Ok6d78ODa0kw==",
            "dev": true,
            "requires": {
              "@babel/helper-create-regexp-features-plugin": "^7.19.0",
              "@babel/helper-plugin-utils": "^7.19.0"
            }
          },
          "@babel/plugin-transform-new-target": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.18.6.tgz",
            "integrity": "sha512-DjwFA/9Iu3Z+vrAn+8pBUGcjhxKguSMlsFqeCKbhb9BAV756v0krzVK04CRDi/4aqmk8BsHb4a/gFcaA5joXRw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-object-super": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.18.6.tgz",
            "integrity": "sha512-uvGz6zk+pZoS1aTZrOvrbj6Pp/kK2mp45t2B+bTDre2UgsZZ8EZLSJtUg7m/no0zOJUWgFONpB7Zv9W2tSaFlA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6",
              "@babel/helper-replace-supers": "^7.18.6"
            }
          },
          "@babel/plugin-transform-parameters": {
            "version": "7.20.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.20.3.tgz",
            "integrity": "sha512-oZg/Fpx0YDrj13KsLyO8I/CX3Zdw7z0O9qOd95SqcoIzuqy/WTGWvePeHAnZCN54SfdyjHcb1S30gc8zlzlHcA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.20.2"
            }
          },
          "@babel/plugin-transform-property-literals": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.18.6.tgz",
            "integrity": "sha512-cYcs6qlgafTud3PAzrrRNbQtfpQ8+y/+M5tKmksS9+M1ckbH6kzY8MrexEM9mcA6JDsukE19iIRvAyYl463sMg==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-regenerator": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.18.6.tgz",
            "integrity": "sha512-poqRI2+qiSdeldcz4wTSTXBRryoq3Gc70ye7m7UD5Ww0nE29IXqMl6r7Nd15WBgRd74vloEMlShtH6CKxVzfmQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6",
              "regenerator-transform": "^0.15.0"
            }
          },
          "@babel/plugin-transform-reserved-words": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.18.6.tgz",
            "integrity": "sha512-oX/4MyMoypzHjFrT1CdivfKZ+XvIPMFXwwxHp/r0Ddy2Vuomt4HDFGmft1TAY2yiTKiNSsh3kjBAzcM8kSdsjA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-runtime": {
            "version": "7.16.10",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.16.10.tgz",
            "integrity": "sha512-9nwTiqETv2G7xI4RvXHNfpGdr8pAA+Q/YtN3yLK7OoK7n9OibVm/xymJ838a9A6E/IciOLPj82lZk0fW6O4O7w==",
            "dev": true,
            "requires": {
              "@babel/helper-module-imports": "^7.16.7",
              "@babel/helper-plugin-utils": "^7.16.7",
              "babel-plugin-polyfill-corejs2": "^0.3.0",
              "babel-plugin-polyfill-corejs3": "^0.5.0",
              "babel-plugin-polyfill-regenerator": "^0.3.0",
              "semver": "^6.3.0"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "@babel/plugin-transform-shorthand-properties": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.18.6.tgz",
            "integrity": "sha512-eCLXXJqv8okzg86ywZJbRn19YJHU4XUa55oz2wbHhaQVn/MM+XhukiT7SYqp/7o00dg52Rj51Ny+Ecw4oyoygw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-spread": {
            "version": "7.19.0",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.19.0.tgz",
            "integrity": "sha512-RsuMk7j6n+r752EtzyScnWkQyuJdli6LdO5Klv8Yx0OfPVTcQkIUfS8clx5e9yHXzlnhOZF3CbQ8C2uP5j074w==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.19.0",
              "@babel/helper-skip-transparent-expression-wrappers": "^7.18.9"
            }
          },
          "@babel/plugin-transform-sticky-regex": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.18.6.tgz",
            "integrity": "sha512-kfiDrDQ+PBsQDO85yj1icueWMfGfJFKN1KCkndygtu/C9+XUfydLC8Iv5UYJqRwy4zk8EcplRxEOeLyjq1gm6Q==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/plugin-transform-template-literals": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.18.9.tgz",
            "integrity": "sha512-S8cOWfT82gTezpYOiVaGHrCbhlHgKhQt8XH5ES46P2XWmX92yisoZywf5km75wv5sYcXDUCLMmMxOLCtthDgMA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9"
            }
          },
          "@babel/plugin-transform-typeof-symbol": {
            "version": "7.18.9",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.18.9.tgz",
            "integrity": "sha512-SRfwTtF11G2aemAZWivL7PD+C9z52v9EvMqH9BuYbabyPuKUvSWks3oCg6041pT925L4zVFqaVBeECwsmlguEw==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9"
            }
          },
          "@babel/plugin-transform-unicode-escapes": {
            "version": "7.18.10",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.18.10.tgz",
            "integrity": "sha512-kKAdAI+YzPgGY/ftStBFXTI1LZFju38rYThnfMykS+IXy8BVx+res7s2fxf1l8I35DV2T97ezo6+SGrXz6B3iQ==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.18.9"
            }
          },
          "@babel/plugin-transform-unicode-regex": {
            "version": "7.18.6",
            "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.18.6.tgz",
            "integrity": "sha512-gE7A6Lt7YLnNOL3Pb9BNeZvi+d8l7tcRrG4+pwJjK9hD2xX4mEvjlQW60G9EEmfXVYRPv9VRQcyegIVHCql/AA==",
            "dev": true,
            "requires": {
              "@babel/helper-create-regexp-features-plugin": "^7.18.6",
              "@babel/helper-plugin-utils": "^7.18.6"
            }
          },
          "@babel/preset-env": {
            "version": "7.16.11",
            "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.16.11.tgz",
            "integrity": "sha512-qcmWG8R7ZW6WBRPZK//y+E3Cli151B20W1Rv7ln27vuPaXU/8TKms6jFdiJtF7UDTxcrb7mZd88tAeK9LjdT8g==",
            "dev": true,
            "requires": {
              "@babel/compat-data": "^7.16.8",
              "@babel/helper-compilation-targets": "^7.16.7",
              "@babel/helper-plugin-utils": "^7.16.7",
              "@babel/helper-validator-option": "^7.16.7",
              "@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression": "^7.16.7",
              "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.16.7",
              "@babel/plugin-proposal-async-generator-functions": "^7.16.8",
              "@babel/plugin-proposal-class-properties": "^7.16.7",
              "@babel/plugin-proposal-class-static-block": "^7.16.7",
              "@babel/plugin-proposal-dynamic-import": "^7.16.7",
              "@babel/plugin-proposal-export-namespace-from": "^7.16.7",
              "@babel/plugin-proposal-json-strings": "^7.16.7",
              "@babel/plugin-proposal-logical-assignment-operators": "^7.16.7",
              "@babel/plugin-proposal-nullish-coalescing-operator": "^7.16.7",
              "@babel/plugin-proposal-numeric-separator": "^7.16.7",
              "@babel/plugin-proposal-object-rest-spread": "^7.16.7",
              "@babel/plugin-proposal-optional-catch-binding": "^7.16.7",
              "@babel/plugin-proposal-optional-chaining": "^7.16.7",
              "@babel/plugin-proposal-private-methods": "^7.16.11",
              "@babel/plugin-proposal-private-property-in-object": "^7.16.7",
              "@babel/plugin-proposal-unicode-property-regex": "^7.16.7",
              "@babel/plugin-syntax-async-generators": "^7.8.4",
              "@babel/plugin-syntax-class-properties": "^7.12.13",
              "@babel/plugin-syntax-class-static-block": "^7.14.5",
              "@babel/plugin-syntax-dynamic-import": "^7.8.3",
              "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
              "@babel/plugin-syntax-json-strings": "^7.8.3",
              "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
              "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
              "@babel/plugin-syntax-numeric-separator": "^7.10.4",
              "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
              "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
              "@babel/plugin-syntax-optional-chaining": "^7.8.3",
              "@babel/plugin-syntax-private-property-in-object": "^7.14.5",
              "@babel/plugin-syntax-top-level-await": "^7.14.5",
              "@babel/plugin-transform-arrow-functions": "^7.16.7",
              "@babel/plugin-transform-async-to-generator": "^7.16.8",
              "@babel/plugin-transform-block-scoped-functions": "^7.16.7",
              "@babel/plugin-transform-block-scoping": "^7.16.7",
              "@babel/plugin-transform-classes": "^7.16.7",
              "@babel/plugin-transform-computed-properties": "^7.16.7",
              "@babel/plugin-transform-destructuring": "^7.16.7",
              "@babel/plugin-transform-dotall-regex": "^7.16.7",
              "@babel/plugin-transform-duplicate-keys": "^7.16.7",
              "@babel/plugin-transform-exponentiation-operator": "^7.16.7",
              "@babel/plugin-transform-for-of": "^7.16.7",
              "@babel/plugin-transform-function-name": "^7.16.7",
              "@babel/plugin-transform-literals": "^7.16.7",
              "@babel/plugin-transform-member-expression-literals": "^7.16.7",
              "@babel/plugin-transform-modules-amd": "^7.16.7",
              "@babel/plugin-transform-modules-commonjs": "^7.16.8",
              "@babel/plugin-transform-modules-systemjs": "^7.16.7",
              "@babel/plugin-transform-modules-umd": "^7.16.7",
              "@babel/plugin-transform-named-capturing-groups-regex": "^7.16.8",
              "@babel/plugin-transform-new-target": "^7.16.7",
              "@babel/plugin-transform-object-super": "^7.16.7",
              "@babel/plugin-transform-parameters": "^7.16.7",
              "@babel/plugin-transform-property-literals": "^7.16.7",
              "@babel/plugin-transform-regenerator": "^7.16.7",
              "@babel/plugin-transform-reserved-words": "^7.16.7",
              "@babel/plugin-transform-shorthand-properties": "^7.16.7",
              "@babel/plugin-transform-spread": "^7.16.7",
              "@babel/plugin-transform-sticky-regex": "^7.16.7",
              "@babel/plugin-transform-template-literals": "^7.16.7",
              "@babel/plugin-transform-typeof-symbol": "^7.16.7",
              "@babel/plugin-transform-unicode-escapes": "^7.16.7",
              "@babel/plugin-transform-unicode-regex": "^7.16.7",
              "@babel/preset-modules": "^0.1.5",
              "@babel/types": "^7.16.8",
              "babel-plugin-polyfill-corejs2": "^0.3.0",
              "babel-plugin-polyfill-corejs3": "^0.5.0",
              "babel-plugin-polyfill-regenerator": "^0.3.0",
              "core-js-compat": "^3.20.2",
              "semver": "^6.3.0"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "@babel/preset-modules": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.5.tgz",
            "integrity": "sha512-A57th6YRG7oR3cq/yt/Y84MvGgE0eJG2F1JLhKuyG+jFxEgrd/HAMJatiFtmOiZurz+0DkrvbheCLaV5f2JfjA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.0.0",
              "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
              "@babel/plugin-transform-dotall-regex": "^7.4.4",
              "@babel/types": "^7.4.4",
              "esutils": "^2.0.2"
            }
          },
          "@babel/runtime": {
            "version": "7.16.7",
            "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.16.7.tgz",
            "integrity": "sha512-9E9FJowqAsytyOY6LG+1KuueckRL+aQW+mKvXRXnuFGyRAyepJPmEo9vgMfXUA6O9u3IeEdv9MAkppFcaQwogQ==",
            "dev": true,
            "requires": {
              "regenerator-runtime": "^0.13.4"
            }
          },
          "@babel/template": {
            "version": "7.16.7",
            "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.16.7.tgz",
            "integrity": "sha512-I8j/x8kHUrbYRTUxXrrMbfCa7jxkE7tZre39x3kjr9hvI82cK1FfqLygotcWN5kdPGWcLdWMHpSBavse5tWw3w==",
            "dev": true,
            "requires": {
              "@babel/code-frame": "^7.16.7",
              "@babel/parser": "^7.16.7",
              "@babel/types": "^7.16.7"
            }
          },
          "@babel/traverse": {
            "version": "7.20.1",
            "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.20.1.tgz",
            "integrity": "sha512-d3tN8fkVJwFLkHkBN479SOsw4DMZnz8cdbL/gvuDuzy3TS6Nfw80HuQqhw1pITbIruHyh7d1fMA47kWzmcUEGA==",
            "dev": true,
            "requires": {
              "@babel/code-frame": "^7.18.6",
              "@babel/generator": "^7.20.1",
              "@babel/helper-environment-visitor": "^7.18.9",
              "@babel/helper-function-name": "^7.19.0",
              "@babel/helper-hoist-variables": "^7.18.6",
              "@babel/helper-split-export-declaration": "^7.18.6",
              "@babel/parser": "^7.20.1",
              "@babel/types": "^7.20.0",
              "debug": "^4.1.0",
              "globals": "^11.1.0"
            },
            "dependencies": {
              "@babel/generator": {
                "version": "7.20.4",
                "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.20.4.tgz",
                "integrity": "sha512-luCf7yk/cm7yab6CAW1aiFnmEfBJplb/JojV56MYEK7ziWfGmFlTfmL9Ehwfy4gFhbjBfWO1wj7/TuSbVNEEtA==",
                "dev": true,
                "requires": {
                  "@babel/types": "^7.20.2",
                  "@jridgewell/gen-mapping": "^0.3.2",
                  "jsesc": "^2.5.1"
                }
              },
              "@jridgewell/gen-mapping": {
                "version": "0.3.2",
                "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.2.tgz",
                "integrity": "sha512-mh65xKQAzI6iBcFzwv28KVWSmCkdRBWoOh+bYQGW3+6OZvbbN3TqMGo5hqYxQniRcH9F2VZIoJCm4pa3BPDK/A==",
                "dev": true,
                "requires": {
                  "@jridgewell/set-array": "^1.0.1",
                  "@jridgewell/sourcemap-codec": "^1.4.10",
                  "@jridgewell/trace-mapping": "^0.3.9"
                }
              }
            }
          },
          "@babel/types": {
            "version": "7.20.2",
            "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.20.2.tgz",
            "integrity": "sha512-FnnvsNWgZCr232sqtXggapvlkk/tuwR/qhGzcmxI0GXLCjmPYQPzio2FbdlWuY6y1sHFfQKk+rRbUZ9VStQMog==",
            "dev": true,
            "requires": {
              "@babel/helper-string-parser": "^7.19.4",
              "@babel/helper-validator-identifier": "^7.19.1",
              "to-fast-properties": "^2.0.0"
            }
          },
          "@colors/colors": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/@colors/colors/-/colors-1.5.0.tgz",
            "integrity": "sha512-ooWCrlZP11i8GImSjTHYHLkvFDP48nS4+204nGb1RiX/WXYHmJA2III9/e2DWVabCESdW7hBAEzHRqUn9OUVvQ==",
            "dev": true
          },
          "@csstools/postcss-progressive-custom-properties": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/@csstools/postcss-progressive-custom-properties/-/postcss-progressive-custom-properties-1.3.0.tgz",
            "integrity": "sha512-ASA9W1aIy5ygskZYuWams4BzafD12ULvSypmaLJT2jvQ8G0M3I8PRQhC0h7mG0Z3LI05+agZjqSR9+K9yaQQjA==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "@csstools/selector-specificity": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/@csstools/selector-specificity/-/selector-specificity-2.0.2.tgz",
            "integrity": "sha512-IkpVW/ehM1hWKln4fCA3NzJU8KwD+kIOvPZA4cqxoJHtE21CCzjyp+Kxbu0i5I4tBNOlXPL9mjwnWlL0VEG4Fg==",
            "dev": true
          },
          "@discoveryjs/json-ext": {
            "version": "0.5.6",
            "resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.5.6.tgz",
            "integrity": "sha512-ws57AidsDvREKrZKYffXddNkyaF14iHNHm8VQnZH6t99E8gczjNN0GpvcGny0imC80yQ0tHz1xVUKk/KFQSUyA==",
            "dev": true
          },
          "@gar/promisify": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/@gar/promisify/-/promisify-1.1.3.tgz",
            "integrity": "sha512-k2Ty1JcVojjJFwrg/ThKi2ujJ7XNLYaFGNB/bWT9wGR+oSMJHMa5w+CUq6p/pVrKeNNgA7pCqEcjSnHVoqJQFw==",
            "dev": true
          },
          "@istanbuljs/load-nyc-config": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
            "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
            "dev": true,
            "requires": {
              "camelcase": "^5.3.1",
              "find-up": "^4.1.0",
              "get-package-type": "^0.1.0",
              "js-yaml": "^3.13.1",
              "resolve-from": "^5.0.0"
            }
          },
          "@istanbuljs/schema": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
            "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==",
            "dev": true
          },
          "@jridgewell/gen-mapping": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.1.1.tgz",
            "integrity": "sha512-sQXCasFk+U8lWYEe66WxRDOE9PjVz4vSM51fTu3Hw+ClTpUSQb718772vH3pyS5pShp6lvQM7SxgIDXXXmOX7w==",
            "dev": true,
            "requires": {
              "@jridgewell/set-array": "^1.0.0",
              "@jridgewell/sourcemap-codec": "^1.4.10"
            }
          },
          "@jridgewell/resolve-uri": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.0.tgz",
            "integrity": "sha512-F2msla3tad+Mfht5cJq7LSXcdudKTWCVYUgw6pLFOOHSTtZlj6SWNYAp+AhuqLmWdBO2X5hPrLcu8cVP8fy28w==",
            "dev": true
          },
          "@jridgewell/set-array": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.1.2.tgz",
            "integrity": "sha512-xnkseuNADM0gt2bs+BvhO0p78Mk762YnZdsuzFV018NoG1Sj1SCQvpSqa7XUaTam5vAGasABV9qXASMKnFMwMw==",
            "dev": true
          },
          "@jridgewell/source-map": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.2.tgz",
            "integrity": "sha512-m7O9o2uR8k2ObDysZYzdfhb08VuEml5oWGiosa1VdaPZ/A6QyPkAJuwN0Q1lhULOf6B7MtQmHENS743hWtCrgw==",
            "dev": true,
            "requires": {
              "@jridgewell/gen-mapping": "^0.3.0",
              "@jridgewell/trace-mapping": "^0.3.9"
            },
            "dependencies": {
              "@jridgewell/gen-mapping": {
                "version": "0.3.2",
                "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.2.tgz",
                "integrity": "sha512-mh65xKQAzI6iBcFzwv28KVWSmCkdRBWoOh+bYQGW3+6OZvbbN3TqMGo5hqYxQniRcH9F2VZIoJCm4pa3BPDK/A==",
                "dev": true,
                "requires": {
                  "@jridgewell/set-array": "^1.0.1",
                  "@jridgewell/sourcemap-codec": "^1.4.10",
                  "@jridgewell/trace-mapping": "^0.3.9"
                }
              }
            }
          },
          "@jridgewell/sourcemap-codec": {
            "version": "1.4.14",
            "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.4.14.tgz",
            "integrity": "sha512-XPSJHWmi394fuUuzDnGz1wiKqWfo1yXecHQMRf2l6hztTO+nPru658AyDngaBe7isIxEkRsPR3FZh+s7iVa4Uw==",
            "dev": true
          },
          "@jridgewell/trace-mapping": {
            "version": "0.3.17",
            "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.17.tgz",
            "integrity": "sha512-MCNzAp77qzKca9+W/+I0+sEpaUnZoeasnghNeVc41VZCEKaCH73Vq3BZZ/SzWIgrqE4H4ceI+p+b6C0mHf9T4g==",
            "dev": true,
            "requires": {
              "@jridgewell/resolve-uri": "3.1.0",
              "@jridgewell/sourcemap-codec": "1.4.14"
            }
          },
          "@ngtools/webpack": {
            "version": "13.3.9",
            "resolved": "https://registry.npmjs.org/@ngtools/webpack/-/webpack-13.3.9.tgz",
            "integrity": "sha512-wmgOI5sogAuilwBZJqCHVMjm2uhDxjdSmNLFx7eznwGDa6LjvjuATqCv2dVlftq0Y/5oZFVrg5NpyHt5kfZ8Cg==",
            "dev": true
          },
          "@nodelib/fs.scandir": {
            "version": "2.1.5",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
            "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
            "dev": true,
            "requires": {
              "@nodelib/fs.stat": "2.0.5",
              "run-parallel": "^1.1.9"
            }
          },
          "@nodelib/fs.stat": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
            "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
            "dev": true
          },
          "@nodelib/fs.walk": {
            "version": "1.2.8",
            "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
            "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
            "dev": true,
            "requires": {
              "@nodelib/fs.scandir": "2.1.5",
              "fastq": "^1.6.0"
            }
          },
          "@npmcli/fs": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-1.1.1.tgz",
            "integrity": "sha512-8KG5RD0GVP4ydEzRn/I4BNDuxDtqVbOdm8675T49OIG/NGhaK0pjPX7ZcDlvKYbA+ulvVK3ztfcF4uBdOxuJbQ==",
            "dev": true,
            "requires": {
              "@gar/promisify": "^1.0.1",
              "semver": "^7.3.5"
            }
          },
          "@npmcli/git": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/@npmcli/git/-/git-2.1.0.tgz",
            "integrity": "sha512-/hBFX/QG1b+N7PZBFs0bi+evgRZcK9nWBxQKZkGoXUT5hJSwl5c4d7y8/hm+NQZRPhQ67RzFaj5UM9YeyKoryw==",
            "dev": true,
            "requires": {
              "@npmcli/promise-spawn": "^1.3.2",
              "lru-cache": "^6.0.0",
              "mkdirp": "^1.0.4",
              "npm-pick-manifest": "^6.1.1",
              "promise-inflight": "^1.0.1",
              "promise-retry": "^2.0.1",
              "semver": "^7.3.5",
              "which": "^2.0.2"
            }
          },
          "@npmcli/installed-package-contents": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/@npmcli/installed-package-contents/-/installed-package-contents-1.0.7.tgz",
            "integrity": "sha512-9rufe0wnJusCQoLpV9ZPKIVP55itrM5BxOXs10DmdbRfgWtHy1LDyskbwRnBghuB0PrF7pNPOqREVtpz4HqzKw==",
            "dev": true,
            "requires": {
              "npm-bundled": "^1.1.1",
              "npm-normalize-package-bin": "^1.0.1"
            }
          },
          "@npmcli/move-file": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.1.2.tgz",
            "integrity": "sha512-1SUf/Cg2GzGDyaf15aR9St9TWlb+XvbZXWpDx8YKs7MLzMH/BCeopv+y9vzrzgkfykCGuWOlSu3mZhj2+FQcrg==",
            "dev": true,
            "requires": {
              "mkdirp": "^1.0.4",
              "rimraf": "^3.0.2"
            }
          },
          "@npmcli/node-gyp": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/@npmcli/node-gyp/-/node-gyp-1.0.3.tgz",
            "integrity": "sha512-fnkhw+fmX65kiLqk6E3BFLXNC26rUhK90zVwe2yncPliVT/Qos3xjhTLE59Df8KnPlcwIERXKVlU1bXoUQ+liA==",
            "dev": true
          },
          "@npmcli/promise-spawn": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/@npmcli/promise-spawn/-/promise-spawn-1.3.2.tgz",
            "integrity": "sha512-QyAGYo/Fbj4MXeGdJcFzZ+FkDkomfRBrPM+9QYJSg+PxgAUL+LU3FneQk37rKR2/zjqkCV1BLHccX98wRXG3Sg==",
            "dev": true,
            "requires": {
              "infer-owner": "^1.0.4"
            }
          },
          "@npmcli/run-script": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/@npmcli/run-script/-/run-script-2.0.0.tgz",
            "integrity": "sha512-fSan/Pu11xS/TdaTpTB0MRn9guwGU8dye+x56mEVgBEd/QsybBbYcAL0phPXi8SGWFEChkQd6M9qL4y6VOpFig==",
            "dev": true,
            "requires": {
              "@npmcli/node-gyp": "^1.0.2",
              "@npmcli/promise-spawn": "^1.3.2",
              "node-gyp": "^8.2.0",
              "read-package-json-fast": "^2.0.1"
            }
          },
          "@schematics/angular": {
            "version": "13.3.9",
            "resolved": "https://registry.npmjs.org/@schematics/angular/-/angular-13.3.9.tgz",
            "integrity": "sha512-tm5wst7+Z8cOgOJ/4JVlYKOFCCOVnqKYFtYf0BIWq6RFBXcw6QqbGW1wXH8ASmuev4QZXKgqc7YKALPpYAKCeQ==",
            "dev": true,
            "requires": {
              "@angular-devkit/core": "13.3.9",
              "@angular-devkit/schematics": "13.3.9",
              "jsonc-parser": "3.0.0"
            }
          },
          "@socket.io/component-emitter": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.1.0.tgz",
            "integrity": "sha512-+9jVqKhRSpsc591z5vX+X5Yyw+he/HCB4iQ/RYxw35CEPaY1gnsNE43nf9n9AaYjAQrTiI/mOwKUKdUs9vf7Xg==",
            "dev": true
          },
          "@tootallnate/once": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
            "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==",
            "dev": true
          },
          "@types/body-parser": {
            "version": "1.19.2",
            "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.2.tgz",
            "integrity": "sha512-ALYone6pm6QmwZoAgeyNksccT9Q4AWZQ6PvfwR37GT6r6FWUPguq6sUmNGSMV2Wr761oQoBxwGGa6DR5o1DC9g==",
            "dev": true,
            "requires": {
              "@types/connect": "*",
              "@types/node": "*"
            }
          },
          "@types/bonjour": {
            "version": "3.5.10",
            "resolved": "https://registry.npmjs.org/@types/bonjour/-/bonjour-3.5.10.tgz",
            "integrity": "sha512-p7ienRMiS41Nu2/igbJxxLDWrSZ0WxM8UQgCeO9KhoVF7cOVFkrKsiDr1EsJIla8vV3oEEjGcz11jc5yimhzZw==",
            "dev": true,
            "requires": {
              "@types/node": "*"
            }
          },
          "@types/connect": {
            "version": "3.4.35",
            "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.35.tgz",
            "integrity": "sha512-cdeYyv4KWoEgpBISTxWvqYsVy444DOqehiF3fM3ne10AmJ62RSyNkUnxMJXHQWRQQX2eR94m5y1IZyDwBjV9FQ==",
            "dev": true,
            "requires": {
              "@types/node": "*"
            }
          },
          "@types/connect-history-api-fallback": {
            "version": "1.3.5",
            "resolved": "https://registry.npmjs.org/@types/connect-history-api-fallback/-/connect-history-api-fallback-1.3.5.tgz",
            "integrity": "sha512-h8QJa8xSb1WD4fpKBDcATDNGXghFj6/3GRWG6dhmRcu0RX1Ubasur2Uvx5aeEwlf0MwblEC2bMzzMQntxnw/Cw==",
            "dev": true,
            "requires": {
              "@types/express-serve-static-core": "*",
              "@types/node": "*"
            }
          },
          "@types/cookie": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/@types/cookie/-/cookie-0.4.1.tgz",
            "integrity": "sha512-XW/Aa8APYr6jSVVA1y/DEIZX0/GMKLEVekNG727R8cs56ahETkRAy/3DR7+fJyh7oUgGwNQaRfXCun0+KbWY7Q==",
            "dev": true
          },
          "@types/cors": {
            "version": "2.8.12",
            "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.12.tgz",
            "integrity": "sha512-vt+kDhq/M2ayberEtJcIN/hxXy1Pk+59g2FV/ZQceeaTyCtCucjL2Q7FXlFjtWn4n15KCr1NE2lNNFhp0lEThw==",
            "dev": true
          },
          "@types/eslint": {
            "version": "8.4.10",
            "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-8.4.10.tgz",
            "integrity": "sha512-Sl/HOqN8NKPmhWo2VBEPm0nvHnu2LL3v9vKo8MEq0EtbJ4eVzGPl41VNPvn5E1i5poMk4/XD8UriLHpJvEP/Nw==",
            "dev": true,
            "requires": {
              "@types/estree": "*",
              "@types/json-schema": "*"
            }
          },
          "@types/eslint-scope": {
            "version": "3.7.4",
            "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.4.tgz",
            "integrity": "sha512-9K4zoImiZc3HlIp6AVUDE4CWYx22a+lhSZMYNpbjW04+YF0KWj4pJXnEMjdnFTiQibFFmElcsasJXDbdI/EPhA==",
            "dev": true,
            "requires": {
              "@types/eslint": "*",
              "@types/estree": "*"
            }
          },
          "@types/estree": {
            "version": "0.0.51",
            "resolved": "https://registry.npmjs.org/@types/estree/-/estree-0.0.51.tgz",
            "integrity": "sha512-CuPgU6f3eT/XgKKPqKd/gLZV1Xmvf1a2R5POBOGQa6uv82xpls89HU5zKeVoyR8XzHd1RGNOlQlvUe3CFkjWNQ==",
            "dev": true
          },
          "@types/express": {
            "version": "4.17.14",
            "resolved": "https://registry.npmjs.org/@types/express/-/express-4.17.14.tgz",
            "integrity": "sha512-TEbt+vaPFQ+xpxFLFssxUDXj5cWCxZJjIcB7Yg0k0GMHGtgtQgpvx/MUQUeAkNbA9AAGrwkAsoeItdTgS7FMyg==",
            "dev": true,
            "requires": {
              "@types/body-parser": "*",
              "@types/express-serve-static-core": "^4.17.18",
              "@types/qs": "*",
              "@types/serve-static": "*"
            }
          },
          "@types/express-serve-static-core": {
            "version": "4.17.31",
            "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-4.17.31.tgz",
            "integrity": "sha512-DxMhY+NAsTwMMFHBTtJFNp5qiHKJ7TeqOo23zVEM9alT1Ml27Q3xcTH0xwxn7Q0BbMcVEJOs/7aQtUWupUQN3Q==",
            "dev": true,
            "requires": {
              "@types/node": "*",
              "@types/qs": "*",
              "@types/range-parser": "*"
            }
          },
          "@types/http-proxy": {
            "version": "1.17.9",
            "resolved": "https://registry.npmjs.org/@types/http-proxy/-/http-proxy-1.17.9.tgz",
            "integrity": "sha512-QsbSjA/fSk7xB+UXlCT3wHBy5ai9wOcNDWwZAtud+jXhwOM3l+EYZh8Lng4+/6n8uar0J7xILzqftJdJ/Wdfkw==",
            "dev": true,
            "requires": {
              "@types/node": "*"
            }
          },
          "@types/jasmine": {
            "version": "3.10.6",
            "resolved": "https://registry.npmjs.org/@types/jasmine/-/jasmine-3.10.6.tgz",
            "integrity": "sha512-twY9adK/vz72oWxCWxzXaxoDtF9TpfEEsxvbc1ibjF3gMD/RThSuSud/GKUTR3aJnfbivAbC/vLqhY+gdWCHfA==",
            "dev": true
          },
          "@types/json-schema": {
            "version": "7.0.11",
            "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.11.tgz",
            "integrity": "sha512-wOuvG1SN4Us4rez+tylwwwCV1psiNVOkJeM3AUWUNWg/jDQY2+HE/444y5gc+jBmRqASOm2Oeh5c1axHobwRKQ==",
            "dev": true
          },
          "@types/mime": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/@types/mime/-/mime-3.0.1.tgz",
            "integrity": "sha512-Y4XFY5VJAuw0FgAqPNd6NNoV44jbq9Bz2L7Rh/J6jLTiHBSBJa9fxqQIvkIld4GsoDOcCbvzOUAbLPsSKKg+uA==",
            "dev": true
          },
          "@types/node": {
            "version": "12.20.55",
            "resolved": "https://registry.npmjs.org/@types/node/-/node-12.20.55.tgz",
            "integrity": "sha512-J8xLz7q2OFulZ2cyGTLE1TbbZcjpno7FaN6zdJNrgAdrJ+DZzh/uFR6YrTb4C+nXakvud8Q4+rbhoIWlYQbUFQ==",
            "dev": true
          },
          "@types/parse-json": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/@types/parse-json/-/parse-json-4.0.0.tgz",
            "integrity": "sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==",
            "dev": true
          },
          "@types/qs": {
            "version": "6.9.7",
            "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.9.7.tgz",
            "integrity": "sha512-FGa1F62FT09qcrueBA6qYTrJPVDzah9a+493+o2PCXsesWHIn27G98TsSMs3WPNbZIEj4+VJf6saSFpvD+3Zsw==",
            "dev": true
          },
          "@types/range-parser": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.4.tgz",
            "integrity": "sha512-EEhsLsD6UsDM1yFhAvy0Cjr6VwmpMWqFBCb9w07wVugF7w9nfajxLuVmngTIpgS6svCnm6Vaw+MZhoDCKnOfsw==",
            "dev": true
          },
          "@types/retry": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/@types/retry/-/retry-0.12.0.tgz",
            "integrity": "sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA==",
            "dev": true
          },
          "@types/serve-index": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/@types/serve-index/-/serve-index-1.9.1.tgz",
            "integrity": "sha512-d/Hs3nWDxNL2xAczmOVZNj92YZCS6RGxfBPjKzuu/XirCgXdpKEb88dYNbrYGint6IVWLNP+yonwVAuRC0T2Dg==",
            "dev": true,
            "requires": {
              "@types/express": "*"
            }
          },
          "@types/serve-static": {
            "version": "1.15.0",
            "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-1.15.0.tgz",
            "integrity": "sha512-z5xyF6uh8CbjAu9760KDKsH2FcDxZ2tFCsA4HIMWE6IkiYMXfVoa+4f9KX+FN0ZLsaMw1WNG2ETLA6N+/YA+cg==",
            "dev": true,
            "requires": {
              "@types/mime": "*",
              "@types/node": "*"
            }
          },
          "@types/sockjs": {
            "version": "0.3.33",
            "resolved": "https://registry.npmjs.org/@types/sockjs/-/sockjs-0.3.33.tgz",
            "integrity": "sha512-f0KEEe05NvUnat+boPTZ0dgaLZ4SfSouXUgv5noUiefG2ajgKjmETo9ZJyuqsl7dfl2aHlLJUiki6B4ZYldiiw==",
            "dev": true,
            "requires": {
              "@types/node": "*"
            }
          },
          "@types/ws": {
            "version": "8.5.3",
            "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.5.3.tgz",
            "integrity": "sha512-6YOoWjruKj1uLf3INHH7D3qTXwFfEsg1kf3c0uDdSBJwfa/llkwIjrAGV7j7mVgGNbzTQ3HiHKKDXl6bJPD97w==",
            "dev": true,
            "requires": {
              "@types/node": "*"
            }
          },
          "@webassemblyjs/ast": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.11.1.tgz",
            "integrity": "sha512-ukBh14qFLjxTQNTXocdyksN5QdM28S1CxHt2rdskFyL+xFV7VremuBLVbmCePj+URalXBENx/9Lm7lnhihtCSw==",
            "dev": true,
            "requires": {
              "@webassemblyjs/helper-numbers": "1.11.1",
              "@webassemblyjs/helper-wasm-bytecode": "1.11.1"
            }
          },
          "@webassemblyjs/floating-point-hex-parser": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.1.tgz",
            "integrity": "sha512-iGRfyc5Bq+NnNuX8b5hwBrRjzf0ocrJPI6GWFodBFzmFnyvrQ83SHKhmilCU/8Jv67i4GJZBMhEzltxzcNagtQ==",
            "dev": true
          },
          "@webassemblyjs/helper-api-error": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.1.tgz",
            "integrity": "sha512-RlhS8CBCXfRUR/cwo2ho9bkheSXG0+NwooXcc3PAILALf2QLdFyj7KGsKRbVc95hZnhnERon4kW/D3SZpp6Tcg==",
            "dev": true
          },
          "@webassemblyjs/helper-buffer": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.11.1.tgz",
            "integrity": "sha512-gwikF65aDNeeXa8JxXa2BAk+REjSyhrNC9ZwdT0f8jc4dQQeDQ7G4m0f2QCLPJiMTTO6wfDmRmj/pW0PsUvIcA==",
            "dev": true
          },
          "@webassemblyjs/helper-numbers": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.1.tgz",
            "integrity": "sha512-vDkbxiB8zfnPdNK9Rajcey5C0w+QJugEglN0of+kmO8l7lDb77AnlKYQF7aarZuCrv+l0UvqL+68gSDr3k9LPQ==",
            "dev": true,
            "requires": {
              "@webassemblyjs/floating-point-hex-parser": "1.11.1",
              "@webassemblyjs/helper-api-error": "1.11.1",
              "@xtuc/long": "4.2.2"
            }
          },
          "@webassemblyjs/helper-wasm-bytecode": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.1.tgz",
            "integrity": "sha512-PvpoOGiJwXeTrSf/qfudJhwlvDQxFgelbMqtq52WWiXC6Xgg1IREdngmPN3bs4RoO83PnL/nFrxucXj1+BX62Q==",
            "dev": true
          },
          "@webassemblyjs/helper-wasm-section": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.11.1.tgz",
            "integrity": "sha512-10P9No29rYX1j7F3EVPX3JvGPQPae+AomuSTPiF9eBQeChHI6iqjMIwR9JmOJXwpnn/oVGDk7I5IlskuMwU/pg==",
            "dev": true,
            "requires": {
              "@webassemblyjs/ast": "1.11.1",
              "@webassemblyjs/helper-buffer": "1.11.1",
              "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
              "@webassemblyjs/wasm-gen": "1.11.1"
            }
          },
          "@webassemblyjs/ieee754": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.1.tgz",
            "integrity": "sha512-hJ87QIPtAMKbFq6CGTkZYJivEwZDbQUgYd3qKSadTNOhVY7p+gfP6Sr0lLRVTaG1JjFj+r3YchoqRYxNH3M0GQ==",
            "dev": true,
            "requires": {
              "@xtuc/ieee754": "^1.2.0"
            }
          },
          "@webassemblyjs/leb128": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.1.tgz",
            "integrity": "sha512-BJ2P0hNZ0u+Th1YZXJpzW6miwqQUGcIHT1G/sf72gLVD9DZ5AdYTqPNbHZh6K1M5VmKvFXwGSWZADz+qBWxeRw==",
            "dev": true,
            "requires": {
              "@xtuc/long": "4.2.2"
            }
          },
          "@webassemblyjs/utf8": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.1.tgz",
            "integrity": "sha512-9kqcxAEdMhiwQkHpkNiorZzqpGrodQQ2IGrHHxCy+Ozng0ofyMA0lTqiLkVs1uzTRejX+/O0EOT7KxqVPuXosQ==",
            "dev": true
          },
          "@webassemblyjs/wasm-edit": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.11.1.tgz",
            "integrity": "sha512-g+RsupUC1aTHfR8CDgnsVRVZFJqdkFHpsHMfJuWQzWU3tvnLC07UqHICfP+4XyL2tnr1amvl1Sdp06TnYCmVkA==",
            "dev": true,
            "requires": {
              "@webassemblyjs/ast": "1.11.1",
              "@webassemblyjs/helper-buffer": "1.11.1",
              "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
              "@webassemblyjs/helper-wasm-section": "1.11.1",
              "@webassemblyjs/wasm-gen": "1.11.1",
              "@webassemblyjs/wasm-opt": "1.11.1",
              "@webassemblyjs/wasm-parser": "1.11.1",
              "@webassemblyjs/wast-printer": "1.11.1"
            }
          },
          "@webassemblyjs/wasm-gen": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.11.1.tgz",
            "integrity": "sha512-F7QqKXwwNlMmsulj6+O7r4mmtAlCWfO/0HdgOxSklZfQcDu0TpLiD1mRt/zF25Bk59FIjEuGAIyn5ei4yMfLhA==",
            "dev": true,
            "requires": {
              "@webassemblyjs/ast": "1.11.1",
              "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
              "@webassemblyjs/ieee754": "1.11.1",
              "@webassemblyjs/leb128": "1.11.1",
              "@webassemblyjs/utf8": "1.11.1"
            }
          },
          "@webassemblyjs/wasm-opt": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.11.1.tgz",
            "integrity": "sha512-VqnkNqnZlU5EB64pp1l7hdm3hmQw7Vgqa0KF/KCNO9sIpI6Fk6brDEiX+iCOYrvMuBWDws0NkTOxYEb85XQHHw==",
            "dev": true,
            "requires": {
              "@webassemblyjs/ast": "1.11.1",
              "@webassemblyjs/helper-buffer": "1.11.1",
              "@webassemblyjs/wasm-gen": "1.11.1",
              "@webassemblyjs/wasm-parser": "1.11.1"
            }
          },
          "@webassemblyjs/wasm-parser": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.11.1.tgz",
            "integrity": "sha512-rrBujw+dJu32gYB7/Lup6UhdkPx9S9SnobZzRVL7VcBH9Bt9bCBLEuX/YXOOtBsOZ4NQrRykKhffRWHvigQvOA==",
            "dev": true,
            "requires": {
              "@webassemblyjs/ast": "1.11.1",
              "@webassemblyjs/helper-api-error": "1.11.1",
              "@webassemblyjs/helper-wasm-bytecode": "1.11.1",
              "@webassemblyjs/ieee754": "1.11.1",
              "@webassemblyjs/leb128": "1.11.1",
              "@webassemblyjs/utf8": "1.11.1"
            }
          },
          "@webassemblyjs/wast-printer": {
            "version": "1.11.1",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.11.1.tgz",
            "integrity": "sha512-IQboUWM4eKzWW+N/jij2sRatKMh99QEelo3Eb2q0qXkvPRISAj8Qxtmw5itwqK+TTkBuUIE45AxYPToqPtL5gg==",
            "dev": true,
            "requires": {
              "@webassemblyjs/ast": "1.11.1",
              "@xtuc/long": "4.2.2"
            }
          },
          "@xtuc/ieee754": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
            "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
            "dev": true
          },
          "@xtuc/long": {
            "version": "4.2.2",
            "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
            "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
            "dev": true
          },
          "@yarnpkg/lockfile": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/@yarnpkg/lockfile/-/lockfile-1.1.0.tgz",
            "integrity": "sha512-GpSwvyXOcOOlV70vbnzjj4fW5xW/FdUF6nQEt1ENy7m4ZCczi1+/buVUPAqmGfqznsORNFzUMjctTIp8a9tuCQ==",
            "dev": true
          },
          "abab": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.6.tgz",
            "integrity": "sha512-j2afSsaIENvHZN2B8GOpF566vZ5WVk5opAiMTvWgaQT8DkbOqsTfvNAvHoRGU2zzP8cPoqys+xHTRDWW8L+/BA==",
            "dev": true
          },
          "abbrev": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
            "dev": true
          },
          "accepts": {
            "version": "1.3.8",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
            "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
            "dev": true,
            "requires": {
              "mime-types": "~2.1.34",
              "negotiator": "0.6.3"
            }
          },
          "acorn": {
            "version": "8.8.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.8.1.tgz",
            "integrity": "sha512-7zFpHzhnqYKrkYdUjF1HI1bzd0VygEGX8lFk4k5zVMqHEoES+P+7TKI+EvLO9WVMJ8eekdO0aDEK044xTXwPPA==",
            "dev": true
          },
          "acorn-import-assertions": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/acorn-import-assertions/-/acorn-import-assertions-1.8.0.tgz",
            "integrity": "sha512-m7VZ3jwz4eK6A4Vtt8Ew1/mNbP24u0FhdyfA7fSvnJR6LMdfOYnmuIrrJAgrYfYJ10F/otaHTtrtrtmHdMNzEw==",
            "dev": true
          },
          "adjust-sourcemap-loader": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/adjust-sourcemap-loader/-/adjust-sourcemap-loader-4.0.0.tgz",
            "integrity": "sha512-OXwN5b9pCUXNQHJpwwD2qP40byEmSgzj8B4ydSN0uMNYWiFmJ6x6KwUllMmfk8Rwu/HJDFR7U8ubsWBoN0Xp0A==",
            "dev": true,
            "requires": {
              "loader-utils": "^2.0.0",
              "regex-parser": "^2.2.11"
            },
            "dependencies": {
              "loader-utils": {
                "version": "2.0.3",
                "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.3.tgz",
                "integrity": "sha512-THWqIsn8QRnvLl0shHYVBN9syumU8pYWEHPTmkiVGd+7K5eFNVSY6AJhRvgGF70gg1Dz+l/k8WicvFCxdEs60A==",
                "dev": true,
                "requires": {
                  "big.js": "^5.2.2",
                  "emojis-list": "^3.0.0",
                  "json5": "^2.1.2"
                }
              }
            }
          },
          "agent-base": {
            "version": "6.0.2",
            "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
            "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
            "dev": true,
            "requires": {
              "debug": "4"
            }
          },
          "agentkeepalive": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/agentkeepalive/-/agentkeepalive-4.2.1.tgz",
            "integrity": "sha512-Zn4cw2NEqd+9fiSVWMscnjyQ1a8Yfoc5oBajLeo5w+YBHgDUcEBY2hS4YpTz6iN5f/2zQiktcuM6tS8x1p9dpA==",
            "dev": true,
            "requires": {
              "debug": "^4.1.0",
              "depd": "^1.1.2",
              "humanize-ms": "^1.2.1"
            },
            "dependencies": {
              "depd": {
                "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
                "integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",
                "dev": true
              }
            }
          },
          "aggregate-error": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
            "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
            "dev": true,
            "requires": {
              "clean-stack": "^2.0.0",
              "indent-string": "^4.0.0"
            }
          },
          "ajv": {
            "version": "8.9.0",
            "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.9.0.tgz",
            "integrity": "sha512-qOKJyNj/h+OWx7s5DePL6Zu1KeM9jPZhwBqs+7DzP6bGOvqzVCSf0xueYmVuaC/oQ/VtS2zLMLHdQFbkka+XDQ==",
            "dev": true,
            "requires": {
              "fast-deep-equal": "^3.1.1",
              "json-schema-traverse": "^1.0.0",
              "require-from-string": "^2.0.2",
              "uri-js": "^4.2.2"
            }
          },
          "ajv-formats": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-2.1.1.tgz",
            "integrity": "sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==",
            "dev": true,
            "requires": {
              "ajv": "^8.0.0"
            }
          },
          "ajv-keywords": {
            "version": "3.5.2",
            "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.5.2.tgz",
            "integrity": "sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==",
            "dev": true
          },
          "ansi-colors": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
            "integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA==",
            "dev": true
          },
          "ansi-escapes": {
            "version": "4.3.2",
            "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
            "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
            "dev": true,
            "requires": {
              "type-fest": "^0.21.3"
            }
          },
          "ansi-html-community": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/ansi-html-community/-/ansi-html-community-0.0.8.tgz",
            "integrity": "sha512-1APHAyr3+PCamwNw3bXCPp4HFLONZt/yIH0sZp0/469KWNTEy+qN5jQ3GVX6DMZ1UXAi34yVwtTeaG/HpBuuzw==",
            "dev": true
          },
          "ansi-regex": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
            "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
            "dev": true
          },
          "ansi-styles": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
            "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
            "dev": true,
            "requires": {
              "color-convert": "^1.9.0"
            }
          },
          "anymatch": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
            "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
            "dev": true,
            "requires": {
              "normalize-path": "^3.0.0",
              "picomatch": "^2.0.4"
            }
          },
          "aproba": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",
            "integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==",
            "dev": true
          },
          "are-we-there-yet": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-3.0.1.tgz",
            "integrity": "sha512-QZW4EDmGwlYur0Yyf/b2uGucHQMa8aFUP7eu9ddR73vvhFyt4V0Vl3QHPcTNJ8l6qYOBdxgXdnBXQrHilfRQBg==",
            "dev": true,
            "requires": {
              "delegates": "^1.0.0",
              "readable-stream": "^3.6.0"
            }
          },
          "argparse": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
            "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
            "dev": true,
            "requires": {
              "sprintf-js": "~1.0.2"
            }
          },
          "array-flatten": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-2.1.2.tgz",
            "integrity": "sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ==",
            "dev": true
          },
          "array-union": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/array-union/-/array-union-3.0.1.tgz",
            "integrity": "sha512-1OvF9IbWwaeiM9VhzYXVQacMibxpXOMYVNIvMtKRyX9SImBXpKcFr8XvFDeEslCyuH/t6KRt7HEO94AlP8Iatw==",
            "dev": true
          },
          "async": {
            "version": "2.6.4",
            "resolved": "https://registry.npmjs.org/async/-/async-2.6.4.tgz",
            "integrity": "sha512-mzo5dfJYwAn29PeiJ0zvwTo04zj8HDJj0Mn8TD7sno7q12prdbnasKJHhkm2c1LgrhlJ0teaea8860oxi51mGA==",
            "dev": true,
            "requires": {
              "lodash": "^4.17.14"
            }
          },
          "atob": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
            "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
            "dev": true
          },
          "autoprefixer": {
            "version": "10.4.13",
            "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.13.tgz",
            "integrity": "sha512-49vKpMqcZYsJjwotvt4+h/BCjJVnhGwcLpDt5xkcaOG3eLrG/HUYLagrihYsQ+qrIBgIzX1Rw7a6L8I/ZA1Atg==",
            "dev": true,
            "requires": {
              "browserslist": "^4.21.4",
              "caniuse-lite": "^1.0.30001426",
              "fraction.js": "^4.2.0",
              "normalize-range": "^0.1.2",
              "picocolors": "^1.0.0",
              "postcss-value-parser": "^4.2.0"
            }
          },
          "babel-loader": {
            "version": "8.2.5",
            "resolved": "https://registry.npmjs.org/babel-loader/-/babel-loader-8.2.5.tgz",
            "integrity": "sha512-OSiFfH89LrEMiWd4pLNqGz4CwJDtbs2ZVc+iGu2HrkRfPxId9F2anQj38IxWpmRfsUY0aBZYi1EFcd3mhtRMLQ==",
            "dev": true,
            "requires": {
              "find-cache-dir": "^3.3.1",
              "loader-utils": "^2.0.0",
              "make-dir": "^3.1.0",
              "schema-utils": "^2.6.5"
            },
            "dependencies": {
              "loader-utils": {
                "version": "2.0.3",
                "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.3.tgz",
                "integrity": "sha512-THWqIsn8QRnvLl0shHYVBN9syumU8pYWEHPTmkiVGd+7K5eFNVSY6AJhRvgGF70gg1Dz+l/k8WicvFCxdEs60A==",
                "dev": true,
                "requires": {
                  "big.js": "^5.2.2",
                  "emojis-list": "^3.0.0",
                  "json5": "^2.1.2"
                }
              }
            }
          },
          "babel-plugin-istanbul": {
            "version": "6.1.1",
            "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.1.1.tgz",
            "integrity": "sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==",
            "dev": true,
            "requires": {
              "@babel/helper-plugin-utils": "^7.0.0",
              "@istanbuljs/load-nyc-config": "^1.0.0",
              "@istanbuljs/schema": "^0.1.2",
              "istanbul-lib-instrument": "^5.0.4",
              "test-exclude": "^6.0.0"
            }
          },
          "babel-plugin-polyfill-corejs2": {
            "version": "0.3.3",
            "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.3.3.tgz",
            "integrity": "sha512-8hOdmFYFSZhqg2C/JgLUQ+t52o5nirNwaWM2B9LWteozwIvM14VSwdsCAUET10qT+kmySAlseadmfeeSWFCy+Q==",
            "dev": true,
            "requires": {
              "@babel/compat-data": "^7.17.7",
              "@babel/helper-define-polyfill-provider": "^0.3.3",
              "semver": "^6.1.1"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "babel-plugin-polyfill-corejs3": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.5.3.tgz",
            "integrity": "sha512-zKsXDh0XjnrUEW0mxIHLfjBfnXSMr5Q/goMe/fxpQnLm07mcOZiIZHBNWCMx60HmdvjxfXcalac0tfFg0wqxyw==",
            "dev": true,
            "requires": {
              "@babel/helper-define-polyfill-provider": "^0.3.2",
              "core-js-compat": "^3.21.0"
            }
          },
          "babel-plugin-polyfill-regenerator": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.3.1.tgz",
            "integrity": "sha512-Y2B06tvgHYt1x0yz17jGkGeeMr5FeKUu+ASJ+N6nB5lQ8Dapfg42i0OVrf8PNGJ3zKL4A23snMi1IRwrqqND7A==",
            "dev": true,
            "requires": {
              "@babel/helper-define-polyfill-provider": "^0.3.1"
            }
          },
          "balanced-match": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
            "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
            "dev": true
          },
          "base64-js": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
            "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
            "dev": true
          },
          "base64id": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",
            "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==",
            "dev": true
          },
          "batch": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
            "integrity": "sha512-x+VAiMRL6UPkx+kudNvxTl6hB2XNNCG2r+7wixVfIYwu/2HKRXimwQyaumLjMveWvT2Hkd/cAJw+QBMfJ/EKVw==",
            "dev": true
          },
          "big.js": {
            "version": "5.2.2",
            "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
            "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
            "dev": true
          },
          "binary-extensions": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
            "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
            "dev": true
          },
          "bl": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
            "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
            "dev": true,
            "requires": {
              "buffer": "^5.5.0",
              "inherits": "^2.0.4",
              "readable-stream": "^3.4.0"
            }
          },
          "body-parser": {
            "version": "1.20.1",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.1.tgz",
            "integrity": "sha512-jWi7abTbYwajOytWCQc37VulmWiRae5RyTpaCyDcS5/lMdtwSz5lOpDE67srw/HYe35f1z3fDQw+3txg7gNtWw==",
            "dev": true,
            "requires": {
              "bytes": "3.1.2",
              "content-type": "~1.0.4",
              "debug": "2.6.9",
              "depd": "2.0.0",
              "destroy": "1.2.0",
              "http-errors": "2.0.0",
              "iconv-lite": "0.4.24",
              "on-finished": "2.4.1",
              "qs": "6.11.0",
              "raw-body": "2.5.1",
              "type-is": "~1.6.18",
              "unpipe": "1.0.0"
            },
            "dependencies": {
              "bytes": {
                "version": "3.1.2",
                "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
                "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
                "dev": true
              },
              "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "dev": true,
                "requires": {
                  "ms": "2.0.0"
                }
              },
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
                "dev": true
              }
            }
          },
          "bonjour": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
            "integrity": "sha512-RaVTblr+OnEli0r/ud8InrU7D+G0y6aJhlxaLa6Pwty4+xoxboF1BsUI45tujvRpbj9dQVoglChqonGAsjEBYg==",
            "dev": true,
            "requires": {
              "array-flatten": "^2.1.0",
              "deep-equal": "^1.0.1",
              "dns-equal": "^1.0.0",
              "dns-txt": "^2.0.2",
              "multicast-dns": "^6.0.1",
              "multicast-dns-service-types": "^1.1.0"
            }
          },
          "boolbase": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
            "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==",
            "dev": true
          },
          "brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "requires": {
              "balanced-match": "^1.0.0",
              "concat-map": "0.0.1"
            }
          },
          "braces": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
            "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
            "dev": true,
            "requires": {
              "fill-range": "^7.0.1"
            }
          },
          "browserslist": {
            "version": "4.21.4",
            "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.21.4.tgz",
            "integrity": "sha512-CBHJJdDmgjl3daYjN5Cp5kbTf1mUhZoS+beLklHIvkOWscs83YAhLlF3Wsh/lciQYAcbBJgTOD44VtG31ZM4Hw==",
            "dev": true,
            "requires": {
              "caniuse-lite": "^1.0.30001400",
              "electron-to-chromium": "^1.4.251",
              "node-releases": "^2.0.6",
              "update-browserslist-db": "^1.0.9"
            }
          },
          "buffer": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
            "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
            "dev": true,
            "requires": {
              "base64-js": "^1.3.1",
              "ieee754": "^1.1.13"
            }
          },
          "buffer-from": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
            "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
            "dev": true
          },
          "buffer-indexof": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
            "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g==",
            "dev": true
          },
          "builtins": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/builtins/-/builtins-1.0.3.tgz",
            "integrity": "sha512-uYBjakWipfaO/bXI7E8rq6kpwHRZK5cNYrUv2OzZSI/FvmdMyXJ2tG9dKcjEC5YHmHpUAwsargWIZNWdxb/bnQ==",
            "dev": true
          },
          "bytes": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
            "integrity": "sha512-pMhOfFDPiv9t5jjIXkHosWmkSyQbvsgEVNkz0ERHbuLh2T/7j4Mqqpz523Fe8MVY89KC6Sh/QfS2sM+SjgFDcw==",
            "dev": true
          },
          "cacache": {
            "version": "15.3.0",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-15.3.0.tgz",
            "integrity": "sha512-VVdYzXEn+cnbXpFgWs5hTT7OScegHVmLhJIR8Ufqk3iFD6A6j5iSX1KuBTfNEv4tdJWE2PzA6IVFtcLC7fN9wQ==",
            "dev": true,
            "requires": {
              "@npmcli/fs": "^1.0.0",
              "@npmcli/move-file": "^1.0.1",
              "chownr": "^2.0.0",
              "fs-minipass": "^2.0.0",
              "glob": "^7.1.4",
              "infer-owner": "^1.0.4",
              "lru-cache": "^6.0.0",
              "minipass": "^3.1.1",
              "minipass-collect": "^1.0.2",
              "minipass-flush": "^1.0.5",
              "minipass-pipeline": "^1.2.2",
              "mkdirp": "^1.0.3",
              "p-map": "^4.0.0",
              "promise-inflight": "^1.0.1",
              "rimraf": "^3.0.2",
              "ssri": "^8.0.1",
              "tar": "^6.0.2",
              "unique-filename": "^1.1.1"
            }
          },
          "call-bind": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
            "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
            "dev": true,
            "requires": {
              "function-bind": "^1.1.1",
              "get-intrinsic": "^1.0.2"
            }
          },
          "callsites": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
            "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
            "dev": true
          },
          "camelcase": {
            "version": "5.3.1",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
            "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
            "dev": true
          },
          "caniuse-lite": {
            "version": "1.0.30001431",
            "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001431.tgz",
            "integrity": "sha512-zBUoFU0ZcxpvSt9IU66dXVT/3ctO1cy4y9cscs1szkPlcWb6pasYM144GqrUygUbT+k7cmUCW61cvskjcv0enQ==",
            "dev": true
          },
          "chalk": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
            "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
            "dev": true,
            "requires": {
              "ansi-styles": "^3.2.1",
              "escape-string-regexp": "^1.0.5",
              "supports-color": "^5.3.0"
            }
          },
          "chardet": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
            "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
            "dev": true
          },
          "chokidar": {
            "version": "3.5.3",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
            "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
            "dev": true,
            "requires": {
              "anymatch": "~3.1.2",
              "braces": "~3.0.2",
              "fsevents": "~2.3.2",
              "glob-parent": "~5.1.2",
              "is-binary-path": "~2.1.0",
              "is-glob": "~4.0.1",
              "normalize-path": "~3.0.0",
              "readdirp": "~3.6.0"
            },
            "dependencies": {
              "glob-parent": {
                "version": "5.1.2",
                "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
                "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
                "dev": true,
                "requires": {
                  "is-glob": "^4.0.1"
                }
              }
            }
          },
          "chownr": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
            "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
            "dev": true
          },
          "chrome-trace-event": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.3.tgz",
            "integrity": "sha512-p3KULyQg4S7NIHixdwbGX+nFHkoBiA4YQmyWtjb8XngSKV124nJmRysgAeujbUVb15vh+RvFUfCPqU7rXk+hZg==",
            "dev": true
          },
          "circular-dependency-plugin": {
            "version": "5.2.2",
            "resolved": "https://registry.npmjs.org/circular-dependency-plugin/-/circular-dependency-plugin-5.2.2.tgz",
            "integrity": "sha512-g38K9Cm5WRwlaH6g03B9OEz/0qRizI+2I7n+Gz+L5DxXJAPAiWQvwlYNm1V1jkdpUv95bOe/ASm2vfi/G560jQ==",
            "dev": true
          },
          "clean-stack": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
            "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
            "dev": true
          },
          "cli-cursor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
            "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
            "dev": true,
            "requires": {
              "restore-cursor": "^3.1.0"
            }
          },
          "cli-spinners": {
            "version": "2.7.0",
            "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.7.0.tgz",
            "integrity": "sha512-qu3pN8Y3qHNgE2AFweciB1IfMnmZ/fsNTEE+NOFjmGB2F/7rLhnhzppvpCnN4FovtP26k8lHyy9ptEbNwWFLzw==",
            "dev": true
          },
          "cli-width": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
            "integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==",
            "dev": true
          },
          "cliui": {
            "version": "8.0.1",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
            "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
            "dev": true,
            "requires": {
              "string-width": "^4.2.0",
              "strip-ansi": "^6.0.1",
              "wrap-ansi": "^7.0.0"
            }
          },
          "clone": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
            "integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
            "dev": true
          },
          "clone-deep": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
            "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
            "dev": true,
            "requires": {
              "is-plain-object": "^2.0.4",
              "kind-of": "^6.0.2",
              "shallow-clone": "^3.0.0"
            }
          },
          "color-convert": {
            "version": "1.9.3",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
            "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
            "dev": true,
            "requires": {
              "color-name": "1.1.3"
            }
          },
          "color-name": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
            "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
            "dev": true
          },
          "color-support": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
            "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",
            "dev": true
          },
          "colorette": {
            "version": "2.0.19",
            "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.19.tgz",
            "integrity": "sha512-3tlv/dIP7FWvj3BsbHrGLJ6l/oKh1O3TcgBqMn+yyCagOxc23fyzDS6HypQbgxWbkpDnf52p1LuR4eWDQ/K9WQ==",
            "dev": true
          },
          "commander": {
            "version": "2.20.3",
            "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
            "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
            "dev": true
          },
          "commondir": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
            "integrity": "sha512-W9pAhw0ja1Edb5GVdIF1mjZw/ASI0AlShXM83UUGe2DVr5TdAPEA1OA8m/g8zWp9x6On7gqufY+FatDbC3MDQg==",
            "dev": true
          },
          "compressible": {
            "version": "2.0.18",
            "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
            "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
            "dev": true,
            "requires": {
              "mime-db": ">= 1.43.0 < 2"
            }
          },
          "compression": {
            "version": "1.7.4",
            "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
            "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
            "dev": true,
            "requires": {
              "accepts": "~1.3.5",
              "bytes": "3.0.0",
              "compressible": "~2.0.16",
              "debug": "2.6.9",
              "on-headers": "~1.0.2",
              "safe-buffer": "5.1.2",
              "vary": "~1.1.2"
            },
            "dependencies": {
              "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "dev": true,
                "requires": {
                  "ms": "2.0.0"
                }
              },
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
                "dev": true
              },
              "safe-buffer": {
                "version": "5.1.2",
                "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
                "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
                "dev": true
              }
            }
          },
          "concat-map": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
            "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
            "dev": true
          },
          "connect": {
            "version": "3.7.0",
            "resolved": "https://registry.npmjs.org/connect/-/connect-3.7.0.tgz",
            "integrity": "sha512-ZqRXc+tZukToSNmh5C2iWMSoV3X1YUcPbqEM4DkEG5tNQXrQUZCNVGGv3IuicnkMtPfGf3Xtp8WCXs295iQ1pQ==",
            "dev": true,
            "requires": {
              "debug": "2.6.9",
              "finalhandler": "1.1.2",
              "parseurl": "~1.3.3",
              "utils-merge": "1.0.1"
            },
            "dependencies": {
              "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "dev": true,
                "requires": {
                  "ms": "2.0.0"
                }
              },
              "finalhandler": {
                "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
                "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
                "dev": true,
                "requires": {
                  "debug": "2.6.9",
                  "encodeurl": "~1.0.2",
                  "escape-html": "~1.0.3",
                  "on-finished": "~2.3.0",
                  "parseurl": "~1.3.3",
                  "statuses": "~1.5.0",
                  "unpipe": "~1.0.0"
                }
              },
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
                "dev": true
              },
              "on-finished": {
                "version": "2.3.0",
                "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
                "integrity": "sha512-ikqdkGAAyf/X/gPhXGvfgAytDZtDbr+bkNUJ0N9h5MI/dmdgCs3l6hoHrcUv41sRKew3jIwrp4qQDXiK99Utww==",
                "dev": true,
                "requires": {
                  "ee-first": "1.1.1"
                }
              },
              "statuses": {
                "version": "1.5.0",
                "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
                "integrity": "sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==",
                "dev": true
              }
            }
          },
          "connect-history-api-fallback": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
            "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg==",
            "dev": true
          },
          "console-control-strings": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
            "integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==",
            "dev": true
          },
          "content-disposition": {
            "version": "0.5.4",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
            "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
            "dev": true,
            "requires": {
              "safe-buffer": "5.2.1"
            }
          },
          "content-type": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
            "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
            "dev": true
          },
          "convert-source-map": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.9.0.tgz",
            "integrity": "sha512-ASFBup0Mz1uyiIjANan1jzLQami9z1PoYSZCiiYW2FczPbenXc45FZdBZLzOT+r6+iciuEModtmCti+hjaAk0A==",
            "dev": true
          },
          "cookie": {
            "version": "0.5.0",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
            "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==",
            "dev": true
          },
          "cookie-signature": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
            "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==",
            "dev": true
          },
          "copy-anything": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/copy-anything/-/copy-anything-2.0.6.tgz",
            "integrity": "sha512-1j20GZTsvKNkc4BY3NpMOM8tt///wY3FpIzozTOFO2ffuZcV61nojHXVKIy3WM+7ADCy5FVhdZYHYDdgTU0yJw==",
            "dev": true,
            "requires": {
              "is-what": "^3.14.1"
            }
          },
          "copy-webpack-plugin": {
            "version": "10.2.1",
            "resolved": "https://registry.npmjs.org/copy-webpack-plugin/-/copy-webpack-plugin-10.2.1.tgz",
            "integrity": "sha512-nr81NhCAIpAWXGCK5thrKmfCQ6GDY0L5RN0U+BnIn/7Us55+UCex5ANNsNKmIVtDRnk0Ecf+/kzp9SUVrrBMLg==",
            "dev": true,
            "requires": {
              "fast-glob": "^3.2.7",
              "glob-parent": "^6.0.1",
              "globby": "^12.0.2",
              "normalize-path": "^3.0.0",
              "schema-utils": "^4.0.0",
              "serialize-javascript": "^6.0.0"
            },
            "dependencies": {
              "ajv-keywords": {
                "version": "5.1.0",
                "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
                "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
                "dev": true,
                "requires": {
                  "fast-deep-equal": "^3.1.3"
                }
              },
              "schema-utils": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
                "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
                "dev": true,
                "requires": {
                  "@types/json-schema": "^7.0.9",
                  "ajv": "^8.8.0",
                  "ajv-formats": "^2.1.1",
                  "ajv-keywords": "^5.0.0"
                }
              }
            }
          },
          "core-js": {
            "version": "3.20.3",
            "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.20.3.tgz",
            "integrity": "sha512-vVl8j8ph6tRS3B8qir40H7yw7voy17xL0piAjlbBUsH7WIfzoedL/ZOr1OV9FyZQLWXsayOJyV4tnRyXR85/ag==",
            "dev": true
          },
          "core-js-compat": {
            "version": "3.26.0",
            "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.26.0.tgz",
            "integrity": "sha512-piOX9Go+Z4f9ZiBFLnZ5VrOpBl0h7IGCkiFUN11QTe6LjAvOT3ifL/5TdoizMh99hcGy5SoLyWbapIY/PIb/3A==",
            "dev": true,
            "requires": {
              "browserslist": "^4.21.4"
            }
          },
          "core-util-is": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
            "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
            "dev": true
          },
          "cors": {
            "version": "2.8.5",
            "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
            "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
            "dev": true,
            "requires": {
              "object-assign": "^4",
              "vary": "^1"
            }
          },
          "cosmiconfig": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-7.0.1.tgz",
            "integrity": "sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==",
            "dev": true,
            "requires": {
              "@types/parse-json": "^4.0.0",
              "import-fresh": "^3.2.1",
              "parse-json": "^5.0.0",
              "path-type": "^4.0.0",
              "yaml": "^1.10.0"
            }
          },
          "critters": {
            "version": "0.0.16",
            "resolved": "https://registry.npmjs.org/critters/-/critters-0.0.16.tgz",
            "integrity": "sha512-JwjgmO6i3y6RWtLYmXwO5jMd+maZt8Tnfu7VVISmEWyQqfLpB8soBswf8/2bu6SBXxtKA68Al3c+qIG1ApT68A==",
            "dev": true,
            "requires": {
              "chalk": "^4.1.0",
              "css-select": "^4.2.0",
              "parse5": "^6.0.1",
              "parse5-htmlparser2-tree-adapter": "^6.0.1",
              "postcss": "^8.3.7",
              "pretty-bytes": "^5.3.0"
            },
            "dependencies": {
              "ansi-styles": {
                "version": "4.3.0",
                "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                "dev": true,
                "requires": {
                  "color-convert": "^2.0.1"
                }
              },
              "chalk": {
                "version": "4.1.2",
                "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
                "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
                "dev": true,
                "requires": {
                  "ansi-styles": "^4.1.0",
                  "supports-color": "^7.1.0"
                }
              },
              "color-convert": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                "dev": true,
                "requires": {
                  "color-name": "~1.1.4"
                }
              },
              "color-name": {
                "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                "dev": true
              },
              "has-flag": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                "dev": true
              },
              "supports-color": {
                "version": "7.2.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                "dev": true,
                "requires": {
                  "has-flag": "^4.0.0"
                }
              }
            }
          },
          "cross-spawn": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
            "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
            "dev": true,
            "requires": {
              "path-key": "^3.1.0",
              "shebang-command": "^2.0.0",
              "which": "^2.0.1"
            }
          },
          "css": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/css/-/css-3.0.0.tgz",
            "integrity": "sha512-DG9pFfwOrzc+hawpmqX/dHYHJG+Bsdb0klhyi1sDneOgGOXy9wQIC8hzyVp1e4NRYDBdxcylvywPkkXCHAzTyQ==",
            "dev": true,
            "requires": {
              "inherits": "^2.0.4",
              "source-map": "^0.6.1",
              "source-map-resolve": "^0.6.0"
            },
            "dependencies": {
              "source-map": {
                "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                "dev": true
              }
            }
          },
          "css-blank-pseudo": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/css-blank-pseudo/-/css-blank-pseudo-3.0.3.tgz",
            "integrity": "sha512-VS90XWtsHGqoM0t4KpH053c4ehxZ2E6HtGI7x68YFV0pTo/QmkV/YFA+NnlvK8guxZVNWGQhVNJGC39Q8XF4OQ==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.9"
            }
          },
          "css-has-pseudo": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/css-has-pseudo/-/css-has-pseudo-3.0.4.tgz",
            "integrity": "sha512-Vse0xpR1K9MNlp2j5w1pgWIJtm1a8qS0JwS9goFYcImjlHEmywP9VUF05aGBXzGpDJF86QXk4L0ypBmwPhGArw==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.9"
            }
          },
          "css-loader": {
            "version": "6.5.1",
            "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-6.5.1.tgz",
            "integrity": "sha512-gEy2w9AnJNnD9Kuo4XAP9VflW/ujKoS9c/syO+uWMlm5igc7LysKzPXaDoR2vroROkSwsTS2tGr1yGGEbZOYZQ==",
            "dev": true,
            "requires": {
              "icss-utils": "^5.1.0",
              "postcss": "^8.2.15",
              "postcss-modules-extract-imports": "^3.0.0",
              "postcss-modules-local-by-default": "^4.0.0",
              "postcss-modules-scope": "^3.0.0",
              "postcss-modules-values": "^4.0.0",
              "postcss-value-parser": "^4.1.0",
              "semver": "^7.3.5"
            }
          },
          "css-prefers-color-scheme": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/css-prefers-color-scheme/-/css-prefers-color-scheme-6.0.3.tgz",
            "integrity": "sha512-4BqMbZksRkJQx2zAjrokiGMd07RqOa2IxIrrN10lyBe9xhn9DEvjUK79J6jkeiv9D9hQFXKb6g1jwU62jziJZA==",
            "dev": true
          },
          "css-select": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/css-select/-/css-select-4.3.0.tgz",
            "integrity": "sha512-wPpOYtnsVontu2mODhA19JrqWxNsfdatRKd64kmpRbQgh1KtItko5sTnEpPdpSaJszTOhEMlF/RPz28qj4HqhQ==",
            "dev": true,
            "requires": {
              "boolbase": "^1.0.0",
              "css-what": "^6.0.1",
              "domhandler": "^4.3.1",
              "domutils": "^2.8.0",
              "nth-check": "^2.0.1"
            }
          },
          "css-what": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/css-what/-/css-what-6.1.0.tgz",
            "integrity": "sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==",
            "dev": true
          },
          "cssdb": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/cssdb/-/cssdb-5.1.0.tgz",
            "integrity": "sha512-/vqjXhv1x9eGkE/zO6o8ZOI7dgdZbLVLUGyVRbPgk6YipXbW87YzUCcO+Jrmi5bwJlAH6oD+MNeZyRgXea1GZw==",
            "dev": true
          },
          "cssesc": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
            "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
            "dev": true
          },
          "custom-event": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/custom-event/-/custom-event-1.0.1.tgz",
            "integrity": "sha512-GAj5FOq0Hd+RsCGVJxZuKaIDXDf3h6GQoNEjFgbLLI/trgtavwUbSnZ5pVfg27DVCaWjIohryS0JFwIJyT2cMg==",
            "dev": true
          },
          "date-format": {
            "version": "4.0.14",
            "resolved": "https://registry.npmjs.org/date-format/-/date-format-4.0.14.tgz",
            "integrity": "sha512-39BOQLs9ZjKh0/patS9nrT8wc3ioX3/eA/zgbKNopnF2wCqJEoxywwwElATYvRsXdnOxA/OQeQoFZ3rFjVajhg==",
            "dev": true
          },
          "debug": {
            "version": "4.3.4",
            "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
            "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
            "dev": true,
            "requires": {
              "ms": "2.1.2"
            }
          },
          "decode-uri-component": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
            "integrity": "sha512-hjf+xovcEn31w/EUYdTXQh/8smFL/dzYjohQGEIgjyNavaJfBY2p5F527Bo1VPATxv0VYTUC2bOcXvqFwk78Og==",
            "dev": true
          },
          "deep-equal": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
            "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
            "dev": true,
            "requires": {
              "is-arguments": "^1.0.4",
              "is-date-object": "^1.0.1",
              "is-regex": "^1.0.4",
              "object-is": "^1.0.1",
              "object-keys": "^1.1.1",
              "regexp.prototype.flags": "^1.2.0"
            }
          },
          "default-gateway": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-6.0.3.tgz",
            "integrity": "sha512-fwSOJsbbNzZ/CUFpqFBqYfYNLj1NbMPm8MMCIzHjC83iSJRBEGmDUxU+WP661BaBQImeC2yHwXtz+P/O9o+XEg==",
            "dev": true,
            "requires": {
              "execa": "^5.0.0"
            }
          },
          "defaults": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.4.tgz",
            "integrity": "sha512-eFuaLoy/Rxalv2kr+lqMlUnrDWV+3j4pljOIJgLIhI058IQfWJ7vXhyEIHu+HtC738klGALYxOKDO0bQP3tg8A==",
            "dev": true,
            "requires": {
              "clone": "^1.0.2"
            }
          },
          "define-lazy-prop": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/define-lazy-prop/-/define-lazy-prop-2.0.0.tgz",
            "integrity": "sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==",
            "dev": true
          },
          "define-properties": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.4.tgz",
            "integrity": "sha512-uckOqKcfaVvtBdsVkdPv3XjveQJsNQqmhXgRi8uhvWWuPYZCNlzT8qAyblUgNoXdHdjMTzAqeGjAoli8f+bzPA==",
            "dev": true,
            "requires": {
              "has-property-descriptors": "^1.0.0",
              "object-keys": "^1.1.1"
            }
          },
          "del": {
            "version": "6.1.1",
            "resolved": "https://registry.npmjs.org/del/-/del-6.1.1.tgz",
            "integrity": "sha512-ua8BhapfP0JUJKC/zV9yHHDW/rDoDxP4Zhn3AkA6/xT6gY7jYXJiaeyBZznYVujhZZET+UgcbZiQ7sN3WqcImg==",
            "dev": true,
            "requires": {
              "globby": "^11.0.1",
              "graceful-fs": "^4.2.4",
              "is-glob": "^4.0.1",
              "is-path-cwd": "^2.2.0",
              "is-path-inside": "^3.0.2",
              "p-map": "^4.0.0",
              "rimraf": "^3.0.2",
              "slash": "^3.0.0"
            },
            "dependencies": {
              "array-union": {
                "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
                "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
                "dev": true
              },
              "globby": {
                "version": "11.1.0",
                "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
                "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
                "dev": true,
                "requires": {
                  "array-union": "^2.1.0",
                  "dir-glob": "^3.0.1",
                  "fast-glob": "^3.2.9",
                  "ignore": "^5.2.0",
                  "merge2": "^1.4.1",
                  "slash": "^3.0.0"
                }
              },
              "slash": {
                "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
                "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
                "dev": true
              }
            }
          },
          "delegates": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
            "integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==",
            "dev": true
          },
          "depd": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
            "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
            "dev": true
          },
          "dependency-graph": {
            "version": "0.11.0",
            "resolved": "https://registry.npmjs.org/dependency-graph/-/dependency-graph-0.11.0.tgz",
            "integrity": "sha512-JeMq7fEshyepOWDfcfHK06N3MhyPhz++vtqWhMT5O9A3K42rdsEDpfdVqjaqaAhsw6a+ZqeDvQVtD0hFHQWrzg==",
            "dev": true
          },
          "destroy": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
            "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
            "dev": true
          },
          "detect-node": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.1.0.tgz",
            "integrity": "sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==",
            "dev": true
          },
          "di": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/di/-/di-0.0.1.tgz",
            "integrity": "sha512-uJaamHkagcZtHPqCIHZxnFrXlunQXgBOsZSUOWwFw31QJCAbyTBoHMW75YOTur5ZNx8pIeAKgf6GWIgaqqiLhA==",
            "dev": true
          },
          "dir-glob": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
            "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
            "dev": true,
            "requires": {
              "path-type": "^4.0.0"
            }
          },
          "dns-equal": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz",
            "integrity": "sha512-z+paD6YUQsk+AbGCEM4PrOXSss5gd66QfcVBFTKR/HpFL9jCqikS94HYwKww6fQyO7IxrIIyUu+g0Ka9tUS2Cg==",
            "dev": true
          },
          "dns-packet": {
            "version": "1.3.4",
            "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.4.tgz",
            "integrity": "sha512-BQ6F4vycLXBvdrJZ6S3gZewt6rcrks9KBgM9vrhW+knGRqc8uEdT7fuCwloc7nny5xNoMJ17HGH0R/6fpo8ECA==",
            "dev": true,
            "requires": {
              "ip": "^1.1.0",
              "safe-buffer": "^5.0.1"
            }
          },
          "dns-txt": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
            "integrity": "sha512-Ix5PrWjphuSoUXV/Zv5gaFHjnaJtb02F2+Si3Ht9dyJ87+Z/lMmy+dpNHtTGraNK958ndXq2i+GLkWsWHcKaBQ==",
            "dev": true,
            "requires": {
              "buffer-indexof": "^1.0.0"
            }
          },
          "dom-serialize": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/dom-serialize/-/dom-serialize-2.2.1.tgz",
            "integrity": "sha512-Yra4DbvoW7/Z6LBN560ZwXMjoNOSAN2wRsKFGc4iBeso+mpIA6qj1vfdf9HpMaKAqG6wXTy+1SYEzmNpKXOSsQ==",
            "dev": true,
            "requires": {
              "custom-event": "~1.0.0",
              "ent": "~2.2.0",
              "extend": "^3.0.0",
              "void-elements": "^2.0.0"
            }
          },
          "dom-serializer": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.4.1.tgz",
            "integrity": "sha512-VHwB3KfrcOOkelEG2ZOfxqLZdfkil8PtJi4P8N2MMXucZq2yLp75ClViUlOVwyoHEDjYU433Aq+5zWP61+RGag==",
            "dev": true,
            "requires": {
              "domelementtype": "^2.0.1",
              "domhandler": "^4.2.0",
              "entities": "^2.0.0"
            }
          },
          "domelementtype": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
            "integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==",
            "dev": true
          },
          "domhandler": {
            "version": "4.3.1",
            "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-4.3.1.tgz",
            "integrity": "sha512-GrwoxYN+uWlzO8uhUXRl0P+kHE4GtVPfYzVLcUxPL7KNdHKj66vvlhiweIHqYYXWlw+T8iLMp42Lm67ghw4WMQ==",
            "dev": true,
            "requires": {
              "domelementtype": "^2.2.0"
            }
          },
          "domutils": {
            "version": "2.8.0",
            "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.8.0.tgz",
            "integrity": "sha512-w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==",
            "dev": true,
            "requires": {
              "dom-serializer": "^1.0.1",
              "domelementtype": "^2.2.0",
              "domhandler": "^4.2.0"
            }
          },
          "ee-first": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
            "dev": true
          },
          "electron-to-chromium": {
            "version": "1.4.284",
            "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.4.284.tgz",
            "integrity": "sha512-M8WEXFuKXMYMVr45fo8mq0wUrrJHheiKZf6BArTKk9ZBYCKJEOU5H8cdWgDT+qCVZf7Na4lVUaZsA+h6uA9+PA==",
            "dev": true
          },
          "emoji-regex": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
            "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
            "dev": true
          },
          "emojis-list": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
            "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
            "dev": true
          },
          "encodeurl": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
            "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
            "dev": true
          },
          "encoding": {
            "version": "0.1.13",
            "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
            "integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
            "dev": true,
            "optional": true,
            "requires": {
              "iconv-lite": "^0.6.2"
            },
            "dependencies": {
              "iconv-lite": {
                "version": "0.6.3",
                "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
                "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
                "dev": true,
                "optional": true,
                "requires": {
                  "safer-buffer": ">= 2.1.2 < 3.0.0"
                }
              }
            }
          },
          "engine.io": {
            "version": "6.2.0",
            "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-6.2.0.tgz",
            "integrity": "sha512-4KzwW3F3bk+KlzSOY57fj/Jx6LyRQ1nbcyIadehl+AnXjKT7gDO0ORdRi/84ixvMKTym6ZKuxvbzN62HDDU1Lg==",
            "dev": true,
            "requires": {
              "@types/cookie": "^0.4.1",
              "@types/cors": "^2.8.12",
              "@types/node": ">=10.0.0",
              "accepts": "~1.3.4",
              "base64id": "2.0.0",
              "cookie": "~0.4.1",
              "cors": "~2.8.5",
              "debug": "~4.3.1",
              "engine.io-parser": "~5.0.3",
              "ws": "~8.2.3"
            },
            "dependencies": {
              "cookie": {
                "version": "0.4.2",
                "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.2.tgz",
                "integrity": "sha512-aSWTXFzaKWkvHO1Ny/s+ePFpvKsPnjc551iI41v3ny/ow6tBG5Vd+FuqGNhh1LxOmVzOlGUriIlOaokOvhaStA==",
                "dev": true
              },
              "ws": {
                "version": "8.2.3",
                "resolved": "https://registry.npmjs.org/ws/-/ws-8.2.3.tgz",
                "integrity": "sha512-wBuoj1BDpC6ZQ1B7DWQBYVLphPWkm8i9Y0/3YdHjHKHiohOJ1ws+3OccDWtH+PoC9DZD5WOTrJvNbWvjS6JWaA==",
                "dev": true
              }
            }
          },
          "engine.io-parser": {
            "version": "5.0.4",
            "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.0.4.tgz",
            "integrity": "sha512-+nVFp+5z1E3HcToEnO7ZIj3g+3k9389DvWtvJZz0T6/eOCPIyyxehFcedoYrZQrp0LgQbD9pPXhpMBKMd5QURg==",
            "dev": true
          },
          "enhanced-resolve": {
            "version": "5.10.0",
            "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.10.0.tgz",
            "integrity": "sha512-T0yTFjdpldGY8PmuXXR0PyQ1ufZpEGiHVrp7zHKB7jdR4qlmZHhONVM5AQOAWXuF/w3dnHbEQVrNptJgt7F+cQ==",
            "dev": true,
            "requires": {
              "graceful-fs": "^4.2.4",
              "tapable": "^2.2.0"
            }
          },
          "ent": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/ent/-/ent-2.2.0.tgz",
            "integrity": "sha512-GHrMyVZQWvTIdDtpiEXdHZnFQKzeO09apj8Cbl4pKWy4i0Oprcq17usfDt5aO63swf0JOeMWjWQE/LzgSRuWpA==",
            "dev": true
          },
          "entities": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz",
            "integrity": "sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==",
            "dev": true
          },
          "env-paths": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
            "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
            "dev": true
          },
          "err-code": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
            "integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==",
            "dev": true
          },
          "errno": {
            "version": "0.1.8",
            "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.8.tgz",
            "integrity": "sha512-dJ6oBr5SQ1VSd9qkk7ByRgb/1SH4JZjCHSW/mr63/QcXO9zLVxvJ6Oy13nio03rxpSnVDDjFor75SjVeZWPW/A==",
            "dev": true,
            "optional": true,
            "requires": {
              "prr": "~1.0.1"
            }
          },
          "error-ex": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
            "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
            "dev": true,
            "requires": {
              "is-arrayish": "^0.2.1"
            }
          },
          "es-module-lexer": {
            "version": "0.9.3",
            "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-0.9.3.tgz",
            "integrity": "sha512-1HQ2M2sPtxwnvOvT1ZClHyQDiggdNjURWpY2we6aMKCQiUVxTmVs2UYPLIrD84sS+kMdUwfBSylbJPwNnBrnHQ==",
            "dev": true
          },
          "esbuild-android-arm64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-android-arm64/-/esbuild-android-arm64-0.14.22.tgz",
            "integrity": "sha512-k1Uu4uC4UOFgrnTj2zuj75EswFSEBK+H6lT70/DdS4mTAOfs2ECv2I9ZYvr3w0WL0T4YItzJdK7fPNxcPw6YmQ==",
            "dev": true,
            "optional": true
          },
          "esbuild-darwin-64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-darwin-64/-/esbuild-darwin-64-0.14.22.tgz",
            "integrity": "sha512-d8Ceuo6Vw6HM3fW218FB6jTY6O3r2WNcTAU0SGsBkXZ3k8SDoRLd3Nrc//EqzdgYnzDNMNtrWegK2Qsss4THhw==",
            "dev": true,
            "optional": true
          },
          "esbuild-darwin-arm64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-darwin-arm64/-/esbuild-darwin-arm64-0.14.22.tgz",
            "integrity": "sha512-YAt9Tj3SkIUkswuzHxkaNlT9+sg0xvzDvE75LlBo4DI++ogSgSmKNR6B4eUhU5EUUepVXcXdRIdqMq9ppeRqfw==",
            "dev": true,
            "optional": true
          },
          "esbuild-freebsd-64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-freebsd-64/-/esbuild-freebsd-64-0.14.22.tgz",
            "integrity": "sha512-ek1HUv7fkXMy87Qm2G4IRohN+Qux4IcnrDBPZGXNN33KAL0pEJJzdTv0hB/42+DCYWylSrSKxk3KUXfqXOoH4A==",
            "dev": true,
            "optional": true
          },
          "esbuild-freebsd-arm64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-freebsd-arm64/-/esbuild-freebsd-arm64-0.14.22.tgz",
            "integrity": "sha512-zPh9SzjRvr9FwsouNYTqgqFlsMIW07O8mNXulGeQx6O5ApgGUBZBgtzSlBQXkHi18WjrosYfsvp5nzOKiWzkjQ==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-32": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-32/-/esbuild-linux-32-0.14.22.tgz",
            "integrity": "sha512-SnpveoE4nzjb9t2hqCIzzTWBM0RzcCINDMBB67H6OXIuDa4KqFqaIgmTchNA9pJKOVLVIKd5FYxNiJStli21qg==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-64/-/esbuild-linux-64-0.14.22.tgz",
            "integrity": "sha512-Zcl9Wg7gKhOWWNqAjygyqzB+fJa19glgl2JG7GtuxHyL1uEnWlpSMytTLMqtfbmRykIHdab797IOZeKwk5g0zg==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-arm": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-arm/-/esbuild-linux-arm-0.14.22.tgz",
            "integrity": "sha512-soPDdbpt/C0XvOOK45p4EFt8HbH5g+0uHs5nUKjHVExfgR7du734kEkXR/mE5zmjrlymk5AA79I0VIvj90WZ4g==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-arm64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-arm64/-/esbuild-linux-arm64-0.14.22.tgz",
            "integrity": "sha512-8q/FRBJtV5IHnQChO3LHh/Jf7KLrxJ/RCTGdBvlVZhBde+dk3/qS9fFsUy+rs3dEi49aAsyVitTwlKw1SUFm+A==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-mips64le": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-mips64le/-/esbuild-linux-mips64le-0.14.22.tgz",
            "integrity": "sha512-SiNDfuRXhGh1JQLLA9JPprBgPVFOsGuQ0yDfSPTNxztmVJd8W2mX++c4FfLpAwxuJe183mLuKf7qKCHQs5ZnBQ==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-ppc64le": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-ppc64le/-/esbuild-linux-ppc64le-0.14.22.tgz",
            "integrity": "sha512-6t/GI9I+3o1EFm2AyN9+TsjdgWCpg2nwniEhjm2qJWtJyJ5VzTXGUU3alCO3evopu8G0hN2Bu1Jhz2YmZD0kng==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-riscv64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-riscv64/-/esbuild-linux-riscv64-0.14.22.tgz",
            "integrity": "sha512-AyJHipZKe88sc+tp5layovquw5cvz45QXw5SaDgAq2M911wLHiCvDtf/07oDx8eweCyzYzG5Y39Ih568amMTCQ==",
            "dev": true,
            "optional": true
          },
          "esbuild-linux-s390x": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-linux-s390x/-/esbuild-linux-s390x-0.14.22.tgz",
            "integrity": "sha512-Sz1NjZewTIXSblQDZWEFZYjOK6p8tV6hrshYdXZ0NHTjWE+lwxpOpWeElUGtEmiPcMT71FiuA9ODplqzzSxkzw==",
            "dev": true,
            "optional": true
          },
          "esbuild-netbsd-64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-netbsd-64/-/esbuild-netbsd-64-0.14.22.tgz",
            "integrity": "sha512-TBbCtx+k32xydImsHxvFgsOCuFqCTGIxhzRNbgSL1Z2CKhzxwT92kQMhxort9N/fZM2CkRCPPs5wzQSamtzEHA==",
            "dev": true,
            "optional": true
          },
          "esbuild-openbsd-64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-openbsd-64/-/esbuild-openbsd-64-0.14.22.tgz",
            "integrity": "sha512-vK912As725haT313ANZZZN+0EysEEQXWC/+YE4rQvOQzLuxAQc2tjbzlAFREx3C8+uMuZj/q7E5gyVB7TzpcTA==",
            "dev": true,
            "optional": true
          },
          "esbuild-sunos-64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-sunos-64/-/esbuild-sunos-64-0.14.22.tgz",
            "integrity": "sha512-/mbJdXTW7MTcsPhtfDsDyPEOju9EOABvCjeUU2OJ7fWpX/Em/H3WYDa86tzLUbcVg++BScQDzqV/7RYw5XNY0g==",
            "dev": true,
            "optional": true
          },
          "esbuild-wasm": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-wasm/-/esbuild-wasm-0.14.22.tgz",
            "integrity": "sha512-FOSAM29GN1fWusw0oLMv6JYhoheDIh5+atC72TkJKfIUMID6yISlicoQSd9gsNSFsNBvABvtE2jR4JB1j4FkFw==",
            "dev": true
          },
          "esbuild-windows-32": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-windows-32/-/esbuild-windows-32-0.14.22.tgz",
            "integrity": "sha512-1vRIkuvPTjeSVK3diVrnMLSbkuE36jxA+8zGLUOrT4bb7E/JZvDRhvtbWXWaveUc/7LbhaNFhHNvfPuSw2QOQg==",
            "dev": true,
            "optional": true
          },
          "esbuild-windows-64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-windows-64/-/esbuild-windows-64-0.14.22.tgz",
            "integrity": "sha512-AxjIDcOmx17vr31C5hp20HIwz1MymtMjKqX4qL6whPj0dT9lwxPexmLj6G1CpR3vFhui6m75EnBEe4QL82SYqw==",
            "dev": true,
            "optional": true
          },
          "esbuild-windows-arm64": {
            "version": "0.14.22",
            "resolved": "https://registry.npmjs.org/esbuild-windows-arm64/-/esbuild-windows-arm64-0.14.22.tgz",
            "integrity": "sha512-5wvQ+39tHmRhNpu2Fx04l7QfeK3mQ9tKzDqqGR8n/4WUxsFxnVLfDRBGirIfk4AfWlxk60kqirlODPoT5LqMUg==",
            "dev": true,
            "optional": true
          },
          "escalade": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
            "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
            "dev": true
          },
          "escape-html": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
            "dev": true
          },
          "escape-string-regexp": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
            "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
            "dev": true
          },
          "eslint-scope": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
            "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
            "dev": true,
            "requires": {
              "esrecurse": "^4.3.0",
              "estraverse": "^4.1.1"
            }
          },
          "esprima": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
            "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
            "dev": true
          },
          "esrecurse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
            "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
            "dev": true,
            "requires": {
              "estraverse": "^5.2.0"
            },
            "dependencies": {
              "estraverse": {
                "version": "5.3.0",
                "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
                "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
                "dev": true
              }
            }
          },
          "estraverse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
            "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
            "dev": true
          },
          "esutils": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
            "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
            "dev": true
          },
          "etag": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
            "dev": true
          },
          "eventemitter-asyncresource": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/eventemitter-asyncresource/-/eventemitter-asyncresource-1.0.0.tgz",
            "integrity": "sha512-39F7TBIV0G7gTelxwbEqnwhp90eqCPON1k0NwNfwhgKn4Co4ybUbj2pECcXT0B3ztRKZ7Pw1JujUUgmQJHcVAQ==",
            "dev": true
          },
          "eventemitter3": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
            "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
            "dev": true
          },
          "events": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
            "integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
            "dev": true
          },
          "execa": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
            "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
            "dev": true,
            "requires": {
              "cross-spawn": "^7.0.3",
              "get-stream": "^6.0.0",
              "human-signals": "^2.1.0",
              "is-stream": "^2.0.0",
              "merge-stream": "^2.0.0",
              "npm-run-path": "^4.0.1",
              "onetime": "^5.1.2",
              "signal-exit": "^3.0.3",
              "strip-final-newline": "^2.0.0"
            }
          },
          "express": {
            "version": "4.18.2",
            "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
            "integrity": "sha512-5/PsL6iGPdfQ/lKM1UuielYgv3BUoJfz1aUwU9vHZ+J7gyvwdQXFEBIEIaxeGf0GIcreATNyBExtalisDbuMqQ==",
            "dev": true,
            "requires": {
              "accepts": "~1.3.8",
              "array-flatten": "1.1.1",
              "body-parser": "1.20.1",
              "content-disposition": "0.5.4",
              "content-type": "~1.0.4",
              "cookie": "0.5.0",
              "cookie-signature": "1.0.6",
              "debug": "2.6.9",
              "depd": "2.0.0",
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "etag": "~1.8.1",
              "finalhandler": "1.2.0",
              "fresh": "0.5.2",
              "http-errors": "2.0.0",
              "merge-descriptors": "1.0.1",
              "methods": "~1.1.2",
              "on-finished": "2.4.1",
              "parseurl": "~1.3.3",
              "path-to-regexp": "0.1.7",
              "proxy-addr": "~2.0.7",
              "qs": "6.11.0",
              "range-parser": "~1.2.1",
              "safe-buffer": "5.2.1",
              "send": "0.18.0",
              "serve-static": "1.15.0",
              "setprototypeof": "1.2.0",
              "statuses": "2.0.1",
              "type-is": "~1.6.18",
              "utils-merge": "1.0.1",
              "vary": "~1.1.2"
            },
            "dependencies": {
              "array-flatten": {
                "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
                "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==",
                "dev": true
              },
              "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "dev": true,
                "requires": {
                  "ms": "2.0.0"
                }
              },
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
                "dev": true
              }
            }
          },
          "extend": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
            "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
            "dev": true
          },
          "external-editor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
            "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
            "dev": true,
            "requires": {
              "chardet": "^0.7.0",
              "iconv-lite": "^0.4.24",
              "tmp": "^0.0.33"
            }
          },
          "fast-deep-equal": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
            "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
            "dev": true
          },
          "fast-glob": {
            "version": "3.2.12",
            "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.12.tgz",
            "integrity": "sha512-DVj4CQIYYow0BlaelwK1pHl5n5cRSJfM60UA0zK891sVInoPri2Ekj7+e1CT3/3qxXenpI+nBBmQAcJPJgaj4w==",
            "dev": true,
            "requires": {
              "@nodelib/fs.stat": "^2.0.2",
              "@nodelib/fs.walk": "^1.2.3",
              "glob-parent": "^5.1.2",
              "merge2": "^1.3.0",
              "micromatch": "^4.0.4"
            },
            "dependencies": {
              "glob-parent": {
                "version": "5.1.2",
                "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
                "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
                "dev": true,
                "requires": {
                  "is-glob": "^4.0.1"
                }
              }
            }
          },
          "fast-json-stable-stringify": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
            "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
            "dev": true
          },
          "fastq": {
            "version": "1.13.0",
            "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
            "integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
            "dev": true,
            "requires": {
              "reusify": "^1.0.4"
            }
          },
          "faye-websocket": {
            "version": "0.11.4",
            "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.4.tgz",
            "integrity": "sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==",
            "dev": true,
            "requires": {
              "websocket-driver": ">=0.5.1"
            }
          },
          "figures": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
            "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
            "dev": true,
            "requires": {
              "escape-string-regexp": "^1.0.5"
            }
          },
          "fill-range": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
            "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
            "dev": true,
            "requires": {
              "to-regex-range": "^5.0.1"
            }
          },
          "finalhandler": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",
            "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",
            "dev": true,
            "requires": {
              "debug": "2.6.9",
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "on-finished": "2.4.1",
              "parseurl": "~1.3.3",
              "statuses": "2.0.1",
              "unpipe": "~1.0.0"
            },
            "dependencies": {
              "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "dev": true,
                "requires": {
                  "ms": "2.0.0"
                }
              },
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
                "dev": true
              }
            }
          },
          "find-cache-dir": {
            "version": "3.3.2",
            "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.2.tgz",
            "integrity": "sha512-wXZV5emFEjrridIgED11OoUKLxiYjAcqot/NJdAkOhlJ+vGzwhOAfcG5OX1jP+S0PcjEn8bdMJv+g2jwQ3Onig==",
            "dev": true,
            "requires": {
              "commondir": "^1.0.1",
              "make-dir": "^3.0.2",
              "pkg-dir": "^4.1.0"
            }
          },
          "find-up": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
            "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
            "dev": true,
            "requires": {
              "locate-path": "^5.0.0",
              "path-exists": "^4.0.0"
            }
          },
          "flatted": {
            "version": "3.2.7",
            "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.2.7.tgz",
            "integrity": "sha512-5nqDSxl8nn5BSNxyR3n4I6eDmbolI6WT+QqR547RwxQapgjQBmtktdP+HTBb/a/zLsbzERTONyUB5pefh5TtjQ==",
            "dev": true
          },
          "follow-redirects": {
            "version": "1.15.2",
            "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.2.tgz",
            "integrity": "sha512-VQLG33o04KaQ8uYi2tVNbdrWp1QWxNNea+nmIB4EVM28v0hmP17z7aG1+wAkNzVq4KeXTq3221ye5qTJP91JwA==",
            "dev": true
          },
          "forwarded": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
            "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
            "dev": true
          },
          "fraction.js": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.2.0.tgz",
            "integrity": "sha512-MhLuK+2gUcnZe8ZHlaaINnQLl0xRIGRfcGk2yl8xoQAfHrSsL3rYu6FCmBdkdbhc9EPlwyGHewaRsvwRMJtAlA==",
            "dev": true
          },
          "fresh": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
            "dev": true
          },
          "fs-extra": {
            "version": "8.1.0",
            "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
            "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
            "dev": true,
            "requires": {
              "graceful-fs": "^4.2.0",
              "jsonfile": "^4.0.0",
              "universalify": "^0.1.0"
            }
          },
          "fs-minipass": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
            "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
            "dev": true,
            "requires": {
              "minipass": "^3.0.0"
            }
          },
          "fs-monkey": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/fs-monkey/-/fs-monkey-1.0.3.tgz",
            "integrity": "sha512-cybjIfiiE+pTWicSCLFHSrXZ6EilF30oh91FDP9S2B051prEa7QWfrVTQm10/dDpswBDXZugPa1Ogu8Yh+HV0Q==",
            "dev": true
          },
          "fs.realpath": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
            "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
            "dev": true
          },
          "fsevents": {
            "version": "2.3.2",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
            "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
            "dev": true,
            "optional": true
          },
          "function-bind": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
            "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
            "dev": true
          },
          "functions-have-names": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
            "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
            "dev": true
          },
          "gauge": {
            "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/gauge/-/gauge-4.0.4.tgz",
            "integrity": "sha512-f9m+BEN5jkg6a0fZjleidjN51VE1X+mPFQ2DJ0uv1V39oCLCbsGe6yjbBnp7eK7z/+GAon99a3nHuqbuuthyPg==",
            "dev": true,
            "requires": {
              "aproba": "^1.0.3 || ^2.0.0",
              "color-support": "^1.1.3",
              "console-control-strings": "^1.1.0",
              "has-unicode": "^2.0.1",
              "signal-exit": "^3.0.7",
              "string-width": "^4.2.3",
              "strip-ansi": "^6.0.1",
              "wide-align": "^1.1.5"
            }
          },
          "gensync": {
            "version": "1.0.0-beta.2",
            "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
            "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
            "dev": true
          },
          "get-caller-file": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
            "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
            "dev": true
          },
          "get-intrinsic": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.3.tgz",
            "integrity": "sha512-QJVz1Tj7MS099PevUG5jvnt9tSkXN8K14dxQlikJuPt4uD9hHAHjLyLBiLR5zELelBdD9QNRAXZzsJx0WaDL9A==",
            "dev": true,
            "requires": {
              "function-bind": "^1.1.1",
              "has": "^1.0.3",
              "has-symbols": "^1.0.3"
            }
          },
          "get-package-type": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
            "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==",
            "dev": true
          },
          "get-stream": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
            "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==",
            "dev": true
          },
          "glob": {
            "version": "7.2.0",
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",
            "integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",
            "dev": true,
            "requires": {
              "fs.realpath": "^1.0.0",
              "inflight": "^1.0.4",
              "inherits": "2",
              "minimatch": "^3.0.4",
              "once": "^1.3.0",
              "path-is-absolute": "^1.0.0"
            }
          },
          "glob-parent": {
            "version": "6.0.2",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
            "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
            "dev": true,
            "requires": {
              "is-glob": "^4.0.3"
            }
          },
          "glob-to-regexp": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
            "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
            "dev": true
          },
          "globals": {
            "version": "11.12.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
            "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
            "dev": true
          },
          "globby": {
            "version": "12.2.0",
            "resolved": "https://registry.npmjs.org/globby/-/globby-12.2.0.tgz",
            "integrity": "sha512-wiSuFQLZ+urS9x2gGPl1H5drc5twabmm4m2gTR27XDFyjUHJUNsS8o/2aKyIF6IoBaR630atdher0XJ5g6OMmA==",
            "dev": true,
            "requires": {
              "array-union": "^3.0.1",
              "dir-glob": "^3.0.1",
              "fast-glob": "^3.2.7",
              "ignore": "^5.1.9",
              "merge2": "^1.4.1",
              "slash": "^4.0.0"
            }
          },
          "graceful-fs": {
            "version": "4.2.10",
            "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.10.tgz",
            "integrity": "sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA==",
            "dev": true
          },
          "handle-thing": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
            "integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==",
            "dev": true
          },
          "has": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
            "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
            "dev": true,
            "requires": {
              "function-bind": "^1.1.1"
            }
          },
          "has-flag": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
            "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
            "dev": true
          },
          "has-property-descriptors": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.0.tgz",
            "integrity": "sha512-62DVLZGoiEBDHQyqG4w9xCuZ7eJEwNmJRWw2VY84Oedb7WFcA27fiEVe8oUQx9hAUJ4ekurquucTGwsyO1XGdQ==",
            "dev": true,
            "requires": {
              "get-intrinsic": "^1.1.1"
            }
          },
          "has-symbols": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
            "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
            "dev": true
          },
          "has-tostringtag": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
            "integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
            "dev": true,
            "requires": {
              "has-symbols": "^1.0.2"
            }
          },
          "has-unicode": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
            "integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==",
            "dev": true
          },
          "hdr-histogram-js": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/hdr-histogram-js/-/hdr-histogram-js-2.0.3.tgz",
            "integrity": "sha512-Hkn78wwzWHNCp2uarhzQ2SGFLU3JY8SBDDd3TAABK4fc30wm+MuPOrg5QVFVfkKOQd6Bfz3ukJEI+q9sXEkK1g==",
            "dev": true,
            "requires": {
              "@assemblyscript/loader": "^0.10.1",
              "base64-js": "^1.2.0",
              "pako": "^1.0.3"
            }
          },
          "hdr-histogram-percentiles-obj": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/hdr-histogram-percentiles-obj/-/hdr-histogram-percentiles-obj-3.0.0.tgz",
            "integrity": "sha512-7kIufnBqdsBGcSZLPJwqHT3yhk1QTsSlFsVD3kx5ixH/AlgBs9yM1q6DPhXZ8f8gtdqgh7N7/5btRLpQsS2gHw==",
            "dev": true
          },
          "hosted-git-info": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-4.1.0.tgz",
            "integrity": "sha512-kyCuEOWjJqZuDbRHzL8V93NzQhwIB71oFWSyzVo+KPZI+pnQPPxucdkrOZvkLRnrf5URsQM+IJ09Dw29cRALIA==",
            "dev": true,
            "requires": {
              "lru-cache": "^6.0.0"
            }
          },
          "hpack.js": {
            "version": "2.1.6",
            "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
            "integrity": "sha512-zJxVehUdMGIKsRaNt7apO2Gqp0BdqW5yaiGHXXmbpvxgBYVZnAql+BJb4RO5ad2MgpbZKn5G6nMnegrH1FcNYQ==",
            "dev": true,
            "requires": {
              "inherits": "^2.0.1",
              "obuf": "^1.0.0",
              "readable-stream": "^2.0.1",
              "wbuf": "^1.1.0"
            },
            "dependencies": {
              "readable-stream": {
                "version": "2.3.7",
                "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
                "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
                "dev": true,
                "requires": {
                  "core-util-is": "~1.0.0",
                  "inherits": "~2.0.3",
                  "isarray": "~1.0.0",
                  "process-nextick-args": "~2.0.0",
                  "safe-buffer": "~5.1.1",
                  "string_decoder": "~1.1.1",
                  "util-deprecate": "~1.0.1"
                }
              },
              "safe-buffer": {
                "version": "5.1.2",
                "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
                "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
                "dev": true
              },
              "string_decoder": {
                "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
                "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
                "dev": true,
                "requires": {
                  "safe-buffer": "~5.1.0"
                }
              }
            }
          },
          "html-entities": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-2.3.3.tgz",
            "integrity": "sha512-DV5Ln36z34NNTDgnz0EWGBLZENelNAtkiFA4kyNOG2tDI6Mz1uSWiq1wAKdyjnJwyDiDO7Fa2SO1CTxPXL8VxA==",
            "dev": true
          },
          "html-escaper": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
            "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==",
            "dev": true
          },
          "http-cache-semantics": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
            "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==",
            "dev": true
          },
          "http-deceiver": {
            "version": "1.2.7",
            "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
            "integrity": "sha512-LmpOGxTfbpgtGVxJrj5k7asXHCgNZp5nLfp+hWc8QQRqtb7fUy6kRY3BO1h9ddF6yIPYUARgxGOwB42DnxIaNw==",
            "dev": true
          },
          "http-errors": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
            "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
            "dev": true,
            "requires": {
              "depd": "2.0.0",
              "inherits": "2.0.4",
              "setprototypeof": "1.2.0",
              "statuses": "2.0.1",
              "toidentifier": "1.0.1"
            }
          },
          "http-parser-js": {
            "version": "0.5.8",
            "resolved": "https://registry.npmjs.org/http-parser-js/-/http-parser-js-0.5.8.tgz",
            "integrity": "sha512-SGeBX54F94Wgu5RH3X5jsDtf4eHyRogWX1XGT3b4HuW3tQPM4AaBzoUji/4AAJNXCEOWZ5O0DgZmJw1947gD5Q==",
            "dev": true
          },
          "http-proxy": {
            "version": "1.18.1",
            "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
            "integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",
            "dev": true,
            "requires": {
              "eventemitter3": "^4.0.0",
              "follow-redirects": "^1.0.0",
              "requires-port": "^1.0.0"
            }
          },
          "http-proxy-agent": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",
            "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",
            "dev": true,
            "requires": {
              "@tootallnate/once": "1",
              "agent-base": "6",
              "debug": "4"
            }
          },
          "http-proxy-middleware": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-2.0.6.tgz",
            "integrity": "sha512-ya/UeJ6HVBYxrgYotAZo1KvPWlgB48kUJLDePFeneHsVujFaW5WNj2NgWCAE//B1Dl02BIfYlpNgBy8Kf8Rjmw==",
            "dev": true,
            "requires": {
              "@types/http-proxy": "^1.17.8",
              "http-proxy": "^1.18.1",
              "is-glob": "^4.0.1",
              "is-plain-obj": "^3.0.0",
              "micromatch": "^4.0.2"
            }
          },
          "https-proxy-agent": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz",
            "integrity": "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==",
            "dev": true,
            "requires": {
              "agent-base": "6",
              "debug": "4"
            }
          },
          "human-signals": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
            "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==",
            "dev": true
          },
          "humanize-ms": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/humanize-ms/-/humanize-ms-1.2.1.tgz",
            "integrity": "sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==",
            "dev": true,
            "requires": {
              "ms": "^2.0.0"
            }
          },
          "iconv-lite": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
            "dev": true,
            "requires": {
              "safer-buffer": ">= 2.1.2 < 3"
            }
          },
          "icss-utils": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-5.1.0.tgz",
            "integrity": "sha512-soFhflCVWLfRNOPU3iv5Z9VUdT44xFRbzjLsEzSr5AQmgqPMTHdU3PMT1Cf1ssx8fLNJDA1juftYl+PUcv3MqA==",
            "dev": true
          },
          "ieee754": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
            "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
            "dev": true
          },
          "ignore": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.2.0.tgz",
            "integrity": "sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==",
            "dev": true
          },
          "ignore-walk": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-4.0.1.tgz",
            "integrity": "sha512-rzDQLaW4jQbh2YrOFlJdCtX8qgJTehFRYiUB2r1osqTeDzV/3+Jh8fz1oAPzUThf3iku8Ds4IDqawI5d8mUiQw==",
            "dev": true,
            "requires": {
              "minimatch": "^3.0.4"
            }
          },
          "image-size": {
            "version": "0.5.5",
            "resolved": "https://registry.npmjs.org/image-size/-/image-size-0.5.5.tgz",
            "integrity": "sha512-6TDAlDPZxUFCv+fuOkIoXT/V/f3Qbq8e37p+YOiYrUv3v9cc3/6x78VdfPgFVaB9dZYeLUfKgHRebpkm/oP2VQ==",
            "dev": true,
            "optional": true
          },
          "immutable": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/immutable/-/immutable-4.1.0.tgz",
            "integrity": "sha512-oNkuqVTA8jqG1Q6c+UglTOD1xhC1BtjKI7XkCXRkZHrN5m18/XsnUp8Q89GkQO/z+0WjonSvl0FLhDYftp46nQ==",
            "dev": true
          },
          "import-fresh": {
            "version": "3.3.0",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
            "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
            "dev": true,
            "requires": {
              "parent-module": "^1.0.0",
              "resolve-from": "^4.0.0"
            },
            "dependencies": {
              "resolve-from": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
                "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
                "dev": true
              }
            }
          },
          "imurmurhash": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
            "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
            "dev": true
          },
          "indent-string": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
            "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
            "dev": true
          },
          "infer-owner": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
            "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",
            "dev": true
          },
          "inflight": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
            "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
            "dev": true,
            "requires": {
              "once": "^1.3.0",
              "wrappy": "1"
            }
          },
          "inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
            "dev": true
          },
          "ini": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ini/-/ini-2.0.0.tgz",
            "integrity": "sha512-7PnF4oN3CvZF23ADhA5wRaYEQpJ8qygSkbtTXWBeXWXmEVRXK+1ITciHWwHhsjv1TmW0MgacIv6hEi5pX5NQdA==",
            "dev": true
          },
          "inquirer": {
            "version": "8.2.0",
            "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-8.2.0.tgz",
            "integrity": "sha512-0crLweprevJ02tTuA6ThpoAERAGyVILC4sS74uib58Xf/zSr1/ZWtmm7D5CI+bSQEaA04f0K7idaHpQbSWgiVQ==",
            "dev": true,
            "requires": {
              "ansi-escapes": "^4.2.1",
              "chalk": "^4.1.1",
              "cli-cursor": "^3.1.0",
              "cli-width": "^3.0.0",
              "external-editor": "^3.0.3",
              "figures": "^3.0.0",
              "lodash": "^4.17.21",
              "mute-stream": "0.0.8",
              "ora": "^5.4.1",
              "run-async": "^2.4.0",
              "rxjs": "^7.2.0",
              "string-width": "^4.1.0",
              "strip-ansi": "^6.0.0",
              "through": "^2.3.6"
            },
            "dependencies": {
              "ansi-styles": {
                "version": "4.3.0",
                "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                "dev": true,
                "requires": {
                  "color-convert": "^2.0.1"
                }
              },
              "chalk": {
                "version": "4.1.2",
                "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
                "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
                "dev": true,
                "requires": {
                  "ansi-styles": "^4.1.0",
                  "supports-color": "^7.1.0"
                }
              },
              "color-convert": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                "dev": true,
                "requires": {
                  "color-name": "~1.1.4"
                }
              },
              "color-name": {
                "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                "dev": true
              },
              "has-flag": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                "dev": true
              },
              "supports-color": {
                "version": "7.2.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                "dev": true,
                "requires": {
                  "has-flag": "^4.0.0"
                }
              }
            }
          },
          "ip": {
            "version": "1.1.8",
            "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.8.tgz",
            "integrity": "sha512-PuExPYUiu6qMBQb4l06ecm6T6ujzhmh+MeJcW9wa89PoAz5pvd4zPgN5WJV104mb6S2T1AwNIAaB70JNrLQWhg==",
            "dev": true
          },
          "ipaddr.js": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-2.0.1.tgz",
            "integrity": "sha512-1qTgH9NG+IIJ4yfKs2e6Pp1bZg8wbDbKHT21HrLIeYBTRLgMYKnMTPAuI3Lcs61nfx5h1xlXnbJtH1kX5/d/ng==",
            "dev": true
          },
          "is-arguments": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.1.tgz",
            "integrity": "sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==",
            "dev": true,
            "requires": {
              "call-bind": "^1.0.2",
              "has-tostringtag": "^1.0.0"
            }
          },
          "is-arrayish": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
            "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==",
            "dev": true
          },
          "is-binary-path": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
            "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
            "dev": true,
            "requires": {
              "binary-extensions": "^2.0.0"
            }
          },
          "is-core-module": {
            "version": "2.11.0",
            "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.11.0.tgz",
            "integrity": "sha512-RRjxlvLDkD1YJwDbroBHMb+cukurkDWNyHx7D3oNB5x9rb5ogcksMC5wHCadcXoo67gVr/+3GFySh3134zi6rw==",
            "dev": true,
            "requires": {
              "has": "^1.0.3"
            }
          },
          "is-date-object": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
            "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
            "dev": true,
            "requires": {
              "has-tostringtag": "^1.0.0"
            }
          },
          "is-docker": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
            "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
            "dev": true
          },
          "is-extglob": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
            "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
            "dev": true
          },
          "is-fullwidth-code-point": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
            "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
            "dev": true
          },
          "is-glob": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
            "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
            "dev": true,
            "requires": {
              "is-extglob": "^2.1.1"
            }
          },
          "is-interactive": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
            "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
            "dev": true
          },
          "is-lambda": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-lambda/-/is-lambda-1.0.1.tgz",
            "integrity": "sha512-z7CMFGNrENq5iFB9Bqo64Xk6Y9sg+epq1myIcdHaGnbMTYOxvzsEtdYqQUylB7LxfkvgrrjP32T6Ywciio9UIQ==",
            "dev": true
          },
          "is-number": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
            "dev": true
          },
          "is-path-cwd": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
            "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
            "dev": true
          },
          "is-path-inside": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
            "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
            "dev": true
          },
          "is-plain-obj": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-3.0.0.tgz",
            "integrity": "sha512-gwsOE28k+23GP1B6vFl1oVh/WOzmawBrKwo5Ev6wMKzPkaXaCDIQKzLnvsA42DRlbVTWorkgTKIviAKCWkfUwA==",
            "dev": true
          },
          "is-plain-object": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
            "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
            "dev": true,
            "requires": {
              "isobject": "^3.0.1"
            }
          },
          "is-regex": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
            "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
            "dev": true,
            "requires": {
              "call-bind": "^1.0.2",
              "has-tostringtag": "^1.0.0"
            }
          },
          "is-stream": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
            "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==",
            "dev": true
          },
          "is-unicode-supported": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
            "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
            "dev": true
          },
          "is-what": {
            "version": "3.14.1",
            "resolved": "https://registry.npmjs.org/is-what/-/is-what-3.14.1.tgz",
            "integrity": "sha512-sNxgpk9793nzSs7bA6JQJGeIuRBQhAaNGG77kzYQgMkrID+lS6SlK07K5LaptscDlSaIgH+GPFzf+d75FVxozA==",
            "dev": true
          },
          "is-wsl": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
            "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
            "dev": true,
            "requires": {
              "is-docker": "^2.0.0"
            }
          },
          "isarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
            "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
            "dev": true
          },
          "isbinaryfile": {
            "version": "4.0.10",
            "resolved": "https://registry.npmjs.org/isbinaryfile/-/isbinaryfile-4.0.10.tgz",
            "integrity": "sha512-iHrqe5shvBUcFbmZq9zOQHBoeOhZJu6RQGrDpBgenUm/Am+F3JM2MgQj+rK3Z601fzrL5gLZWtAPH2OBaSVcyw==",
            "dev": true
          },
          "isexe": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
            "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
            "dev": true
          },
          "isobject": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
            "integrity": "sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==",
            "dev": true
          },
          "istanbul-lib-coverage": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.2.0.tgz",
            "integrity": "sha512-eOeJ5BHCmHYvQK7xt9GkdHuzuCGS1Y6g9Gvnx3Ym33fz/HpLRYxiS0wHNr+m/MBC8B647Xt608vCDEvhl9c6Mw==",
            "dev": true
          },
          "istanbul-lib-instrument": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-5.2.1.tgz",
            "integrity": "sha512-pzqtp31nLv/XFOzXGuvhCb8qhjmTVo5vjVk19XE4CRlSWz0KoeJ3bw9XsA7nOp9YBf4qHjwBxkDzKcME/J29Yg==",
            "dev": true,
            "requires": {
              "@babel/core": "^7.12.3",
              "@babel/parser": "^7.14.7",
              "@istanbuljs/schema": "^0.1.2",
              "istanbul-lib-coverage": "^3.2.0",
              "semver": "^6.3.0"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "istanbul-lib-report": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
            "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
            "dev": true,
            "requires": {
              "istanbul-lib-coverage": "^3.0.0",
              "make-dir": "^3.0.0",
              "supports-color": "^7.1.0"
            },
            "dependencies": {
              "has-flag": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                "dev": true
              },
              "supports-color": {
                "version": "7.2.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                "dev": true,
                "requires": {
                  "has-flag": "^4.0.0"
                }
              }
            }
          },
          "istanbul-lib-source-maps": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.1.tgz",
            "integrity": "sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==",
            "dev": true,
            "requires": {
              "debug": "^4.1.1",
              "istanbul-lib-coverage": "^3.0.0",
              "source-map": "^0.6.1"
            },
            "dependencies": {
              "source-map": {
                "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                "dev": true
              }
            }
          },
          "istanbul-reports": {
            "version": "3.1.5",
            "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.1.5.tgz",
            "integrity": "sha512-nUsEMa9pBt/NOHqbcbeJEgqIlY/K7rVWUX6Lql2orY5e9roQOthbR3vtY4zzf2orPELg80fnxxk9zUyPlgwD1w==",
            "dev": true,
            "requires": {
              "html-escaper": "^2.0.0",
              "istanbul-lib-report": "^3.0.0"
            }
          },
          "jasmine-core": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/jasmine-core/-/jasmine-core-4.0.1.tgz",
            "integrity": "sha512-w+JDABxQCkxbGGxg+a2hUVZyqUS2JKngvIyLGu/xiw2ZwgsoSB0iiecLQsQORSeaKQ6iGrCyWG86RfNDuoA7Lg==",
            "dev": true
          },
          "jest-worker": {
            "version": "27.5.1",
            "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz",
            "integrity": "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==",
            "dev": true,
            "requires": {
              "@types/node": "*",
              "merge-stream": "^2.0.0",
              "supports-color": "^8.0.0"
            },
            "dependencies": {
              "has-flag": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                "dev": true
              },
              "supports-color": {
                "version": "8.1.1",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
                "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
                "dev": true,
                "requires": {
                  "has-flag": "^4.0.0"
                }
              }
            }
          },
          "js-tokens": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
            "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
            "dev": true
          },
          "js-yaml": {
            "version": "3.14.1",
            "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
            "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
            "dev": true,
            "requires": {
              "argparse": "^1.0.7",
              "esprima": "^4.0.0"
            }
          },
          "jsesc": {
            "version": "2.5.2",
            "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
            "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
            "dev": true
          },
          "json-parse-better-errors": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
            "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
            "dev": true
          },
          "json-parse-even-better-errors": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
            "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
            "dev": true
          },
          "json-schema-traverse": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
            "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
            "dev": true
          },
          "json5": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.1.tgz",
            "integrity": "sha512-1hqLFMSrGHRHxav9q9gNjJ5EXznIxGVO09xQRrwplcS8qs28pZ8s8hupZAmqDwZUmVZ2Qb2jnyPOWcDH8m8dlA==",
            "dev": true
          },
          "jsonc-parser": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/jsonc-parser/-/jsonc-parser-3.0.0.tgz",
            "integrity": "sha512-fQzRfAbIBnR0IQvftw9FJveWiHp72Fg20giDrHz6TdfB12UH/uue0D3hm57UB5KgAVuniLMCaS8P1IMj9NR7cA==",
            "dev": true
          },
          "jsonfile": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
            "integrity": "sha512-m6F1R3z8jjlf2imQHS2Qez5sjKWQzbuuhuJ/FKYFRZvPE3PuHcSMVZzfsLhGVOkfd20obL5SWEBew5ShlquNxg==",
            "dev": true,
            "requires": {
              "graceful-fs": "^4.1.6"
            }
          },
          "jsonparse": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
            "integrity": "sha512-POQXvpdL69+CluYsillJ7SUhKvytYjW9vG/GKpnf+xP8UWgYEM/RaMzHHofbALDiKbbP1W8UEYmgGl39WkPZsg==",
            "dev": true
          },
          "karma": {
            "version": "6.3.20",
            "resolved": "https://registry.npmjs.org/karma/-/karma-6.3.20.tgz",
            "integrity": "sha512-HRNQhMuKOwKpjYlWiJP0DUrJOh+QjaI/DTaD8b9rEm4Il3tJ8MijutVZH4ts10LuUFst/CedwTS6vieCN8yTSw==",
            "dev": true,
            "requires": {
              "@colors/colors": "1.5.0",
              "body-parser": "^1.19.0",
              "braces": "^3.0.2",
              "chokidar": "^3.5.1",
              "connect": "^3.7.0",
              "di": "^0.0.1",
              "dom-serialize": "^2.2.1",
              "glob": "^7.1.7",
              "graceful-fs": "^4.2.6",
              "http-proxy": "^1.18.1",
              "isbinaryfile": "^4.0.8",
              "lodash": "^4.17.21",
              "log4js": "^6.4.1",
              "mime": "^2.5.2",
              "minimatch": "^3.0.4",
              "mkdirp": "^0.5.5",
              "qjobs": "^1.2.0",
              "range-parser": "^1.2.1",
              "rimraf": "^3.0.2",
              "socket.io": "^4.4.1",
              "source-map": "^0.6.1",
              "tmp": "^0.2.1",
              "ua-parser-js": "^0.7.30",
              "yargs": "^16.1.1"
            },
            "dependencies": {
              "cliui": {
                "version": "7.0.4",
                "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
                "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
                "dev": true,
                "requires": {
                  "string-width": "^4.2.0",
                  "strip-ansi": "^6.0.0",
                  "wrap-ansi": "^7.0.0"
                }
              },
              "mime": {
                "version": "2.6.0",
                "resolved": "https://registry.npmjs.org/mime/-/mime-2.6.0.tgz",
                "integrity": "sha512-USPkMeET31rOMiarsBNIHZKLGgvKc/LrjofAnBlOttf5ajRvqiRA8QsenbcooctK6d6Ts6aqZXBA+XbkKthiQg==",
                "dev": true
              },
              "mkdirp": {
                "version": "0.5.6",
                "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
                "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
                "dev": true,
                "requires": {
                  "minimist": "^1.2.6"
                }
              },
              "source-map": {
                "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                "dev": true
              },
              "tmp": {
                "version": "0.2.1",
                "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.2.1.tgz",
                "integrity": "sha512-76SUhtfqR2Ijn+xllcI5P1oyannHNHByD80W1q447gU3mp9G9PSpGdWmjUOHRDPiHYacIk66W7ubDTuPF3BEtQ==",
                "dev": true,
                "requires": {
                  "rimraf": "^3.0.0"
                }
              },
              "yargs": {
                "version": "16.2.0",
                "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
                "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
                "dev": true,
                "requires": {
                  "cliui": "^7.0.2",
                  "escalade": "^3.1.1",
                  "get-caller-file": "^2.0.5",
                  "require-directory": "^2.1.1",
                  "string-width": "^4.2.0",
                  "y18n": "^5.0.5",
                  "yargs-parser": "^20.2.2"
                }
              },
              "yargs-parser": {
                "version": "20.2.9",
                "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
                "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
                "dev": true
              }
            }
          },
          "karma-chrome-launcher": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/karma-chrome-launcher/-/karma-chrome-launcher-3.1.1.tgz",
            "integrity": "sha512-hsIglcq1vtboGPAN+DGCISCFOxW+ZVnIqhDQcCMqqCp+4dmJ0Qpq5QAjkbA0X2L9Mi6OBkHi2Srrbmm7pUKkzQ==",
            "dev": true,
            "requires": {
              "which": "^1.2.1"
            },
            "dependencies": {
              "which": {
                "version": "1.3.1",
                "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
                "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
                "dev": true,
                "requires": {
                  "isexe": "^2.0.0"
                }
              }
            }
          },
          "karma-coverage": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/karma-coverage/-/karma-coverage-2.1.1.tgz",
            "integrity": "sha512-oxeOSBVK/jdZsiX03LhHQkO4eISSQb5GbHi6Nsw3Mw7G4u6yUgacBAftnO7q+emPBLMsrNbz1pGIrj+Jb3z17A==",
            "dev": true,
            "requires": {
              "istanbul-lib-coverage": "^3.2.0",
              "istanbul-lib-instrument": "^4.0.3",
              "istanbul-lib-report": "^3.0.0",
              "istanbul-lib-source-maps": "^4.0.1",
              "istanbul-reports": "^3.0.5",
              "minimatch": "^3.0.4"
            },
            "dependencies": {
              "istanbul-lib-instrument": {
                "version": "4.0.3",
                "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
                "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
                "dev": true,
                "requires": {
                  "@babel/core": "^7.7.5",
                  "@istanbuljs/schema": "^0.1.2",
                  "istanbul-lib-coverage": "^3.0.0",
                  "semver": "^6.3.0"
                }
              },
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "karma-jasmine": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/karma-jasmine/-/karma-jasmine-4.0.2.tgz",
            "integrity": "sha512-ggi84RMNQffSDmWSyyt4zxzh2CQGwsxvYYsprgyR1j8ikzIduEdOlcLvXjZGwXG/0j41KUXOWsUCBfbEHPWP9g==",
            "dev": true,
            "requires": {
              "jasmine-core": "^3.6.0"
            },
            "dependencies": {
              "jasmine-core": {
                "version": "3.99.1",
                "resolved": "https://registry.npmjs.org/jasmine-core/-/jasmine-core-3.99.1.tgz",
                "integrity": "sha512-Hu1dmuoGcZ7AfyynN3LsfruwMbxMALMka+YtZeGoLuDEySVmVAPaonkNoBRIw/ectu8b9tVQCJNgp4a4knp+tg==",
                "dev": true
              }
            }
          },
          "karma-jasmine-html-reporter": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/karma-jasmine-html-reporter/-/karma-jasmine-html-reporter-1.7.0.tgz",
            "integrity": "sha512-pzum1TL7j90DTE86eFt48/s12hqwQuiD+e5aXx2Dc9wDEn2LfGq6RoAxEZZjFiN0RDSCOnosEKRZWxbQ+iMpQQ==",
            "dev": true
          },
          "karma-source-map-support": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/karma-source-map-support/-/karma-source-map-support-1.4.0.tgz",
            "integrity": "sha512-RsBECncGO17KAoJCYXjv+ckIz+Ii9NCi+9enk+rq6XC81ezYkb4/RHE6CTXdA7IOJqoF3wcaLfVG0CPmE5ca6A==",
            "dev": true,
            "requires": {
              "source-map-support": "^0.5.5"
            }
          },
          "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
            "dev": true
          },
          "klona": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/klona/-/klona-2.0.5.tgz",
            "integrity": "sha512-pJiBpiXMbt7dkzXe8Ghj/u4FfXOOa98fPW+bihOJ4SjnoijweJrNThJfd3ifXpXhREjpoF2mZVH1GfS9LV3kHQ==",
            "dev": true
          },
          "less": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/less/-/less-4.1.2.tgz",
            "integrity": "sha512-EoQp/Et7OSOVu0aJknJOtlXZsnr8XE8KwuzTHOLeVSEx8pVWUICc8Q0VYRHgzyjX78nMEyC/oztWFbgyhtNfDA==",
            "dev": true,
            "requires": {
              "copy-anything": "^2.0.1",
              "errno": "^0.1.1",
              "graceful-fs": "^4.1.2",
              "image-size": "~0.5.0",
              "make-dir": "^2.1.0",
              "mime": "^1.4.1",
              "needle": "^2.5.2",
              "parse-node-version": "^1.0.1",
              "source-map": "~0.6.0",
              "tslib": "^2.3.0"
            },
            "dependencies": {
              "make-dir": {
                "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
                "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
                "dev": true,
                "optional": true,
                "requires": {
                  "pify": "^4.0.1",
                  "semver": "^5.6.0"
                }
              },
              "semver": {
                "version": "5.7.1",
                "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
                "dev": true,
                "optional": true
              },
              "source-map": {
                "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                "dev": true,
                "optional": true
              }
            }
          },
          "less-loader": {
            "version": "10.2.0",
            "resolved": "https://registry.npmjs.org/less-loader/-/less-loader-10.2.0.tgz",
            "integrity": "sha512-AV5KHWvCezW27GT90WATaDnfXBv99llDbtaj4bshq6DvAihMdNjaPDcUMa6EXKLRF+P2opFenJp89BXg91XLYg==",
            "dev": true,
            "requires": {
              "klona": "^2.0.4"
            }
          },
          "license-webpack-plugin": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/license-webpack-plugin/-/license-webpack-plugin-4.0.2.tgz",
            "integrity": "sha512-771TFWFD70G1wLTC4oU2Cw4qvtmNrIw+wRvBtn+okgHl7slJVi7zfNcdmqDL72BojM30VNJ2UHylr1o77U37Jw==",
            "dev": true,
            "requires": {
              "webpack-sources": "^3.0.0"
            }
          },
          "lines-and-columns": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
            "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
            "dev": true
          },
          "loader-runner": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.3.0.tgz",
            "integrity": "sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg==",
            "dev": true
          },
          "loader-utils": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-3.2.0.tgz",
            "integrity": "sha512-HVl9ZqccQihZ7JM85dco1MvO9G+ONvxoGa9rkhzFsneGLKSUg1gJf9bWzhRhcvm2qChhWpebQhP44qxjKIUCaQ==",
            "dev": true
          },
          "locate-path": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
            "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
            "dev": true,
            "requires": {
              "p-locate": "^4.1.0"
            }
          },
          "lodash": {
            "version": "4.17.21",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
            "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
            "dev": true
          },
          "lodash.debounce": {
            "version": "4.0.8",
            "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
            "integrity": "sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==",
            "dev": true
          },
          "log-symbols": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
            "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
            "dev": true,
            "requires": {
              "chalk": "^4.1.0",
              "is-unicode-supported": "^0.1.0"
            },
            "dependencies": {
              "ansi-styles": {
                "version": "4.3.0",
                "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                "dev": true,
                "requires": {
                  "color-convert": "^2.0.1"
                }
              },
              "chalk": {
                "version": "4.1.2",
                "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
                "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
                "dev": true,
                "requires": {
                  "ansi-styles": "^4.1.0",
                  "supports-color": "^7.1.0"
                }
              },
              "color-convert": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                "dev": true,
                "requires": {
                  "color-name": "~1.1.4"
                }
              },
              "color-name": {
                "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                "dev": true
              },
              "has-flag": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                "dev": true
              },
              "supports-color": {
                "version": "7.2.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                "dev": true,
                "requires": {
                  "has-flag": "^4.0.0"
                }
              }
            }
          },
          "log4js": {
            "version": "6.7.0",
            "resolved": "https://registry.npmjs.org/log4js/-/log4js-6.7.0.tgz",
            "integrity": "sha512-KA0W9ffgNBLDj6fZCq/lRbgR6ABAodRIDHrZnS48vOtfKa4PzWImb0Md1lmGCdO3n3sbCm/n1/WmrNlZ8kCI3Q==",
            "dev": true,
            "requires": {
              "date-format": "^4.0.14",
              "debug": "^4.3.4",
              "flatted": "^3.2.7",
              "rfdc": "^1.3.0",
              "streamroller": "^3.1.3"
            }
          },
          "lru-cache": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
            "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
            "dev": true,
            "requires": {
              "yallist": "^4.0.0"
            }
          },
          "magic-string": {
            "version": "0.25.7",
            "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.25.7.tgz",
            "integrity": "sha512-4CrMT5DOHTDk4HYDlzmwu4FVCcIYI8gauveasrdCu2IKIFOJ3f0v/8MDGJCDL9oD2ppz/Av1b0Nj345H9M+XIA==",
            "dev": true,
            "requires": {
              "sourcemap-codec": "^1.4.4"
            }
          },
          "make-dir": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
            "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
            "dev": true,
            "requires": {
              "semver": "^6.0.0"
            },
            "dependencies": {
              "semver": {
                "version": "6.3.0",
                "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                "dev": true
              }
            }
          },
          "make-fetch-happen": {
            "version": "9.1.0",
            "resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-9.1.0.tgz",
            "integrity": "sha512-+zopwDy7DNknmwPQplem5lAZX/eCOzSvSNNcSKm5eVwTkOBzoktEfXsa9L23J/GIRhxRsaxzkPEhrJEpE2F4Gg==",
            "dev": true,
            "requires": {
              "agentkeepalive": "^4.1.3",
              "cacache": "^15.2.0",
              "http-cache-semantics": "^4.1.0",
              "http-proxy-agent": "^4.0.1",
              "https-proxy-agent": "^5.0.0",
              "is-lambda": "^1.0.1",
              "lru-cache": "^6.0.0",
              "minipass": "^3.1.3",
              "minipass-collect": "^1.0.2",
              "minipass-fetch": "^1.3.2",
              "minipass-flush": "^1.0.5",
              "minipass-pipeline": "^1.2.4",
              "negotiator": "^0.6.2",
              "promise-retry": "^2.0.1",
              "socks-proxy-agent": "^6.0.0",
              "ssri": "^8.0.0"
            }
          },
          "media-typer": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
            "dev": true
          },
          "memfs": {
            "version": "3.4.10",
            "resolved": "https://registry.npmjs.org/memfs/-/memfs-3.4.10.tgz",
            "integrity": "sha512-0bCUP+L79P4am30yP1msPzApwuMQG23TjwlwdHeEV5MxioDR1a0AgB0T9FfggU52eJuDCq8WVwb5ekznFyWiTQ==",
            "dev": true,
            "requires": {
              "fs-monkey": "^1.0.3"
            }
          },
          "merge-descriptors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
            "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w==",
            "dev": true
          },
          "merge-stream": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
            "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
            "dev": true
          },
          "merge2": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
            "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
            "dev": true
          },
          "methods": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
            "dev": true
          },
          "micromatch": {
            "version": "4.0.5",
            "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.5.tgz",
            "integrity": "sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==",
            "dev": true,
            "requires": {
              "braces": "^3.0.2",
              "picomatch": "^2.3.1"
            }
          },
          "mime": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
            "dev": true
          },
          "mime-db": {
            "version": "1.52.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
            "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
            "dev": true
          },
          "mime-types": {
            "version": "2.1.35",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
            "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
            "dev": true,
            "requires": {
              "mime-db": "1.52.0"
            }
          },
          "mimic-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
            "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
            "dev": true
          },
          "mini-css-extract-plugin": {
            "version": "2.5.3",
            "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-2.5.3.tgz",
            "integrity": "sha512-YseMB8cs8U/KCaAGQoqYmfUuhhGW0a9p9XvWXrxVOkE3/IiISTLw4ALNt7JR5B2eYauFM+PQGSbXMDmVbR7Tfw==",
            "dev": true,
            "requires": {
              "schema-utils": "^4.0.0"
            },
            "dependencies": {
              "ajv-keywords": {
                "version": "5.1.0",
                "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
                "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
                "dev": true,
                "requires": {
                  "fast-deep-equal": "^3.1.3"
                }
              },
              "schema-utils": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
                "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
                "dev": true,
                "requires": {
                  "@types/json-schema": "^7.0.9",
                  "ajv": "^8.8.0",
                  "ajv-formats": "^2.1.1",
                  "ajv-keywords": "^5.0.0"
                }
              }
            }
          },
          "minimalistic-assert": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
            "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
            "dev": true
          },
          "minimatch": {
            "version": "3.0.5",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.5.tgz",
            "integrity": "sha512-tUpxzX0VAzJHjLu0xUfFv1gwVp9ba3IOuRAVH2EGuRW8a5emA2FlACLqiT/lDVtS1W+TGNwqz3sWaNyLgDJWuw==",
            "dev": true,
            "requires": {
              "brace-expansion": "^1.1.7"
            }
          },
          "minimist": {
            "version": "1.2.7",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.7.tgz",
            "integrity": "sha512-bzfL1YUZsP41gmu/qjrEk0Q6i2ix/cVeAhbCbqH9u3zYutS1cLg00qhrD0M2MVdCcx4Sc0UpP2eBWo9rotpq6g==",
            "dev": true
          },
          "minipass": {
            "version": "3.3.4",
            "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.4.tgz",
            "integrity": "sha512-I9WPbWHCGu8W+6k1ZiGpPu0GkoKBeorkfKNuAFBNS1HNFJvke82sxvI5bzcCNpWPorkOO5QQ+zomzzwRxejXiw==",
            "dev": true,
            "requires": {
              "yallist": "^4.0.0"
            }
          },
          "minipass-collect": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
            "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
            "dev": true,
            "requires": {
              "minipass": "^3.0.0"
            }
          },
          "minipass-fetch": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-1.4.1.tgz",
            "integrity": "sha512-CGH1eblLq26Y15+Azk7ey4xh0J/XfJfrCox5LDJiKqI2Q2iwOLOKrlmIaODiSQS8d18jalF6y2K2ePUm0CmShw==",
            "dev": true,
            "requires": {
              "encoding": "^0.1.12",
              "minipass": "^3.1.0",
              "minipass-sized": "^1.0.3",
              "minizlib": "^2.0.0"
            }
          },
          "minipass-flush": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
            "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
            "dev": true,
            "requires": {
              "minipass": "^3.0.0"
            }
          },
          "minipass-json-stream": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minipass-json-stream/-/minipass-json-stream-1.0.1.tgz",
            "integrity": "sha512-ODqY18UZt/I8k+b7rl2AENgbWE8IDYam+undIJONvigAz8KR5GWblsFTEfQs0WODsjbSXWlm+JHEv8Gr6Tfdbg==",
            "dev": true,
            "requires": {
              "jsonparse": "^1.3.1",
              "minipass": "^3.0.0"
            }
          },
          "minipass-pipeline": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
            "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
            "dev": true,
            "requires": {
              "minipass": "^3.0.0"
            }
          },
          "minipass-sized": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/minipass-sized/-/minipass-sized-1.0.3.tgz",
            "integrity": "sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==",
            "dev": true,
            "requires": {
              "minipass": "^3.0.0"
            }
          },
          "minizlib": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
            "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
            "dev": true,
            "requires": {
              "minipass": "^3.0.0",
              "yallist": "^4.0.0"
            }
          },
          "mkdirp": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
            "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
            "dev": true
          },
          "ms": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
            "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
            "dev": true
          },
          "multicast-dns": {
            "version": "6.2.3",
            "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
            "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
            "dev": true,
            "requires": {
              "dns-packet": "^1.3.1",
              "thunky": "^1.0.2"
            }
          },
          "multicast-dns-service-types": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
            "integrity": "sha512-cnAsSVxIDsYt0v7HmC0hWZFwwXSh+E6PgCrREDuN/EsjgLwA5XRmlMHhSiDPrt6HxY1gTivEa/Zh7GtODoLevQ==",
            "dev": true
          },
          "mute-stream": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
            "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==",
            "dev": true
          },
          "nanoid": {
            "version": "3.3.4",
            "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.4.tgz",
            "integrity": "sha512-MqBkQh/OHTS2egovRtLk45wEyNXwF+cokD+1YPf9u5VfJiRdAiRwB2froX5Co9Rh20xs4siNPm8naNotSD6RBw==",
            "dev": true
          },
          "needle": {
            "version": "2.9.1",
            "resolved": "https://registry.npmjs.org/needle/-/needle-2.9.1.tgz",
            "integrity": "sha512-6R9fqJ5Zcmf+uYaFgdIHmLwNldn5HbK8L5ybn7Uz+ylX/rnOsSp1AHcvQSrCaFN+qNM1wpymHqD7mVasEOlHGQ==",
            "dev": true,
            "optional": true,
            "requires": {
              "debug": "^3.2.6",
              "iconv-lite": "^0.4.4",
              "sax": "^1.2.4"
            },
            "dependencies": {
              "debug": {
                "version": "3.2.7",
                "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
                "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
                "dev": true,
                "optional": true,
                "requires": {
                  "ms": "^2.1.1"
                }
              }
            }
          },
          "negotiator": {
            "version": "0.6.3",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
            "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
            "dev": true
          },
          "neo-async": {
            "version": "2.6.2",
            "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
            "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
            "dev": true
          },
          "nice-napi": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/nice-napi/-/nice-napi-1.0.2.tgz",
            "integrity": "sha512-px/KnJAJZf5RuBGcfD+Sp2pAKq0ytz8j+1NehvgIGFkvtvFrDM3T8E4x/JJODXK9WZow8RRGrbA9QQ3hs+pDhA==",
            "dev": true,
            "optional": true,
            "requires": {
              "node-addon-api": "^3.0.0",
              "node-gyp-build": "^4.2.2"
            }
          },
          "node-addon-api": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.1.tgz",
            "integrity": "sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A==",
            "dev": true,
            "optional": true
          },
          "node-forge": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-1.3.1.tgz",
            "integrity": "sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA==",
            "dev": true
          },
          "node-gyp": {
            "version": "8.4.1",
            "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-8.4.1.tgz",
            "integrity": "sha512-olTJRgUtAb/hOXG0E93wZDs5YiJlgbXxTwQAFHyNlRsXQnYzUaF2aGgujZbw+hR8aF4ZG/rST57bWMWD16jr9w==",
            "dev": true,
            "requires": {
              "env-paths": "^2.2.0",
              "glob": "^7.1.4",
              "graceful-fs": "^4.2.6",
              "make-fetch-happen": "^9.1.0",
              "nopt": "^5.0.0",
              "npmlog": "^6.0.0",
              "rimraf": "^3.0.2",
              "semver": "^7.3.5",
              "tar": "^6.1.2",
              "which": "^2.0.2"
            }
          },
          "node-gyp-build": {
            "version": "4.5.0",
            "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.5.0.tgz",
            "integrity": "sha512-2iGbaQBV+ITgCz76ZEjmhUKAKVf7xfY1sRl4UiKQspfZMH2h06SyhNsnSVy50cwkFQDGLyif6m/6uFXHkOZ6rg==",
            "dev": true,
            "optional": true
          },
          "node-releases": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.6.tgz",
            "integrity": "sha512-PiVXnNuFm5+iYkLBNeq5211hvO38y63T0i2KKh2KnUs3RpzJ+JtODFjkD8yjLwnDkTYF1eKXheUwdssR+NRZdg==",
            "dev": true
          },
          "nopt": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
            "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
            "dev": true,
            "requires": {
              "abbrev": "1"
            }
          },
          "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
            "dev": true
          },
          "normalize-range": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
            "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
            "dev": true
          },
          "npm-bundled": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.2.tgz",
            "integrity": "sha512-x5DHup0SuyQcmL3s7Rx/YQ8sbw/Hzg0rj48eN0dV7hf5cmQq5PXIeioroH3raV1QC1yh3uTYuMThvEQF3iKgGQ==",
            "dev": true,
            "requires": {
              "npm-normalize-package-bin": "^1.0.1"
            }
          },
          "npm-install-checks": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/npm-install-checks/-/npm-install-checks-4.0.0.tgz",
            "integrity": "sha512-09OmyDkNLYwqKPOnbI8exiOZU2GVVmQp7tgez2BPi5OZC8M82elDAps7sxC4l//uSUtotWqoEIDwjRvWH4qz8w==",
            "dev": true,
            "requires": {
              "semver": "^7.1.1"
            }
          },
          "npm-normalize-package-bin": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
            "integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA==",
            "dev": true
          },
          "npm-package-arg": {
            "version": "8.1.5",
            "resolved": "https://registry.npmjs.org/npm-package-arg/-/npm-package-arg-8.1.5.tgz",
            "integrity": "sha512-LhgZrg0n0VgvzVdSm1oiZworPbTxYHUJCgtsJW8mGvlDpxTM1vSJc3m5QZeUkhAHIzbz3VCHd/R4osi1L1Tg/Q==",
            "dev": true,
            "requires": {
              "hosted-git-info": "^4.0.1",
              "semver": "^7.3.4",
              "validate-npm-package-name": "^3.0.0"
            }
          },
          "npm-packlist": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-3.0.0.tgz",
            "integrity": "sha512-L/cbzmutAwII5glUcf2DBRNY/d0TFd4e/FnaZigJV6JD85RHZXJFGwCndjMWiiViiWSsWt3tiOLpI3ByTnIdFQ==",
            "dev": true,
            "requires": {
              "glob": "^7.1.6",
              "ignore-walk": "^4.0.1",
              "npm-bundled": "^1.1.1",
              "npm-normalize-package-bin": "^1.0.1"
            }
          },
          "npm-pick-manifest": {
            "version": "6.1.1",
            "resolved": "https://registry.npmjs.org/npm-pick-manifest/-/npm-pick-manifest-6.1.1.tgz",
            "integrity": "sha512-dBsdBtORT84S8V8UTad1WlUyKIY9iMsAmqxHbLdeEeBNMLQDlDWWra3wYUx9EBEIiG/YwAy0XyNHDd2goAsfuA==",
            "dev": true,
            "requires": {
              "npm-install-checks": "^4.0.0",
              "npm-normalize-package-bin": "^1.0.1",
              "npm-package-arg": "^8.1.2",
              "semver": "^7.3.4"
            }
          },
          "npm-registry-fetch": {
            "version": "12.0.2",
            "resolved": "https://registry.npmjs.org/npm-registry-fetch/-/npm-registry-fetch-12.0.2.tgz",
            "integrity": "sha512-Df5QT3RaJnXYuOwtXBXS9BWs+tHH2olvkCLh6jcR/b/u3DvPMlp3J0TvvYwplPKxHMOwfg287PYih9QqaVFoKA==",
            "dev": true,
            "requires": {
              "make-fetch-happen": "^10.0.1",
              "minipass": "^3.1.6",
              "minipass-fetch": "^1.4.1",
              "minipass-json-stream": "^1.0.1",
              "minizlib": "^2.1.2",
              "npm-package-arg": "^8.1.5"
            },
            "dependencies": {
              "@npmcli/fs": {
                "version": "2.1.2",
                "resolved": "https://registry.npmjs.org/@npmcli/fs/-/fs-2.1.2.tgz",
                "integrity": "sha512-yOJKRvohFOaLqipNtwYB9WugyZKhC/DZC4VYPmpaCzDBrA8YpK3qHZ8/HGscMnE4GqbkLNuVcCnxkeQEdGt6LQ==",
                "dev": true,
                "requires": {
                  "@gar/promisify": "^1.1.3",
                  "semver": "^7.3.5"
                }
              },
              "@npmcli/move-file": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-2.0.1.tgz",
                "integrity": "sha512-mJd2Z5TjYWq/ttPLLGqArdtnC74J6bOzg4rMDnN+p1xTacZ2yPRCk2y0oSWQtygLR9YVQXgOcONrwtnk3JupxQ==",
                "dev": true,
                "requires": {
                  "mkdirp": "^1.0.4",
                  "rimraf": "^3.0.2"
                }
              },
              "@tootallnate/once": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-2.0.0.tgz",
                "integrity": "sha512-XCuKFP5PS55gnMVu3dty8KPatLqUoy/ZYzDzAGCQ8JNFCkLXzmI7vNHCR+XpbZaMWQK/vQubr7PkYq8g470J/A==",
                "dev": true
              },
              "brace-expansion": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
                "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
                "dev": true,
                "requires": {
                  "balanced-match": "^1.0.0"
                }
              },
              "cacache": {
                "version": "16.1.3",
                "resolved": "https://registry.npmjs.org/cacache/-/cacache-16.1.3.tgz",
                "integrity": "sha512-/+Emcj9DAXxX4cwlLmRI9c166RuL3w30zp4R7Joiv2cQTtTtA+jeuCAjH3ZlGnYS3tKENSrKhAzVVP9GVyzeYQ==",
                "dev": true,
                "requires": {
                  "@npmcli/fs": "^2.1.0",
                  "@npmcli/move-file": "^2.0.0",
                  "chownr": "^2.0.0",
                  "fs-minipass": "^2.1.0",
                  "glob": "^8.0.1",
                  "infer-owner": "^1.0.4",
                  "lru-cache": "^7.7.1",
                  "minipass": "^3.1.6",
                  "minipass-collect": "^1.0.2",
                  "minipass-flush": "^1.0.5",
                  "minipass-pipeline": "^1.2.4",
                  "mkdirp": "^1.0.4",
                  "p-map": "^4.0.0",
                  "promise-inflight": "^1.0.1",
                  "rimraf": "^3.0.2",
                  "ssri": "^9.0.0",
                  "tar": "^6.1.11",
                  "unique-filename": "^2.0.0"
                }
              },
              "glob": {
                "version": "8.0.3",
                "resolved": "https://registry.npmjs.org/glob/-/glob-8.0.3.tgz",
                "integrity": "sha512-ull455NHSHI/Y1FqGaaYFaLGkNMMJbavMrEGFXG/PGrg6y7sutWHUHrz6gy6WEBH6akM1M414dWKCNs+IhKdiQ==",
                "dev": true,
                "requires": {
                  "fs.realpath": "^1.0.0",
                  "inflight": "^1.0.4",
                  "inherits": "2",
                  "minimatch": "^5.0.1",
                  "once": "^1.3.0"
                }
              },
              "http-proxy-agent": {
                "version": "5.0.0",
                "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-5.0.0.tgz",
                "integrity": "sha512-n2hY8YdoRE1i7r6M0w9DIw5GgZN0G25P8zLCRQ8rjXtTU3vsNFBI/vWK/UIeE6g5MUUz6avwAPXmL6Fy9D/90w==",
                "dev": true,
                "requires": {
                  "@tootallnate/once": "2",
                  "agent-base": "6",
                  "debug": "4"
                }
              },
              "lru-cache": {
                "version": "7.14.1",
                "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-7.14.1.tgz",
                "integrity": "sha512-ysxwsnTKdAx96aTRdhDOCQfDgbHnt8SK0KY8SEjO0wHinhWOFTESbjVCMPbU1uGXg/ch4lifqx0wfjOawU2+WA==",
                "dev": true
              },
              "make-fetch-happen": {
                "version": "10.2.1",
                "resolved": "https://registry.npmjs.org/make-fetch-happen/-/make-fetch-happen-10.2.1.tgz",
                "integrity": "sha512-NgOPbRiaQM10DYXvN3/hhGVI2M5MtITFryzBGxHM5p4wnFxsVCbxkrBrDsk+EZ5OB4jEOT7AjDxtdF+KVEFT7w==",
                "dev": true,
                "requires": {
                  "agentkeepalive": "^4.2.1",
                  "cacache": "^16.1.0",
                  "http-cache-semantics": "^4.1.0",
                  "http-proxy-agent": "^5.0.0",
                  "https-proxy-agent": "^5.0.0",
                  "is-lambda": "^1.0.1",
                  "lru-cache": "^7.7.1",
                  "minipass": "^3.1.6",
                  "minipass-collect": "^1.0.2",
                  "minipass-fetch": "^2.0.3",
                  "minipass-flush": "^1.0.5",
                  "minipass-pipeline": "^1.2.4",
                  "negotiator": "^0.6.3",
                  "promise-retry": "^2.0.1",
                  "socks-proxy-agent": "^7.0.0",
                  "ssri": "^9.0.0"
                },
                "dependencies": {
                  "minipass-fetch": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/minipass-fetch/-/minipass-fetch-2.1.2.tgz",
                    "integrity": "sha512-LT49Zi2/WMROHYoqGgdlQIZh8mLPZmOrN2NdJjMXxYe4nkN6FUyuPuOAOedNJDrx0IRGg9+4guZewtp8hE6TxA==",
                    "dev": true,
                    "requires": {
                      "encoding": "^0.1.13",
                      "minipass": "^3.1.6",
                      "minipass-sized": "^1.0.3",
                      "minizlib": "^2.1.2"
                    }
                  }
                }
              },
              "minimatch": {
                "version": "5.1.0",
                "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.0.tgz",
                "integrity": "sha512-9TPBGGak4nHfGZsPBohm9AWg6NoT7QTCehS3BIJABslyZbzxfV78QM2Y6+i741OPZIafFAaiiEMh5OyIrJPgtg==",
                "dev": true,
                "requires": {
                  "brace-expansion": "^2.0.1"
                }
              },
              "socks-proxy-agent": {
                "version": "7.0.0",
                "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-7.0.0.tgz",
                "integrity": "sha512-Fgl0YPZ902wEsAyiQ+idGd1A7rSFx/ayC1CQVMw5P+EQx2V0SgpGtf6OKFhVjPflPUl9YMmEOnmfjCdMUsygww==",
                "dev": true,
                "requires": {
                  "agent-base": "^6.0.2",
                  "debug": "^4.3.3",
                  "socks": "^2.6.2"
                }
              },
              "ssri": {
                "version": "9.0.1",
                "resolved": "https://registry.npmjs.org/ssri/-/ssri-9.0.1.tgz",
                "integrity": "sha512-o57Wcn66jMQvfHG1FlYbWeZWW/dHZhJXjpIcTfXldXEk5nz5lStPo3mK0OJQfGR3RbZUlbISexbljkJzuEj/8Q==",
                "dev": true,
                "requires": {
                  "minipass": "^3.1.1"
                }
              },
              "unique-filename": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-2.0.1.tgz",
                "integrity": "sha512-ODWHtkkdx3IAR+veKxFV+VBkUMcN+FaqzUUd7IZzt+0zhDZFPFxhlqwPF3YQvMHx1TD0tdgYl+kuPnJ8E6ql7A==",
                "dev": true,
                "requires": {
                  "unique-slug": "^3.0.0"
                }
              },
              "unique-slug": {
                "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-3.0.0.tgz",
                "integrity": "sha512-8EyMynh679x/0gqE9fT9oilG+qEt+ibFyqjuVTsZn1+CMxH+XLlpvr2UZx4nVcCwTpx81nICr2JQFkM+HPLq4w==",
                "dev": true,
                "requires": {
                  "imurmurhash": "^0.1.4"
                }
              }
            }
          },
          "npm-run-path": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
            "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
            "dev": true,
            "requires": {
              "path-key": "^3.0.0"
            }
          },
          "npmlog": {
            "version": "6.0.2",
            "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-6.0.2.tgz",
            "integrity": "sha512-/vBvz5Jfr9dT/aFWd0FIRf+T/Q2WBsLENygUaFUqstqsycmZAP/t5BvFJTK0viFmSUxiUKTUplWy5vt+rvKIxg==",
            "dev": true,
            "requires": {
              "are-we-there-yet": "^3.0.0",
              "console-control-strings": "^1.1.0",
              "gauge": "^4.0.3",
              "set-blocking": "^2.0.0"
            }
          },
          "nth-check": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-2.1.1.tgz",
            "integrity": "sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==",
            "dev": true,
            "requires": {
              "boolbase": "^1.0.0"
            }
          },
          "object-assign": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
            "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
            "dev": true
          },
          "object-inspect": {
            "version": "1.12.2",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.2.tgz",
            "integrity": "sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ==",
            "dev": true
          },
          "object-is": {
            "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.5.tgz",
            "integrity": "sha512-3cyDsyHgtmi7I7DfSSI2LDp6SK2lwvtbg0p0R1e0RvTqF5ceGx+K2dfSjm1bKDMVCFEDAQvy+o8c6a7VujOddw==",
            "dev": true,
            "requires": {
              "call-bind": "^1.0.2",
              "define-properties": "^1.1.3"
            }
          },
          "object-keys": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
            "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
            "dev": true
          },
          "obuf": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
            "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==",
            "dev": true
          },
          "on-finished": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
            "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
            "dev": true,
            "requires": {
              "ee-first": "1.1.1"
            }
          },
          "on-headers": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
            "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",
            "dev": true
          },
          "once": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
            "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
            "dev": true,
            "requires": {
              "wrappy": "1"
            }
          },
          "onetime": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
            "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
            "dev": true,
            "requires": {
              "mimic-fn": "^2.1.0"
            }
          },
          "open": {
            "version": "8.4.0",
            "resolved": "https://registry.npmjs.org/open/-/open-8.4.0.tgz",
            "integrity": "sha512-XgFPPM+B28FtCCgSb9I+s9szOC1vZRSwgWsRUA5ylIxRTgKozqjOCrVOqGsYABPYK5qnfqClxZTFBa8PKt2v6Q==",
            "dev": true,
            "requires": {
              "define-lazy-prop": "^2.0.0",
              "is-docker": "^2.1.1",
              "is-wsl": "^2.2.0"
            }
          },
          "ora": {
            "version": "5.4.1",
            "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.1.tgz",
            "integrity": "sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==",
            "dev": true,
            "requires": {
              "bl": "^4.1.0",
              "chalk": "^4.1.0",
              "cli-cursor": "^3.1.0",
              "cli-spinners": "^2.5.0",
              "is-interactive": "^1.0.0",
              "is-unicode-supported": "^0.1.0",
              "log-symbols": "^4.1.0",
              "strip-ansi": "^6.0.0",
              "wcwidth": "^1.0.1"
            },
            "dependencies": {
              "ansi-styles": {
                "version": "4.3.0",
                "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                "dev": true,
                "requires": {
                  "color-convert": "^2.0.1"
                }
              },
              "chalk": {
                "version": "4.1.2",
                "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
                "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
                "dev": true,
                "requires": {
                  "ansi-styles": "^4.1.0",
                  "supports-color": "^7.1.0"
                }
              },
              "color-convert": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                "dev": true,
                "requires": {
                  "color-name": "~1.1.4"
                }
              },
              "color-name": {
                "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                "dev": true
              },
              "has-flag": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                "dev": true
              },
              "supports-color": {
                "version": "7.2.0",
                "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
                "dev": true,
                "requires": {
                  "has-flag": "^4.0.0"
                }
              }
            }
          },
          "os-tmpdir": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
            "integrity": "sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==",
            "dev": true
          },
          "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "dev": true,
            "requires": {
              "p-try": "^2.0.0"
            }
          },
          "p-locate": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
            "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
            "dev": true,
            "requires": {
              "p-limit": "^2.2.0"
            }
          },
          "p-map": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
            "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
            "dev": true,
            "requires": {
              "aggregate-error": "^3.0.0"
            }
          },
          "p-retry": {
            "version": "4.6.2",
            "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-4.6.2.tgz",
            "integrity": "sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==",
            "dev": true,
            "requires": {
              "@types/retry": "0.12.0",
              "retry": "^0.13.1"
            }
          },
          "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
            "dev": true
          },
          "pacote": {
            "version": "12.0.3",
            "resolved": "https://registry.npmjs.org/pacote/-/pacote-12.0.3.tgz",
            "integrity": "sha512-CdYEl03JDrRO3x18uHjBYA9TyoW8gy+ThVcypcDkxPtKlw76e4ejhYB6i9lJ+/cebbjpqPW/CijjqxwDTts8Ow==",
            "dev": true,
            "requires": {
              "@npmcli/git": "^2.1.0",
              "@npmcli/installed-package-contents": "^1.0.6",
              "@npmcli/promise-spawn": "^1.2.0",
              "@npmcli/run-script": "^2.0.0",
              "cacache": "^15.0.5",
              "chownr": "^2.0.0",
              "fs-minipass": "^2.1.0",
              "infer-owner": "^1.0.4",
              "minipass": "^3.1.3",
              "mkdirp": "^1.0.3",
              "npm-package-arg": "^8.0.1",
              "npm-packlist": "^3.0.0",
              "npm-pick-manifest": "^6.0.0",
              "npm-registry-fetch": "^12.0.0",
              "promise-retry": "^2.0.1",
              "read-package-json-fast": "^2.0.1",
              "rimraf": "^3.0.2",
              "ssri": "^8.0.1",
              "tar": "^6.1.0"
            }
          },
          "pako": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
            "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
            "dev": true
          },
          "parent-module": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
            "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
            "dev": true,
            "requires": {
              "callsites": "^3.0.0"
            }
          },
          "parse-json": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
            "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
            "dev": true,
            "requires": {
              "@babel/code-frame": "^7.0.0",
              "error-ex": "^1.3.1",
              "json-parse-even-better-errors": "^2.3.0",
              "lines-and-columns": "^1.1.6"
            }
          },
          "parse-node-version": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",
            "integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA==",
            "dev": true
          },
          "parse5": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
            "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==",
            "dev": true
          },
          "parse5-html-rewriting-stream": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5-html-rewriting-stream/-/parse5-html-rewriting-stream-6.0.1.tgz",
            "integrity": "sha512-vwLQzynJVEfUlURxgnf51yAJDQTtVpNyGD8tKi2Za7m+akukNHxCcUQMAa/mUGLhCeicFdpy7Tlvj8ZNKadprg==",
            "dev": true,
            "requires": {
              "parse5": "^6.0.1",
              "parse5-sax-parser": "^6.0.1"
            }
          },
          "parse5-htmlparser2-tree-adapter": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-6.0.1.tgz",
            "integrity": "sha512-qPuWvbLgvDGilKc5BoicRovlT4MtYT6JfJyBOMDsKoiT+GiuP5qyrPCnR9HcPECIJJmZh5jRndyNThnhhb/vlA==",
            "dev": true,
            "requires": {
              "parse5": "^6.0.1"
            }
          },
          "parse5-sax-parser": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5-sax-parser/-/parse5-sax-parser-6.0.1.tgz",
            "integrity": "sha512-kXX+5S81lgESA0LsDuGjAlBybImAChYRMT+/uKCEXFBFOeEhS52qUCydGhU3qLRD8D9DVjaUo821WK7DM4iCeg==",
            "dev": true,
            "requires": {
              "parse5": "^6.0.1"
            }
          },
          "parseurl": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
            "dev": true
          },
          "path-exists": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
            "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
            "dev": true
          },
          "path-is-absolute": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
            "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
            "dev": true
          },
          "path-key": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
            "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
            "dev": true
          },
          "path-parse": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
            "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
            "dev": true
          },
          "path-to-regexp": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
            "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ==",
            "dev": true
          },
          "path-type": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
            "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
            "dev": true
          },
          "picocolors": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
            "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",
            "dev": true
          },
          "picomatch": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
            "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
            "dev": true
          },
          "pify": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
            "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
            "dev": true,
            "optional": true
          },
          "piscina": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/piscina/-/piscina-3.2.0.tgz",
            "integrity": "sha512-yn/jMdHRw+q2ZJhFhyqsmANcbF6V2QwmD84c6xRau+QpQOmtrBCoRGdvTfeuFDYXB5W2m6MfLkjkvQa9lUSmIA==",
            "dev": true,
            "requires": {
              "eventemitter-asyncresource": "^1.0.0",
              "hdr-histogram-js": "^2.0.1",
              "hdr-histogram-percentiles-obj": "^3.0.0",
              "nice-napi": "^1.0.2"
            }
          },
          "pkg-dir": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
            "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
            "dev": true,
            "requires": {
              "find-up": "^4.0.0"
            }
          },
          "portfinder": {
            "version": "1.0.32",
            "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.32.tgz",
            "integrity": "sha512-on2ZJVVDXRADWE6jnQaX0ioEylzgBpQk8r55NE4wjXW1ZxO+BgDlY6DXwj20i0V8eB4SenDQ00WEaxfiIQPcxg==",
            "dev": true,
            "requires": {
              "async": "^2.6.4",
              "debug": "^3.2.7",
              "mkdirp": "^0.5.6"
            },
            "dependencies": {
              "debug": {
                "version": "3.2.7",
                "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
                "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
                "dev": true,
                "requires": {
                  "ms": "^2.1.1"
                }
              },
              "mkdirp": {
                "version": "0.5.6",
                "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.6.tgz",
                "integrity": "sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==",
                "dev": true,
                "requires": {
                  "minimist": "^1.2.6"
                }
              }
            }
          },
          "postcss": {
            "version": "8.4.5",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.5.tgz",
            "integrity": "sha512-jBDboWM8qpaqwkMwItqTQTiFikhs/67OYVvblFFTM7MrZjt6yMKd6r2kgXizEbTTljacm4NldIlZnhbjr84QYg==",
            "dev": true,
            "requires": {
              "nanoid": "^3.1.30",
              "picocolors": "^1.0.0",
              "source-map-js": "^1.0.1"
            }
          },
          "postcss-attribute-case-insensitive": {
            "version": "5.0.2",
            "resolved": "https://registry.npmjs.org/postcss-attribute-case-insensitive/-/postcss-attribute-case-insensitive-5.0.2.tgz",
            "integrity": "sha512-XIidXV8fDr0kKt28vqki84fRK8VW8eTuIa4PChv2MqKuT6C9UjmSKzen6KaWhWEoYvwxFCa7n/tC1SZ3tyq4SQ==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.10"
            }
          },
          "postcss-color-functional-notation": {
            "version": "4.2.4",
            "resolved": "https://registry.npmjs.org/postcss-color-functional-notation/-/postcss-color-functional-notation-4.2.4.tgz",
            "integrity": "sha512-2yrTAUZUab9s6CpxkxC4rVgFEVaR6/2Pipvi6qcgvnYiVqZcbDHEoBDhrXzyb7Efh2CCfHQNtcqWcIruDTIUeg==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-color-hex-alpha": {
            "version": "8.0.4",
            "resolved": "https://registry.npmjs.org/postcss-color-hex-alpha/-/postcss-color-hex-alpha-8.0.4.tgz",
            "integrity": "sha512-nLo2DCRC9eE4w2JmuKgVA3fGL3d01kGq752pVALF68qpGLmx2Qrk91QTKkdUqqp45T1K1XV8IhQpcu1hoAQflQ==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-color-rebeccapurple": {
            "version": "7.1.1",
            "resolved": "https://registry.npmjs.org/postcss-color-rebeccapurple/-/postcss-color-rebeccapurple-7.1.1.tgz",
            "integrity": "sha512-pGxkuVEInwLHgkNxUc4sdg4g3py7zUeCQ9sMfwyHAT+Ezk8a4OaaVZ8lIY5+oNqA/BXXgLyXv0+5wHP68R79hg==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-custom-media": {
            "version": "8.0.2",
            "resolved": "https://registry.npmjs.org/postcss-custom-media/-/postcss-custom-media-8.0.2.tgz",
            "integrity": "sha512-7yi25vDAoHAkbhAzX9dHx2yc6ntS4jQvejrNcC+csQJAXjj15e7VcWfMgLqBNAbOvqi5uIa9huOVwdHbf+sKqg==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-custom-properties": {
            "version": "12.1.10",
            "resolved": "https://registry.npmjs.org/postcss-custom-properties/-/postcss-custom-properties-12.1.10.tgz",
            "integrity": "sha512-U3BHdgrYhCrwTVcByFHs9EOBoqcKq4Lf3kXwbTi4hhq0qWhl/pDWq2THbv/ICX/Fl9KqeHBb8OVrTf2OaYF07A==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-custom-selectors": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/postcss-custom-selectors/-/postcss-custom-selectors-6.0.3.tgz",
            "integrity": "sha512-fgVkmyiWDwmD3JbpCmB45SvvlCD6z9CG6Ie6Iere22W5aHea6oWa7EM2bpnv2Fj3I94L3VbtvX9KqwSi5aFzSg==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.4"
            }
          },
          "postcss-dir-pseudo-class": {
            "version": "6.0.5",
            "resolved": "https://registry.npmjs.org/postcss-dir-pseudo-class/-/postcss-dir-pseudo-class-6.0.5.tgz",
            "integrity": "sha512-eqn4m70P031PF7ZQIvSgy9RSJ5uI2171O/OO/zcRNYpJbvaeKFUlar1aJ7rmgiQtbm0FSPsRewjpdS0Oew7MPA==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.10"
            }
          },
          "postcss-double-position-gradients": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/postcss-double-position-gradients/-/postcss-double-position-gradients-3.1.2.tgz",
            "integrity": "sha512-GX+FuE/uBR6eskOK+4vkXgT6pDkexLokPaz/AbJna9s5Kzp/yl488pKPjhy0obB475ovfT1Wv8ho7U/cHNaRgQ==",
            "dev": true,
            "requires": {
              "@csstools/postcss-progressive-custom-properties": "^1.1.0",
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-env-function": {
            "version": "4.0.6",
            "resolved": "https://registry.npmjs.org/postcss-env-function/-/postcss-env-function-4.0.6.tgz",
            "integrity": "sha512-kpA6FsLra+NqcFnL81TnsU+Z7orGtDTxcOhl6pwXeEq1yFPpRMkCDpHhrz8CFQDr/Wfm0jLiNQ1OsGGPjlqPwA==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-focus-visible": {
            "version": "6.0.4",
            "resolved": "https://registry.npmjs.org/postcss-focus-visible/-/postcss-focus-visible-6.0.4.tgz",
            "integrity": "sha512-QcKuUU/dgNsstIK6HELFRT5Y3lbrMLEOwG+A4s5cA+fx3A3y/JTq3X9LaOj3OC3ALH0XqyrgQIgey/MIZ8Wczw==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.9"
            }
          },
          "postcss-focus-within": {
            "version": "5.0.4",
            "resolved": "https://registry.npmjs.org/postcss-focus-within/-/postcss-focus-within-5.0.4.tgz",
            "integrity": "sha512-vvjDN++C0mu8jz4af5d52CB184ogg/sSxAFS+oUJQq2SuCe7T5U2iIsVJtsCp2d6R4j0jr5+q3rPkBVZkXD9fQ==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.9"
            }
          },
          "postcss-font-variant": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-font-variant/-/postcss-font-variant-5.0.0.tgz",
            "integrity": "sha512-1fmkBaCALD72CK2a9i468mA/+tr9/1cBxRRMXOUaZqO43oWPR5imcyPjXwuv7PXbCid4ndlP5zWhidQVVa3hmA==",
            "dev": true
          },
          "postcss-gap-properties": {
            "version": "3.0.5",
            "resolved": "https://registry.npmjs.org/postcss-gap-properties/-/postcss-gap-properties-3.0.5.tgz",
            "integrity": "sha512-IuE6gKSdoUNcvkGIqdtjtcMtZIFyXZhmFd5RUlg97iVEvp1BZKV5ngsAjCjrVy+14uhGBQl9tzmi1Qwq4kqVOg==",
            "dev": true
          },
          "postcss-image-set-function": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/postcss-image-set-function/-/postcss-image-set-function-4.0.7.tgz",
            "integrity": "sha512-9T2r9rsvYzm5ndsBE8WgtrMlIT7VbtTfE7b3BQnudUqnBcBo7L758oc+o+pdj/dUV0l5wjwSdjeOH2DZtfv8qw==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-import": {
            "version": "14.0.2",
            "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-14.0.2.tgz",
            "integrity": "sha512-BJ2pVK4KhUyMcqjuKs9RijV5tatNzNa73e/32aBVE/ejYPe37iH+6vAu9WvqUkB5OAYgLHzbSvzHnorybJCm9g==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.0.0",
              "read-cache": "^1.0.0",
              "resolve": "^1.1.7"
            }
          },
          "postcss-initial": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/postcss-initial/-/postcss-initial-4.0.1.tgz",
            "integrity": "sha512-0ueD7rPqX8Pn1xJIjay0AZeIuDoF+V+VvMt/uOnn+4ezUKhZM/NokDeP6DwMNyIoYByuN/94IQnt5FEkaN59xQ==",
            "dev": true
          },
          "postcss-lab-function": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/postcss-lab-function/-/postcss-lab-function-4.2.1.tgz",
            "integrity": "sha512-xuXll4isR03CrQsmxyz92LJB2xX9n+pZJ5jE9JgcnmsCammLyKdlzrBin+25dy6wIjfhJpKBAN80gsTlCgRk2w==",
            "dev": true,
            "requires": {
              "@csstools/postcss-progressive-custom-properties": "^1.1.0",
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-loader": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-6.2.1.tgz",
            "integrity": "sha512-WbbYpmAaKcux/P66bZ40bpWsBucjx/TTgVVzRZ9yUO8yQfVBlameJ0ZGVaPfH64hNSBh63a+ICP5nqOpBA0w+Q==",
            "dev": true,
            "requires": {
              "cosmiconfig": "^7.0.0",
              "klona": "^2.0.5",
              "semver": "^7.3.5"
            }
          },
          "postcss-logical": {
            "version": "5.0.4",
            "resolved": "https://registry.npmjs.org/postcss-logical/-/postcss-logical-5.0.4.tgz",
            "integrity": "sha512-RHXxplCeLh9VjinvMrZONq7im4wjWGlRJAqmAVLXyZaXwfDWP73/oq4NdIp+OZwhQUMj0zjqDfM5Fj7qby+B4g==",
            "dev": true
          },
          "postcss-media-minmax": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-media-minmax/-/postcss-media-minmax-5.0.0.tgz",
            "integrity": "sha512-yDUvFf9QdFZTuCUg0g0uNSHVlJ5X1lSzDZjPSFaiCWvjgsvu8vEVxtahPrLMinIDEEGnx6cBe6iqdx5YWz08wQ==",
            "dev": true
          },
          "postcss-modules-extract-imports": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-3.0.0.tgz",
            "integrity": "sha512-bdHleFnP3kZ4NYDhuGlVK+CMrQ/pqUm8bx/oGL93K6gVwiclvX5x0n76fYMKuIGKzlABOy13zsvqjb0f92TEXw==",
            "dev": true
          },
          "postcss-modules-local-by-default": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.0.tgz",
            "integrity": "sha512-sT7ihtmGSF9yhm6ggikHdV0hlziDTX7oFoXtuVWeDd3hHObNkcHRo9V3yg7vCAY7cONyxJC/XXCmmiHHcvX7bQ==",
            "dev": true,
            "requires": {
              "icss-utils": "^5.0.0",
              "postcss-selector-parser": "^6.0.2",
              "postcss-value-parser": "^4.1.0"
            }
          },
          "postcss-modules-scope": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-3.0.0.tgz",
            "integrity": "sha512-hncihwFA2yPath8oZ15PZqvWGkWf+XUfQgUGamS4LqoP1anQLOsOJw0vr7J7IwLpoY9fatA2qiGUGmuZL0Iqlg==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.4"
            }
          },
          "postcss-modules-values": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-4.0.0.tgz",
            "integrity": "sha512-RDxHkAiEGI78gS2ofyvCsu7iycRv7oqw5xMWn9iMoR0N/7mf9D50ecQqUo5BZ9Zh2vH4bCUR/ktCqbB9m8vJjQ==",
            "dev": true,
            "requires": {
              "icss-utils": "^5.0.0"
            }
          },
          "postcss-nesting": {
            "version": "10.2.0",
            "resolved": "https://registry.npmjs.org/postcss-nesting/-/postcss-nesting-10.2.0.tgz",
            "integrity": "sha512-EwMkYchxiDiKUhlJGzWsD9b2zvq/r2SSubcRrgP+jujMXFzqvANLt16lJANC+5uZ6hjI7lpRmI6O8JIl+8l1KA==",
            "dev": true,
            "requires": {
              "@csstools/selector-specificity": "^2.0.0",
              "postcss-selector-parser": "^6.0.10"
            }
          },
          "postcss-overflow-shorthand": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/postcss-overflow-shorthand/-/postcss-overflow-shorthand-3.0.4.tgz",
            "integrity": "sha512-otYl/ylHK8Y9bcBnPLo3foYFLL6a6Ak+3EQBPOTR7luMYCOsiVTUk1iLvNf6tVPNGXcoL9Hoz37kpfriRIFb4A==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-page-break": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/postcss-page-break/-/postcss-page-break-3.0.4.tgz",
            "integrity": "sha512-1JGu8oCjVXLa9q9rFTo4MbeeA5FMe00/9C7lN4va606Rdb+HkxXtXsmEDrIraQ11fGz/WvKWa8gMuCKkrXpTsQ==",
            "dev": true
          },
          "postcss-place": {
            "version": "7.0.5",
            "resolved": "https://registry.npmjs.org/postcss-place/-/postcss-place-7.0.5.tgz",
            "integrity": "sha512-wR8igaZROA6Z4pv0d+bvVrvGY4GVHihBCBQieXFY3kuSuMyOmEnnfFzHl/tQuqHZkfkIVBEbDvYcFfHmpSet9g==",
            "dev": true,
            "requires": {
              "postcss-value-parser": "^4.2.0"
            }
          },
          "postcss-preset-env": {
            "version": "7.2.3",
            "resolved": "https://registry.npmjs.org/postcss-preset-env/-/postcss-preset-env-7.2.3.tgz",
            "integrity": "sha512-Ok0DhLfwrcNGrBn8sNdy1uZqWRk/9FId0GiQ39W4ILop5GHtjJs8bu1MY9isPwHInpVEPWjb4CEcEaSbBLpfwA==",
            "dev": true,
            "requires": {
              "autoprefixer": "^10.4.2",
              "browserslist": "^4.19.1",
              "caniuse-lite": "^1.0.30001299",
              "css-blank-pseudo": "^3.0.2",
              "css-has-pseudo": "^3.0.3",
              "css-prefers-color-scheme": "^6.0.2",
              "cssdb": "^5.0.0",
              "postcss-attribute-case-insensitive": "^5.0.0",
              "postcss-color-functional-notation": "^4.2.1",
              "postcss-color-hex-alpha": "^8.0.2",
              "postcss-color-rebeccapurple": "^7.0.2",
              "postcss-custom-media": "^8.0.0",
              "postcss-custom-properties": "^12.1.2",
              "postcss-custom-selectors": "^6.0.0",
              "postcss-dir-pseudo-class": "^6.0.3",
              "postcss-double-position-gradients": "^3.0.4",
              "postcss-env-function": "^4.0.4",
              "postcss-focus-visible": "^6.0.3",
              "postcss-focus-within": "^5.0.3",
              "postcss-font-variant": "^5.0.0",
              "postcss-gap-properties": "^3.0.2",
              "postcss-image-set-function": "^4.0.4",
              "postcss-initial": "^4.0.1",
              "postcss-lab-function": "^4.0.3",
              "postcss-logical": "^5.0.3",
              "postcss-media-minmax": "^5.0.0",
              "postcss-nesting": "^10.1.2",
              "postcss-overflow-shorthand": "^3.0.2",
              "postcss-page-break": "^3.0.4",
              "postcss-place": "^7.0.3",
              "postcss-pseudo-class-any-link": "^7.0.2",
              "postcss-replace-overflow-wrap": "^4.0.0",
              "postcss-selector-not": "^5.0.0"
            }
          },
          "postcss-pseudo-class-any-link": {
            "version": "7.1.6",
            "resolved": "https://registry.npmjs.org/postcss-pseudo-class-any-link/-/postcss-pseudo-class-any-link-7.1.6.tgz",
            "integrity": "sha512-9sCtZkO6f/5ML9WcTLcIyV1yz9D1rf0tWc+ulKcvV30s0iZKS/ONyETvoWsr6vnrmW+X+KmuK3gV/w5EWnT37w==",
            "dev": true,
            "requires": {
              "postcss-selector-parser": "^6.0.10"
            }
          },
          "postcss-replace-overflow-wrap": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/postcss-replace-overflow-wrap/-/postcss-replace-overflow-wrap-4.0.0.tgz",
            "integrity": "sha512-KmF7SBPphT4gPPcKZc7aDkweHiKEEO8cla/GjcBK+ckKxiZslIu3C4GCRW3DNfL0o7yW7kMQu9xlZ1kXRXLXtw==",
            "dev": true
          },
          "postcss-selector-not": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/postcss-selector-not/-/postcss-selector-not-5.0.0.tgz",
            "integrity": "sha512-/2K3A4TCP9orP4TNS7u3tGdRFVKqz/E6pX3aGnriPG0jU78of8wsUcqE4QAhWEU0d+WnMSF93Ah3F//vUtK+iQ==",
            "dev": true,
            "requires": {
              "balanced-match": "^1.0.0"
            }
          },
          "postcss-selector-parser": {
            "version": "6.0.10",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.10.tgz",
            "integrity": "sha512-IQ7TZdoaqbT+LCpShg46jnZVlhWD2w6iQYAcYXfHARZ7X1t/UGhhceQDs5X0cGqKvYlHNOuv7Oa1xmb0oQuA3w==",
            "dev": true,
            "requires": {
              "cssesc": "^3.0.0",
              "util-deprecate": "^1.0.2"
            }
          },
          "postcss-value-parser": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
            "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
            "dev": true
          },
          "pretty-bytes": {
            "version": "5.6.0",
            "resolved": "https://registry.npmjs.org/pretty-bytes/-/pretty-bytes-5.6.0.tgz",
            "integrity": "sha512-FFw039TmrBqFK8ma/7OL3sDz/VytdtJr044/QUJtH0wK9lb9jLq9tJyIxUwtQJHwar2BqtiA4iCWSwo9JLkzFg==",
            "dev": true
          },
          "process-nextick-args": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
            "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
            "dev": true
          },
          "promise-inflight": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
            "integrity": "sha512-6zWPyEOFaQBJYcGMHBKTKJ3u6TBsnMFOIZSa6ce1e/ZrrsOlnHRHbabMjLiBYKp+n44X9eUI6VUPaukCXHuG4g==",
            "dev": true
          },
          "promise-retry": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
            "integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
            "dev": true,
            "requires": {
              "err-code": "^2.0.2",
              "retry": "^0.12.0"
            },
            "dependencies": {
              "retry": {
                "version": "0.12.0",
                "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
                "integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",
                "dev": true
              }
            }
          },
          "proxy-addr": {
            "version": "2.0.7",
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
            "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
            "dev": true,
            "requires": {
              "forwarded": "0.2.0",
              "ipaddr.js": "1.9.1"
            },
            "dependencies": {
              "ipaddr.js": {
                "version": "1.9.1",
                "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
                "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
                "dev": true
              }
            }
          },
          "prr": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
            "integrity": "sha512-yPw4Sng1gWghHQWj0B3ZggWUm4qVbPwPFcRG8KyxiU7J2OHFSoEHKS+EZ3fv5l1t9CyCiop6l/ZYeWbrgoQejw==",
            "dev": true,
            "optional": true
          },
          "punycode": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
            "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
            "dev": true
          },
          "qjobs": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/qjobs/-/qjobs-1.2.0.tgz",
            "integrity": "sha512-8YOJEHtxpySA3fFDyCRxA+UUV+fA+rTWnuWvylOK/NCjhY+b4ocCtmu8TtsWb+mYeU+GCHf/S66KZF/AsteKHg==",
            "dev": true
          },
          "qs": {
            "version": "6.11.0",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",
            "integrity": "sha512-MvjoMCJwEarSbUYk5O+nmoSzSutSsTwF85zcHPQ9OrlFoZOYIjaqBAJIqIXjptyD5vThxGq52Xu/MaJzRkIk4Q==",
            "dev": true,
            "requires": {
              "side-channel": "^1.0.4"
            }
          },
          "queue-microtask": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
            "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
            "dev": true
          },
          "randombytes": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
            "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
            "dev": true,
            "requires": {
              "safe-buffer": "^5.1.0"
            }
          },
          "range-parser": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
            "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
            "dev": true
          },
          "raw-body": {
            "version": "2.5.1",
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.1.tgz",
            "integrity": "sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==",
            "dev": true,
            "requires": {
              "bytes": "3.1.2",
              "http-errors": "2.0.0",
              "iconv-lite": "0.4.24",
              "unpipe": "1.0.0"
            },
            "dependencies": {
              "bytes": {
                "version": "3.1.2",
                "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
                "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
                "dev": true
              }
            }
          },
          "read-cache": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
            "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
            "dev": true,
            "requires": {
              "pify": "^2.3.0"
            },
            "dependencies": {
              "pify": {
                "version": "2.3.0",
                "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
                "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
                "dev": true
              }
            }
          },
          "read-package-json-fast": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/read-package-json-fast/-/read-package-json-fast-2.0.3.tgz",
            "integrity": "sha512-W/BKtbL+dUjTuRL2vziuYhp76s5HZ9qQhd/dKfWIZveD0O40453QNyZhC0e63lqZrAQ4jiOapVoeJ7JrszenQQ==",
            "dev": true,
            "requires": {
              "json-parse-even-better-errors": "^2.3.0",
              "npm-normalize-package-bin": "^1.0.1"
            }
          },
          "readable-stream": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
            "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
            "dev": true,
            "requires": {
              "inherits": "^2.0.3",
              "string_decoder": "^1.1.1",
              "util-deprecate": "^1.0.1"
            }
          },
          "readdirp": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
            "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
            "dev": true,
            "requires": {
              "picomatch": "^2.2.1"
            }
          },
          "reflect-metadata": {
            "version": "0.1.13",
            "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.1.13.tgz",
            "integrity": "sha512-Ts1Y/anZELhSsjMcU605fU9RE4Oi3p5ORujwbIKXfWa+0Zxs510Qrmrce5/Jowq3cHSZSJqBjypxmHarc+vEWg==",
            "dev": true
          },
          "regenerate": {
            "version": "1.4.2",
            "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
            "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==",
            "dev": true
          },
          "regenerate-unicode-properties": {
            "version": "10.1.0",
            "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-10.1.0.tgz",
            "integrity": "sha512-d1VudCLoIGitcU/hEg2QqvyGZQmdC0Lf8BqdOMXGFSvJP4bNV1+XqbPQeHHLD51Jh4QJJ225dlIFvY4Ly6MXmQ==",
            "dev": true,
            "requires": {
              "regenerate": "^1.4.2"
            }
          },
          "regenerator-runtime": {
            "version": "0.13.9",
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.9.tgz",
            "integrity": "sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA==",
            "dev": true
          },
          "regenerator-transform": {
            "version": "0.15.0",
            "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.15.0.tgz",
            "integrity": "sha512-LsrGtPmbYg19bcPHwdtmXwbW+TqNvtY4riE3P83foeHRroMbH6/2ddFBfab3t7kbzc7v7p4wbkIecHImqt0QNg==",
            "dev": true,
            "requires": {
              "@babel/runtime": "^7.8.4"
            }
          },
          "regex-parser": {
            "version": "2.2.11",
            "resolved": "https://registry.npmjs.org/regex-parser/-/regex-parser-2.2.11.tgz",
            "integrity": "sha512-jbD/FT0+9MBU2XAZluI7w2OBs1RBi6p9M83nkoZayQXXU9e8Robt69FcZc7wU4eJD/YFTjn1JdCk3rbMJajz8Q==",
            "dev": true
          },
          "regexp.prototype.flags": {
            "version": "1.4.3",
            "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.4.3.tgz",
            "integrity": "sha512-fjggEOO3slI6Wvgjwflkc4NFRCTZAu5CnNfBd5qOMYhWdn67nJBBu34/TkD++eeFmd8C9r9jfXJ27+nSiRkSUA==",
            "dev": true,
            "requires": {
              "call-bind": "^1.0.2",
              "define-properties": "^1.1.3",
              "functions-have-names": "^1.2.2"
            }
          },
          "regexpu-core": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-5.2.1.tgz",
            "integrity": "sha512-HrnlNtpvqP1Xkb28tMhBUO2EbyUHdQlsnlAhzWcwHy8WJR53UWr7/MAvqrsQKMbV4qdpv03oTMG8iIhfsPFktQ==",
            "dev": true,
            "requires": {
              "regenerate": "^1.4.2",
              "regenerate-unicode-properties": "^10.1.0",
              "regjsgen": "^0.7.1",
              "regjsparser": "^0.9.1",
              "unicode-match-property-ecmascript": "^2.0.0",
              "unicode-match-property-value-ecmascript": "^2.0.0"
            }
          },
          "regjsgen": {
            "version": "0.7.1",
            "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.7.1.tgz",
            "integrity": "sha512-RAt+8H2ZEzHeYWxZ3H2z6tF18zyyOnlcdaafLrm21Bguj7uZy6ULibiAFdXEtKQY4Sy7wDTwDiOazasMLc4KPA==",
            "dev": true
          },
          "regjsparser": {
            "version": "0.9.1",
            "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.9.1.tgz",
            "integrity": "sha512-dQUtn90WanSNl+7mQKcXAgZxvUe7Z0SqXlgzv0za4LwiUhyzBC58yQO3liFoUgu8GiJVInAhJjkj1N0EtQ5nkQ==",
            "dev": true,
            "requires": {
              "jsesc": "~0.5.0"
            },
            "dependencies": {
              "jsesc": {
                "version": "0.5.0",
                "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
                "integrity": "sha512-uZz5UnB7u4T9LvwmFqXii7pZSouaRPorGs5who1Ip7VO0wxanFvBL7GkM6dTHlgX+jhBApRetaWpnDabOeTcnA==",
                "dev": true
              }
            }
          },
          "require-directory": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
            "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
            "dev": true
          },
          "require-from-string": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
            "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
            "dev": true
          },
          "requires-port": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
            "integrity": "sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==",
            "dev": true
          },
          "resolve": {
            "version": "1.22.1",
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.1.tgz",
            "integrity": "sha512-nBpuuYuY5jFsli/JIs1oldw6fOQCBioohqWZg/2hiaOybXOft4lonv85uDOKXdf8rhyK159cxU5cDcK/NKk8zw==",
            "dev": true,
            "requires": {
              "is-core-module": "^2.9.0",
              "path-parse": "^1.0.7",
              "supports-preserve-symlinks-flag": "^1.0.0"
            }
          },
          "resolve-from": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
            "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
            "dev": true
          },
          "resolve-url-loader": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/resolve-url-loader/-/resolve-url-loader-5.0.0.tgz",
            "integrity": "sha512-uZtduh8/8srhBoMx//5bwqjQ+rfYOUq8zC9NrMUGtjBiGTtFJM42s58/36+hTqeqINcnYe08Nj3LkK9lW4N8Xg==",
            "dev": true,
            "requires": {
              "adjust-sourcemap-loader": "^4.0.0",
              "convert-source-map": "^1.7.0",
              "loader-utils": "^2.0.0",
              "postcss": "^8.2.14",
              "source-map": "0.6.1"
            },
            "dependencies": {
              "loader-utils": {
                "version": "2.0.3",
                "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-2.0.3.tgz",
                "integrity": "sha512-THWqIsn8QRnvLl0shHYVBN9syumU8pYWEHPTmkiVGd+7K5eFNVSY6AJhRvgGF70gg1Dz+l/k8WicvFCxdEs60A==",
                "dev": true,
                "requires": {
                  "big.js": "^5.2.2",
                  "emojis-list": "^3.0.0",
                  "json5": "^2.1.2"
                }
              },
              "source-map": {
                "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                "dev": true
              }
            }
          },
          "restore-cursor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
            "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
            "dev": true,
            "requires": {
              "onetime": "^5.1.0",
              "signal-exit": "^3.0.2"
            }
          },
          "retry": {
            "version": "0.13.1",
            "resolved": "https://registry.npmjs.org/retry/-/retry-0.13.1.tgz",
            "integrity": "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==",
            "dev": true
          },
          "reusify": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
            "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
            "dev": true
          },
          "rfdc": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/rfdc/-/rfdc-1.3.0.tgz",
            "integrity": "sha512-V2hovdzFbOi77/WajaSMXk2OLm+xNIeQdMMuB7icj7bk6zi2F8GGAxigcnDFpJHbNyNcgyJDiP+8nOrY5cZGrA==",
            "dev": true
          },
          "rimraf": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
            "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
            "dev": true,
            "requires": {
              "glob": "^7.1.3"
            }
          },
          "run-async": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
            "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==",
            "dev": true
          },
          "run-parallel": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
            "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
            "dev": true,
            "requires": {
              "queue-microtask": "^1.2.2"
            }
          },
          "rxjs": {
            "version": "7.5.7",
            "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.5.7.tgz",
            "integrity": "sha512-z9MzKh/UcOqB3i20H6rtrlaE/CgjLOvheWK/9ILrbhROGTweAi1BaFsTT9FbwZi5Trr1qNRs+MXkhmR06awzQA==",
            "requires": {
              "tslib": "^2.1.0"
            }
          },
          "safe-buffer": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
            "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
            "dev": true
          },
          "safer-buffer": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
            "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
            "dev": true
          },
          "sass": {
            "version": "1.49.9",
            "resolved": "https://registry.npmjs.org/sass/-/sass-1.49.9.tgz",
            "integrity": "sha512-YlYWkkHP9fbwaFRZQRXgDi3mXZShslVmmo+FVK3kHLUELHHEYrCmL1x6IUjC7wLS6VuJSAFXRQS/DxdsC4xL1A==",
            "dev": true,
            "requires": {
              "chokidar": ">=3.0.0 <4.0.0",
              "immutable": "^4.0.0",
              "source-map-js": ">=0.6.2 <2.0.0"
            }
          },
          "sass-loader": {
            "version": "12.4.0",
            "resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-12.4.0.tgz",
            "integrity": "sha512-7xN+8khDIzym1oL9XyS6zP6Ges+Bo2B2xbPrjdMHEYyV3AQYhd/wXeru++3ODHF0zMjYmVadblSKrPrjEkL8mg==",
            "dev": true,
            "requires": {
              "klona": "^2.0.4",
              "neo-async": "^2.6.2"
            }
          },
          "sax": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
            "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
            "dev": true
          },
          "schema-utils": {
            "version": "2.7.1",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.1.tgz",
            "integrity": "sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==",
            "dev": true,
            "requires": {
              "@types/json-schema": "^7.0.5",
              "ajv": "^6.12.4",
              "ajv-keywords": "^3.5.2"
            },
            "dependencies": {
              "ajv": {
                "version": "6.12.6",
                "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
                "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
                "dev": true,
                "requires": {
                  "fast-deep-equal": "^3.1.1",
                  "fast-json-stable-stringify": "^2.0.0",
                  "json-schema-traverse": "^0.4.1",
                  "uri-js": "^4.2.2"
                }
              },
              "json-schema-traverse": {
                "version": "0.4.1",
                "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
                "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
                "dev": true
              }
            }
          },
          "select-hose": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
            "integrity": "sha512-mEugaLK+YfkijB4fx0e6kImuJdCIt2LxCRcbEYPqRGCs4F2ogyfZU5IAZRdjCP8JPq2AtdNoC/Dux63d9Kiryg==",
            "dev": true
          },
          "selfsigned": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-2.1.1.tgz",
            "integrity": "sha512-GSL3aowiF7wa/WtSFwnUrludWFoNhftq8bUkH9pkzjpN2XSPOAYEgg6e0sS9s0rZwgJzJiQRPU18A6clnoW5wQ==",
            "dev": true,
            "requires": {
              "node-forge": "^1"
            }
          },
          "semver": {
            "version": "7.3.5",
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
            "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
            "dev": true,
            "requires": {
              "lru-cache": "^6.0.0"
            }
          },
          "send": {
            "version": "0.18.0",
            "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
            "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
            "dev": true,
            "requires": {
              "debug": "2.6.9",
              "depd": "2.0.0",
              "destroy": "1.2.0",
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "etag": "~1.8.1",
              "fresh": "0.5.2",
              "http-errors": "2.0.0",
              "mime": "1.6.0",
              "ms": "2.1.3",
              "on-finished": "2.4.1",
              "range-parser": "~1.2.1",
              "statuses": "2.0.1"
            },
            "dependencies": {
              "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "dev": true,
                "requires": {
                  "ms": "2.0.0"
                },
                "dependencies": {
                  "ms": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                    "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
                    "dev": true
                  }
                }
              },
              "ms": {
                "version": "2.1.3",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
                "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
                "dev": true
              }
            }
          },
          "serialize-javascript": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.0.tgz",
            "integrity": "sha512-Qr3TosvguFt8ePWqsvRfrKyQXIiW+nGbYpy8XK24NQHE83caxWt+mIymTT19DGFbNWNLfEwsrkSmN64lVWB9ag==",
            "dev": true,
            "requires": {
              "randombytes": "^2.1.0"
            }
          },
          "serve-index": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
            "integrity": "sha512-pXHfKNP4qujrtteMrSBb0rc8HJ9Ms/GrXwcUtUtD5s4ewDJI8bT3Cz2zTVRMKtri49pLx2e0Ya8ziP5Ya2pZZw==",
            "dev": true,
            "requires": {
              "accepts": "~1.3.4",
              "batch": "0.6.1",
              "debug": "2.6.9",
              "escape-html": "~1.0.3",
              "http-errors": "~1.6.2",
              "mime-types": "~2.1.17",
              "parseurl": "~1.3.2"
            },
            "dependencies": {
              "debug": {
                "version": "2.6.9",
                "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                "dev": true,
                "requires": {
                  "ms": "2.0.0"
                }
              },
              "depd": {
                "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
                "integrity": "sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==",
                "dev": true
              },
              "http-errors": {
                "version": "1.6.3",
                "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
                "integrity": "sha512-lks+lVC8dgGyh97jxvxeYTWQFvh4uw4yC12gVl63Cg30sjPX4wuGcdkICVXDAESr6OJGjqGA8Iz5mkeN6zlD7A==",
                "dev": true,
                "requires": {
                  "depd": "~1.1.2",
                  "inherits": "2.0.3",
                  "setprototypeof": "1.1.0",
                  "statuses": ">= 1.4.0 < 2"
                }
              },
              "inherits": {
                "version": "2.0.3",
                "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                "integrity": "sha512-x00IRNXNy63jwGkJmzPigoySHbaqpNuzKbBOmzK+g2OdZpQ9w+sxCN+VSB3ja7IAge2OP2qpfxTjeNcyjmW1uw==",
                "dev": true
              },
              "ms": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==",
                "dev": true
              },
              "setprototypeof": {
                "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
                "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",
                "dev": true
              },
              "statuses": {
                "version": "1.5.0",
                "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
                "integrity": "sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==",
                "dev": true
              }
            }
          },
          "serve-static": {
            "version": "1.15.0",
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
            "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
            "dev": true,
            "requires": {
              "encodeurl": "~1.0.2",
              "escape-html": "~1.0.3",
              "parseurl": "~1.3.3",
              "send": "0.18.0"
            }
          },
          "set-blocking": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
            "integrity": "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==",
            "dev": true
          },
          "setprototypeof": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
            "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
            "dev": true
          },
          "shallow-clone": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
            "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
            "dev": true,
            "requires": {
              "kind-of": "^6.0.2"
            }
          },
          "shebang-command": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
            "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
            "dev": true,
            "requires": {
              "shebang-regex": "^3.0.0"
            }
          },
          "shebang-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
            "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
            "dev": true
          },
          "side-channel": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
            "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
            "dev": true,
            "requires": {
              "call-bind": "^1.0.0",
              "get-intrinsic": "^1.0.2",
              "object-inspect": "^1.9.0"
            }
          },
          "signal-exit": {
            "version": "3.0.7",
            "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
            "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
            "dev": true
          },
          "slash": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/slash/-/slash-4.0.0.tgz",
            "integrity": "sha512-3dOsAHXXUkQTpOYcoAxLIorMTp4gIQr5IW3iVb7A7lFIp0VHhnynm9izx6TssdrIcVIESAlVjtnO2K8bg+Coew==",
            "dev": true
          },
          "smart-buffer": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.2.0.tgz",
            "integrity": "sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==",
            "dev": true
          },
          "socket.io": {
            "version": "4.5.3",
            "resolved": "https://registry.npmjs.org/socket.io/-/socket.io-4.5.3.tgz",
            "integrity": "sha512-zdpnnKU+H6mOp7nYRXH4GNv1ux6HL6+lHL8g7Ds7Lj8CkdK1jJK/dlwsKDculbyOHifcJ0Pr/yeXnZQ5GeFrcg==",
            "dev": true,
            "requires": {
              "accepts": "~1.3.4",
              "base64id": "~2.0.0",
              "debug": "~4.3.2",
              "engine.io": "~6.2.0",
              "socket.io-adapter": "~2.4.0",
              "socket.io-parser": "~4.2.0"
            }
          },
          "socket.io-adapter": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/socket.io-adapter/-/socket.io-adapter-2.4.0.tgz",
            "integrity": "sha512-W4N+o69rkMEGVuk2D/cvca3uYsvGlMwsySWV447y99gUPghxq42BxqLNMndb+a1mm/5/7NeXVQS7RLa2XyXvYg==",
            "dev": true
          },
          "socket.io-parser": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/socket.io-parser/-/socket.io-parser-4.2.1.tgz",
            "integrity": "sha512-V4GrkLy+HeF1F/en3SpUaM+7XxYXpuMUWLGde1kSSh5nQMN4hLrbPIkD+otwh6q9R6NOQBN4AMaOZ2zVjui82g==",
            "dev": true,
            "requires": {
              "@socket.io/component-emitter": "~3.1.0",
              "debug": "~4.3.1"
            }
          },
          "sockjs": {
            "version": "0.3.24",
            "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.24.tgz",
            "integrity": "sha512-GJgLTZ7vYb/JtPSSZ10hsOYIvEYsjbNU+zPdIHcUaWVNUEPivzxku31865sSSud0Da0W4lEeOPlmw93zLQchuQ==",
            "dev": true,
            "requires": {
              "faye-websocket": "^0.11.3",
              "uuid": "^8.3.2",
              "websocket-driver": "^0.7.4"
            }
          },
          "socks": {
            "version": "2.7.1",
            "resolved": "https://registry.npmjs.org/socks/-/socks-2.7.1.tgz",
            "integrity": "sha512-7maUZy1N7uo6+WVEX6psASxtNlKaNVMlGQKkG/63nEDdLOWNbiUMoLK7X4uYoLhQstau72mLgfEWcXcwsaHbYQ==",
            "dev": true,
            "requires": {
              "ip": "^2.0.0",
              "smart-buffer": "^4.2.0"
            },
            "dependencies": {
              "ip": {
                "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/ip/-/ip-2.0.0.tgz",
                "integrity": "sha512-WKa+XuLG1A1R0UWhl2+1XQSi+fZWMsYKffMZTTYsiZaUD8k2yDAj5atimTUD2TZkyCkNEeYE5NhFZmupOGtjYQ==",
                "dev": true
              }
            }
          },
          "socks-proxy-agent": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-6.2.1.tgz",
            "integrity": "sha512-a6KW9G+6B3nWZ1yB8G7pJwL3ggLy1uTzKAgCb7ttblwqdz9fMGJUuTy3uFzEP48FAs9FLILlmzDlE2JJhVQaXQ==",
            "dev": true,
            "requires": {
              "agent-base": "^6.0.2",
              "debug": "^4.3.3",
              "socks": "^2.6.2"
            }
          },
          "source-map": {
            "version": "0.7.3",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
            "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ==",
            "dev": true
          },
          "source-map-js": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.0.2.tgz",
            "integrity": "sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==",
            "dev": true
          },
          "source-map-loader": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/source-map-loader/-/source-map-loader-3.0.1.tgz",
            "integrity": "sha512-Vp1UsfyPvgujKQzi4pyDiTOnE3E4H+yHvkVRN3c/9PJmQS4CQJExvcDvaX/D+RV+xQben9HJ56jMJS3CgUeWyA==",
            "dev": true,
            "requires": {
              "abab": "^2.0.5",
              "iconv-lite": "^0.6.3",
              "source-map-js": "^1.0.1"
            },
            "dependencies": {
              "iconv-lite": {
                "version": "0.6.3",
                "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
                "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
                "dev": true,
                "requires": {
                  "safer-buffer": ">= 2.1.2 < 3.0.0"
                }
              }
            }
          },
          "source-map-resolve": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.6.0.tgz",
            "integrity": "sha512-KXBr9d/fO/bWo97NXsPIAW1bFSBOuCnjbNTBMO7N59hsv5i9yzRDfcYwwt0l04+VqnKC+EwzvJZIP/qkuMgR/w==",
            "dev": true,
            "requires": {
              "atob": "^2.1.2",
              "decode-uri-component": "^0.2.0"
            }
          },
          "source-map-support": {
            "version": "0.5.21",
            "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
            "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
            "dev": true,
            "requires": {
              "buffer-from": "^1.0.0",
              "source-map": "^0.6.0"
            },
            "dependencies": {
              "source-map": {
                "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
                "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
                "dev": true
              }
            }
          },
          "sourcemap-codec": {
            "version": "1.4.8",
            "resolved": "https://registry.npmjs.org/sourcemap-codec/-/sourcemap-codec-1.4.8.tgz",
            "integrity": "sha512-9NykojV5Uih4lgo5So5dtw+f0JgJX30KCNI8gwhz2J9A15wD0Ml6tjHKwf6fTSa6fAdVBdZeNOs9eJ71qCk8vA==",
            "dev": true
          },
          "spdy": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
            "integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
            "dev": true,
            "requires": {
              "debug": "^4.1.0",
              "handle-thing": "^2.0.0",
              "http-deceiver": "^1.2.7",
              "select-hose": "^2.0.0",
              "spdy-transport": "^3.0.0"
            }
          },
          "spdy-transport": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
            "integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
            "dev": true,
            "requires": {
              "debug": "^4.1.0",
              "detect-node": "^2.0.4",
              "hpack.js": "^2.1.6",
              "obuf": "^1.1.2",
              "readable-stream": "^3.0.6",
              "wbuf": "^1.7.3"
            }
          },
          "sprintf-js": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
            "integrity": "sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==",
            "dev": true
          },
          "ssri": {
            "version": "8.0.1",
            "resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.1.tgz",
            "integrity": "sha512-97qShzy1AiyxvPNIkLWoGua7xoQzzPjQ0HAH4B0rWKo7SZ6USuPcrUiAFrws0UH8RrbWmgq3LMTObhPIHbbBeQ==",
            "dev": true,
            "requires": {
              "minipass": "^3.1.1"
            }
          },
          "statuses": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
            "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
            "dev": true
          },
          "streamroller": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/streamroller/-/streamroller-3.1.3.tgz",
            "integrity": "sha512-CphIJyFx2SALGHeINanjFRKQ4l7x2c+rXYJ4BMq0gd+ZK0gi4VT8b+eHe2wi58x4UayBAKx4xtHpXT/ea1cz8w==",
            "dev": true,
            "requires": {
              "date-format": "^4.0.14",
              "debug": "^4.3.4",
              "fs-extra": "^8.1.0"
            }
          },
          "string-width": {
            "version": "4.2.3",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
            "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
            "dev": true,
            "requires": {
              "emoji-regex": "^8.0.0",
              "is-fullwidth-code-point": "^3.0.0",
              "strip-ansi": "^6.0.1"
            }
          },
          "string_decoder": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
            "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
            "dev": true,
            "requires": {
              "safe-buffer": "~5.2.0"
            }
          },
          "strip-ansi": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
            "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
            "dev": true,
            "requires": {
              "ansi-regex": "^5.0.1"
            }
          },
          "strip-final-newline": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
            "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
            "dev": true
          },
          "stylus": {
            "version": "0.56.0",
            "resolved": "https://registry.npmjs.org/stylus/-/stylus-0.56.0.tgz",
            "integrity": "sha512-Ev3fOb4bUElwWu4F9P9WjnnaSpc8XB9OFHSFZSKMFL1CE1oM+oFXWEgAqPmmZIyhBihuqIQlFsVTypiiS9RxeA==",
            "dev": true,
            "requires": {
              "css": "^3.0.0",
              "debug": "^4.3.2",
              "glob": "^7.1.6",
              "safer-buffer": "^2.1.2",
              "sax": "~1.2.4",
              "source-map": "^0.7.3"
            }
          },
          "stylus-loader": {
            "version": "6.2.0",
            "resolved": "https://registry.npmjs.org/stylus-loader/-/stylus-loader-6.2.0.tgz",
            "integrity": "sha512-5dsDc7qVQGRoc6pvCL20eYgRUxepZ9FpeK28XhdXaIPP6kXr6nI1zAAKFQgP5OBkOfKaURp4WUpJzspg1f01Gg==",
            "dev": true,
            "requires": {
              "fast-glob": "^3.2.7",
              "klona": "^2.0.4",
              "normalize-path": "^3.0.0"
            }
          },
          "supports-color": {
            "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
            "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
            "dev": true,
            "requires": {
              "has-flag": "^3.0.0"
            }
          },
          "supports-preserve-symlinks-flag": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
            "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
            "dev": true
          },
          "symbol-observable": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/symbol-observable/-/symbol-observable-4.0.0.tgz",
            "integrity": "sha512-b19dMThMV4HVFynSAM1++gBHAbk2Tc/osgLIBZMKsyqh34jb2e8Os7T6ZW/Bt3pJFdBTd2JwAnAAEQV7rSNvcQ==",
            "dev": true
          },
          "tapable": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
            "integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
            "dev": true
          },
          "tar": {
            "version": "6.1.12",
            "resolved": "https://registry.npmjs.org/tar/-/tar-6.1.12.tgz",
            "integrity": "sha512-jU4TdemS31uABHd+Lt5WEYJuzn+TJTCBLljvIAHZOz6M9Os5pJ4dD+vRFLxPa/n3T0iEFzpi+0x1UfuDZYbRMw==",
            "dev": true,
            "requires": {
              "chownr": "^2.0.0",
              "fs-minipass": "^2.0.0",
              "minipass": "^3.0.0",
              "minizlib": "^2.1.1",
              "mkdirp": "^1.0.3",
              "yallist": "^4.0.0"
            }
          },
          "terser": {
            "version": "5.14.2",
            "resolved": "https://registry.npmjs.org/terser/-/terser-5.14.2.tgz",
            "integrity": "sha512-oL0rGeM/WFQCUd0y2QrWxYnq7tfSuKBiqTjRPWrRgB46WD/kiwHwF8T23z78H6Q6kGCuuHcPB+KULHRdxvVGQA==",
            "dev": true,
            "requires": {
              "@jridgewell/source-map": "^0.3.2",
              "acorn": "^8.5.0",
              "commander": "^2.20.0",
              "source-map-support": "~0.5.20"
            }
          },
          "terser-webpack-plugin": {
            "version": "5.3.6",
            "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.3.6.tgz",
            "integrity": "sha512-kfLFk+PoLUQIbLmB1+PZDMRSZS99Mp+/MHqDNmMA6tOItzRt+Npe3E+fsMs5mfcM0wCtrrdU387UnV+vnSffXQ==",
            "dev": true,
            "requires": {
              "@jridgewell/trace-mapping": "^0.3.14",
              "jest-worker": "^27.4.5",
              "schema-utils": "^3.1.1",
              "serialize-javascript": "^6.0.0",
              "terser": "^5.14.1"
            },
            "dependencies": {
              "ajv": {
                "version": "6.12.6",
                "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
                "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
                "dev": true,
                "requires": {
                  "fast-deep-equal": "^3.1.1",
                  "fast-json-stable-stringify": "^2.0.0",
                  "json-schema-traverse": "^0.4.1",
                  "uri-js": "^4.2.2"
                }
              },
              "json-schema-traverse": {
                "version": "0.4.1",
                "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
                "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
                "dev": true
              },
              "schema-utils": {
                "version": "3.1.1",
                "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.1.1.tgz",
                "integrity": "sha512-Y5PQxS4ITlC+EahLuXaY86TXfR7Dc5lw294alXOq86JAHCihAIZfqv8nNCWvaEJvaC51uN9hbLGeV0cFBdH+Fw==",
                "dev": true,
                "requires": {
                  "@types/json-schema": "^7.0.8",
                  "ajv": "^6.12.5",
                  "ajv-keywords": "^3.5.2"
                }
              }
            }
          },
          "test-exclude": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
            "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
            "dev": true,
            "requires": {
              "@istanbuljs/schema": "^0.1.2",
              "glob": "^7.1.4",
              "minimatch": "^3.0.4"
            }
          },
          "text-table": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
            "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
            "dev": true
          },
          "through": {
            "version": "2.3.8",
            "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
            "integrity": "sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg==",
            "dev": true
          },
          "thunky": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
            "integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==",
            "dev": true
          },
          "tmp": {
            "version": "0.0.33",
            "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
            "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
            "dev": true,
            "requires": {
              "os-tmpdir": "~1.0.2"
            }
          },
          "to-fast-properties": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
            "integrity": "sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==",
            "dev": true
          },
          "to-regex-range": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
            "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
            "dev": true,
            "requires": {
              "is-number": "^7.0.0"
            }
          },
          "toidentifier": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
            "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
            "dev": true
          },
          "tree-kill": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
            "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
            "dev": true
          },
          "tslib": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.4.1.tgz",
            "integrity": "sha512-tGyy4dAjRIEwI7BzsB0lynWgOpfqjUdq91XXAlIWD2OwKBH7oCl/GZG/HT4BOHrTlPMOASlMQ7veyTqpmRcrNA=="
          },
          "type-fest": {
            "version": "0.21.3",
            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
            "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==",
            "dev": true
          },
          "type-is": {
            "version": "1.6.18",
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
            "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
            "dev": true,
            "requires": {
              "media-typer": "0.3.0",
              "mime-types": "~2.1.24"
            }
          },
          "typed-assert": {
            "version": "1.0.9",
            "resolved": "https://registry.npmjs.org/typed-assert/-/typed-assert-1.0.9.tgz",
            "integrity": "sha512-KNNZtayBCtmnNmbo5mG47p1XsCyrx6iVqomjcZnec/1Y5GGARaxPs6r49RnSPeUP3YjNYiU9sQHAtY4BBvnZwg==",
            "dev": true
          },
          "typescript": {
            "version": "4.6.4",
            "resolved": "https://registry.npmjs.org/typescript/-/typescript-4.6.4.tgz",
            "integrity": "sha512-9ia/jWHIEbo49HfjrLGfKbZSuWo9iTMwXO+Ca3pRsSpbsMbc7/IU8NKdCZVRRBafVPGnoJeFL76ZOAA84I9fEg==",
            "dev": true
          },
          "ua-parser-js": {
            "version": "0.7.32",
            "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-0.7.32.tgz",
            "integrity": "sha512-f9BESNVhzlhEFf2CHMSj40NWOjYPl1YKYbrvIr/hFTDEmLq7SRbWvm7FcdcpCYT95zrOhC7gZSxjdnnTpBcwVw==",
            "dev": true
          },
          "unicode-canonical-property-names-ecmascript": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz",
            "integrity": "sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ==",
            "dev": true
          },
          "unicode-match-property-ecmascript": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
            "integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
            "dev": true,
            "requires": {
              "unicode-canonical-property-names-ecmascript": "^2.0.0",
              "unicode-property-aliases-ecmascript": "^2.0.0"
            }
          },
          "unicode-match-property-value-ecmascript": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.0.0.tgz",
            "integrity": "sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw==",
            "dev": true
          },
          "unicode-property-aliases-ecmascript": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.1.0.tgz",
            "integrity": "sha512-6t3foTQI9qne+OZoVQB/8x8rk2k1eVy1gRXhV3oFQ5T6R1dqQ1xtin3XqSlx3+ATBkliTaR/hHyJBm+LVPNM8w==",
            "dev": true
          },
          "unique-filename": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",
            "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
            "dev": true,
            "requires": {
              "unique-slug": "^2.0.0"
            }
          },
          "unique-slug": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",
            "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
            "dev": true,
            "requires": {
              "imurmurhash": "^0.1.4"
            }
          },
          "universalify": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
            "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
            "dev": true
          },
          "unpipe": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
            "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
            "dev": true
          },
          "update-browserslist-db": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.0.10.tgz",
            "integrity": "sha512-OztqDenkfFkbSG+tRxBeAnCVPckDBcvibKd35yDONx6OU8N7sqgwc7rCbkJ/WcYtVRZ4ba68d6byhC21GFh7sQ==",
            "dev": true,
            "requires": {
              "escalade": "^3.1.1",
              "picocolors": "^1.0.0"
            }
          },
          "uri-js": {
            "version": "4.4.1",
            "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
            "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
            "dev": true,
            "requires": {
              "punycode": "^2.1.0"
            }
          },
          "util-deprecate": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
            "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
            "dev": true
          },
          "utils-merge": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
            "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
            "dev": true
          },
          "uuid": {
            "version": "8.3.2",
            "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
            "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
            "dev": true
          },
          "validate-npm-package-name": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/validate-npm-package-name/-/validate-npm-package-name-3.0.0.tgz",
            "integrity": "sha512-M6w37eVCMMouJ9V/sdPGnC5H4uDr73/+xdq0FBLO3TFFX1+7wiUY6Es328NN+y43tmY+doUdN9g9J21vqB7iLw==",
            "dev": true,
            "requires": {
              "builtins": "^1.0.3"
            }
          },
          "vary": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
            "dev": true
          },
          "void-elements": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/void-elements/-/void-elements-2.0.1.tgz",
            "integrity": "sha512-qZKX4RnBzH2ugr8Lxa7x+0V6XD9Sb/ouARtiasEQCHB1EVU4NXtmHsDDrx1dO4ne5fc3J6EW05BP1Dl0z0iung==",
            "dev": true
          },
          "watchpack": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.4.0.tgz",
            "integrity": "sha512-Lcvm7MGST/4fup+ifyKi2hjyIAwcdI4HRgtvTpIUxBRhB+RFtUh8XtDOxUfctVCnhVi+QQj49i91OyvzkJl6cg==",
            "dev": true,
            "requires": {
              "glob-to-regexp": "^0.4.1",
              "graceful-fs": "^4.1.2"
            }
          },
          "wbuf": {
            "version": "1.7.3",
            "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
            "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
            "dev": true,
            "requires": {
              "minimalistic-assert": "^1.0.0"
            }
          },
          "wcwidth": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
            "integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
            "dev": true,
            "requires": {
              "defaults": "^1.0.3"
            }
          },
          "webpack": {
            "version": "5.70.0",
            "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.70.0.tgz",
            "integrity": "sha512-ZMWWy8CeuTTjCxbeaQI21xSswseF2oNOwc70QSKNePvmxE7XW36i7vpBMYZFAUHPwQiEbNGCEYIOOlyRbdGmxw==",
            "dev": true,
            "requires": {
              "@types/eslint-scope": "^3.7.3",
              "@types/estree": "^0.0.51",
              "@webassemblyjs/ast": "1.11.1",
              "@webassemblyjs/wasm-edit": "1.11.1",
              "@webassemblyjs/wasm-parser": "1.11.1",
              "acorn": "^8.4.1",
              "acorn-import-assertions": "^1.7.6",
              "browserslist": "^4.14.5",
              "chrome-trace-event": "^1.0.2",
              "enhanced-resolve": "^5.9.2",
              "es-module-lexer": "^0.9.0",
              "eslint-scope": "5.1.1",
              "events": "^3.2.0",
              "glob-to-regexp": "^0.4.1",
              "graceful-fs": "^4.2.9",
              "json-parse-better-errors": "^1.0.2",
              "loader-runner": "^4.2.0",
              "mime-types": "^2.1.27",
              "neo-async": "^2.6.2",
              "schema-utils": "^3.1.0",
              "tapable": "^2.1.1",
              "terser-webpack-plugin": "^5.1.3",
              "watchpack": "^2.3.1",
              "webpack-sources": "^3.2.3"
            },
            "dependencies": {
              "ajv": {
                "version": "6.12.6",
                "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
                "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
                "dev": true,
                "requires": {
                  "fast-deep-equal": "^3.1.1",
                  "fast-json-stable-stringify": "^2.0.0",
                  "json-schema-traverse": "^0.4.1",
                  "uri-js": "^4.2.2"
                }
              },
              "json-schema-traverse": {
                "version": "0.4.1",
                "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
                "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
                "dev": true
              },
              "schema-utils": {
                "version": "3.1.1",
                "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-3.1.1.tgz",
                "integrity": "sha512-Y5PQxS4ITlC+EahLuXaY86TXfR7Dc5lw294alXOq86JAHCihAIZfqv8nNCWvaEJvaC51uN9hbLGeV0cFBdH+Fw==",
                "dev": true,
                "requires": {
                  "@types/json-schema": "^7.0.8",
                  "ajv": "^6.12.5",
                  "ajv-keywords": "^3.5.2"
                }
              }
            }
          },
          "webpack-dev-middleware": {
            "version": "5.3.0",
            "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-5.3.0.tgz",
            "integrity": "sha512-MouJz+rXAm9B1OTOYaJnn6rtD/lWZPy2ufQCH3BPs8Rloh/Du6Jze4p7AeLYHkVi0giJnYLaSGDC7S+GM9arhg==",
            "dev": true,
            "requires": {
              "colorette": "^2.0.10",
              "memfs": "^3.2.2",
              "mime-types": "^2.1.31",
              "range-parser": "^1.2.1",
              "schema-utils": "^4.0.0"
            },
            "dependencies": {
              "ajv-keywords": {
                "version": "5.1.0",
                "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
                "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
                "dev": true,
                "requires": {
                  "fast-deep-equal": "^3.1.3"
                }
              },
              "schema-utils": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
                "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
                "dev": true,
                "requires": {
                  "@types/json-schema": "^7.0.9",
                  "ajv": "^8.8.0",
                  "ajv-formats": "^2.1.1",
                  "ajv-keywords": "^5.0.0"
                }
              }
            }
          },
          "webpack-dev-server": {
            "version": "4.7.3",
            "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-4.7.3.tgz",
            "integrity": "sha512-mlxq2AsIw2ag016nixkzUkdyOE8ST2GTy34uKSABp1c4nhjZvH90D5ZRR+UOLSsG4Z3TFahAi72a3ymRtfRm+Q==",
            "dev": true,
            "requires": {
              "@types/bonjour": "^3.5.9",
              "@types/connect-history-api-fallback": "^1.3.5",
              "@types/serve-index": "^1.9.1",
              "@types/sockjs": "^0.3.33",
              "@types/ws": "^8.2.2",
              "ansi-html-community": "^0.0.8",
              "bonjour": "^3.5.0",
              "chokidar": "^3.5.2",
              "colorette": "^2.0.10",
              "compression": "^1.7.4",
              "connect-history-api-fallback": "^1.6.0",
              "default-gateway": "^6.0.3",
              "del": "^6.0.0",
              "express": "^4.17.1",
              "graceful-fs": "^4.2.6",
              "html-entities": "^2.3.2",
              "http-proxy-middleware": "^2.0.0",
              "ipaddr.js": "^2.0.1",
              "open": "^8.0.9",
              "p-retry": "^4.5.0",
              "portfinder": "^1.0.28",
              "schema-utils": "^4.0.0",
              "selfsigned": "^2.0.0",
              "serve-index": "^1.9.1",
              "sockjs": "^0.3.21",
              "spdy": "^4.0.2",
              "strip-ansi": "^7.0.0",
              "webpack-dev-middleware": "^5.3.0",
              "ws": "^8.1.0"
            },
            "dependencies": {
              "ajv-keywords": {
                "version": "5.1.0",
                "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
                "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
                "dev": true,
                "requires": {
                  "fast-deep-equal": "^3.1.3"
                }
              },
              "ansi-regex": {
                "version": "6.0.1",
                "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.0.1.tgz",
                "integrity": "sha512-n5M855fKb2SsfMIiFFoVrABHJC8QtHwVx+mHWP3QcEqBHYienj5dHSgjbxtC0WEZXYt4wcD6zrQElDPhFuZgfA==",
                "dev": true
              },
              "schema-utils": {
                "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.0.0.tgz",
                "integrity": "sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==",
                "dev": true,
                "requires": {
                  "@types/json-schema": "^7.0.9",
                  "ajv": "^8.8.0",
                  "ajv-formats": "^2.1.1",
                  "ajv-keywords": "^5.0.0"
                }
              },
              "strip-ansi": {
                "version": "7.0.1",
                "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.0.1.tgz",
                "integrity": "sha512-cXNxvT8dFNRVfhVME3JAe98mkXDYN2O1l7jmcwMnOslDeESg1rF/OZMtK0nRAhiari1unG5cD4jG3rapUAkLbw==",
                "dev": true,
                "requires": {
                  "ansi-regex": "^6.0.1"
                }
              }
            }
          },
          "webpack-merge": {
            "version": "5.8.0",
            "resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-5.8.0.tgz",
            "integrity": "sha512-/SaI7xY0831XwP6kzuwhKWVKDP9t1QY1h65lAFLbZqMPIuYcD9QAW4u9STIbU9kaJbPBB/geU/gLr1wDjOhQ+Q==",
            "dev": true,
            "requires": {
              "clone-deep": "^4.0.1",
              "wildcard": "^2.0.0"
            }
          },
          "webpack-sources": {
            "version": "3.2.3",
            "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.2.3.tgz",
            "integrity": "sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w==",
            "dev": true
          },
          "webpack-subresource-integrity": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/webpack-subresource-integrity/-/webpack-subresource-integrity-5.1.0.tgz",
            "integrity": "sha512-sacXoX+xd8r4WKsy9MvH/q/vBtEHr86cpImXwyg74pFIpERKt6FmB8cXpeuh0ZLgclOlHI4Wcll7+R5L02xk9Q==",
            "dev": true,
            "requires": {
              "typed-assert": "^1.0.8"
            }
          },
          "websocket-driver": {
            "version": "0.7.4",
            "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.7.4.tgz",
            "integrity": "sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==",
            "dev": true,
            "requires": {
              "http-parser-js": ">=0.5.1",
              "safe-buffer": ">=5.1.0",
              "websocket-extensions": ">=0.1.1"
            }
          },
          "websocket-extensions": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
            "integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==",
            "dev": true
          },
          "which": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
            "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
            "dev": true,
            "requires": {
              "isexe": "^2.0.0"
            }
          },
          "wide-align": {
            "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",
            "integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",
            "dev": true,
            "requires": {
              "string-width": "^1.0.2 || 2 || 3 || 4"
            }
          },
          "wildcard": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.0.tgz",
            "integrity": "sha512-JcKqAHLPxcdb9KM49dufGXn2x3ssnfjbcaQdLlfZsL9rH9wgDQjUtDxbo8NE0F6SFvydeu1VhZe7hZuHsB2/pw==",
            "dev": true
          },
          "wrap-ansi": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
            "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
            "dev": true,
            "requires": {
              "ansi-styles": "^4.0.0",
              "string-width": "^4.1.0",
              "strip-ansi": "^6.0.0"
            },
            "dependencies": {
              "ansi-styles": {
                "version": "4.3.0",
                "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
                "dev": true,
                "requires": {
                  "color-convert": "^2.0.1"
                }
              },
              "color-convert": {
                "version": "2.0.1",
                "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                "dev": true,
                "requires": {
                  "color-name": "~1.1.4"
                }
              },
              "color-name": {
                "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                "dev": true
              }
            }
          },
          "wrappy": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
            "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
            "dev": true
          },
          "ws": {
            "version": "8.11.0",
            "resolved": "https://registry.npmjs.org/ws/-/ws-8.11.0.tgz",
            "integrity": "sha512-HPG3wQd9sNQoT9xHyNCXoDUa+Xw/VevmY9FoHyQ+g+rrMn4j6FB4np7Z0OhdTgjx6MgQLK7jwSy1YecU1+4Asg==",
            "dev": true
          },
          "y18n": {
            "version": "5.0.8",
            "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
            "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
            "dev": true
          },
          "yallist": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
            "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
            "dev": true
          },
          "yaml": {
            "version": "1.10.2",
            "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
            "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
            "dev": true
          },
          "yargs": {
            "version": "17.6.2",
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.6.2.tgz",
            "integrity": "sha512-1/9UrdHjDZc0eOU0HxOHoS78C69UD3JRMvzlJ7S79S2nTaWRA/whGCTV8o9e/N/1Va9YIV7Q4sOxD8VV4pCWOw==",
            "dev": true,
            "requires": {
              "cliui": "^8.0.1",
              "escalade": "^3.1.1",
              "get-caller-file": "^2.0.5",
              "require-directory": "^2.1.1",
              "string-width": "^4.2.3",
              "y18n": "^5.0.5",
              "yargs-parser": "^21.1.1"
            }
          },
          "yargs-parser": {
            "version": "21.1.1",
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
            "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
            "dev": true
          },
          "zone.js": {
            "version": "0.11.8",
            "resolved": "https://registry.npmjs.org/zone.js/-/zone.js-0.11.8.tgz",
            "integrity": "sha512-82bctBg2hKcEJ21humWIkXRlLBBmrc3nN7DFh5LGGhcyycO2S7FN8NmdvlcKaGFDNVL4/9kFLmwmInTavdJERA==",
            "requires": {
              "tslib": "^2.3.0"
            }
          }
        }
      }
      
      
      `
      angular.file("package-lock.json",packageLock)

      let packageJson = `
      {
        "name": "angular-starts",
        "version": "0.0.0",
        "scripts": {
          "ng": "ng",
          "start": "ng serve",
          "build": "ng build",
          "watch": "ng build --watch --configuration development",
          "test": "ng test"
        },
        "private": true,
        "dependencies": {
          "@angular/animations": "~13.3.0",
          "@angular/common": "~13.3.0",
          "@angular/compiler": "~13.3.0",
          "@angular/core": "~13.3.0",
          "@angular/forms": "~13.3.0",
          "@angular/platform-browser": "~13.3.0",
          "@angular/platform-browser-dynamic": "~13.3.0",
          "@angular/router": "~13.3.0",
          "rxjs": "~7.5.0",
          "tslib": "^2.3.0",
          "zone.js": "~0.11.4"
        },
        "devDependencies": {
          "@angular-devkit/build-angular": "~13.3.0",
          "@angular/cli": "~13.3.0",
          "@angular/compiler-cli": "~13.3.0",
          "@types/jasmine": "~3.10.0",
          "@types/node": "^12.11.1",
          "jasmine-core": "~4.0.0",
          "karma": "~6.3.0",
          "karma-chrome-launcher": "~3.1.0",
          "karma-coverage": "~2.1.0",
          "karma-jasmine": "~4.0.0",
          "karma-jasmine-html-reporter": "~1.7.0",
          "typescript": "~4.6.2"
        }
      }
      
      
      `

      angular.file("package.json",packageJson)

      let tsconfigApp = `
      /* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}

      
      `

      angular.file("tsconfig.app.json",tsconfigApp)

      let tsconfig = `
      /* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2017",
    "module": "es2020",
    "lib": [
      "es2020",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

      
      `
      angular.file("tsconfig.json",tsconfig)

      let tsconfigspec = `
      /* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "files": [
    "src/test.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}

      `
      let srcAngularFolder = angular.folder("src")


      let test = `
      // This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

      `
      srcAngularFolder.file("test.ts",test)

      srcAngularFolder.file("styles.css",global_style)

     
      srcAngularFolder.file("polyfills.ts","import 'zone.js';")

      let main = `
      import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

      
      `
      srcAngularFolder.file("main.ts",main)

      let indexo = `
      <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularStarts</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>

      `
      srcAngularFolder.file("index.html",indexo)
      
      let env = srcAngularFolder.folder("environments")

      let env_prod = `
      export const environment = {
        production: true
      };
      
      `
      env.file("environment.prod.ts",env_prod)

      let env_all = `
      export const environment = {
        production: false
      };
      
      
      `
      env.file("environment.ts",env_all)
      
      srcAngularFolder.folder("assets")

       app_folder = srcAngularFolder.folder("app")


      // <router-outlet></router-outlet>
      let initialHtml = `
      <router-outlet></router-outlet>
      `

      app_folder.file("app.component.html",initialHtml)
      
      let appComponent = `
      import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starts';
}

      `
      app_folder.file("app.component.ts",appComponent)

      let appComponentTs = `
      import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'angular-starts'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-starts');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-starts app is running!');
  });
});

      `
      app_folder.file("app.component.spec.ts",appComponentTs)


      app_folder.file("app.component.css","")


      //waiting 1 appRouting that have all pages 
      //waiting 2 appModule.ts that have all component and there pages 

      //components angular 
      angularComponent =  app_folder.folder("components") 
      //pages angular 

      angularPages = app_folder.folder("pages")


    }




    let ch_imports = ""
    let ch_imports_pages = ""
    let text_angular =""
    let ch_imports_component = ""
    if(condition){
      //here we add pages and reserve all unique components
   
      for(let e = 0;e<data.length;e++){
      
   
        let begin_body
        if(data[e].includes("</head>")){
        begin_body = data[e].split("</head>")[1]
        }else{
          begin_body = data[e]
        }
       
     
        let text_without_script = begin_body.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
        //remove css attributes
        // let text_without_css_attributes =  text_without_script.replace(/<([a-z][a-z0-9]*)(?:[^>]*?((?:\s(?:src|href|style)=['\"][^'\"]*['\"]){0,3}))[^>]‌​*?(\/?)>/, '') 
        
      
        let text_without_html_comment = text_without_script.replace(/<!-[\S\s]*?-->/gm, '') 
        .replace(/\/\*[\S\s]*?\*\//gm,'')
        .replace(/^.*?\/\/.*/gm, '$1')
        
   
        let components_begin = text_without_html_comment.match(/\@Begin.+?\@/g) || []
        let components_end = text_without_html_comment.match(/\@End.+?\@/g) || []
       
        
       
        //components between two strings 
  let component_unique_data = []
        if(components_begin.length != 0 && components_end.length != 0){
            
          for(let c=0;c<components_begin.length;c++){
            
            let mySubString = text_without_html_comment.substring(
              text_without_html_comment.lastIndexOf(components_begin[c]) + 1, 
              text_without_html_comment.lastIndexOf(components_end[c])
          );
      
              let begining = components_begin[c].split("@")[1]
            
            let f = {
              component_name:components_begin[c].replace("@Begin","")
              .replace("@",""). // @operation
              replace(/\s+/g, "")
              .replace(/\d+/g, '') //desimal operation
              .replace(/[^\w ]/g, '') //symbols
              .toUpperCase() ,
              conmponent_value:mySubString.replace(begining,"").replaceAll("@",''),
              component_old_value:mySubString
            }
       
            components_data.push(f)
            component_unique_data.push(f)
        
          } 
           text_angular = text_without_html_comment
          for(let compo=0;compo<components_data.length;compo++){
            text_without_html_comment = text_without_html_comment.replaceAll(components_data[compo].component_old_value,
              `<${components_data[compo].component_name} />`) 
              text_without_html_comment = text_without_html_comment.replaceAll(components_end[compo],"")
              text_angular = text_angular.replaceAll(components_data[compo].component_old_value,
                `<app-${components_data[compo].component_name}></app-${components_data[compo].component_name}>`
                )
                text_angular = text_angular.replaceAll(components_end[compo],"")

          
            }
      
          text_without_html_comment =   text_without_html_comment.replaceAll("@","")
          text_angular = text_angular.replaceAll("@","")
         
  
        }
        let fileName = orginalFiles[e].name.split(".")[0] .replace("@",""). // @operation
        replace(/\s+/g, "")
        .replace(/\d+/g, '') //desimal operation
        .replace(/[^\w ]/g, '') //symbols
        .toUpperCase() 

        let pageImport  = ""
      
        for (let i=0;i<component_unique_data.length;i++){
          pageImport+=`import ${component_unique_data[i].component_name} from "../components/${component_unique_data[i].component_name}"`+ "\n"
        }
     
        let text =  await  htmltoJsx(text_without_html_comment)
        //get all pages svg content 
       //for svg 
        let new_data = text.match(/<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/gmi)
     || []
        
       
     if(personName.filter(el => el == "React").length !=0){
    
      let templateReact = `
      import React from "react"
      import "./${fileName}.css"
      ${pageImport}
      const ${fileName} = () =>{
        return (
          <>
          ${await htmltoJsx(text)}
          </> 
        )
    
      }
      export default ${fileName}
      `
  
      
 
      let stylesThinks = data[e].match(/<style>(.*?)</gs) || [] ;
   
      let specific_css = ""
      if(stylesThinks.length !=0){
        for(let s=0;s<stylesThinks.length;s++){
          specific_css += stylesThinks[s].replaceAll("<style>","").replaceAll("<","")
        }
      }
      let expression_links_css = data[e].match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)|| []
    
      expression_links_css =  expression_links_css.filter(el => el.endsWith(".css")) 
      let unique_links = [...new Set(expression_links_css)]
     
      // uniques_file
     let  myArray = unique_links.filter( function( el ) {
        return !uniques_file.includes( el );
      } );
      
      //get all links 
      let  myArrayFinal = myArray.filter( function( el ) {
        return all_captured_css_files.includes( el );
      } );
      for(let my = 0;my<myArrayFinal.length;my++){
        specific_css+= saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data != undefined && saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data
      }
  



      pagesFolder.file( `${fileName}.js` ,templateReact)

      pagesFolder.file(`${fileName}.css`,specific_css)
      
     }

     if(personName.filter(el => el =="Angular").length !=0){

      let p = angularPages.folder(fileName)
      //add 

 
      let new_text_angular = text_angular.replace(/<style>(.*?)</gs,'').replaceAll("/style>","").
      replace(/<link[^>]*[^>]*>/gi,'').replaceAll("</body>","").replaceAll("</html>","").replace(/<meta>(.*?)</gs,'')
    
      p.file(`${fileName}.component.html`,new_text_angular)
   
      let specific_css = ""
   
      let stylesThinks = data[e].match(/<style>(.*?)</gs) || [] ;
   
   
      if(stylesThinks.length !=0){
        for(let s=0;s<stylesThinks.length;s++){
          specific_css += stylesThinks[s].replaceAll("<style>","").replaceAll("<","")
        }
      }
      let expression_links_css = data[e].match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)|| []
    
      expression_links_css =  expression_links_css.filter(el => el.endsWith(".css")) 
      let unique_links = [...new Set(expression_links_css)]
     
      // uniques_file
     let  myArray = unique_links.filter( function( el ) {
        return !uniques_file.includes( el );
      } );
      
      //get all links 
      let  myArrayFinal = myArray.filter( function( el ) {
        return all_captured_css_files.includes( el );
      } );
      for(let my = 0;my<myArrayFinal.length;my++){
        specific_css+= saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data != undefined && saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data
      }
      p.file(`${fileName}.component.css`,specific_css)
  

      //now we add ts and spec ts 
      let templateTs = `
      import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-${fileName}',
 templateUrl: './${fileName}.component.html',
 styleUrls: ['./${fileName}.component.css']
})
export class ${fileName} implements OnInit {

 constructor() { }

 ngOnInit(): void {
 }

}
` 
p.file(`${fileName}.component.ts`,templateTs)


    //spec ts 

    let templateTsSpec = `
    import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ${fileName} } from './${fileName}.component';

describe('${fileName}', () => {
let component: ${fileName};
let fixture: ComponentFixture<${fileName}>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ ${fileName} ]
  })
  .compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(${fileName});
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});

    `
    p.file(`${fileName}.component.spec.ts`,templateTsSpec)



    ch_imports_pages+=  `import {${fileName}} from "./pages/${fileName}/${fileName}.component";` +"\n"

     }
       
      

  

      }
      //we add unique component value by there changes 
      //change the component name if he has the some 

      if(personName.filter(el => el == "React").length !=0){
        for(let cf=0;cf<components_data.length;cf++){
          let templateReact = `
          import react from "react"
          const ${components_data[cf].component_name} = () =>{
            return (
              <>
              ${await htmltoJsx(components_data[cf].conmponent_value.replace(/<style>(.*?)</gs,'').replaceAll("/style>","").
              replace(/<link[^>]*[^>]*>/gi,''))}
              </>
            )
          }
          export default ${components_data[cf].component_name}
  
          `
          componentFolder.file(`${components_data[cf].component_name}.js`,templateReact)
        }
  
        //now entry app.js 
        let ch_import = ""
        let ch_route = ""
        for(let i=0;i<orginalFiles.length;i++){
         let title =orginalFiles[i].name.split(".")[0] .replace("@",""). // @operation
         replace(/\s+/g, "")
         .replace(/\d+/g, '') //desimal operation
         .replace(/[^\w ]/g, '') //symbols
         .toUpperCase()  
          ch_import += `import ${title} from "./pages/${title}"` +  '\n'
          if(i==0){
            ch_route += `<Route exact path='/' element={<${title}/>} />` +  '\n'
          }else{
            ch_route += `<Route exact path='/${title}' element={<${title}/>} />` +  '\n'
          }
        
  
        }
        let App = `
        import {BrowserRouter , Routes , Route} from 'react-router-dom'
        import "./App.css"
       ${ch_import}
  
        export default function App() {
          return (
            <div className="App">
            <BrowserRouter>
            <Routes>
            ${ch_route}
     
            </Routes>
  
            </BrowserRouter>
            </div>
          );
        }
        
        `
        srcFolder.file("App.js",App)
        srcFolder.file("App.css",global_style)
  
      }
    
     

      //angular things how the fuck create it 
      if(personName.filter(el => el == "Angular").length !=0){
        let declaration_component = []
        for(let cf=0;cf<components_data.length;cf++){
     
          let templateAngular = `
              ${components_data[cf].conmponent_value}
          `
         let c =  angularComponent.folder(components_data[cf].component_name)
         c.file(`${components_data[cf].component_name}.component.html`,components_data[cf].conmponent_value.replace(/<style>(.*?)</gs,'').replaceAll("/style>","").
         replace(/<link[^>]*[^>]*>/gi,''))
         c.file(`${components_data[cf].component_name}.component.css`,"")
         declaration_component.push(components_data[cf].component_name)
         //now for the ts and 
         let templateTs = `
         import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-${components_data[cf].component_name}',
    templateUrl: './${components_data[cf].component_name}.component.html',
    styleUrls: ['./${components_data[cf].component_name}.component.css']
  })
  export class ${components_data[cf].component_name} implements OnInit {
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  ` 
        c.file(`${components_data[cf].component_name}.component.ts`,templateTs)
  
        //spec.ts 
        let templateTsSpec = `
        import { ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { ${components_data[cf].component_name} } from './${components_data[cf].component_name}.component';
  
  describe('${components_data[cf].component_name}', () => {
    let component: ${components_data[cf].component_name};
    let fixture: ComponentFixture<${components_data[cf].component_name}>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ${components_data[cf].component_name} ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(${components_data[cf].component_name});
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
        `
        c.file(`${components_data[cf].component_name}.component.spec.ts`,templateTsSpec)
  
        //add some ch imports think 

        ch_imports += `import { ${components_data[cf].component_name} } from './${components_data[cf].component_name}.component';`+  "\n"
  
        }

        //app routing 
        

        let regex = /\{(.*?)\}/g;
        let matchs_regex_pages =  ch_imports_pages.match(regex)
      let begin_router = `
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
        ${ch_imports_pages}
      `
      let middle_import_router  = `
            
      const routes: Routes = [
      `

      let end_router = `
    ];
        
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
      
      `
       let global_middle = ""





      let begin_module =`
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';`

      let declaration = `
      @NgModule({
        declarations: [
          AppComponent,
      `
      
     let end_module = `
     
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
     `






        for (let i=0;i<matchs_regex_pages.length;i++){
       
           let page = matchs_regex_pages[i].replace("{","").replace("}","")
          
            global_middle+= `{path:'${page}',component:${page}},` +"\n"
          
            begin_module += `import ${matchs_regex_pages[i]} from "./pages/${page}/${page}.component"; `
            
          
         
            declaration +=page +",\n"


        }

       
        declaration_component = [...new Set(declaration_component)]
     
        for(let j=0;j<declaration_component.length;j++){
            begin_module += `import {${declaration_component[j]}} from "./components/${declaration_component[j]}/${declaration_component[j]}.component";`+"\n"
            declaration+=declaration_component[j] + ","
         }

        middle_import_router +=global_middle
        let endRouting = begin_router +middle_import_router+end_router

        let final_module = begin_module +declaration+end_module
        app_folder.file("app-routing.module.ts",endRouting)
        app_folder.file("app.module.ts",final_module)


        

      }
     





      localStorage.removeItem(`${projectCode}`)
      localStorage.removeItem(`CSS${projectCode}`)
      //to download all 
      zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, `${projectCode}.zip`);
    });


    }else{
  
      for(let e = 0;e<data.length;e++){
   
        
        let begin_body
        if(data[e].file_value.includes("</head>")){
        begin_body = data[e].file_value.split("</head>")[1]
        }else{
          begin_body = data[e].file_value
        }

      

        //remove css attributes
        
      
      let component_unique_data = []
        
   
        let components_begin = begin_body.match(/\@Begin.+?\@/g) || []
        let components_end = begin_body.match(/\@End.+?\@/g) || []
     
       
        //components between two strings 
    
        if(components_begin.length != 0 && components_end.length != 0){
            
          for(let c=0;c<components_begin.length;c++){
       
            let mySubString = begin_body.substring(
              begin_body.lastIndexOf(components_begin[c]) + 1, 
              begin_body.lastIndexOf(components_end[c])
          );
      
              let begining = components_begin[c].split("@")[1]
            
            let f = {
              component_name:components_begin[c].replace("@Begin","")
              .replace("@",""). // @operation
              replace(/\s+/g, "")
              .replace(/\d+/g, '') //desimal operation
              .replace(/[^\w ]/g, '') //symbols
              .toUpperCase() ,
              conmponent_value:mySubString.replace(begining,"").replaceAll("@",''),
              component_old_value:mySubString
            }
            
            components_data.push(f)
            component_unique_data.push(f)
          } 
        text_angular = begin_body
          for(let compo=0;compo<components_data.length;compo++){
            begin_body = begin_body.replaceAll(components_data[compo].component_old_value,
              `<${components_data[compo].component_name} />`) 
              begin_body = begin_body.replaceAll(components_end[compo],"")
              text_angular = text_angular.replaceAll(components_data[compo].component_old_value,
                `<app-${components_data[compo].component_name} ></app-${components_data[compo].component_name}  >`) 
                text_angular = text_angular.replaceAll(components_end[compo],"")
          }
          begin_body =   begin_body.replaceAll("@","")
          text_angular  = text_angular.replaceAll("@","")
          
          
  
        }
        let pageImport  = ""
      
        for (let i=0;i<component_unique_data.length;i++){
          pageImport+=`import ${component_unique_data[i].component_name} from "../components/${component_unique_data[i].component_name}"`+ "\n"
        }

        
        let text = await htmltoJsx(begin_body.replace(/<style>(.*?)</gs,'').replaceAll("/style>","").
        replace(/<link[^>]*[^>]*>/gi,'')).replace(/<meta>(.*?)</gs,'')
        let fileName = data[e].file_name.split(".")[0] .replace("@",""). // @operation
        replace(/\s+/g, "")
        .replace(/\d+/g, '') //desimal operation
        .replace(/[^\w ]/g, '') //symbols
        .toUpperCase() 

        



        if(personName.filter(el => el == "React").length !=0){
          let templateReact = `
          import React from "react"
          import "./${fileName}.css"
          ${pageImport}
          const ${fileName} = () =>{
            return (
              <>
              ${text.replaceAll("</body>","").replaceAll("</html>","").replace(/<meta>(.*?)</gs,'')}
              </>
            )
        
          }
          export default ${fileName}
          `
          let specific_css = ""
      
          let stylesThinks = data[e].file_value.match(/<style>(.*?)</gs) || [] ;
       
      
          if(stylesThinks.length !=0){
            for(let s=0;s<stylesThinks.length;s++){
              specific_css += stylesThinks[s].replaceAll("<style>","").replaceAll("<","")
            }
          }
          let expression_links_css =data[e].file_value.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)|| []
        
          expression_links_css =  expression_links_css.filter(el => el.endsWith(".css")) 
          let unique_links = [...new Set(expression_links_css)]
         
          // uniques_file
         let  myArray = unique_links.filter( function( el ) {
            return !uniques_file.includes( el );
          } );
          
          //get all links 
          let  myArrayFinal = myArray.filter( function( el ) {
            return all_captured_css_files.includes( el );
          } );
          for(let my = 0;my<myArrayFinal.length;my++){
            specific_css+= saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data != undefined && saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data
          }
          pagesFolder.file( `${fileName}.css`,specific_css)
          pagesFolder.file( `${fileName}.js` ,templateReact)
         }


         if(personName.filter(el => el =="Angular").length !=0){
    
          let p = angularPages.folder(fileName)
          let specific_css = ""
   
          let stylesThinks = data[e].file_value.match(/<style>(.*?)</gs) || [] ;
       
       
          if(stylesThinks.length !=0){
            for(let s=0;s<stylesThinks.length;s++){
              specific_css += stylesThinks[s].replaceAll("<style>","").replaceAll("<","")
            }
          }
          let expression_links_css = data[e].file_value.match(/(?<==")[a-zA-Z0-9.=\-,\/ ]+/gm)|| []
        
          expression_links_css =  expression_links_css.filter(el => el.endsWith(".css")) 
          let unique_links = [...new Set(expression_links_css)]
         
          // uniques_file
         let  myArray = unique_links.filter( function( el ) {
            return !uniques_file.includes( el );
          } );
          
          //get all links 
          let  myArrayFinal = myArray.filter( function( el ) {
            return all_captured_css_files.includes( el );
          } );
          for(let my = 0;my<myArrayFinal.length;my++){
            specific_css+= saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data != undefined && saveDatacss.filter(el => el.file_name ==myArrayFinal[my])[0].file_data
          }
       let new_text_angular = text_angular.replace(/<style>(.*?)</gs,'').replaceAll("/style>","").
       replace(/<link[^>]*[^>]*>/gi,'').replace(/<meta>(.*?)</gs,'')
      
          p.file(`${fileName}.component.html`,new_text_angular)
          p.file(`${fileName}.component.css`,specific_css)
    
          //now we add ts and spec ts 
          let templateTs = `
          import { Component, OnInit } from '@angular/core';
    
    @Component({
     selector: 'app-${fileName}',
     templateUrl: './${fileName}.component.html',
     styleUrls: ['./${fileName}.component.css']
    })
    export class ${fileName} implements OnInit {
    
     constructor() { }
    
     ngOnInit(): void {
     }
    
    }
    ` 
    p.file(`${fileName}.component.ts`,templateTs)
    
    
        //spec ts 
    
        let templateTsSpec = `
        import { ComponentFixture, TestBed } from '@angular/core/testing';
    
    import { ${fileName} } from './${fileName}.component';
    
    describe('${fileName}', () => {
    let component: ${fileName};
    let fixture: ComponentFixture<${fileName}>;
    
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ${fileName} ]
      })
      .compileComponents();
    });
    
    beforeEach(() => {
      fixture = TestBed.createComponent(${fileName});
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    });
    
        `
        p.file(`${fileName}.component.spec.ts`,templateTsSpec)
    
    
    
        ch_imports_pages+=  `import {${fileName}} from "./pages/${fileName}/${fileName}.component";` +"\n"
    
         }
     
      }

      for(let cf=0;cf<components_data.length;cf++){
     
        let templateReact = `
        import react from "react"
        const ${components_data[cf].component_name} = () =>{
          return (
            <>
            ${await htmltoJsx(components_data[cf].conmponent_value)}
            </>
          )
        }
        export default ${components_data[cf].component_name}

        `
        componentFolder.file(`${components_data[cf].component_name}.js`,templateReact)
      }

      if(personName.filter(el => el == "React").length !=0){
        for(let cf=0;cf<components_data.length;cf++){
     
          let templateReact = `
          import react from "react"
          const ${components_data[cf].component_name} = () =>{
            return (
              <>
              ${await htmltoJsx(components_data[cf].conmponent_value.replace(/<style>(.*?)</gs,'').replaceAll("/style>","").
              replace(/<link[^>]*[^>]*>/gi,''))}
              </>
            )
          }
          export default ${components_data[cf].component_name}
  
          `
          componentFolder.file(`${components_data[cf].component_name}.js`,templateReact)
        }
  
        //now entry app.js 
        let ch_import = ""
        let ch_route = ""
        for(let i=0;i<data.length;i++){
         let title =data[i].file_name.split(".")[0] .replace("@",""). // @operation
         replace(/\s+/g, "")
         .replace(/\d+/g, '') //desimal operation
         .replace(/[^\w ]/g, '') //symbols
         .toUpperCase()  
          ch_import += `import ${title} from "./pages/${title}"` +  '\n'
          if(i==0){
            ch_route += `<Route exact path='/' element={<${title}/>} />` +  '\n'
          }else{
            ch_route += `<Route exact path='/${title}' element={<${title}/>} />` +  '\n'
          }
        
  
        }
        let App = `
        import {BrowserRouter , Routes , Route} from 'react-router-dom'
       ${ch_import}
  
        export default function App() {
          return (
            <div className="App">
            <BrowserRouter>
            <Routes>
            ${ch_route}
     
            </Routes>
  
            </BrowserRouter>
            </div>
          );
        }
        
        `
        srcFolder.file("App.js",App)
        srcFolder.file("App.css",global_style)
      }



       //angular things how the fuck create it 
       if(personName.filter(el => el == "Angular").length !=0){
        let declaration_component = []
        for(let cf=0;cf<components_data.length;cf++){
     
          let templateAngular = `
              ${components_data[cf].conmponent_value}
          `
         let c =  angularComponent.folder(components_data[cf].component_name)
         c.file(`${components_data[cf].component_name}.component.html`,components_data[cf].conmponent_value.replace(/<style>(.*?)</gs,'').replaceAll("/style>","").
         replace(/<link[^>]*[^>]*>/gi,''))
         c.file(`${components_data[cf].component_name}.component.css`,"")
         declaration_component.push(components_data[cf].component_name)
         //now for the ts and 
         let templateTs = `
         import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-${components_data[cf].component_name}',
    templateUrl: './${components_data[cf].component_name}.component.html',
    styleUrls: ['./${components_data[cf].component_name}.component.css']
  })
  export class ${components_data[cf].component_name} implements OnInit {
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  ` 
        c.file(`${components_data[cf].component_name}.component.ts`,templateTs)
  
        //spec.ts 
        let templateTsSpec = `
        import { ComponentFixture, TestBed } from '@angular/core/testing';
  
  import { ${components_data[cf].component_name} } from './${components_data[cf].component_name}.component';
  
  describe('${components_data[cf].component_name}', () => {
    let component: ${components_data[cf].component_name};
    let fixture: ComponentFixture<${components_data[cf].component_name}>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ${components_data[cf].component_name} ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(${components_data[cf].component_name});
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
        `
        c.file(`${components_data[cf].component_name}.component.spec.ts`,templateTsSpec)
  
        //add some ch imports think 

        ch_imports += `import { ${components_data[cf].component_name} } from './${components_data[cf].component_name}.component';`+  "\n"
  
        }

        //app routing 
        

        let regex = /\{(.*?)\}/g;
        let matchs_regex_pages =  ch_imports_pages.match(regex)
      let begin_router = `
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
        ${ch_imports_pages}
      `
      let middle_import_router  = `
            
      const routes: Routes = [
      `

      let end_router = `
    ];
        
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
      
      `
       let global_middle = ""





      let begin_module =`
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';
      
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';`

      let declaration = `
      @NgModule({
        declarations: [
          AppComponent,
      `
      
     let end_module = `
     
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
     `






        for (let i=0;i<matchs_regex_pages.length;i++){
       
           let page = matchs_regex_pages[i].replace("{","").replace("}","")
          
            global_middle+= `{path:'${page}',component:${page}},` +"\n"
          
            begin_module += `import ${matchs_regex_pages[i]} from "./pages/${page}/${page}.component"; `
            
            
           
          
            
            declaration +=page +",\n"


        }
        declaration_component = [...new Set(declaration_component)]
        for(let j=0;j<declaration_component.length;j++){
            begin_module += `import {${declaration_component[j]}} from "./components/${declaration_component[j]}/${declaration_component[j]}.component";`+"\n"
            declaration+=declaration_component[j] + ","
         }

        middle_import_router +=global_middle
        let endRouting = begin_router +middle_import_router+end_router

        let final_module = begin_module +declaration+end_module
        app_folder.file("app-routing.module.ts",endRouting)
        app_folder.file("app.module.ts",final_module)


        

      }
      localStorage.removeItem("BeginingProcessOfConverting")
      localStorage.removeItem(`${projectCode}`)
      localStorage.removeItem(`CSS${projectCode}`)
        zip.generateAsync({type:"blob"}).then(function(content) {
          // see FileSaver.js
          FileSaver.saveAs(content, `${projectCode}.zip`);
      });

    }

  }
  useEffect(()=>{
    if(all_errors_captured.length == 0 ){

      beginOfTheProcess(JSON.parse(localStorage.getItem(projectCode),false))
     
    }
    else if(all_errors_captured.includes("hi")){
     
      beginOfTheProcess(JSON.parse(localStorage.getItem(projectCode)),true)
    }
},[all_errors_captured.length ])
let [code,setCode] = React.useState()
const [open, setOpen] = React.useState(false);
const [error,setError] = React.useState("")
let [file_updated,setFile] = useState("")

const handleClickOpen = (file) => {
  setOpen(true);
  let result = all_errors_captured.filter(el => el.file == file)[0]
  
  setError(result.erroe)
  setCode(result.original_code)

  setFile(result.file)

};
let [fine,setFine] = useState("")
const onChangeCode = React.useCallback((file_updated,value) => {
  //some function to reset the error
  let components_begin = value.match(/\@Begin.+?\@/g) || []
  let components_end = value.match(/\@End.+?\@/g) || []
  //component_ name exist in other table or not 
  let component_original_begin_names = []
  let component_original_end_names = []
  for(let cb=0;cb<components_begin.length;cb++){
    component_original_begin_names.push(components_begin[cb].replaceAll("@","").replace("Begin","").replaceAll(' ',''))
  }
  for(let ce=0;ce<components_end.length;ce++){
    component_original_end_names.push(components_end[ce].replaceAll("@","").replace("End","").replaceAll(' ',''))
  }
  let errors = []
  if(component_original_begin_names.length>component_original_end_names.length){
    for(let i=0;i<component_original_begin_names.length;i++){
      if(component_original_end_names.filter(el => el ==component_original_begin_names[i] ).length==0){
          errors.push(`missing end of ${component_original_begin_names[i]}`)
      }
    }
    setError(errors[0])
  }
  if(component_original_end_names .length>component_original_begin_names.length){
   
    for(let i=0;i<component_original_end_names.length;i++){
      if(component_original_begin_names.filter(el => el ==component_original_end_names[i] ).length==0){
          errors.push(`missing Begin of ${component_original_end_names[i]}`)
      }
    }
    setError(errors[0])
  }
  if(errors.length == 0){
    setError("All is Fine")
  }


  if(errors.length == 0){
    if(localStorage.getItem(projectCode)){
      let  status = JSON.parse(localStorage.getItem(projectCode))
      //file doesnt exist
   
      if(status.filter(el => el.file_name == file_updated).length==0 ){
      
          let f = {
            file_name:file_updated,
            file_value:value,
            file_converted:""
          }
          status.push(f)
         
          localStorage.setItem(projectCode,JSON.stringify(status))
          setFine(file_updated)
       
      }else{
       let index =  status.findIndex(i => i.file_name === file_updated)
       if(index!=-1){
            status[index].file_value = value
            localStorage.setItem(projectCode,JSON.stringify(status))
            setFine(file_updated)
           
       }
        
      }
      
     }
  }

  
}, []);

const handleClose = () => {


  let itemToBeRemoved = all_errors_captured.filter(e => e.file == fine)[0]
  let newError =  all_errors_captured.splice(all_errors_captured.findIndex(a => a.file === itemToBeRemoved.file) , 1)
  
  setOpen(false);
  
};






    return (
        <>
        <Navbar  firstText={t("happyFight")} secondText={t("dontForgetToSmile")}/>
        <div className="" id="ALl">
     
   


<div class="container" >
   <div class="wrapper">
   {t("converterVersion")}




<>
<div  
>
  <p>{t("projectCode")}</p>
  <p> {projectCode}</p>

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
      <Documentation type="htmlToOthers" />
  <FormControl fullWidth style={{marginTop:"3%"}}>
        <InputLabel id="demo-multiple-chip-label">{t("toProgrammingLanguage")}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={t("toProgrammingLanguage")} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


    



     </div>
   

     </div>

    

   </Box>




{error_viewer && <>
  {all_errors_captured.map(el=>(
 <Button variant="outlined" onClick={() =>handleClickOpen(el.file)}>
    {el.file}
</Button>
      ))}
     
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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div"
            
            >
            {error}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <CodeMirror
        value={code}
        height="700px"
        theme="dark"
   
        onChange={(value) =>onChangeCode(file_updated,value)}
      />
      </Dialog>
</>  
}
  
  

</div>
</>






  
   </div>

   <Footer />   
 </div>

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
    )
}

export default HtmlToReact








