import {flux} from 'Fluxd';

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
