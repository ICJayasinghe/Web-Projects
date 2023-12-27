import React, { useState, useEffect } from 'react';

const EditStudent = ({ studentId }) => {
  const [studentData, setStudentData] = useState({
    name: '',
    age: '',
    gender: '',
  });

  useEffect(() => {

  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updating student:', studentData);
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={studentData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={studentData.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={studentData.gender}
          onChange={handleChange}
        />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
