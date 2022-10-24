import * as React from 'react';
import { Box, Button, FormControl, FormLabel, IconButton, Input, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { ArrowRightAlt, Close, Task } from '@mui/icons-material';
import { doc, DocumentData, QueryDocumentSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

type Props = {
  isDetail: boolean;
  setIsDetail: React.Dispatch<React.SetStateAction<string | null>>;
  task: QueryDocumentSnapshot;
}

type Task = {
  title: string;
  category: string;
  status: string;
  start_date: string;
  end_date: string;
  text: string | null;
}

const Today = new Date();

const defaultTask: Task = {
  title: '',
  category: 'なし',
  status: '開始前',
  start_date: `${Today.getFullYear()}-${Today.getMonth() + 1}-${Today.getDate()}`,
  end_date: `${Today.getFullYear()}-${Today.getMonth() + 1}-${Today.getDate()}`,
  text: null,
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#fff',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
}

export const DetailTaskModal = ({isDetail, setIsDetail, task}: Props) => {
  const [editTaskId, setEditTaskId] = React.useState<string>(task.id);
  const [editTask, setEditTask] = React.useState<DocumentData>(task.data());

  const handleClose = () => {
    setIsDetail(null);
  }

  const onClickTaskSave = async () => {
    const ref = doc(db, 'tasks', editTaskId);
    await updateDoc(ref, {
      title: editTask.title,
      category: editTask.category,
      status: editTask.status,
      start_date: editTask.start_date,
      end_date: editTask.end_date,
      text: editTask.text,
    });
    handleClose();
  }

  return (
    <Box>
      <Modal
        open={isDetail}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="h5" fontWeight='bold'>
              {editTask.title}
            </Typography>

            {/* <FormControl sx={{ mt: 5, width: '75%' }}>
              <FormLabel sx={{ fontSize: '12px' }}>タイトル</FormLabel>
              <Input value={editTask.title} onChange={(e) => setEditTask({ ...editTask, title: e.target.value })} />
            </FormControl> */}

            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>

          <Box>
            <FormControl sx={{ display: 'block', mt: 5, width: '50%' }}>
              <InputLabel>カテゴリー</InputLabel>
              <Select label='カテゴリー' fullWidth value={editTask.category} onChange={(e) => setEditTask({ ...editTask, category: e.target.value })}> 
                <MenuItem value={'なし'}>なし</MenuItem>
                <MenuItem value={'書類関係'}>書類関係</MenuItem>
                <MenuItem value={'荷物'}>荷物</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ display: 'block', mt: 5, width: '50%' }}>
              <InputLabel>ステータス</InputLabel>
              <Select label='ステータス' fullWidth value={editTask.status} onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}>
                <MenuItem value={'開始前'}>開始前</MenuItem>
                <MenuItem value={'作業中'}>作業中</MenuItem>
                <MenuItem value={'終了'}>終了</MenuItem>
              </Select>
            </FormControl>

            <Box display='flex' justifyContent='space-around' alignItems='flex-end'>
              <FormControl sx={{ mt: 5, width: '30%' }}>
                <InputLabel shrink>開始日</InputLabel>
                <Input type='date' value={editTask.start_date} onChange={(e) => setEditTask({ ...editTask, start_date: e.target.value })} />
              </FormControl>

              <ArrowRightAlt />

              <FormControl sx={{ mt: 5, width: '30%' }}>
                <InputLabel shrink>終了日</InputLabel>
                <Input type='date' value={editTask.end_date} onChange={(e) => setEditTask({ ...editTask, end_date: e.target.value })} />
              </FormControl>
            </Box>

            <FormControl sx={{ display: 'block', mt: 5 }} fullWidth>
              <TextField label='詳細' variant='standard' fullWidth value={editTask.text} onChange={(e) => setEditTask({ ...editTask, text: e.target.value })}/>
            </FormControl>
          
            <Button sx={{ display: 'block', mt: 5, ml: 'auto' }} variant='contained' onClick={onClickTaskSave}>保存</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
