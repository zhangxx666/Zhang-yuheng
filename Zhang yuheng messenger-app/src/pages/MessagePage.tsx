import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';

const MessagePage: React.FC = () => {
  const { channelId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: 'Marie', content: 'Long time not seen.', time: '18:30' },
    { sender: 'You', content: 'Hi Marie, I’m fine thanks.', time: '18:31' },
    { sender: 'You', content: 'You are right. We should meet again and have a coffee together.', time: '18:32' },
    { sender: 'Marie', content: 'I would love to!', time: '18:40' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        sender: 'You',
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="message-container">
      <div className="channel-header">
        <button onClick={() => navigate('/channels')} className="back-btn">←</button>
        <h2>Channel: {channelId}</h2>
      </div>
      <div className="messages-list">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message-bubble ${msg.sender === 'You' ? 'self-message' : 'other-message'}`}
          >
            <span className="message-sender">{msg.sender}</span>
            <div className="message-content">{msg.content}</div>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="message-input-area">
        <input
          type="text"
          placeholder="Type new message here....."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="message-input"
        />
        <button onClick={sendMessage} className="send-btn">
          ▶
        </button>
      </div>
    </div>
  );
};

export default MessagePage;