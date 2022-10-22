import * as React from 'react';
import { Box, Checkbox, Divider, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Add, Delete, FilterList } from '@mui/icons-material';
import { AddTaskModal } from './AddTaskModal';
import { DetailTaskModal } from './DetailTaskModal';
import { db } from '../firebase/firebase';
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, QueryDocumentSnapshot } from 'firebase/firestore';

type Task = {
  id: string;
  title: string;
  category: string;
  status: '開始前' | '作業中' | '終了';
  start_date: string; 
  end_date: string;
}

export const TaskList = () => {
  const [isAdd, setIsAdd] = React.useState<boolean>(false);
  const [isDetail, setIsDetail] = React.useState<boolean>(false);
  const [tasks, setTasks] = React.useState<QueryDocumentSnapshot[] | null>(null);
  const [deleteTaskIds, setDeleteTaskIds] = React.useState<string[]>([]);

  const onClickAddTask = () => {
    setIsAdd(!isAdd);
  } 

  const isCheckedTasks = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    // if を２回に分けている為、コードが冗長になっている修正
    if (e.target.checked) {
      setDeleteTaskIds([ ...deleteTaskIds, id ]);
    }

    if (!e.target.checked) {
      setDeleteTaskIds(deleteTaskIds.filter((deleteTaskId) => deleteTaskId !== id));
    }
  }

  const onClickDeleteTask = () => {
    deleteTaskIds.map((deleteTaskId) => {
      deleteDoc(doc(db, 'tasks', deleteTaskId));
    });
    setDeleteTaskIds([]);
  }

  React.useEffect(() => {
    const q = query(collection(db, 'tasks'));
    getDocs(q).then((snapShot) => {
      setTasks(snapShot.docs);
    });

    onSnapshot(q, (snapShot) => {
      setTasks(snapShot.docs)
    });
  }, [])

  const onClickDetailTask = () => {
    console.log('test')
  }

  React.useEffect(() => {
    console.log(deleteTaskIds)
  }, [deleteTaskIds])

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
              <IconButton onClick={onClickDeleteTask}>
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

              {tasks?.map((task: QueryDocumentSnapshot) => {
                return (
                  <Box key={task.id}>
                    <ListItem>
                      <Checkbox onChange={(e) => isCheckedTasks(e, task.id)} />
                      <ListItemText sx={{ ml: 1, minWidth: '250px', maxWidth: '300px', '& .MuiTypography-body1': { display: 'inline', '&:hover': { cursor: 'pointer', opacity: '0.6' } } }} onClick={() => onClickDetailTask()}>{task.data().title}</ListItemText>
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

      <DetailTaskModal isDetail={isDetail} setIsDetail={setIsDetail} />

    </Box>
  )
}
