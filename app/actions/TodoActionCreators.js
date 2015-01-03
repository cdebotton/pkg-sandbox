import flux from '../flux';

class TodoActionCreators {
  constructor() {
    this.generateActions(
      'createTodo',
      'destroyTodo',
      'updateTodo',
      'toggleCompleted',
      'markAllCompleted',
      'clearCompleted'
    );
  }
}

export default flux.createActions(TodoActionCreators);
