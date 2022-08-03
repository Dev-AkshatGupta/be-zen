import React, { createContext, useContext, useReducer } from "react";
const NotesContextProvider = createContext();
const useNotes = () => useContext(NotesContextProvider);
const NotesProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        break;
      case "DELETE":
        break;
      case "EDIT":
        break;
      case "STORE":
        return { ...state, notes: action.payload, isLoading: false };
      default:
        break;
    }
  };
  const [notesState, notesDispatch] = useReducer(reducer, {
    notes: [],
    isLoading: true,
  });

  return (
    <NotesContextProvider.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContextProvider.Provider>
  );
};

export { NotesProvider, useNotes };
