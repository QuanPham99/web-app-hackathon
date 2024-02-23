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
import { formatDate } from '@/utils';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import AcceptProjectBtn from '@/components/buttons/AcceptProjectBtn';

function ProjectDetailPopup({ open, onClose, projectInfo }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      // Only close the modal if backdrop is clicked directly, not its children
      onClose();
    }
  };

  const deleteProject = async () => {
    try {
      const body = {
        // TO DO: replace with real professor_id
        project_id: projectInfo._id,
      };
      const res = await fetch('/api/projects', {
        method: 'DELETE',
        body: JSON.stringify({
          ...body,
        }),
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteAction = async () => {
    setSubmitting(true);
    await deleteProject();
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
          {session.user && session.user.role === 'prof' && (
            <Container style={{ paddingTop: '36px', paddingLeft: 0 }}>
              <h2>{projectInfo.company[0].company_name}</h2>
            </Container>
          )}
          <Container style={{ paddingTop: '18px', paddingLeft: 0 }}>
            <h2>{projectInfo.title}</h2>
            Date posted: {formatDate(projectInfo.date_posted)}
          </Container>

          {session.user && session.user.role === 'prof' && (
            <Stack direction='row' style={{ paddingTop: 16 }}>
              <Box paddingTop='16px' paddingRight='16px'>
                <AcceptProjectBtn
                  projectInfo={projectInfo}
                  closePopup={onClose}
                />
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
          )}
          {session.user && session.user.role === 'com' && (
            <Box paddingTop='16px' paddingRight='16px'>
              <Button
                disabled={submitting}
                onClick={deleteAction}
                type='submit'
                variant='contained'
                style={{ borderRadius: '24px' }}
              >
                {submitting ? 'Deleting...' : 'Delete Project'}
              </Button>
            </Box>
          )}
          <h3>Description:</h3>
          {projectInfo.description}
        </Box>
      </div>
    </Modal>
  );
}

export default ProjectDetailPopup;
