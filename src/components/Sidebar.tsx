import * as React from 'react';
import { IconButton, List, styled, Toolbar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ChevronLeft } from '@mui/icons-material';
import { ListItems } from './ListItems';

type Props = {
  drawerWidth: number;
  open: boolean;
  toggleDrawer: () => void;
}

export const Sidebar = ({drawerWidth, open, toggleDrawer}: Props) => {

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          borderBottom: '1px solid #00000033',
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <List component='nav'>
        {ListItems}
      </List>
    </Drawer>
  )
}
