import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChatIcon from '@material-ui/icons/Chat';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';

export default function Chat({ chat }) {

    const useStyles = makeStyles({
        Link: {
            height: '100%',
            width: '100%',
            color: '#fff',
            textDecoration: 'none',
          },
      });

      const styles = useStyles();

    return (
        <Link to={`/chat/${chat.id}`} className={ styles.Link }>
            <ListItem button key={chat.id}>
                <ListItemIcon>
                <ChatIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
            </ListItem>
        </Link>
    );
}