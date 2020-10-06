import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';

function App() {
  return (
    <div className="todo-app">
      <h1>Aplikasi Pencatat Tugas</h1>

      <AddTodo/>
      <TodoList/>
      <VisibilityFilters/>
    </div>
  );
}

export default App;
