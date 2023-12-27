import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('your_api_endpoint')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className='container'>
      <h3>Available Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
