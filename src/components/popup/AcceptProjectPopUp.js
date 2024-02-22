import React from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  IconButton,
  Container,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function formatDate(date) {
  // Get the month, day, and year from the Date object
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const day = date.getDate();
  const year = date.getFullYear();

  // Ensure that single-digit days and months are prefixed with a '0'
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  // Return the formatted date string
  return `${formattedMonth}/${formattedDay}/${year}`;
}
function AcceptProjectPopUp({ open, onClose, projectInfo }) {
  const [submitting, setSubmitting] = useState(false);
  console.log(projectInfo);
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
            position: 'absolute',
            top: '50%',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
            width: 800,
            // maxHeight: '100%',
            height: 750,
            overflowY: 'auto',
            borderRadius: '8px',
          }}
        >
          {/* Your pop-up content */}
          <IconButton
            aria-label='Close'
            sx={{ position: 'absolute', top: 4, left: 8 }}
            onClick={onClose}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Container style={{ paddingTop: '36px', paddingLeft: 0 }}>
            <h2>{projectInfo.title}</h2>
            Date posted: {formatDate(projectInfo.date_posted)}
          </Container>
          <Stack direction='row' style={{ paddingTop: 16 }}>
            <Box paddingTop='16px' paddingRight='16px'>
              <Button
                disabled={submitting}
                type='submit'
                variant='contained'
                style={{ borderRadius: '24px' }}
              >
                {submitting ? 'Accepting...' : 'Accept '}
              </Button>
            </Box>
            <Box paddingTop='16px'>
              <Button
                disabled={submitting}
                type='submit'
                variant='outlined'
                style={{ borderRadius: '24px' }}
              >
                Save Project
              </Button>
            </Box>
          </Stack>
          <h3>Description:</h3>
          {projectInfo.description}
        </Box>
      </div>
    </Modal>
  );
}

export default AcceptProjectPopUp;
