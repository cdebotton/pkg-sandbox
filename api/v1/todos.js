import Router from 'koa-router';

export default function(Api) {
  Api.get('/todos', function *() {
    this.body = [{
      id: 'TODO_1',
      task: 'Go down to the farmers market',
      completed: false
    }, {
      id: 'TODO_2',
      task: 'Get some plums',
      completed: false
    }, {
      id: 'TODO_3',
      task: 'So juicy',
      completed: false
    }];
  });
};
