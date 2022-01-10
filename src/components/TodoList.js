/* eslint-disable react/prop-types */
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

class ToDoList extends React.Component {
  render() {
    return (
      <div className='todo-list'>
        {this.props.toDo.map((item) => (
          <ToDo
            handleToggleTask={this.props.handleToggleTask}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
