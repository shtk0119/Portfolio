import * as React from 'react';
import { Avatar, Box, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popper, styled, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { AccountCircle, ChevronLeft, Logout, Menu, Person, Settings } from '@mui/icons-material';
import { ListItems } from './ListItems';

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
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const toggleDrawer = () => {
    setMenuOpen(!open);
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  return (
    <>
      <AppBar color='default' open={open} sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ backgroundColor: '#fff', borderBottom: '1px solid #00000033' }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' })
            }}
          >
            <Menu />
          </IconButton>

          <Typography variant='h6' fontWeight='bold'>
            {title}
          </Typography>

          <IconButton color='inherit' onClick={handleClick}>
            <AccountCircle />
          </IconButton>

          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box mt={2} bgcolor='#fff' border={1} borderColor='#00000033' borderRadius={2}>
              <List disablePadding sx={{ textAlign: 'left' }}>
                <ListItem>
                  {/* ユーザーの画像機能が実装できたら下記 icon をユーザーが設定画像に変えられるようにする */}
                  <Avatar />
                  <Box ml={2}>
                    {/* 下記 2行の中身は、ユーザー機能実装後 */}
                    <Typography>takanori</Typography> 
                    <Typography>demo.demo@demo.com</Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <Link href='#' underline='none' color='default' width='100%'>
                    <ListItemButton>
                      <ListItemIcon>
                        <Person />
                      </ListItemIcon>
                      <ListItemText primary='プロフィール' />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <Link href='#' underline='none' color='default' width='100%'>
                    <ListItemButton>
                      <ListItemIcon>
                        <Settings />
                      </ListItemIcon>
                      <ListItemText primary='アカウント' />
                    </ListItemButton>
                  </Link>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <Link href='#' underline='none' color='default' width='100%'>
                    <ListItemButton>
                      <ListItemIcon>
                        <Logout />
                      </ListItemIcon>
                      <ListItemText primary='ログアウト' />
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Popper>
        </Toolbar>
      </AppBar>

      <Drawer variant='permanent' open={menuOpen}>
        <Toolbar 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
            borderBottom: '1px solid #00000033',
            }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>
        <List component='nav'>
          {ListItems}
        </List>
      </Drawer>
    </>
  )
}

export default Header;