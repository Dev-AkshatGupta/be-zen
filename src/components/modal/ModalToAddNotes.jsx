import React,{useState} from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button, Stack } from "@mui/material";
const ModalToAddNotes = ({ children }) => {
  const [value, setValue] = useState({ budget: 0, endDate: "" });
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
          Add Project
        </Typography>
        <Typography id="server-modal-description" sx={{ pt: 2 }}>
          Add details of the Project.
        </Typography>
        <Stack spacing={2}>
          <TextField
            id="standard-basic"
            label="Project Budget"
            variant="standard"
            onChange={(e) => {
              setValue((prev) => ({ ...prev, budget: Number(e.target.value) }));
            }}
          />
          <input
            type="date"
            id="start"
            name="trip-start"
            value={value.endDate}
        
            onChange={(e) => {
              setValue((prev) => ({ ...prev, endDate: e.target.value }));
            }}
          ></input>
          <Button
            variant="outlined"
            onClick={() => {
            }}
          >
            Create the Project
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
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
