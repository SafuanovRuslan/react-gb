import './index.css';
import Chat from '../Chat';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { chatAdd } from '../store/chats/actions';
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

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    chatList = Object.entries(chatList);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(chatAdd(value));
      setValue("");
    };

    const handleChange = (e) => {
      setValue(e.target.value);
    };
    
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
            {chatList.map((chat) => {
                return (
                  <Chat chat={ chat } key={ chat[0] }/>
                )
            })}
        </List>
        <form action="" onSubmit={handleSubmit}>
          <input value={value} onChange={handleChange}></input>
          <button onClick={handleSubmit}>Add chat</button>
        </form>
      </div>
    );
}
  
export default Chats;