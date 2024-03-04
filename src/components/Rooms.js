import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../images/logo2.png';
import dashboard from '../images/dashboard.png';
import institute from '../images/institute.png';
import department from '../images/department.png';
import instructor from '../images/instructor.png';
import labs from '../images/labs.png';
import lecture from '../images/lecture.png';
import room from '../images/room.png';
import Class from '../images/Class.png';
import timeslots from '../images/timeslots.png';
import signout from '../images/signout.png';
import Notification from '../images/Notifications.png';
import RoomsForm from './RoomsForm';
import deleteIcon from '../images/delete.png';
import addIcon from '../images/add.png';
import addbutton from '../images/addbutton.png';
import './dashboard.css';


import Modal from './Modal';

const Header = () => {
  return (
    <header className="header">
      <div className='header-left'>
        <h1>Rooms</h1>
      </div>
      <ul>
        <div className='header-right'>
          <li className='header-list-item'><Link to="/notification"><img src={Notification} alt="Notification" className="icon2" /></Link></li>
          <li className='header-list-item'><Link to="/admin" className='admin'> All Admin</Link></li>
        </div>
      </ul>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo2} alt="icon_header" className="icon_header" />
          <span>CHRONOCAMPUS</span>
        </div>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'><Link to="/dashboard"><img src={dashboard} alt="dashboard" className="icon" /> Dashboard</Link></li>
        <li className='sidebar-list-item'><Link to='/institute'><img src={institute} alt="institute" className="icon" /> Institute</Link></li>
        <li className='sidebar-list-item'><a href='/department'><img src={department} alt="department" className="icon" /> Department</a></li>
        <li className='sidebar-list-item'><Link to="/instructor"><img src={instructor} alt="instructor" className="icon" />  Instructor</Link></li>
        <li className='sidebar-list-item'><Link to="/rooms"><img src={room} alt="classroom" className="icon" /> Rooms</Link></li>
        <li className='sidebar-list-item'><Link to="/labs"><img src={labs} alt="labs" className="icon" /> Labs</Link></li>
        <li className='sidebar-list-item'><Link to="/course"><img src={lecture} alt="lecture" className="icon" /> Course</Link></li>
        <li className='sidebar-list-item'><Link to="/class"><img src={Class} alt="class" className="icon" />  Class</Link></li>
        <li className='sidebar-list-item'><Link to="/time-slots"><img src={timeslots} alt="timeslots" className="icon" /> Time Slots</Link></li>
        <li className='sidebar-list-item'><Link to="/signout"><img src={signout} alt="signout" className="icon" /> Sign Out </Link></li>
      </ul>
    </aside>
  );
};

// Inside Card component
// Inside Card component
const Card = ({ roomsData, openModal, setRoomsData }) => {
  const handleAddRooms = () => {
    setRoomsData((prevState) => ({
      ...prevState,
      rooms: [...prevState.rooms, { roomNumber: '', departmentName: '', roomType: 'Lab' }],
    }));
  };

  const handleDeleteRooms = (index) => {
    setRoomsData((prevState) => ({
      ...prevState,
      rooms: prevState.rooms.filter((_, i) => i !== index),
    }));
  };



  return (
      <main className='main-container'>
          <div className="institute-button">
              <button className="add-institute-button" onClick={openModal}>
                  <img src={addbutton} alt="Add" className="icon" /> Add Room
              </button>
          </div>
          <div className="institute-data">
              <h2>Rooms Data</h2>
              <table className="institute-table">
                  <thead>
                      <tr>
                          <th>Room Number</th>
                          <th>Department</th>
                          <th>Type</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
        {roomsData.rooms.map((room, index) => (
          <tr key={index}>
            <td>{room.roomNumber}</td>
            <td>{room.departmentName}</td>
            <td>{room.roomType}</td>
            <td>
              <button className='icon-button' onClick={() => handleAddRooms()}>
                <img src={addIcon} alt='Add' className='icon3' />
              </button>
              <button className='icon-button' onClick={() => handleDeleteRooms(index)}>
                <img src={deleteIcon} alt='Delete' className='icon3' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
              </table>
          </div>
      </main>
  );
};


  
 // Inside Cards component
const Cards = ({ openModal, roomsData, setRoomsData }) => {
  return <Card roomsData={roomsData} openModal={openModal} setRoomsData={setRoomsData} />;
};

  




const Rooms = () => {
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  
  let [roomsData, _setRoomsData] = useState({ rooms: [], roomsNumber: [] });

  const setRoomsData = (data) => {
    _setRoomsData(data);
  };

  const openRoomsModal = () => {
    setIsRoomsOpen(true);
  };

  const closeRoomsModal = () => {
    setIsRoomsOpen(false);
  };

  // Inside Rooms component
  const handleFormSubmit = (data) => {
    setRoomsData((prevData) => ({
      ...prevData,
      departmentName: data.departmentName,
      rooms: [...prevData.rooms, ...data.rooms],
    }));
    closeRoomsModal(); // Close modal after submitting
  };

  const handleAddRooms = () => {
    setRoomsData((prevState) => ({
      ...prevState,
      roomsNumber: [...prevState.roomsNumber, `Room ${prevState.roomsNumber.length + 1}`],
    }));
  };

  const handleDeleteRooms = (index) => {
    setRoomsData((prevState) => ({
      ...prevState,
      roomsNumber: prevState.roomsNumber.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Modal isOpen={isRoomsOpen} onClose={closeRoomsModal}>
        <RoomsForm onSubmit={handleFormSubmit} onClose={closeRoomsModal} />
      </Modal>
      <Cards roomsData={roomsData} openModal={openRoomsModal} setRoomsData={setRoomsData} />
    </div>
  );
};
export default Rooms;