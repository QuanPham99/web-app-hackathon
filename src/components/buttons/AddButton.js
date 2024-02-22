"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import AddProjectPopUp from "../popup/AddProjectPopUp";
function AddButton() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = (event, reason) => {
    // console.log(reason);
    if (reason !== "backdropClick") {
      setShowModal(false);
    }
  };

  const popUp = (
    <div>
      <AddProjectPopUp open={showModal} onClose={handleClose} />
    </div>
  );
  return (
    // <ThemeProvider theme={theme}>
    <Box paddingRight='16px'>
      <Button
        onClick={() => {
          setShowModal(true);
          //   console.log(showModal);
        }}
        variant='contained'
        style={{ borderRadius: "24px" }}
      >
        Add Project
      </Button>
      {showModal && popUp}
    </Box>
    // </ThemeProvider>
  );
}

export default AddButton;
