import React, { Component } from 'react';
import style from './TodoEditor.module.css';
import IconButton from '../../../templates/IconButton/IconButton';

class TodoEditor extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handelChange = event => {
    this.setState({
      message: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <div>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <div className={style.form__inner}>
            <h3>Task</h3>
            <textarea
              value={this.state.message}
              onChange={this.handelChange}
              placeholder="Введіть текст майбутньої таски..."
            ></textarea>
          </div>
          <IconButton
            type="submit"
            onClick={this.addTask}
            disabled={!this.state.message}
            title="Введіть текст таски"
          >
            Add Task
          </IconButton>
        </form>
      </div>
    );
  }
}
export default TodoEditor;
