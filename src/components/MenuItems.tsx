import * as React from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { AccountCircle, Logout, Person, Settings } from '@mui/icons-material';
import { Avatar, Box, Divider, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popper, Typography } from '@mui/material';

export const MenuItems = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const popOpen = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const onClickLogout = async () => {
    await signOut(auth);
    await router.push('/login');
  }

  return (
    <>
      <IconButton color='inherit' onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Popper open={popOpen} anchorEl={anchorEl}>
        <Box mt={2} bgcolor='#fff' border={1} borderColor='#00000033' borderRadius={2}>
            <List disablePadding>
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
                  <ListItemButton onClick={onClickLogout}>
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
    </>
  )
}