import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChatIcon from '@material-ui/icons/Chat';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { chatDelete } from '../store/chats/actions'
import { makeStyles } from '@material-ui/core/styles';
import './index.css';

export default function Chat({ chat }) {

    const chatItem = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const clickHandle = (e) => {
        dispatch(chatDelete(chat[0]));
      };

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
        <Link to={`/chat/${chat[0]}`} className={ styles.Link }>
            <ListItem button key={chat[0]}>
                <ListItemIcon>
                <ChatIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={chat[1].name} />
                <ClearIcon style={{ color: 'white' }} onClick={clickHandle}/>
            </ListItem>
        </Link>
    );
}