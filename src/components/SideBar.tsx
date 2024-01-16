// src/components/Sidebar.tsx
import React, { useContext, useState } from "react";
import styles from "./Sidebar.module.css"; // Import the module here
import { useNavigate } from "react-router-dom";
import * as chatRoomService from "../service/chatRoomService";
import { AppContext } from "../context/AppContext";


const Sidebar = () => {
  const navigate = useNavigate();
  const [chatRoomName, setChatRoomName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const appContext = useContext(AppContext);
  const userId = localStorage.getItem("userId");
  const chatRooms = appContext?.state.chatRooms;
  

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleCreate = async () => {
    setErrorMessage('');

    if(chatRoomName == ''){
      setErrorMessage('Chat room must have a name. Please fill the form.');
      return;
    }
    
    if(typeof userId === "string"){

      try{
        const newChatRoom = await chatRoomService.createChatRoom(chatRoomName, userId);

        appContext?.setState(prevState => ({
          ...prevState,
          chatRooms: [...prevState.chatRooms, newChatRoom]
        }));
        setChatRoomName('');

      }catch(error: any){

        if (error.message) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('An unexpected error occurred');
        }
      }
    }
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.topSection}>
        Welcome, chatter!
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className={styles.topSection}>
        Create Chat Room
        <input type="text" value={chatRoomName}
            onChange={(e) => setChatRoomName(e.target.value)}
          />
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <button onClick={handleCreate}>Create</button>
      </div>
      <div className={styles.searchSection} style={{"overflowY":"scroll"}}>
        <input className={styles.searchInput} placeholder="Search chat rooms" />
        <button className={styles.searchButton}>Search</button>
        {chatRooms?.map(chatroom => <p key={chatroom.id}  style={{"borderBottom":"1px solid black"}}>{chatroom.name}</p>)}
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
