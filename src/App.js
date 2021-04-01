import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';
import IconButton from './templates/IconButton/IconButton';
import Modal from './templates/Modal/Modal';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <Layout>
      <TodoApp />
    </Layout>
  );
}

export default App;
