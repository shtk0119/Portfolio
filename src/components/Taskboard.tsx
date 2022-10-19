import * as React from 'react';
import { Send } from '@mui/icons-material';
import { Avatar,Box, Card, CardHeader, Divider, IconButton, Input, Modal, Typography } from '@mui/material';

export const Taskboard = () => {
  const [todos, setTodos] = React.useState(['test1', 'test2', 'test3', 'test4', 'test5', 'test6']);
  
  const [cardOpen, setCardOpen] = React.useState<boolean>(false);
  const toggleModal = () => {
    setCardOpen(!cardOpen);
  };

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
      <Box display='flex' justifyContent='space-around' marginTop='36px'>
        <Card 
          sx={{
            height: '720px', 
            minWidth: '360px',
            overflow: 'scroll', // ヘッダーの部分を固定したい
          }}
        >
          <CardHeader 
            sx={{ 
              height: '72px', 
              '& .MuiCardHeader-title': { 
                fontWeight: 'bold' 
              },
            }} 
            title='予定' 
          />
          <Divider />
          <Box>
          </Box>
        </Card>

        <Card 
          sx={{
            height: '720px', 
            minWidth: '360px',
            overflow: 'scroll', // ヘッダーの部分を固定したい
          }}
        >
          <CardHeader 
            sx={{ 
              height: '72px', 
              '& .MuiCardHeader-title': { 
                fontWeight: 'bold' 
              },
            }} 
            title='作業中' 
          />
          <Divider />

          {todos.map((text, index) => {
            return (
              <Box key={index}>
                <Box margin='16px' onClick={toggleModal}>
                  <Card sx={{ bgcolor: 'red', height: '100px', padding: '16px' }}>
                    <Typography>{text}</Typography>
                  </Card>
                </Box>
              </Box>
            )
          })}  
          {/* モーダルのTodo の内容が上手く表示できない為修正必須 */}
          <Modal
            open={cardOpen}
            onClose={toggleModal}
          >
            <Box 
              sx={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: '(-50%, -50%)', 
                WebkitTransform: 'translate(-50%, -50%)', 
                msTransform: 'translate(-50%, -50%)' 
              }} 
              bgcolor='white' 
              height='720px' 
              width='420px' 
              padding='16px'
              borderRadius='10px'
            >
              <Typography variant="h4" component="h2">
                text1
              </Typography>
              <Divider />
              <Box>
                <Box height='300px' marginTop='16px'>
                  <Typography variant='h6'>詳細</Typography>
                </Box>
                <Divider />
                <Box height='300px' marginTop='16px' position='relative'>
                  <Typography variant='h6'>メモ</Typography>
                  <Box position='absolute' bottom='0' display='flex' width='100%'>
                    <Avatar />
                    <Box width='90%' display='flex'>
                      <Input
                        sx={{ 
                          width: '100%',
                          paddingLeft: '12px', 
                          marginLeft: '16px',
                          border: '1px solid',
                          borderRadius: '10px',
                        }} 
                        disableUnderline
                        placeholder='コメントを入力'
                        endAdornment={
                          <IconButton>
                            <Send />
                          </IconButton>
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Card>

        <Card 
          sx={{
            height: '720px', 
            minWidth: '360px',
            overflow: 'scroll', // ヘッダーの部分を固定したい
          }}
        >
          <CardHeader 
            sx={{ 
              height: '72px', 
              '& .MuiCardHeader-title': { 
                fontWeight: 'bold' 
              },
            }} 
            title='完了' 
          />
          <Divider />
        </Card>
      </Box>
    </Box>
  );
}