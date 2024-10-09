import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h2 className="mt-4">Student Dashboard</h2>
      <h3 className="mt-4">Enrolled Courses</h3>
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Description</th>
            <th>Assignments</th>
            <th>Course Details</th>
            <th>Grades</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td><button className="btn btn-info btn-sm">Submit Assignments</button></td>
              <td><button className="btn btn-info btn-sm">View Course Detail</button></td>
              <td>A</td> {/* Replace with actual grade data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
