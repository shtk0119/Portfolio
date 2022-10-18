import Image from 'next/image';
import type { NextPage } from 'next';
import { AppBar, Box, Button, Grid, Link, List, ListItem, ListItemText, styled, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const CustomAppBar = styled(AppBar)({
  width: '1024px',
  color: 'black',
  backgroundColor: '#f1f1f1',
  boxShadow: 'none',
  position: 'static',
  padding: '1rem',
  margin: '0 auto',
});

const Home: NextPage = () => {
  return (
    <Box>
      <CustomAppBar>
        <Typography
          component='h3'
          fontFamily='"Oleo Script", cursive' 
          fontWeight='bold'
          fontSize='32px'
        >
          Smart Moving
        </Typography>
      </CustomAppBar>

      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box width='1024px' display='flex' alignItems='flex-end'>
          <Box textAlign='center' margin='auto'>
            <Typography component='h3' fontSize='32px'>
              引越を Smart に終わらしませんか？
            </Typography>
            <Typography component='h1' fontSize='48px'>
              Smart Moving
            </Typography>
            <Typography fontSize='16px' textAlign='left' marginTop='20px'>
              初めての引越し。初めての土地。そんな「初めて」の不安をまとめて管理！
              <br/>
              引越の「何をやればいい？」「いつまでに終わればいい？」を解決する！
              <br/>
              引越しが Smart に管理できるアプリ！
            </Typography>

            <Box marginTop='32px'>
              <Link href='/signup'>
                <Button variant='contained'>はじめる！</Button>
              </Link>
            </Box>

          </Box>
          <Box position='relative' height='480px' width='330px' >
            <Image src='/moving_main_image_pc.png' layout='fill' alt='logo' />
          </Box>
        </Box>

        <Box bgcolor='white'  width='100%' padding='48px 0'>
          <Box width='1024px' margin='0 auto'>
            <Typography fontSize='36px' fontWeight='bold' component='h2' textAlign='center'>
              Smart Moving の機能
            </Typography>

            <Box display='flex' flexDirection='column' margin='48px'>
              <Box display='flex' justifyContent='space-around'>
                <Box minWidth='500px' maxWidth='500px'>
                  <Typography textAlign='center'>タスクの管理</Typography>
                  <List>
                    <ListItem>
                      <ListItemText>タスクの作成</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>タスクのステータス変更</ListItemText>
                    </ListItem>
                  </List>
                </Box>
                <ReactPlayer url='https://vimeo.com/760205815/c5f3999f87' />
              </Box>

              <Box display='flex' justifyContent='space-around' flexDirection='row-reverse' marginTop='64px'>
                <Box maxWidth='500px'>
                  <Typography textAlign='center'>引越し先の役所を簡単検索</Typography>
                  <List>
                    <ListItem>
                      <ListItemText>
                        慣れない引越し先でも安心！引越し手続きに必要な役所や警察署等の施設情報を、１回の郵便番号検索で知ることができます。
                        <br/>
                        受付時間や施設でできることも一目でわかるシンプルなUI。
                        <br />
                        また、郵便番号が分からなくてもOK、住所から郵便番号の逆引きができます!
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
                <ReactPlayer url='https://vimeo.com/760205815/c5f3999f87' />
              </Box>

              <Box display='flex' justifyContent='space-around' marginTop='64px'>
                <Box maxWidth='500px'>
                  <Typography textAlign='center'>引越しに関する情報にアクセス</Typography>
                  <List>
                    <ListItem>
                      <ListItemText>
                        「何を」「どこに」「どの順で」など、調べたい詳細情報にも、簡単アクセス！
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
                <ReactPlayer url='https://vimeo.com/760205815/c5f3999f87' />
              </Box>

              {/* <Box display='flex' justifyContent='space-around' flexDirection='row-reverse' marginTop='64px'>
                <Box minWidth='500px' maxWidth='500px'>
                  <Typography textAlign='center'>その他機能</Typography>
                  <List>
                    <ListItem>
                      <ListItemText>
                        ダークモード
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        引越しの進捗状況をカレンダーで確認
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
                <ReactPlayer url='https://vimeo.com/760205815/c5f3999f87' />
              </Box> */}
            </Box>
          </Box>
        </Box>

        <Box width='1024px' padding='48px 0'>
          <Typography fontSize='36px' fontWeight='bold' component='h2' textAlign='center'>
            よくある質問
          </Typography>
        </Box>

        <Box bgcolor='white' width='100%' padding='48px 0'>
          <Box width='1024px' margin='0 auto'>
            <Typography fontSize='36px' fontWeight='bold' component='h2' textAlign='center'>
              アプリケーションの構成
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box component='footer' width='1024px' padding='32px 0' margin='0 auto' textAlign='center'>
        <Typography
          fontFamily='"Oleo Script", cursive' 
          fontWeight='bold'
          fontSize='24px'
        >
          Smart Moving
        </Typography>

        <Grid container justifyContent='center' marginTop='16px'>
          <Grid item xs={2}>
            <Link href='/' color='default' underline='none'>
              ホーム
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href='#' color='default' underline='none'>
              ヘルプ・お問い合わせ
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link href='#' color='default' underline='none'>
              開発者について
            </Link>
          </Grid>
        </Grid>

        <Box marginTop='16px'>
          <Link href='https://github.com/shtk928'>
            <Image src='/GitHub_Mark_120px.png' alt='github_logo' height="20px" width='20px' />
          </Link>
        </Box>


        <Typography
          fontSize='14px'
          color='#718096'
          marginTop='16px'
        >
          &copy; 2022 Shinagawa Takanori
        </Typography>
      </Box>
    </Box>
  )
}

export default Home;
