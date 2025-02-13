import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import './TaskScheduler.css';

const TaskScheduler = () => {
  const [selectedCategory, setSelectedCategory] = useState('Meetings');
  const [title, setTitle] = useState('Meeting with Maintenance teames');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState('14:30');
  const [endTime, setEndTime] = useState('16:50');

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      title,
      date: selectedDate,
      startTime,
      endTime,
      category: selectedCategory
    };
    console.log('Task Created:', taskData);
    // Here you can add your API call or state management logic
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="scheduler-container">
      <form className="scheduler-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <div className="date-picker-wrapper">
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="EEEE, dd yyyy"
              className="date-input"
              required
              customInput={
                <input 
                  value={formatDate(selectedDate)}
                  readOnly
                />
              }
            />
            <span className="calendar-icon">📅</span>
          </div>
        </div>

        <div className="time-section">
          <div className="time-picker-wrapper">
            <TimePicker
              value={startTime}
              onChange={setStartTime}
              disableClock={true}
              clearIcon={null}
              format="h:mm a"
              required
            />
          </div>
          <span className="time-separator">-</span>
          <div className="time-picker-wrapper">
            <TimePicker
              value={endTime}
              onChange={setEndTime}
              disableClock={true}
              clearIcon={null}
              format="h:mm a"
              required
              minTime={startTime}
            />
          </div>
        </div>

        <div className="category-section">
          <label>Category</label>
          <div className="category-buttons">
            <button 
              type="button"
              className={`category-btn ${selectedCategory === 'Meetings' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Meetings')}
            >
              Meetings
            </button>
            <button 
              type="button"
              className={`category-btn ${selectedCategory === 'Calls' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Calls')}
            >
              Calls
            </button>
          </div>
        </div>

        <button type="submit" className="add-task-btn">Add Task</button>
      </form>
    </div>
  );
};

export default TaskScheduler; 