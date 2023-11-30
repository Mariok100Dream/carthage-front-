import bcrypt from "bcryptjs-react";
import LZString from 'lz-string'
import {Templates} from "../../templates"
import { v4 as uuidv4 } from 'uuid';



const Encrypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  
    return text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
  };
  
  const decrypt = (salt, encoded) => {
   
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded.match(/.{1,2}/g).map((hex) => parseInt(hex, 16)).map(applySaltToChar).map((charCode) => String.fromCharCode(charCode)).join("");
  };

export const tunisiaDevsString = (data,password,component_name) =>{
    var salt = bcrypt.genSaltSync(10);
    var newPassword = bcrypt.hashSync(password, salt);
    
   

    // To create a cipher
//To decipher, you need to create a decipher and use it:
// const myDecipher = decipher('mySecretSalt')
// console.log(myDecipher("7c606d287b6d6b7a6d7c287b7c7a61666f"))
    var encrypted = Encrypt("TunisiaDevsv1",JSON.stringify(data))
    //Cipher it with password 

    let encryption_with_password = Encrypt(password,encrypted)
   

    let compresse_string = LZString.compressToUTF16(encryption_with_password)
   
    let final_compressed = newPassword + compresse_string
 

    return final_compressed
}




//60

export const checkIfPasswordIsCorrect =async (passwordReserved,passwordEntered) =>{

    var checker_password = await  bcrypt.compareSync(passwordEntered,passwordReserved);

    return checker_password

}

export const decryptString =  (string,password)=>{
  
    //decompress the string 
    let compresse_string =  LZString.decompressFromUTF16(string)
    //decipher first Step 
    let final_decipher = decrypt(password,compresse_string)
    let Text = 'TunisiaDevsv1' 
    let desicpher_server = JSON.parse(decrypt(Text,final_decipher)) 
     //decipher with password 


   
    return desicpher_server

}







