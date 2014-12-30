import React from 'react';
import TodoItem from './TodoItem';

var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.object.isRequired
  },

  render() {
    var todos = this.props.todos.toJS()
      .map(todo => <TodoItem todo={todo} key={todo.id} />);

    return (
      <ul className="todo-list">{todos}</ul>
    );
  }
});

export default TodoList;
