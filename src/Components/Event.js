import React from 'react';

const Event = ({ title, time, type }) => {
  const getEventClass = () => {
    switch(type) {
      case 'complete':
        return 'event-complete';
      case 'appending':
        return 'event-appending';
      case 'missed':
        return 'event-missed';
      default:
        return '';
    }
  };

  return (
    <div className={`event ${getEventClass()}`}>
      <div className="event-time">{time}</div>
      <div className="event-title">{title}</div>
    </div>
  );
};

export default Event; 