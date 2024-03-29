import React, { useState , useEffect} from 'react';
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
        <li className='sidebar-list-item'><Link to='/instructor'>
          <img src={instructor} alt="institute" className="icon" /> 
          Instructor</Link></li>
        <li className='sidebar-list-item'><a href='/department'><img src={department} alt="department" className="icon" /> Department</a></li>
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


const Card = ({ onClick, instituteData, setInstituteData }) => {
  const handleAddDepartment = () => {
    setInstituteData(prevState => ({
      ...prevState,
      departmentNames: [...prevState.departmentNames, `Department ${prevState.departmentNames.length + 1}`]
    }));
  };

  const handleDeleteDepartment = (index) => {
    setInstituteData(prevState => ({
      ...prevState,
      departmentNames: prevState.departmentNames.filter((_, i) => i !== index)
    }));
  };

  return (
    <main className='main-container'>
      <div className="institute-button">
        <button className="add-institute-button" onClick={onClick}>
          <img src={addbutton} alt="Add" className="icon" /> Add Institute
        
         
        </button>
      </div>
      <div className="institute-data">
        <h2>Institute Data</h2>
        <table className="institute-table">
          <thead>
            <tr>
              <th>Institute Name</th>
              <th>Departments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instituteData.instituteName && (
              <tr>
                <td rowSpan={instituteData.departmentNames.length + 1}>{instituteData.instituteName}</td>
              </tr>
            )}
            {instituteData.departmentNames.map((department, index) => (
              <tr key={index}>
                <td>{department}</td>
                <td>
                  <button onClick={() => handleDeleteDepartment(index)}><img src={ deleteIcon} alt="Delete" className="icon" /></button>
                  <button onClick={handleAddDepartment}><img src={ addIcon} alt="Add" className="icon" /></button>
                </td>
              </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </main>
  );
};

const Cards = ({ openModal, instituteData, setInstituteData }) => {
  return <Card onClick={openModal} instituteData={instituteData} setInstituteData={setInstituteData} />;
};



const Institute = () => {
  const [isInstituteOpen, setIsInstituteOpen] = useState(false);
  const [instituteData, setInstituteData] = useState({ instituteName: '', departmentNames: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false); // Close the modal
    // Additional logic if needed
  };
    
 
 

  const openInstituteModal = () => {
    setIsInstituteOpen(true);
  };

  const closeInstituteModal = () => {
    setIsInstituteOpen(false);
  };

  const handleFormSubmit = (data) => {
    setInstituteData(data);
  };

  return (
    <div className="grid-container">
      <Header/>
      <Sidebar />
      <Modal isOpen={isInstituteOpen} onClose={closeInstituteModal}>
        <InstituteForm onSubmit={handleFormSubmit} onClose={closeInstituteModal} />
      </Modal>
     <Cards openModal={openInstituteModal} instituteData={instituteData} />


    </div>
  );
};

export default Institute;