import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"
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

export default function HtmlToReactDocs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      
          <Tab label="Read me" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      For evrey Section write @Begin NameofComponent @ 
      in the end write @End NameofComponent @ 
      as an exemple 
      <a 
      target="_blank"
      href="https://drive.google.com/drive/folders/1SQJOK2g9123vF-VAcaMHeFi1IyZmUJX-?usp=share_link" >
      https://drive.google.com/drive/folders/1SQJOK2g9123vF-VAcaMHeFi1IyZmUJX-?usp=share_link

      </a>
      </TabPanel>
     
    </Box>
  );
}