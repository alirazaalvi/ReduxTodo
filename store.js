import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import todos from './reducers/todoReducers';
import { fetchPosts, receivePosts } from './actions/todoActions';


let store = createStore(
  todos,
  applyMiddleware(reduxThunk)
);

export default store;


