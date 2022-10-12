import Image from 'next/image';
import type { NextPage } from 'next';
import { 
  AppBar,
  Box, 
  styled,
  Typography,
} from '@mui/material';

const CustomAppBar = styled(AppBar)({
  width: '1024px',
  color: 'black',
  backgroundColor: '#f1f1f1',
  boxShadow: 'none',
  position: 'static',
  padding: '1rem',
  margin: '0 auto',
});

const Top: NextPage = () => {
  return (
    <Box>
      <CustomAppBar>
        <Typography
          component='h3'
          fontFamily='"Oleo Script", cursive' 
          fontWeight='bold'
          fontSize='32px'
        >
          Smart Moving
        </Typography>
      </CustomAppBar>

      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box height='70vh' width='1024px' display='flex' alignItems='flex-end'>
          <Box textAlign='center' margin='auto'>
            <Typography component='h2' fontSize='32px'>
              引越を Smart に終わらしませんか？
            </Typography>
            <Typography component='h1' fontSize='48px'>
              Smart Moving
            </Typography>
            <Typography fontSize='16px' textAlign='left' marginTop='20px'>
              初めての引越し。初めての土地。そんな「初めて」の不安をまとめて管理！
              <br/>
              引越の「何をやればいい？」「いつまでに終わればいい？」を解決する！
              <br/>
              引越しが Smart に管理できるアプリ！
            </Typography>
          </Box>
          <Box position='relative' height='360px' width='230px' >
            <Image src='/moving_main_image_pc.png' layout='fill' alt='logo' />
          </Box>
        </Box>

        <Box bgcolor='white' height='50vh' width='100%'></Box>
        <Box height='100vh'></Box>
        <Box bgcolor='white' height='50vh'></Box>
      </Box>

      <Box component='footer' bgcolor='gray' height='10vh'></Box>
    </Box>
  )
}

export default Top;
