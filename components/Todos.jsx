import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/todoActions';

class Todos extends React.Component {
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

        {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
          dispatch(deleteTodo(index))
        }}>X</button></p>)}
    </div>);
  }
}

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
