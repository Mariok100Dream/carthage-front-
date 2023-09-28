let errors= []
//basic error
if(originalValues.length == 0){
  return toast.error("No files Uploader")
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
  console.log("links",expression_links_css,orginalFiles[e] )
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
  console.log("styles thinks",stylesThinks)
  if(stylesThinks.length !=0){
    for(let st = 0;st<stylesThinks.length;st++){
      let stylo = {
        file_name:orginalFiles[st].name,
        file_data:stylesThinks[st].replaceAll("<style>","").replaceAll("<","")
      }
      style_data.push(stylo)
    }
  }

  console.log("style link ",style_data)



  ///  /\sstyle="[a-zA-Z0-9:%#';!\.\s\(\)\-\,]*"/g; regex format to get all style in an element



  //link 




  let text_without_script = begin_body.replace(/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/g, "")
  //remove css attributes
  let text_without_css_attributes =  text_without_script.replace(/<([a-z][a-z0-9]*)(?:[^>]*?((?:\s(?:src|href|style)=['\"][^'\"]*['\"]){0,3}))[^>]‌​*?(\/?)>/, '') 
  

  let text_without_html_comment = text_without_css_attributes.replace(/<!-[\S\s]*?-->/gm, '') 
  .replace(/\/\*[\S\s]*?\*\//gm,'')
  .replace(/^.*?\/\/.*/gm, '')
  

  console.log("text withour html ",text_without_html_comment)
  const regex = /(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/gmi;
  //get class for evrey file html 

  let m;
  let class_name = []
  while ((m = regex.exec(text_without_html_comment)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        if(groupIndex==1){
            class_name.push(match.trim().split(" "))
           
        }
       
    });
}

    //make a global css 










    let global_css_string = ""
    for(let c = 0 ;c<css.length;c++){
        global_css_string+=css[c].file_data
    } 
    let all_css_unique = global_css_string.match(/\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*\{[^\}]*\}/gm)
  
    //css used class 
 





      var newArr = [];


      // (?:id)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]




      //the id the nex step 
    // let all_id = text_without_html_comment.match(/(?:id)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/gm)
    // console.log("all id = ",all_id)

      

for(var i = 0; i < class_name.length; i++)
{
newArr = newArr.concat(class_name[i]);
}


var unique = [...new Set(newArr)]


//we view two categoriethe @media and without @media 
let with_media_tag =  global_css_string.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+[^\}]+\}/g)
// console.log(with_media_tag)


for(let wi=0;wi<with_media_tag.length;wi++){

global_css_string= global_css_string.replace(with_media_tag[wi],"")
}


let array = global_css_string.split("}")



let class_without_media_tag = ""


for(let u =0;u<unique.length;u++){
let fi = array.filter(el => el.includes(`.${unique[u]}`))

if(fi.length!=0){
  if(fi.filter(el => el.includes("@media")).length==0){
    for(let f=0;f<fi.length;f++){
      class_without_media_tag+=fi[f] + "}"

      
    }
  }

}

}

console.log(class_without_media_tag)
 
// let ch_media = ""
//     for(let wm =0;wm<with_media_tag.length;wm++){
//         let first_media = with_media_tag[wm].split("{")[0]
//         let ch = with_media_tag[wm].replace(first_media,"")
//         console.log("ch",ch)
//         let array_media = ch.match(/\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*\{[^\}]*\}/gm)
//         console.log(array_media)
 
//     }

// /\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*\s*\{[^\}]*\}/gm  get all .class things
}