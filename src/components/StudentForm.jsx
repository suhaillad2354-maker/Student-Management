import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const newStudent = {
      id: Date.now(),
      name,
      age,
    };

    addStudent(newStudent);
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <input type="text" placeholder="Enter Name"value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input type="number" placeholder="Enter Age" value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
