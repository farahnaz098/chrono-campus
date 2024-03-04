import React, { useState } from 'react';

const CourseForm = ({ onSubmit, onCancel, department, setDepartment }) => {
  const [numCourses, setNumCourses] = useState(1);
  const [courses, setCourses] = useState(Array.from({ length: numCourses }, (_, index) => ({
    courseName: '',
    courseCode: '',
    lecturesPerWeek: '',
    courseType: ''
  })));

  const handleNumCoursesChange = (e) => {
    const value = parseInt(e.target.value);
    setNumCourses(value);
    setCourses(Array.from({ length: value }, () => ({
      courseName: '',
      courseCode: '',
      lecturesPerWeek: '',
      courseType: ''
    })));
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCourses = [...courses];
    updatedCourses[index][name] = value;
    setCourses(updatedCourses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(courses);
    onCancel(); // Call onCancel function
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className='Institute-Form'>
      <h3>Course Details</h3>
      <div>
        <label className='instituteName' htmlFor="department">Department Name:</label>
        <input className='input-field'
          type="text"
          id="department"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Enter department name"
          required
        />
      </div>
      <label className='instituteName' htmlFor="numCourses">Number of Courses:</label>
      <input
      className='input-field'
        type="number"
        id="numCourses"
        name="numCourses"
        value={numCourses}
        onChange={handleNumCoursesChange}
        min="1"
        required
      />
      {courses.map((course, index) => (
        <div className='course' key={index}>
          <h4>Course {index + 1}</h4>
          <div className='input-group'>
            <label className='instituteName' htmlFor={`courseName${index}`}>Course Name:</label>
            <input
            className='input-field'
              type="text"
              id={`courseName${index}`}
              name="courseName"
              value={course.courseName}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Enter course name"
              required
            />
          </div>
          <div className='input-group'>
            <label className='instituteName' htmlFor={`courseCode${index}`}>Course Code:</label>
            <input
            className='input-field'
              type="text"
              id={`courseCode${index}`}
              name="courseCode"
              value={course.courseCode}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Enter course code"
              required
            />
          </div>
          <div className='input-group'>
            <label className='instituteName'htmlFor={`lecturesPerWeek${index}`}>Lectures Per Week:</label>
            <input
            className='input-field'
              type="text"
              id={`lecturesPerWeek${index}`}
              name="lecturesPerWeek"
              value={course.lecturesPerWeek}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Enter lectures per week"
              required
            />
          </div>
          <div className='input-group'>
            <label className='instituteName' htmlFor={`creditHours${index}`}>Credit Hours:</label>
            <input
            className='input-field'
              type="text"
              id={`creditHours${index}`}
              name="creditHours"
              value={course.creditHours} // Assuming creditHours is a new field
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Enter credit hours"
              required
            />
          </div>
        </div>
      ))}
      <div>
        <button type="submit">Add</button>
        <button type="submit" onClick={onCancel}>Cancel</button>
      </div>
    </form>
    </div>
  );
};

export default CourseForm;