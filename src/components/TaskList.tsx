import * as React from 'react';
import { Box, Checkbox, Divider, IconButton, Link, List, ListItem, ListItemText } from '@mui/material';
import { Add, Delete, FilterList } from '@mui/icons-material';
import { AddTaskModal } from './AddTaskModal';

type Task = {
  id: number;
  title: string;
  category: string;
  status: '開始前' | '作業中' | '終了';
  start_date: string; // 型は変更予定
  end_date: string; // 型は変更予定
}

export const TaskList = () => {
  const [isAdd, setIsAdd] = React.useState<boolean>(false);
  const [tasks, setTasks] = React.useState<Task[]>([
    {id: 1, title: 'Demo1', category: 'Demo1 Category', status: '開始前', start_date: '2022-10-1', end_date: '2022-11-1'},
    {id: 2,title: 'Demo2', category: 'Demo2 Category', status: '作業中', start_date: '2022-11-1', end_date: '2022-12-1'},
  ]);

  const onClickAddTask = () => {
    setIsAdd(!isAdd);
  }

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        overflow: 'auto',
        marginTop: '64px',
      }}
    >
      <Box m={5}>
        <Box>
          <Box display='flex' justifyContent='space-between'>
            <Box>
              <IconButton onClick={onClickAddTask}>
                <Add />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <FilterList />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <List>
              <ListItem>
                <Checkbox />
                <ListItemText sx={{ ml: 1, maxWidth: '300px' }}>タイトル</ListItemText>
                <ListItemText sx={{ ml: 1, maxWidth: '280px' }}>カテゴリー</ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>ステータス</ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>開始予定</ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>終了予定</ListItemText>
              </ListItem>
              <Divider />

              {tasks?.map((task) => {
                return (
                  <Box key={task.id}>
                    <ListItem>
                      <Checkbox />
                      <ListItemText sx={{ ml: 1, maxWidth: '300px' }}><Link href='#' underline='none'>{task.title}</Link></ListItemText>
                      <ListItemText sx={{ ml: 1, maxWidth: '280px' }}>{task.category}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.status}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.start_date}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.end_date}</ListItemText>
                    </ListItem>
                    <Divider /> 
                  </Box>
                )
              })}
            </List>
          </Box>
        </Box>
      </Box>

      <AddTaskModal isAdd={isAdd} setIsAdd={setIsAdd} />

    </Box>
  )
}