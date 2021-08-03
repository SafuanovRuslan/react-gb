import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChatIcon from '@material-ui/icons/Chat';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 300,
      backgroundColor: '#666',
      color: 'white',
    },
  }));
  
function Chats({ chatList }) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
            {chatList.map((chat) => {
                return (
                    <ListItem button key={chat.id}>
                        <ListItemIcon>
                        <ChatIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={chat.name} />
                    </ListItem>
                )
            })}
        </List>
      </div>
    );
}
  
export default Chats;