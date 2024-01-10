// src/components/ChatWindow.tsx
import React from 'react';

const ChatWindow = () => {

    

  return (
    <div style={{ flex: 1, padding: '10px' }}>
      <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        Chat room name / User chatting with
        <button>Exit Chat</button>
      </div>
      <div style={{ height: 'calc(100% - 120px)', overflowY: 'auto' }}>
        {/* Messages will be rendered here */}
      </div>
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        <input style={{ width: 'calc(100% - 100px)' }} placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
