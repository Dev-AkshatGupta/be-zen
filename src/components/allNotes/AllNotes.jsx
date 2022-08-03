import React from "react";
import { useNotes } from "./../../contextAndReducers/NotesProvider";
import Notes from "./../notes/Notes";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
function AllNotes() {
  const { notesState, notesDispatch } = useNotes();
  return (
    <>
      <Typography>Pinned Notes</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {notesState.notes.map((note) => {
          if (note.isPinned) return <Notes notesObj={note} />;
          else return <></>
        })}
      </Grid>
      <Typography>Others</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {notesState.notes.map((note) => {
          if (!note.isPinned) return <Notes notesObj={note} />;
          else return <></>
        })}
      </Grid>
    </>
  );
}

export default AllNotes;
