import './index.css';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import MessageList from '../MessageList';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { sendMessage, sendMessageWithReply } from '../store/chats/actions';

export default function Home({ match }) {
  let chatId = match.params.chatId;

  const chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const history = useHistory();
  if (!chats[chatId] ) {
    chatId = Object.keys(chats)[0];
    history.push(`/chat/${chatId}`);
  }
  
  // querySelector обязательно уберу, просто времени не хватает =(
  const updateMessageList = ({ sender = "Me", text = document.querySelector('.MuiInputBase-input').value, key = new Date().getTime()}) => {
    if ( document.querySelector('.MuiInputBase-input').value === '' && sender !== 'Robot' ) return;

    let newMessage = {
      sender: sender,
      text: text,
      key: key,
    }

    dispatch(sendMessageWithReply({
        id: chatId,
        message: newMessage,
      })
    )
  }

  const input = useRef(true);

  useEffect(() => {
    input.current?.children[1].children[0].focus();
  }, []);

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
        <MessageList messageList={chats[chatId].messages} />
        <TextField id="standard-basic" label="Message" className={classes.TextField} ref={input}/>
        <button onClick={updateMessageList} className="send-button"><i className="far fa-paper-plane"></i></button>
    </div>
  );
}