import flux from '../flux';
import TodosAdapter from '../adapters/TodosAdapter';
import TodoActionCreators from '../actions/TodoActionCreators';
import {List, fromJS} from 'immutable';

var TODOS = Symbol('todos');
var ID_PROPERTY = 0;

class TodoStore {
  constructor() {
    this.todos = List();
    this.bindActions(TodoActionCreators);
    this.bindActions(TodosAdapter);
  }

  onCreateTodo(data) {
    var id = `TODO_${++ID_PROPERTY}`;
    this.todos = this.todos
      .concat([fromJS({id: id, task: data, completed: false})]);
  }

  onFindTodos(data) {
    data = Array.isArray(data) ? data : [data];
    this.todos = this.todos.concat(fromJS(data));
  }

  onDestroyTodo(id) {
    var index = this.todos.findIndex(todo => todo.get('id') === id);
    this.todos = this.todos.delete(index);
  }

  onToggleCompleted(data) {
    var index = this.todos.findIndex(todo => todo.get('id') === data.id);

    this.todos = this.todos
      .updateIn([index, 'completed'], value => data.completed);
  }

  static getCompleted() {
    return this.getState().todos.filter(todo => todo.get('completed') === true);
  }
};

export default flux.createStore(TodoStore);
