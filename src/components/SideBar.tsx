// src/components/Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.css'; // Import the module here
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.clear();
    navigate("/login")
  }


  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.topSection}>
        Welcome, chatter!
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className={styles.searchSection}>
        <input className={styles.searchInput} placeholder="Search chat rooms" />
        <button className={styles.searchButton}>Search</button>
        {/* List chat rooms here */}
      </div>
      <div className={styles.searchSection}>
        <input className={styles.searchInput} placeholder="Search users" />
        <button className={styles.searchButton}>Search</button>
        {/* List users here */}
      </div>
    </div>
  );
};

export default Sidebar;
