import { Box, CssBaseline } from "@mui/material";
import { Header } from "../components/Header";
// import { Taskboard } from "../components/Taskboard";
import { TaskList } from "../components/TaskList";

const Task = () => {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Header title={'タスクボード'}/>
      {/* react-dnd api の実装に時間がかかる為、後回し */}
      {/* <Taskboard /> */}
      <TaskList />
    </Box>
  )
}

export default Task;