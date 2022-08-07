import { useEffect, useState } from "react";
import Components from "./components/components/Components";
import { useNotes, NotesProvider } from "./contextAndReducers/NotesProvider";
import { getAllNotes } from "./utils/services";
import ModalToAddNotes from "./components/modal/ModalToAddNotes";
import AllNotes from "./components/allNotes/AllNotes";
import Stack from "@mui/material/Stack";
import ModalToEditNotes from "components/modal/ModalToEditNotes";

// #2A2B2A
//text #F4F3EE

function App() {
  const { notesState, notesDispatch } = useNotes();

  return (
    <div className="App">
      <Stack spacing={2}>
        <Components />
        <div style={{ height: "40px", width: "10px" }}></div>
        <AllNotes />
      </Stack>
      {notesState?.isAddNotesModalOpen && <ModalToAddNotes />}
      {console.log(notesState.isEditNotesModalOpen)}
      {notesState?.isEditNotesModalOpen && <ModalToEditNotes />}
    </div>
  );
}

export default App;
