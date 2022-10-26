import * as React from 'react';
import { Box, Checkbox, Divider, IconButton, List, ListItem, ListItemText, Modal, Typography } from '@mui/material';
import { Add, Delete, FilterList } from '@mui/icons-material';
import { AddTaskModal } from './AddTaskModal';
import { DetailTaskModal } from './DetailTaskModal';
import { db } from '../firebase/firebase';
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, QueryDocumentSnapshot } from 'firebase/firestore';

type DeleteTask = {
  id: string;
  isCheck: boolean;
}

export const TaskList = () => {
  const [isAdd, setIsAdd] = React.useState<boolean>(false);
  const [isDetail, setIsDetail] = React.useState<string | null>(null);
  const [tasks, setTasks] = React.useState<QueryDocumentSnapshot[] | null>(null);
  const [deleteTaskIds, setDeleteTaskIds] = React.useState<DeleteTask[]>([]);

  const onClickAddTask = () => {
    setIsAdd(!isAdd);
  } 

  const onClickDetailTask = (id: string) => {
    setIsDetail(id);
  }

  const isCheckedTasks = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    // if を２回に分けている為、コードが冗長になっている修正
    // if (e.target.checked) {
    //   setDeleteTaskIds([ ...deleteTaskIds, id ]);
    // }

    // if (!e.target.checked) {
    //   setDeleteTaskIds(deleteTaskIds.filter((deleteTaskId) => deleteTaskId !== id));
    // }
    

  }

  const isCheckedAllTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tasks && e.target.checked) {
      setDeleteTaskIds(deleteTaskIds.map((deleteTaskId) => {
        return {id: deleteTaskId.id, isCheck: true}
      }));
    }

    if (tasks && !e.target.checked) {
      setDeleteTaskIds(deleteTaskIds.map((deleteTaskId) => {
        return {id: deleteTaskId.id, isCheck: false}
      }));
    }
  }

  const onClickDeleteTask = () => {
    deleteTaskIds.map((deleteTaskId) => {
      deleteDoc(doc(db, 'tasks', deleteTaskId.id));
    });
    setDeleteTaskIds([]);
  }

  React.useEffect(() => {
    const q = query(collection(db, 'tasks'));
    getDocs(q).then((snapShot) => {
      setTasks(snapShot.docs);
      setDeleteTaskIds(snapShot.docs.map((doc) => {
        return {id: doc.id, isCheck: false}
      }));
    });

    onSnapshot(q, (snapShot) => {
      setTasks(snapShot.docs);
    });
  }, [])

  // React.useEffect(() => {
  //   console.log(deleteTaskIds);
  // }, [deleteTaskIds]);

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
                <Checkbox onChange={(e) => isCheckedAllTasks(e)} />
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
                      <ListItemText sx={{ ml: 1, minWidth: '250px', maxWidth: '300px', '& .MuiTypography-body1': { display: 'inline', '&:hover': { cursor: 'pointer', opacity: '0.6' } } }} onClick={() => onClickDetailTask(task.id)}>{task.data().title}</ListItemText>
                      <ListItemText sx={{ ml: 1, maxWidth: '280px' }}>{task.data().category}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.data().status}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.data().start_date}</ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>{task.data().end_date}</ListItemText>
                    </ListItem>
                    <Divider />

                    <DetailTaskModal isDetail={isDetail === task.id} setIsDetail={setIsDetail} task={task}/>

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
