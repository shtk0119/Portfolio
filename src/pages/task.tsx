import { Box, CssBaseline } from "@mui/material";
import Header from "../components/Header";
import Taskboard from "../components/Taskboard";

const Task = () => {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Header title={'タスクボード'}/>
      <Taskboard />
    </Box>
  )
}

export default Task;