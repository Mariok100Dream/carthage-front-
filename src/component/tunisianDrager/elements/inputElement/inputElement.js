import React,{useState,useEffect} from "react" 
import Skeleton from '@mui/material/Skeleton';
import OutlinedInput from '@mui/material/OutlinedInput';
const InputElement = ({ onFormSubmit,values,field_name}) =>{
    let [text_content,setTextContent] = useState(values)
    let handleChangeInputElement = (e) =>{
        setTextContent(e.target.value)
        onFormSubmit(e.target.value,field_name)
        
    }

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Some expensive operation
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
           <OutlinedInput id="outlined-basic"
           label="Outlined"
         
           value={text_content}
           name="text_content"
           onChange={handleChangeInputElement}
            variant="outlined"
           
            />
        </>)}
       
        </>
    )
}

export default React.memo(InputElement)