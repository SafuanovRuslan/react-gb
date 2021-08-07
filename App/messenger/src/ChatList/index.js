import './index.css';
import Chat from '../Chat'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


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
                  <Chat chat={ chat } key={ chat.id }/>
                )
            })}
        </List>
      </div>
    );
}
  
export default Chats;