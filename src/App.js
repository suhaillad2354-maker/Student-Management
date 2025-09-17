import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);


  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h1>Student Management Dashboard</h1>
      <StudentForm addStudent={addStudent} />
      <StudentTable students={students}
        updateStudent={updateStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default App;
