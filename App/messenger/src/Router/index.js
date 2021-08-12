import Chats from '../ChatList'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../Home';
import Profile from '../Profile';
import MenuItem from '../MenuItem';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export default function Router() {
  /*
  const [chatList, setChatList] = useState([
    {name: 'Work', id: 'cid_1'},
    {name: 'Friends', id: 'cid_2'},
    {name: 'Mother', id: 'cid_3'},
    {name: 'Technical support', id: 'cid_4'}
  ]);
  */

  const chatList = useSelector(state => state.chats);

  const useStyles = makeStyles({
    Link: {
        width: '100%',
        height: '100%',
        textDecoration: 'none',
        color: '#fff',
      },
  });

  const style = useStyles()

  return (
    <BrowserRouter>
      <div className="App">
        <Chats chatList={chatList}/>

        <Switch>
          <Redirect from="/chat/" exact to={`/chat/${Object.keys(chatList)[0]}`}/>
          <Route path="/chat/:chatId" exact component={Home}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route exact component={Profile}>
          </Route>
        </Switch>

        <div className='menu'>
          <Link to='/profile' className={ style.Link }>
            <MenuItem >
              <PersonIcon style={{ color: 'white' }} />
            </MenuItem>
          </Link>
          <Link to='/chat/cid_1' className={ style.Link }>
            <MenuItem>
              <ChatIcon style={{ color: 'white' }} />
            </MenuItem>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}