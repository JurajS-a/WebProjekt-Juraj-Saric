import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  username: string;
  role: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { username, role });
      setUsername('');
      setRole('user');
      fetchUsers();
    } catch (err) {
      alert('Failed to add user');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this user?')) {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
    }
  };

  return (
    <div className="container-fluid bg-dark text-white min-vh-100 py-5 px-4">
      <div className="mx-auto" style={{ maxWidth: '700px' }}>
        <h2 className="text-danger mb-4">👥 Manage Users</h2>

        <form onSubmit={handleAddUser} className="mb-4 d-flex flex-column gap-3">
          <input
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <select
            className="form-select"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button className="btn btn-danger w-100">Add User</button>
        </form>

        <h5>Existing Users:</h5>
        <ul className="list-group">
          {users.map(user => (
            <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center bg-secondary text-white">
              <span>
                <strong>{user.username}</strong> ({user.role})
              </span>
              <button className="btn btn-sm btn-outline-light" onClick={() => handleDelete(user._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
