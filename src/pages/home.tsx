import { useState } from "react";
import type { NextPage } from "next";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Menu, AccountCircle, ChevronLeft, Info, Search, Newspaper } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '64px'
});

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const IconSwitch = (index: number) => {
    switch(index) {
      case 0:
        return <HomeIcon />
      break;
      case 1:
        return <ListIcon />
      break;
      case 2:
        return <Info />
      break;
      case 3:
        return <Search />
      break;
      case 4:
        return <Newspaper />
      break;

      default:
      break;
    }
  }

  const [anchorEl, setAnchorEl] = useState(false);
  const open1 = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(true);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <Box>
      <AppBar color='default'>
        <CustomToolbar>
          <Button onClick={handleDrawerOpen}>
            <Menu />
          </Button>
          <Box>
            <Button>
              {open1 ? 
                <>
                  <AccountCircle /> 
                  <Box position='absolute' top='48px' right='0' bgcolor='white'>
                    <Button onClick={handleClose}>Profile</Button>
                    <Button onClick={handleClose}>Profile</Button>
                    <Button onClick={handleClose}>Profile</Button>
                  </Box>
                </>
                :
                <AccountCircle onClick={() => handleClick()} /> 
              }
            </Button>

          </Box>
        </CustomToolbar>
      </AppBar>

      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper' : {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left" 
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['ホーム', 'タスク管理', '引越し先情報', '役所検索', 'メディア'].map((text, index) => (
            <>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {IconSwitch(index)}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>

      
      <Box padding='32px 128px'>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>

        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  )
}

export default Home;