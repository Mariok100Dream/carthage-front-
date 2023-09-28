
import html2canvas from "html2canvas";
import QRCode from 'qrcode';
import bcrypt from "bcryptjs-react";
import qrcodeParser from "qrcode-parser";
//generating base64  from html  string
//just the image of component  
//return a string to download in jszip 
export const htmlStringBase64Image = async (htmlString) => {
    let iframe = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    let iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    iframedoc.body.style.width = 1300
   
    iframedoc.body.innerHTML = htmlString.replace("NaN","");
 
    let canvas = await html2canvas(iframedoc.body, {
    
    });
    
   
    let imgData = canvas.toDataURL("image/png");
   
    document.body.removeChild(iframe);
 
    return imgData
  };

//generating image of qr code and component
export const generateQrCodefromPassword = async(password) =>{
    try {
        var salt = bcrypt.genSaltSync(10);
        var passworHash = bcrypt.hashSync(password, salt);
        const response = await QRCode.toDataURL(passworHash);
        return response

    }catch (error) {
    console.log(error);
  }
}


//save base64 move 
export const htmlStringBase64ImageSecure = async (htmlString) => {
    let iframe = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    document.body.appendChild(iframe);
    let iframedoc = iframe.contentDocument || iframe.contentWindow.document;
    iframedoc.body.style.width = 1300
   
    iframedoc.body.innerHTML = htmlString.replace("NaN","");
 
    let canvas = await html2canvas(iframedoc.body, {
    
    });
    
   
    let imgData = canvas.toDataURL("image/png");
   
    document.body.removeChild(iframe);
 
    return imgData
  };

//convert base64 link to a string 
export const base64ToString = async(base64Url)=>{
    try{
        const password  = qrcodeParser(base64Url);
        return password
    }catch(err){
      //invalid base64string 
      return false 
    }
}












