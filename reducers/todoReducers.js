import Immutable from 'immutable';

export default (state = Immutable.List(), action) => {
  switch(action.type) {
    case 'addTodo':
      return state.unshift(action.todo);
   case 'receivePosts':
      return state.concat(action.todos);
    case 'deleteTodo':
      return state.filter((todo, index) => index !== action.index);
    default:
      return state;
  }
}