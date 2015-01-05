import flux from '../flux';
import TodosAdapter from '../adapters/TodosAdapter';
import TodoActionCreators from '../actions/TodoActionCreators';
import {List, fromJS} from 'immutable';

class TodoStore {
  constructor() {
    this.todos = List();
    this.bindActions(TodoActionCreators);
    this.bindActions(TodosAdapter);
  }

  onCreateTodo(data) {
    var id = nextID(this.todos);
    var taskName = data || `Task ${this.todos.size + 1}`;
    this.todos = this.todos
      .concat([fromJS({id: id, task: taskName, completed: false})]);
  }

  onFindTodos(data) {
    data = Array.isArray(data) ? data : [data];

    var existingTasks = this.todos.map(task => task.get('id'));
    var tasks = data.filter(task => existingTasks.indexOf(task.id) === -1);

    this.todos = this.todos.concat(fromJS(tasks));
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

var nextID = (todos) => {
  return `TODO_${todos.size + 1}`;
};

export default flux.createStore(TodoStore);
