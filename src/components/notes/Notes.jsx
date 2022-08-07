import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Delete from "./../icons/Delete";
import Pin from "./../icons/Pin";
import PinFilled from "./../icons/PinFilled";
import Pencil from "./../icons/Pencil";
import { deleteNotes, editNotes } from "utils/services";
import { useNotes } from "./../../contextAndReducers/NotesProvider";
const Notes = ({ notesObj }) => {
  const { notesDispatch } = useNotes();
  return (
    <Grid>
      <Card sx={{ minWidth: 275, maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {notesObj.title}
          </Typography>
          <Typography variant="body2">{notesObj.content}.</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              deleteNotes(notesObj);
            }}
          >
            <Delete />
          </Button>
          {/* <Button size="small"> */}
          {notesObj.isPinned ? (
            <Button
              size="small"
              onClick={() => {
                editNotes({ ...notesObj, isPinned: false });
              }}
            >
              <PinFilled />
            </Button>
          ) : (
            <Button
              size="small"
              onClick={() => {
                editNotes({ ...notesObj, isPinned: true });
              }}
            >
              <Pin />
            </Button>
          )}

          <Button
            size="small"
            onClick={() => {
              notesDispatch({ type: "EDIT_NOTES_MODAL", payload: notesObj.id });
            }}
          >
            <Pencil />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Notes;
