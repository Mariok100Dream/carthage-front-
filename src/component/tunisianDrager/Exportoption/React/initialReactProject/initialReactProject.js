
export const indexHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
       $jqueryreactappImport 
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  
  </body>
</html>



`
export const callJquey = `
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

`

export const packageJson = `
{
    "name": "owlcarouselinreact",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1",
      "bootstrap": "^5.2.3",
      "react-bootstrap": "^2.7.4",
      $packageJsonLiberyCall
      "web-vitals": "^2.1.4"
    
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }
  
`

export const teamPackageJson = `

"react-owl-carousel": "^2.3.3",
`

export const IndexjsCall = `
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


`

export const boostrapIndexJSCall = `
import 'bootstrap/dist/css/bootstrap.min.css';
`

export const SimpleComponentcall = `
import React from "react"
import "./$component_name.css"
$imports_for_images
const $component_name = () => {
    return (
        <>
        $data_html  
        </>  
    )
}
export default $component_name
` 

export const liberysCallComponent = `
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

`

export const teamSliderCall = `
import React from "react"
import "./$component_name.css"
$owlCarouselLiberyCall
const $component_name = () => {
    $option_carousel
    return (
        <>
        $before_carousel_call 
        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
        $data_html  
        </OwlCarousel>
       
        </>  
    )
}
export default $component_name
`

export const appJSCall = `
    import React from "react"
    import $component_name from "./components/$component_name/$component_name"
    
    const App = () =>{
        return (
            <>
            <$component_name />
            </>
        )
    }
    export default $component_name
`

