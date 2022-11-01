import * as React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Box, Button, FormControl, Input, InputLabel, Stack, Typography } from '@mui/material';
import { auth, db } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [nickname, setNickname] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onSugmitSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setDoc(doc(db, 'users', user.uid), {
        nickname: nickname,
        email: email,
        password: password,
        image: 'images/default.png',
      });
      Router.push('/task');
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  return (
    <Box minHeight='100vh'>
      <Stack maxWidth='400px' m='0 auto' p='48px 24px' display='flex' alignItems='center' justifyContent='center'>
        <Box>
          <Typography component='h2' fontSize='42px' fontWeight='bold' fontFamily='"Oleo Script", cursive'>
            Sign up
          </Typography>
        </Box>

        <Box width='100%' bgcolor='lightgray' mt='48px' p='32px' borderRadius='10px'>
          <form onSubmit={onSugmitSignup}>
            <FormControl fullWidth>
              <InputLabel>ニックネーム</InputLabel>
              <Input name='nickname' type='text' onChange={(e) => setNickname(e.target.value)} />
            </FormControl>

            <FormControl sx={{ mt: 3 }} fullWidth>
              <InputLabel>メールアドレス</InputLabel>
              <Input name='email' type='email' onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl sx={{ mt: 3 }} fullWidth>
              <InputLabel>パスワード</InputLabel>
              <Input name='password' type='password' onChange={(e) => setPassword(e.target.value)} />
            </FormControl>

            <Button sx={{ bgcolor: '#4299e1', fontWeight: 'bold', textTransform: 'none', mt: 6 }} type='submit' variant='contained' fullWidth>
              Sign up
            </Button>
          </form>

          <Box mt='32px' textAlign='center'>
            <Typography fontSize='14px' color='primary'>
              <Link href='/login'>
                アカウントをお持ちの方
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Signup;