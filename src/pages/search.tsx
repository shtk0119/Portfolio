import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';

const Search = () => {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Header title={'役所検索'}/>
      <SearchForm />
    </Box>
  )
}

export default Search;