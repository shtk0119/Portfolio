import Header from "../components/Header";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from "@mui/material";


const mdTheme = createTheme();

const Test = () => {
  return (
    // <ThemeProvider theme={mdTheme}>
      <Box display='flex'>
        <Header title={'タスクボード'}/>
      </Box>
    // {/* </ThemeProvider> */}
  )
}

export default Test;