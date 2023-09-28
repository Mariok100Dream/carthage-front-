import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  PagingPanel,
  TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';
import {
    PagingState,
    IntegratedPaging,
    FilteringState,
    IntegratedFiltering,
    
  } from '@devexpress/dx-react-grid';
import "./translator.css"
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios"
import Loading from "../loading/loading"
const getRowIdTranslation = row => row.id;

const  TitleTranslator = (props) => {

  const [Loader,setLoader] = useState(false)



  const [columnsTranslation] = useState([
    { name: 'from', title: 'From' },
    { name: 'to', title: 'To' },
  ]);
  const [rowsTranslation, setRowsTranslation] = useState([]);
  const [editingStateColumnExtensionsTranslation] = useState([
    { columnName: 'from', editingEnabled: false },
  ]);

  const commitChangesTranslation = ({  changed }) => {
    let changedRows;
   
    if (changed) {
      changedRows = rowsTranslation.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
   
    setRowsTranslation(changedRows);
   
  };

  useEffect(()=>{
    
    let result = []
   

        let f = {
          from : props.title_text,
          to :"", 
          id :uuidv4()
        }
        result.push(f)
    
    setRowsTranslation(result)

   
  },[])

  let language_array = [
    {name:"none",key:"none"},
    {name:"Frensh",key:"fr"},
    {name:"English",key:"en"},
    {name:"Italian",key:"it"},
    {name:"Espanish",key:"es"},
    {name:"Arabic",key:"ar"},
   ]

  let [translation_language,setTranslatedLanguage] = useState( 
    language_array
    .filter(el => el.key !=props.title_lang )[0].key
   )
    let [button_enabled,setButtonEnabled] = useState(true)
   let handleChangeTranslation = async(value,result_translation) =>{
   if(value!="none"){
    setTranslatedLanguage(value)
    setLoader(true)
    let result   = []
    let j = 0
    for(let i=0;i<result_translation.length;i++){
      let response_data =""
  
      try{
        response_data  = await axios.post(`https://api.mymemory.translated.net/get?q=${result_translation[j].from}&langpair=${props.title_lang}|${value}`)
  
       if(response_data.data?.matches !=undefined){
        response_data = response_data.data?.matches[0].translation
       }else{
        response_data  = ""
       }
       
      }catch(err){
        response_data = ""
      }
      
      let f= {
        id:result_translation[i].id,
        from:result_translation[i].from,
        to:response_data
      }
      result.push(f)
      j++
    }

    setRowsTranslation(result)
    //when we return we return a team 
  
    setLoader(false)
    setButtonEnabled(false)
   }else{
    setButtonEnabled(true)
   }
  
   }
   let handleTranslate = async() =>{
    
    props.myFunc(props.data,translation_language,rowsTranslation[0].to,props.title_text_from,props.title_lang_from,"title");
   
  
  } 
 

  return (
<>

{!Loader ?
<>

<h4>selected language is { props.title_lang }</h4>
 {/* Select language */}
 <Box sx={{ minWidth: 120 }} style={{marginTop:"2%"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Translated section To </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={translation_language}
          label="Translated section To"
          onChange={e => handleChangeTranslation(e.target.value,rowsTranslation)}
        >
         {language_array
            .filter(el => el.key !=props.title_lang )
            .map((el)=>(
                <MenuItem value={el.key}>{el.name}</MenuItem>
            ))}
   
        </Select>
      </FormControl>
    </Box>
<>

    <Paper>
<Grid
  rows={rowsTranslation}
  columns={columnsTranslation}
  getRowId={getRowIdTranslation}
>
  <FilteringState defaultFilters={[]} />
  <IntegratedFiltering />
  
  <PagingState
    defaultCurrentPage={0}
    pageSize={5}
  />
  <IntegratedPaging />
  <EditingState
    onCommitChanges={commitChangesTranslation}
    defaultEditingRowIds={[0]}
    columnExtensions={editingStateColumnExtensionsTranslation}
  />
  <Table />
  <TableHeaderRow />
  <TableFilterRow />
  <PagingPanel />
  <TableEditRow />
  <TableEditColumn
    showEditCommand
  />
</Grid>
</Paper>
</>


<div style={{display:"flex",justifyContent:"center"}}>
<Button variant="text"
onClick={() => handleTranslate()}
disabled={button_enabled}
>
  
  Done Translating 
  
</Button>
</div>
</> 
:
<>

<Loading />
</> 

}

</>


  );
};

export default TitleTranslator
