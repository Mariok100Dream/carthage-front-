export const Minifier = (text) =>{
var str =  text.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g,"") ;
    
str =  str.replace(/\s{1,}/g,' ')
                  .replace(/\{\s{1,}/g,"{")
                  .replace(/\}\s{1,}/g,"}")
                  .replace(/\;\s{1,}/g,";")
                  .replace(/\/\*\s{1,}/g,"/*")
                  .replace(/\*\/\s{1,}/g,"*/");
  return str                
}

