import Chats from './Chats'
import Messages from './Messages'
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    {name: 'Work', id: 'uid_34_cid_1'},
    {name: 'Friends', id: 'uid_34_cid_2'},
    {name: 'Mother', id: 'uid_34_cid_3'},
    {name: 'Technical support', id: 'uid_34_cid_4'}
  ]);

  const updateMessageList = ({ sender = "Me", text = document.querySelector('input').value, key = new Date().getTime()}) => {
    if ( document.querySelector('input').value === '' && sender !== 'Robot' ) return;

    let newMessage = {
      sender: sender,
      text: text,
      key: key,
    }

    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);

    if ( sender !== 'Robot' ) document.querySelector('input').value = '';
  }

  const input = useRef(true);

  useEffect(() => {
    input.current?.children[1].children[0].focus();
    if ( messageList.length === 0 ) return;
    if ( messageList[messageList.length - 1].sender === "Me" ) {
      setTimeout(() => updateMessageList({sender: "Robot", text: "Hi, man!"}), 1500);
    } 
  }, [messageList]);

  const useStyles = makeStyles({
    TextField: {
      margin: '-9px 0 0',
      '& label': {
        color: 'white',
      },
      '& label.Mui-focused': {
        color: '#39F',
      },
      '& div input': {
        color: 'white',
      },
      '& div.MuiInput-underline:before': {
        borderBottom: '1px solid #FFF',
      },
      '&:hover div.MuiInput-underline:before': {
        borderBottom: '2px solid #FFF',
      },
      '& div.MuiInput-underline:after': {
        borderBottom: '2px solid #39F',
      }
    },
  });

  const classes = useStyles();

  return (
    <div className="App">
      <Chats chatList={chatList}/>
      <div className="messenger">
        <Messages messageList={messageList} />
        <TextField id="standard-basic" label="Message" className={classes.TextField} ref={input}/>
        <button onClick={updateMessageList}><i className="far fa-paper-plane"></i></button>
      </div>
    </div>
  );
}

export default App;
