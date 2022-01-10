import React from 'react';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddTask(this.state.input);
    this.setState({ input: '' });
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleChange}
            type='text'
          />
          <button>Add Todo</button>
        </form>
        <button onClick={this.props.handleClearItems}>Clear Completed</button>
      </div>
    );
  }
}

export default ToDoForm;
