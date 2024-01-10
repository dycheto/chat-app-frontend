// src/components/Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.css'; // Import the module here

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.topSection}>
        Welcome, chatter!
        <button>Logout</button>
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
