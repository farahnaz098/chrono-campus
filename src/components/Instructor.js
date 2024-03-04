import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../images/logo2.png';
import dashboard from '../images/dashboard.png';
import institute from '../images/institute.png';
import department from '../images/department.png';
import instructor from '../images/instructor.png';
import lecture from '../images/lecture.png';
import room from '../images/room.png';
import Class from '../images/Class.png';
import timeslots from '../images/timeslots.png';
import signout from '../images/signout.png';
import Notification from '../images/Notifications.png';
import deleteIcon from '../images/delete.png';
import addIcon from '../images/add.png';
import addbutton from '../images/addbutton.png';
import './dashboard.css';

import Modal from './Modal';
import InstructorForm from './InstructorForm';

const Header = () => {
  return (
    <header className="header">
      <div className='header-left'>
        <h1>Institute</h1>
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
        <li className='sidebar-list-item'><Link to="/instructor"><img src={instructor} alt="instructor" className="icon" /> Instructor</Link></li>
        <li className='sidebar-list-item'><Link to="/rooms"><img src={room} alt="classroom" className="icon" />  Rooms</Link></li>
        <li className='sidebar-list-item'><Link to="/course"><img src={lecture} alt="lecture" className="icon" />  Course</Link></li>
        <li className='sidebar-list-item'><Link to="/class"><img src={Class} alt="class" className="icon" /> Class</Link></li>
        <li className='sidebar-list-item'><Link to="/time-slots"><img src={timeslots} alt="timeslots" className="icon" /> Time Slots</Link></li>
        <li className='sidebar-list-item'><Link to="/signout"><img src={signout} alt="signout" className="icon" /> Sign Out </Link></li>
      </ul>
    </aside>
  );
};


const Card = ({ instructorData, setInstructorData, openModal }) => {
  const handleDeleteInstructor = (index) => {
    setInstructorData(instructorData.filter((_, i) => i !== index));
  };

  const handleAddInstructor = () => {
    openModal();
  };

  return (
    <main className='main-container'>
      <div className="institute-button">
        <button className="add-institute-button" onClick={handleAddInstructor}>
          <img src={addbutton} alt="Add" className="icon" /> Add Instructor Details
        </button>
      </div>
      <div className="institute-data">
        <h2>Instructor Details</h2>
        <table className="institute-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Courses Taught</th>
              <th>Lectures Per Week</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructorData.map((instructor, index) => (
              <tr key={index}>
                <td>{instructor.department}</td>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
                <td>{instructor.id}</td>
                <td>{instructor.courses}</td>
                <td>{instructor.lecturesPerWeek}</td>
                <td>
                  <button onClick={() => handleDeleteInstructor(index)} className="icon-button">
                    <img src={deleteIcon} alt="Delete" className="icon3" />
                  </button>
                  <button onClick={handleAddInstructor} className="icon-button">
                    <img src={addIcon} alt="Add" className="icon3" />
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


const Instructor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [instructorData, setInstructorData] = useState([]);
  const [department, setDepartment] = useState('');
  const [departmentNames, setDepartmentNames] = useState([]);
  useEffect(() => {
    fetch('YOUR_API_ENDPOINT_FOR_DEPARTMENTS')
      .then(response => response.json())
      .then(data => setDepartmentNames(data))
      .catch(error => console.error('Error fetching department names:', error));
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    if (Array.isArray(data)) {
      const newData = data.map(instructor => ({ ...instructor, department }));
      setInstructorData([...instructorData, ...newData]);
      closeModal();
    } else {
      console.error('Data is not an array');
    }
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <InstructorForm onSubmit={handleFormSubmit} onCancel={handleCancel} department={department} setDepartment={setDepartment} />
      </Modal>
     
      <Card instructorData={instructorData} setInstructorData={setInstructorData} openModal={openModal} />
    </div>
  );
};


export default Instructor;