import * as React from 'react';
import { Box, IconButton, styled, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Menu } from '@mui/icons-material';
import { Sidebar } from './Sidebar';
import { MenuItems } from './MenuItems';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ title }: { title: string }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <>
      <AppBar color='default' open={open} sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ backgroundColor: '#fff', borderBottom: '1px solid #00000033' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" fontWeight='bold' noWrap flexGrow={1}>
            {title}
          </Typography>
          <MenuItems />
        </Toolbar>
      </AppBar>
      <Sidebar drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default Header;