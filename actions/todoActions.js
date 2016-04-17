import { ACTIONS } from '../constants/todoConstants';

export function addTodo(todo){
  return {
    type: ACTIONS.ADD_TODO,
    todo
  }
}

export function deleteTodo(index){
  return {
    type: ACTIONS.DELETE_TODO,
    index
  }
}

export function fetchTodos() {
  return dispatch => {
    return fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)))
  }
}

export function receiveTodos(json) {
  return {
    type:  ACTIONS.RECEIVE_TODOS,
    todos: json.map(child => child.title)
  }
}
