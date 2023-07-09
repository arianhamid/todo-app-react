import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import {
  initialState,
  COMPLETE,
  ADD,
  EDIT,
  DELETE,
  RESET,
  tasksReducer,
} from "./Reducer";

const TodoApp = () => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const checkHandler = (todo) => {
    dispatch({ type: COMPLETE, todo });
  };

  const addHandler = (taskName) => {
    dispatch({ type: ADD, title: taskName });
  };
  const editHandler = (todo) => {
    dispatch({ type: EDIT, todo });
  };
  const deleteHandler = (todo) => {
    console.log(todo);
    dispatch({ type: DELETE, todo });
  };
  const resetHandler = (todo) => {
    console.log(todo);
    dispatch({ type: RESET });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTask addHandler={addHandler} />
      <TaskList
        state={state}
        onComplete={checkHandler}
        onEdit={editHandler}
        onDelete={deleteHandler}
        onReset={resetHandler}
      />
    </div>
  );
};

export default TodoApp;
