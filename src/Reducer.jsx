export const initialState = {
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
export const COMPLETE = "COMPLETE";
export const ADD = "ADD";
export const EDIT = "EDIT";
export const DELETE = "DELETE";
export const RESET = "RESET";
let initId = 4;

export const tasksReducer = (state, action) => {
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
