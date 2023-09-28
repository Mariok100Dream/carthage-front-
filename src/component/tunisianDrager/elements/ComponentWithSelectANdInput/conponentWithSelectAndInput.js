import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Skeleton from '@mui/material/Skeleton';
const ComponentwithSelectAndInput = ({ onFormSubmit, value, field_name }) => {
  const [unity, setUnity] = React.useState("px");
  const [value_input, setValueInput] = useState(value);
  let [value_label, setValueLabel] = useState(value);

  const handleChangeUnity = (event) => {
    setUnity(event.target.value);
  };

  let handleChange = (value_change) => {
    setValueInput(value_change);
    onFormSubmit(`${value_change}${unity}`, field_name);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (value.includes("%")) {
      setUnity("%");
      setValueInput(value.replace("%", ""));
      setValueLabel(value.replace("%", ""));
    } else if (value.includes("px")) {
      setUnity("px");
      setValueInput(value.replace("px", ""));
      setValueLabel(value.replace("px", ""));
    } else if (value.includes("em")) {
      setUnity("em");
      setValueInput(value.replace("em", ""));
      setValueLabel(value.replace("em", ""));
    } else if (value.includes("rem")) {
      setUnity("rem");
      setValueInput(value.replace("rem", ""));
      setValueLabel(value.replace("rem", ""));
    }
    setLoading(false)
  }, [value]);

  return (
    <>
       {loading ? (
            <>
       <Skeleton animation="wave" />
       <Skeleton animation="wave" />

        </>
      ) : (
        <>
        <div style={{ display: "flex" }}>
        <Box >
          <FormControl >
            <InputLabel id="demo-simple-select-label">unity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={unity}
              label="unity"
              onChange={handleChangeUnity}
            >
              <MenuItem value="px">px</MenuItem>
              <MenuItem value="%">%</MenuItem>
              <MenuItem value="em">em</MenuItem>
              <MenuItem value="rem">rem</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            name="value_input"
            value={value_input}
            onChange={(e) => handleChange(e.target.value)}
            id="outlined-basic"
           
            variant="outlined"
          />
        </Box>
      </div>
        </>
      )}
      
    </>
  );
};

export default  React.memo(ComponentwithSelectAndInput)
