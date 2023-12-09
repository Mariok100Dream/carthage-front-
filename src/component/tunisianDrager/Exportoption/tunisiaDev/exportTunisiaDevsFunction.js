import axios from "axios"
import LZString from 'lz-string'



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

export const tunisiaDevsString = async(data,password,component_name) =>{
    const responseHash = await axios.post("http://62.72.36.199:5000/api/hash-password",{
        password
      })
   

    // To create a cipher
//To decipher, you need to create a decipher and use it:
// const myDecipher = decipher('mySecretSalt')
// console.log(myDecipher("7c606d287b6d6b7a6d7c287b7c7a61666f"))
    var encrypted = Encrypt("TunisiaDevsv1",JSON.stringify(data))
    //Cipher it with password 

    let encryption_with_password = Encrypt(password,encrypted)
   

    let compresse_string = LZString.compressToUTF16(encryption_with_password)
   
    let final_compressed = responseHash?.passworHash + compresse_string
 

    return final_compressed
}




//60

export const checkIfPasswordIsCorrect =async (passwordReserved,passwordEntered) =>{
    const responseHash = await axios.post("http://62.72.36.199:5000/api/comparing-password",{
        passwordReserved,passwordEntered
      })
   
 
    return responseHash?.comparing

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







