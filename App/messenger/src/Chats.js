import './Chats.css';
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
  
  export default function Chats({ chatList }) {
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
/*
function Chats({ chatList }) {
    return (
        <div className="chats">
            {chatList.map((chat) => {
                return (
                    <div className="chat" key={chat.key}>
                        <div className="message__head">
                            <div className="message__sender">{chat.sender}</div>
                            <div className="message__time">{new Date().getDate()}.{new Date().getMonth() + 1} {new Date().getHours()}:{new Date().getMinutes()}</div>
                        </div>
                        <div className="message__text">{chat.text}</div>
                        <div className="message__tail"></div>
                    </div>
                );
            })}
        </div>
    );
}
  
export default Chats;
*/