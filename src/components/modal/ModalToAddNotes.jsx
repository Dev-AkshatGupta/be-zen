import React,{useState} from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNotes} from "./../../contextAndReducers/NotesProvider";
import { TextField, Button, Stack } from "@mui/material";
const ModalToAddNotes = ({ children }) => {
  const [value, setValue] = useState({ content: "", title: "" });
  const { notesState, notesDispatch } = useNotes();
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      sx={{
        display: "flex",
        p: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        notesDispatch({ type: "ADD_TO_NOTES_MODAL" });
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: (theme) => theme.shadows[5],
          p: 4,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Typography id="server-modal-title" variant="h6" component="h2">
          Add Notes
        </Typography>

        <Stack spacing={2}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            value={value.title}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, title: Number(e.target.value) }));
            }}
          />
          <TextField
            id="standard-basic"
            label="content"
            variant="standard"
            value={value.content}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, content: e.target.value }));
            }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              notesDispatch({ type: "ADD_TO_NOTES_MODAL" });
            }}
          >
            Create the Note
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              notesDispatch({ type: "ADD_TO_NOTES_MODAL" });
            }}
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalToAddNotes;
