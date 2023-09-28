import React,{useState,useEffect} from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Skeleton from '@mui/material/Skeleton';
const  AlignElement = ({ onFormSubmit,values,field_name}) => {
  const [alignment, setAlignment] = React.useState(values);
 
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    onFormSubmit(newAlignment,field_name)
  };
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
            <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
        </>)}

    </>
    
  );
}
export default React.memo(AlignElement)
{/* <AlignElement 
             values={item.text_align}
            onFormSubmit={handleFormSubmit}
            field_name={"text_align"}
           /> */}
         
