import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button, Stack } from "@mui/material";
import { editNotes } from "./../../utils/services";
import { useNotes } from "./../../contextAndReducers/NotesProvider";
const ModalToEditNotes = () => {
  const { notesState, notesDispatch } = useNotes();
  const [value, setValue] = useState({
    content: "",
    title: "",
    isPinned: false,
    id: notesState.id,
  });
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
        notesDispatch({ type: "EDIT_NOTES_MODAL", id: "" });
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
        <Typography variant="h6" component="h2">
          Edit Project
        </Typography>
        <Typography sx={{ pt: 2 }}>
          You can edit details of the Project.
        </Typography>
        <Stack spacing={2}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            value={value.title}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, title: e.target.value }));
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
              notesDispatch({ type: "EDIT_NOTES_MODAL", payload: "" });
              editNotes(value);
            }}
          >
            Create the Note
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              // notesDispatch({ type: "Edit_NOTES_MODAL", payload: "" });
              console.log("edited clicked modal");
              notesDispatch({
                type: "EDIT_NOTES_MODAL",
                payload: "",
              });
            }}
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalToEditNotes;
