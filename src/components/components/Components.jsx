import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
const Components = () => {
  const PrimaryButton = styled(Button)(({ theme }) => ({
    "&.hover": {
      color: "",
    },

    "& .MuiSlider-thumb": {
      "&:hover, &.Mui-focusVisible": {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
      },
      "&.Mui-active": {
        boxShadow: `0px 0px 0px 14px ${alpha(
          theme.palette.success.main,
          0.16
        )}`,
      },
    },
  }));
  // #2A2B2A
  //text #F4F3EE
  return (
    <AppBar
      component="nav"
      sx={{ backgroundColor: "#f1f5f9", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { sm: "block" } }}
        >
          Notes
        </Typography>
        <Box sx={{ display: { sm: "block" } }}>
          <Button sx={{ backgroundColor: "#e2793c" }} variant={"contained"}>
            ADD NOTE
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Components;
 