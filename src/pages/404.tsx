import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Custom404 = () => {
  return (
    <Box width='600px' m='50px auto' textAlign='center'>
      <Typography
        component='h1'
        fontWeight='bold'
        fontSize='32px'
      >
        404
      </Typography>
      <Typography 
        component='h3'
        fontWeight='bold'
        fontSize='16px'
      >
        File not found
      </Typography>
      <Typography
        mt='32px'
      >
        このアドレスに設定されているサイトには、要求されたファイルがありません。
        <br/>
        ファイル名の大文字と小文字がURLと一致していることを確認してください。
      </Typography>
      <Box mt='32px'>
        <Link href='/' passHref>
          <Button variant='contained'>
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Custom404;