import * as React from 'react';
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
import Button from '@mui/material/Button';
import logo from "../assets/abstract-flower-square.png"
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {text: 'Home', route: '/'},
  {text: 'Kevin', route: '/kevin'},
  {text: 'Linfeng', route: '/linfeng'},
  {text: 'John', route: '/john'},
  {text: 'Dominik', route: '/dominik'},
]

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const linkStylesMobile = {
    textDecoration: 'none',
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: '1rem',
    color: '#222223',
    fontSize: '1.25rem'
  }
  const linkStylesDesktop = {
    textDecoration: 'none',
    display: "flex",
    justifyContent: "center",
    color: '#fff',
    fontSize: '1rem'
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <img style={{maxHeight: 48, margin: '8px 0'}} src={logo} alt="" />
      <Divider />
      <List>
        {navItems.map(({text, route}) => (
          <ListItem key={text} disablePadding>
              <Link style={linkStylesMobile} to={route}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static" sx={{backgroundColor: '#222223', padding: '12px 0'}}>
        <Toolbar sx={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
          <img style={{maxHeight: 48}} src={logo} alt="" />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ text, route }) => (
              <Button key={text} sx={{ color: '#fff' }}>
                <Link style={linkStylesDesktop} key={text} to={route}>{text}</Link>
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
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
    </Box>
  );
}

export default Navigation;
