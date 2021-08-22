import Chats from '../ChatList'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../Home';
import Profile from '../Profile';
import News from '../News';
import MenuItem from '../MenuItem';
import PersonIcon from '@material-ui/icons/Person';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import TodayIcon from '@material-ui/icons/Today';
import ChatIcon from '@material-ui/icons/Chat';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Signin from '../Signin';
import { PrivateRoute } from '../hocs/PrivateRoute';
import { PublicRoute } from '../hocs/PublicRoute';
import firebase from 'firebase';

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

  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    })
  }, []);

  const logOut = () => {
    firebase.auth().signOut();
  }

  return (
    <BrowserRouter>
      <div className="App">
        {isAuthed ? <Chats chatList={chatList}/> : ""}

        <Switch>
          <Redirect from="/chat/" exact to={`/chat/${Object.keys(chatList)[0]}`} authed={isAuthed}/>
          <PrivateRoute path="/chat/:chatId" exact component={Home} authed={isAuthed}></PrivateRoute>
          <PrivateRoute path="/profile" exact component={Profile} authed={isAuthed}></PrivateRoute>
          <PrivateRoute path="/news" exact component={News} authed={isAuthed}></PrivateRoute>
          <PublicRoute path="/signup" exact authed={isAuthed}>
            <Signin isSignUp />
          </PublicRoute>
          <PublicRoute path="/signin" exact authed={isAuthed}>
            <Signin />
          </PublicRoute>
          {!isAuthed ? <Redirect to='/signin'></Redirect> : ''}
        </Switch>

        {isAuthed ? (<div className='menu'>
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
          <Link to='/news' className={ style.Link }>
            <MenuItem>
              <TodayIcon style={{ color: 'white' }} />
            </MenuItem>
          </Link>
          <Link to='/signin' className={ style.Link }>
            <MenuItem>
              <MeetingRoomIcon style={{ color: 'white' }} onClick={logOut}/>
            </MenuItem>
          </Link>
        </div>) : ''}
      </div>
    </BrowserRouter>
  );
}