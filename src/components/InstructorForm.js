import React, { useState  } from 'react';

const InstructorForm = ({ onSubmit, onCancel  }) => {
  const [numInstructors, setNumInstructors] = useState(1);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  
  
  const [instructors, setInstructors] = useState(Array.from({ length: numInstructors }, (_, index) => ({
    number: index + 1,
    name: '',
    email: '',
    id: '',
    courses: [],
    lecturesPerWeek: '',
    numCourses: 0
  })));

  const handleNumInstructorsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumInstructors(value);
    setInstructors(Array.from({ length: value }, (_, index) => ({
      number: index + 1,
      name: '',
      email: '',
      id: '',
      courses: [],
      lecturesPerWeek: '',
      numCourses: 0
    })));
  };
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedInstructors = [...instructors];
    updatedInstructors[index][name] = value;
    setInstructors(updatedInstructors);
  };

  const handleCourseNameChange = (e, instructorIndex, courseIndex) => {
    const { value } = e.target;
    const updatedInstructors = [...instructors];
    updatedInstructors[instructorIndex].courses[courseIndex] = value;
    setInstructors(updatedInstructors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ instructors, selectedDepartment });
    onCancel();
  };
  
  const handleLecturesPerWeekChange = (e, index) => {
    const { value } = e.target;
    const updatedInstructors = [...instructors];
    updatedInstructors[index].lecturesPerWeek = value;
    setInstructors(updatedInstructors);
  };
  const handleEmailChange = (e, instructorIndex) => {
    const { value } = e.target;
    const updatedInstructors = [...instructors];
    updatedInstructors[instructorIndex].email = value;
    setInstructors(updatedInstructors);
  };
  
  const handleIdChange = (e, instructorIndex) => {
    const { value } = e.target;
    const updatedInstructors = [...instructors];
    updatedInstructors[instructorIndex].id = value;
    setInstructors(updatedInstructors);
  };
 

  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className='Institute-Form'>
        <h3>Instructor Details</h3>
        <div>
        <label htmlFor="department">Department Name:</label>
      <select name="" id="">
        <option value="">Department 1</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
        </div>
        <label  htmlFor="numInstructors">Number of Instructors:</label>
        <input className='input-field'
          type="number"
          id="numInstructors"
          name="numInstructors"
          value={numInstructors}
          onChange={handleNumInstructorsChange}
          min="1"
          required
        />
        {instructors.map((instructor, instructorIndex) => (
          <div key={instructorIndex}>
            <h4>Instructor {instructor.number}</h4>
            <div className='instructor'>
              <label  htmlFor={`name${instructorIndex}`}>Name:</label>
              <input className='input-field'
                type="text"
                id={`name${instructorIndex}`}
                name="name"
                value={instructor.name}
                onChange={(e) => handleInputChange(e, instructorIndex)}
                placeholder="Enter name"
                required
              />
            </div>
            {/* Other instructor details input fields */}
            <div >
  <label className='label lectures-per-week' >Lectures Per Week:</label>
  <input className='input-field'
 
  type="text"
  name="lecturesPerWeek"
  value={instructor.lecturesPerWeek}
  onChange={(e) => handleLecturesPerWeekChange(e, instructorIndex)}
  placeholder="Enter lectures per week"
  required
  />
</div>
<div className='instructor'>
  <label className='label' htmlFor={`email${instructorIndex}`}>Email:</label>
  <input className='input-field'
    type="email"
    id={`email${instructorIndex}`}
    name="email"
    value={instructor.email}
    onChange={(e) => handleEmailChange(e, instructorIndex)}
    placeholder="Enter email"
    required
  />
</div>
<div className='instructor'>
  <label className='label' htmlFor={`id${instructorIndex}`}>ID:</label>
  <input className='input-field'
    type="text"
    id={`id${instructorIndex}`}
    name="id"
    value={instructor.id}
    onChange={(e) => handleIdChange(e, instructorIndex)}
    placeholder="Enter ID"
    required
  />
</div>
            <div className='instructor'>
              <label className='label' htmlFor={`numCourses${instructorIndex}`}>Number of Courses Taught:</label>
              <input className='input-field'
                type="number"
                id={`numCourses${instructorIndex}`}
                name="numCourses"
                value={instructor.numCourses}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  const updatedInstructors = [...instructors];
                  updatedInstructors[instructorIndex].numCourses = value;
                  updatedInstructors[instructorIndex].courses = Array.from({ length: value }, () => '');
                  setInstructors(updatedInstructors);
                }}
                placeholder="Enter number of courses"
                required
              />
            </div>
            {/* Input fields for course names */}
            {[...Array(instructor.numCourses)].map((_, courseIndex) => (
              <div className='instructor' key={courseIndex}>
                <label className='label' htmlFor={`course${instructorIndex}${courseIndex}`}>Course {courseIndex + 1} Name:</label>
                <input className='input-field'
                  type="text"
                  id={`course${instructorIndex}${courseIndex}`}
                  name={`course${courseIndex}`}
                  value={instructor.courses[courseIndex]}
                  onChange={(e) => handleCourseNameChange(e, instructorIndex, courseIndex)}
                  placeholder="Enter course name"
                  required
                />
              </div>
            ))}
          </div>
        ))}
        <div>
          <button className='submit-button' type="submit">Submit</button>
          <button className='submit-button' type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default InstructorForm;
