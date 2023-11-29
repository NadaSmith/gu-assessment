import React from 'react';

const AttendeeList = ({ attendees }) => {
  const maxDisplay = 3;

  return (
    <div className='attendee-list'>
      <div className='attendee-container'>
        {attendees.slice(0, maxDisplay).map((attendee, index) => (
          <div className='attendee-box' key={index}>
            <div className='school-year'>{attendee.school_year}</div>
            <div className='attendee-name'>{attendee.first_name} {attendee.last_name} </div>
            <div className='registered-status'>{attendee['registered-status']}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendeeList;
