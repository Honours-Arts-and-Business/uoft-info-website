import { useState } from "react";

const CourseForm = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="course-form">
      <form className="create">
        <h3>Add new entry</h3>
        <label></label>
        <input></input>
      </form>
    </div>
  );
};
