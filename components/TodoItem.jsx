import React from 'react';
import { deleteTodo } from '../actions/todoActions';

class TodoItem extends React.Component {
	render() {
		return (<p key={this.props.index}>{this.props.todo} <a className="delete-link" href="#" onClick={e => {
		          this.props.dispatch(deleteTodo(this.props.index))
		        }}>x</a></p>);
	}
}

export default TodoItem;