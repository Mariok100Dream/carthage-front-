import  React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Navbar.css"

import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from "react-router-dom"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {logo} from "../logo/logo"
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const drawerWidth = 240;
const navItems = ['traduction'];
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function DrawerAppBar(props) {
  const { window,firstText,secondText } = props;
  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    // {
    //   code: 'ar',
    //   name: 'العربية',
    //   dir: 'rtl',
    //   country_code: 'sa',
    // },
  ]
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // useEffect(() => {

  //   document.body.dir = currentLanguage.dir || 'ltr'
  //  console.log(currentLanguage)
  // }, [currentLanguage, t])
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">
       
        phenix
        </Link>
       
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const [isShowingButton,setIsShowingButton] = React.useState(true)
  const [isShowingText,setIsShowingText] = React.useState(false)
  const handleEnterEvent = (e) =>{
 
    setIsShowingButton(false)
    setIsShowingText(true)
  }
  const handleLeaving = (e) =>{
    setIsShowingButton(true)
    setIsShowingText(false)
  }
  const [languageSelected, setlanguageSelected] = React.useState(currentLanguage?.code);

  const handleChangeLanguageSelected = (event) => {
    setlanguageSelected(event.target.value);
    i18next.changeLanguage(event.target.value)

  };
  return (
    <Box sx={{ display: 'flex' }}>
       <img src={logo}/>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.5, display: { xs: 'none', sm: 'block' } }}
          >
            <div >
                      < a href="https://www.facebook.com/profile.php?id=100087120832456" target="_blank" rel="noopener noreferrer"            

            style={{marginRight:"2%",textDecoration:"none",color:"white"}}
         >
             <FacebookIcon />
            </a>
           < a href="https://twitter.com/shadowk19527226" target="_blank" rel="noopener noreferrer"            
       
              style={{marginRight:"2%",textDecoration:"none",color:"white"}}
            >
            <TwitterIcon />
            </a>
            < a href="https://www.youtube.com/channel/UC1RuJgRdKa3YabbObNRmxJQ" target="_blank" rel="noopener noreferrer"
              style={{marginRight:"2%",textDecoration:"none",color:"white"}}
            >
            <YouTubeIcon />
            </a>
            <Link to="/" style={{textDecoration:"none",color:"white"
          
          }}>
            phenix
            </Link>
            </div>
            
          
         
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/" style={{textDecoration:"none",color:"white"}}>
          <Button  sx={{ color: '#fff' }}>
          {t('translate')}
              </Button>
          </Link>
          <Link to="/Converter" style={{textDecoration:"none",color:"white"}}>
        
          <Button  sx={{ color: '#fff' }}>
            {t("converter")}
               
              </Button>
       
      
          </Link>
          {/* <Link to="/FormGenerator" style={{textDecoration:"none",color:"white"}}>
          <Button  sx={{ color: '#fff' }}>
                Generator
              </Button>
          </Link>   */}

          <Link to="/CssExtractor" style={{textDecoration:"none",color:"white"}}>
          <Button  sx={{ color: '#fff' }}>
              {t("htmlCssCombiner")}
              </Button>
         
          </Link>   
           {/* <Link to="/Drive" style={{textDecoration:"none",color:"white"}}>
          <Button  sx={{ color: '#fff' }}>
                Drive
              </Button>
          </Link>  */}
         <Link to="/Drager" style={{textDecoration:"none",color:"white"}}>
          <Badge badgeContent={"new"} color="secondary">
          <Button  sx={{ color: '#fff' }}>
          
          {t("carthage")}
              </Button>
              </Badge>
          </Link>   
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.5, display: { xs: 'none', sm: 'block' } }}
          >
            {isShowingButton && <>
                <Button variant="contained" style={{color:"black",backgroundColor:"yellow"}}
            onMouseEnter = {( e) => handleEnterEvent(e)}
            >
                {t("donate")}
                </Button>
            </>}

            {isShowingText && <><div class="typewriter"
            onMouseLeave={(e) => handleLeaving(e)}
            >
  <h1>{firstText} <FavoriteIcon style={{color:"red"}}/> {" "}{secondText} <EmojiEmotionsIcon 
  style={{color:"yellow"}}
  /></h1>
</div></>}
  
        
          </Typography>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{color:"white",border:"none"}}
          value={languageSelected}
          label="Age"
          onChange={handleChangeLanguageSelected}
        >
          {languages.map(el => (
 <MenuItem value={el.code}>{el.name}</MenuItem>
          ))}
         
         
        </Select>
      </FormControl>
    </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
    
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
