import React,{createContext,useContext} from 'react';
const NotesContextProvider=createContext();
const useNotes=()=>useContext(NotesContextProvider);
const NotesProvider = ({children}) => {

  return (
    <NotesContextProvider.Provider>
      {children}
    </NotesContextProvider.Provider>
  )
}

export {NotesProvider,useNotes};
