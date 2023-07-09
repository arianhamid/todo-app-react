import React, { useState } from "react";

const TaskList = ({ state, onComplete, onEdit, onDelete, onReset }) => {
  return (
    <form className="form" style={{ marginTop: "1.5rem" }}>
      {state.todos.length < 1 ? (
        <button className="btn" onClick={onReset}>
          Reset List
        </button>
      ) : (
        ""
      )}
      {state.todos.map((todo) => (
        <div key={todo.id} className="form-row">
          <Task
            todo={todo}
            onComplete={onComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </form>
  );
};

const Task = ({ todo, onComplete, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => onEdit({ ...todo, title: e.target.value })}
        />
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setIsEditing(false);
            console.log(e);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span
          style={{ width: "50%", paddingRight: "6rem", paddingLeft: "0.5rem" }}
        >
          {todo.title}
        </span>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            setIsEditing(true);
            console.log(e);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label className="form-label">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => onComplete({ ...todo, done: e.target.checked })}
      />
      {taskContent}
      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </label>
  );
};
export default TaskList;
