import React,{useState,useEffect} from "react" 
import TextField from '@mui/material/TextField';
import Skeleton from '@mui/material/Skeleton';
const InputElementTypeColor = ({ onFormSubmit,values,field_name}) =>{
    let [text_content,setTextContent] = useState("#ffff")
 
    let handleChangeInputElement = (e) =>{
        setTextContent(e.target.value)
        onFormSubmit(e.target.value,field_name)
    }
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Some expensive operation
        setTextContent(values)
        setLoading(false);
      }, [values]);
    return ( 
        <>
         {loading ? (
            <>
       <Skeleton animation="wave" />
       <Skeleton animation="wave" />

        </>
      ) : (
        <>
          {/* Render your actual component content here */}
          <TextField id="outlined-basic"
           label="Outlined"
         fullWidth={true}
           type="color"
           value={text_content}
           name="text_content"
           onChange={handleChangeInputElement}
            variant="outlined" />
        </>
      )}
      
        </>
    )
}

export default React.memo(InputElementTypeColor)