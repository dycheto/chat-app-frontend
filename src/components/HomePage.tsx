import { ChatRoomType, MessageType, UserType } from "../types";
import ChatRoom from "./ChatRoom";
import ChatWindow from "./ChatWindow";
import Sidebar from "./SideBar";

const users: UserType[] = [
    { id: '1', username: 'Alice' },
    { id: '2', username: 'Bob' }
  ];
  
  const messages: MessageType[] = [
    { id: '1', senderId: '1', receiverId: '2', content: 'Hello Bob!' },
    { id: '2', senderId: '2', receiverId: '1', content: 'Hey Alice!' }
  ];
  
  const chatRooms: ChatRoomType[] = [
    { id: '1', name: 'General Chat', users, messages }
  ];

  const HomePage: React.FC = () => {
    return (
      <div className="home-page" style={{ display: 'flex', height: '100vh' }}>
       <Sidebar/>
       <ChatWindow/> 
      </div>
    );
  };
  

  export default HomePage;