import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/Header';

const Test = () => {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Header title={'タスクボード'}/>
      
    </Box>
  )
}

export default Test;