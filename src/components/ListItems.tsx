import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddHome, Dashboard, Newspaper, Search } from '@mui/icons-material';

export const ListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="タスクボード" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddHome />
      </ListItemIcon>
      <ListItemText primary="引越し先情報" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Search />
      </ListItemIcon>
      <ListItemText primary="役所検索" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Newspaper />
      </ListItemIcon>
      <ListItemText primary="メディア" />
    </ListItemButton>
  </>
);