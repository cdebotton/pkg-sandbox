import Router from 'koa-router';

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default function(Api) {
  Api.get('/todos', function *() {
    yield delay(350);

    this.body = [{
      id: 'TODO_1',
      task: 'Task 1',
      completed: false
    }, {
      id: 'TODO_2',
      task: 'Task 2',
      completed: false
    }, {
      id: 'TODO_3',
      task: 'Task 3',
      completed: false
    }];
  });
};
