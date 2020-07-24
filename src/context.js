import React from "react";
export const AppContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TODOLIST":
      return { ...state, todoList: action.todoList };
    case "LOAD_SINGLE_TODO":
      return { ...state, activeToDoItem: action.todo };
    default:
      return state;
  }
};
export const AppProvider = ({ children }) => {
  const [data, dispatch] = React.useReducer(reducer, {
    todoList: [],
    activeToDoItem: { id: 0 },
  });
  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};