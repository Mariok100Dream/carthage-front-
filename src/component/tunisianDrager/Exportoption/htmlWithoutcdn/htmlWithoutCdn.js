import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const HtmlWithoutCdn = () =>{
    return ( 
        <>
           <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary="Application Run without Connection" />
            </ListItemButton>
          </ListItem>
     
        </List>
      </nav>
   
    </Box>
        </>
    )
}

export default HtmlWithoutCdn