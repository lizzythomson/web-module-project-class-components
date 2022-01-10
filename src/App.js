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

  // Toggle Completed
  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.map((item) => {
        if (item.id === selectedTask.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      }),
    });
  };

  // Add Task
  handleAddTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };

    this.setState({ ...this.state, toDo: [...this.state.toDo, newTask] });
  };

  // Toggle Clear Items
  handleClearItems = () => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div className='app-container'>
        <div className='header'>
          <h1>Welcome to your Todo App!</h1>
          <ToDoForm
            handleAddTask={this.handleAddTask}
            handleClearItems={this.handleClearItems}
          />
        </div>
        <div className='todo-task-list'>
          <ToDoList
            handleToggleTask={this.handleToggleTask}
            toDo={this.state.toDo}
          />
        </div>
      </div>
    );
  }
}

export default App;
