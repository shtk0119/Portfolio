import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/Header';
import { TaskList } from '../components/TaskList';

const Test = () => {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Header title={'タスクボード'}/>
      <TaskList />
    </Box>
  )
}

export default Test;