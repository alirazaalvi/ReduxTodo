import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo } from '../actions/todoActions';
import TodoItem from './TodoItem.jsx';

class Todos extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos()).then(() =>
      console.log('data recieved')
    );
  }

  onChange(e) {
      const { dispatch } = this.props
      if(e.keyCode == 13){
          dispatch(addTodo(e.target.value))
          e.target.value = ''
        }
  }

  render() {
    const { todos, dispatch } = this.props
    return( 
      <div>
        <h1>Todo List</h1>
        <div>
          <input type="text" onKeyUp={this.onChange.bind(this)}/>
        </div>

        {todos.map((todo, index) => <TodoItem key={'todo-itemm-'+index} todo = {todo} dispatch = {dispatch} index = {index} /> )}
    </div>);
  }
}

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
