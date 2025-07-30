import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const Profile = () => {
  const [profile, setProfile] = useState<{ username: string; password: string } | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/profile');
        setProfile(res.data);
      } catch (err) {
        console.error('Failed to fetch profile:', err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      {profile ? (
        <>
          <p><strong>Username:</strong> {profile.username}</p>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
