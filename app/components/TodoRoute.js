import React from 'react';
import {StoreListenerMixin} from 'Fluxd';
import TodoStore from '../stores/TodoStore';
import TodosAdapter from '../adapters/TodosAdapter';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import Snapshot from './Snapshot';

var TodoRoute = React.createClass({
  mixins: [StoreListenerMixin],

  statics: {
    fetchData() {
      return TodosAdapter.find();
    }
  },

  getInitialState() {
    var {todos} = TodoStore.getState();
    return {todos: todos, completed: TodoStore.getCompleted()};
  },

  componentWillMount() {
    TodosAdapter.save();
    this.listenTo(TodoStore, this.onChange);
  },

  onChange() {
    this.setState(this.getInitialState());
  },

  render() {
    var todos = (() => {
      if (TodoStore.isPending()) {
        return 'Loading...';
      }
      else {
        return <TodoList todos={this.state.todos} />;
      }
    })();
    return (
      <div className="todo-app">
        <div className="tool">
          <h1>Todos</h1>
          <NewTodo />
          {todos}
          <div className="controls">
            <span>Completed: {this.state.completed.size}</span>
          </div>
        </div>
        <Snapshot />
      </div>
    );
  }
});

export default TodoRoute;
