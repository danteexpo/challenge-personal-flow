// types
import { Forecastday } from '../types';
// material ui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

type ListProps = {
  forecast: Forecastday[];
};

const MyList = ({ forecast }: ListProps) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, paddingLeft: '4rem' }}>
      {forecast.map((day) => (
        <ListItem key={day.date}>
          <ListItemAvatar>
            <Avatar>
              <img src={day.day.condition.icon} alt="" className="condition" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`Mín: ${day.day.mintemp_c} C° | Máx: ${day.day.maxtemp_c} C°`}
            secondary={day.date}
          />
        </ListItem>
      ))}
    </List>
  );
};
export default MyList;
