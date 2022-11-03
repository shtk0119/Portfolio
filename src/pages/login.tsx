import * as React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import { auth } from '../libs/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Router.push('/task');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Box minHeight="100vh">
      <Stack
        maxWidth="400px"
        m="0 auto"
        p="48px 24px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography
            component="h2"
            fontSize="42px"
            fontWeight="bold"
            fontFamily='"Oleo Script", cursive'
          >
            Login
          </Typography>
        </Box>

        <Box
          width="100%"
          bgcolor="lightgray"
          mt="48px"
          p="32px"
          borderRadius="10px"
        >
          <form onSubmit={onSubmitLogin}>
            <FormControl fullWidth>
              <InputLabel>メールアドレス</InputLabel>
              <Input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ mt: 3 }} fullWidth>
              <InputLabel>パスワード</InputLabel>
              <Input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              sx={{
                bgcolor: '#4299e1',
                fontWeight: 'bold',
                textTransform: 'none',
                mt: 6,
              }}
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </form>
          <Box mt="32px" textAlign="center">
            <Typography fontSize="14px" color="primary">
              <Link href="/signup">アカウントを作成</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
