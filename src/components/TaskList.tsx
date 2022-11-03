import * as React from 'react';
import {
  Box,
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Add, Delete, FilterList } from '@mui/icons-material';
import { AddTaskModal } from './AddTaskModal';
import { DetailTaskModal } from './DetailTaskModal';
import { db } from '../libs/firebase/firebase';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';

export const TaskList = () => {
  const [isAdd, setIsAdd] = React.useState<boolean>(false);
  const [isDetail, setIsDetail] = React.useState<string | null>(null);
  const [tasks, setTasks] = React.useState<QueryDocumentSnapshot[] | null>(
    null
  );
  const [deleteTaskIds, setDeleteTaskIds] = React.useState<string[]>([]);

  const onClickAddTask = () => {
    setIsAdd(!isAdd);
  };

  const onClickDetailTask = (id: string) => {
    setIsDetail(id);
  };

  const isCheckedTasks = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (e.target.checked && !deleteTaskIds.includes(id)) {
      setDeleteTaskIds([...deleteTaskIds, id]);
    }

    if (!e.target.checked) {
      setDeleteTaskIds(
        deleteTaskIds.filter((deleteTaskId) => deleteTaskId !== id)
      );
    }
  };

  const isCheckedAllTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tasks && e.target.checked) {
      setDeleteTaskIds(tasks?.map((task) => task.id));
    }

    if (!e.target.checked) {
      setDeleteTaskIds([]);
    }
  };

  const onClickDeleteTask = () => {
    deleteTaskIds.map((deleteTaskId) => {
      deleteDoc(doc(db, 'tasks', deleteTaskId));
    });
    setDeleteTaskIds([]);
  };

  React.useEffect(() => {
    const q = query(collection(db, 'tasks'));
    getDocs(q).then((snapShot) => {
      setTasks(snapShot.docs);
    });

    onSnapshot(q, (snapShot) => {
      setTasks(snapShot.docs);
    });
  }, []);

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
          <Box display="flex" justifyContent="space-between">
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
                <Checkbox
                  checked={tasks?.length === deleteTaskIds.length}
                  onChange={(e) => isCheckedAllTasks(e)}
                />
                <ListItemText
                  sx={{ ml: 1, minWidth: '250px', maxWidth: '300px' }}
                >
                  タイトル
                </ListItemText>
                <ListItemText sx={{ ml: 1, maxWidth: '280px' }}>
                  カテゴリー
                </ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>
                  ステータス
                </ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>開始日</ListItemText>
                <ListItemText sx={{ maxWidth: '280px' }}>終了日</ListItemText>
              </ListItem>
              <Divider />

              {tasks?.map((task: QueryDocumentSnapshot) => {
                return (
                  <Box key={task.id}>
                    <ListItem>
                      <Checkbox
                        checked={deleteTaskIds.includes(task.id)}
                        onChange={(e) => isCheckedTasks(e, task.id)}
                      />
                      <ListItemText
                        sx={{
                          ml: 1,
                          minWidth: '250px',
                          maxWidth: '300px',
                          '& .MuiTypography-body1': {
                            display: 'inline',
                            '&:hover': { cursor: 'pointer', opacity: '0.6' },
                          },
                        }}
                        onClick={() => onClickDetailTask(task.id)}
                      >
                        {task.data().title}
                      </ListItemText>
                      <ListItemText sx={{ ml: 1, maxWidth: '280px' }}>
                        {task.data().category}
                      </ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>
                        {task.data().status}
                      </ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>
                        {task.data().start_date}
                      </ListItemText>
                      <ListItemText sx={{ maxWidth: '280px' }}>
                        {task.data().end_date}
                      </ListItemText>
                    </ListItem>
                    <Divider />

                    <DetailTaskModal
                      isDetail={isDetail === task.id}
                      setIsDetail={setIsDetail}
                      task={task}
                    />
                  </Box>
                );
              })}
            </List>
          </Box>
        </Box>
      </Box>

      <AddTaskModal isAdd={isAdd} setIsAdd={setIsAdd} />
    </Box>
  );
};
