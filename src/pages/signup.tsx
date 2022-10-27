import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, Input, InputLabel, Stack, Typography } from '@mui/material';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const router = useRouter();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    router.push('/task');
  }

  return (
    <Box minHeight='100vh'>
      <Stack
        maxWidth='400px'
        m='0 auto'
        p='48px 24px'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Box>
          <Typography
            component='h2'
            fontSize='42px'
            fontWeight='bold'
            fontFamily='"Oleo Script", cursive'
          >
            Sign up
          </Typography>
        </Box>

        <Box
          width='100%'
          bgcolor='lightgray'
          mt='48px'
          p='32px'
          borderRadius='10px'
        >
               
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel>メールアドレス</InputLabel>
              <Input name='email' type='email' onChange={handleChangeEmail} />
            </FormControl>

            <FormControl sx={{ mt: 3 }} fullWidth>
              <InputLabel>パスワード</InputLabel>
              <Input name='password' type='password' onChange={handleChangePassword} />
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