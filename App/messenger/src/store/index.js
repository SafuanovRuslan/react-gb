import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { profileReducer } from './profile';
import { chatsReducer } from './chats';

  const persistConfig = {
    key: 'GB-messenger',
    storage,
  }
  
  const rootReducer = combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  export const persistor = persistStore(store);