import logo from './logo.svg';
import Messages from './Messages'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);

  const updateMessageList = ({ sender = "Me", text = document.querySelector('input').value}) => {
    let newMessage = {
      sender: sender,
      text: text,
    }

    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);

    document.querySelector('input').value = '';
  }

  useEffect(() => {
    if ( messageList.length == 0 ) return;
    if ( messageList[messageList.length - 1].sender == "Me" ) {
      setTimeout(() => updateMessageList({sender: "Robot", text: "Hi, man!"}), 1500)ж
    } 
  }, [messageList])

  return (
    <div className="App">
        <Messages messageList={messageList} />
        <input type="text" placeholder="message"></input>
        <button onClick={updateMessageList}><i className="far fa-paper-plane"></i></button>
    </div>
  );
}

export default App;
