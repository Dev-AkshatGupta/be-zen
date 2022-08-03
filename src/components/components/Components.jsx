import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNotes } from "./../../contextAndReducers/NotesProvider";
import { alpha, styled } from "@mui/material/styles";
const Components = () => {
  const PrimaryButton = styled(Button)(({ theme }) => ({
    "&.hover": {
      color: " #2A2B2A",
    },
  }));
  // #2A2B2A
  //text #F4F3EE
  const { notesState, notesDispatch } = useNotes();
  return (
    <AppBar
      component="nav"
      sx={{ backgroundColor: "#f1f5f9", boxShadow: "none" }}
    >
      <Toolbar>
        <img src={require("./../../assets/pencil.png")} alt="logo" />
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, display: { sm: "block" }, color: " #2A2B2A" }}
        >
          Notes
        </Typography>
        <Box sx={{ display: { sm: "block" } }}>
          <Button
            sx={{
              backgroundColor: "#e2793c",
              ":hover": {
                bgcolor: "#2A2B2A",
                color: "#F4F3EE",
              },
            }}
            variant={"contained"}
            onClick={() => {
              notesDispatch({ type: "ADD_TO_NOTES_MODAL" });
            }}
          >
            ADD NOTE
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Components;
