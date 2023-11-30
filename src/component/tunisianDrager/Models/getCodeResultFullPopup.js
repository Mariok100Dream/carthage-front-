import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CodeIcon from '@mui/icons-material/Code';
import CodeMirror from "@uiw/react-codemirror";
import Tooltip from '@mui/material/Tooltip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function CustomTabPanel(props) {
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
  
  CustomTabPanel.propTypes = {
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
  
 const  FullScreenCodeResultDialog =() => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
 
      <Tooltip title="Get code of the page">
             <IconButton>
             <CodeIcon onClick={handleClickOpen} style={{color:"white"}}/>
            </IconButton>
             </Tooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Get code of the page
            </Typography>
        
          </Toolbar>
        </AppBar>
        <List>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="HTML" {...a11yProps(0)} />
          <Tab label="CSS" {...a11yProps(1)} />
          <Tab label="JS" {...a11yProps(2)} />
          <Tab label="ALL" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <CodeMirror
        value={"<h1>hello </h1>"}
        height="700px"
        theme="dark"
   

      />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <CodeMirror
        value={".a{color:blue}"}
        height="700px"
        theme="dark"
   

      />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <CodeMirror
        value={"document.body"}
        height="700px"
        theme="dark"
   

      />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <CodeMirror
        value={"document.body1"}
        height="700px"
        theme="dark"
   

      />
      </CustomTabPanel>
    </Box>
        
         
        </List>
      </Dialog>
    </div>
  );
}
export default FullScreenCodeResultDialog