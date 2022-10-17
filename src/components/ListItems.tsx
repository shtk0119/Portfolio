import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddHome, Dashboard, Newspaper, Search } from '@mui/icons-material';
import { Link } from '@mui/material';

export const ListItems = (
  <>
    <Link href='/task' underline='none' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="タスクボード" />
      </ListItemButton>
    </Link>

    <Link href='#' underline='none' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <AddHome />
        </ListItemIcon>
        <ListItemText primary="引越し先情報" />
      </ListItemButton>
    </Link>

    <Link href='#' underline='none' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <ListItemText primary="役所検索" />
      </ListItemButton>
    </Link>

    <Link href='#' underline='none' color='default'>
      <ListItemButton>
        <ListItemIcon>
          <Newspaper />
        </ListItemIcon>
        <ListItemText primary="メディア" />
      </ListItemButton>
    </Link>
  </>
);