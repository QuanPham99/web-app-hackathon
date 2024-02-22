import React from "react";
import { Modal, Box, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { addProject } from "../../database/company";
function AddProjectPopUp({ open, onClose, company }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      // Only close the modal if backdrop is clicked directly, not its children
      onClose();
    }
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div onClick={handleBackdropClick}>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            //   p: 4,
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
            width: 800,
            maxHeight: "100%",
            overflowY: "auto",
            borderRadius: "16px",
          }}
        >
          {/* Your pop-up content */}
          <IconButton
            aria-label='Close'
            sx={{ position: "absolute", top: 4, right: 8 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <center>
            <h2>Create project</h2>
          </center>
          <p id='modal-project-title'>Project Title</p>
          <TextField
            fullWidth
            id='outlined-basic'
            label="What's the project called?"
            variant='outlined'
            style={{ paddingBottom: "16px" }}
          />

          <p id='modal-project-description'>Project Description</p>
          <TextField
            id='standard-multiline-static'
            label='Describe the project here'
            multiline
            fullWidth
            rows={6}
            variant='filled'
          />

          <center>
            <Box paddingTop='16px'>
              <Button
                onClick={() => {
                  setShowModal(true);
                  console.log(showModal);
                }}
                variant='contained'
                style={{ borderRadius: "24px" }}
              >
                Create Project
              </Button>
            </Box>
          </center>
        </Box>
      </div>
    </Modal>
  );
}

export default AddProjectPopUp;
