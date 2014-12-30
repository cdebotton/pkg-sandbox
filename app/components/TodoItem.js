import React from 'react';
import DestroyTodo from './DestroyTodo';
import TodoActionCreators from '../actions/TodoActionCreators';

var TodoItem = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  onChange(event) {
    TodoActionCreators.toggleCompleted({
      id: this.props.todo.id,
      completed: !this.props.todo.completed
    });
  },

  render() {
    var {todo} = this.props;

    return (
      <li key={todo.id}>
        <span className="task-name">{todo.task}</span>
        <input
          onChange={this.onChange}
          checked={todo.completed}
          type="checkbox" />
        <DestroyTodo todo={todo.id} />
      </li>
    );
  }
});

export default TodoItem;
