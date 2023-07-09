import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const initialState = {
  todos: [
    {
      id: 1,
      title: "shopping",
      done: false,
    },
    {
      id: 2,
      title: "reading",
      done: false,
    },
    {
      id: 3,
      title: "gaming",
      done: false,
    },
  ],
  query: "",
};

const COMPLETE = "COMPLETE";
const ADD = "ADD";
const EDIT = "EDIT";
const DELETE = "DELETE";
const RESET = "RESET";
let initId = 4;

const tasksReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "COMPLETE":
      console.log(action);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todo.id) return action.todo;
          else {
            return todo;
          }
        }),
      };
    case ADD:
      console.log(action);
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: initId++, title: action.title, done: false },
        ],
      };
    case EDIT:
      console.log(action);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.todo.id) return action.todo;
          else {
            return todo;
          }
        }),
      };
    case DELETE:
      
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.todo.id;
        }),
      };
    case RESET:
      return initialState;

    default:
      return state;
  }
};

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
