import React, { Component } from 'react';
import style from './TodoApp.module.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList/TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './Filter/Filter';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: '',
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    /*this.handleKeyDown = this.handleKeyDown.bind(this);*/
  }
  componentDidMount() {
    if (localStorage.getItem('todos')) {
      this.setState({ todos: JSON.parse(localStorage.getItem('todos')) });
    }
    /*window.addEventListener('keydown', this.handleKeyDown);*/
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }
  /*  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Enter') {
      this.addTask(event.target.value);
    }
  };*/
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(task =>
        task.id === todoId ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };
  changeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  addTask = text => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [newTask, ...todos],
    }));
  };
  render() {
    const completedTodos = this.state.todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
    return (
      <div className={style.container}>
        <h1 className={style.title}>To do:</h1>
        <div className={style.todosInfo}>
          <p>Кількість задач: {this.state.todos.length}</p>
          <p>Кількість виконаних задач: {completedTodos}</p>
        </div>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <TodoEditor onSubmit={this.addTask} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}
export default TodoApp;
