import React, { useState } from 'react';

const RoomsForm = ({ onSubmit, onClose }) => {
  const [departmentName, setDepartmentName] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [rooms, setRooms] = useState([]);

  const handleDepartmentNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  const handleNumRoomsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumRooms(num);
    setRooms(Array.from({ length: num }, (_, index) => ({ roomNumber: '', roomType: 'Lab' })));
  };

  const handleRoomNumberChange = (e, index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].roomNumber = e.target.value;
    setRooms(updatedRooms);
  };

  const handleRoomTypeChange = (e, index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].roomType = e.target.value;
    setRooms(updatedRooms);
  };

  // Inside RoomsForm component
const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      departmentName,
      rooms: rooms.map((room) => ({
        roomNumber: room.roomNumber,
        roomType: room.roomType,
        departmentName: departmentName, // Include departmentName in each room object
      })),
    });
    onClose();
};


  return (
    <form onSubmit={handleSubmit} className='Rooms-Form'>
      <h3>Room Details</h3>
      <div>
        <label htmlFor="departmentName">Department Name:</label>
        <input
          className='input-field'
          type="text"
          id="departmentName"
          name="departmentName"
          value={departmentName}
          onChange={handleDepartmentNameChange}
          placeholder="Enter department name"
          required
        />
      </div>
      <div>
        <label htmlFor="numRooms">Total Number of Rooms:</label>
        <input
          className='input-field'
          type="number"
          id="numRooms"
          name="numRooms"
          value={numRooms}
          onChange={handleNumRoomsChange}
          placeholder="Enter total number of rooms"
          required
        />
      </div>
      {rooms.map((room, index) => (
        <div key={index}>
          <label htmlFor={`roomNumber${index}`}>{`Room ${index + 1} Number:`}</label>
          <input
            className='input-field'
            type="text"
            id={`roomNumber${index}`}
            name={`roomNumber${index}`}
            value={room.roomNumber}
            onChange={(e) => handleRoomNumberChange(e, index)}
            placeholder={`Enter room ${index + 1} number`}
            required
          />
          <label htmlFor={`roomType${index}`}>{`Room ${index + 1} Type:`}</label>
          <select
            className='input-field'
            id={`roomType${index}`}
            name={`roomType${index}`}
            value={room.roomType}
            onChange={(e) => handleRoomTypeChange(e, index)}
            required
          >
            <option value="Lab">Lab</option>
            <option value="Other">Other</option>
          </select>
        </div>
      ))}
      <button type="submit" className='submit-button'>
        Submit
      </button>
    </form>
  );
};

export default RoomsForm;
