import React, { useState } from 'react';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'hey whtsapp', completed: false },
    { id: 2, text: 'how are yu doing', completed: true },
    { id: 3, text: 'This is cool right ?', completed: false }
  ]);
  
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Todo List</h1>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.addButton} onClick={addTodo}>
          Add Todo
        </button>
      </div>

      {todos.map(todo => (
        <div key={todo.id} className={styles.todoItem}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span 
            className={`${styles.todoText} ${
              todo.completed ? styles.todoTextCompleted : ''
            }`}
          >
            {todo.text}
          </span>
          <button 
            className={styles.deleteButton}
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;