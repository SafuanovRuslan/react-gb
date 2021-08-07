import './index.css';
import { useEffect, useRef, useState } from 'react';
import MessageList from '../MessageList';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Home({ match }) {
  let chatId = match.params.chatId;

  const [messageList, setMessageList] = useState({
    cid_1: [],
    cid_2: [],
    cid_3: [],
    cid_4: [],
  });

  chatId = messageList[chatId] ? chatId : window.location = `/chat/${Object.keys(messageList)[0]}`;
  

  const updateMessageList = ({ sender = "Me", text = document.querySelector('input').value, key = new Date().getTime()}) => {
    if ( document.querySelector('input').value === '' && sender !== 'Robot' ) return;

    let newMessage = {
      sender: sender,
      text: text,
      key: key,
    }

    setMessageList((prevMessageList) => Object.assign({}, prevMessageList, prevMessageList[chatId].push(newMessage)));

    if ( sender !== 'Robot' ) document.querySelector('input').value = '';
  }

  const input = useRef(true);

  useEffect(() => {
    input.current?.children[1].children[0].focus();
    if ( messageList[chatId].length === 0 ) return;
    if ( messageList[chatId][messageList[chatId].length - 1].sender === "Me" ) {
      setTimeout(() => updateMessageList({sender: "Robot", text: "Hi, man!"}), 1500);
    }
  }, [messageList, messageList[chatId]]);

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
    <div className="messenger">
        <MessageList messageList={messageList[chatId]} />
        <TextField id="standard-basic" label="Message" className={classes.TextField} ref={input}/>
        <button onClick={updateMessageList}><i className="far fa-paper-plane"></i></button>
    </div>
  );
}