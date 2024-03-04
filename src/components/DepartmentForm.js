import React, { useState } from 'react';

const DepartmentForm = ({ onSubmit, onClose } ) => {
  const [departmentName, setDepartmentName] = useState('');
  const [numSemesters, setNumSemesters] = useState(0);
  const [semesterNames, setSemesterNames] = useState([]);

  const handleDepartmentNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  const handleNumSemestersChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumSemesters(num);
    // Generate semester names based on the entered number of semesters
    const names = Array.from({ length: num }, (_, index) => `Semester ${index + 1}`);
    setSemesterNames(names);
  };

  const handleSemesterNameChange = (e, index) => {
    const updatedSemesterNames = [...semesterNames];
    updatedSemesterNames[index] = e.target.value;
    setSemesterNames(updatedSemesterNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function with the necessary data
    onSubmit({ departmentName, semesterNames });

    // Close the modal
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className='Department-Form'>
      <h3>Department Details</h3>
      <div>
        <label htmlFor="departmentName" className='departmentName'>Department Name:</label>
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
        <label htmlFor="numSemesters">Number of Semesters:</label>
        <input
          className='input-field'
          type="number"
          id="numSemesters"
          name="numSemesters"
          value={numSemesters}
          onChange={handleNumSemestersChange}
          placeholder="Enter number of semesters"
          required
        />
      </div>
      {semesterNames.map((semester, index) => (
        <div key={index}>
          <label htmlFor={`semester${index + 1}`}>{`Semester ${index + 1}:`}</label>
          <input
            className='input-field'
            type="text"
            id={`semester${index + 1}`}
            name={`semester${index + 1}`}
            value={semester}
            onChange={(e) => handleSemesterNameChange(e, index)}
            placeholder={`Enter name of Semester ${index + 1}`}
            required
          />
        </div>
      ))}
      <button type="submit" className='submit-button'>Submit</button>
    </form>
  );
};

export default DepartmentForm;
