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
        console.log(action.payload);
        return { ...state, notes: action.payload, isLoading: false };
      case "ADD_TO_NOTES_MODAL":
        return { ...state, isAddNotesModalOpen: !state.isAddNotesModalOpen };
      default:
        break;
    }
  };
  const [notesState, notesDispatch] = useReducer(reducer, {
    notes: [],
    isLoading: true,
    isAddNotesModalOpen: false,
  });

  return (
    <NotesContextProvider.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContextProvider.Provider>
  );
};

export { NotesProvider, useNotes };
