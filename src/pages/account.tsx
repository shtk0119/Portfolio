import * as React from 'react';
import Router from 'next/router';
import { Header } from '../components/Header';
import { Avatar, Box, Button, CssBaseline, Divider, Input, Tab, Tabs, Typography } from '@mui/material';
import { useAuthContext } from '../context/AuthContext';
import { deleteDoc, doc, DocumentData, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword } from 'firebase/auth';

const Account = () => {
  const [value, setValue] = React.useState('1');
  const { user } = useAuthContext();
  const [userData, setUserData] = React.useState<DocumentData | undefined>({nickname: '', email: '', password: ''});
  const [editUserData, setEditUserData] = React.useState<DocumentData | undefined>({nickname: '', email: '', password: ''});
  const [isEdit, setIsEdit] = React.useState<{email: boolean, password: boolean}>({email: false, password: false});

  const onClickSaveNickname = () => {
    if (user) {
      const ref = doc(db, 'users', user.uid);
      updateDoc(ref, {
        nickname: userData?.nickname,
      })
    }
  }

  const onClickSaveEmail = () => {
    if (user) {      
      const credential = EmailAuthProvider.credential(userData?.email, userData?.password);
      reauthenticateWithCredential(user, credential)
      .then(() => {
        updateEmail(user, editUserData?.email)
        .then(() => {
          const ref = doc(db, 'users', user.uid);
          updateDoc(ref, {
            email: editUserData?.email,
          });
          alert('メールアドレスを更新しました。');
        })
        .catch((error) => {
          alert(error.message);
        })
      })
      .catch((error) => {
        alert(error.message);
      })
    }
    setIsEdit({ ...isEdit, email: !isEdit.email });
  }

  const onClickSavePassword = () => {
    if (user) {      
      const credential = EmailAuthProvider.credential(userData?.email, userData?.password);
      reauthenticateWithCredential(user, credential)
      .then(() => {
        updatePassword(user, editUserData?.password)
        .then(() => {
          const ref = doc(db, 'users', user.uid);
          updateDoc(ref, {
            password: editUserData?.password,
          });
          alert('パスワードを更新しました。')
        })
        .catch((error) => {
          alert(error.message);
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    }
    setIsEdit({ ...isEdit, password: !isEdit.password });
  }

  const onClickAccountDelete = () => {
    let confirm = window.confirm('本当に削除しても、よろしいですか？');
    if (confirm && user) {
      const credential = EmailAuthProvider.credential(userData?.email, userData?.password);
      reauthenticateWithCredential(user, credential)
      .then(() => {
        deleteUser(user)
        .then(() => {
          const ref = doc(db, 'users', user.uid);
          deleteDoc(ref);
          alert('アカウントを削除しました。');
          Router.push('/signup');
        })
        .catch((error) => {
          alert(error.message);
        })
      })
      .catch((error) => {
        alert(error.message);
      });
    }
  }

  React.useEffect(() => {
    if (user) {
      const ref = doc(db, 'users', user.uid);
      const docSnap = getDoc(ref);
      docSnap.then((user) => {
        setUserData(user.data());
        setEditUserData(user.data());
      });

      onSnapshot(ref, (snapShot) => {
        setUserData(snapShot.data())
      })
    }
  }, [user])

  return (
    <Box display='flex'>
      <CssBaseline />
      <Header title={'アカウント'}/>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: 'calc(100vh - 64px)',
          overflow: 'auto',
          marginTop: '64px',
          paddingTop: '48px',
        }}
      >
        <Box maxWidth='1000px' m='0 auto'>
          <Typography variant='h4' fontWeight='bold'>Account</Typography>
          <Tabs sx={{ mt: 3, minHeight: '36px' }} value={value} >
            <Tab value='1' disableRipple label='設定' sx={{ color: '#40a9ff', minWidth: '64px', borderBottom: '2px solid #40a9ff' }} />
          </Tabs>
          <Divider />
          <Box mt={5}>
            <Box bgcolor='white' borderRadius={2} p={3} display='flex' justifyContent='space-between'>
              <Typography variant='h6' fontWeight='bold' width='30%'>基本情報</Typography>
              <Box width='70%'>
                <Box display='flex'>
                  <Avatar />
                  <Button sx={{ ml: 3, fontWeight: 'bold', textTransform: 'none' }} disableRipple>変更</Button>
                </Box>
                <Box display='flex' mt={5}>
                  <Input sx={{ width: '70%', p: '0 8px', border: '1px solid #00000033', borderRadius: 2 }} type='text' disableUnderline placeholder='ニックネーム' value={editUserData?.nickname} onChange={(e) => setEditUserData({ ...editUserData, nickname: e.target.value })} />
                  <Button sx={{ ml: 3 }} onClick={onClickSaveNickname}>保存</Button>
                </Box>
                <Box display='flex' mt={5}>
                  <Input sx={{ width: '70%', p: '0 8px', border: '1px solid #00000033', borderRadius: 2 }} type='email' disabled={!isEdit.email} disableUnderline placeholder='メールアドレス' value={editUserData?.email} onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })} />
                  {isEdit.email ? <Button sx={{ ml: 3 }} onClick={onClickSaveEmail}>保存</Button> : <Button sx={{ ml: 3 }} onClick={() => setIsEdit({ ...isEdit, email: !isEdit.email })}>編集</Button>}
                </Box>
              </Box>
            </Box>
            <Box bgcolor='white' borderRadius={2} p={3} mt={5} display='flex' justifyContent='space-between'>
              <Typography variant='h6' fontWeight='bold' width='30%'>パスワード変更</Typography>
              <Box width='70%'>
                <Box>
                  <Input sx={{ width: '70%', p: '0 8px', border: '1px solid #00000033', borderRadius: 2 }} type='password' disabled={!isEdit.password} disableUnderline placeholder='パスワード' value={editUserData?.password} onChange={(e) => setEditUserData({ ...editUserData, password: e.target.value })} />
                  {isEdit.password ? <Button sx={{ ml: 3 }} onClick={onClickSavePassword}>保存</Button> : <Button sx={{ ml: 3 }} onClick={() => setIsEdit({ ...isEdit, password: !isEdit.password })}>編集</Button>}
                </Box>
              </Box>
            </Box>
            <Box mt={5}>
              <Box bgcolor='white' borderRadius={2} p={3} display='flex' justifyContent='space-between'>
                <Typography variant='h6' fontWeight='bold' width='30%'>アカウント削除</Typography>
                <Box width='70%'>
                  <Box>
                    <Typography fontWeight='bold'>アカウントとアカウントに関係するすべてのデータを削除します。</Typography>
                    <Button sx={{ mt: 3, fontWeight: 'bold' }} variant='outlined' color='error' onClick={onClickAccountDelete}>アカウント削除</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Account;