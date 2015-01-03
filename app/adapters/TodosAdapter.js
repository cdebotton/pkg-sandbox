import flux from '../flux';

class TodosAdapter {
  constructor() {
    this.configure({
      root: 'http://localhost:3000/api/v1'
    });
  }
}

export default flux.createAdapter(TodosAdapter);
