import React from 'react';
import { deleteTodo } from '../actions/todoActions';

class TodoItem extends React.Component {
	render() {
		return (<p className="light" key={this.props.index}>{this.props.todo} &nbsp;&nbsp;<a className="red-text text-accent-3" href="#" onClick={e => {
		          this.props.dispatch(deleteTodo(this.props.index))
		        }}>x</a></p>);
	}
}

export default TodoItem;