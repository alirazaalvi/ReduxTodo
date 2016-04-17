import Immutable from 'immutable';
import { ACTIONS } from '../constants/todoConstants';

export default (state = Immutable.List(), action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return state.unshift(action.todo);
   case ACTIONS.RECEIVE_TODOS:
      return state.concat(action.todos);
    case ACTIONS.DELETE_TODO:
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
}
