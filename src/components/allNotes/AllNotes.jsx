import React, { useEffect, useState, useRef, useCallback } from "react";
import Notes from "./../notes/Notes";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import {
  collection,
  onSnapshot,
  limit,
  query,
  orderBy,
  startAfter,
} from "@firebase/firestore";
import { db } from "./../../firebase";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const loadingRef = useRef(null);

  useEffect(() => {
    try {
      const q = query(
        collection(db, "notes"),
        orderBy("time", "desc"),
        limit(6)
      );
      onSnapshot(q, (data) => {
        const notesData = data.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        setNotes(notesData);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getNotes = useCallback(async () => {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));

    if (pageNumber > 0 && notes[notes.length - 1]?.time) {
      try {
        const q = query(
          collection(db, "notes"),
          orderBy("time", "desc"),
          limit(6),
          startAfter(notes[notes.length - 1]["time"])
        );
        onSnapshot(q, (data) => {
          const notesData = data.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }));
          setNotes((prev) => [...prev, ...notesData]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [pageNumber]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((page) => page + 1);
        }
      },
      {
        root: document.querySelector("#app"),
        rootMargin: "0px",
        threshold: 1.0,
      }
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
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        spacing={2}
      >
        {notes.map((note) => {
          if (note?.isPinned && note?.title)
            return (
              // <Item>
              <Notes notesObj={note} key={note.id} />
              // </Item>
            );
          else return <></>;
        })}
      </Grid>
      <Typography>Others</Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
      >
        {notes.map((note) => {
          if (!note?.isPinned && note?.title)
            return <Notes notesObj={note} key={note.id} />;
          else return <></>;
        })}
      </Grid>
      <div className="loader" ref={loadingRef}>
        {/* <div className="loader" > */}
        <h3>Loading....</h3>
      </div>
    </>
  );
}

export default AllNotes;
