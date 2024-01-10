
import { MessageType } from '../types';

type MessageProps = {
  message: MessageType;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
