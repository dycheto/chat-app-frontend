import { useContext, useEffect } from "react";
import { ChatRoomType, MessageType, UserType } from "../types";
import ChatRoom from "./ChatRoom";
import ChatWindow from "./ChatWindow";
import Sidebar from "./SideBar";
import * as userServices from "../service/userService";
import { AppContext } from "../context/AppContext";

const HomePage: React.FC = () => {
  const appContext = useContext(AppContext);

  const chatrooms = appContext?.state.chatRooms;
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (typeof username == "string" &&  appContext) {
      const data = userServices.getUser(username);
     
      data.then((data) => {
        const sortedChatRooms = data.chatRooms.sort((a: any, b: any) => a.id - b.id);

        appContext.setState((prevState) => ({
          ...prevState,
          chatRooms: sortedChatRooms
        }));
      }).catch(error => {
        console.error("Error fetching chat rooms:", error);
      });
    }
  }, []);


  return (
    <div className="home-page" style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

export default HomePage;
