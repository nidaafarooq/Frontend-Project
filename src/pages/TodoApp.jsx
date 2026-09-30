import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete React Portfolio setup', completed: true },
    { id: 2, text: 'Integrate OpenWeather API', completed: true },
    { id: 3, text: 'Deploy application online', completed: false }
  ]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
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
    <div style={{ maxWidth: '550px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#f8fafc', fontWeight: '700', marginBottom: '0.5rem' }}>
          Task Manager
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Organize daily productivity tasks with real-time state tracking.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flexGrow: 1,
            padding: '12px 16px',
            borderRadius: '10px',
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            outline: 'none',
            fontSize: '0.95rem'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '12px 20px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
            color: '#fff',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}
        >
          Add Task
        </button>
      </form>

      {/* Todo List Card */}
      <div style={{
        background: 'rgba(30, 41, 59, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem'
      }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#64748b', padding: '1rem' }}>No tasks available. Add one above!</p>
        ) : (
          todos.map(todo => (
            <div 
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div 
                onClick={() => toggleTodo(todo.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  flexGrow: 1
                }}
              >
                <input 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={() => {}} 
                  style={{ cursor: 'pointer', width: '16px', height: '16px', accentColor: '#a855f7' }}
                />
                <span style={{
                  color: todo.completed ? '#64748b' : '#f1f5f9',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  fontSize: '0.95rem'
                }}>
                  {todo.text}
                </span>
              </div>

              <button 
                onClick={() => deleteTodo(todo.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#f87171',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  padding: '4px 8px'
                }}
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}