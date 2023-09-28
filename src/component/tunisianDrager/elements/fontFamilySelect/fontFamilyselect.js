import React,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Skeleton from '@mui/material/Skeleton';

const  FontFamilySelect = ({ onFormSubmit,values,field_name}) => {
const font_familys = [
'Helvetica, (sans-serif)',
'Arial, (sans-serif)',
'Arial Black ,(sans-serif)',
  'Verdana (sans-serif)',
  'Tahoma, (sans-serif)',
 "Trebuchet MS,(sans-serif)",
 'Impact, (sans-serif)',

'Gill Sans, (sans-serif)',
'Times New Roman, (serif)', 
 "Georgia, serif", 
   'Palatino, (serif)', 

'Baskerville ,(serif)',
'Andalé Mono ,(monospace)',
 "Courier ,(monospace)",
 'Lucida ,(monospace)',

'Monaco, (monospace)',
'Bradley Hand, (cursive)',
"Brush Script MT, (cursive)",
'Luminari, (fantasy)',

'Comic Sans MS, (cursive)',
"'Poppins', sans-serif",
   
  ];
  let [font_family,setFontFamily] = useState(values)
 
  let handleChangeAutoComplete = (e,value) =>{
    setFontFamily(value)

    onFormSubmit(value,field_name)
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
         <Autocomplete
      disablePortal
      id="combo-box-demo"
      name="font_family"
      value={font_family}
      options={font_familys}
      onChange={handleChangeAutoComplete}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField 
        {...params} label={font_family} />}
    />
        </>
      )}
    </>
   
  );
}


export default React.memo(FontFamilySelect)


