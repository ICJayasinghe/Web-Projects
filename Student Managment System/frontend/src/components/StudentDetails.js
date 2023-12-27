import React from 'react';

const StudentDetails = ({ student }) => {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Gender: {student.gender}</p>
    </div>
  );
}

export default StudentDetails;
