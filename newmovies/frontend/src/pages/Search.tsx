// frontend/src/pages/Search.tsx
import { useState } from 'react';
import axios from 'axios';

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Genre: string;
  Director: string;
}

function Search() {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMovie(null);
    try {
      const res = await axios.get(`http://localhost:5000/api/search?title=${title}`);
      if (res.data && res.data.Response !== 'False') {
        setMovie(res.data);
      } else {
        setError('Movie not found.');
      }
    } catch (err) {
      setError('Error fetching movie data.');
    }
  };

  return (
    <div className="container bg-dark text-white py-5 min-vh-100">
      <h2 className="text-danger mb-4">🔍 Search Movie Info</h2>
      <form onSubmit={handleSearch} className="d-flex gap-3 mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button className="btn btn-danger">Search</button>
      </form>

      {error && <div className="alert alert-warning">{error}</div>}

      {movie && (
        <div className="card bg-secondary text-white">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8 p-3">
              <h3>{movie.Title} ({movie.Year})</h3>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Plot:</strong> {movie.Plot}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
