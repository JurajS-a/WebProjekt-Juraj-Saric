
function About() {
  return (
    <div className="container-fluid bg-dark text-white min-vh-100 py-5 px-4">
      <div className="mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="text-danger text-center mb-4">About MovieApp</h1>
        <p className="lead">
          MovieApp is a fun and modern platform where users can add, rate, and browse movies.
          It's built using React and Express, combining a slick UI with powerful backend logic.
        </p>

        <h4 className="mt-5">🎥 What You Can Do</h4>
        <ul>
          <li>✅ Add your favorite movies to the platform</li>
          <li>⭐ Rate films from 1 to 10</li>
          
          <li>📄 Read descriptions and contributor info</li>
        </ul>

        <div className="my-5 d-flex gap-3 flex-wrap justify-content-center">
          <img
            src="https://images.adsttc.com/media/images/58d5/3a58/e58e/ce48/a700/003f/large_jpg/002.jpg?1490369108"
            alt="cinema 1"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '300px' }}
          />
          <img
            src="https://styles.redditmedia.com/t5_2r4nf/styles/communityIcon_drds3216l7le1.png"
            alt="cinema 2"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '300px' }}
          />
        </div>

        <h5 className="mt-5">📊 Fun Movie Facts</h5>
        <ul>
          <li>The first movie ever made was in 1888 — "Roundhay Garden Scene".</li>
          <li>"The Godfather" is one of the most quoted movies of all time.</li>
          <li>In 2023, over 1,000 movies were released worldwide.</li>
        </ul>

        <footer className="mt-5 pt-4 border-top border-secondary">
          <p className="mb-1">📬 Contact us: support@movieapp.fake</p>
          <p className="mb-1">🏢 HQ: 123 Film Street, CineCity</p>
          <p>📞 Phone: +123 456 7890</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
