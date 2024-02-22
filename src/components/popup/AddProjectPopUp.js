import React from 'react';
import { Modal, Box, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
function AddProjectPopUp({ open, onClose, company }) {
  const [submitting, setSubmitting] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    title: undefined,
    description: undefined,
  });
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      // Only close the modal if backdrop is clicked directly, not its children
      onClose();
    }
  };
  const handleChange = (event) => {
    setProjectInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const addProjectToDatabase = async () => {
    try {
      const body = {
        // TO DO: replace with real value
        company_id: 'com_1',
        description: projectInfo.description,
        title: projectInfo.title,
        professor_id: undefined,
        status: 'posted',
        date_posted: new Date(),
        topic: ['Demo'],
      };
      const res = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify({
          ...body,
        }),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(projectInfo);
    await addProjectToDatabase();
    onClose();
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
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            //   p: 4,
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 4,
            width: 800,
            maxHeight: '100%',
            overflowY: 'auto',
            borderRadius: '16px',
          }}
        >
          {/* Your pop-up content */}
          <IconButton
            aria-label='Close'
            sx={{ position: 'absolute', top: 4, right: 8 }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <center>
            <h2>Create project</h2>
          </center>
          <p id='modal-project-title'>Project Title</p>
          <form
            onChange={handleChange}
            onSubmit={handleFormSubmit}
            method='post'
          >
            <TextField
              fullWidth
              id='outlined-basic'
              label="What's the project called?"
              variant='outlined'
              name='title'
              style={{ paddingBottom: '16px' }}
            />

            <p id='modal-project-description'>Project Description</p>
            <TextField
              id='standard-multiline-static'
              label='Describe the project here'
              multiline
              fullWidth
              rows={6}
              variant='filled'
              name='description'
            />

            <center>
              <Box paddingTop='16px'>
                <Button
                  disabled={submitting}
                  type='submit'
                  variant='contained'
                  style={{ borderRadius: '24px' }}
                >
                  {submitting ? 'Creating...' : 'Create Project '}
                </Button>
              </Box>
            </center>
          </form>
        </Box>
      </div>
    </Modal>
  );
}

export default AddProjectPopUp;
