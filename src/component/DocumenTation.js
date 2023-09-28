import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HtmlToReactDocs from "./Documentation/HtmlToReactDocs"
import TranslatorDocs from "./Documentation/TranslatorDocs"
import CombinerTools from "./Documentation/CombinerDocs"
import Phenix from "./Documentation/phenix"
export default function Documentation(props) {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  let {type} = props

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
             <div
        style={{backgroundColor: "#e7f3fe",
          borderLeft: "6px solid #2196F3",
        cursor:"pointer"
        }}
        onClick={toggleDrawer(anchor, true)}
          
        variant="outlined"  >
      <strong>create a new project!</strong>
        </div>
        
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
           {type == "htmlToOthers" && <HtmlToReactDocs />}

           {type =="translator" && <TranslatorDocs />}

            {type=="CssCombiner" && <CombinerTools /> }

            {type=="phenix" && <Phenix /> }
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}