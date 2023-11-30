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
import { useTranslation } from 'react-i18next'

const getRowIdTranslation = row => row.id;

const  DescriptionTranslator = (props) => {
  const {t} = useTranslation()
  const [Loader,setLoader] = useState(false)

  const [columnsTranslation] = useState([
    { name: 'from', title: t("from") },
    { name: 'to', title: t("to") },
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
          from : props.description_text,
          to :"", 
          id :uuidv4()
        }
        result.push(f)
    
    setRowsTranslation(result)

  },[])
  let language_array = [
    {name:t("none"),key:"none"},
    {name:t("frensh"),key:"fr"},
    {name:t("english"),key:"en"},
    {name:t("italian"),key:"it"},
    {name:t("espanish"),key:"es"},
    {name:t("arabic"),key:"ar"},
   ]
  let [translation_language,setTranslatedLanguage] = useState( 
    language_array
    .filter(el => el.key !=props.description_lang )[0].key
   ) 
   let [disabled_button,setDisabledButton] = useState(true)
   let handleChangeLanguage = async(value) =>{
   
    if(value!=="none"){
    
      setTranslatedLanguage(value)
      setLoader(true)
      let result   = []
      let j = 0
      for(let i=0;i<rowsTranslation.length;i++){
        let response_data =""
        try{
          response_data  = await axios.post(`https://api.mymemory.translated.net/get?q=${rowsTranslation[j].from}&langpair=en|${value}`)
         if(response_data.data?.matches !=undefined){
          response_data = response_data.data?.matches[0].translation
         }else{
          response_data  = ""
         }
         
        }catch(err){
          response_data = ""
        }
       
        let f= {
          id:rowsTranslation[i].id,
          from:rowsTranslation[i].from,
          to:response_data
        }
        result.push(f)
        j++
      }
  
      setRowsTranslation(result)
      //when we return we return a team 
    
      setLoader(false)
      setDisabledButton(false)
    }
    else{
      setDisabledButton(true)
    }
 
   }


   let handleTranslate = async() =>{
   
    props.myFunc(props.data,translation_language,rowsTranslation[0].to,props.description_text_from,props.description_lang_from,"description");
   } 
 

  return (
<>
{!Loader
? 
<>
<h4>{t("selectedLanguageIs")} { props.description_lang }</h4>
 {/* Select language */}
 <Box sx={{ minWidth: 120 }} style={{marginTop:"2%"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t("translateSectionTo")} </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={translation_language}
          label={t("translateSectionTo")}
          onChange={e => handleChangeLanguage(e.target.value)}
        >
         {language_array
            .filter(el => el.key !=props.description_lang )
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
disabled={disabled_button}
>
  
  {t("doneTranslating")} 
  
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

export default DescriptionTranslator
