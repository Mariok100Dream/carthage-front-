import JSZip from "jszip"
import  FileSaver from 'file-saver' 
import {tunisiaDevsString} from "../Exportoption/tunisiaDev/exportTunisiaDevsFunction"
export const handleDownload = async(history,password,component_name) =>{
    // Convert canvas to dataURL and log to console

    let return_of_string = tunisiaDevsString(history,password,component_name) 
    let zip = new JSZip();

     zip.file(`${component_name}.tunisiadevs.txt`,return_of_string)

     zip.generateAsync({type:"blob"}).then(function(content) {
      // see FileSaver.js
      FileSaver.saveAs(content, `${component_name}.zip`);
  });
   
}
