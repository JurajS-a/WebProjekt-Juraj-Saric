// frontend/src/pages/Home.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Film {
  _id: string;
  title: string;
  description: string;
  rating: number;
  addedBy: string;
}

function Home() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/films').then(res => setFilms(res.data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 All Movies</h1>
      {films.length === 0 ? (
        <p className="text-center text-gray-500">No movies available.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {films.map((film) => (
            <div key={film._id} className="bg-white shadow-md rounded-2xl p-4 border border-gray-200">
              <h2 className="text-xl font-semibold mb-1">{film.title}</h2>
              <p className="text-gray-700 text-sm mb-2">{film.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  Rating: {film.rating}/10
                </span>
                <span className="text-gray-500">by {film.addedBy}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
