import React, { useState, useEffect } from 'react';

const DepartmentForm = ({ firstDepartmentName, numSemesters }) => {
    const [departmentName, setDepartmentName] = useState(firstDepartmentName || ''); // Assign initial department name or an empty string if not provided
    const [semesterNames, setSemesterNames] = useState([]);

    useEffect(() => {
        // Generate semester names based on numSemesters
        setSemesterNames(Array.from({ length: numSemesters }, (_, index) => `Semester ${index + 1}`));
    }, [numSemesters]);

    const handleDepartmentNameChange = (e) => {
        setDepartmentName(e.target.value);
    };

    const handleNumSemestersChange = (e) => {
        // You can handle the change if needed, but since numSemesters is a prop,
        // it's expected to be managed from the parent component.
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the department name and semester names
        console.log('Department Name:', departmentName);
        console.log('Semester Names:', semesterNames);
    };

    return (
        <div className="Department-Form-Container">
            <h3>Department Details</h3>
            <form onSubmit={handleSubmit} className='Department-Form'>
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
                            // No need for onChange as it's not editable
                            readOnly
                        />
                    </div>
                ))}
                <button type="submit" className='submit-button'>Submit</button>
            </form>
        </div>
    );
};

export default DepartmentForm;
