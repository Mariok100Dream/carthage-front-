import React,{useState} from "react";
import Footer from "../pages/footer"
import Navbar from "./Navbar"

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import "./Uploader.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    SortingState, EditingState, PagingState, SummaryState,
    IntegratedPaging, IntegratedSorting, IntegratedSummary,
  } from '@devexpress/dx-react-grid';
  import {
    Grid,
    Table, TableHeaderRow, TableEditRow, TableEditColumn,
    PagingPanel, DragDropProvider, TableColumnReordering,
    TableFixedColumns, TableSummaryRow,
  } from '@devexpress/dx-react-grid-material-ui';
  import Paper from '@mui/material/Paper';
  
  import IconButton from '@mui/material/IconButton';
  import Input from '@mui/material/Input';
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';
  import TableCell from '@mui/material/TableCell';
  
  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  import SaveIcon from '@mui/icons-material/Save';
  import CancelIcon from '@mui/icons-material/Cancel';
  import { styled } from '@mui/material/styles';
  
  import { ProgressBarCell } from './material-ui/progress-bar-cell';
  import { HighlightedCell } from './material-ui/highlighted-cell';
  import { CurrencyTypeProvider } from './material-ui/currency-type-provider';
  import { PercentTypeProvider } from './material-ui/percent-type-provider';
  
  import {

    globalSalesValues,
  } from './data/generator';
  import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next'

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
    region: globalSalesValues.region,
    customer: globalSalesValues.customer,
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
    if (column.name === 'discount') {
      return <ProgressBarCell {...props} />;
    }
    if (column.name === 'amount') {
      return <HighlightedCell {...props} />;
    }
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
  




  //as design system we begin by 

  //boostrap 
  //argon design input 
  //angular material 
  //shakra ui 
  //antd
  
  //then we gona ameliorate the system 

  //when we finish we go to the extractor  


















const CodeGenerator = () =>{
  const {t} = useTranslation()
    const [columns] = useState([
      { name: 'saleDate', title: 'Label Name' },
        { name: 'product', title: 'Label Type' },
        { name: 'region', title: 'Label Apperiance' },
 
      
        { name: 'customer', title: 'Rules' },
      ]);

        
      const [rows, setRows] = useState([]);


      const [tableColumnExtensions] = useState([
        { columnName: 'saleDate', width: 180 },
        { columnName: 'product', width: 200 },
        { columnName: 'region', width: 180 },
   
     
        { columnName: 'customer', width: 200 },
      ]);
      const [sorting, getSorting] = useState([]);
      const [editingRowIds, getEditingRowIds] = useState([]);
      const [addedRows, setAddedRows] = useState([]);
      const [rowChanges, setRowChanges] = useState({});
      const [currentPage, setCurrentPage] = useState(0);
      const [pageSize, setPageSize] = useState(5);
      const [pageSizes] = useState([5, 10, 0]);
      const [columnOrder, setColumnOrder] = useState(['product', 'region', 'amount', 'discount', 'saleDate', 'customer']);
      const [currencyColumns] = useState(['amount']);
      const [percentColumns] = useState(['discount']);
      const [leftFixedColumns] = useState([TableEditColumn.COLUMN_TYPE]);
      const [totalSummaryItems] = useState([
        { columnName: 'discount', type: 'avg' },
        { columnName: 'amount', type: 'sum' },
      ]);

      let [global_all,setGlobalAll] = useState([])
    
   

      let row_types = [
        {name:"1"},
        {name:"2"},
        {name:"3"},
        {name:"4"},
        {name:"1-2-1"},
        {name:"2-1-1"},
        {name:"1-1-2"},
      ]

      let [row_name,setRowName] = useState("")
      let [global_data,setGlobalData] = useState([])

      const [row_type, setRowType] = React.useState(row_types[0]?.name);

      const handleChangeRowType  = (event) => {
        setRowType(event.target.value);
      };
      const [expanded, setExpanded] = React.useState(false);



      let [panel_name,setPanelName] = useState("")
      const handleChangePanel = (panel) => (event, isExpanded) => {
        setPanelName(panel)
        let data =global_data.filter(el => el.row_name == panel)

        
        //change rows by editing 
        setRows(data[0].row_data)
        setExpanded(isExpanded ? panel : false);
      };
      //global data 
      const addRow = () =>{
            //verify if row and type of row selected 
            //then we add according with a delete button
        
            if(row_name == ""){
              return toast.error("Row name is required")
            }
            if(global_data.filter(el => el.row_name == row_name).length!=0){
              return toast.error("Row name already exist")
            }

       let x= global_data
       let row_data = []
       x.push({row_name,row_type,row_data})
setGlobalData(x)

setRowName("")

      }
      
      const handleDeleteRow = (row_name) =>{
        let result_index =  global_data.filter(function( obj ) {
          return obj.row_name != row_name;
        });
        setGlobalData(result_index)
        setGlobalAll(result_index)
    
      }
      const changeAddedRows = value => setAddedRows(
        value.map(row => (Object.keys(row).length ? row : {
       
          saleDate: "",
          product: availableValues.product[0],
          region: availableValues.region[0],
          customer: availableValues.customer[0],
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
        let data =global_data.filter(el => el.row_name == panel_name)[0]
    
        data["row_data"] = changedRows 
        let now_file = global_data.filter(el => el.row_name != panel_name)
        now_file.push(data)
        //row_name
        setGlobalAll(now_file)
       
        // setGlobalData(data)
       
      };

      const generateCode = () =>{
         
      }

    
    return (
<>
<Navbar  firstText={"don't have a nice day"} secondText={"have a great day"} />
<div className="App" id="ALl">

<Card sx={{ minWidth: 275 }}>
    
      <CardContent>
      <Paper>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <TextField fullWidth 
        name="row_name"
        value={row_name}
        onChange={e => setRowName(e.target.value)}
        
        id="standard-basic" label="Row Name" variant="outlined" />
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Row Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={row_type}
    label="Row Type"
    onChange={handleChangeRowType}
  >
    {row_types.map(el =>(
   <MenuItem value={el.name}>{el.name}</MenuItem>
    ))}
 
    
  </Select>
</FormControl>
        </div>
     
        <Button variant="contained"  
        onClick={() => addRow()}
        >ADD a row</Button>
{global_data.map(el =>(
  <>
     <Accordion expanded={expanded === el.row_name} onChange={handleChangePanel(el.row_name)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {el.row_name}
          </Typography>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography sx={{ color: 'text.secondary' }}>{el.row_type}
          
          </Typography>
          <Typography style={{marginLeft:"35%",marginRight:"35%"}}>
          <Button variant="contained" color="error" 
          onClick={() => handleDeleteRow(el.row_name)}
          >
  Delete
</Button>
          </Typography>
          </div>
        
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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

        <CurrencyTypeProvider for={currencyColumns} />
        <PercentTypeProvider for={percentColumns} />

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
      
        <TableFixedColumns
          leftColumns={leftFixedColumns}
        />
        <PagingPanel
          pageSizes={pageSizes}
        />
      </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>    
  </>
))}
 
    <Button variant="contained"  
        onClick={() => generateCode()}
        >Generate Code </Button>

 
  
    
   <Footer version={"v3" }/> 
    </Paper>
      </CardContent>
      <CardActions>
   

      </CardActions>
    </Card>
 
    <ToastContainer 
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"/>


   
</div>

</>
    )
}
export default CodeGenerator