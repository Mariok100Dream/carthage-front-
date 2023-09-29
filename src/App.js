import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.light.css';
import React,{useEffect,Suspense, lazy } from 'react';
import './App.css';
import Uploader from "./component/Uploader"
import ReactGA from "react-ga4";

 import {
  BrowserRouter as Router,
  Route, Routes 
  
} from "react-router-dom";

import HtmlToReact from "./component/HtmlToReact"
import FormGenerator from "./component/CodeGenerator"
import CssExtractor from "./component/fightMode/CssExtractor"
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
const Drager = React.lazy(() => import('./component/tunisianDrager/Dragger'));
const ViewComponent = React.lazy(() => import('./component/tunisianDrager/view component/ViewComponent'));
function App() {

  useEffect(()=>{
    ReactGA.initialize("G-KGB38DBCSB");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  })

  useEffect(()=>{
    localStorage.clear()
  },[])

  return (

 <>
   <Suspense fallback={<div>𐤒𐤓𐤕𐤟𐤇𐤃𐤔𐤕...</div>}>
   <Routes>
<Route path="/" element={<Uploader />}/>
<Route path="/Converter" element={<HtmlToReact />} />

<Route path="/CssExtractor" element={<CssExtractor/>} />
<Route path="/Drager" element={<Drager/>} />
<Route path="/view_project" element ={<ViewComponent />}/>
</Routes>
   </Suspense>
 {/* <Uploader /> */}


 </>
  );
}

export default App;
