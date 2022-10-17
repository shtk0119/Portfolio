import Header from "../components/Header";
import { Box, CssBaseline } from "@mui/material";

const Test = () => {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Header title={'タスクボード'}/>
    </Box>
  )
}

export default Test;