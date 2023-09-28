import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
const  PrioritySelectElement =({ onFormSubmit, values = "0", field_name })=> {
  const [priority, setPriority] = React.useState(values);

  const handleChange = (event) => {
    setPriority(event.target.value);
    onFormSubmit(event.target.value, field_name);
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
          <Box >
      <FormControl>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={priority}
          label="Priority"
          onChange={handleChange}
        >
          <MenuItem value="0">No changes yet</MenuItem>
          <MenuItem value="1">Applicate</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </>
      )
      }
    </>
  
  );
}

export default React.memo(PrioritySelectElement)