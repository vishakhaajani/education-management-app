import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    const storedEnrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setCourses(storedCourses);
    setEnrolledStudents(storedEnrolledCourses);
  }, []);

  const enrollStudent = (course) => {
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    const isAlreadyEnrolled = enrolledCourses.some(enrolled => enrolled.id === course.id);
    
    if (!isAlreadyEnrolled) {
      const updatedEnrolledCourses = [...enrolledCourses, course];
      localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolledCourses));
      setEnrolledStudents(updatedEnrolledCourses);
      alert(`${course.title} has been enrolled successfully!`);
    } else {
      alert('Student is already enrolled in this course.');
    }
  };

  return (
    <div className="container">
      <Navbar />
      <h2 className="mt-4">Teacher Dashboard</h2>
      <h3 className="mt-4">Enroll Students in Courses</h3>
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Description</th>
            <th>Assigned Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.teacher}</td>
              <td>
                <button className="btn btn-success btn-sm" onClick={() => enrollStudent(course)}>Enroll Student</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <h2 className="mt-4">Enrolled Students</h2>
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default TeacherDashboard;
