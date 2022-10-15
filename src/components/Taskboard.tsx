import { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { AccountCircle, ChevronLeft, Menu, Send } from '@mui/icons-material';
import { 
  Avatar,
  Box, 
  Card, 
  CardHeader, 
  CssBaseline, 
  Divider, 
  IconButton, 
  Input, 
  InputAdornment, 
  List, 
  Modal, 
  Toolbar, 
  Typography 
} from '@mui/material';
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

const mdTheme = createTheme();

const Taskboard = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  const [cardOpen, setCardOpen] = useState(false);
  const toggleModal = () => {
    setCardOpen(!cardOpen)
  }

  const [todos, setTodos] = useState(['test1', 'test2', 'test3', 'test4', 'test5', 'test6']);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar color='default' position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
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
            <Typography
              component="h1"
              variant="h6"
              fontWeight='bold'
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              タスクボード
            </Typography>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {ListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />

          <Box display='flex' justifyContent='space-around' marginTop='36px'>
            <Card 
              sx={{
                height: '720px', 
                minWidth: '360px',
                overflow: 'scroll', // ヘッダーの部分は固定したい
              }}
            >
              <CardHeader 
                sx={{ 
                  height: '72px', 
                  '& .MuiCardHeader-title': { 
                    fontWeight: 'bold' 
                  },
                }} 
                title='予定' 
              />
              <Divider />
              <Box>
                {todos.map((text, index) => {
                  return (
                    <Box key={index} margin='16px 16px 0 16px'>
                      <Card sx={{ bgcolor: 'red', height: '100px', padding: '16px' }}>
                        <Typography>{text}</Typography>
                      </Card>
                    </Box>
                  )
                })} 
              </Box>
            </Card>

            <Card 
              sx={{
                height: '720px', 
                minWidth: '360px',
                overflow: 'scroll', // ヘッダーの部分は固定したい
              }}
            >
              <CardHeader 
                sx={{ 
                  height: '72px', 
                  '& .MuiCardHeader-title': { 
                    fontWeight: 'bold' 
                  },
                }} 
                title='作業中' 
              />
              <Divider />

              {todos.map((text, index) => {
                return (
                  <Box key={index}>
                    <Box margin='16px' onClick={toggleModal}>
                      <Card sx={{ bgcolor: 'red', height: '100px', padding: '16px' }}>
                        <Typography>{text}</Typography>
                      </Card>
                    </Box>
                  </Box>
                )
              })}
              
              <Modal
                open={cardOpen}
                onClose={toggleModal}
              >
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: '(-50%, -50%)', 
                    WebkitTransform: 'translate(-50%, -50%)', 
                    msTransform: 'translate(-50%, -50%)' 
                  }} 
                  bgcolor='white' 
                  height='720px' 
                  width='420px' 
                  padding='16px'
                  borderRadius='10px'
                >
                  <Typography variant="h4" component="h2">
                    text1
                  </Typography>
                  <Divider />
                  <Box>
                    <Box height='300px' marginTop='16px'>
                      <Typography variant='h6'>詳細</Typography>
                    </Box>
                    <Divider />
                    <Box height='300px' marginTop='16px' position='relative'>
                      <Typography variant='h6'>メモ</Typography>
                      <Box position='absolute' bottom='0' display='flex' width='100%'>
                        <Avatar />
                        <Box width='90%' display='flex'>
                          <Input
                            sx={{ 
                              width: '100%',
                              paddingLeft: '12px', 
                              marginLeft: '16px',
                              border: '1px solid',
                              borderRadius: '10px',
                            }} 
                            disableUnderline
                            placeholder='コメントを入力'
                            endAdornment={
                              <IconButton>
                                <Send />
                              </IconButton>
                            }
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Modal>
            </Card>

            <Card 
              sx={{
                height: '720px', 
                minWidth: '360px',
                overflow: 'scroll', // ヘッダーの部分は固定したい
              }}
            >
              <CardHeader 
                sx={{ 
                  height: '72px', 
                  '& .MuiCardHeader-title': { 
                    fontWeight: 'bold' 
                  },
                }} 
                title='完了' 
              />
              <Divider />
            </Card>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Taskboard;