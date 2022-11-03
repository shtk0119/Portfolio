import Link from 'next/link';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AddHome, Dashboard, Newspaper, Search } from '@mui/icons-material';

export const ListItems = (
  <>
    <Link href='/task' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="タスクボード" />
      </ListItemButton>
    </Link>

    <Link href='#' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <AddHome />
        </ListItemIcon>
        <ListItemText primary="引越し先情報" />
      </ListItemButton>
    </Link>

    <Link href='/search' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <ListItemText primary="役所検索" />
      </ListItemButton>
    </Link>

    <Link href='#' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <Newspaper />
        </ListItemIcon>
        <ListItemText primary="メディア" />
      </ListItemButton>
    </Link>
  </>
)