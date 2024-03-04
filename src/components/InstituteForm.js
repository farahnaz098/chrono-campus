import React, { useState } from 'react';


const InstituteForm = ({ onSubmit, onClose }) => {
  const [instituteName, setInstituteName] = useState('');
  const [numDepartments, setNumDepartments] = useState(0);
  const [departmentNames, setDepartmentNames] = useState([]);

  const handleInstituteNameChange = (e) => {
    setInstituteName(e.target.value);
  };

  const handleNumDepartmentsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumDepartments(num);
    setDepartmentNames(Array.from({ length: num }, (_, index) => `Department ${index + 1}`));
  };

  const handleDepartmentNameChange = (e, index) => {
    const updatedDepartments = [...departmentNames];
    updatedDepartments[index] = e.target.value;
    setDepartmentNames(updatedDepartments);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function with the necessary data
    onSubmit({ instituteName, departmentNames });

    // Close the modal
    onClose();
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className='Institute-Form'>
      <h3>Institute Details</h3>
      <div>
        <label htmlFor="instituteName" className='instituteName'>Institute Name:</label>
        <input
          className='input-field'
          type="text"
          id="instituteName"
          name="instituteName"
          value={instituteName}
          onChange={handleInstituteNameChange}
          placeholder="Enter institute name"
          required
        />
      </div>
      <div>
        <label htmlFor="numDepartments">Number of Departments:</label>
        <input
          className='input-field'
          type="number"
          id="numDepartments"
          name="numDepartments"
          value={numDepartments}
          onChange={handleNumDepartmentsChange}
          placeholder="Enter number of departments"
          required
        />
      </div>
      {departmentNames.map((department, index) => (
        <div key={index}>
          <label htmlFor={`department${index + 1}`}>{`Department ${index + 1}:`}</label>
          <input
            className='input-field'
            type="text"
            id={`department${index + 1}`}
            name={`department${index + 1}`}
            value={department}
            onChange={(e) => handleDepartmentNameChange(e, index)}
            placeholder={`Enter name of Department ${index + 1}`}
            required
          />
        </div>
      ))}
      <button type="submit" className='submit-button'>Submit</button>
    </form>
    
     </div>
  );
};

export default InstituteForm;