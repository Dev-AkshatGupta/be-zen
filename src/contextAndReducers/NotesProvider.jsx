import React, { createContext, useContext, useReducer } from "react";
const NotesContextProvider = createContext();
const useNotes = () => useContext(NotesContextProvider);
const NotesProvider = ({ children }) => {
  const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "ADD_TO_NOTES_MODAL":
        return { ...state, isAddNotesModalOpen: !state.isAddNotesModalOpen };
      case "EDIT_NOTES_MODAL":
        return {
          ...state,
          id: action.payload.id,
          content: action.payload.content,
          title: action.payload.title,
          isEditNotesModalOpen: !state.isEditNotesModalOpen,
        };
      default:
        return state;
    }
  };
  const [notesState, notesDispatch] = useReducer(reducer, {
    isAddNotesModalOpen: false,
    isEditNotesModalOpen: false,
    id: "",
    content: "",
    title: "",
  });

  return (
    <NotesContextProvider.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContextProvider.Provider>
  );
};

export { NotesProvider, useNotes };
