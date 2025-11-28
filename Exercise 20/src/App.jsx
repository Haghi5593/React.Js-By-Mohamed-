import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'hey whtsapp', completed: false },
    { id: 2, text: 'how are yu doing', completed: true },
    { id: 3, text: 'This is cool right ?', completed: false },
    { id: 3, text: 'Here We GO!', completed: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            My Todo List
          </h1>
          
          {/* Input Form - Isku Garab */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 whitespace-nowrap"
              >
                Add Todo
              </button>
            </div>
          </form>

          {/* Todo List */}
          <div className="space-y-3">
            {todos.map(todo => (
              <div
                key={todo.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                />
                <span className={`flex-1 text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {todos.length === 0 && (
            <p className="text-center text-gray-500 mt-6 italic">
              No todos yet. Add some tasks above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;