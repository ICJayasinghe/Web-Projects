import React, { useState } from 'react';

const Enrollment = ({ studentId }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleEnroll = () => {
    console.log('Enrolling student in courses:', selectedCourses);
  };

  return (
    <div className="container">
      <h3>Enroll in Courses</h3>
      <button onClick={handleEnroll}>Enroll</button>
    </div>
  );
}

export default Enrollment;
