import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Notes = ({ notesObj }) => {
    // console.log(notesObj);
  return (
    <Grid>
      <Card sx={{ minWidth: 275, maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {notesObj.title}
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <Typography variant="body2">{notesObj.content}.</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <svg
              height="20"
              width="20"
              fill="none"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 3.74524H13.25"
                stroke="#e2793c"
                strokeLinecap="round"
              />
              <path
                d="M11.4907 3.74518H2.50506C2.36001 6.36772 2.36227 8.97003 2.75318 11.5761C2.8975 12.5382 3.72399 13.25 4.69687 13.25H9.29887C10.2718 13.25 11.0982 12.5382 11.2426 11.5761C11.6335 8.97003 11.6357 6.36772 11.4907 3.74518Z"
                fill="#f1f5f9"
                stroke="#e2793c"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.50186 3.74521V3.24601C4.50186 2.58402 4.76483 1.94916 5.23293 1.48106C5.70102 1.01297 6.33589 0.75 6.99787 0.75C7.65985 0.75 8.29472 1.01297 8.76281 1.48106C9.2309 1.94916 9.49388 2.58402 9.49388 3.24601V3.74521"
                stroke="#e2793c"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.50027 6.41864V10.5565"
                stroke="#e2793c"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.49548 6.41864V10.5565"
                stroke="#e2793c"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button size="small">
            {/* {notesObj.isPinned ? ( */}
            {notesObj.isPinned ? (
              <svg
                height="20"
                width="20"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.81311 1.54657C5.68174 2.67794 5.51675 4.96425 5.3989 5.78921L2.36337 5.99631C3.06376 8.77154 5.24681 10.9456 8.02022 11.6532L8.22733 8.61763C9.05229 8.49978 11.3386 8.33479 12.47 7.20342C14.9975 4.67591 9.34062 -0.98094 6.81311 1.54657Z"
                  fill="#e2793c"
                  stroke="#2a2b2a"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.40332 9.61328L0.802721 13.2139"
                  stroke="#2a2b2a"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                height="20"
                width="20"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.81311 1.54657C5.68174 2.67794 5.51675 4.96425 5.3989 5.78921L2.36337 5.99631C3.06376 8.77154 5.24681 10.9456 8.02022 11.6532L8.22733 8.61763C9.05229 8.49978 11.3386 8.33479 12.47 7.20342C14.9975 4.67591 9.34062 -0.98094 6.81311 1.54657Z"
                  fill="#f1f5f9"
                  stroke="#e2793c"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.40332 9.61328L0.802721 13.2139"
                  stroke="#e2793c"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Button>
          <Button size="small">
            <svg
              height="20"
              width="20"
              fill="none"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.9472 11.9715L12.4159 5.84704C13.4911 4.82904 13.4079 3.02696 12.2325 1.87139V1.87139C11.0846 0.743035 9.3341 0.665499 8.32235 1.6982L2.03007 8.12075C2.03007 8.12075 3.42395 8.67531 4.40351 9.63827C5.38308 10.6012 5.9472 11.9715 5.9472 11.9715Z"
                fill="#f1f5f9"
                fillRule="evenodd"
                stroke="rgba(226,121,60,0.7)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.52406 13.1143L5.94356 11.9767C5.94356 11.9767 5.38071 10.6059 4.40203 9.64207C3.42335 8.67822 2.02998 8.1224 2.02998 8.1224L0.868044 12.4525C0.766818 12.8297 1.14547 13.2117 1.52406 13.1143Z"
                fill="rgba(42,43,42,0.92)"
                stroke="rgba(226,121,60,0.7)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Notes;
