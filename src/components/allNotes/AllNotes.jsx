import React, { useEffect, useState } from "react";
import { useNotes } from "./../../contextAndReducers/NotesProvider";
import Notes from "./../notes/Notes";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import { getAllNotes } from "./../../utils/services";
import {
  doc,
  //   getDoc,
  getDocs,
  addDoc,
  getFirestore,
  updateDoc,
  collection,
  deleteDoc,
  onSnapshot,
} from "@firebase/firestore";
import app, { db } from "./../../firebase";
function AllNotes() {
  const { notesState, notesDispatch } = useNotes();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
  
    const getAllNotes = async (dispatch) => {
      try {
       
        onSnapshot(collection(db, "notes"), (data) => {
          // data.docs.forEach((item) => console.log(item.data()));
            
             setNotes(
               data.docs.map((item) => ({ ...item.data(), id: item.id }))
             );
          });
        }
        catch (error) {
        console.log(error);
      }
    };
    getAllNotes();
  }, []);
  return (
    <>
      <Typography>Pinned Notes</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          notes.map((note) => {
            if (note?.isPinned) return <Notes notesObj={note} key={note.id} />;
            else return <></>;
          })}
      </Grid>
      <Typography>Others</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        { notes.map((note) => {
          if (!note?.isPinned) return <Notes notesObj={note} key={note.id} />;
          else return <></>;
        })}
      </Grid>
    </>
  );
}

export default AllNotes;
