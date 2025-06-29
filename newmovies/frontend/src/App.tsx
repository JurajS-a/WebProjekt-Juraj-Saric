import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Search from './pages/Search';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold">
            🎬 MovieApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
              <Link to="/about" className="nav-link text-white">
                About
              </Link>
              <Link to="/profile" className="nav-link text-white">
                Profile
              </Link>
              <Link to="/users" className="nav-link text-white">
                Users
              </Link>
              <Link to="/search" className="nav-link text-white">
                Search
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-5 px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
