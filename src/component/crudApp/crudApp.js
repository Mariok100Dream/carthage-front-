import React,{useState} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import TranslateIcon from '@mui/icons-material/Translate';
import SaveIcon from '@mui/icons-material/Save';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {
    SortingState, PagingState, SummaryState,
    IntegratedPaging, IntegratedSorting, IntegratedSummary,
  } from '@devexpress/dx-react-grid';
  import {
 
   
    PagingPanel, DragDropProvider, TableColumnReordering,
    TableFixedColumns, TableSummaryRow,
  } from '@devexpress/dx-react-grid-material-ui';


  import IconButton from '@mui/material/IconButton';
  import Input from '@mui/material/Input';
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';
  import TableCell from '@mui/material/TableCell';
  
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';

  import CancelIcon from '@mui/icons-material/Cancel';
  import { styled } from '@mui/material/styles';
  
 
  import {
 
    globalSalesValues,
  } from './demo-data/generator';
  
import CrudvalidationInformation from "./CrudValidationInformation"
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';

import Modal from '@mui/material/Modal';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from '@uiw/codemirror-extensions-langs';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

//get
import {beginTable,ngcontainer,pagination_and_actions,
  ngIfForTable
} from "./angular/get/gethtml"

import {imports_ts,component_ts,columns_ts,
  ts_data,class_data_ts,caseComponentts,
  model_ts
} from "./angular/get/getTs"

import {import_routing,path_routing,export_routing} from "./angular/get/routingts"

import {import_modules,declaration_import_and_export} from "./angular/get/modulets"


//delete 
import {htmldelete} from "./angular/delete/deleteHtml"
import {delete_ts} from "./angular/delete/deleteTs"
import {delete_scss} from "./angular/delete/deletescss"

import JSZip from "jszip"
import  FileSaver from 'file-saver' 


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const PREFIX = 'Demo';
  const classes = {
    lookupEditCell: `${PREFIX}-lookupEditCell`,
    dialog: `${PREFIX}-dialog`,
    inputRoot: `${PREFIX}-inputRoot`,
    selectMenu: `${PREFIX}-selectMenu`,
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${classes.lookupEditCell}`]: {
      padding: theme.spacing(1),
    },
    [`& .${classes.dialog}`]: {
      width: 'calc(100% - 16px)',
    },
    [`& .${classes.inputRoot}`]: {
      width: '100%',
    },
    [`& .${classes.selectMenu}`]: {
      position: 'absolute !important',
    },
  }));
  
  const AddButton = ({ onExecute }) => (
    <div style={{ textAlign: 'center' }}>
      <Button
        color="primary"
        onClick={onExecute}
        title="Create new row"
      >
        New
      </Button>
    </div>
  );
  
  const EditButton = ({ onExecute }) => (
    <IconButton onClick={onExecute} title="Edit row" size="large">
      <EditIcon />
    </IconButton>
  );
  
  const DeleteButton = ({ onExecute }) => (
    <IconButton
      onClick={() => {
        // eslint-disable-next-line
        if (window.confirm('Are you sure you want to delete this row?')) {
          onExecute();
        }
      }}
      title="Delete row"
      size="large"
    >
      <DeleteIcon />
    </IconButton>
  );
  
  const CommitButton = ({ onExecute }) => (
    <IconButton onClick={onExecute} title="Save changes" size="large">
      <SaveIcon />
    </IconButton>
  );
  
  const CancelButton = ({ onExecute }) => (
    <IconButton color="secondary" onClick={onExecute} title="Cancel changes" size="large">
      <CancelIcon />
    </IconButton>
  );
  
  const commandComponents = {
    add: AddButton,
    edit: EditButton,
    delete: DeleteButton,
    commit: CommitButton,
    cancel: CancelButton,
  };
  
  const Command = ({ id, onExecute }) => {
    const CommandButton = commandComponents[id];
    return (
      <CommandButton
        onExecute={onExecute}
      />
    );
  };
  
  const availableValues = {
    product: globalSalesValues.product,
    
  };
  
  const LookupEditCell = ({
    availableColumnValues, value, onValueChange,
  }) => (
    <StyledTableCell
      className={classes.lookupEditCell}
    >
      <Select
        value={value}
        onChange={event => onValueChange(event.target.value)}
        MenuProps={{
          className: classes.selectMenu,
        }}
        input={(
          <Input
            classes={{ root: classes.inputRoot }}
          />
        )}
      >
        {availableColumnValues.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </StyledTableCell>
  );
  

  
  const getRowId = row => row.id;
  










const getRowIdGet = row => row.id;

const getRowPostType = row => row.id;
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
const CrudApp = () => {
    let [component_name,setComponentName] = useState("")

    let [nextStep,setNextStep] = useState(true)
    let [getRequesturl,setgetrequestUrl] = useState("")
    let [authType,setAuthType] = useState("NoAuth")
    const handleChangeAuthType = (event) => {
      setAuthType(event.target.value);
    };
    let [usernameAuthBasic,setUsernameAuthBasic] = useState("")
    let [passwordAuthBasic,setPasswordAuthBasic] = useState("")
    let [tokenAuthBasic,setTokenauthBasic] = useState("")

    const [rows, setRows] = useState([
    
    ]);

    let [nameofField,setNameOfField] = useState("")
    const handleChangeFieldName = (event) => {
      setNameOfField(event.target.value);
    };

    let comparision_table = [">",">=","<","<=","==","!="]

    let [comparision_signal,setComparisionSignal] = useState("")
    const handleChangeComparisionSignal = (event) => {
      setComparisionSignal(event.target.value);
    };
     let [to_value,setToValue] = useState('') 
     let [html_if,setHtmlIf] = useState("")
     let [html_else,setHtmlElse] = useState("")
     const onChangeCodeHtmlIf = React.useCallback((value) => {
        setHtmlIf(value)
     })
     const onChangeCodeHtmlElse = React.useCallback((value) => {
      setHtmlElse(value)
    })

    let [rows_post,setRowsPost] = useState([])
    let [rows_edit,setRowsEdit] = useState([])
    let [rows_data,setRowsData] = useState([])
    const HandleGotNextStep = async() =>{
        let target = component_name.replace(/[^\w\s]/gi, '')
 
        let base64encodedData 
        if(getRequesturl == ""){
          return toast.error("please enter url")
        }
        if(authType=="Basic"){
            if(usernameAuthBasic==""){
              return toast.error("please write username")
            }
            if(passwordAuthBasic==""){
              return toast.error("please write password")
            }
            base64encodedData = Buffer.from(`${usernameAuthBasic}:${passwordAuthBasic}`).toString('base64');
        
          }
        if(authType =="BearerToken"){
            if(tokenAuthBasic==""){
              return toast.error("please write token")
            }
        }
        let result = []
        if(authType=="NoAuth"){
            try{
              let response  = await axios.get(getRequesturl)
              let obj = Object.keys(response.data)
              if(obj[0]=="0"){
                //array
                let s = Object.keys(response.data[0])
                for(let i=0;i<s.length;i++){
                  let f =   {
                    id: uuidv4(),
                    product: "None",
                    region: s[i],
                    name_in_fr: "",
                    name_in_en:"",
                    name_in_ar:""
                  }
                  result.push(f)
                }

              } 
              else{
                 toast.error("empty data please enter an array of json")
              }
            
            }catch(err){
              return toast.error(err.message)
            }
        }

        if(authType=="Basic"){
          try{
            let response  = await axios.get(getRequesturl,{
              headers:{'Content-Type': 'application/json','Authorization': `Basic ${base64encodedData}`}
            })
            let obj = Object.keys(response.data)
            if(obj[0]=="0"){
              //array
              console.log("response ",Object.keys(response.data[0]))

            } 
            else{
               toast.error("empty data please enter an array of json")
            }
          }catch(err){
            return toast.error(err.message)
          }
     
        }

        if(authType =="BearerToken"){
          try{
            let response  = await axios.get(getRequesturl,{
              headers:{'Content-Type': 'application/json','Authorization': `Bearer ${tokenAuthBasic}`}
            })
            let obj = Object.keys(response.data)
            if(obj[0]=="0"){
              //array
              console.log("response ",Object.keys(response.data[0]))

            } 
            else{
               toast.error("empty data please enter an array of json")
            }
          }catch(err){
            return toast.error(err.message)
          }
      }
        
        if(component_name!=""){
            setComponentName(target)
            setRows(result)
            setRowsPost(result)
            setRowsEdit(result)
            setRowsData(result)
            setNextStep(false)
        }
        else {
            return toast.error("please enter a valid component name")    
        }
        
    }
  
    let [index_edit,setIndexEdit] = useState(0)
    let [all_rules,setAllrules] = useState([])
    let [popupTitle,setPopupTitle] = useState("Add rule")
  
  //
  
    const saveRuleGet = () =>{
      console.log("popupTitle",popupTitle)
      if(popupTitle=="Add rule"){
        console.log("add")
        if(nameofField==""){
          return toast.error("please write field name to applicate rule to ")
        }
        if(comparision_signal ==""){
          return toast.error("please enter comparasion signal")
        }
        if(to_value==""){
          return toast.error("please enter value")
        }
        if(html_if==""){
          return toast.error("please enter html code in true condition")
        }
        if(html_else==""){
          return toast.error("please enter html code in false condition")
        }
        if(all_rules.filter(el => el.nameofField == nameofField ).length >0){
          return toast.error("there is a rule already declared to that")
        }
        let result =all_rules
        let f = {
          nameofField,
          comparision_signal,
          to_value,
          html_if,
          html_else
        }
        result.push(f)
        console.log("result",result)
        setAllrules(result)
      }
      if(popupTitle=="Edit Rule"){
        if(nameofField==""){
          return toast.error("please write field name to applicate rule to ")
        }
        if(comparision_signal ==""){
          return toast.error("please enter comparasion signal")
        }
        if(to_value==""){
          return toast.error("please enter value")
        }
        if(html_if==""){
          return toast.error("please enter html code in true condition")
        }
        if(html_else==""){
          return toast.error("please enter html code in false condition")
        }
        all_rules[index_edit].nameofField=nameofField
        all_rules[index_edit].comparision_signal=comparision_signal
        all_rules[index_edit].to_value=to_value
        all_rules[index_edit].html_if=html_if
        all_rules[index_edit].html_else=html_else
  
       
        setIndexEdit(0) 
          
      }
    }


    let [popupCustomFieldTitle,setCustomFieldTitle] = useState("Add Custom Field")

    const [selectType, setType] = React.useState('');
    const [selectDataFrom, setDataFrom] = React.useState('');
    let [fieldNamePost,setFieldNamePost] = useState("")

    const handleChangeFieldNamePost = (event) => {
      setFieldNamePost(event.target.value);
    };
    let [index_editCustomField,setIndexEditCustomField] = useState(0)

    let [all_custom_post_field,setAllCustomPostField] = useState([])
    const saveRuleCustomFieldPost = () =>{
      console.log("custom field post ",popupCustomFieldTitle)
      if(popupCustomFieldTitle=="Add Custom Field"){
        // setType("")
        // setRowsPostType([])
        // setFieldNamePost("")  
        // setOpenCustomFieldPost("Edit Custom Field")

        if(fieldNamePost==""){
          return toast.error("please write field name to applicate custom field to ")
        }
        if(selectType ==""){
          return toast.error("please enter type of custom field ")
        }
        if(selectDataFrom==""){
          if(rowsPostTypes.length==0){
            return toast.error("please enter some data to work on !!")
          }
  
          return toast.error("please enter data from ")
        }
       
        if(all_custom_post_field.filter(el => el.fieldNamePost == fieldNamePost ).length >0){
          return toast.error("there is a rule already declared to that")
        }
        let result =all_custom_post_field
        let f = {
          fieldNamePost,
          selectType,
          selectDataFrom,
          rowsPostTypes,
        }
        result.push(f)
        console.log("result",result)
        setAllCustomPostField(result)
      }
      if(popupCustomFieldTitle=="Edit Custom Field"){

      
        if(selectType ==""){
          return toast.error("please enter type of custom field ")
        }
        if(selectDataFrom==""){
          if(rowsPostTypes.length==0){
            return toast.error("please enter some data to work on !!")
          }
  
          return toast.error("please enter data from ")
        }
       
        all_custom_post_field[index_editCustomField].selectType=selectType
        all_custom_post_field[index_editCustomField].selectDataFrom=selectDataFrom
        all_custom_post_field[index_editCustomField].rowsPostTypes=rowsPostTypes
     
  
       
        setIndexEditCustomField(0) 
          
      }
    }

    //update validation 

    let [popupCustomFieldUpdate,setCustomFieldTitleUpdate] = useState("Add Custom Field")

    const [selectTypeUpdate, setTypeUpdate] = React.useState('');
    const [selectDataFromUpdate, setDataFromUpdate] = React.useState('');
    let [fieldNamePostUpdate,setFieldNamePostUpdate] = useState("")

    const handleChangeFieldNameUpdate = (event) => {
      setFieldNamePostUpdate(event.target.value);
    };
    let [index_editCustomFieldUpdate,setIndexEditCustomFieldUpdate] = useState(0)

    let [all_custom_Update_field,setAllCustomUpdateField] = useState([])
    const saveRuleCustomFieldUpdate = () =>{
      console.log("popupTitle",popupCustomFieldUpdate,all_custom_Update_field)
      if(popupCustomFieldUpdate=="Add Custom Field"){
        // setType("")
        // setRowsPostType([])
        // setFieldNamePost("")  
        // setOpenCustomFieldPost("Edit Custom Field")

        if(fieldNamePostUpdate==""){
          return toast.error("please write field name to applicate custom field to ")
        }
        if(selectTypeUpdate ==""){
          return toast.error("please enter type of custom field ")
        }
        if(selectDataFromUpdate==""){
          if(rowsPostTypes.length==0){
            return toast.error("please enter some data to work on !!")
          }
  
          return toast.error("please enter data from ")
        }
       
        if(all_custom_Update_field.filter(el => el.fieldNamePostUpdate == fieldNamePostUpdate ).length >0){
          return toast.error("there is a rule already declared to that")
        }
        let result =all_custom_Update_field
        let f = {
          fieldNamePostUpdate,
          selectType,
          selectDataFrom,
          rowsPostTypes,
        }
        result.push(f)
        console.log("result",result)
        setAllCustomUpdateField(result)
      }
      if(popupCustomFieldUpdate=="Edit Custom Field"){

        if(selectTypeUpdate ==""){
          return toast.error("please enter type of custom field ")
        }
        if(selectDataFromUpdate==""){
          if(rowsPostTypes.length==0){
            return toast.error("please enter some data to work on !!")
          }
  
          return toast.error("please enter data from ")
        }
       
        all_custom_Update_field[index_editCustomFieldUpdate].selectTypeUpdate=selectTypeUpdate
        all_custom_Update_field[index_editCustomFieldUpdate].selectDataFromUpdate=selectDataFromUpdate
        all_custom_Update_field[index_editCustomFieldUpdate].rowsPostTypes=rowsPostTypes
     
  
       
        setIndexEditCustomField(0) 
          
      }
    }

    let [validation_post_field,setValidationPostField] = useState("")
    const handleChangeValidationPostField = (event) => {
      setValidationPostField(event.target.value);
    };

    let [popupTitleValidationPost,setPopupValidationPost] = useState("Add Validation Rule")
    let [all_validation_post,setAllValidationPost] = useState([])
    let [indexeditvalidationpost,setIndexEditValidationPost] = useState(0)
   
    const saveRuleValidationPost = () =>{
      
      if(popupTitleValidationPost=="Add Validation Rule"){
      
        if(fieldNamePost==""){
          return toast.error("please write field name to applicate custom field to ")
        }
        if(validation_post_field ==""){
          return toast.error("please enter Validation Rule")
        }
     
       
        if(all_validation_post.filter(el => el.fieldNamePost == fieldNamePost ).length >0){
          return toast.error("there is a rule already declared to that")
        }
        let result =all_validation_post
        let f = {
          fieldNamePost,
          validation_post_field
        }
        result.push(f)
        setAllValidationPost(result)
      }
      if(popupTitleValidationPost=="Edit Validation Rule"){
        
        if(validation_post_field ==""){
          return toast.error("please enter Validation Rule ")
        }  
        all_validation_post[indexeditvalidationpost].validation_post_field=validation_post_field
     
       
        setIndexEditValidationPost(0) 
          
      }
    }



    //update validation things 

    let [popupTitleValidationUpdate,setPopupValidationUpdate] = useState("Add Validation Rule")
    let [all_validation_update,setAllValidationUpdate] = useState([])
    let [indexeditvalidationupdate,setIndexEditValidationUpdate] = useState(0)
  
    let [validation_update_field,setValidationUpdateField] = useState("")
    const handleChangeValidationUpdateField = (event) => {
      setValidationUpdateField(event.target.value);
    };
  
    const saveRuleValidationUpdate = () =>{
      
      if(popupTitleValidationUpdate=="Add Validation Rule"){
        // setType("")
        // setRowsPostType([])
        // setFieldNamePost("")  
        // setOpenCustomFieldPost("Edit Custom Field")

        if(fieldNamePost==""){
          return toast.error("please write field name to applicate custom field to ")
        }
        if(validation_update_field ==""){
          return toast.error("please enter Validation Rule")
        }
     
       
        if(all_validation_update.filter(el => el.fieldNamePost == fieldNamePost ).length >0){
          return toast.error("there is a rule already declared to that")
        }
        let result =all_rules
        let f = {
          fieldNamePost,
          validation_update_field
        }
        result.push(f)
        setAllValidationUpdate(result)
      }

      if(popupTitleValidationUpdate=="Edit Validation Rule"){

        if(validation_update_field ==""){
          return toast.error("please enter Validation Rule ")
        }
     
       
        all_validation_update[indexeditvalidationupdate].validation_update_field=validation_update_field
     
       
        setIndexEditValidationUpdate(0) 
          
      }

    }



    const saveGet = () =>{
      //region
      let ch = ""
      let model_ch = ""
      let call_table="["
      let case_string = ""
        for(let i=0;i<rows.length;i++){
          let asgard = ""
          let result = all_rules.filter(el => el.nameofField==rows[i].region)
          call_table +="'"+rows[i].region+"',"
          case_string += caseComponentts.replaceAll("$field_name",rows[i].region)
          model_ch += rows[i].region + " ; \n"
          if(result.length>0){
            if(result[0].comparision_signal==">"){
              asgard = "<"
             }
             if(result[0].comparision_signal=="<"){
              asgard = ">"
             }
             if(result[0].comparision_signal=="=="){
              asgard = "!="
             }
             if(result[0].comparision_signal=="!="){
              asgard = "=="
             }
             if(result[0].comparision_signal==">="){
              asgard = "<="
             }
             if(result[0].comparision_signal=="<="){
              asgard = ">="
             }
             ch+=ngIfForTable.replaceAll("$field_name",rows[i].region)
             .replaceAll("$comparation_conter",asgard)
             .replaceAll("$comparation",result[0].comparision_signal)
             .replaceAll("$value",result[0].to_value)
             .replaceAll("$html_if",result[0].html_if)
             .replaceAll("$html_else",result[0].html_else) 
           
          }else{
            ch+=ngcontainer.replaceAll("$field_name",rows[i].region)
          }

       
        }
        call_table = call_table.substring(0, call_table.length-1);
        call_table +="]"

      let final_get_html = beginTable + ch +pagination_and_actions
      let ts_ch = imports_ts.replaceAll("$component_name",component_name)
      +
       component_ts.replaceAll("$component_name",component_name) +
      columns_ts.replace("$columns_table",call_table) +
      ts_data + class_data_ts.replaceAll("$component_name",component_name)
      .replace("$case_component",case_string)
      let final_model = model_ts.replace("$component_name",component_name)
      .replace("$values",model_ch)
      let zip = new JSZip();
      let angular = zip.folder(component_name)
      angular.file(`${component_name}.component.html`,final_get_html)
      angular.file(`${component_name}.component.ts`,ts_ch)
      let models = angular.folder("models")
      models.file(`${component_name}.ts`,final_model)
      let routing_ch = import_routing.replaceAll("$component_name",component_name) + 
      path_routing.replaceAll("$component_name",component_name) + 
      export_routing.replaceAll("$component_name",component_name)
      angular.file(`${component_name}-routing.module.ts`,routing_ch)

      let module = import_modules.replaceAll("$component_name",component_name) +
      declaration_import_and_export.replaceAll("$component_name",component_name)
      angular.file(`${component_name}.module.ts`,module)

        let dialogs = angular.folder("dialogs")
        let deleteFolder = dialogs.folder("delete")
        
        //delete things 
        let ch_delete = htmldelete.replaceAll("$component_name",component_name)
        deleteFolder.file("delete.component.html",ch_delete)
        deleteFolder.file("delete.component.scss",delete_scss)
        deleteFolder.file("delete.dialog.component.ts",delete_ts)



      zip.generateAsync({type:"blob"}).then(function(content) {
        // see FileSaver.js
        FileSaver.saveAs(content, `${component_name}.zip`);
    });
     
    }


    const handleDeleteGet = (name) =>{
      if (window.confirm("Are u sure to delete this Rule?")) {
          let result = all_rules.filter(el => el.nameofField != name)
          console.log("result",result)
          setAllrules(result)
      }
    }
 
    const handleEditGet = (index,el) =>{
      setNameOfField(el.nameofField)
      setComparisionSignal(el.comparision_signal)
       setToValue(el.to_value) 
      setHtmlIf(el.html_if)
      setHtmlElse(el.html_else)
      setPopupTitle("Edit Rule")
      setIndexEdit(index)
      setOpenRule(true)

    }




    //post custom field 
    const handleDeleteCustomPostField = (name) =>{
      if (window.confirm("Are u sure to delete this Rule?")) {
          let result = all_custom_post_field.filter(el => el.fieldNamePost != name)
          console.log("result",result)
          setAllCustomPostField(result)
      }
    }
 
    const handleEditGetCustomPostField = (index,el) =>{
      setType(el.selectType)
      setRowsPostType(el.rowsPostTypes)
      setFieldNamePost(el.fieldNamePost)
      setDataFrom(el.selectDataFrom) 
      setCustomFieldTitle("Edit Custom Field")
      setIndexEditCustomField(index)
      setOpenCustomFieldPost(true)

    }
    //update custom filed 
 const handleDeleteCustomUpdateField = (name) =>{
      if (window.confirm("Are u sure to delete this Rule?")) {
          let result = all_custom_Update_field.filter(el => el.fieldNamePostUpdate != name)
          console.log("result",result)
          setAllCustomUpdateField(result)
      }
    }
 
    const handleEditGetUpdatePostField = (index,el) =>{
      setTypeUpdate(el.selectTypeUpdate)
      setRowsPostType(el.rowsPostTypes)
      setFieldNamePostUpdate(el.fieldNamePostUpdate)
      setDataFromUpdate(el.selectDataFromUpdate) 
      setCustomFieldTitleUpdate("Edit Custom Field")
      setIndexEditCustomFieldUpdate(index)
      setOpenCustomFieldUpdate(true)

    }


      //custom validation data

      //validation rule 
      const handleDeleteValidationPost = (name) =>{
        if (window.confirm("Are u sure to delete this validation rule?")) {
            let result = all_validation_post.filter(el => el.fieldNamePost != name)
            console.log("result",result)
            setAllValidationPost(result)
        }
      }
   
      const handleEditValidationPost = (index,el) =>{
 
        setFieldNamePost(el.fieldNamePost)
        
        setPopupValidationPost("Edit Validation Rule")
        setIndexEditValidationPost(index)
        setOpenValidationPost(true)
        
      }

      //update validation rule 
      const handleDeleteValidationUpdate = (name) =>{
        if (window.confirm("Are u sure to delete this validation rule?")) {
          console.log("delete ",name)  
          let result = all_validation_update.filter(el => el.fieldNamePost != name)
          
            setAllValidationUpdate(result)
        }
      }
   
      const handleEditValidationUpdate = (index,el) =>{
        setFieldNamePost(el.fieldNamePost)
        setPopupValidationUpdate("Edit Validation Rule")
        setIndexEditValidationUpdate(index)
        setOpenValidationUpdate(true)
        
      }

      //update custom field 
       const handleDeleteCustomFieldUpdate = (name) =>{
        if (window.confirm("Are u sure to delete this validation rule?")) {
          console.log("delete ",name)  
          let result = all_validation_update.filter(el => el.fieldNamePost != name)
          
            setAllValidationUpdate(result)
        }
      }
   
      const handleEditCustomFieldUpdate = (index,el) =>{
        setFieldNamePost(el.fieldNamePost)
        setPopupValidationUpdate("Edit Validation Rule")
        setIndexEditValidationUpdate(index)
        setOpenValidationUpdate(true)
        
      }


      const [columnsPostYpes] = useState([
        { name: 'name', title: 'Name' },
       
      ]);
      const [rowsPostTypes, setRowsPostType] = useState([
       
      ]);
      const commitChangesPostTypes = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
          const startingAddedId = rowsPostTypes.length > 0 ? rowsPostTypes[rowsPostTypes.length - 1].id + 1 : 0;
          changedRows = [
            ...rowsPostTypes,
            ...added.map((row, index) => ({
              id: startingAddedId + index,
              ...row,
            })),
          ];
        }
        if (changed) {
          changedRows = rowsPostTypes.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
          const deletedSet = new Set(deleted);
          changedRows = rowsPostTypes.filter(row => !deletedSet.has(row.id));
        }
        setRowsPostType(changedRows);
      };



      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };


    //get tap changing 
    const [valueGet, setValueGet] = React.useState(0);

    const handleChangeGet = (event, newValue) => {
      setValueGet(newValue);
    };
      //table with select 

const PREFIX = 'Demo';
const classes = {
  lookupEditCell: `${PREFIX}-lookupEditCell`,
  dialog: `${PREFIX}-dialog`,
  inputRoot: `${PREFIX}-inputRoot`,
  selectMenu: `${PREFIX}-selectMenu`,
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${classes.lookupEditCell}`]: {
    padding: theme.spacing(1),
  },
  [`& .${classes.dialog}`]: {
    width: 'calc(100% - 16px)',
  },
  [`& .${classes.inputRoot}`]: {
    width: '100%',
  },
  [`& .${classes.selectMenu}`]: {
    position: 'absolute !important',
  },
}));

const AddButton = ({ onExecute }) => (
  <div style={{ textAlign: 'center' }}>
    <Button
      color="primary"
      onClick={onExecute}
      title="Create new row"
    >
      New
    </Button>
  </div>
);

const EditButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Edit row" size="large">
    <EditIcon />
  </IconButton>
);

const DeleteButton = ({ onExecute }) => (
  <IconButton
    onClick={() => {
      // eslint-disable-next-line
      if (window.confirm('Are you sure you want to delete this row?')) {
        onExecute();
      }
    }}
    title="Delete row"
    size="large"
  >
    <DeleteIcon />
  </IconButton>
);

const CommitButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title="Save changes" size="large">
    <SaveIcon />
  </IconButton>
);

const CancelButton = ({ onExecute }) => (
  <IconButton color="secondary" onClick={onExecute} title="Cancel changes" size="large">
    <CancelIcon />
  </IconButton>
);

const commandComponents = {
  add: AddButton,
  edit: EditButton,
  delete: DeleteButton,
  commit: CommitButton,
  cancel: CancelButton,
};

const Command = ({ id, onExecute }) => {
  const CommandButton = commandComponents[id];
  return (
    <CommandButton
      onExecute={onExecute}
    />
  );
};

const availableValues = {
  product: globalSalesValues.product,


};

const LookupEditCell = ({
  availableColumnValues, value, onValueChange,
}) => (
  <StyledTableCell
    className={classes.lookupEditCell}
  >
    <Select
      value={value}
      onChange={event => onValueChange(event.target.value)}
      MenuProps={{
        className: classes.selectMenu,
      }}
      input={(
        <Input
          classes={{ root: classes.inputRoot }}
        />
      )}
    >
      {availableColumnValues.map(item => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </StyledTableCell>
);

const Cell = (props) => {
  const { column } = props;

 
  return <Table.Cell {...props} />;
};

const EditCell = (props) => {
  const { column } = props;
  const availableColumnValues = availableValues[column.name];
  if (availableColumnValues) {
    return <LookupEditCell {...props} availableColumnValues={availableColumnValues} />;
  }
  return <TableEditRow.Cell {...props} />;
};

const getRowId = row => row.id;

    //select table 
    const [columns] = useState([
        // { name: 'product', title: 'Condition' },
        { name: 'region', title: 'Slug' },
     
      
        { name: 'name_in_fr', title: 'Field Name in frensh' },
        { name: 'name_in_en', title: 'Field Name in English' },
 
        { name: 'name_in_ar', title: 'Field Name in Arabic' },
  
      ]);
    
   
      const [tableColumnExtensions] = useState([
        { columnName: 'product', width: 200 },
        { columnName: 'slug', width: 180 },
   
        { columnName: 'name_in_fr', width: 180 },
        { columnName: 'name_in_en', width: 180 },
        { columnName: 'name_in_ar', width: 200 },
      ]);
      const [sorting, getSorting] = useState([]);
      const [editingRowIds, getEditingRowIds] = useState([]);
      const [addedRows, setAddedRows] = useState([]);
      const [rowChanges, setRowChanges] = useState({});
      const [currentPage, setCurrentPage] = useState(0);
      const [pageSize, setPageSize] = useState(0);
      const [pageSizes] = useState([5, 10, 0]);
      const [columnOrder, setColumnOrder] = useState(['name_in_fr','name_in_en','name_in_ar','product']);
 
      const [leftFixedColumns] = useState([TableEditColumn.COLUMN_TYPE]);
      const [totalSummaryItems] = useState([
        { columnName: 'discount', type: 'avg' },
        { columnName: 'amount', type: 'sum' },
      ]);

      const [editingStateColumnExtensions] = useState([
        { columnName: 'region', editingEnabled: false },
      ]);

      const changeAddedRows = value => setAddedRows(
        value.map(row => (Object.keys(row).length ? row : {
         
          product: availableValues.product[0],
    
        })),
      );
    
      const deleteRows = (deletedIds) => {
        const rowsForDelete = rows.slice();
        deletedIds.forEach((rowId) => {
          const index = rowsForDelete.findIndex(row => row.id === rowId);
          if (index > -1) {
            rowsForDelete.splice(index, 1);
          }
        });
        return rowsForDelete;
      };
    
      const commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
          const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
          changedRows = [
            ...rows,
            ...added.map((row, index) => ({
              id: startingAddedId + index,
              ...row,
            })),
          ];
        }
        if (changed) {
          changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
          changedRows = deleteRows(deleted);
        }
        setRows(changedRows);
      };

      //rows_post

   
    
      const commitChangesPost = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
          const startingAddedId = rows_post.length > 0 ? rows_post[rows_post.length - 1].id + 1 : 0;
          changedRows = [
            ...rows_post,
            ...added.map((row, index) => ({
              id: startingAddedId + index,
              ...row,
            })),
          ];
        }
        if (changed) {
          changedRows = rows_post.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
          changedRows = deleteRows(deleted);
        }
        setRowsPost(changedRows);
      };

      //rows_edit
      const commitChangesEdit = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
          const startingAddedId = rows_edit.length > 0 ? rows_edit[rows_edit.length - 1].id + 1 : 0;
          changedRows = [
            ...rows_edit,
            ...added.map((row, index) => ({
              id: startingAddedId + index,
              ...row,
            })),
          ];
        }
        if (changed) {
          changedRows = rows_edit.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
          changedRows = deleteRows(deleted);
        }
        setRowsEdit(changedRows);
      };

      //select ui layout
      const [age, setAge] = React.useState('');

      const handleChangeLayout = (event) => {
        setAge(event.target.value);
      };
      //popup 
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const [openRule, setOpenRule] = React.useState(false);
      const handleOpenRule = () => {
        setPopupTitle("Add rule")
        setNameOfField("")
        setComparisionSignal("")
         setToValue("") 
        setHtmlIf("")
        setHtmlElse()
       
        setOpenRule(true)
      };
      const handleCloseRule = () => setOpenRule(false);

      //custom field open 
      const [openCustomFieldPost, setOpenCustomFieldPost] = React.useState(false);
      //selectType
      //rowsPostTypes
      const handleOpenCustomFieldPost = () => {
        setCustomFieldTitle("Add Custom Field")
        setType("")
        setRowsPostType([])
        setFieldNamePost("")  
        setOpenCustomFieldPost(true)
      };
      const handleCloseCustomFieldPost = () => setOpenCustomFieldPost(false);

        //custom field popup
       const [openCustomFieldUpdate, setOpenCustomFieldUpdate] = React.useState(false);

         const handleOpenCustomFieldUpdate = () => {
        setCustomFieldTitle("Add Custom Field")
        setTypeUpdate("")
        setRowsPostType([])
        setFieldNamePostUpdate("")  
        setOpenCustomFieldUpdate(true)
      };
      const handleCloseCustomFieldUpdate = () => setOpenCustomFieldUpdate(false);


         //custom field open 
         const [openvalidationPost, setOpenValidationPost] = React.useState(false);
         //selectType
         //rowsPostTypes
         const handleOpenValidationPost = () => {
           setPopupValidationPost("Add Validation Rule")
           setFieldNamePost("")  
           setOpenValidationPost(true)
         };
         const handleCloseValidationPost = () => setOpenValidationPost(false);
   

            //update  field open 
            const [openvalidationupdate, setOpenValidationUpdate] = React.useState(false);
            //selectType
            //rowsPostTypes
            const handleOpenValidationUpdate = () => {
              setPopupValidationUpdate("Add Validation Rule")
              setFieldNamePost("")  
              setOpenValidationUpdate(true)
            };
            const handleCloseValidationUpdate = () => setOpenValidationUpdate(false);
      








      //select Custom Field 
 
      const handleChangeType = (event) => {
        setType(event.target.value);
      };

        const handleChangeTypeUpdate = (event) => {
        setTypeUpdate(event.target.value);
      };

 
      const handleChangeDataFrom = (event) => {
        setDataFrom(event.target.value);
      };

      
      const handleChangeDataFromUpdate = (event) => {
        setDataFromUpdate(event.target.value);
      };
      
    

    return (
    <>
        <h1>Let's rewrite the stars  </h1>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
       {nextStep ?
        <>
           <TextField id="outlined-basic" 
      label="Component Name" 
      variant="outlined"
      name="component_name"
      value={component_name}
      onChange={e => setComponentName(e.target.value)}
      />
      <br />
      <TextField id="outlined-basic" 
      label="Get request url"
      style={{marginTop:"2%"}} 
      variant="outlined"
      name="getRequesturl"
      value={getRequesturl}
      onChange={e => setgetrequestUrl(e.target.value)}
      />
      {/* Auth  */} 
      <FormControl fullWidth 
      style={{marginTop:"2%"}}
      >
  <InputLabel id="demo-simple-select-label">Auth Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={authType}
    label="authType"
    onChange={handleChangeAuthType}
  >
    <MenuItem value={"Basic"}>Basic</MenuItem>
    <MenuItem value={"BearerToken"}>Bearer Token</MenuItem>
    <MenuItem value={"NoAuth"}>No Auth</MenuItem>
  </Select>
</FormControl>
     {authType =="Basic" &&
      <>
          <TextField id="outlined-basic" 
      label="Username"
      style={{marginTop:"2%"}} 
      variant="outlined"
      name="usernameAuthBasic"
      value={usernameAuthBasic}
      onChange={e => setUsernameAuthBasic(e.target.value)}
      />

    <TextField id="outlined-basic" 
          label="Password"
          style={{marginTop:"2%"}} 
          variant="outlined"
          name="passwordAuthBasic"
          value={passwordAuthBasic}
          onChange={e => setPasswordAuthBasic(e.target.value)}
          />
     </>
     }   
    {
     authType =="BearerToken" && 
     <>
         <TextField id="outlined-basic" 
          label="Token"
          style={{marginTop:"2%"}} 
          variant="outlined"
          name="tokenAuthBasic"
          value={tokenAuthBasic}
          onChange={e => setTokenauthBasic(e.target.value)}
          />
     </>
    }

         <br />
      <Button
      style={{marginTop:"2%"}}
      variant="contained"
      onClick={() => HandleGotNextStep()}
      >Next</Button>
       </>
       :
       <>
       <div style={{display:"flex"}}>
       <p style={{textAlign:"left",marginBottom:"1%"}}>Component Name :</p>
       <p style={{color:"blue"}}>{component_name}</p>
       </div>
       <div style={{display:"flex",justifyContent:"end"}}>
      <Button variant="text"
      onClick={() => saveGet()}
      >
            <SaveIcon />    
            Genereate Files 

        </Button>
      </div>
       {/* Get Method*/}
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Get Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={valueGet} onChange={handleChangeGet} aria-label="basic tabs example">
    <Tab label="Observeble fields" {...a11yProps(0)} />
    <Tab label="Condition Show component or design" {...a11yProps(1)} />
  
  </Tabs>
</Box>
<TabPanel value={valueGet} index={0}>
            Observeble Fields
            <Button variant="text" style={{display:"flex",justifyContent:"end"}}>
            <TranslateIcon />    
            Generate translation

            </Button>
            <Paper>
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <SortingState
          sorting={sorting}
          onSortingChange={getSorting}
        />
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <EditingState
          editingRowIds={editingRowIds}
          onEditingRowIdsChange={getEditingRowIds}
          rowChanges={rowChanges}
          onRowChangesChange={setRowChanges}
          addedRows={addedRows}
          onAddedRowsChange={changeAddedRows}
          onCommitChanges={commitChanges}
          defaultEditingRowIds={[0]}
          columnExtensions={editingStateColumnExtensions}
        />
       

        <IntegratedSorting />
        <IntegratedPaging />
    
 
    

        <DragDropProvider />

        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={setColumnOrder}
        />
        <TableHeaderRow showSortingControls />
        <TableEditRow
          cellComponent={EditCell}
        />
        <TableEditColumn
          width={170}
         
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
    
        <TableFixedColumns
          leftColumns={leftFixedColumns}
        />
        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
    </Paper>
   
</TabPanel>

<TabPanel value={valueGet} index={1}>

 
<Button onClick={handleOpenRule}>Add new Rule</Button>

    {all_rules.length!=0 && all_rules.map((el,i) => ( <>
    <p>
    Applicate a rule to field {el.nameofField} where {el.nameofField} 
      {el.comparision_signal} {el.to_value}  
    </p>
    <DeleteForeverIcon style={{color:"red"}}
    onClick={() => handleDeleteGet(el.nameofField)}
    />
    <ModeEditIcon style={{color:"green"}}
       onClick={() => handleEditGet(i,el)} 
    />
    </>))}
      <Modal
        open={openRule}
        onClose={handleCloseRule}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {popupTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}
          style={{maxHeight:"300px",overflow:"auto"}}
          >
            {/* Custom Field Select Data */}
            Applicate a rule to 
            <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nameofField}
          label="Field"
          onChange={handleChangeFieldName}
        >
          {rows.map(el => (
              <MenuItem value={el.region}>{el.region}</MenuItem>
          ))}
        
       
        </Select>

      </FormControl>
              where  value of the field {nameofField}
              <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">signal</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={comparision_signal}
          label="Field"
          onChange={handleChangeComparisionSignal}
        >
       {comparision_table.map(el => (
        
           <MenuItem value={el}>
                {el}
                </MenuItem>
        
       )) }
           
         

        </Select>

      </FormControl>
               <p>  to </p>
           
                <TextField id="outlined-basic" 
      label="Value here " 
      variant="outlined"
      name="to_value"
      value={to_value}
      onChange={e => setToValue(e.target.value)}
      />

        <p>Show </p>
        <CodeMirror
style={{textAlign:"left"}}
 value={html_if}
 height="300px"
 width="300px"
 theme="dark"
 extensions={[loadLanguage('html')]}
 onChange={(value) =>onChangeCodeHtmlIf (value)}

/>
        <p>else Show </p>
        <CodeMirror
style={{textAlign:"left"}}
 value={html_else}
 height="300px"
 width="300px"
 theme="dark"
 extensions={[loadLanguage('html')]}
 onChange={(value) =>onChangeCodeHtmlElse (value)}

/>

      <div style={{display:"flex",justifyContent:"end"}}>
      <Button variant="text"
      onClick={() => saveRuleGet()}
      >
            <SaveIcon />    
            Save the rule

        </Button>
      </div>
      
      

          </Typography>
        </Box>
      </Modal>
<div style={{display:"flex",justifyContent:"end"}}>
 <Button variant="text" >
            <SaveIcon />    
            Save

        </Button>
      </div>
</TabPanel>

       
          </Typography>
        </AccordionDetails>
      </Accordion>
       {/* Post Method*/}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Post Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Modal information validation  */}
        <CrudvalidationInformation />

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="field" {...a11yProps(0)} />
          <Tab label="Custom Field" {...a11yProps(1)} />
          <Tab label="Layout post" {...a11yProps(2)} />
          <Tab label="Validation Field" {...a11yProps(3)} />
        </Tabs>
      </Box>
         {/* Post Method field */}
      <TabPanel value={value} index={0}>
      <Paper>
      <Grid
        rows={rows_post}
        columns={columns}
        getRowId={getRowId}
      >
        <SortingState
          sorting={sorting}
          onSortingChange={getSorting}
        />
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <EditingState
          editingRowIds={editingRowIds}
          onEditingRowIdsChange={getEditingRowIds}
          rowChanges={rowChanges}
          onRowChangesChange={setRowChanges}
          addedRows={addedRows}
          onAddedRowsChange={changeAddedRows}
          onCommitChanges={commitChangesPost}
        />
        <SummaryState
          totalItems={totalSummaryItems}
        />

        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSummary />

      
        <DragDropProvider />

        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={setColumnOrder}
        />
        <TableHeaderRow showSortingControls />
        <TableEditRow
          cellComponent={EditCell}
        />
        <TableEditColumn
          width={170}
          showAddCommand={!addedRows.length}
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
        <TableSummaryRow />
        <TableFixedColumns
          leftColumns={leftFixedColumns}
        />
        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
    </Paper>
      </TabPanel>
         {/* Post Method custom field */}
      <TabPanel value={value} index={1}>
       <p>Custom field</p> 
       
        {all_custom_post_field.length!=0 && all_custom_post_field.map((el,i) => ( <>
    <p>
    Applicate a custom field to {el.fieldNamePost}
     with type  {el.selectType} getting from 
      {el.selectDataFrom} the first data is  {el.rowsPostTypes[0].name}  
    </p>
    <DeleteForeverIcon style={{color:"red"}}
    onClick={() => handleDeleteCustomPostField (el.fieldNamePost)}
    />
    <ModeEditIcon style={{color:"green"}}
       onClick={() => handleEditGetCustomPostField (i,el)} 
    />
    </>))}




        <Button onClick={handleOpenCustomFieldPost}>Add new Custom Field</Button>
      <Modal
        open={openCustomFieldPost}
        onClose={handleCloseCustomFieldPost}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {popupCustomFieldTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   {/* Custom Field Name Select Post */}
          <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Field</InputLabel>
        <Select
        disabled={popupCustomFieldTitle=="Edit Custom Field"}

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fieldNamePost}
          label="Field"
     
          onChange={handleChangeFieldNamePost}
        >
          {rows_post.map(el => (
              <MenuItem value={el.region}>{el.region}</MenuItem>
          ))}
        
       
        </Select>

      </FormControl>
            {/* Custom Field Select Data Post */}
          <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Type of Custom Field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectType}
          label="Type of Custom Field"
          onChange={handleChangeType}
        >
          <MenuItem value={"AutoComplete"}>Auto Complete</MenuItem>
          <MenuItem value={"MultipleSelect"}>Multiple Select</MenuItem>
          <MenuItem value={"Select"}>Select </MenuItem>
          <MenuItem value={"CheckBox"}>CheckBox </MenuItem>
          <MenuItem value={"Text"}>Text </MenuItem>
          <MenuItem value={"Number"}>Number </MenuItem>
        </Select>

      </FormControl>

      <FormControl fullWidth
       style={{marginTop:"3%"}}
      >
        <InputLabel id="demo-simple-select-label">Data Comes From</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectDataFrom}
          label="Data Comes From"
          onChange={handleChangeDataFrom}
        >
          <MenuItem value={"Api"}>Api</MenuItem>
          <MenuItem value={"StaticData"}>Static Data</MenuItem>
        
        </Select>
        
      </FormControl>
      {selectDataFrom =="Api" && 
      <>
     <TextField 
      fullWidth
     style={{marginTop:"2%"}}
     id="outlined-basic" label="Api Url" variant="outlined" />
         <div style={{display:"flex",justifyContent:"end"}}>
 <Button variant="text" 

 >
            <SaveIcon />    
            Save

        </Button>
      </div>
      </>

      }
       {selectDataFrom =="StaticData" && 
      <>
      
      <Paper  style={{marginTop:"1%"}}>
      <Grid
        rows={rowsPostTypes}
        columns={columnsPostYpes}
        getRowId={getRowPostType}
      >
        <EditingState
          onCommitChanges={commitChangesPostTypes}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
   
     

    </Paper>  

      </>
      }

<div style={{display:"flex",justifyContent:"end"}}>
      <Button variant="text"
      onClick={() => saveRuleCustomFieldPost()}
      >
            <SaveIcon />    
            Save Custom Field
        </Button>
      </div>
          </Typography>
        </Box>
      </Modal>
      </TabPanel>
   
      {/* Post Method Layout */}
      <TabPanel value={value} index={2}>
      <FormControl 
      style={{marginTop:"1%"}}
      fullWidth>
        <InputLabel id="demo-simple-select-label">Layout Post Form</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Layout Post Form"
          onChange={handleChangeLayout}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>

      </TabPanel>

      {/* Post Validation  */}
      <TabPanel value={value} index={3}>
      {all_validation_post.length!=0 && all_validation_post.map((el,i) => ( <>
   
    <p>
    Applicate a Validation rule to {el.fieldNamePost}
     where {el.fieldNamePost} is {el.validation_post_field}
   
    </p>
    <DeleteForeverIcon style={{color:"red"}}
    onClick={() => handleDeleteValidationPost (el.fieldNamePost)}
    />
    <ModeEditIcon style={{color:"green"}}
       onClick={() => handleEditValidationPost (i,el)} 
    />
    </>))}


      <Button onClick={handleOpenValidationPost}>Add new Value Validation</Button>
      <Modal
        open={openvalidationPost}
        onClose={handleCloseValidationPost}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {popupTitleValidationPost}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   {/* Custom Field Name Select Post */}
          <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Field</InputLabel>
        <Select
             disabled={popupTitleValidationUpdate=="Edit Validation Rule"}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fieldNamePost}
          label="Field"
          onChange={handleChangeFieldNamePost}
        >
          {rows_data.map(el => (
              <MenuItem value={el.region}>{el.region}</MenuItem>
          ))}
        
       
        </Select>

      </FormControl>
            {/* Custom Field Select Data Post */}
          <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Type of Validation Apllicated To</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={validation_post_field}
          label="Type of Validation Apllicated To"
          onChange={handleChangeValidationPostField}
        >
          <MenuItem value={"Required"}>Required</MenuItem>
          <MenuItem value={"Alphabet Majus"}>Alphabet Majus</MenuItem>
          <MenuItem value={"Alphabet Menus"}>Alphabet Menus</MenuItem>
          <MenuItem value={"Alphabet"}>Alphabet </MenuItem>
          <MenuItem value={"Decimal"}>Decimal</MenuItem>
       
        </Select>

      </FormControl>
<div style={{display:"flex",justifyContent:"end"}}>
      <Button variant="text"
      onClick={() => saveRuleValidationPost()}
      >
            <SaveIcon />    
            Save Validation Rule 
        </Button>
      </div>
          </Typography>
        </Box>
      </Modal>
      </TabPanel>

          </Typography>
        </AccordionDetails>
      </Accordion>
       {/* Update Method*/}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Update Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
               {/* Modal information validation  */}
        <CrudvalidationInformation />
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="field" {...a11yProps(0)} />
          <Tab label="Custom Field" {...a11yProps(1)} />
          <Tab label="Layout Update" {...a11yProps(2)} />
          <Tab label="Validation Field" {...a11yProps(3)} />
        </Tabs>
      </Box>
{/* Update Method Field */}
      <TabPanel value={value} index={0}>
      <Paper>
      <Grid
        rows={rows_edit}
        columns={columns}
        getRowId={getRowId}
      >
        <SortingState
          sorting={sorting}
          onSortingChange={getSorting}
        />
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <EditingState
          editingRowIds={editingRowIds}
          onEditingRowIdsChange={getEditingRowIds}
          rowChanges={rowChanges}
          onRowChangesChange={setRowChanges}
          addedRows={addedRows}
          onAddedRowsChange={changeAddedRows}
          onCommitChanges={commitChangesEdit}
        />
        <SummaryState
          totalItems={totalSummaryItems}
        />

        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSummary />

       
        <DragDropProvider />

        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={setColumnOrder}
        />
        <TableHeaderRow showSortingControls />
        <TableEditRow
          cellComponent={EditCell}
        />
        <TableEditColumn
          width={170}
          showAddCommand={!addedRows.length}
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
        <TableSummaryRow />
        <TableFixedColumns
          leftColumns={leftFixedColumns}
        />
        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
    </Paper>
      </TabPanel>
{/* Update Method Custom Field */}
 <TabPanel value={value} index={1}>
       <p>Custom field</p> 
       
        {all_custom_Update_field.length!=0 && all_custom_Update_field.map((el,i) => ( <>
    <p>
    Applicate a custom field to {el.fieldNamePostUpdate}
     with type  {el.selectTypeUpdate} getting from 
      {el.selectDataFromUpdate} the first data is  {el.rowsPostTypes[0].name}  
    </p>
    <DeleteForeverIcon style={{color:"red"}}
    onClick={() => handleDeleteCustomUpdateField (el.fieldNamePostUpdate)}
    />
    <ModeEditIcon style={{color:"green"}}
       onClick={() => handleEditGetUpdatePostField (i,el)} 
    />
    </>))}
    



        <Button onClick={handleOpenCustomFieldUpdate}>Add new Custom Field</Button>
      <Modal
        open={openCustomFieldUpdate}
        onClose={handleCloseCustomFieldUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {popupCustomFieldUpdate}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   {/* Custom Field Name Select Post */}
          <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Field</InputLabel>
        <Select
           disabled={popupCustomFieldUpdate=="Edit Custom Field"}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fieldNamePostUpdate}
          label="Field"
          onChange={handleChangeFieldNameUpdate}
        >
          {rows_edit.map(el => (
              <MenuItem value={el.region}>{el.region}</MenuItem>
          ))}
        
       
        </Select>

      </FormControl>
            {/* Custom Field Select Data Post */}
          <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Type of Custom Field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectTypeUpdate}
          label="Type of Custom Field"
          onChange={handleChangeTypeUpdate}
        >
          <MenuItem value={"AutoComplete"}>Auto Complete</MenuItem>
          <MenuItem value={"MultipleSelect"}>Multiple Select</MenuItem>
          <MenuItem value={"Select"}>Select </MenuItem>
          <MenuItem value={"CheckBox"}>CheckBox </MenuItem>
          <MenuItem value={"Text"}>Text </MenuItem>
          <MenuItem value={"Number"}>Number </MenuItem>
        </Select>

      </FormControl>

      <FormControl fullWidth
       style={{marginTop:"3%"}}
      >
        <InputLabel id="demo-simple-select-label">Data Comes From</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectDataFromUpdate}
          label="Data Comes From"
          onChange={handleChangeDataFromUpdate}
        >
          <MenuItem value={"Api"}>Api</MenuItem>
          <MenuItem value={"StaticData"}>Static Data</MenuItem>
        
        </Select>
        
      </FormControl>
      {selectDataFromUpdate =="Api" && 
      <>
     <TextField 
      fullWidth
     style={{marginTop:"2%"}}
     id="outlined-basic" label="Api Url" variant="outlined" />
         <div style={{display:"flex",justifyContent:"end"}}>
 <Button variant="text" 

 >
            <SaveIcon />    
            Save

        </Button>
      </div>
      </>

      }
       {selectDataFromUpdate =="StaticData" && 
      <>
      
      <Paper  style={{marginTop:"1%"}}>
      <Grid
        rows={rowsPostTypes}
        columns={columnsPostYpes}
        getRowId={getRowPostType}
      >
        <EditingState
          onCommitChanges={commitChangesPostTypes}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
   
     

    </Paper>  

      </>
      }

<div style={{display:"flex",justifyContent:"end"}}>
      <Button variant="text"
      onClick={() => saveRuleCustomFieldUpdate()}
      >
            <SaveIcon />    
            Save Custom Field
        </Button>
      </div>
          </Typography>
        </Box>
      </Modal>
      </TabPanel>
   

      {/* Update Method Layout */}
      <TabPanel value={value} index={2}>
      <FormControl 
      style={{marginTop:"1%"}}
      fullWidth>
        <InputLabel id="demo-simple-select-label">Layout Update Form</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Layout Update Form"
          onChange={handleChangeLayout}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
     
      </TabPanel>

         {/* Edit Validation  */}
         <TabPanel value={value} index={3}>
         {all_validation_update.length!=0 && all_validation_update.map((el,i) => ( <>
   
   <p>
   Applicate a Validation rule to {el.fieldNamePost}
    where {el.fieldNamePost} is {el.validation_update_field}
  
   </p>
   <DeleteForeverIcon style={{color:"red"}}
   onClick={() => handleDeleteValidationUpdate (el.fieldNamePost)}
   />
   <ModeEditIcon style={{color:"green"}}
      onClick={() => handleEditValidationUpdate (i,el)} 
   />
   </>))}


     <Button onClick={handleOpenValidationUpdate}>Add new Value Validation</Button>
     <Modal
       open={openvalidationupdate}
       onClose={handleCloseValidationUpdate}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
         <Typography id="modal-modal-title" variant="h6" component="h2">
           {popupTitleValidationUpdate}
         </Typography>
         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  {/* Custom Field Name Select Update */}
         <FormControl fullWidth
         style={{marginTop:"1%"}}
         >
       <InputLabel id="demo-simple-select-label">Field</InputLabel>
       <Select
       disabled={popupTitleValidationUpdate=="Edit Validation Rule"}
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={fieldNamePost}
         label="Field"
         onChange={handleChangeFieldNamePost}
       >
         {rows_data.map(el => (
             <MenuItem value={el.region}>{el.region}</MenuItem>
         ))}
       
      
       </Select>

     </FormControl>
     
           {/* Custom Field Select Data Update */}
         <FormControl fullWidth
         style={{marginTop:"1%"}}
         >
       <InputLabel id="demo-simple-select-label">Type of Validation Apllicated To</InputLabel>
       <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
         value={validation_update_field}
         label="Type of Validation Apllicated To"
         onChange={handleChangeValidationUpdateField}
       >
         <MenuItem value={"Required"}>Required</MenuItem>
         <MenuItem value={"Alphabet Majus"}>Alphabet Majus</MenuItem>
         <MenuItem value={"Alphabet Menus"}>Alphabet Menus</MenuItem>
         <MenuItem value={"Alphabet"}>Alphabet </MenuItem>
         <MenuItem value={"Decimal"}>Decimal</MenuItem>
      
       </Select>

     </FormControl>
<div style={{display:"flex",justifyContent:"end"}}>
     <Button variant="text"
     onClick={() => saveRuleValidationUpdate()}
     >
           <SaveIcon />    
           Save Validation Rule 
       </Button>
     </div>
         </Typography>
       </Box>
     </Modal>
         </TabPanel>
          </Typography>
        </AccordionDetails>
      </Accordion>
        {/* Delete Method*/}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>delete Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <TextField id="outlined-basic"
              fullWidth
              style={{marginTop:"1%"}}
              label="Frensh text" variant="outlined" />
              <br></br>
         <TextField
                 fullWidth
                 style={{marginTop:"1%"}}
              id="outlined-basic" label="Arabic text" variant="outlined" />
              <br></br>
         <TextField 
            fullWidth
            style={{marginTop:"1%"}}
         id="outlined-basic" label="English text" variant="outlined" />
         <Button
              style={{marginTop:"1%"}}
         variant="contained">Update</Button>
          </Typography>

        </AccordionDetails>
      </Accordion>
        {/* Search Method*/}
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Search Method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
               {/* Modal information validation  */}
        <CrudvalidationInformation />
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="field" {...a11yProps(0)} />
          <Tab label="Custom Field" {...a11yProps(1)} />
          <Tab label="Layout" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* Search Field*/}
      <TabPanel value={value} index={0}>
      <Paper>
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <SortingState
          sorting={sorting}
          onSortingChange={getSorting}
        />
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <EditingState
          editingRowIds={editingRowIds}
          onEditingRowIdsChange={getEditingRowIds}
          rowChanges={rowChanges}
          onRowChangesChange={setRowChanges}
          addedRows={addedRows}
          onAddedRowsChange={changeAddedRows}
          onCommitChanges={commitChanges}
        />
        <SummaryState
          totalItems={totalSummaryItems}
        />

        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSummary />

     
        <DragDropProvider />

        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={setColumnOrder}
        />
        <TableHeaderRow showSortingControls />
        <TableEditRow
          cellComponent={EditCell}
        />
        <TableEditColumn
          width={170}
          showAddCommand={!addedRows.length}
          showEditCommand
          showDeleteCommand
          commandComponent={Command}
        />
        <TableSummaryRow />
        <TableFixedColumns
          leftColumns={leftFixedColumns}
        />
        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
    </Paper>
      </TabPanel>
      {/* Search Custom Fields*/}
      <TabPanel value={value} index={1}>
        Custom field
        <Button onClick={handleOpen}>Add new Custom Field</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Custom Field
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Custom Field Select Data */}
          <FormControl fullWidth
          style={{marginTop:"1%"}}
          >
        <InputLabel id="demo-simple-select-label">Type of Custom Field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectType}
          label="Type of Custom Field"
          onChange={handleChangeType}
        >
          <MenuItem value={10}>Auto Complete</MenuItem>
          <MenuItem value={20}>Multiple Select</MenuItem>
          <MenuItem value={30}>Select </MenuItem>
          <MenuItem value={30}>CheckBox </MenuItem>
        </Select>

      </FormControl>
      
      <FormControl fullWidth
       style={{marginTop:"3%"}}
      >
        <InputLabel id="demo-simple-select-label">Data Comes From</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectDataFrom}
          label="Data Comes From"
          onChange={handleChangeDataFrom}
        >
          <MenuItem value={"Api"}>Api</MenuItem>
          <MenuItem value={"StaticData"}>Static Data</MenuItem>
        
        </Select>
        
      </FormControl>
      {selectDataFrom =="Api" && 
      <>
     <TextField 
      fullWidth
     style={{marginTop:"2%"}}
     id="outlined-basic" label="Api Url" variant="outlined" />
         <div style={{display:"flex",justifyContent:"end"}}>
 <Button variant="text" 

 >
            <SaveIcon />    
            Save

        </Button>
      </div>
      </>

      }
       {selectDataFrom =="StaticData" && 
      <>
      
      <Paper  style={{marginTop:"1%"}}>
      <Grid
        rows={rowsPostTypes}
        columns={columnsPostYpes}
        getRowId={getRowPostType}
      >
        <EditingState
          onCommitChanges={commitChangesPostTypes}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
      </Grid>
      <div style={{display:"flex",justifyContent:"end"}}>
 <Button variant="text" >
            <SaveIcon />    
            Save

        </Button>
      </div>
     

    </Paper>  

      </>
      }

          </Typography>
        </Box>
      </Modal>
      </TabPanel>

         {/* Search Layout*/}
      <TabPanel value={value} index={2}>
      <FormControl 
      style={{marginTop:"1%"}}
      fullWidth>
        <InputLabel id="demo-simple-select-label">Layout</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Layout"
          onChange={handleChangeLayout}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <Button 
        style={{marginTop:"1%"}}
      variant="contained">Update</Button>
      </TabPanel>
          </Typography>
        </AccordionDetails>
      </Accordion>


       </>    
    
    }
   
      </CardContent>
   
    </Card>
       <ToastContainer/> 
    </>
    )
}
export default CrudApp

