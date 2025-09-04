import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/storeContext';
import './MyProfile.css';

const MyProfile = () => {
  const { token } = useContext(StoreContext);
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProfile(response.data);
    } catch (error) {
      console.error("Failed to fetch profile", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  if (!profile) return <div className="container mt-5">Loading profile...</div>;

  return (
    <section className="myprofile-section">
      <div className="container profile-container">
        <div className="profile-card profile-left">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" />
          <h5>{profile.name}</h5>
        </div>
        <div className="profile-card profile-right">
          <div className="profile-row">
            <div className="profile-label">Account Id</div>
            <div className="profile-value">{profile.id}</div>
          </div>
          <div className="profile-row">
            <div className="profile-label">Full Name</div>
            <div className="profile-value">{profile.name}</div>
          </div>
          <div className="profile-row">
            <div className="profile-label">Email</div>
            <div className="profile-value">{profile.email}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
