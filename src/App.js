import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo,
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='app-container'>
        <div className='header'>
          <h1>Welcome to your Todo App!</h1>
          <ToDoForm />
        </div>
        <div className='todo-task-list'>
          <ToDoList />
          <button>Clear All</button>
        </div>
      </div>
    );
  }
}

export default App;
