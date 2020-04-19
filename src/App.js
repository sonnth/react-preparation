import React from 'react';
import './antd/dist/antd.css';
import TodoList from './component/TodoList';
import TodoItems from './component/TodoItems';

const App = () => (
  <div className="App">
    <TodoList/>
    <TodoItems/>
  </div>
);

export default App;