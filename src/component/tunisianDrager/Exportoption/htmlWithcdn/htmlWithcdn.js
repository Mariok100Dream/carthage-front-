import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

const HtmlWithCdn = () =>{
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
              <ListItemText primary=" better performance" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary="increased reliability" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary="cost savings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary="resilience against cyber attacks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                < NotInterestedIcon color="error"/>
              </ListItemIcon>
              <ListItemText primary="run with connection and Loss of control" />
            </ListItemButton>
          </ListItem>
         
        </List>
      </nav>
   
    </Box>
        </>
    )
}

export default HtmlWithCdn