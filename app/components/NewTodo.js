import React from 'react';
import TodoActionCreators from '../actions/TodoActionCreators';

var NewTodo = React.createClass({
  handleSubmit(event) {
    var todo = this.refs.todo.getDOMNode();
    var task = todo.value;
    todo.value = '';

    TodoActionCreators.createTodo(task);

    event.preventDefault();
  },

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="new-todo">
        <input
          ref="todo"
          placeholder="New todo"
          type="text" />
        <button type="submit">Create</button>
      </form>
    );
  }
});

export default NewTodo;
