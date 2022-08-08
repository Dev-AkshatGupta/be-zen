import React, { useEffect, useState, useRef } from "react";
import Notes from "./../notes/Notes";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "@firebase/firestore";
import { db } from "./../../firebase";
function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const loadingRef = useRef(null);
  useEffect(() => {
    const getAllNotes = async (dispatch) => {
      try {
        const q = query(
          collection(db, "notes"),
          // orderBy("time", "desc"),
          limit(6)
        );
        // onSnapshot(collection(db, "notes"), (data) => {
        onSnapshot(q, (data) => {
          const notesData = data.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }));
          setNotes(notesData);
          console.log(notesData);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAllNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  // observing dom node
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((page) => page + 1);
        }
      },
      { threshold: 0.5 }
    );
    if (loadingRef.current) observer.observe(loadingRef.current);

    return () => {
      if (observer.current) {
        observer.unobserve(observer.current);
      }
    };
  }, [loadingRef]);
  return (
    <>
      <Typography>Pinned Notes</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {notes.map((note) => {
          if (note?.isPinned) return <Notes notesObj={note} key={note.id} />;
          else return <></>;
        })}
      </Grid>
      <Typography>Others</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {notes.map((note) => {
          if (!note?.isPinned) return <Notes notesObj={note} key={note.id} />;
          else return <></>;
        })}
      </Grid>
      <div className="loader" ref={loadingRef}>
        <h3>Loading....</h3>
      </div>
    </>
  );
}

export default AllNotes;
