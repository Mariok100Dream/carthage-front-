import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Skeleton from '@mui/material/Skeleton';
const BorderElement = ({ onFormSubmit, value, field_name }) => {
  const [unity, setUnity] = React.useState("px");
  const [value_input, setValueInput] = useState(value);
  let [value_label, setValueLabel] = useState(value);
   let [border_style,setBorderStyle] = useState("solid") 
   let [border_color,setBorderColor] = useState("white") 
  const handleChangeUnity = (event) => {
    setUnity(event.target.value);
    onFormSubmit(`${value_input}${event.target.value} ${border_style} ${border_color}`, field_name);
  };
  const handleChangeBorderStyle = (event) =>{
    console.log("border style = ",event)
    setBorderStyle(event.target.value)
    onFormSubmit(`${value_input}${unity} ${event.target.value} ${border_color}`, field_name);
  }
  const handleChangeBorderColor = (borderColor) =>{
    console.log("value_input = ",value_input)
    setBorderColor(borderColor)
    onFormSubmit(`${value_input}${unity} ${border_style} ${borderColor}`, field_name);
  }

  let handleChange = (value_change) => {
    setValueInput(value_change);
    onFormSubmit(`${value_change}${unity} ${border_style} ${border_color}`, field_name);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let valueSplitted = value.split(" ")
    if (valueSplitted[0].includes("%")) {
      setUnity("%");
      setValueInput(valueSplitted[0].replace("%", ""));
      setValueLabel(valueSplitted[0].replace("%", ""));
    } else if (valueSplitted[0].includes("px")) {
      setUnity("px");
      setValueInput(valueSplitted[0].replace("px", ""));
      setValueLabel(valueSplitted[0].replace("px", ""));
    } else if (valueSplitted[0].includes("em")) {
      setUnity("em");
      setValueInput(valueSplitted[0].replace("em", ""));
      setValueLabel(valueSplitted[0].replace("em", ""));
    } else if (valueSplitted[0].includes("rem")) {
      setUnity("rem");
      setValueInput(valueSplitted[0].replace("rem", ""));
      setValueLabel(valueSplitted[0].replace("rem", ""));
    }


    if (valueSplitted[1].includes("dotted")) {
        setBorderStyle("dotted");
 
      } else if (valueSplitted[1].includes("dashed")) {
        setBorderStyle("dashed");

      } else if (valueSplitted[1].includes("solid")) {
        setBorderStyle("solid");
      
      } else if (valueSplitted[1].includes("double")) {
        setBorderStyle("double");
  
      }

     else if (valueSplitted[1].includes("groove")) {
        setBorderStyle("groove");

      } else if (valueSplitted[1].includes("ridge")) {
        setBorderStyle("ridge");
      
      } else if (valueSplitted[1].includes("inset")) {
        setBorderStyle("inset");
  
      }
     else if (valueSplitted[1].includes("outset")) {
        setBorderStyle("outset");
      
      } else if (valueSplitted[1].includes("none")) {
        setBorderStyle("none");
  
      }
      else if (valueSplitted[1].includes("hidden")) {
        setBorderStyle("hidden");
  
      }

    setBorderColor(valueSplitted[2])
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
       <Box sx={{ display: 'inline-flex' }}>
        <Box item xs={2}>
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
        item xs={2}
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
        <Box item xs={2}>
          <FormControl >
            <InputLabel id="demo-simple-select-label">border style</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={border_style}
              label="border style"
              onChange={handleChangeBorderStyle}
            >
              <MenuItem value="dotted">dotted</MenuItem>
              <MenuItem value="dashed">dashed</MenuItem>
              <MenuItem value="solid">solid</MenuItem>
              <MenuItem value="double">double</MenuItem>

              <MenuItem value="groove">groove</MenuItem>
              <MenuItem value="ridge">ridge</MenuItem>
              <MenuItem value="inset">inset</MenuItem>

              <MenuItem value="outset">groove</MenuItem>
              <MenuItem value="none">none</MenuItem>
              <MenuItem value="hidden">hidden</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
        item xs={2}
          component="form"
          noValidate
          autoComplete="off"
        >
          <TextField
           id="outlined-basic"
           label="Border Color"
         fullWidth
           type="color"
           name="border_color"
           value={border_color}
           onChange={(e) => handleChangeBorderColor(e.target.value)}
            variant="outlined" 

          style={{width:"300px"}}
          />
          
        </Box>
      
        
      </Box>
        </>
      )}
      
    </>
  );
};

export default  React.memo(BorderElement)
