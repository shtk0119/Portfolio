import * as React from 'react';
import { Box, Checkbox, Divider, IconButton, Link, List, ListItem, ListItemText } from '@mui/material';
import { Add, Delete, FilterList } from '@mui/icons-material';
import { AddTaskModal } from './AddTaskModal';
import { db } from '../firebase/firebase';
import { collection, getDocs, query } from 'firebase/firestore';

type Task = {
  title: string;
  category: string;
  status: '開始前' | '作業中' | '終了';
  start_date: string; 
  end_date: string;
}

export const TaskList = () => {
  const [isAdd, setIsAdd] = React.useState<boolean>(false);
  const [tasks, setTasks] = React.useState<Task[] | null>(null);

  const onClickAddTask = () => {
    setIsAdd(!isAdd);
  } 

  React.useEffect(() => {
    const q = query(collection(db, 'tasks'));
    getDocs(q).then((snapShot) => {
      // QueryDocumentSnapshot<DocumentData>[] 型の修正
      setTasks(snapShot.docs);
    })
  }, [])

  React.useEffect(() => {
    console.log(tasks?.map(doc => doc.id))
  }, [tasks])

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
                <ListItemText sx={{ ml: 1, minWidth: '250px', maxWidth: '300px' }}>タイトル</ListItemText>
                <ListItemText sx={{ ml: 1, maxWidth: '280px' }}>カテゴリー</ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>ステータス</ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>開始日</ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>終了日</ListItemText>
              </ListItem>
              <Divider />

              {tasks?.map((task) => {
                return (
                  // 以下コード型修正
                  <Box key={task.id}>
                    <ListItem>
                      <Checkbox />
                      <ListItemText sx={{ ml: 1, minWidth: '250px', maxWidth: '300px' }}><Link href='#' underline='none'>{task.data().title}</Link></ListItemText>
                      <ListItemText sx={{ ml: 1, maxWidth: '280px' }}>{task.data().category}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.data().status}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.data().start_date}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.data().end_date}</ListItemText>
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
