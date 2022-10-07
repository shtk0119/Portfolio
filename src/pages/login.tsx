import { 
  Box, 
  Button, 
  FormControl, 
  Input, 
  InputLabel, 
  Stack, 
  styled, 
  Typography
} from '@mui/material';
import Link from 'next/link';

const CustomButton = styled(Button)({
  fontWeight: 'bold',
  textTransform: 'none',
  backgroundColor: '#4299e1'
});

const Login = () => {

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
            Login
          </Typography>
        </Box>

        <Box
          width='100%'
          bgcolor='lightgray'
          mt='48px'
          p='32px'
          borderRadius='10px'
        >

          <Box mt='24px'>
            <FormControl id='Email' required fullWidth>
              <InputLabel>Email</InputLabel>
              <Input type='email' />
            </FormControl>
          </Box>

          <Box mt='24px'>
            <FormControl id='Password' required fullWidth>
              <InputLabel>Password</InputLabel>
              <Input type='password' />
            </FormControl>
          </Box>
          
          <Box mt='32px' textAlign='center'>
            <CustomButton type='submit' variant='contained' fullWidth>
              Login
            </CustomButton>
          </Box>

          <Box mt='32px' textAlign='center'>
            <Typography fontSize='14px' color='primary'>
              <Link href='/signup' passHref><a>アカウントを作成</a></Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Login;