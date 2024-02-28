
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
import './dashboard.css';
import InstituteForm from './InstituteForm';
import DepartmentForm from './DepartmentForm';
import Modal from './Modal';

const Header = () => {
  return (
    <header className="header">
      <div className='header-left'>
        <h1> Dashboard</h1>
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

const Sidebar = ({ openInstituteModal, openDepartmentModal  }) => {
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
        <li className='sidebar-list-item'><a  href="#" onClick={openInstituteModal}><img src={institute} alt="institute" className="icon" /> Institute</a></li>
        <li className='sidebar-list-item'><a  href='#'  onClick={openDepartmentModal}><img src={department} alt="department" className="icon" /> Department</a></li>
        <li className='sidebar-list-item' ><Link to="/add-instructor" ><img src={instructor} alt="instructor" className="icon" /> Add Instructor</Link></li>
        <li className='sidebar-list-item'><Link to="/add-rooms"><img src={room} alt="classroom" className="icon" /> Add Rooms</Link></li>
        <li className='sidebar-list-item'><Link to="/add-labs"><img src={labs} alt="labs" className="icon" /> Add Labs</Link></li>
        <li className='sidebar-list-item'><Link to="/add-course"><img src={lecture} alt="lecture" className="icon" /> Add Course</Link></li>
        <li className='sidebar-list-item'><Link to="/add-class"><img src={Class} alt="class" className="icon" /> Add Class</Link></li>
        <li className='sidebar-list-item'><Link to="/time-slots"><img src={timeslots} alt="timeslots" className="icon" /> Time Slots</Link></li>
        <li className='sidebar-list-item'><Link to="/signout"><img src={signout} alt="signout" className="icon" /> Sign Out </Link></li>
      </ul>
    </aside>
  );
};

const Dashboard = () => {
  const [isInstituteOpen, setIsInstituteOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [numSemesters, setNumSemesters] = useState(0);
  const [firstDepartmentName, setFirstDepartmentName] = useState('');
  const handleInstituteFormSubmit = (instituteName, departmentNames) => {
    // Open department form modal and pass necessary data
    setIsDepartmentOpen(true);
    setFirstDepartmentName(departmentNames[0]); // Set first department name

  };
  

  const openInstituteModal = () => {
    setIsInstituteOpen(true);
  };

  const closeInstituteModal = () => {
    setIsInstituteOpen(false);
  };

  const openDepartmentModal = () => {
    setIsDepartmentOpen(true);
  };

  const closeDepartmentModal = () => {

    setIsDepartmentOpen(false);
  };

  return (
    <div className="grid-container">
      <Header />
      <Sidebar openInstituteModal={openInstituteModal}   openDepartmentModal={openDepartmentModal}  />
      
  
      <Cards />
      <Modal isOpen={isInstituteOpen} onClose={closeInstituteModal}>
  <InstituteForm onSubmit={handleInstituteFormSubmit} onClose={closeInstituteModal} />
</Modal>

<Modal isOpen={isDepartmentOpen} onClose={closeDepartmentModal}>
  <DepartmentForm firstDepartmentName={firstDepartmentName} numSemesters={numSemesters} />
</Modal>

    </div>
  );
};

export default Dashboard;



 


