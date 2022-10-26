import * as React from 'react';
import { useRouter } from 'next/router';
import { Avatar, Box, Divider, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popper, Typography, unstable_createMuiStrictModeTheme } from '@mui/material';
import { AccountCircle, AirlineSeatIndividualSuiteSharp, Logout, Person, Settings } from '@mui/icons-material';
import { useAuthContext } from '../context/AuthContext';
import { auth, db } from '../firebase/firebase';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

export const MenuItems = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const popOpen = Boolean(anchorEl);
  const [user, setUser] = React.useState<DocumentData | undefined>(undefined);
  const authContext = useAuthContext();
  const router = useRouter();
  const { isReady } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const onClickLogout = async () => {
    await signOut(auth);
    await router.push('/login');
  }

  React.useEffect(() => {
    if(isReady && authContext.user) {
      const ref = doc(db, 'users', authContext.user.uid);
      const docSnap = getDoc(ref);
      docSnap.then((snap) => {
        setUser(snap.data());
      })
    }
  }, [isReady, authContext])

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
                  <Typography>{user ? user.nickname : 'unknown'}</Typography>
                  <Typography>{user ? user.email : 'unknown'}</Typography>
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