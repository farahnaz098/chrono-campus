import React, { useState } from 'react';
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
import addbutton from '../images/addbutton.png';
import deleteIcon from '../images/delete.png';
import addIcon from '../images/add.png';
import Modal from './Modal';
import CourseForm from './CourseForm';

const Header = () => {
  return (
    <header className="header">
      <div className='header-left'>
        <h1>Add Course</h1>
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

const Card = ({ courseData, setCourseData, openModal }) => {
  const handleDeleteCourse = (index) => {
    setCourseData(courseData.filter((_, i) => i !== index));
  };

  const handleAddCourse = () => {
    openModal();
  };

  return (
    <main className='main-container'>
      <div className="institute-button">
        <button className="add-institute-button" onClick={handleAddCourse}>
          <img src={addbutton} alt="Add" className="icon" /> Add Course Details
        </button>
      </div>
      <div className="institute-table">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Lectures Per Week</th>
              <th>Credit Hours</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index}>
                <td>{course.department}</td>
                <td>{course.courseName}</td>
                <td>{course.creditHours}</td>
                <td>{course.courseCode}</td>
                <td>{course.lecturesPerWeek}</td>
                <td>
                  <button onClick={handleAddCourse} className="icon-button">
                    <img src={addIcon} alt="Add" className="icon3" />
                  </button>
                  <button onClick={() => handleDeleteCourse(index)} className="icon-button">
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

const Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [department, setDepartment] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    if (Array.isArray(data)) {
      const newData = data.map(course => ({ ...course, department }));
      setCourseData([...courseData, ...newData]);
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
        <CourseForm onSubmit={handleFormSubmit} onCancel={handleCancel} department={department} setDepartment={setDepartment} />
      </Modal>
      <Card courseData={courseData} setCourseData={setCourseData} openModal={openModal} />
    </div>
  );
};

export default Course;