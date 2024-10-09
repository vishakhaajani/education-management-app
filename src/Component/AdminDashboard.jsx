import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const AdminDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: '', description: '', teacher: '' });

    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
        setCourses(storedCourses);
    }, []);

    const addCourse = () => {
        const updatedCourses = [...courses, { ...newCourse, id: Date.now() }];
        setCourses(updatedCourses);
        localStorage.setItem('courses', JSON.stringify(updatedCourses));
        setNewCourse({ title: '', description: '', teacher: '' });
        alert("Course added sucessfully!");
    };

    const deleteCourse = (id) => {
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
        localStorage.setItem('courses', JSON.stringify(updatedCourses));
        alert("Course delete sucessfully!");
    };

    return (
        <div className="container">
            <Navbar />
            <h2 className="mt-4">Admin Dashboard</h2>
            <div className="form d-flex justify-content-center align-items-center flex-column my-5">
                <h3 className="mt-4">Add New Course</h3>
                <div className="form-group col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Course Title"
                        value={newCourse.title}
                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Course Description"
                        value={newCourse.description}
                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Assigned Teacher"
                        value={newCourse.teacher}
                        onChange={(e) => setNewCourse({ ...newCourse, teacher: e.target.value })}
                    />
                </div>
                <button className="btn btn-primary my-3" onClick={addCourse}>Add Course</button>
            </div>

            <h2 className="mt-4">Course Management</h2>
            <table className="table table-bordered mt-2">
                <thead>
                    <tr>
                        <th>Title</th>
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
                                <button className="btn btn-danger btn-sm" onClick={() => deleteCourse(course.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
