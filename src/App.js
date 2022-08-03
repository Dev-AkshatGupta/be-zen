import { useEffect, useState } from "react";
import Components from "./components/components/Components";
import { useNotes, NotesProvider } from "./contextAndReducers/NotesProvider";
import { getAllNotes } from "./utils/services";

const notes=({children})=>{

}




function App() {
  // const [notes,setNotes]=useState();
  const { notesState, notesDispatch } = useNotes();
  useEffect(() => {
    getAllNotes(notesDispatch);
  }, []);
  return <div className="App">
  <Components/>
  </div>;
}

export default App;
