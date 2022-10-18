import * as React from 'react';
import { Box, Button, Chip, Divider, Input, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Phone, Place, Search } from '@mui/icons-material';

export const SearchForm = () => {
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
      <Box margin='64px 440px'>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Typography component='span' mr={1}>〒</Typography>
          <Input type='number' sx={{ bgcolor: 'white', fontSize: '20px', border: '1px solid #00000033', borderRadius: 2, p: '0 8px', step: '1' }} placeholder='000-0000' disableUnderline />
          <Button sx={{ height: '100%', ml: 1 }} variant='contained'>
            <Search />
          </Button>
        </Box>

        <Box bgcolor='white' m='64px auto 0' width='100%' >

          <Box p={5}>
            <Typography variant='h6' component='h5' fontWeight='bold'>さいたま市南区役所</Typography>
            <Box mt={2}>
              <Typography fontWeight='bold' color='gray'>できること</Typography>
              <Stack direction="row" spacing={1} mt={1}>
                <Chip label="転出・転入届" />
                <Chip label="マイナンバー住所変更" />
              </Stack>
              <Box mt={3}>
                <Typography variant='subtitle1' fontWeight='bold' color='gray'>住所</Typography>
                <Typography>さいたま市南区別所7-20-1</Typography>
              </Box>
              <Box mt={5} display='flex' justifyContent='space-around'>
                <Button type='button' variant='contained'>
                  <Phone />
                  <Typography variant='button' fontWeight='bold' ml={1}>電話する</Typography>
                </Button>
                <Button type='button' variant='contained'>
                  <Place />
                  <Typography variant='button' fontWeight='bold' ml={1}>地図で見る</Typography>
                </Button>
              </Box>
            </Box>
          </Box>

          <Divider />

          <Box p={5}>
            <Typography variant='h6' component='h5' fontWeight='bold'>埼玉県運転免許センター</Typography>
            <Box mt={2}>
              <Typography fontWeight='bold' color='gray'>できること</Typography>
              <Stack direction="row" spacing={1} mt={1}>
                <Chip label="運転免許証の住所変更" />
              </Stack>
              <Box mt={3}>
                <Typography variant='subtitle1' fontWeight='bold' color='gray'>住所</Typography>
                <Typography>さいたま市南区別所7-20-1</Typography>
              </Box>
              <Box mt={1}>
                <Typography variant='subtitle1' fontWeight='bold' color='gray'>詳細</Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <ListItemText>受付曜日：月曜日 〜 金曜日</ListItemText>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText>受付日時：午前9時 〜 午後17時</ListItemText> 
                  </ListItem>
                </List>
              </Box>
              <Box mt={5} display='flex' justifyContent='space-around'>
                <Button type='button' variant='contained'>
                  <Phone />
                  <Typography variant='button' fontWeight='bold' ml={1}>電話する</Typography>
                </Button>
                <Button type='button' variant='contained'>
                  <Place />
                  <Typography variant='button' fontWeight='bold' ml={1}>地図で見る</Typography>
                </Button>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
