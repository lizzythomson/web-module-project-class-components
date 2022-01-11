import React from 'react';

class ToDo extends React.Component {
  handleClick = () => {
    this.props.handleToggleTask(this.props.item);
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={`item${this.props.item.completed ? ' completed' : ''}`}
      >
        <p>{this.props.item.task}</p>
      </div>
    );
  }
}

export default ToDo;
