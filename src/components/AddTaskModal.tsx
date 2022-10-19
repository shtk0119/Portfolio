import * as React from 'react';
import { Box, FormControl, FormLabel, IconButton, Input, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

type Props = {
  isAdd: boolean;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
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

export const AddTaskModal = ({isAdd, setIsAdd}: Props) => {
  const handleClose = () => {
    setIsAdd(!isAdd)
  }

  return (
    <Box>
      <Modal
        open={isAdd}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="h5" fontWeight='bold'>
              タスク作成
            </Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>

          <Box>
            <FormControl sx={{ mt: 5, width: '75%' }}>
              <FormLabel sx={{ fontSize: '12px' }}>タイトル</FormLabel>
              <Input />
            </FormControl>

            <FormControl sx={{ display: 'block', mt: 5, width: '50%' }}>
              <InputLabel>カテゴリー</InputLabel>
              <Select label="カテゴリー" fullWidth defaultValue={undefined}> {/* defaultValueがundefinedだと警告がでる、 後で修正 */}
                <MenuItem value={'書類関係'}>書類関係</MenuItem>
                <MenuItem value={'荷物'}>荷物</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ display: 'block', mt: 5, width: '50%' }}>
              <InputLabel>ステータス</InputLabel>
              <Select label="ステータス" fullWidth defaultValue={'開始前'}>
                <MenuItem value={'開始前'}>開始前</MenuItem>
                <MenuItem value={'作業中'}>作業中</MenuItem>
                <MenuItem value={'終了'}>終了</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ display: 'block', mt: 5 }}>
              
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
