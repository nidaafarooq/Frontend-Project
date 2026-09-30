import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import WeatherApp from './pages/WeatherApp';
import TodoApp from './pages/TodoApp';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-logo">My Portfolio</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/weather">Weather App</Link>
          <Link to="/todo">Todo App</Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;