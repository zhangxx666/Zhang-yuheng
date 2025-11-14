import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const ChannelList: React.FC = () => {
  const navigate = useNavigate();
  const channels = [
    { id: '1', name: 'Marie', tag: 'MA' },
    { id: '2', name: 'Peter', tag: 'PE' },
    { id: '3', name: 'Paul', tag: 'PA' },
  ];

  return (
    <div className="channel-list-container">
      <div className="channel-header">
        <h2>Channels</h2>
        <button className="check-btn">✔</button>
      </div>
      <div className="channel-list">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="channel-item"
            onClick={() => navigate(`/channels/${channel.id}`)}
          >
            <div className="channel-tag">{channel.tag}</div>
            <span className="channel-name">{channel.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;