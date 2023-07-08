import { useState } from "react";

const AddTask = ({ addHandler }) => {
  const [taskName, setTaskName] = useState("");
  return (
    <>
      <input
        style={{ width: "30%", margin: "0.5rem", background: "#fff" }}
        placeholder="Task title"
        type="text"
        value={taskName}
        id="title"
        name="title"
        className="form-input"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <button
        className="btn"
        onClick={() => {
          if (taskName) {
            addHandler(taskName);
            setTaskName("");
          }
        }}
      >
        Add Task
      </button>
      {taskName ? (
        ""
      ) : (
        <p
          className="text-small"
          style={{ margin: "0", color: "var(--red-dark)" }}
        >
          Please Write a Task!!!
        </p>
      )}
    </>
  );
};

export default AddTask;
