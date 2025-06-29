// frontend/src/pages/Profile.tsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(5);
  const [addedBy, setAddedBy] = useState('john_doe');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/films', {
        title,
        description,
        rating,
        addedBy,
      });
      alert('Film added!');
      setTitle('');
      setDescription('');
      setRating(5);
      navigate('/');
    } catch (error) {
      alert('Failed to add film');
      console.error(error);
    }
  };

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 py-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '600px' }}>
        <h1 className="h3 mb-4 text-center text-danger">🎬 Add New Film</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating (1–10)</label>
            <input
              type="range"
              className="form-range"
              min={1}
              max={10}
              value={rating}
              onChange={e => setRating(Number(e.target.value))}
            />
            <div className="text-center">Selected: <strong>{rating}</strong>/10</div>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              value={addedBy}
              onChange={e => setAddedBy(e.target.value)}
            >
              <option value="john_doe">john_doe</option>
              <option value="jane_smith">jane_smith</option>
            </select>
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Add Film
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
