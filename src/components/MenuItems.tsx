import * as React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popper, Typography } from '@mui/material';
import { AccountCircle, Logout, Settings } from '@mui/icons-material';
import { useAuthContext } from '../context/AuthContext';
import { auth, db } from '../firebase/firebase';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

export const MenuItems = () => {
  const { user } = useAuthContext();
  const [userData, setUserData] = React.useState<DocumentData | undefined>(undefined);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const popOpen = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  }

  const onClickLogout = async () => {
    await signOut(auth);
    Router.push('/login');
  }

  React.useEffect(() => {
    if (user) {
      const ref = doc(db, 'users', user.uid);
      const docSnap = getDoc(ref);
      docSnap.then((user) => {
        setUserData(user.data());
      });
    }
  }, [user])

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
                  <Typography>{userData ? userData.nickname : 'unknown'}</Typography>
                  <Typography>{userData ? userData.email : 'unknown'}</Typography>
                </Box>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <Link href='/account' color='default'>
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
                <ListItemButton onClick={onClickLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary='ログアウト' />
                </ListItemButton>
              </ListItem>
            </List>
        </Box>
      </Popper>
    </>
  )
}