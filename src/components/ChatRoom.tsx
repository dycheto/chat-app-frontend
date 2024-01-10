
import { ChatRoomType } from '../types';
import User from './User';
import Message from './Message';

type ChatRoomProps = {
  chatRoom: ChatRoomType;
};

const ChatRoom: React.FC<ChatRoomProps> = ({ chatRoom }) => {
  return (
    <div>
      <h2>{chatRoom.name}</h2>
      {chatRoom.users.map(user => (
        <User key={user.id} user={user} />
      ))}
      {chatRoom.messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatRoom;
