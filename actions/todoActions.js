export function addTodo(todo){
  return {
    type: 'addTodo',
    todo
  }
}

export function deleteTodo(index){
  return {
    type: 'deleteTodo',
    index
  }
}

export function fetchPosts(subreddit) {
  return dispatch => {
    return fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}


export function receivePosts(subreddit, json) {
  return {
    type: 'receivePosts',
    todos: json.map(child => child.title)
  }
}
