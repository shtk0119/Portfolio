import * as React from 'react';
import { Header } from '../components/Header';
import { Avatar, Box, Button, CssBaseline, Divider, Input, Tab, Tabs, Typography } from '@mui/material';

const Account = () => {
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
          <Tabs sx={{ mt: 3, minHeight: '36px' }}>
            <Tab disableRipple label='設定' sx={{ color: '#40a9ff', minWidth: '64px', borderBottom: '2px solid #40a9ff' }} />
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
                  <Input sx={{ width: '70%', p: '0 8px', border: '1px solid #00000033', borderRadius: 2 }} type='text' disableUnderline placeholder='ニックネーム' />
                  <Button sx={{ ml: 3 }}>保存</Button>
                </Box>
                <Box display='flex' mt={5}>
                  <Input sx={{ width: '70%', p: '0 8px', border: '1px solid #00000033', borderRadius: 2 }} type='email' disableUnderline placeholder='メールアドレス' />
                  <Button sx={{ ml: 3 }}>編集</Button>
                </Box>
              </Box>
            </Box>
            <Box bgcolor='white' borderRadius={2} p={3} mt={5} display='flex' justifyContent='space-between'>
              <Typography variant='h6' fontWeight='bold' width='30%'>パスワード変更</Typography>
              <Box width='70%'>
                <Box>
                  <Input sx={{ width: '70%', p: '0 8px', border: '1px solid #00000033', borderRadius: 2 }} type='password' disableUnderline placeholder='パスワード' />
                  <Button sx={{ ml: 3 }}>編集</Button>
                </Box>
              </Box>
            </Box>
            <Box mt={5}>
              <Box bgcolor='white' borderRadius={2} p={3} display='flex' justifyContent='space-between'>
                <Typography variant='h6' fontWeight='bold' width='30%'>アカウント削除</Typography>
                <Box width='70%'>
                  <Box>
                    <Typography fontWeight='bold'>アカウントとアカウントに関係するすべてのデータを削除します。</Typography>
                    <Button sx={{ mt: 3, fontWeight: 'bold' }} variant='outlined' color='error'>アカウント削除</Button>
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