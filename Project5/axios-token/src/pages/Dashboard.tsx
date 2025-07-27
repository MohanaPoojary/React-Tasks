import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Dashboard = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/users'); // token is auto-attached
        setUsers(res.data.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.first_name} {user.last_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
