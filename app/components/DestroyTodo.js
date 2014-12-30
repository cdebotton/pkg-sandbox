import React from 'react';
import TodoActionCreators from '../actions/TodoActionCreators';

var DestroyTodo = React.createClass({
  propTypes: {
    todo: React.PropTypes.string.isRequired
  },

  handleClick(event) {
    event.preventDefault();
    TodoActionCreators.destroyTodo(this.props.todo);
  },

  render() {
    return (
      <button
        onClick={this.handleClick}>
        Remove
      </button>
    );
  }
});

module.exports = DestroyTodo;
