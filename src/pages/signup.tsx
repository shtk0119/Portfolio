import { Box, Button, FormControl, Input, InputLabel, Link, Stack, styled, Typography } from '@mui/material';

const CustomButton = styled(Button)({
  fontWeight: 'bold',
  textTransform: 'none',
  backgroundColor: '#4299e1'
});

const Signup = () => {

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
          <Box width='100%'>
            <FormControl id='Nickname' required fullWidth>
              <InputLabel>Nickname</InputLabel>
              <Input type='text' />
            </FormControl>
          </Box>

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
              Sign up
            </CustomButton>
          </Box>

          <Box mt='32px' textAlign='center'>
            <Typography fontSize='14px' color='primary'>
              <Link href='/login' underline='none'>
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