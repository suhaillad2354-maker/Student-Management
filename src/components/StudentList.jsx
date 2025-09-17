import React, { useState } from "react";

const StudentList = ({ students, updateStudent, deleteStudent }) => {
  const [editGrade, setEditGrade] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");

  const handleEdit = (student) => {
    setEditName(student.name);
    setEditAge(student.age);
    setEditGrade(student.id);
  };

  const handleSave = (id) => {
    updateStudent({ id, name: editName, age: editAge });
    setEditGrade(null);
  };

  return (
    <table border="2" cellPadding="15" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="3" style={{ textAlign: "center" }}>
              No students added yet
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>
              <td>
                {editGrade === student.id ? (
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>
                {editGrade === student.id ? (
                  <input
                    type="tel"
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                  />
                ) : (
                  student.age
                )}
              </td>
              <td>
                {editGrade === student.id ? (
                  <button onClick={() => handleSave(student.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(student)}>Edit</button>
                )}
                <button
                  onClick={() => deleteStudent(student.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentList;
