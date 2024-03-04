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
import InstituteForm from './InstituteForm';
import deleteIcon from '../images/delete.png';
import addIcon from '../images/add.png';
import addbutton from '../images/addbutton.png';
import './dashboard.css';

import Modal from './Modal';
import DepartmentForm from './DepartmentForm';

const Header = () => {
  return (
    <header className="header">
      <div className='header-left'>
        <h1>Department</h1>
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



const Card = ({ onClick, departmentData, setDepartmentData }) => {
  const handleAddSemester = () => {
    setDepartmentData(prevState => ({
      ...prevState,
      semesterNames: [...prevState.semesterNames, `Department ${prevState.semesterNames.length + 1}`]
    }));
  };

  const handleDeleteSemester = (index) => {
    setDepartmentData(prevState => ({
      ...prevState,
      departmentNames: prevState.departmentNames.filter((_, i) => i !== index)
    }));
  };

  return (
    <main className='main-container'>
      <div className="institute-button">
        <button className="add-institute-button" onClick={onClick}>
          <img src={addbutton} alt="Add" className="icon" /> Add Department Details
       </button>
      </div>
      <div className="institute-data">
        <h2>Institute Data</h2>
        <table className="institute-table">
          <thead>
            <tr>
              <th>Department Name</th>
              <th>Semesters</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departmentData.departmentName && (
              <tr>
                <td rowSpan={departmentData.semesterNames.length + 1}>{departmentData.departmentName}</td>
              </tr>
            )}
            {departmentData.semesterNames.map((semester, index) => (
              <tr key={index}>
                <td>{semester}</td>
                <td>
                <button onClick={handleAddSemester} className="icon-button">
                   <img src={addIcon} alt="Add" className="icon3" />
                   </button>
                   <button onClick={() => handleDeleteSemester(index)} className="icon-button">
                  <img src={deleteIcon} alt="Delete" className="icon3" />
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

const Cards = ({ openModal, departmentData, setDepartmentData }) => {
  return <Card onClick={openModal} departmentData={departmentData} setDepartmentData={setDepartmentData} />;
};




const Department = () => {
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [departmentData, setDepartmentData] = useState({ departmentName: '', semesterNames: [] });


  const openDepartmentModal = () => {
    setIsDepartmentOpen(true);
  };

  const closeDepartmentModal = () => {
    setIsDepartmentOpen(false);
  };

  const handleFormSubmit = (data) => {
    setDepartmentData(data);
  };

  return (
    <div className="grid-container">
      <Header/>
      <Sidebar />
      <Modal isOpen={isDepartmentOpen} onClose={closeDepartmentModal}>
        <DepartmentForm onSubmit={handleFormSubmit} onClose={closeDepartmentModal} />
      </Modal>
      <Cards openModal={openDepartmentModal} departmentData={departmentData} setDepartmentData={setDepartmentData} />

    </div>
  );
};

export default Department;