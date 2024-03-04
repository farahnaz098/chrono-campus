import React from 'react';
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
        <li className='sidebar-list-item'>
          <Link to="/dashboard"><img src={dashboard} alt="dashboard" className="icon" /> 
          Dashboard</Link></li>
        <li className='sidebar-list-item'>
  <Link to="/institute">
    <img src={institute} alt="institute" className="icon" />
    Institute
  </Link>
</li>
<li className='sidebar-list-item'><Link to='/instructor'>
          <img src={instructor} alt="institute" className="icon" /> 
          Instructor</Link></li>
        <li className='sidebar-list-item'><Link to="/department">
          <img src={department} alt="department" className="icon" />
           Department</Link></li>
        
       <li className='sidebar-list-item'><Link to="/rooms">
        <img src={room} alt="classroom" className="icon" /> 
         Rooms</Link></li>
   
        <li className='sidebar-list-item'><Link to="/course">
          <img src={lecture} alt="lecture" className="icon" />
            Course</Link></li>
        <li className='sidebar-list-item'><Link to="/class">
          <img src={Class} alt="class" className="icon" />
           Class</Link></li>
        <li className='sidebar-list-item'><Link to="/time-slots">
          <img src={timeslots} alt="timeslots" className="icon" /> 
          Time Slots</Link></li>
        <li className='sidebar-list-item'><Link to="/signout">
          <img src={signout} alt="signout" className="icon" />
           Sign Out </Link></li>
      </ul>
    </aside>
  );
};

const Cards = ({ onShowTimetablePopup }) => {
  return (
    <main className='main-container'>
      <div className="main-cards">
        <div className='card1'>
          <div className="card-inner">
            <img src={room} alt="classroom" className="card_icon" />
            <h3>Room Activities</h3>
          </div>
        </div>
        <div className='card1'>
          <div className="card-inner">
            <img src={labs} alt="labs" className="card_icon" />
            <h3>Labs Available</h3>
          </div>
        </div>
        <div className='card1'>
          <div className="card-inner">
            <img src={lecture} alt="lecture" className="card_icon" />
            <h3>Total Courses</h3>
          </div>
        </div>
        <div className='card1'>
          <div className="card-inner">
            <img src={Class} alt="class" className="card_icon" />
            <h3>Classes</h3>
          </div>
        </div>
        <div className='card1'>
          <div className="card-inner">
            <img src={instructor} alt="instructor" className="card_icon" />
            <h3>Instructors</h3>
          </div>
        </div>
      </div>
      <button className='generate-timetable-btn' onClick={onShowTimetablePopup}>Generate New Timetable</button>
    </main>
  );
};

const Dashboard = () => {


  return (
    <div className="grid-container">
      <Header />
      <Sidebar   />
       
  
      <Cards />
     


    </div>
  );
};

export default Dashboard;