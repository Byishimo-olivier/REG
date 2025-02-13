import React from 'react';
import './Calendar.css';

const Calendar = () => {
  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const hour = i + 7;
    return `${hour} ${hour >= 12 ? 'PM' : 'AM'}`;
  });

  const events = [
    {
      day: 'MON',
      time: '8:00 AM',
      title: 'Kanombe Monitoring',
      type: 'complete'
    },
    {
      day: 'MON',
      time: '9:00 AM',
      title: 'All-Team Kickoff',
      type: 'missed'
    },
    {
      day: 'MON',
      time: '10:00 AM',
      title: 'Financial Update',
      type: 'complete'
    },
    {
      day: 'MON',
      time: '11:00 AM',
      title: 'Teams Scheduling Activity',
      type: 'complete'
    },
    {
      day: 'MON',
      time: '1:00 PM',
      title: 'Install Kabeza Transformers',
      type: 'complete'
    },
    {
      day: 'MON',
      time: '2:00 PM',
      title: 'All-Team Kickoff',
      type: 'complete'
    },
    {
      day: 'TUE',
      time: '8:00 AM',
      title: 'Kanombe Monitoring',
      type: 'complete'
    },
    {
      day: 'TUE',
      time: '12:00 PM',
      title: 'Teams Scheduling Activity',
      type: 'appending'
    },
    {
      day: 'TUE',
      time: '2:00 PM',
      title: 'All-Team Kickoff',
      type: 'appending'
    }
  ];

  return (
    <div className="calendar-container">
      <div className="task-references">
        <h4>About Tasks</h4>
        <div className="task-types">
          <div className="task-type">
            <div className="color-box complete"></div>
            <span>Complete</span>
          </div>
          <div className="task-type">
            <div className="color-box appending"></div>
            <span>Appending</span>
          </div>
          <div className="task-type">
            <div className="color-box missed"></div>
            <span>Missed</span>
          </div>
        </div>
      </div>

      <div className="calendar-header">
        <div className="header-left">
          <div className="nav-buttons">
            <button className="nav-button">&lt;</button>
            <button className="today-button">Today</button>
            <button className="nav-button">&gt;</button>
          </div>
        </div>
        <div className="view-options">
          <button>Day</button>
          <button className="active">Week</button>
          <button>Month</button>
          <button>Year</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="time-column">
          {timeSlots.map((time, index) => (
            <div key={index} className="time-slot">
              {time}
            </div>
          ))}
        </div>
        
        <div className="days-grid">
          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'].map((day, index) => (
            <div key={day} className="day-column">
              <div className="day-header">
                <div className="day-name">{day}</div>
                <div className="day-number">{21 + index}</div>
              </div>
              <div className="day-events">
                {events
                  .filter(event => event.day === day)
                  .map((event, idx) => (
                    <div 
                      key={idx} 
                      className={`event event-${event.type}`}
                      style={{
                        gridRow: `${getTimePosition(event.time)}`
                      }}
                    >
                      <div className="event-time">{event.time}</div>
                      <div className="event-title">{event.title}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function getTimePosition(time) {
  const hour = parseInt(time.split(':')[0]);
  const meridian = time.includes('PM') ? 'PM' : 'AM';
  const adjustedHour = meridian === 'PM' && hour !== 12 ? hour + 12 : hour;
  return adjustedHour - 6;
}

export default Calendar; 