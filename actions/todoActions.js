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

export function fetchPosts() {
  return dispatch => {
    return fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}

export function receivePosts(json) {
  return {
    type:  ACTIONS.RECEIVE_TODOS,
    todos: json.map(child => child.title)
  }
}
